export const id = 69;
export const ids = [69];
export const modules = {
  41706: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      f: () => zM
    });
    const OM = new TextDecoder;

    function SM(MM) {
      const rM = new jM(MM),
        iM = rM.value();
      if (rM.at !== MM.length) throw new Error(`msgpack: ${MM.length-rM.at} bytes after the value`);
      return iM
    }
    class jM {
      constructor(MM) {
        this.bytes = MM, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(MM.buffer, MM.byteOffset, MM.byteLength)
      }
      value() {
        const MM = this.u8();
        if (MM <= 127) return MM;
        if (MM >= 224) return MM - 256;
        if (MM >= 128 && MM <= 143) return this.map(15 & MM);
        if (MM >= 144 && MM <= 159) return this.array(15 & MM);
        if (MM >= 160 && MM <= 191) return this.str(31 & MM);
        switch (MM) {
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
            throw new Error(`msgpack: unknown byte 0x${MM.toString(16)} at ${this.at-1}`)
        }
      }
      take(MM) {
        const rM = this.at;
        if (rM + MM > this.bytes.length) throw new Error(`msgpack: ${MM} bytes past the end at ${rM}`);
        return this.at = rM + MM, rM
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
      int64(MM) {
        const rM = this.take(8);
        return MM ? this.view.getBigInt64(rM, !1) : this.view.getBigUint64(rM, !1)
      }
      str(MM) {
        const rM = this.take(MM),
          iM = this.bytes;
        if (MM < 16) {
          let SM = "";
          for (let jM = rM; jM < rM + MM; jM++) {
            const aM = iM[jM];
            if (aM >= 128) return OM.decode(iM.subarray(rM, rM + MM));
            SM += String.fromCharCode(aM)
          }
          return SM
        }
        return OM.decode(iM.subarray(rM, rM + MM))
      }
      bin(MM) {
        const rM = this.take(MM);
        return this.bytes.subarray(rM, rM + MM)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(MM) {
        this.enter();
        const rM = [];
        for (let iM = 0; iM < MM; iM++) rM.push(this.value());
        return this.depth--, rM
      }
      map(MM) {
        this.enter();
        const rM = {};
        for (let iM = 0; iM < MM; iM++) {
          const MM = this.value(),
            iM = this.value();
          rM["__proto__" === MM ? "__proto_" : String(MM)] = iM
        }
        return this.depth--, rM
      }
      ext(MM) {
        const rM = this.view.getInt8(this.take(1)),
          iM = this.take(MM);
        if (0 !== rM) {
          if (-1 === rM) {
            if (1 === MM) return new Date(NaN);
            if (4 === MM) return new Date(1e3 * this.view.getUint32(iM, !1));
            if (8 === MM) {
              const MM = this.view.getUint32(iM, !1),
                rM = MM >>> 2,
                OM = 4294967296 * (3 & MM) + this.view.getUint32(iM + 4, !1);
              return new Date(1e3 * OM + rM / 1e6)
            }
            if (12 === MM) {
              const MM = this.view.getUint32(iM, !1),
                rM = 4294967296 * this.view.getInt32(iM + 4, !1) + this.view.getUint32(iM + 8, !1);
              return new Date(1e3 * rM + MM / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${rM} of ${MM} bytes`)
        }
      }
    }
    const aM = new TextEncoder,
      PM = -(2n ** 63n),
      nM = 2n ** 63n - 1n,
      QM = 2n ** 64n - 1n;

    function zM(MM) {
      const rM = new LM;
      return rM.value(MM, 0), rM.bytes()
    }
    class LM {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(MM, rM) {
        if (rM > 512) throw new Error("msgpack: nested too deep");
        switch (typeof MM) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(MM ? 195 : 194);
          case "number":
            return void this.number(MM);
          case "bigint":
            return void this.bigint(MM);
          case "string":
            return void this.string(MM);
          case "object":
            if (null === MM) this.u8(192);
            else if (MM instanceof Uint8Array) this.head(MM.length, 196, -1, 197, 198), this.room(MM.length), this.buf.set(MM, this.at), this.at += MM.length;
            else if (Array.isArray(MM)) {
              this.head(MM.length, 220, 144, 220, 221);
              for (const iM of MM) this.value(iM, rM + 1)
            } else {
              var iM, OM;
              if (Object.getPrototypeOf(MM) !== Object.prototype && null !== Object.getPrototypeOf(MM)) throw new Error(`msgpack: can't encode a ${null!==(iM=null===(OM=MM.constructor)||void 0===OM?void 0:OM.name)&&void 0!==iM?iM:"object"}`);
              {
                const iM = Object.keys(MM);
                this.head(iM.length, 222, 128, 222, 223);
                for (const OM of iM) this.string(OM), this.value(MM[OM], rM + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof MM)
        }
      }
      number(MM) {
        Number.isInteger(MM) && MM >= -2147483648 && MM <= 4294967295 ? MM >= 0 ? MM < 128 ? this.u8(MM) : MM < 256 ? (this.u8(204), this.u8(MM)) : MM < 65536 ? (this.u8(205), this.u16(MM)) : (this.u8(206), this.u32(MM)) : MM >= -32 ? this.u8(MM + 256) : MM >= -128 ? (this.u8(208), this.u8(MM + 256)) : MM >= -32768 ? (this.u8(209), this.u16(MM + 65536)) : (this.u8(210), this.u32(MM >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, MM, !1), this.at += 8)
      }
      bigint(MM) {
        const rM = MM >= PM && MM <= nM;
        if (!rM && (MM < 0n || MM > QM)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(rM ? 211 : 207), this.room(8), rM ? this.view.setBigInt64(this.at, MM, !1) : this.view.setBigUint64(this.at, MM, !1), this.at += 8
      }
      string(MM) {
        const rM = aM.encode(MM);
        this.head(rM.length, 217, 160, 218, 219), this.room(rM.length), this.buf.set(rM, this.at), this.at += rM.length
      }
      head(MM, rM, iM, OM, SM) {
        iM >= 0 && MM < (160 === iM ? 32 : 16) ? this.u8(iM | MM) : rM !== OM && MM < 256 ? (this.u8(rM), this.u8(MM)) : MM < 65536 ? (this.u8(OM), this.u16(MM)) : (this.u8(SM), this.u32(MM))
      }
      room(MM) {
        if (this.at + MM <= this.buf.length) return;
        let rM = 2 * this.buf.length;
        for (; rM < this.at + MM;) rM *= 2;
        const iM = new Uint8Array(rM);
        iM.set(this.buf.subarray(0, this.at)), this.buf = iM, this.view = new DataView(iM.buffer)
      }
      u8(MM) {
        this.room(1), this.buf[this.at++] = MM
      }
      u16(MM) {
        this.room(2), this.view.setUint16(this.at, MM, !1), this.at += 2
      }
      u32(MM) {
        this.room(4), this.view.setUint32(this.at, MM, !1), this.at += 4
      }
    }
  },
  53752: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      joinRoom: () => LM,
      leaveHeldSeat: () => yM,
      resumeRoom: () => HM
    });
    var OM = iM(143),
      SM = iM(1215),
      jM = iM(37437),
      aM = iM(41706),
      PM = iM(5198),
      nM = iM(41764),
      QM = iM(42012);
    const zM = Uint8Array.of(13, ...(0, aM.f)(OM.g));
    async function LM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await mM(MM, rM, iM)
      } catch (SM) {
        var OM;
        const jM = await (null === (OM = rM.optionsAfterRefusal) || void 0 === OM ? void 0 : OM.call(rM, SM));
        if (!jM) throw SM;
        return mM(MM, {
          ...rM,
          joinOptions: jM
        }, {
          ...iM,
          early: void 0
        })
      }
    }
    async function mM(MM, rM, iM) {
      var OM;
      const {
        signal: jM
      } = iM, aM = () => (0, QM.g)(rM.endpoint, rM.roomName, rM.joinOptions, iM), {
        early: PM
      } = iM, nM = PM ? null !== (OM = await PM.take(jM)) && void 0 !== OM ? OM : await PM.reserveInstead(aM, jM) : await aM();
      return (0, SM.p)(jM), dM(MM, rM.endpoint, nM, iM, !1)
    }
    async function HM(MM, rM, iM, OM) {
      let jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const aM = await (0, QM.f)(rM, iM, OM, jM);
      return (0, SM.p)(jM.signal), dM(MM, rM, aM, jM, !0)
    }

    function hM(MM, rM, iM) {
      const OM = (0, QM.h)(MM, rM);
      return iM.createSocket ? iM.createSocket(OM) : new WebSocket(OM)
    }

    function JM(MM, rM, iM) {
      var OM;
      let SM = !1;
      return (null !== (OM = MM.setTimer) && void 0 !== OM ? OM : (MM, rM) => {
        setTimeout(MM, rM)
      })((() => {
        SM || rM()
      }), iM), () => {
        SM = !0
      }
    }
    async function dM(MM, rM, iM, OM, aM) {
      const {
        signal: QM
      } = OM, LM = hM(rM, iM, OM);
      let mM = !1,
        HM = null,
        dM = null;
      const yM = [];
      let lM = !1,
        EM = !1;
      const UM = MM => {
        var rM;
        EM = !0, null === (rM = dM) || void 0 === rM || rM.reject(new nM.d("the room socket closed before the resume", "closed", MM.code))
      };
      aM && LM.addEventListener("close", UM);
      const GM = (MM, rM) => {
          var iM;
          if (MM === (aM ? PM.F.Resumed : PM.F.Activated)) lM = !0, null === (iM = dM) || void 0 === iM || iM.resolve();
          else if (!aM || MM !== PM.F.ResumeRefused && MM !== PM.F.Activated)
            if (MM === PM.F.Error) {
              var OM;
              null === (OM = dM) || void 0 === OM || OM.reject(new nM.d(`the room refused the join (code ${rM})`, "roomError", rM))
            } else {
              var SM;
              null === (SM = dM) || void 0 === SM || SM.reject(new nM.d("the room socket closed before the join", "closed", rM, null, mM))
            }
          else {
            var jM;
            null === (jM = dM) || void 0 === jM || jM.reject(new nM.p("the core refused the resume: it held no game"))
          }
        },
        CM = MM.onConnection(((MM, rM, iM) => {
          null === HM ? yM.push([MM, rM, iM]) : MM === HM && GM(rM, iM)
        })),
        eM = MM.attachSocket(LM);
      if (null === eM) throw CM(), new nM.d("the core could not take the room socket", "attach");
      var bM;
      (HM = eM, aM) && (null === (bM = OM.onAttached) || void 0 === bM || bM.call(OM));
      const wM = aM ? null : new jM.e((() => {
        var rM, iM;
        null === (rM = MM.flushNet) || void 0 === rM || rM.call(MM), null === (iM = dM) || void 0 === iM || iM.reject(new jM.i(mM ? "socket" : "socket_unopened"))
      }));
      LM.addEventListener("open", (() => {
        mM = !0, null === wM || void 0 === wM || wM.socketOpened()
      }), {
        once: !0
      });
      let tM = !1;
      const gM = () => {
        if (tM) return;
        if (tM = !0, CM(), aM && (LM.removeEventListener("close", UM), !lM && !(null !== QM && void 0 !== QM && QM.aborted && (0, SM.f)(QM) instanceof nM.t))) return void(EM || MM.closeSocket(eM));
        lM && MM.leaveRoom(eM) || MM.sendRaw(eM, nM.k) ? JM(OM, (() => {
          MM.closeSocket(eM)
        }), nM.h) : MM.closeSocket(eM)
      };
      try {
        await new Promise(((rM, iM) => {
          const OM = () => {
            var rM;
            aM && (null === (rM = MM.flushNet) || void 0 === rM || rM.call(MM));
            iM((0, SM.f)(QM))
          };
          null === QM || void 0 === QM || QM.addEventListener("abort", OM, {
            once: !0
          }), dM = {
            resolve: () => {
              null === QM || void 0 === QM || QM.removeEventListener("abort", OM), rM()
            },
            reject: MM => {
              null === QM || void 0 === QM || QM.removeEventListener("abort", OM), iM(MM)
            }
          };
          for (const [MM, SM, jM] of yM.splice(0)) MM === HM && GM(SM, jM)
        })), null === wM || void 0 === wM || wM.answered()
      } catch (uM) {
        throw gM(), uM
      } finally {
        null === wM || void 0 === wM || wM.stop()
      }
      aM && LM.removeEventListener("close", UM);
      return {
        conn: eM,
        seat: iM,
        leave: gM,
        detach: () => {
          tM = !0, CM()
        },
        endJoinAd: () => !tM && MM.sendRaw(eM, zM)
      }
    }
    async function yM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const SM = hM(MM, await (0, QM.f)(MM, rM, iM, OM), OM);
        SM.binaryType = "arraybuffer", await new Promise((MM => {
          const rM = JM(OM, (() => {
            SM.close(), MM()
          }), nM.h);
          SM.addEventListener("open", (() => {
            SM.send(nM.k)
          })), SM.addEventListener("close", (() => {
            rM(), MM()
          }))
        }))
      } catch (SM) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", SM)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);