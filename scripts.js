// Lero leros
const coach_sentences = [
	[
		'Por outro lado,',
		'Não podemos esquecer que',
		'Do mesmo modo,',
		'A prática mostra que',
		'Nunca é demais insistir que',
		'A experiência mostra que',
		'É fundamental ressaltar que',
		'O incentivo ao avanço tecnológico, assim como',
		'Assim mesmo',
	],
	[
		'a complexidade dos estudos efetuados',
		'a atual estrutura da organização',
		'o novo modelo estrutural aqui preconizado',
		'o desenvolvimento de formas distintas de atuação',
		'a constante divulgação das informações',
		'a consolidação da estruturas',
		'a análise dos diversos resultados',
		'o início do programa de formação de atitudes',
		'a expansão de nossa atividade'
	],
	[
		'cumpre um papel essencial na formação',
		'auxilia na preparação e estruturação',
		'contribui para a correta determinação',
		'assume importantes posições na definição',
		'facilita a definição',
		'prejudica a percepção da importância',
		'oferece uma boa oportunidade de verificação',
		'acarreta um processo de reformulação',
		'exige precisão e definição'
	],
	[
		'das nossas metas financeiras e administrativas',
		'das atitudes e das atribuições da diretoria',
		'das novas proposições',
		'das opções básicas para o sucesso do programa',
		'do nosso sistemade formação de quadros',
		'das condições apropriadas para os negócios',
		'dos índices pretendidos',
		'das formas de ação',
		'dos conceitos de participação geral'
	]
];

// On form submit
const form = document.querySelector('#speech-meeting-generator');
form.addEventListener('submit', (event) => {
	event.preventDefault();

	const sentences_field = document.querySelector('#sentences_quantity');
	const sentences_quantity = parseInt(sentences_field.value);

	if (sentences_quantity > 0) {
		let speech = '';
		for (let i = 0; i < sentences_quantity; i++) {
			speech += `${generateSentences()}. `;
		}

		document.querySelector('#speech-wrapper').style.display = 'block';
		document.querySelector('#speech').innerHTML = speech;

	} else {
		alert('Digite um número de frases');
		sentences_field.focus();
	}

	return false;
});

// Generate new sentences
function generateSentences() {
	let sentence = '';
	for (
		let i = 0, j = coach_sentences.length;
		i < j;
		i++
	) {
		const index = randomNumber(coach_sentences[i].length);
		sentence += ` ${coach_sentences[i][index]}`;
	}

	return sentence.substr(1);
}

// Generate a random number between 0 and N
function randomNumber(n) {
	const number = Math.floor(Math.random() * n) + 1;
	return number - 1;
}