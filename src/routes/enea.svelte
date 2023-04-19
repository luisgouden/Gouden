<script>
	let currentQuestion = 0;
	let answers = [];
	let results = {};
	let showResults = false;
	let showButton = false;
	let answeredQuestions = 0;
	let respuesta = 0;

	let questions = [
		{
			question:
				'Pregunta 1: ¿Qué te hace sentir más seguro/a en tu vida cotidiana? ¿Qué necesitas para tener una sensación de estabilidad y confianza?Esta pregunta refleja cómo cada tipo busca la seguridad y la estabilidad en su vida. Cada respuesta muestra lo que cada tipo valora o necesita para sentirse seguro/a.',
			options: [
				{
					tipo: 'Tipo 1',
					texto:
						'Tener una rutina estable y predecible que me permita saber qué esperar y cómo actuar en cada momento. Me gusta tener un horario fijo, una agenda organizada y unas normas claras que me den seguridad y tranquilidad.'
				},
				{
					tipo: 'Tipo 2',
					texto:
						'Tener el apoyo y la aprobación de los demás que me hagan sentir valorado y reconocido por mi trabajo y mi esfuerzo. Me gusta ayudar a los demás, ser útil y recibir gratitud y afecto por lo que hago.'
				},
				{
					tipo: 'Tipo 3',
					texto:
						'Tener la confianza y la competencia para lograr mis objetivos y demostrar mi capacidad y mi excelencia. Me gusta ser el mejor, superarme a mí mismo y recibir elogios y admiración por mis logros.'
				},
				{
					tipo: 'Tipo 4',
					texto:
						'Tener el valor y la integridad para defender mis principios y expresar mi autenticidad y mi singularidad. Me gusta ser yo mismo, crear, innovar y mostrar al mundo mi visión personal y original.'
				},
				{
					tipo: 'Tipo 5',
					texto:
						'Tener el conocimiento y la sabiduría para entender el mundo y sus misterios y poder encontrar respuestas y soluciones. Me gusta investigar, aprender, analizar y profundizar en los temas que me interesan y que me aportan algo nuevo.'
				},
				{
					tipo: 'Tipo 6',
					texto:
						'Tener una rutina estable y predecible que me permita saber qué esperar y cómo actuar en cada momento. Me gusta tener un horario fijo, una agenda organizada y unas normas claras que me den seguridad y tranquilidad.'
				},
				{
					tipo: 'Tipo 7',
					texto:
						'Tener la libertad y la independencia para hacer lo que quiero sin tener que depender de nadie ni seguir normas o reglas. Me gusta explorar nuevas opciones, probar cosas diferentes y vivir aventuras sin ataduras ni límites.'
				},
				{
					tipo: 'Tipo 8',
					texto:
						'Tener el control y la autoridad sobre las situaciones que me afectan y poder imponer mi voluntad y mi criterio. Me gusta ser el líder, tomar decisiones y enfrentarme a los retos con fuerza y determinación.'
				},
				{
					tipo: 'Tipo 9',
					texto:
						'Tener la armonía y la paz con mi entorno y evitar los conflictos y las tensiones que me puedan alterar o molestar. Me gusta estar en equilibrio, adaptarme a las circunstancias y mantener una actitud positiva y serena. '
				}
			]
		},
		{
			question:
				'Pregunta 2: ¿Qué te hace sentir más realizado/a en tu vida personal? ¿Qué buscas para darle sentido y propósito a tu existencia? Esta pregunta refleja cómo cada tipo busca la realización y el sentido en su vida. Cada respuesta muestra lo que cada tipo considera o necesita para sentirse realizado/a.',
			options: [
				{
					tipo: 'Tipo 1',
					texto:
						'Cumplir con mis deberes y responsabilidades que me hacen sentir útil y digno de respeto. Me gusta ser fiel a mis compromisos, seguir las normas y tener una ética profesional y personal.'
				},
				{
					tipo: 'Tipo 2',
					texto:
						'Ayudar y cuidar a los demás que me hacen sentir generoso y querido. Me gusta ser servicial, atento y empático con las necesidades y los deseos de los demás.'
				},
				{
					tipo: 'Tipo 3',
					texto:
						'Perfeccionar y mejorar mis habilidades que me hacen sentir eficaz y exitoso. Me gusta ser ambicioso, trabajador y competitivo con los retos que me propongo.'
				},
				{
					tipo: 'Tipo 4',
					texto:
						'Crear y mostrar mi originalidad que me hacen sentir único e irrepetible. Me gusta ser innovador, visionario y revolucionario con las ideas que tengo.'
				},
				{
					tipo: 'Tipo 5',
					texto:
						'Aprender y profundizar en mis intereses que me hacen sentir inteligente e informado. Me gusta ser observador, analítico e independiente con los temas que me fascinan.'
				},
				{
					tipo: 'Tipo 6',
					texto:
						'Tener el apoyo y la confianza de los demás que me hacen sentir seguro y querido. Me gusta tener amigos, familiares o compañeros que me den seguridad y confianza en mí mismo y en el mundo.'
				},
				{
					tipo: 'Tipo 7',
					texto:
						'Explorar y experimentar nuevas cosas que me hacen sentir curioso y aventurero. Me gusta ser abierto, flexible y divertido con las oportunidades que me ofrece la vida.'
				},
				{
					tipo: 'Tipo 8',
					texto:
						'Desafiar y superar los obstáculos que me hacen sentir fuerte y poderoso. Me gusta ser valiente, decidido y protector con los míos y con lo que creo.'
				},
				{
					tipo: 'Tipo 9',
					texto:
						'Integrar y aceptar las diferencias que me hacen sentir tolerante y comprensivo. Me gusta ser pacífico, mediador y conciliador con los conflictos que surgen a mi alrededor.'
				}
			]
		},
		{
			question:
				'Pregunta 3: ¿Qué te hace sentir más frustrado/a en tu vida diaria? ¿Qué temes o evitas para no sufrir o estresarte? Esta pregunta refleja cómo cada tipo reacciona ante la frustración y el estrés en su vida. Cada respuesta muestra lo que cada tipo teme o evita para no sentirse frustrado/a.',
			options: [
				{
					tipo: 'Tipo 1',
					texto:
						'Que me critiquen o me juzguen por mis acciones o mis decisiones y que me hagan sentir culpable o indigno. Me molesta que no reconozcan mi esfuerzo, que cuestionen mi ética o que me impongan su moral.'
				},
				{
					tipo: 'Tipo 2',
					texto:
						'Que me ignoren o me rechacen por mi apariencia o mi personalidad y que me hagan sentir invisible o insignificante. Me duele que no me presten atención, que no me valoren como persona o que no me quieran como soy. '
				},
				{
					tipo: 'Tipo 3',
					texto:
						'Que me equivoque o me arrepienta por mis errores o mis faltas y que me hagan sentir imperfecto o insatisfecho. Me frustra que no salga todo bien, que no cumpla mis expectativas o que no logre mis objetivos.'
				},
				{
					tipo: 'Tipo 4',
					texto:
						'Que me incomprendan o me estereotipen por sus prejuicios o sus expectativas y que me hagan sentir alienado o rechazado. Me entristece que no cumplan sus promesas, que cambien de opinión o que se alejen de mí.'
				},
				{
					tipo: 'Tipo 5',
					texto:
						'Que me invadan o me agobien por su curiosidad o su cercanía y que me hagan sentir expuesto o asfixiado. Me incomoda que se metan en mi vida, que quieran saber más de lo necesario o que no respeten mi intimidad. '
				},
				{
					tipo: 'Tipo 6',
					texto:
						'Que me ignoren o me rechacen por mi apariencia o mi personalidad y que me hagan sentir invisible o insignificante. Me duele que no me presten atención, que no me valoren como persona o que no me quieran como soy.'
				},
				{
					tipo: 'Tipo 7',
					texto:
						'Que me limiten o me restrinjan por sus normas o sus exigencias y que me hagan sentir atrapado o aburrido. Me agobia que no me dejen espacio, que me impongan obligaciones o que me quiten opciones.'
				},
				{
					tipo: 'Tipo 8',
					texto:
						'Que me manipulen o me engañen por sus intereses o sus mentiras y que me hagan sentir traicionado o desconfiado. Me enfada que no sean honestos conmigo, que abusen de mi confianza o que me quiten lo que es mío.'
				},
				{
					tipo: 'Tipo 9',
					texto:
						'Que me conflictúen o me presionen por sus diferencias o sus demandas y que me hagan sentir incomodo o agobiado. Me estresa que no haya armonía, que haya confrontación o que me exijan más de lo que puedo dar.'
				}
			]
		},
		{
			question:
				'Pregunta 4: ¿Qué te hace sentir más agradecido/a en tu vida social? ¿Qué valoras o necesitas para sentirte apreciado y querido?Esta pregunta refleja cómo cada tipo expresa su gratitud y su aprecio en su vida. Cada respuesta muestra lo que cada tipo valora o necesita para sentirse agradecido/a.',
			options: [
				{
					tipo: 'Tipo 1',
					texto:
						'Que me enseñen o me corrijan por su sabiduría o su honestidad y que me hagan sentir aprendiz y mejorado. Me gusta que me expliquen, que me orienten o que me ayuden con lo que dominan o conocen y con lo que son sinceros.'
				},
				{
					tipo: 'Tipo 2',
					texto:
						'Que me quieran o me aprecien por mi generosidad o mi bondad y que me hagan sentir amado y feliz. Me gusta que me abracen, que me agradezcan o que me mimen por lo que doy a los demás y por lo que soy bueno.'
				},
				{
					tipo: 'Tipo 3',
					texto:
						'Que me reconozcan o me valoren por mis logros o mis cualidades y que me hagan sentir orgulloso y satisfecho. Me gusta que me feliciten, que me premien o que me elogien por lo que hago bien y por lo que soy capaz.'
				},
				{
					tipo: 'Tipo 4',
					texto:
						'Que me inspiren o me desafíen por su creatividad o su visión y que me hagan sentir admirado y motivado. Me gusta que me sorprendan, que me propongan o que me iluminen con lo que crean o imaginan y con lo que son innovadores.'
				},
				{
					tipo: 'Tipo 5',
					texto:
						'Que me acepten o me celebren por mi autenticidad o mi originalidad y que me hagan sentir único y especial. Me gusta que me respeten, que me aprecien o que me reconozcan con lo que soy o pienso y con lo que soy diferente.'
				},
				{
					tipo: 'Tipo 6',
					texto:
						'Que me escuchen o me comprendan por su atención o su empatía y que me hagan sentir escuchado y comprendido. Me gusta que se interesen, que se pongan en mi lugar o que me aconsejen con lo que me preocupa o siento y con lo que son comprensivos.'
				},
				{
					tipo: 'Tipo 7',
					texto:
						'Que me sorprendan o me diviertan por su ingenio o su humor y que me hagan sentir estimulado y alegre. Me gusta que me cuenten, que me inviten o que me entretengan con lo que saben hacer o decir y con lo que son divertidos.'
				},
				{
					tipo: 'Tipo 8',
					texto:
						'Que me respeten o me admiren por mi fuerza o mi coraje y que me hagan sentir importante y seguro. Me gusta que me sigan, que me consulten o que me desafíen por lo que impongo a los demás y por lo que soy fuerte. '
				},
				{
					tipo: 'Tipo 9',
					texto:
						'Que me acompañen o me animen por su lealtad o su optimismo y que me hagan sentir apoyado y confiado. Me gusta que estén conmigo, que me den ánimos o que me protejan con lo que me importa o necesito y con lo que son fieles. '
				}
			]
		},
		{
			question:
				'Pregunta 5: ¿Qué te hace sentir más vivo/a en tu vida espiritual? ¿Qué disfrutas o necesitas para sentirte conectado y pleno?Esta pregunta refleja cómo cada tipo busca la vitalidad y la energía en su vida. Cada respuesta muestra lo que cada tipo disfruta o necesita para sentirse vivo/a.',
			options: [
				{
					tipo: 'Tipo 1',
					texto:
						'Que me ordene o me armonice con las normas o los principios que sigo y que me haga sentir equilibrado y tranquilo. Me gusta tener un orden, una coherencia y una ética que me den equilibrio y tranquilidad en mi vida y en mi conciencia.'
				},
				{
					tipo: 'Tipo 2',
					texto:
						'Que me conecte o me emocione con las personas o las causas que amo y que me haga sentir compasivo y entregado. Me gusta relacionarme con los demás, compartir mis sentimientos y dedicarme a lo que me importa con amor y generosidad. '
				},
				{
					tipo: 'Tipo 3',
					texto:
						'Que me reconozcan o me valoren por mis logros o mis cualidades y que me hagan sentir orgulloso y satisfecho. Me gusta que me feliciten, que me premien o que me elogien por lo que hago bien y por lo que soy capaz.'
				},
				{
					tipo: 'Tipo 4',
					texto:
						'Que me nutra o me llene con el amor o el sentimiento que recibo y que me haga sentir pleno. Me gusta sentir todo lo que hay en mí mismo, en los demás y en el universo.'
				},
				{
					tipo: 'Tipo 5',
					texto:
						'Que me ilumine o me trascienda con el conocimiento o la sabiduría que busco y que me haga sentir consciente e iluminado. Me gusta aprender, comprender o descubrir la verdad que hay detrás de las cosas, de mí mismo y de la realidad.'
				},
				{
					tipo: 'Tipo 6',
					texto:
						'Que me proteja o me fortalezca ante las amenazas o los peligros que acechan y que me haga sentir seguro y confiado. Me gusta tener un refugio, un apoyo y una guía que me den seguridad y confianza en mí mismo y en el mundo.'
				},
				{
					tipo: 'Tipo 7',
					texto:
						'Que me satisfaga o me plazca con las experiencias o las sensaciones que disfruto y que me haga sentir feliz y agradecido. Me gusta vivir el momento, probar cosas nuevas y disfrutar de lo que me ofrece la vida con optimismo y entusiasmo.'
				},
				{
					tipo: 'Tipo 8',
					texto:
						'Que me desafíe o me motive a superar mis límites y a alcanzar mis metas y que me haga sentir poderoso y realizado. Me gusta enfrentarme a los retos, vencer los obstáculos y conseguir lo que me propongo con pasión y determinación.'
				},
				{
					tipo: 'Tipo 9',
					texto:
						'Que me relaje o me serene con la meditación o el descanso que practico y que me haga sentir calmado y centrado. Me gusta meditar, respirar o dormir que me ayudan a calmar mi mente, mi cuerpo y mi espíritu.'
				}
			]
		}
	];

	function submitAnswer(questionNumber, answer) {
		console.log(respuesta);
		if (!answers[questionNumber - 1]) {
			answers[questionNumber - 1] = [];
		}
		let index = answers[questionNumber - 1].indexOf(answer);
		if (index > -1) {
			respuesta--;
			answers[questionNumber - 1].splice(index, 1);
			console.log(`Respuesta ${answer} eliminada de la pregunta ${questionNumber}`);
			console.log(respuesta);

			if (answers[questionNumber - 1].length === 1) {
				let tempArray = [...answers[questionNumber - 1]];
				answers[questionNumber - 1] = tempArray;
				//respuesta = 0;
				console.log(`Se ha creado un nuevo array para la pregunta ${questionNumber}`);
			}
		} else if (answers[questionNumber - 1].length < 2) {
			respuesta++;
			answers[questionNumber - 1].push(answer);
			console.log(respuesta);
			console.log(`Respuesta ${answer} agregada a la pregunta ${questionNumber}`);
		}
		if (questionNumber === questions.length && answers[questionNumber - 1].length >= 1) {
		}

		let shuffledOptions = questions[currentQuestion].options.sort(() => Math.random() - 0.5);
	}

	function result() {}

	function nextQuestion() {
		if (currentQuestion < questions.length - 1) {
			currentQuestion++;
			shuffledOptions = questions[currentQuestion].options.sort(() => Math.random() - 0.5);
			respuesta = 0;
		} else {
			calculateResults();
			showResults = true;
		}
	}

	function calculateResults() {
		answers.forEach((answer) => {
			answer.forEach((option) => {
				if (results[option]) {
					results[option]++;
				} else {
					results[option] = 1;
				}
			});
		});
		let totalAnswers = answers.reduce((acc, curr) => acc + curr.length, 0);
		for (let key in results) {
			results[key] = (results[key] / totalAnswers) * 100;
		}
	}

	function isSelected(questionNumber, answer) {
		return answers[questionNumber - 1] && answers[questionNumber - 1].includes(answer);
	}

	let shuffledOptions = questions[currentQuestion].options.sort(() => Math.random() - 0.5);
</script>

<style>
	button:focus {
		background-color: gold;
	}
	section {
		max-width: 50%;
	}

	button {
		border: none;
		background: none;
		font-size: 110%;
	}
	p {
		text-align: left;
	}
</style>

<section>
	{#if showResults}
		<h3>Resultados</h3>
		<ul>
			{#each Object.entries(results) as [answer, percentage]}
				<li><p>{answer} : {percentage.toFixed(2)}%</p></li>
			{/each}
		</ul>
	{:else}
		<h4>{questions[currentQuestion].question}</h4>
		<ul>
			{#each questions[currentQuestion].options as option}
				<li>
					<button on:click={() => submitAnswer(currentQuestion + 1, option.tipo)}
						><p>{option.texto}</p></button
					>
				</li>
				<hr />
			{/each}
		</ul>
		{#if answers[currentQuestion] && answers[currentQuestion].length && respuesta >= 1}
			<button on:click={nextQuestion}>Siguiente</button>
		{/if}
	{/if}
</section>
