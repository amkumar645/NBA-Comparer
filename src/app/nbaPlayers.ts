export class PlayerInfo {
    name: string;
    years: number[];
    lowercase: string;

    constructor(name: string, year: number, lowercase: string) {
        this.name = name;
        this.years = [year];
        this.lowercase = lowercase;
    }
}
export class PlayerStats {
    name: string;
    year: number;
    team: string;
    age: number;
    ppg: number;
    apg: number;
    rpg: number;
    orbg: number;
    drbg: number;
    spg: number;
    bpg: number;
    tpg: number;
    fpg: number;
    per: number;
    ows: number;
    dws: number;
    ws: number;
    obpm: number;
    dbpm: number;
    bpm: number;
    vorp: number;
    usg: number;
    imgSrc: string;
    gp: number;

    constructor(name: string,
        year: number,
        team: string,
        age: number,
        ppg: number,
        apg: number,
        rpg: number,
        orbg: number,
        drbg: number,
        spg: number,
        bpg: number,
        tpg: number,
        fpg: number,
        per: number,
        ows: number,
        dws: number,
        ws: number,
        obpm: number,
        dbpm: number,
        bpm: number,
        vorp: number,
        usg: number,
        imgSrc: string,
        gp: number) {
            this.name = name;
            this.year = year;
            this.team = team;
            this.age = age;
            this.ppg = ppg;
            this.apg = apg;
            this.rpg = rpg;
            this.orbg = orbg;
            this.drbg = drbg;
            this.spg = spg;
            this.bpg = bpg;
            this.tpg = tpg;
            this.fpg = fpg;
            this.per = per;
            this.ows = ows;
            this.dws = dws;
            this.ws = ws;
            this.obpm = obpm;
            this.dbpm = dbpm;
            this.bpm = bpm;
            this.vorp = vorp;
            this.usg = usg;
            this.imgSrc = imgSrc;
            this.gp = gp;
    }
}

export class AdvancedNBAConversion {
    year: number;
    ppg: number;
    apg: number;
    rpg: number;
    orbg: number;
    drbg: number;
    spg: number;
    bpg: number;
    tpg: number;
    fpg: number;
    per: number;
    ows: number;
    dws: number;
    ws: number;
    obpm: number;
    dbpm: number;
    bpm: number;
    vorp: number;
    usg: number;

    constructor(
        year: number,
        ppg: number,
        apg: number,
        rpg: number,
        orbg: number,
        drbg: number,
        spg: number,
        bpg: number,
        tpg: number,
        fpg: number,
        per: number,
        ows: number,
        dws: number,
        ws: number,
        obpm: number,
        dbpm: number,
        bpm: number,
        vorp: number,
        usg: number) {
            this.year = year;
            this.ppg = ppg;
            this.apg = apg;
            this.rpg = rpg;
            this.orbg = orbg;
            this.drbg = drbg;
            this.spg = spg;
            this.bpg = bpg;
            this.tpg = tpg;
            this.fpg = fpg;
            this.per = per;
            this.ows = ows;
            this.dws = dws;
            this.ws = ws;
            this.obpm = obpm;
            this.dbpm = dbpm;
            this.bpm = bpm;
            this.vorp = vorp;
            this.usg = usg;
    }
}