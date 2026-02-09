import json
import os
import requests
import boto3

def handler(event: dict, context) -> dict:
    '''Обработка заявок на гадание с отправкой в Telegram'''
    
    method = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    data = json.loads(event.get('body', '{}'))
    
    name = data.get('name', '')
    age = data.get('age', '')
    question = data.get('question', '')
    contact = data.get('contact', '')
    receipt_base64 = data.get('receipt', '')
    
    if not all([name, age, question, contact]):
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Заполните все обязательные поля'})
        }
    
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Telegram не настроен'})
        }
    
    message_text = f"""🔮 Новая заявка на гадание

👤 Имя: {name}
🎂 Возраст: {age}
❓ Вопрос: {question}
📱 Обратная связь: {contact}"""
    
    telegram_url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    
    try:
        response = requests.post(telegram_url, json={
            'chat_id': chat_id,
            'text': message_text,
            'parse_mode': 'HTML'
        })
        
        if not response.ok:
            raise Exception(f"Telegram API error: {response.text}")
        
        if receipt_base64:
            import base64
            receipt_data = base64.b64decode(receipt_base64)
            
            s3 = boto3.client('s3',
                endpoint_url='https://bucket.poehali.dev',
                aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
                aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
            )
            
            filename = f"receipts/{context.request_id}.jpg"
            s3.put_object(
                Bucket='files',
                Key=filename,
                Body=receipt_data,
                ContentType='image/jpeg'
            )
            
            receipt_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{filename}"
            
            requests.post(
                f"https://api.telegram.org/bot{bot_token}/sendPhoto",
                json={
                    'chat_id': chat_id,
                    'photo': receipt_url,
                    'caption': '📄 Чек об оплате'
                }
            )
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка отправлена! Свяжемся с вами в ближайшее время.'
            })
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Ошибка отправки: {str(e)}'})
        }
