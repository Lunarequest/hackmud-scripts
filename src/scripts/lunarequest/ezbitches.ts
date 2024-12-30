import { isRecord } from "/lib/isRecord";
import { isScriptor } from "/lib/isScriptor";

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

export default (context: Context, args?: unknown) => {
    if (context.caller !== "lunarequest") {
        return { e: "who tf are you?" };
    }
    if (!isRecord(args)) {
        return `This script is a badly written brutefroce ez series locks and l0cket. don't use it e\`S.\`g.\n${_FULL_SCRIPT_NAME} { s: #s.trust.me, c: {"throw known args"} }`;
    }
    if (!isRecord(args.c)) {
        return `This script is a badly written brutefroce ez series locks and l0cket. don't use it e\`S.\`g.\n${_FULL_SCRIPT_NAME} { s: #s.trust.me, c: {"throw known args"} }`;
    }
    if (!isScriptor(args.s)) {
        return `This script is a badly written brutefroce ez series locks and l0cket. don't use it e\`S.\`g.\n${_FULL_SCRIPT_NAME} { s: #s.trust.me, c: {"throw known args"} }`;
    }

    var s_args: Record<string, unknown> = args.c;
    let found = false;
    while (found !== false) {
        let out = args.s.call(s_args) as string;
        let lock = /(\S+)(?=\s+lock)/.exec(out);

        if (lock) {
            let l = lock[0];
            switch (l) {
                case "EZ_40": {
                    for (const e of ez) {
                        s_args["EZ_40"] = e;
                        let ret = args.s.call(s_args) as string;
                        if (ret.includes("ez_prime")) {
                            break;
                        }
                    }
                    for (const prime of ez_primes) {
                        s_args["ez_prime"] = prime;
                        let out = args.s.call(s_args) as string;
                        if (!out.includes("prime")) {
                            return s_args;
                        }
                    }
                    break;
                }
                case "EZ_35": {
                    for (const e of ez) {
                        s_args["EZ_35"] = e;
                        let ret = args.s.call(s_args) as string;
                        if (ret.includes("digit")) {
                            break;
                        }
                    }
                    for (let i = 0; i <= 10; i++) {
                        s_args["digit"] = i;
                        let out = args.s.call(s_args) as string;
                        if (!out.includes("digit")) {
                            return s_args;
                        }
                    }
                    break;
                }
                case "EZ_21": {
                    for (const e of ez) {
                        s_args["EZ_21"] = e;
                        let ret = args.s.call(s_args) as string;
                        if (!ret.includes("command")) {
                            return s_args;
                        }
                    }
                    break;
                }
                case "l0cket": {
                    for (const key of l0cket) {
                        s_args["l0cket"] = key;
                        let ret = args.s.call(s_args) as string;
                        if (!ret.includes("k3y")) {
                            return s_args;
                        }
                    }
                    break;
                }
                default: {
                    if (l.includes("c00")) {
                        s_args = #s.lunarequest.c00bitches.call({ s: args.s, c: s_args });
                    } else {
                        found = true;
                    }
                }
            }
        } else {
            return { e: "Are there no locks?" };
        }
    }
    return s_args;
};
