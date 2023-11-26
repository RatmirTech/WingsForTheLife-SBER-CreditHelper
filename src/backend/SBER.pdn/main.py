# -*- coding: utf-8 -*-
from flask import Flask
from flask_restful import Resource, reqparse, Api
import json
import random
app = Flask(__name__)
api = Api(app)

class Pdn(Resource):
	def post(self):
		parser = reqparse.RequestParser()
		parser.add_argument("baseMounthIncome", type=int) #Ежемесячный подтвержденный доход по месту работы
		parser.add_argument("optionalMounthIncome", type=int) #Ежемесячный дополнительный доход
		params = parser.parse_args()
		#заглушка с рандомом
		Payments = [random.randint(1000, 50000) for x in range(random.randint(0, 50))]
		midPayments = sum(Payments)/len(Payments)

		incomeMoney = params['baseMounthIncome'] + params['optionalMounthIncome']
		pdnResultInPercent = round((midPayments/incomeMoney) * 100, 2)

		return json.dumps({'status': 200, 'pdnResult': pdnResultInPercent})


api.add_resource(Pdn, "/sber-pdn", "/sber-pdn/")
if __name__ == "__main__":
	app.run(port=8083)

#curl -H "Content-Type: application/json" --data @data.json http://localhost:8083/sber-pdn
