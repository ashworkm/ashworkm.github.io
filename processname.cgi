#!/usr/local/bin/python3

require cgi

def htmlTop():
	print("""Content-type:text/html\n\n
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<title>Contact me</title>
				</head>
				<body>""")

def htmlTail:
	print("""</body>
			</html>""")

	
def getData():
	formData = cgi.FieldStorage()
	contactName = formData.getvalue('contactName')
	return contactName

########## main ##########

if __name__ == "__main__":
	try:
		htmlTop()
		contactName = getData()
		print ('Hello' + contactName)
		htmlTail()
	except:
		cgi.print_exception()
