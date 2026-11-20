export const id = 54;
export const ids = [54];
export const modules = {
  40205: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      g: () => Vu
    });
    const Eu = new TextDecoder;

    function Ku(uu) {
      const Ru = new Qu(uu),
        yu = Ru.value();
      if (Ru.at !== uu.length) throw new Error(`msgpack: ${uu.length-Ru.at} bytes after the value`);
      return yu
    }
    class Qu {
      constructor(uu) {
        this.bytes = uu, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(uu.buffer, uu.byteOffset, uu.byteLength)
      }
      value() {
        const uu = this.u8();
        if (uu <= 127) return uu;
        if (uu >= 224) return uu - 256;
        if (uu >= 128 && uu <= 143) return this.map(15 & uu);
        if (uu >= 144 && uu <= 159) return this.array(15 & uu);
        if (uu >= 160 && uu <= 191) return this.str(31 & uu);
        switch (uu) {
          case 192:
            return null;
          case 194:
            return !1;
          case 195:
            return !0;
          case 196:
            return this.bin(this.u8());
          case 197:
            return this.bin(this.u16());
          case 198:
            return this.bin(this.u32());
          case 199:
            return this.ext(this.u8());
          case 200:
            return this.ext(this.u16());
          case 201:
            return this.ext(this.u32());
          case 202:
            return this.view.getFloat32(this.take(4), !1);
          case 203:
            return this.view.getFloat64(this.take(8), !1);
          case 204:
            return this.u8();
          case 205:
            return this.u16();
          case 206:
            return this.u32();
          case 207:
            return this.int64(!1);
          case 208:
            return this.view.getInt8(this.take(1));
          case 209:
            return this.view.getInt16(this.take(2), !1);
          case 210:
            return this.view.getInt32(this.take(4), !1);
          case 211:
            return this.int64(!0);
          case 212:
            return this.ext(1);
          case 213:
            return this.ext(2);
          case 214:
            return this.ext(4);
          case 215:
            return this.ext(8);
          case 216:
            return this.ext(16);
          case 217:
            return this.str(this.u8());
          case 218:
            return this.str(this.u16());
          case 219:
            return this.str(this.u32());
          case 220:
            return this.array(this.u16());
          case 221:
            return this.array(this.u32());
          case 222:
            return this.map(this.u16());
          case 223:
            return this.map(this.u32());
          default:
            throw new Error(`msgpack: unknown byte 0x${uu.toString(16)} at ${this.at-1}`)
        }
      }
      take(uu) {
        const Ru = this.at;
        if (Ru + uu > this.bytes.length) throw new Error(`msgpack: ${uu} bytes past the end at ${Ru}`);
        return this.at = Ru + uu, Ru
      }
      u8() {
        return this.view.getUint8(this.take(1))
      }
      u16() {
        return this.view.getUint16(this.take(2), !1)
      }
      u32() {
        return this.view.getUint32(this.take(4), !1)
      }
      int64(uu) {
        const Ru = this.take(8);
        return uu ? this.view.getBigInt64(Ru, !1) : this.view.getBigUint64(Ru, !1)
      }
      str(uu) {
        const Ru = this.take(uu),
          yu = this.bytes;
        if (uu < 16) {
          let Ku = "";
          for (let Qu = Ru; Qu < Ru + uu; Qu++) {
            const mu = yu[Qu];
            if (mu >= 128) return Eu.decode(yu.subarray(Ru, Ru + uu));
            Ku += String.fromCharCode(mu)
          }
          return Ku
        }
        return Eu.decode(yu.subarray(Ru, Ru + uu))
      }
      bin(uu) {
        const Ru = this.take(uu);
        return this.bytes.subarray(Ru, Ru + uu)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(uu) {
        this.enter();
        const Ru = [];
        for (let yu = 0; yu < uu; yu++) Ru.push(this.value());
        return this.depth--, Ru
      }
      map(uu) {
        this.enter();
        const Ru = {};
        for (let yu = 0; yu < uu; yu++) {
          const uu = this.value(),
            yu = this.value();
          Ru["__proto__" === uu ? "__proto_" : String(uu)] = yu
        }
        return this.depth--, Ru
      }
      ext(uu) {
        const Ru = this.view.getInt8(this.take(1)),
          yu = this.take(uu);
        if (0 !== Ru) {
          if (-1 === Ru) {
            if (1 === uu) return new Date(NaN);
            if (4 === uu) return new Date(1e3 * this.view.getUint32(yu, !1));
            if (8 === uu) {
              const uu = this.view.getUint32(yu, !1),
                Ru = uu >>> 2,
                Eu = 4294967296 * (3 & uu) + this.view.getUint32(yu + 4, !1);
              return new Date(1e3 * Eu + Ru / 1e6)
            }
            if (12 === uu) {
              const uu = this.view.getUint32(yu, !1),
                Ru = 4294967296 * this.view.getInt32(yu + 4, !1) + this.view.getUint32(yu + 8, !1);
              return new Date(1e3 * Ru + uu / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Ru} of ${uu} bytes`)
        }
      }
    }
    const mu = new TextEncoder,
      Ju = -(2n ** 63n),
      Nu = 2n ** 63n - 1n,
      Xu = 2n ** 64n - 1n;

    function Vu(uu) {
      const Ru = new ru;
      return Ru.value(uu, 0), Ru.bytes()
    }
    class ru {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(uu, Ru) {
        if (Ru > 512) throw new Error("msgpack: nested too deep");
        switch (typeof uu) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(uu ? 195 : 194);
          case "number":
            return void this.number(uu);
          case "bigint":
            return void this.bigint(uu);
          case "string":
            return void this.string(uu);
          case "object":
            if (null === uu) this.u8(192);
            else if (uu instanceof Uint8Array) this.head(uu.length, 196, -1, 197, 198), this.room(uu.length), this.buf.set(uu, this.at), this.at += uu.length;
            else if (Array.isArray(uu)) {
              this.head(uu.length, 220, 144, 220, 221);
              for (const yu of uu) this.value(yu, Ru + 1)
            } else {
              var yu, Eu;
              if (Object.getPrototypeOf(uu) !== Object.prototype && null !== Object.getPrototypeOf(uu)) throw new Error(`msgpack: can't encode a ${null!==(yu=null===(Eu=uu.constructor)||void 0===Eu?void 0:Eu.name)&&void 0!==yu?yu:"object"}`);
              {
                const yu = Object.keys(uu);
                this.head(yu.length, 222, 128, 222, 223);
                for (const Eu of yu) this.string(Eu), this.value(uu[Eu], Ru + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof uu)
        }
      }
      number(uu) {
        Number.isInteger(uu) && uu >= -2147483648 && uu <= 4294967295 ? uu >= 0 ? uu < 128 ? this.u8(uu) : uu < 256 ? (this.u8(204), this.u8(uu)) : uu < 65536 ? (this.u8(205), this.u16(uu)) : (this.u8(206), this.u32(uu)) : uu >= -32 ? this.u8(uu + 256) : uu >= -128 ? (this.u8(208), this.u8(uu + 256)) : uu >= -32768 ? (this.u8(209), this.u16(uu + 65536)) : (this.u8(210), this.u32(uu >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, uu, !1), this.at += 8)
      }
      bigint(uu) {
        const Ru = uu >= Ju && uu <= Nu;
        if (!Ru && (uu < 0n || uu > Xu)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Ru ? 211 : 207), this.room(8), Ru ? this.view.setBigInt64(this.at, uu, !1) : this.view.setBigUint64(this.at, uu, !1), this.at += 8
      }
      string(uu) {
        const Ru = mu.encode(uu);
        this.head(Ru.length, 217, 160, 218, 219), this.room(Ru.length), this.buf.set(Ru, this.at), this.at += Ru.length
      }
      head(uu, Ru, yu, Eu, Ku) {
        yu >= 0 && uu < (160 === yu ? 32 : 16) ? this.u8(yu | uu) : Ru !== Eu && uu < 256 ? (this.u8(Ru), this.u8(uu)) : uu < 65536 ? (this.u8(Eu), this.u16(uu)) : (this.u8(Ku), this.u32(uu))
      }
      room(uu) {
        if (this.at + uu <= this.buf.length) return;
        let Ru = 2 * this.buf.length;
        for (; Ru < this.at + uu;) Ru *= 2;
        const yu = new Uint8Array(Ru);
        yu.set(this.buf.subarray(0, this.at)), this.buf = yu, this.view = new DataView(yu.buffer)
      }
      u8(uu) {
        this.room(1), this.buf[this.at++] = uu
      }
      u16(uu) {
        this.room(2), this.view.setUint16(this.at, uu, !1), this.at += 2
      }
      u32(uu) {
        this.room(4), this.view.setUint32(this.at, uu, !1), this.at += 4
      }
    }
  },
  42872: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      joinRoom: () => Bu,
      leaveHeldSeat: () => ju,
      resumeRoom: () => Su
    });
    var Eu = yu(174),
      Ku = yu(1739),
      Qu = yu(38818),
      mu = yu(1699),
      Ju = yu(40205),
      Nu = yu(4562),
      Xu = yu(40433),
      Vu = yu(40505);
    const ru = Uint8Array.of(13, ...(0, Ju.g)(Eu.h));
    async function Bu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await xu(uu, Ru, yu)
      } catch (Ku) {
        var Eu;
        const Qu = await (null === (Eu = Ru.optionsAfterRefusal) || void 0 === Eu ? void 0 : Eu.call(Ru, Ku));
        if (!Qu) throw Ku;
        return xu(uu, {
          ...Ru,
          joinOptions: Qu
        }, {
          ...yu,
          early: void 0
        })
      }
    }
    async function xu(uu, Ru, yu) {
      var Eu;
      const {
        signal: Qu
      } = yu, mu = () => (0, Vu.j)(Ru.endpoint, Ru.roomName, Ru.joinOptions, yu), {
        early: Ju
      } = yu, Nu = Ju ? null !== (Eu = await Ju.take(Qu)) && void 0 !== Eu ? Eu : await Ju.reserveInstead(mu, Qu) : await mu();
      return (0, Ku.p)(Qu), Wu(uu, Ru.endpoint, Nu, yu, !1)
    }
    async function Su(uu, Ru, yu, Eu) {
      let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const mu = await (0, Vu.i)(Ru, yu, Eu, Qu);
      return (0, Ku.p)(Qu.signal), Wu(uu, Ru, mu, Qu, !0)
    }

    function pu(uu, Ru, yu) {
      const Eu = (0, Vu.k)(uu, Ru);
      return yu.createSocket ? yu.createSocket(Eu) : new WebSocket(Eu)
    }

    function Tu(uu, Ru, yu) {
      var Eu;
      let Ku = !1;
      return (null !== (Eu = uu.setTimer) && void 0 !== Eu ? Eu : (uu, Ru) => {
        setTimeout(uu, Ru)
      })((() => {
        Ku || Ru()
      }), yu), () => {
        Ku = !0
      }
    }
    async function Wu(uu, Ru, yu, Eu, Ju) {
      const {
        signal: Vu
      } = Eu, Bu = pu(Ru, yu, Eu);
      let xu = null,
        Su = null;
      const Wu = [];
      let ju = !1,
        Hu = !1;
      const du = uu => {
        var Ru;
        Hu = !0, null === (Ru = Su) || void 0 === Ru || Ru.reject(new Xu.b("the room socket closed before the resume", "closed", uu.code))
      };
      Ju && Bu.addEventListener("close", du);
      const bu = (uu, Ru) => {
          var yu;
          if (uu === (Ju ? Nu.J.Resumed : Nu.J.Activated)) ju = !0, null === (yu = Su) || void 0 === yu || yu.resolve();
          else if (!Ju || uu !== Nu.J.ResumeRefused && uu !== Nu.J.Activated)
            if (uu === Nu.J.Error) {
              var Eu;
              null === (Eu = Su) || void 0 === Eu || Eu.reject(new Xu.b(`the room refused the join (code ${Ru})`, "roomError", Ru))
            } else {
              var Ku;
              null === (Ku = Su) || void 0 === Ku || Ku.reject(new Xu.b("the room socket closed before the join", "closed", Ru))
            }
          else {
            var Qu;
            null === (Qu = Su) || void 0 === Qu || Qu.reject(new Xu.n("the core refused the resume: it held no game"))
          }
        },
        Cu = uu.onConnection(((uu, Ru, yu) => {
          null === xu ? Wu.push([uu, Ru, yu]) : uu === xu && bu(Ru, yu)
        })),
        ku = uu.attachSocket(Bu);
      if (null === ku) throw Cu(), new Xu.b("the core could not take the room socket", "attach");
      var eu;
      (xu = ku, Ju) && (null === (eu = Eu.onAttached) || void 0 === eu || eu.call(Eu));
      const Au = Ju ? null : new mu.c(Qu.e, (() => {
        var Ru, yu;
        null === (Ru = uu.flushNet) || void 0 === Ru || Ru.call(uu), null === (yu = Su) || void 0 === yu || yu.reject(new Qu.i)
      }));
      let Du = !1;
      const Mu = () => {
        if (Du) return;
        if (Du = !0, Cu(), Ju && (Bu.removeEventListener("close", du), !ju && !(null !== Vu && void 0 !== Vu && Vu.aborted && (0, Ku.e)(Vu) instanceof Xu.o))) return void(Hu || uu.closeSocket(ku));
        ju && uu.leaveRoom(ku) || uu.sendRaw(ku, Xu.h) ? Tu(Eu, (() => {
          uu.closeSocket(ku)
        }), Xu.c) : uu.closeSocket(ku)
      };
      try {
        await new Promise(((Ru, yu) => {
          const Eu = () => {
            var Ru;
            Ju && (null === (Ru = uu.flushNet) || void 0 === Ru || Ru.call(uu));
            yu((0, Ku.e)(Vu))
          };
          null === Vu || void 0 === Vu || Vu.addEventListener("abort", Eu, {
            once: !0
          }), Su = {
            resolve: () => {
              null === Vu || void 0 === Vu || Vu.removeEventListener("abort", Eu), Ru()
            },
            reject: uu => {
              null === Vu || void 0 === Vu || Vu.removeEventListener("abort", Eu), yu(uu)
            }
          };
          for (const [uu, Ku, Qu] of Wu.splice(0)) uu === xu && bu(Ku, Qu)
        }))
      } catch (Iu) {
        throw Mu(), Iu
      } finally {
        null === Au || void 0 === Au || Au.stop()
      }
      Ju && Bu.removeEventListener("close", du);
      return {
        conn: ku,
        seat: yu,
        leave: Mu,
        detach: () => {
          Du = !0, Cu()
        },
        endJoinAd: () => {
          Du || uu.sendRaw(ku, ru)
        }
      }
    }
    async function ju(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const Ku = pu(uu, await (0, Vu.i)(uu, Ru, yu, Eu), Eu);
        Ku.binaryType = "arraybuffer", await new Promise((uu => {
          const Ru = Tu(Eu, (() => {
            Ku.close(), uu()
          }), Xu.c);
          Ku.addEventListener("open", (() => {
            Ku.send(Xu.h)
          })), Ku.addEventListener("close", (() => {
            Ru(), uu()
          }))
        }))
      } catch (Ku) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", Ku)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);