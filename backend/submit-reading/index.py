import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
import base64

def handler(event: dict, context) -> dict:
    '''Обработка заявок на гадание с отправкой на email'''
    
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
    
    smtp_password = os.environ.get('SMTP_PASSWORD')
    
    if not smtp_password:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Email не настроен'})
        }
    
    email_from = 'palaris@inbox.ru'
    email_to = 'palaris@inbox.ru'
    
    msg = MIMEMultipart()
    msg['From'] = email_from
    msg['To'] = email_to
    msg['Subject'] = f'🔮 Новая заявка на гадание от {name}'
    
    body = f"""Новая заявка на гадание:

Имя: {name}
Возраст: {age}
Вопрос: {question}
Обратная связь: {contact}

---
Письмо отправлено автоматически с сайта"""
    
    msg.attach(MIMEText(body, 'plain', 'utf-8'))
    
    if receipt_base64:
        try:
            receipt_data = base64.b64decode(receipt_base64)
            part = MIMEBase('application', 'octet-stream')
            part.set_payload(receipt_data)
            encoders.encode_base64(part)
            part.add_header('Content-Disposition', f'attachment; filename=чек_{name}.jpg')
            msg.attach(part)
        except Exception:
            pass
    
    try:
        server = smtplib.SMTP_SSL('smtp.mail.ru', 465)
        server.login(email_from, smtp_password)
        server.send_message(msg)
        server.quit()
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Заявка отправлена! Свяжусь с вами в ближайшее время.'
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
