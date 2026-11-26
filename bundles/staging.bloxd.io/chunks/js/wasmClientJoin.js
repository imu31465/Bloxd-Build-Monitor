export const id = 69;
export const ids = [69];
export const modules = {
  41630: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      e: () => MB
    });
    const YB = new TextDecoder;

    function DB(BB) {
      const OB = new QB(BB),
        GB = OB.value();
      if (OB.at !== BB.length) throw new Error(`msgpack: ${BB.length-OB.at} bytes after the value`);
      return GB
    }
    class QB {
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
        const OB = this.at;
        if (OB + BB > this.bytes.length) throw new Error(`msgpack: ${BB} bytes past the end at ${OB}`);
        return this.at = OB + BB, OB
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
        const OB = this.take(8);
        return BB ? this.view.getBigInt64(OB, !1) : this.view.getBigUint64(OB, !1)
      }
      str(BB) {
        const OB = this.take(BB),
          GB = this.bytes;
        if (BB < 16) {
          let DB = "";
          for (let QB = OB; QB < OB + BB; QB++) {
            const oB = GB[QB];
            if (oB >= 128) return YB.decode(GB.subarray(OB, OB + BB));
            DB += String.fromCharCode(oB)
          }
          return DB
        }
        return YB.decode(GB.subarray(OB, OB + BB))
      }
      bin(BB) {
        const OB = this.take(BB);
        return this.bytes.subarray(OB, OB + BB)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(BB) {
        this.enter();
        const OB = [];
        for (let GB = 0; GB < BB; GB++) OB.push(this.value());
        return this.depth--, OB
      }
      map(BB) {
        this.enter();
        const OB = {};
        for (let GB = 0; GB < BB; GB++) {
          const BB = this.value(),
            GB = this.value();
          OB["__proto__" === BB ? "__proto_" : String(BB)] = GB
        }
        return this.depth--, OB
      }
      ext(BB) {
        const OB = this.view.getInt8(this.take(1)),
          GB = this.take(BB);
        if (0 !== OB) {
          if (-1 === OB) {
            if (1 === BB) return new Date(NaN);
            if (4 === BB) return new Date(1e3 * this.view.getUint32(GB, !1));
            if (8 === BB) {
              const BB = this.view.getUint32(GB, !1),
                OB = BB >>> 2,
                YB = 4294967296 * (3 & BB) + this.view.getUint32(GB + 4, !1);
              return new Date(1e3 * YB + OB / 1e6)
            }
            if (12 === BB) {
              const BB = this.view.getUint32(GB, !1),
                OB = 4294967296 * this.view.getInt32(GB + 4, !1) + this.view.getUint32(GB + 8, !1);
              return new Date(1e3 * OB + BB / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${OB} of ${BB} bytes`)
        }
      }
    }
    const oB = new TextEncoder,
      jB = -(2n ** 63n),
      yB = 2n ** 63n - 1n,
      JB = 2n ** 64n - 1n;

    function MB(BB) {
      const OB = new PB;
      return OB.value(BB, 0), OB.bytes()
    }
    class PB {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(BB, OB) {
        if (OB > 512) throw new Error("msgpack: nested too deep");
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
              for (const GB of BB) this.value(GB, OB + 1)
            } else {
              var GB, YB;
              if (Object.getPrototypeOf(BB) !== Object.prototype && null !== Object.getPrototypeOf(BB)) throw new Error(`msgpack: can't encode a ${null!==(GB=null===(YB=BB.constructor)||void 0===YB?void 0:YB.name)&&void 0!==GB?GB:"object"}`);
              {
                const GB = Object.keys(BB);
                this.head(GB.length, 222, 128, 222, 223);
                for (const YB of GB) this.string(YB), this.value(BB[YB], OB + 1)
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
        const OB = BB >= jB && BB <= yB;
        if (!OB && (BB < 0n || BB > JB)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(OB ? 211 : 207), this.room(8), OB ? this.view.setBigInt64(this.at, BB, !1) : this.view.setBigUint64(this.at, BB, !1), this.at += 8
      }
      string(BB) {
        const OB = oB.encode(BB);
        this.head(OB.length, 217, 160, 218, 219), this.room(OB.length), this.buf.set(OB, this.at), this.at += OB.length
      }
      head(BB, OB, GB, YB, DB) {
        GB >= 0 && BB < (160 === GB ? 32 : 16) ? this.u8(GB | BB) : OB !== YB && BB < 256 ? (this.u8(OB), this.u8(BB)) : BB < 65536 ? (this.u8(YB), this.u16(BB)) : (this.u8(DB), this.u32(BB))
      }
      room(BB) {
        if (this.at + BB <= this.buf.length) return;
        let OB = 2 * this.buf.length;
        for (; OB < this.at + BB;) OB *= 2;
        const GB = new Uint8Array(OB);
        GB.set(this.buf.subarray(0, this.at)), this.buf = GB, this.view = new DataView(GB.buffer)
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
  54057: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      joinRoom: () => PB,
      leaveHeldSeat: () => NB,
      resumeRoom: () => lB
    });
    var YB = GB(162),
      DB = GB(1200),
      QB = GB(37160),
      oB = GB(41630),
      jB = GB(5281),
      yB = GB(41692),
      JB = GB(41916);
    const MB = Uint8Array.of(13, ...(0, oB.e)(YB.g));
    async function PB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await zB(BB, OB, GB)
      } catch (DB) {
        var YB;
        const QB = await (null === (YB = OB.optionsAfterRefusal) || void 0 === YB ? void 0 : YB.call(OB, DB));
        if (!QB) throw DB;
        return zB(BB, {
          ...OB,
          joinOptions: QB
        }, {
          ...GB,
          early: void 0
        })
      }
    }
    async function zB(BB, OB, GB) {
      var YB;
      const {
        signal: QB
      } = GB, oB = () => (0, JB.i)(OB.endpoint, OB.roomName, OB.joinOptions, GB), {
        early: jB
      } = GB, yB = jB ? null !== (YB = await jB.take(QB)) && void 0 !== YB ? YB : await jB.reserveInstead(oB, QB) : await oB();
      return (0, DB.r)(QB), ZB(BB, OB.endpoint, yB, GB, !1)
    }
    async function lB(BB, OB, GB, YB) {
      let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const oB = await (0, JB.g)(OB, GB, YB, QB);
      return (0, DB.r)(QB.signal), ZB(BB, OB, oB, QB, !0)
    }

    function pB(BB, OB, GB) {
      const YB = (0, JB.k)(BB, OB);
      return GB.createSocket ? GB.createSocket(YB) : new WebSocket(YB)
    }

    function qB(BB, OB, GB) {
      var YB;
      let DB = !1;
      return (null !== (YB = BB.setTimer) && void 0 !== YB ? YB : (BB, OB) => {
        setTimeout(BB, OB)
      })((() => {
        DB || OB()
      }), GB), () => {
        DB = !0
      }
    }
    async function ZB(BB, OB, GB, YB, oB) {
      const {
        signal: JB
      } = YB, PB = pB(OB, GB, YB);
      let zB = !1,
        lB = null,
        ZB = null;
      const NB = [];
      let RB = !1,
        WB = !1;
      const AB = BB => {
        var OB;
        WB = !0, null === (OB = ZB) || void 0 === OB || OB.reject(new yB.d("the room socket closed before the resume", "closed", BB.code))
      };
      oB && PB.addEventListener("close", AB);
      const VB = (BB, OB) => {
          var GB;
          if (BB === (oB ? jB.E.Resumed : jB.E.Activated)) RB = !0, null === (GB = ZB) || void 0 === GB || GB.resolve();
          else if (!oB || BB !== jB.E.ResumeRefused && BB !== jB.E.Activated)
            if (BB === jB.E.Error) {
              var YB;
              null === (YB = ZB) || void 0 === YB || YB.reject(new yB.d(`the room refused the join (code ${OB})`, "roomError", OB))
            } else {
              var DB;
              null === (DB = ZB) || void 0 === DB || DB.reject(new yB.d("the room socket closed before the join", "closed", OB, null, zB))
            }
          else {
            var QB;
            null === (QB = ZB) || void 0 === QB || QB.reject(new yB.m("the core refused the resume: it held no game"))
          }
        },
        SB = BB.onConnection(((BB, OB, GB) => {
          null === lB ? NB.push([BB, OB, GB]) : BB === lB && VB(OB, GB)
        })),
        nB = BB.attachSocket(PB);
      if (null === nB) throw SB(), new yB.d("the core could not take the room socket", "attach");
      var UB;
      (lB = nB, oB) && (null === (UB = YB.onAttached) || void 0 === UB || UB.call(YB));
      const fB = oB ? null : new QB.c((() => {
        var OB, GB;
        null === (OB = BB.flushNet) || void 0 === OB || OB.call(BB), null === (GB = ZB) || void 0 === GB || GB.reject(new QB.d(zB ? "socket" : "socket_unopened"))
      }));
      PB.addEventListener("open", (() => {
        zB = !0, null === fB || void 0 === fB || fB.socketOpened()
      }), {
        once: !0
      });
      let kB = !1;
      const dB = () => {
        if (kB) return;
        if (kB = !0, SB(), oB && (PB.removeEventListener("close", AB), !RB && !(null !== JB && void 0 !== JB && JB.aborted && (0, DB.i)(JB) instanceof yB.o))) return void(WB || BB.closeSocket(nB));
        RB && BB.leaveRoom(nB) || BB.sendRaw(nB, yB.h) ? qB(YB, (() => {
          BB.closeSocket(nB)
        }), yB.f) : BB.closeSocket(nB)
      };
      try {
        await new Promise(((OB, GB) => {
          const YB = () => {
            var OB;
            oB && (null === (OB = BB.flushNet) || void 0 === OB || OB.call(BB));
            GB((0, DB.i)(JB))
          };
          null === JB || void 0 === JB || JB.addEventListener("abort", YB, {
            once: !0
          }), ZB = {
            resolve: () => {
              null === JB || void 0 === JB || JB.removeEventListener("abort", YB), OB()
            },
            reject: BB => {
              null === JB || void 0 === JB || JB.removeEventListener("abort", YB), GB(BB)
            }
          };
          for (const [BB, DB, QB] of NB.splice(0)) BB === lB && VB(DB, QB)
        })), null === fB || void 0 === fB || fB.answered()
      } catch (KB) {
        throw dB(), KB
      } finally {
        null === fB || void 0 === fB || fB.stop()
      }
      oB && PB.removeEventListener("close", AB);
      return {
        conn: nB,
        seat: GB,
        leave: dB,
        detach: () => {
          kB = !0, SB()
        },
        endJoinAd: () => !kB && BB.sendRaw(nB, MB)
      }
    }
    async function NB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const DB = pB(BB, await (0, JB.g)(BB, OB, GB, YB), YB);
        DB.binaryType = "arraybuffer", await new Promise((BB => {
          const OB = qB(YB, (() => {
            DB.close(), BB()
          }), yB.f);
          DB.addEventListener("open", (() => {
            DB.send(yB.h)
          })), DB.addEventListener("close", (() => {
            OB(), BB()
          }))
        }))
      } catch (DB) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", DB)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);