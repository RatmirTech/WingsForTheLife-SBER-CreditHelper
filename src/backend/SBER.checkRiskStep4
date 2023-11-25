# -*- coding: utf-8 -*-
from flask import Flask
from flask_restful import Resource, reqparse, Api
import json
import random
app = Flask(__name__)
api = Api(app)





def getRandomMvdData(passportSeries, passportNumber):
	mvdData = [
	# // Среди недействительных не значится
	{
	"status": 200,
	"result": 1,
	"info": "По Вашему запросу о действительности паспорта РФ {passportSeries} № {passportNumber} получен ответ о том, что данный паспорт «Cреди недействительных не значится».",
		"inquiry": {
		"price": 0.8,
		"balance": 100462.11, 
		"speed": 1, 
		"attempts": 1 
	}
	},

	# // Не действителен (ИЗЬЯТ, УНИЧТОЖЕН)
	{
	"status": 200,
	"result": 0,
	"info": "По Вашему запросу о действительности паспорта РФ {passportSeries} № {passportNumber} получен ответ о том, что данный паспорт «Не действителен Не действителен (ИЗЬЯТ, УНИЧТОЖЕН)».",
		"inquiry": {
		"price": 0.8,
		"balance": 100462.11, 
		"speed": 1, 
		"attempts": 1
	}
	},

	# // Не действителен (ТЕХНИЧЕСКИЙ БРАК)
	{
	"status": 200,
	"result": 0,
	"info": "По Вашему запросу о действительности паспорта РФ {passportSeries} № {passportNumber} получен ответ о том, что данный паспорт «Не действителен (ТЕХНИЧЕСКИЙ БРАК)».",
		"inquiry": {
		"price": 0.8, 
		"balance": 100462.11, 
		"speed": 1, 
		"attempts": 1 
	}
	},

	# // Не действителен (ЗАМЕНЕН НА НОВЫЙ)
	{
	"status": 200,
	"result": 0,
	"info": "По Вашему запросу о действительности паспорта РФ {passportSeries} № {passportNumber} получен ответ о том, что данный паспорт «Не действителен (ЗАМЕНЕН НА НОВЫЙ)».",
		"inquiry": {
		"price": 0.8,
		"balance": 100462.11, 
		"speed": 1, 
		"attempts": 1 
	}
	},

	# // Не действителен (УТРАТА ПАСПОРТА)
	{
	"status": 200,
	"result": 0,
	"info": "По Вашему запросу о действительности паспорта РФ {passportSeries} № {passportNumber} получен ответ о том, что данный паспорт «Не действителен (ЗАМЕНЕН НА НОВЫЙ)».",
		"inquiry": {
		"price": 0.8, 
		"balance": 100462.11, 
		"speed": 1, 
		"attempts": 1 
	}
	},

	# // Не действителен (В СВЯЗИ СО СМЕРТЬЮ ВЛАДЕЛЬЦА)
	{
	"status": 200,
	"result": 0,
	"info": "По Вашему запросу о действительности паспорта РФ {passportSeries} № {passportNumber} получен ответ о том, что данный паспорт «Не действителен (В СВЯЗИ СО СМЕРТЬЮ ВЛАДЕЛЬЦА)».",
		"inquiry": {
		"price": 0.8, 
		"balance": 100462.11, 
		"speed": 1, 
		"attempts": 1 
	}
	},

	# // Не действителен (ЧИСЛИТСЯ В РОЗЫСКЕ)
	{
	"status": 200,
	"result": 0,
	"info": "По Вашему запросу о действительности паспорта РФ {passportSeries} № {passportNumber} получен ответ о том что данный паспорт «Не действителен (ЧИСЛИТСЯ В РОЗЫСКЕ)».",
		"inquiry": {
		"price": 0.8, 
		"balance": 100462.11, 
		"speed": 1, 
		"attempts": 1 
	}
	}
	] 
	return random.choices(mvdData, [9, 1, 2, 3, 4, 1, 5])[0]


