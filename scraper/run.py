import requests
from bs4 import BeautifulSoup
import hashlib
import json


baseUrl = "https://www.thefactsite.com/1000-interesting-facts/"
pageNumber = 1
maxPageNumber = 6
numberOfFacts = 0
for i in range(pageNumber, maxPageNumber + 1):
    url = baseUrl + str(i)
    response = requests.get(url)

    soup = BeautifulSoup(response.text, 'html.parser')
    pElements = soup.find_all("p")

    factElements = []
    facts = []
    for element in pElements:
        if(element.has_attr("class") and "list" in element["class"]):
            factText = element.text
            _id = hashlib.sha256(factText.encode()).hexdigest()

            fact = {
                "id": _id,
                "text": factText,
                "source": url
            }

            facts.append(fact)
    print("Processing " + url)
    numberOfFacts += len(facts)

result = {
    "numberOfFacts": numberOfFacts,
    "facts": facts
}

with open('output.json', 'w') as outfile:
    json.dump(result, outfile, indent=4, sort_keys=True)