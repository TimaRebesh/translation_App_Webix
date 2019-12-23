const EnglishPartsOfSpeechServer = {
	noun: ["run", "must", "be", "paint", "love", "sleep"],
	verb: ["flower", "Henry", "tea", "time", "money", "water"],
	pronoun: ["he", "his", "his", "she", "her", "hers", "I", "my", "mine", "this", "that", "those", "these"],
	adverb: ["happily", "well", "badly", "quickly", "fast"],
	article: ["beautiful", "nice", "tall", "happy"],
	preposition: ["at", "in", "on", "to", "towards", "under"],
	conjunction: ["and", "but", "because", "so", "that’s", "why", "or"]
};

const EnglishPartsOfSpeech = new webix.DataCollection({
	data: EnglishPartsOfSpeechServer
});
