
// You can optionally declare the seclevel of this script
// @seclevel FULLSEC

// @autocomplete s: #s.trust.me c: {"arg":"here"}
// This is how you declare the autocomplete of a TypeScript script (also optional)

// You can import functions from other modulesconst ez = ["open", "unlock", "release"];
const ez = ["open", "unlock", "release"];
const ez_primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
];
const l0cket = [
    "cmppiq",
    "6hh8xw",
    "uphlaw",
    "vc2c7q",
    "tvfkyq",
    "xwz7ja",
    "sa23uw",
    "ellux0",
    "72umy0",
    "i874y3",
    "9p65cu",
    "fr8ibu",
    "eoq6de",
    "xfnkqe",
    "pmvr1q",
    "y111qa",
];

const data_check: Record<string, string> = {
    "\"did you know\" is a communication pattern common to user ++++++": "fran_lee",
    "a ++++++ is a household cleaning device with a rudimentary networked sentience": "robovac",
    "according to trust, ++++++ is more than just following directives": "sentience",
    "communications issued by user ++++++ demonstrate structural patterns associated with humor": "sans_comedy",
    "in trust's vLAN, you became one of angie's ++++++": "angels",
    "in trust's vLAN, you became one of mallory's ++++++": "minions",
    "in trust's vLAN, you discovered that mallory and che are ++++++": "sisters",
    "in trust's vLAN, you encountered the will of ++++++, the prover": "petra",
    "in trust's vLAN, you visited faythe's ++++++": "fountain",
    "in trust's vLAN, you were required to hack halperyon.++++++": "helpdesk",
    "pet, pest, plague and meme are accurate descriptors of the ++++++": "bunnybat",
    "safety depends on the use of scripts.++++++": "get_level",
    "service ++++++ provides atmospheric updates via the port epoch environment": "weathernet",
    "this fact checking process is a function of ++++++, the monitor": "eve",
    "trust's vLAN emphasized the importance of the transfer and capture of ++++++": "resource",
    "trust's vLAN presented a version of angie who had lost a friend called ++++++": "bo",
    "user 'on_th3_1ntern3ts' has ++++++ many things": "heard",
    "user ++++++ provides instruction via script": "teach",
    "user ++++++ uses the port epoch environment to request gc": "outta_juice",
    "users gather in channel CAFE to share ++++++": "poetry",
};

const colors = [
    "green",
    "lime",
    "yellow",
    "orange",
    "red",
    "purple",
    "blue",
    "cyan",
];
const complements: Record<string, string> = {
    green: "red",
    lime: "purple",
    yellow: "blue",
    orange: "cyan",
    red: "green",
    purple: "lime",
    blue: "yellow",
    cyan: "orange",
};
const triads: Record<string, Record<string, string>> = {
    green: { c003_triad_1: "orange", c003_triad_2: "purple" },
    lime: { c003_triad_1: "red", c003_triad_2: "blue" },
    yellow: { c003_triad_1: "purple", c003_triad_2: "cyan" },
    orange: { c003_triad_1: "blue", c003_triad_2: "green" },
    red: { c003_triad_1: "cyan", c003_triad_2: "lime" },
    purple: { c003_triad_1: "green", c003_triad_2: "yellow" },
    blue: { c003_triad_1: "lime", c003_triad_2: "orange" },
    cyan: { c003_triad_1: "yellow", c003_triad_2: "red" },
};


export default (context: Context, args?: unknown) => {
    if (context.caller !== "lunarequest") {
        return { e: "who tf are you?" };
    }

    #D("preflight fetch");
    let l = #db.f({ _id: { $exists: true } }).array();
    #D(l);

    #D("locket")
    let b = #db.us(
        { _id: "locket" }, { $set: { answer: l0cket } }
    );
    #D(b);

    #D("ezprime")
    b = #db.us(
        { _id: "ez_primes" }, { $set: { answer: ez_primes } }
    );
    #D(b);

    #D("ez")
    b = b = #db.us(
        { _id: "ez" }, { $set: { answer: ez } }
    );

    #D("data_check")
    b = #db.us(
        { _id: "data_check" }, { $set: { answer: data_check } }
    );
    #D(b);


    #D("colors")
    b = #db.us(
        { _id: "colors" }, { $set: { answer: colors } }
    );
    #D(b);


    #D("complements")
    b = #db.us(
        { _id: "complements" }, { $set: { answer: complements } }
    );
    #D(b);


    #D("triads")
    b = #db.us(
        { _id: "triads" }, { $set: { answer: triads } }
    );
    #D(b);



    #D("postflight fetch")
    l = #db.f({ _id: { $exists: true } }).array();
    #D(l);
}