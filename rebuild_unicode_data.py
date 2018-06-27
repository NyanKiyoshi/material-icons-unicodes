import re
import requests
import json

SAVE_PATH = 'dist/data/material-icon-character-list.json'

DATA_REGEX = re.compile(
    "^([a-z0-9_-]+)\s+([a-f0-9]{4})$", re.IGNORECASE | re.MULTILINE)

CODEPOINTS_URL = (
    'https://raw.githubusercontent.com/'
    'google/material-design-icons/master/iconfont/codepoints')


def get_data():
    response = requests.get(CODEPOINTS_URL)
    assert response.status_code == 200
    return response.content.decode()


def parse_data(text_data):
    results = {}
    matches = re.finditer(DATA_REGEX, text_data)

    for match in matches:
        name, value = match.groups()
        hex_value = int(value, 16)
        results[name] = chr(hex_value)

    return results


def save_data(results, path):
    with open(path, 'w') as fp:
        json.dump(results, fp, indent=2)


def main():
    path = SAVE_PATH

    data = get_data()
    results = parse_data(data)
    save_data(results, path)

    print('Dumped results to {}'.format(path))


if __name__ == '__main__':
    main()