def getRandomBankrut(passportSeries, passportNumber):
    bankrutData = [
        {	"result": 0,
			"category":{
            "title":"Категория",
            "value":"Физическое лицо"
			},
			"region":{
				"title":"Регион",
				"value":"Республика Татарстан"
			},
			"arbitrManagerFio":{
				"title":"Арбитражный управляющий",
				"value":"Мнеян Эрмине Арменаковна"
			},
			"address":{
				"title":"Адрес",
				"value":"г. Казань, ул.Центральная, 64"
			},
			"lastLegalCasenNumber":{
				"title":"Номер судебного дела",
				"value":f"А72-{random.randint(10000, 99999)} {random.randint(1000, 9999)}"
			},
			"status":{
				"title":"Статус",
				"value":"Производство по делу завершено"
			},
			"description":{
				"title":"Описание",
				"value":"Производство по делу завершено"
			},
			"updateDate":{
				"title":"Последнее обновление",
				"value":"2022-06-06T00:01:01.247"
			},
			"isActive":{
				"title":"Статус дела (true - в производстве, false - завершено)",
				"value":random.choice([True, False])
			}
		
		},
        {	"result":1,
			"status":200, 
			"num":0, 
			"message":"Информация не найдена",
			"inquiry":{
			"price":"0.6",
			"balance":18459.62,
			"speed":0,
			"attempts":1
		}} ]
    return random.choices(bankrutData, [1, 9])[0]

def getRandomIspol(name, surname, pedestrian):
	ispolData = [
      {	
		"result": 0,
		"status": 200, 
		"countAll":"53",
		"pagesAll":"3", 
		"count": 1, 
		"totalLoadedPage": 3, 
		"onlyActual":1, 
		"records": [
			{
			"debtor_name": f"{surname} {name} {pedestrian}", 
			"debtor_address": "РОССИЯ *********************", 
			"debtor_dob": "31.03.****", 
			"process_title": "197****/21/*****-ИП", 
			"process_date": "26.11.2021",
			"recIspDoc": "Судебный приказ от 27.07.2021 № 2А-1****/**** СУДЕБНЫЙ УЧАСТОК № **** *********** ВНУТРИГОРОДСКОГО ОКРУГА Г. *******",
			"subject": "Взыскание налогов и сборов, включая пени (кроме таможенных)",
			"sum": "142.12",
			"document_organization": "ОСП по ************* г. **** *****, г. *************", 
			"document_type": "Взыскание налогов и сборов, включая пени (кроме таможенных): 142.12 руб. ", 
			"officer_name": "********* О. О.",
			"officer_phones": [
				[
				"+786*********"
				]
			],
			"inquiry": {
			"price": 0.8,
			"balance": 100462.11, 
			"speed": 1, 
			"attempts": 1 
			}
				}
			]
		},
      {	"result": 1,
		"status":200,
		"count":0,
		"message":"В базе ФССП отсутствует",
		"inquiry":
		{
			"price":1.4,
			"balance": 100462.11,
			"speed":3,
			"attempts":1
		}
		}
      ]
	return random.choices(ispolData, [2, 8])[0]

class Risk(Resource):
	def post(self):
		parser = reqparse.RequestParser()
		parser.add_argument("Name", type=str)
		parser.add_argument("Surname", type=str)
		parser.add_argument("Pedestrian", type=str)
		parser.add_argument("passportSeries", type=int)
		parser.add_argument("passportNumber", type=int)
		parser.add_argument("date", type=str)
		params = parser.parse_args()

		#Поиск по исполнительному банкротству 
		#Заглушка
		randomMvdSearching = getRandomMvdData(passportSeries=params['passportSeries'], passportNumber=params['passportNumber'])
		randomBankrutSearching = getRandomBankrut(passportSeries=params['passportSeries'], passportNumber=params['passportNumber'])
		randomIspolSearching = getRandomIspol(name=params['Name'], surname=params['Surname'], pedestrian=params['Pedestrian'])
		if all([randomMvdSearching['result'], randomBankrutSearching['result'], randomIspolSearching['result']]): return [json.dumps({'status': 200,'problems': 0}), json.dumps(randomMvdSearching, ensure_ascii=False), json.dumps(randomBankrutSearching, ensure_ascii=False), json.dumps(randomIspolSearching, ensure_ascii=False)]
		else:
			return [json.dumps({'status': 200,
                      			'problems': 1,
                         }), json.dumps(randomMvdSearching, ensure_ascii=False), json.dumps(randomBankrutSearching, ensure_ascii=False), json.dumps(randomIspolSearching, ensure_ascii=False)]

api.add_resource(Risk, "/sber-getRisk", "/sber-getRisk/")
if __name__ == "__main__":
	app.run(port=8081)

#curl -H "Content-Type: application/json" --data @data.json http://localhost:8081/sber-getRisk
