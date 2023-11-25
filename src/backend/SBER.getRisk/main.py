from flask import Flask
from flask_restful import Resource, reqparse, Api
import json
app = Flask(__name__)
api = Api(app)



PickedDataMarks_familyStatus = {
	0 : {
		"description": "холост",
		"marks": 3
	},
	1 : {
		"description": "женат/замужем",
		"marks": 2
	},
	2 : {
		"description": "в разводе",
		"marks": 5
	}
}

PickedDataMarks_creditHistory = {
	0 : {
		"description": "хорошая",
		"marks": 1
	},
	1 : {
		"description": "средняя",
		"marks": 8
	},
	2 : {
		"description": "плохая",
		"marks": 15
	},
	3 : {
		"description": "отсутсвует",
		"marks": 3
	}
}


PickedDataMarks_incomeSource = {
	0 : {
		"description": "заработная плата по основному месту работы",
		"marks": 2
	},
	1 : {
		"description": "доходы от предпринимательства",
		"marks": 7
	},
	2 : {
		"description": "пенсия",
		"marks": 15
	},
	3 : {
		"description": "иное",
		"marks": 2
	}
}


class Risk(Resource):
	def post(self):
		parser = reqparse.RequestParser()
		parser.add_argument("clientAge", type=int)
		parser.add_argument("familyStatus", type=int)
		parser.add_argument("isChildren", type=int)
		parser.add_argument("creditHistory", type=int)
		parser.add_argument("incomeSource", type=int)
		parser.add_argument("clientExperience", type=int)
		parser.add_argument("PDN", type=int)
		parser.add_argument("incomePower", type=int)
		parser.add_argument("isMoneyInBank", type=int)
		params = parser.parse_args()
		print(params)
		riskMarks = 0
		if (int(params["clientAge"]) <= 25): riskMarks += 5
		elif (26 <= int(params["clientAge"]) <= 55): riskMarks += 1
		elif (56 <= int(params["clientAge"]) <= 74): riskMarks += 3
		elif (75 <= int(params["clientAge"])): riskMarks += 10

		riskMarks += (PickedDataMarks_familyStatus[int(params["familyStatus"])]["marks"])

		riskMarks += 3 if int(params["isChildren"]) else 5

		riskMarks += (PickedDataMarks_creditHistory[int(params["creditHistory"])]["marks"])

		riskMarks += (PickedDataMarks_incomeSource[int(params["incomeSource"])]["marks"])
		
		if (int(params["clientExperience"]) > 5) : riskMarks += 2
		elif (1 <= int(params["clientExperience"]) <= 5) : riskMarks += 3
		elif (int(params["clientExperience"]) < 0) : riskMarks += 10

		if (int(params["PDN"]) > 95) : riskMarks += 20
		elif (70 <= int(params["PDN"]) <= 95) : riskMarks += 10
		elif (int(params["PDN"]) < 70) : riskMarks += 1

		if (int(params["incomePower"]) > 250) : riskMarks += 3
		elif (101 <= int(params["incomePower"]) <= 250) : riskMarks += 5
		elif (50 <= int(params["incomePower"]) <= 100) : riskMarks += 7
		elif (int(params["incomePower"]) < 50) : riskMarks += 15

		riskMarks += 1 if int(params["isMoneyInBank"]) else 5

		#Ответ по сумме баллов
		if riskMarks > 70: return json.dumps({"id": 0, "risk": "hight"}), 200
		elif (31 <= riskMarks <= 70): return json.dumps({"id": 1, "risk": "medium"}), 200
		elif riskMarks <= 31: return json.dumps({"id": 2, "risk": "low"}), 200
		return 400

api.add_resource(Risk, "/sber-risk", "/sber-risk/")
if __name__ == "__main__":
	app.run(port=8082)

#curl -H "Content-Type: application/json" --data @data.json http://localhost:5000/sber-risk
