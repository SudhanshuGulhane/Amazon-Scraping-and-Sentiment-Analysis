import pickle

# pickling the vectorizer
from model import vectorizer, classifier_linear

pickle.dump(vectorizer, open('models/vectorizer.sav', 'wb'))
# pickling the model
pickle.dump(classifier_linear, open('models/classifier.sav', 'wb'))

print('Both vectorizer and classifier has been pickled. Check "classifier_flask" to load and use in flask app')