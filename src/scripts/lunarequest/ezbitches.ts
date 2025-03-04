// You can optionally declare the seclevel of this script
// @seclevel FULLSEC

// @autocomplete s: #s.trust.me c: {"arg":"here"}
// This is how you declare the autocomplete of a TypeScript script (also optional)

// You can import functions from other modules
import { isRecord } from "/lib/isRecord";
import { isScriptor } from "/lib/isScriptor";



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
    const ez: string[] = #db.f({ _id: { $eq: "ez" } }).first()["answer"];
    const ez_primes: number[] = #db.f({ _id: { $eq: "ez_primes" } }).first()["answer"];
    const l0cket: string[] = #db.f({ _id: { $eq: "locket" } }).first()["answer"];
    const data_check: Record<string, string> = #db.f({ _id: { $eq: "data_check" } }).first()["answer"];
    const colors: string[] = #db.f({ _id: { $eq: "colors" } }).first()["answer"];
    const complements: Record<string, string> = #db.f({ _id: { $eq: "complements" } }).first()["answer"];
    const triads: Record<string, Record<string, string>> = #db.f({ _id: { $eq: "triads" } }).first()["answer"];
    var s_args: Record<string, unknown> = args.c;
    let found = false;
    let out = args.s.call(s_args) as string;
    let lock = /(\S+)(?=\s+lock)/.exec(out);
    let iter = 1;
    while (found == false) {
        if (lock) {
            let l = lock[0];
            let lockmatch = false;
            if (l.includes("DATA_CHECK")) {
                s_args["DATA_CHECK"] = "";
                let ret = args.s.call(s_args) as string;
                for (const line of ret.split("\n")) {
                    s_args["DATA_CHECK"] += data_check[line]
                }
                lockmatch = true;
            }
            if (l.includes("EZ_40")) {
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
                        break;
                    }
                }
                lockmatch = true;
            }
            if (l.includes("EZ_35")) {
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
                        break;
                    }
                }
                lockmatch = true;
            }
            if (l.includes("EZ_21")) {
                for (const e of ez) {
                    s_args["EZ_21"] = e;
                    let ret = args.s.call(s_args) as string;
                    if (!ret.includes("command")) {
                        break;
                    }
                }
                lockmatch = true;
            }
            if (l.includes("l0cket")) {
                for (const key of l0cket) {
                    s_args["l0cket"] = key;
                    let ret = args.s.call(s_args) as string;
                    if (!ret.includes("k3y")) {
                        break;
                    }
                }
                lockmatch = true;
            }

            if (l.includes("c00")) {
                let cnum = lock[0].match(/(\d\d\d)/);
                if (cnum) {
                    let n = parseInt(cnum[0]);
                    #D("C00 locks " + n)
                    switch (n) {
                        case 1: {
                            for (const c of colors) {
                                s_args["c001"] = c;
                                let ret = args.s.call(s_args) as string;
                                if (ret.includes("digit")) {
                                    s_args["color_digit"] = c.length;
                                    args.s.call(s_args);
                                    break;
                                }
                            }
                        }
                        case 2: {
                            for (const c of colors) {
                                s_args["c002"] = c;
                                let ret = args.s.call(s_args) as string;
                                if (!ret.includes("not")) {
                                    s_args["c002_complement"] = complements[c];
                                    args.s.call(s_args);
                                    break;
                                }
                            }
                        }
                        case 3: {
                            for (const c of colors) {
                                s_args["c003"] = c;
                                let ret = args.s.call(s_args) as string;
                                if (ret.includes("c003_triad_1")) {
                                    s_args["c003_triad_1"] = triads[c].c003_triad_1;
                                    s_args["c003_triad_2"] = triads[c].c003_triad_2;
                                    args.s.call(s_args);
                                    break;
                                }
                            }
                        }
                    }
                }
                lockmatch = true;
            }

            if (lockmatch === false) {
                #D("LOCKMATCH FAILED");
                #D(s_args);
                #D(out);
                return;
            }

        } else {
            if (out.includes("breached")) {
                #D("breached exiting");
                break;
            }
        }
        out = args.s.call(s_args) as string;
        #D("==== " + iter + " ====");
        #D(out);
        iter += 1;
        lock = /(\S+)(?=\s+lock)/.exec(out);
    }
}
