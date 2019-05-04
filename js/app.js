var data = {
	defaultLanguage: 'ua',
	dictionary:{
		en: {
			name: "Your name",
			namePlaceholder: "Input your name",
			gender: "Choose your gender",
			genderMale: "Male",
			genderFemale: "Female",
			countryWrapper: "Choose country where you live",
			countries: {
				ua: "Ukraine",
				fr: "France",
				us: "USA",
				br: "Brasil"
			},
			isShowBornCountry: "The country where you live and the country where you were born are the same?",
			bornCountryWrapper: "Choose country where you born",
			email:	"Your email",
			emailPlaceholder: "Input your email",
			buttonText: "Send"
		},
		ua:{
			name: "Ваше имя:",
			namePlaceholder: "Введите ваше имя",
			gender: "Ваш пол",
			genderMale: "М",
			genderFemale: "Ж",
			countryWrapper: "Выберите страну прожывания:",
			countries:{
				ua: "Украина",
				fr: "франция",
				us: "США",
				br: "Бразилия"
			},
			isShowBornContry: "Cтрану прожывания и страна где вы радились равны?",
			bornCountryWrapper: "Выберите страну где вы радились:",
			email: "Ваш email:",
			emailPlaceholder: "Введите email",
			buttonTExt: "Отправеть"
		}
	}
}
$(".language-image").click(function(event) {
	currentLanguage = $(this).attr('data-lang')
	$(".language-image").removeClass('active')
	$(this).addClass('active');
 setFormValue();
});

function setFormValue(){
	var dict = data.dictionary[currentLanguage]
	$("#name .description").text(dict.name);
	$("#name input").attr('placeholder', dict.namePlaceholder);

	$("#email .description").text(dict.email);
	$("#email input").attr('placeholder', dict.emailPlaceholder);

	$("#gender .description").text(dict.gender);
	$("#male").text(dict.genderMale);
	$("#female").text(dict.genderFemale);

	$("#country_wrapper .description").text(dict.countryWrapper);
	$("#isShowBornContry .description").text(dict.isShowBornContry);

	$("#country option ").each(function(index, el) {
		var currentVal = $("#country option ").eq(index).val()
		$("#country option ").eq(index).text(dict.countries[currentVal])
	});


}

var currentLanguage = data.defaultLanguage;
setFormValue();