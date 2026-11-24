export const id = 58;
export const ids = [58];
export const modules = {
  40718: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB,
      d: () => aB
    });
    const QB = new TextDecoder;

    function nB(BB) {
      const jB = new dB(BB),
        zB = jB.value();
      if (jB.at !== BB.length) throw new Error(`msgpack: ${BB.length-jB.at} bytes after the value`);
      return zB
    }
    class dB {
      constructor(BB) {
        this.bytes = BB, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(BB.buffer, BB.byteOffset, BB.byteLength)
      }
      value() {
        const BB = this.u8();
        if (BB <= 127) return BB;
        if (BB >= 224) return BB - 256;
        if (BB >= 128 && BB <= 143) return this.map(15 & BB);
        if (BB >= 144 && BB <= 159) return this.array(15 & BB);
        if (BB >= 160 && BB <= 191) return this.str(31 & BB);
        switch (BB) {
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
            throw new Error(`msgpack: unknown byte 0x${BB.toString(16)} at ${this.at-1}`)
        }
      }
      take(BB) {
        const jB = this.at;
        if (jB + BB > this.bytes.length) throw new Error(`msgpack: ${BB} bytes past the end at ${jB}`);
        return this.at = jB + BB, jB
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
      int64(BB) {
        const jB = this.take(8);
        return BB ? this.view.getBigInt64(jB, !1) : this.view.getBigUint64(jB, !1)
      }
      str(BB) {
        const jB = this.take(BB),
          zB = this.bytes;
        if (BB < 16) {
          let nB = "";
          for (let dB = jB; dB < jB + BB; dB++) {
            const IB = zB[dB];
            if (IB >= 128) return QB.decode(zB.subarray(jB, jB + BB));
            nB += String.fromCharCode(IB)
          }
          return nB
        }
        return QB.decode(zB.subarray(jB, jB + BB))
      }
      bin(BB) {
        const jB = this.take(BB);
        return this.bytes.subarray(jB, jB + BB)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(BB) {
        this.enter();
        const jB = [];
        for (let zB = 0; zB < BB; zB++) jB.push(this.value());
        return this.depth--, jB
      }
      map(BB) {
        this.enter();
        const jB = {};
        for (let zB = 0; zB < BB; zB++) {
          const BB = this.value(),
            zB = this.value();
          jB["__proto__" === BB ? "__proto_" : String(BB)] = zB
        }
        return this.depth--, jB
      }
      ext(BB) {
        const jB = this.view.getInt8(this.take(1)),
          zB = this.take(BB);
        if (0 !== jB) {
          if (-1 === jB) {
            if (1 === BB) return new Date(NaN);
            if (4 === BB) return new Date(1e3 * this.view.getUint32(zB, !1));
            if (8 === BB) {
              const BB = this.view.getUint32(zB, !1),
                jB = BB >>> 2,
                QB = 4294967296 * (3 & BB) + this.view.getUint32(zB + 4, !1);
              return new Date(1e3 * QB + jB / 1e6)
            }
            if (12 === BB) {
              const BB = this.view.getUint32(zB, !1),
                jB = 4294967296 * this.view.getInt32(zB + 4, !1) + this.view.getUint32(zB + 8, !1);
              return new Date(1e3 * jB + BB / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${jB} of ${BB} bytes`)
        }
      }
    }
    const IB = new TextEncoder,
      NB = -(2n ** 63n),
      uB = 2n ** 63n - 1n,
      UB = 2n ** 64n - 1n;

    function aB(BB) {
      const jB = new pB;
      return jB.value(BB, 0), jB.bytes()
    }
    class pB {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(BB, jB) {
        if (jB > 512) throw new Error("msgpack: nested too deep");
        switch (typeof BB) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(BB ? 195 : 194);
          case "number":
            return void this.number(BB);
          case "bigint":
            return void this.bigint(BB);
          case "string":
            return void this.string(BB);
          case "object":
            if (null === BB) this.u8(192);
            else if (BB instanceof Uint8Array) this.head(BB.length, 196, -1, 197, 198), this.room(BB.length), this.buf.set(BB, this.at), this.at += BB.length;
            else if (Array.isArray(BB)) {
              this.head(BB.length, 220, 144, 220, 221);
              for (const zB of BB) this.value(zB, jB + 1)
            } else {
              var zB, QB;
              if (Object.getPrototypeOf(BB) !== Object.prototype && null !== Object.getPrototypeOf(BB)) throw new Error(`msgpack: can't encode a ${null!==(zB=null===(QB=BB.constructor)||void 0===QB?void 0:QB.name)&&void 0!==zB?zB:"object"}`);
              {
                const zB = Object.keys(BB);
                this.head(zB.length, 222, 128, 222, 223);
                for (const QB of zB) this.string(QB), this.value(BB[QB], jB + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof BB)
        }
      }
      number(BB) {
        Number.isInteger(BB) && BB >= -2147483648 && BB <= 4294967295 ? BB >= 0 ? BB < 128 ? this.u8(BB) : BB < 256 ? (this.u8(204), this.u8(BB)) : BB < 65536 ? (this.u8(205), this.u16(BB)) : (this.u8(206), this.u32(BB)) : BB >= -32 ? this.u8(BB + 256) : BB >= -128 ? (this.u8(208), this.u8(BB + 256)) : BB >= -32768 ? (this.u8(209), this.u16(BB + 65536)) : (this.u8(210), this.u32(BB >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, BB, !1), this.at += 8)
      }
      bigint(BB) {
        const jB = BB >= NB && BB <= uB;
        if (!jB && (BB < 0n || BB > UB)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(jB ? 211 : 207), this.room(8), jB ? this.view.setBigInt64(this.at, BB, !1) : this.view.setBigUint64(this.at, BB, !1), this.at += 8
      }
      string(BB) {
        const jB = IB.encode(BB);
        this.head(jB.length, 217, 160, 218, 219), this.room(jB.length), this.buf.set(jB, this.at), this.at += jB.length
      }
      head(BB, jB, zB, QB, nB) {
        zB >= 0 && BB < (160 === zB ? 32 : 16) ? this.u8(zB | BB) : jB !== QB && BB < 256 ? (this.u8(jB), this.u8(BB)) : BB < 65536 ? (this.u8(QB), this.u16(BB)) : (this.u8(nB), this.u32(BB))
      }
      room(BB) {
        if (this.at + BB <= this.buf.length) return;
        let jB = 2 * this.buf.length;
        for (; jB < this.at + BB;) jB *= 2;
        const zB = new Uint8Array(jB);
        zB.set(this.buf.subarray(0, this.at)), this.buf = zB, this.view = new DataView(zB.buffer)
      }
      u8(BB) {
        this.room(1), this.buf[this.at++] = BB
      }
      u16(BB) {
        this.room(2), this.view.setUint16(this.at, BB, !1), this.at += 2
      }
      u32(BB) {
        this.room(4), this.view.setUint32(this.at, BB, !1), this.at += 4
      }
    }
  },
  51149: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      joinRoom: () => pB,
      leaveHeldSeat: () => kB,
      resumeRoom: () => sB
    });
    var QB = zB(174),
      nB = zB(1253),
      dB = zB(36568),
      IB = zB(40718),
      NB = zB(4887),
      uB = zB(40770),
      UB = zB(40983);
    const aB = Uint8Array.of(13, ...(0, IB.d)(QB.f));
    async function pB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await rB(BB, jB, zB)
      } catch (nB) {
        var QB;
        const dB = await (null === (QB = jB.optionsAfterRefusal) || void 0 === QB ? void 0 : QB.call(jB, nB));
        if (!dB) throw nB;
        return rB(BB, {
          ...jB,
          joinOptions: dB
        }, {
          ...zB,
          early: void 0
        })
      }
    }
    async function rB(BB, jB, zB) {
      var QB;
      const {
        signal: dB
      } = zB, IB = () => (0, UB.i)(jB.endpoint, jB.roomName, jB.joinOptions, zB), {
        early: NB
      } = zB, uB = NB ? null !== (QB = await NB.take(dB)) && void 0 !== QB ? QB : await NB.reserveInstead(IB, dB) : await IB();
      return (0, nB.q)(dB), yB(BB, jB.endpoint, uB, zB, !1)
    }
    async function sB(BB, jB, zB, QB) {
      let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const IB = await (0, UB.h)(jB, zB, QB, dB);
      return (0, nB.q)(dB.signal), yB(BB, jB, IB, dB, !0)
    }

    function JB(BB, jB, zB) {
      const QB = (0, UB.m)(BB, jB);
      return zB.createSocket ? zB.createSocket(QB) : new WebSocket(QB)
    }

    function mB(BB, jB, zB) {
      var QB;
      let nB = !1;
      return (null !== (QB = BB.setTimer) && void 0 !== QB ? QB : (BB, jB) => {
        setTimeout(BB, jB)
      })((() => {
        nB || jB()
      }), zB), () => {
        nB = !0
      }
    }
    async function yB(BB, jB, zB, QB, IB) {
      const {
        signal: UB
      } = QB, pB = JB(jB, zB, QB);
      let rB = !1,
        sB = null,
        yB = null;
      const kB = [];
      let GB = !1,
        LB = !1;
      const gB = BB => {
        var jB;
        LB = !0, null === (jB = yB) || void 0 === jB || jB.reject(new uB.d("the room socket closed before the resume", "closed", BB.code))
      };
      IB && pB.addEventListener("close", gB);
      const tB = (BB, jB) => {
          var zB;
          if (BB === (IB ? NB.E.Resumed : NB.E.Activated)) GB = !0, null === (zB = yB) || void 0 === zB || zB.resolve();
          else if (!IB || BB !== NB.E.ResumeRefused && BB !== NB.E.Activated)
            if (BB === NB.E.Error) {
              var QB;
              null === (QB = yB) || void 0 === QB || QB.reject(new uB.d(`the room refused the join (code ${jB})`, "roomError", jB))
            } else {
              var nB;
              null === (nB = yB) || void 0 === nB || nB.reject(new uB.d("the room socket closed before the join", "closed", jB, null, rB))
            }
          else {
            var dB;
            null === (dB = yB) || void 0 === dB || dB.reject(new uB.m("the core refused the resume: it held no game"))
          }
        },
        SB = BB.onConnection(((BB, jB, zB) => {
          null === sB ? kB.push([BB, jB, zB]) : BB === sB && tB(jB, zB)
        })),
        MB = BB.attachSocket(pB);
      if (null === MB) throw SB(), new uB.d("the core could not take the room socket", "attach");
      var EB;
      (sB = MB, IB) && (null === (EB = QB.onAttached) || void 0 === EB || EB.call(QB));
      const iB = IB ? null : new dB.d((() => {
        var jB, zB;
        null === (jB = BB.flushNet) || void 0 === jB || jB.call(BB), null === (zB = yB) || void 0 === zB || zB.reject(new dB.h(rB ? "socket" : "socket_unopened"))
      }));
      pB.addEventListener("open", (() => {
        rB = !0, null === iB || void 0 === iB || iB.socketOpened()
      }), {
        once: !0
      });
      let qB = !1;
      const fB = () => {
        if (qB) return;
        if (qB = !0, SB(), IB && (pB.removeEventListener("close", gB), !GB && !(null !== UB && void 0 !== UB && UB.aborted && (0, nB.f)(UB) instanceof uB.p))) return void(LB || BB.closeSocket(MB));
        GB && BB.leaveRoom(MB) || BB.sendRaw(MB, uB.h) ? mB(QB, (() => {
          BB.closeSocket(MB)
        }), uB.e) : BB.closeSocket(MB)
      };
      try {
        await new Promise(((jB, zB) => {
          const QB = () => {
            var jB;
            IB && (null === (jB = BB.flushNet) || void 0 === jB || jB.call(BB));
            zB((0, nB.f)(UB))
          };
          null === UB || void 0 === UB || UB.addEventListener("abort", QB, {
            once: !0
          }), yB = {
            resolve: () => {
              null === UB || void 0 === UB || UB.removeEventListener("abort", QB), jB()
            },
            reject: BB => {
              null === UB || void 0 === UB || UB.removeEventListener("abort", QB), zB(BB)
            }
          };
          for (const [BB, nB, dB] of kB.splice(0)) BB === sB && tB(nB, dB)
        })), null === iB || void 0 === iB || iB.answered()
      } catch (oB) {
        throw fB(), oB
      } finally {
        null === iB || void 0 === iB || iB.stop()
      }
      IB && pB.removeEventListener("close", gB);
      return {
        conn: MB,
        seat: zB,
        leave: fB,
        detach: () => {
          qB = !0, SB()
        },
        endJoinAd: () => !qB && BB.sendRaw(MB, aB)
      }
    }
    async function kB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const nB = JB(BB, await (0, UB.h)(BB, jB, zB, QB), QB);
        nB.binaryType = "arraybuffer", await new Promise((BB => {
          const jB = mB(QB, (() => {
            nB.close(), BB()
          }), uB.e);
          nB.addEventListener("open", (() => {
            nB.send(uB.h)
          })), nB.addEventListener("close", (() => {
            jB(), BB()
          }))
        }))
      } catch (nB) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", nB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);