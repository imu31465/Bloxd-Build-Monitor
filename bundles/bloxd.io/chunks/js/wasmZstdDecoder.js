export const id = 64;
export const ids = [64];
export const modules = {
  40762: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      ZstdErrorCode: () => Vu,
      ZstdFrameDecoder: () => Iu
    });
    const Eu = ArrayBuffer,
      Ku = Uint8Array,
      Qu = Uint16Array,
      mu = Int16Array,
      Ju = Int32Array,
      Nu = (uu, Ru, yu) => {
        if (Ku.prototype.slice) return Ku.prototype.slice.call(uu, Ru, yu);
        (null == Ru || Ru < 0) && (Ru = 0), (null == yu || yu > uu.length) && (yu = uu.length);
        const Eu = new Ku(yu - Ru);
        return Eu.set(uu.subarray(Ru, yu)), Eu
      },
      Xu = (uu, Ru, yu, Eu) => {
        if (Ku.prototype.fill) return Ku.prototype.fill.call(uu, Ru, yu, Eu);
        for ((null == yu || yu < 0) && (yu = 0), (null == Eu || Eu > uu.length) && (Eu = uu.length); yu < Eu; ++yu) uu[yu] = Ru;
        return uu
      },
      Vu = {
        InvalidData: 0,
        WindowSizeTooLarge: 1,
        InvalidBlockType: 2,
        FSEAccuracyTooHigh: 3,
        DistanceTooFarBack: 4,
        UnexpectedEOF: 5
      },
      ru = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
      Bu = (uu, Ru, yu) => {
        const Eu = new Error(Ru || ru[uu]);
        if (Eu.code = uu, Error.captureStackTrace && Error.captureStackTrace(Eu, Bu), !yu) throw Eu;
        return Eu
      },
      xu = (uu, Ru, yu) => {
        let Eu = 0,
          Ku = 0;
        for (; Eu < yu; ++Eu) Ku |= uu[Ru++] << (Eu << 3);
        return Ku
      },
      Su = (uu, Ru) => {
        const yu = uu[0] | uu[1] << 8 | uu[2] << 16;
        if (3126568 == yu && 253 == uu[3]) {
          const yu = uu[4],
            Eu = yu >> 5 & 1,
            Qu = yu >> 2 & 1,
            mu = 3 & yu,
            Nu = yu >> 6;
          8 & yu && Bu(0);
          let Xu = 6 - Eu;
          const Vu = 3 == mu ? 4 : mu,
            ru = xu(uu, Xu, Vu);
          Xu += Vu;
          const Su = Nu ? 1 << Nu : Eu,
            pu = xu(uu, Xu, Su) + (1 == Nu && 256);
          let Tu = pu;
          if (!Eu) {
            const Ru = 1 << 10 + (uu[5] >> 3);
            Tu = Ru + (Ru >> 3) * (7 & uu[5])
          }
          Tu > 2145386496 && Bu(1);
          const Wu = new Ku((1 == Ru ? pu || Tu : Ru ? 0 : Tu) + 12);
          return Wu[0] = 1, Wu[4] = 4, Wu[8] = 8, {
            b: Xu + Su,
            y: 0,
            l: 0,
            d: ru,
            w: Ru && 1 != Ru ? Ru : Wu.subarray(12),
            e: Tu,
            o: new Ju(Wu.buffer, 0, 3),
            u: pu,
            c: Qu,
            m: Math.min(131072, Tu)
          }
        }
        if (25481893 == (yu >> 4 | uu[3] << 20)) return 8 + (((Eu = uu)[Qu = 4] | Eu[Qu + 1] << 8 | Eu[Qu + 2] << 16 | Eu[Qu + 3] << 24) >>> 0);
        var Eu, Qu;
        Bu(0)
      },
      pu = uu => {
        let Ru = 0;
        for (; 1 << Ru <= uu; ++Ru);
        return Ru - 1
      },
      Tu = (uu, Ru, yu) => {
        let Ju = 4 + (Ru << 3);
        const Nu = 5 + (15 & uu[Ru]);
        Nu > yu && Bu(3);
        const Xu = 1 << Nu;
        let Vu = Xu,
          ru = -1,
          xu = -1,
          Su = -1,
          Tu = Xu;
        const Wu = new Eu(512 + (Xu << 2)),
          ju = new mu(Wu, 0, 256),
          Hu = new Qu(Wu, 0, 256),
          du = new Qu(Wu, 512, Xu),
          bu = 512 + (Xu << 1),
          Cu = new Ku(Wu, bu, Xu),
          ku = new Ku(Wu, bu + Xu);
        for (; ru < 255 && Vu > 0;) {
          const Ru = pu(Vu + 1),
            yu = Ju >> 3,
            Eu = (1 << Ru + 1) - 1;
          let Ku = (uu[yu] | uu[yu + 1] << 8 | uu[yu + 2] << 16) >> (7 & Ju) & Eu;
          const Qu = (1 << Ru) - 1,
            mu = Eu - Vu - 1,
            Nu = Ku & Qu;
          if (Nu < mu ? (Ju += Ru, Ku = Nu) : (Ju += Ru + 1, Ku > Qu && (Ku -= mu)), ju[++ru] = --Ku, -1 == Ku ? (Vu += Ku, Cu[--Tu] = ru) : Vu -= Ku, !Ku)
            do {
              const Ru = Ju >> 3;
              xu = (uu[Ru] | uu[Ru + 1] << 8) >> (7 & Ju) & 3, Ju += 2, ru += xu
            } while (3 == xu)
        }(ru > 255 || Vu) && Bu(0);
        let eu = 0;
        const Au = (Xu >> 1) + (Xu >> 3) + 3,
          Du = Xu - 1;
        for (let Eu = 0; Eu <= ru; ++Eu) {
          const uu = ju[Eu];
          if (uu < 1) Hu[Eu] = -uu;
          else
            for (Su = 0; Su < uu; ++Su) {
              Cu[eu] = Eu;
              do {
                eu = eu + Au & Du
              } while (eu >= Tu)
            }
        }
        for (eu && Bu(0), Su = 0; Su < Xu; ++Su) {
          const uu = Hu[Cu[Su]]++,
            Ru = ku[Su] = Nu - pu(uu);
          du[Su] = (uu << Ru) - Xu
        }
        return [Ju + 7 >> 3, {
          b: Nu,
          s: Cu,
          n: ku,
          t: du
        }]
      },
      Wu = Tu(new Ku([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
      ju = Tu(new Ku([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
      Hu = Tu(new Ku([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
      du = (uu, Ru) => {
        const yu = uu.length,
          Eu = new Ju(yu);
        for (let Ku = 0; Ku < yu; ++Ku) Eu[Ku] = Ru, Ru += 1 << uu[Ku];
        return Eu
      },
      bu = new Ku(new Ju([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
      Cu = du(bu, 0),
      ku = new Ku(new Ju([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
      eu = du(ku, 3),
      Au = (uu, Ru, yu) => {
        const Eu = uu.length,
          Ku = Ru.length,
          Qu = uu[Eu - 1],
          mu = (1 << yu.b) - 1,
          Ju = -yu.b;
        Qu || Bu(0);
        let Nu = 0,
          Xu = yu.b,
          Vu = (Eu << 3) - 8 + pu(Qu) - Xu,
          ru = -1;
        for (; Vu > Ju && ru < Ku;) {
          const Eu = Vu >> 3;
          Nu = (Nu << Xu | (uu[Eu] | uu[Eu + 1] << 8 | uu[Eu + 2] << 16) >> (7 & Vu)) & mu, Ru[++ru] = yu.s[Nu], Vu -= Xu = yu.n[Nu]
        }
        Vu == Ju && ru + 1 == Ku || Bu(0)
      },
      Du = (uu, Ru, yu) => {
        let Eu = 6;
        const Ku = Ru.length + 3 >> 2,
          Qu = Ku << 1,
          mu = Ku + Qu;
        Au(uu.subarray(Eu, Eu += uu[0] | uu[1] << 8), Ru.subarray(0, Ku), yu), Au(uu.subarray(Eu, Eu += uu[2] | uu[3] << 8), Ru.subarray(Ku, Qu), yu), Au(uu.subarray(Eu, Eu += uu[4] | uu[5] << 8), Ru.subarray(Qu, mu), yu), Au(uu.subarray(Eu), Ru.subarray(mu), yu)
      },
      Mu = (uu, Ru, yu) => {
        let Eu = Ru.b;
        const mu = uu[Eu],
          Ju = mu >> 1 & 3;
        Ru.l = 1 & mu;
        const Vu = mu >> 3 | uu[Eu + 1] << 5 | uu[Eu + 2] << 13,
          ru = (Eu += 3) + Vu;
        if (1 == Ju) {
          if (Eu >= uu.length) return;
          return Ru.b = Eu + 1, yu ? (Xu(yu, uu[Eu], Ru.y, Ru.y += Vu), yu) : Xu(new Ku(Vu), uu[Eu])
        }
        if (!(ru > uu.length)) {
          if (0 == Ju) return Ru.b = ru, yu ? (yu.set(uu.subarray(Eu, ru), Ru.y), Ru.y += Vu, yu) : Nu(uu, Eu, ru);
          if (2 == Ju) {
            const mu = uu[Eu],
              Ju = 3 & mu,
              Vu = mu >> 2 & 3;
            let xu = mu >> 4,
              Su = 0,
              du = 0;
            Ju < 2 ? 1 & Vu ? xu |= uu[++Eu] << 4 | (2 & Vu && uu[++Eu] << 12) : xu = mu >> 3 : (du = Vu, Vu < 2 ? (xu |= (63 & uu[++Eu]) << 4, Su = uu[Eu] >> 6 | uu[++Eu] << 2) : 2 == Vu ? (xu |= uu[++Eu] << 4 | (3 & uu[++Eu]) << 12, Su = uu[Eu] >> 2 | uu[++Eu] << 6) : (xu |= uu[++Eu] << 4 | (63 & uu[++Eu]) << 12, Su = uu[Eu] >> 6 | uu[++Eu] << 2 | uu[++Eu] << 10)), ++Eu;
            let Mu = yu ? yu.subarray(Ru.y, Ru.y + Ru.m) : new Ku(Ru.m),
              Iu = Mu.length - xu;
            if (Iu < 0 && Bu(0), 0 == Ju) Mu.set(uu.subarray(Eu, Eu += xu), Iu);
            else if (1 == Ju) Xu(Mu, uu[Eu++], Iu);
            else {
              let yu = Ru.h;
              if (2 == Ju) {
                const mu = ((uu, Ru) => {
                  let yu = 0,
                    Eu = -1;
                  const mu = new Ku(292),
                    Ju = uu[Ru],
                    Nu = mu.subarray(0, 256),
                    Vu = mu.subarray(256, 268),
                    ru = new Qu(mu.buffer, 268);
                  if (Ju < 128) {
                    const [yu, Ku] = Tu(uu, Ru + 1, 6), Qu = yu << 3, mu = uu[Ru += Ju];
                    mu || Bu(0);
                    let Xu = 0,
                      Vu = 0,
                      ru = Ku.b,
                      xu = ru,
                      Su = (++Ru << 3) - 8 + pu(mu);
                    for (; Eu > 254 && Bu(0), Su -= ru, !(Su < Qu);) {
                      let Ru = Su >> 3;
                      if (Xu += (uu[Ru] | uu[Ru + 1] << 8) >> (7 & Su) & (1 << ru) - 1, Nu[++Eu] = Ku.s[Xu], Su -= xu, Su < Qu) break;
                      Ru = Su >> 3, Vu += (uu[Ru] | uu[Ru + 1] << 8) >> (7 & Su) & (1 << xu) - 1, Nu[++Eu] = Ku.s[Vu], ru = Ku.n[Xu], Xu = Ku.t[Xu], xu = Ku.n[Vu], Vu = Ku.t[Vu]
                    }++Eu > 255 && Bu(0)
                  } else {
                    for (Eu = Ju - 127; yu < Eu; yu += 2) {
                      const Eu = uu[++Ru];
                      Nu[yu] = Eu >> 4, Nu[yu + 1] = 15 & Eu
                    }++Ru
                  }
                  let xu = 0;
                  for (yu = 0; yu < Eu; ++yu) {
                    const uu = Nu[yu];
                    uu > 11 && Bu(0), xu += uu && 1 << uu - 1
                  }
                  const Su = pu(xu) + 1,
                    Wu = 1 << Su,
                    ju = Wu - xu;
                  for (ju & ju - 1 && Bu(0), Nu[Eu++] = pu(ju) + 1, yu = 0; yu < Eu; ++yu) {
                    const uu = Nu[yu];
                    ++Vu[Nu[yu] = uu && Su + 1 - uu]
                  }
                  const Hu = new Ku(Wu << 1),
                    du = Hu.subarray(0, Wu),
                    bu = Hu.subarray(Wu);
                  for (ru[Su] = 0, yu = Su; yu > 0; --yu) {
                    const uu = ru[yu];
                    Xu(bu, yu, uu, ru[yu - 1] = uu + Vu[yu] * (1 << Su - yu))
                  }
                  for (ru[0] != Wu && Bu(0), yu = 0; yu < Eu; ++yu) {
                    const uu = Nu[yu];
                    if (uu) {
                      const Ru = ru[uu];
                      Xu(du, yu, Ru, ru[uu] = Ru + (1 << Su - uu))
                    }
                  }
                  return [Ru, {
                    n: bu,
                    b: Su,
                    s: du
                  }]
                })(uu, Eu);
                Su += Eu - (Eu = mu[0]), Ru.h = yu = mu[1]
              } else yu || Bu(0);
              (du ? Du : Au)(uu.subarray(Eu, Eu += Su), Mu.subarray(Iu), yu)
            }
            let Gu = uu[Eu++];
            if (Gu) {
              255 == Gu ? Gu = 32512 + (uu[Eu++] | uu[Eu++] << 8) : Gu > 127 && (Gu = Gu - 128 << 8 | uu[Eu++]);
              const mu = uu[Eu++];
              3 & mu && Bu(0);
              const Ju = [ju, Hu, Wu];
              for (let yu = 2; yu > -1; --yu) {
                const Nu = mu >> 2 + (yu << 1) & 3;
                if (1 == Nu) {
                  const Ru = new Ku([0, 0, uu[Eu++]]);
                  Ju[yu] = {
                    s: Ru.subarray(2, 3),
                    n: Ru.subarray(0, 1),
                    t: new Qu(Ru.buffer, 0, 1),
                    b: 0
                  }
                } else 2 == Nu ? [Eu, Ju[yu]] = Tu(uu, Eu, 9 - (1 & yu)) : 3 == Nu && (Ru.t || Bu(0), Ju[yu] = Ru.t[yu])
              }
              const [Xu, Vu, xu] = Ru.t = Ju, Su = uu[ru - 1];
              Su || Bu(0);
              let du = (ru << 3) - 8 + pu(Su) - xu.b,
                Au = du >> 3,
                Du = 0,
                Uu = (uu[Au] | uu[Au + 1] << 8) >> (7 & du) & (1 << xu.b) - 1;
              Au = (du -= Vu.b) >> 3;
              let nu = (uu[Au] | uu[Au + 1] << 8) >> (7 & du) & (1 << Vu.b) - 1;
              Au = (du -= Xu.b) >> 3;
              let su = (uu[Au] | uu[Au + 1] << 8) >> (7 & du) & (1 << Xu.b) - 1;
              for (++Gu; --Gu;) {
                const yu = xu.s[Uu],
                  Eu = xu.n[Uu],
                  Ku = Xu.s[su],
                  Qu = Xu.n[su],
                  mu = Vu.s[nu],
                  Ju = Vu.n[nu];
                Au = (du -= mu) >> 3;
                const Nu = 1 << mu;
                let ru = Nu + ((uu[Au] | uu[Au + 1] << 8 | uu[Au + 2] << 16 | uu[Au + 3] << 24) >>> (7 & du) & Nu - 1);
                Au = (du -= ku[Ku]) >> 3;
                let Su = eu[Ku] + ((uu[Au] | uu[Au + 1] << 8 | uu[Au + 2] << 16) >> (7 & du) & (1 << ku[Ku]) - 1);
                Au = (du -= bu[yu]) >> 3;
                const pu = Cu[yu] + ((uu[Au] | uu[Au + 1] << 8 | uu[Au + 2] << 16) >> (7 & du) & (1 << bu[yu]) - 1);
                if ((du < 0 || Iu + pu > Mu.length || Du + pu + Su > Mu.length) && Bu(0), Au = (du -= Eu) >> 3, Uu = xu.t[Uu] + ((uu[Au] | uu[Au + 1] << 8) >> (7 & du) & (1 << Eu) - 1), Au = (du -= Qu) >> 3, su = Xu.t[su] + ((uu[Au] | uu[Au + 1] << 8) >> (7 & du) & (1 << Qu) - 1), Au = (du -= Ju) >> 3, nu = Vu.t[nu] + ((uu[Au] | uu[Au + 1] << 8) >> (7 & du) & (1 << Ju) - 1), ru > 3) Ru.o[2] = Ru.o[1], Ru.o[1] = Ru.o[0], Ru.o[0] = ru -= 3;
                else {
                  const uu = ru - (0 != pu);
                  uu ? (ru = 3 == uu ? Ru.o[0] - 1 : Ru.o[uu], uu > 1 && (Ru.o[2] = Ru.o[1]), Ru.o[1] = Ru.o[0], Ru.o[0] = ru) : ru = Ru.o[0]
                }
                for (let uu = 0; uu < pu; ++uu) Mu[Du + uu] = Mu[Iu + uu];
                Du += pu, Iu += pu;
                let Tu = Du - ru;
                if (Tu < 0) {
                  let uu = -Tu;
                  const yu = Ru.e + Tu;
                  yu < 0 && Bu(4), uu > Su && (uu = Su);
                  for (let Eu = 0; Eu < uu; ++Eu) Mu[Du + Eu] = Ru.w[yu + Eu];
                  Du += uu, Su -= uu, Tu = 0
                }
                for (let uu = 0; uu < Su; ++uu) Mu[Du + uu] = Mu[Tu + uu];
                Du += Su
              }
              if (Du != Iu)
                for (; Iu < Mu.length;) Mu[Du++] = Mu[Iu++];
              else Du = Mu.length;
              yu ? Ru.y += Du : Mu = Nu(Mu, 0, Du)
            } else if (yu) {
              if (Ru.y += xu, Iu)
                for (let uu = 0; uu < xu; ++uu) Mu[uu] = Mu[Iu + uu]
            } else Iu && (Mu = Nu(Mu, Iu));
            return Ru.b = ru, Mu
          }
          Bu(2)
        }
      };
    class Iu {
      output = null;
      decoded = 0;
      done = !1;
      st = null;
      parts = [];
      jJ = 0;
      needed = 18;
      size;
      constructor(uu) {
        this.size = uu
      }
      push(uu) {
        if (this.done) return;
        if (this.parts.push(uu), this.jJ += uu.length, this.jJ < this.needed) return;
        const Ru = ((uu, Ru) => {
          if (1 == uu.length) return uu[0];
          const yu = new Ku(Ru);
          for (let Eu = 0, Ku = 0; Eu < uu.length; ++Eu) {
            const Ru = uu[Eu];
            yu.set(Ru, Ku), Ku += Ru.length
          }
          return yu
        })(this.parts, this.jJ);
        let yu = this.st;
        if (!yu) {
          const uu = Su(Ru, new Ku(0));
          "number" != typeof uu && uu.u === this.size || Bu(0, `not a zstd frame of ${this.size} bytes`), yu = this.st = Su(Ru, 1), yu.e = 0, this.output = yu.w
        }
        for (;;) {
          const uu = Ru.length - yu.b;
          if (uu < 3) {
            this.needed = 3;
            break
          }
          const Eu = Ru[yu.b],
            Ku = Eu >> 1 & 3;
          3 == Ku && Bu(2);
          const Qu = Eu >> 3 | Ru[yu.b + 1] << 5 | Ru[yu.b + 2] << 13;
          Qu > yu.m && Bu(0);
          const mu = 1 == Ku ? 4 : 3 + Qu;
          if (uu < mu) {
            this.needed = mu;
            break
          }
          if (Mu(Ru, yu, yu.w) || Bu(5), yu.e = yu.y, (yu.y > yu.u || yu.l && yu.y != yu.u) && Bu(0), yu.l) {
            this.done = !0;
            break
          }
        }
        this.decoded = yu.y;
        const Eu = Ru.subarray(yu.b);
        this.parts = Eu.length ? [Eu] : [], this.jJ = Eu.length, yu.b = 0
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);