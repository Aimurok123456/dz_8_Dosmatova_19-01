const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

let current = 0

generate = () => {
    var quotes;
    quotes = {
        "- Mv":
            '" Если устал-поспи."',
        "- MdL":
            '"Если устал физически - сделай не большой перерыв."',

        "- MkL":
            '"Если устал морально - напиши и забудь. "',

        "- MoL":
            '"Прелести жизни - в проблемах."',

        "- MuL":
            '"Надо жить для себя"',

        "- MrL":
            '"Если до этого не сделал, в прошлое не изменить, а будущее возможно"',

        "- MhL":
            '"Надо любить себя таким, какой ты есть, потому что кроме себя никто не сможет так полюбить "',

        "- MfL":
            '"Если болит голова - попей воды, часто головные боли вызывает обезвоживание "',

        "- MlL":
            '"Музыка - ухудшает память "',

        "- MiL":
            '"Большое количество бактерий содержиться в воде"',

        "- MeL":
            '"Когда мы привыкаем к человека он будет казаться красивее"',

        "- MgL":
            '"Если в жизни всё идёт плохо - представь что могло бы быть и хуже "',

        "- MjL":
            '"Если кто-то не хочет выходить на улицу - не заставляйте его"',

    };

    var authors = Object.keys(quotes);

    var author = authors[current];

    var quote = quotes[author];

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
};

next.addEventListener('click', () => {
    current += 1
    if (current > 12){
        return false
    }
    generate()
})
prev.addEventListener('click', () => {
    current -= 1
    if (current < 0) {
        return false
    }
    generate()
})
