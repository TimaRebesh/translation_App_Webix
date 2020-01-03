export const englishPartsOfSpeechServer = {
	verb: ["run", "must", "be", "paint", "love", "sleep"],
	noun: ["flower", "Henry", "tea", "time", "money", "water"],
	pronoun: ["he", "his", "his", "she", "her", "hers", "I", "my", "mine", "this", "that", "those", "these"],
	adverb: ["happily", "well", "badly", "quickly", "fast"],
	adjective: ["beautiful", "nice", "tall", "happy", "great"],
	preposition: ["at", "in", "on", "to", "towards", "under"],
	conjunction: ["and", "but", "because", "so", "that’s", "why", "or"]
};

export const englishPartsOfSpeech = new webix.DataCollection({
	data: englishPartsOfSpeechServer
});
