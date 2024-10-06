from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def calculator():
    return render_template('calculator.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        expression = request.form['expression']
        result = eval(expression)  # احسب النتيجة باستخدام eval
        return render_template('calculator.html', result=result)
    except Exception as e:
        return render_template('calculator.html', result="خطأ: " + str(e))

if __name__ == '__main__':
    app.run(debug=True)
