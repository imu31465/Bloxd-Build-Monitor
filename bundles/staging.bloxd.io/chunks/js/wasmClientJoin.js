export const id = 58;
export const ids = [58];
export const modules = {
  40682: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      i: () => nB
    });
    const TB = new TextDecoder;

    function JB(BB) {
      const IB = new oB(BB),
        ZB = IB.value();
      if (IB.at !== BB.length) throw new Error(`msgpack: ${BB.length-IB.at} bytes after the value`);
      return ZB
    }
    class oB {
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
        const IB = this.at;
        if (IB + BB > this.bytes.length) throw new Error(`msgpack: ${BB} bytes past the end at ${IB}`);
        return this.at = IB + BB, IB
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
        const IB = this.take(8);
        return BB ? this.view.getBigInt64(IB, !1) : this.view.getBigUint64(IB, !1)
      }
      str(BB) {
        const IB = this.take(BB),
          ZB = this.bytes;
        if (BB < 16) {
          let JB = "";
          for (let oB = IB; oB < IB + BB; oB++) {
            const GB = ZB[oB];
            if (GB >= 128) return TB.decode(ZB.subarray(IB, IB + BB));
            JB += String.fromCharCode(GB)
          }
          return JB
        }
        return TB.decode(ZB.subarray(IB, IB + BB))
      }
      bin(BB) {
        const IB = this.take(BB);
        return this.bytes.subarray(IB, IB + BB)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(BB) {
        this.enter();
        const IB = [];
        for (let ZB = 0; ZB < BB; ZB++) IB.push(this.value());
        return this.depth--, IB
      }
      map(BB) {
        this.enter();
        const IB = {};
        for (let ZB = 0; ZB < BB; ZB++) {
          const BB = this.value(),
            ZB = this.value();
          IB["__proto__" === BB ? "__proto_" : String(BB)] = ZB
        }
        return this.depth--, IB
      }
      ext(BB) {
        const IB = this.view.getInt8(this.take(1)),
          ZB = this.take(BB);
        if (0 !== IB) {
          if (-1 === IB) {
            if (1 === BB) return new Date(NaN);
            if (4 === BB) return new Date(1e3 * this.view.getUint32(ZB, !1));
            if (8 === BB) {
              const BB = this.view.getUint32(ZB, !1),
                IB = BB >>> 2,
                TB = 4294967296 * (3 & BB) + this.view.getUint32(ZB + 4, !1);
              return new Date(1e3 * TB + IB / 1e6)
            }
            if (12 === BB) {
              const BB = this.view.getUint32(ZB, !1),
                IB = 4294967296 * this.view.getInt32(ZB + 4, !1) + this.view.getUint32(ZB + 8, !1);
              return new Date(1e3 * IB + BB / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${IB} of ${BB} bytes`)
        }
      }
    }
    const GB = new TextEncoder,
      vB = -(2n ** 63n),
      kB = 2n ** 63n - 1n,
      cB = 2n ** 64n - 1n;

    function nB(BB) {
      const IB = new hB;
      return IB.value(BB, 0), IB.bytes()
    }
    class hB {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(BB, IB) {
        if (IB > 512) throw new Error("msgpack: nested too deep");
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
              for (const ZB of BB) this.value(ZB, IB + 1)
            } else {
              var ZB, TB;
              if (Object.getPrototypeOf(BB) !== Object.prototype && null !== Object.getPrototypeOf(BB)) throw new Error(`msgpack: can't encode a ${null!==(ZB=null===(TB=BB.constructor)||void 0===TB?void 0:TB.name)&&void 0!==ZB?ZB:"object"}`);
              {
                const ZB = Object.keys(BB);
                this.head(ZB.length, 222, 128, 222, 223);
                for (const TB of ZB) this.string(TB), this.value(BB[TB], IB + 1)
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
        const IB = BB >= vB && BB <= kB;
        if (!IB && (BB < 0n || BB > cB)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(IB ? 211 : 207), this.room(8), IB ? this.view.setBigInt64(this.at, BB, !1) : this.view.setBigUint64(this.at, BB, !1), this.at += 8
      }
      string(BB) {
        const IB = GB.encode(BB);
        this.head(IB.length, 217, 160, 218, 219), this.room(IB.length), this.buf.set(IB, this.at), this.at += IB.length
      }
      head(BB, IB, ZB, TB, JB) {
        ZB >= 0 && BB < (160 === ZB ? 32 : 16) ? this.u8(ZB | BB) : IB !== TB && BB < 256 ? (this.u8(IB), this.u8(BB)) : BB < 65536 ? (this.u8(TB), this.u16(BB)) : (this.u8(JB), this.u32(BB))
      }
      room(BB) {
        if (this.at + BB <= this.buf.length) return;
        let IB = 2 * this.buf.length;
        for (; IB < this.at + BB;) IB *= 2;
        const ZB = new Uint8Array(IB);
        ZB.set(this.buf.subarray(0, this.at)), this.buf = ZB, this.view = new DataView(ZB.buffer)
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
  51063: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      joinRoom: () => hB,
      leaveHeldSeat: () => yB,
      resumeRoom: () => FB
    });
    var TB = ZB(168),
      JB = ZB(1261),
      oB = ZB(36516),
      GB = ZB(40682),
      vB = ZB(4969),
      kB = ZB(40733),
      cB = ZB(40935);
    const nB = Uint8Array.of(13, ...(0, GB.i)(TB.f));
    async function hB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await zB(BB, IB, ZB)
      } catch (JB) {
        var TB;
        const oB = await (null === (TB = IB.optionsAfterRefusal) || void 0 === TB ? void 0 : TB.call(IB, JB));
        if (!oB) throw JB;
        return zB(BB, {
          ...IB,
          joinOptions: oB
        }, {
          ...ZB,
          early: void 0
        })
      }
    }
    async function zB(BB, IB, ZB) {
      var TB;
      const {
        signal: oB
      } = ZB, GB = () => (0, cB.k)(IB.endpoint, IB.roomName, IB.joinOptions, ZB), {
        early: vB
      } = ZB, kB = vB ? null !== (TB = await vB.take(oB)) && void 0 !== TB ? TB : await vB.reserveInstead(GB, oB) : await GB();
      return (0, JB.o)(oB), qB(BB, IB.endpoint, kB, ZB, !1)
    }
    async function FB(BB, IB, ZB, TB) {
      let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const GB = await (0, cB.h)(IB, ZB, TB, oB);
      return (0, JB.o)(oB.signal), qB(BB, IB, GB, oB, !0)
    }

    function NB(BB, IB, ZB) {
      const TB = (0, cB.l)(BB, IB);
      return ZB.createSocket ? ZB.createSocket(TB) : new WebSocket(TB)
    }

    function gB(BB, IB, ZB) {
      var TB;
      let JB = !1;
      return (null !== (TB = BB.setTimer) && void 0 !== TB ? TB : (BB, IB) => {
        setTimeout(BB, IB)
      })((() => {
        JB || IB()
      }), ZB), () => {
        JB = !0
      }
    }
    async function qB(BB, IB, ZB, TB, GB) {
      const {
        signal: cB
      } = TB, hB = NB(IB, ZB, TB);
      let zB = !1,
        FB = null,
        qB = null;
      const yB = [];
      let UB = !1,
        WB = !1;
      const dB = BB => {
        var IB;
        WB = !0, null === (IB = qB) || void 0 === IB || IB.reject(new kB.c("the room socket closed before the resume", "closed", BB.code))
      };
      GB && hB.addEventListener("close", dB);
      const CB = (BB, IB) => {
          var ZB;
          if (BB === (GB ? vB.G.Resumed : vB.G.Activated)) UB = !0, null === (ZB = qB) || void 0 === ZB || ZB.resolve();
          else if (!GB || BB !== vB.G.ResumeRefused && BB !== vB.G.Activated)
            if (BB === vB.G.Error) {
              var TB;
              null === (TB = qB) || void 0 === TB || TB.reject(new kB.c(`the room refused the join (code ${IB})`, "roomError", IB))
            } else {
              var JB;
              null === (JB = qB) || void 0 === JB || JB.reject(new kB.c("the room socket closed before the join", "closed", IB, null, zB))
            }
          else {
            var oB;
            null === (oB = qB) || void 0 === oB || oB.reject(new kB.q("the core refused the resume: it held no game"))
          }
        },
        QB = BB.onConnection(((BB, IB, ZB) => {
          null === FB ? yB.push([BB, IB, ZB]) : BB === FB && CB(IB, ZB)
        })),
        sB = BB.attachSocket(hB);
      if (null === sB) throw QB(), new kB.c("the core could not take the room socket", "attach");
      var wB;
      (FB = sB, GB) && (null === (wB = TB.onAttached) || void 0 === wB || wB.call(TB));
      const OB = GB ? null : new oB.c((() => {
        var IB, ZB;
        null === (IB = BB.flushNet) || void 0 === IB || IB.call(BB), null === (ZB = qB) || void 0 === ZB || ZB.reject(new oB.f(zB ? "socket" : "socket_unopened"))
      }));
      hB.addEventListener("open", (() => {
        zB = !0, null === OB || void 0 === OB || OB.socketOpened()
      }), {
        once: !0
      });
      let YB = !1;
      const iB = () => {
        if (YB) return;
        if (YB = !0, QB(), GB && (hB.removeEventListener("close", dB), !UB && !(null !== cB && void 0 !== cB && cB.aborted && (0, JB.e)(cB) instanceof kB.s))) return void(WB || BB.closeSocket(sB));
        UB && BB.leaveRoom(sB) || BB.sendRaw(sB, kB.l) ? gB(TB, (() => {
          BB.closeSocket(sB)
        }), kB.f) : BB.closeSocket(sB)
      };
      try {
        await new Promise(((IB, ZB) => {
          const TB = () => {
            var IB;
            GB && (null === (IB = BB.flushNet) || void 0 === IB || IB.call(BB));
            ZB((0, JB.e)(cB))
          };
          null === cB || void 0 === cB || cB.addEventListener("abort", TB, {
            once: !0
          }), qB = {
            resolve: () => {
              null === cB || void 0 === cB || cB.removeEventListener("abort", TB), IB()
            },
            reject: BB => {
              null === cB || void 0 === cB || cB.removeEventListener("abort", TB), ZB(BB)
            }
          };
          for (const [BB, JB, oB] of yB.splice(0)) BB === FB && CB(JB, oB)
        })), null === OB || void 0 === OB || OB.answered()
      } catch (pB) {
        throw iB(), pB
      } finally {
        null === OB || void 0 === OB || OB.stop()
      }
      GB && hB.removeEventListener("close", dB);
      return {
        conn: sB,
        seat: ZB,
        leave: iB,
        detach: () => {
          YB = !0, QB()
        },
        endJoinAd: () => !YB && BB.sendRaw(sB, nB)
      }
    }
    async function yB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const JB = NB(BB, await (0, cB.h)(BB, IB, ZB, TB), TB);
        JB.binaryType = "arraybuffer", await new Promise((BB => {
          const IB = gB(TB, (() => {
            JB.close(), BB()
          }), kB.f);
          JB.addEventListener("open", (() => {
            JB.send(kB.l)
          })), JB.addEventListener("close", (() => {
            IB(), BB()
          }))
        }))
      } catch (JB) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", JB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);