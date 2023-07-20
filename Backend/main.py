from fastapi import FastAPI
from py_trello import TrelloClient
import uvicorn

# Trello API credentials and board information
API_KEY = 'e081fa1356060e277f33bc70ea55c50e'
API_SECRET = 'caf287e85dfcdd6624d02f16efceb5730ea60e360914843fc051fd30efd10ecf'
TOKEN = 'ATTAa6816b89362ee65e81f2dbb334a487990d55de2bd879fd9cbe0929444f7ed2beF6038F94'
BOARD_ID = 'YOUR_TRELLO_BOARD_ID'

# Create a Trello client
client = TrelloClient(
    api_key=API_KEY,
    api_secret=API_SECRET,
    token=TOKEN
)

# Retrieve the Trello board
board = client.get_board(BOARD_ID)

# Create a FastAPI application for each list in the Trello board
apps = {}

for list_name in ['Server', 'Restaurant Owner', 'Delivery']:
    # Create a FastAPI application for the list
    app = FastAPI()

    # Extract host and port information from the Trello cards
    cards = board.get_list(list_name).list_cards()
    for card in cards:
        if card.name.lower() == 'host':
            host = card.desc
        elif card.name.lower() == 'port':
            port = int(card.desc)

    # Store the FastAPI application in the apps dictionary
    apps[list_name] = {'app': app, 'host': host, 'port': port}

    @app.get('/')
    def root():
        return {'message': f'This is the {list_name} application.'}

# Run the FastAPI applications using uvicorn
if __name__ == '__main__':
    for app_name, app_info in apps.items():
        app = app_info['app']
        host = app_info['host']
        port = app_info['port']
        uvicorn.run(app, host=host, port=port)

# from fastapi import FastAPI
# from fastapi.responses import HTMLResponse
# from server import app as server_app
# from Restaurant_owner import app as owner_app
# from Delivery import app as delivery_app
# import uvicorn

# app = FastAPI()

# @app.get('/')
# def root():
#     return HTMLResponse('<h1>Main Application</h1>')

# if __name__ == '__main__':

#     uvicorn.run(app, host='0.0.0.0', port=8000)
#     uvicorn.run(server_app, host='0.0.0.0', port=8001)
#     uvicorn.run(owner_app, host='0.0.0.0', port=8002)
#     uvicorn.run(delivery_app, host='0.0.0.0', port=8003)
