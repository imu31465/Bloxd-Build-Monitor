export const id = 58;
export const ids = [58];
export const modules = {
  40999: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG,
      g: () => VG
    });
    const wG = new TextDecoder;

    function SG(GG) {
      const bG = new LG(GG),
        ZG = bG.value();
      if (bG.at !== GG.length) throw new Error(`msgpack: ${GG.length-bG.at} bytes after the value`);
      return ZG
    }
    class LG {
      constructor(GG) {
        this.bytes = GG, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(GG.buffer, GG.byteOffset, GG.byteLength)
      }
      value() {
        const GG = this.u8();
        if (GG <= 127) return GG;
        if (GG >= 224) return GG - 256;
        if (GG >= 128 && GG <= 143) return this.map(15 & GG);
        if (GG >= 144 && GG <= 159) return this.array(15 & GG);
        if (GG >= 160 && GG <= 191) return this.str(31 & GG);
        switch (GG) {
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
            throw new Error(`msgpack: unknown byte 0x${GG.toString(16)} at ${this.at-1}`)
        }
      }
      take(GG) {
        const bG = this.at;
        if (bG + GG > this.bytes.length) throw new Error(`msgpack: ${GG} bytes past the end at ${bG}`);
        return this.at = bG + GG, bG
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
      int64(GG) {
        const bG = this.take(8);
        return GG ? this.view.getBigInt64(bG, !1) : this.view.getBigUint64(bG, !1)
      }
      str(GG) {
        const bG = this.take(GG),
          ZG = this.bytes;
        if (GG < 16) {
          let SG = "";
          for (let LG = bG; LG < bG + GG; LG++) {
            const yG = ZG[LG];
            if (yG >= 128) return wG.decode(ZG.subarray(bG, bG + GG));
            SG += String.fromCharCode(yG)
          }
          return SG
        }
        return wG.decode(ZG.subarray(bG, bG + GG))
      }
      bin(GG) {
        const bG = this.take(GG);
        return this.bytes.subarray(bG, bG + GG)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(GG) {
        this.enter();
        const bG = [];
        for (let ZG = 0; ZG < GG; ZG++) bG.push(this.value());
        return this.depth--, bG
      }
      map(GG) {
        this.enter();
        const bG = {};
        for (let ZG = 0; ZG < GG; ZG++) {
          const GG = this.value(),
            ZG = this.value();
          bG["__proto__" === GG ? "__proto_" : String(GG)] = ZG
        }
        return this.depth--, bG
      }
      ext(GG) {
        const bG = this.view.getInt8(this.take(1)),
          ZG = this.take(GG);
        if (0 !== bG) {
          if (-1 === bG) {
            if (1 === GG) return new Date(NaN);
            if (4 === GG) return new Date(1e3 * this.view.getUint32(ZG, !1));
            if (8 === GG) {
              const GG = this.view.getUint32(ZG, !1),
                bG = GG >>> 2,
                wG = 4294967296 * (3 & GG) + this.view.getUint32(ZG + 4, !1);
              return new Date(1e3 * wG + bG / 1e6)
            }
            if (12 === GG) {
              const GG = this.view.getUint32(ZG, !1),
                bG = 4294967296 * this.view.getInt32(ZG + 4, !1) + this.view.getUint32(ZG + 8, !1);
              return new Date(1e3 * bG + GG / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${bG} of ${GG} bytes`)
        }
      }
    }
    const yG = new TextEncoder,
      kG = -(2n ** 63n),
      UG = 2n ** 63n - 1n,
      YG = 2n ** 64n - 1n;

    function VG(GG) {
      const bG = new pG;
      return bG.value(GG, 0), bG.bytes()
    }
    class pG {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(GG, bG) {
        if (bG > 512) throw new Error("msgpack: nested too deep");
        switch (typeof GG) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(GG ? 195 : 194);
          case "number":
            return void this.number(GG);
          case "bigint":
            return void this.bigint(GG);
          case "string":
            return void this.string(GG);
          case "object":
            if (null === GG) this.u8(192);
            else if (GG instanceof Uint8Array) this.head(GG.length, 196, -1, 197, 198), this.room(GG.length), this.buf.set(GG, this.at), this.at += GG.length;
            else if (Array.isArray(GG)) {
              this.head(GG.length, 220, 144, 220, 221);
              for (const ZG of GG) this.value(ZG, bG + 1)
            } else {
              var ZG, wG;
              if (Object.getPrototypeOf(GG) !== Object.prototype && null !== Object.getPrototypeOf(GG)) throw new Error(`msgpack: can't encode a ${null!==(ZG=null===(wG=GG.constructor)||void 0===wG?void 0:wG.name)&&void 0!==ZG?ZG:"object"}`);
              {
                const ZG = Object.keys(GG);
                this.head(ZG.length, 222, 128, 222, 223);
                for (const wG of ZG) this.string(wG), this.value(GG[wG], bG + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof GG)
        }
      }
      number(GG) {
        Number.isInteger(GG) && GG >= -2147483648 && GG <= 4294967295 ? GG >= 0 ? GG < 128 ? this.u8(GG) : GG < 256 ? (this.u8(204), this.u8(GG)) : GG < 65536 ? (this.u8(205), this.u16(GG)) : (this.u8(206), this.u32(GG)) : GG >= -32 ? this.u8(GG + 256) : GG >= -128 ? (this.u8(208), this.u8(GG + 256)) : GG >= -32768 ? (this.u8(209), this.u16(GG + 65536)) : (this.u8(210), this.u32(GG >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, GG, !1), this.at += 8)
      }
      bigint(GG) {
        const bG = GG >= kG && GG <= UG;
        if (!bG && (GG < 0n || GG > YG)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(bG ? 211 : 207), this.room(8), bG ? this.view.setBigInt64(this.at, GG, !1) : this.view.setBigUint64(this.at, GG, !1), this.at += 8
      }
      string(GG) {
        const bG = yG.encode(GG);
        this.head(bG.length, 217, 160, 218, 219), this.room(bG.length), this.buf.set(bG, this.at), this.at += bG.length
      }
      head(GG, bG, ZG, wG, SG) {
        ZG >= 0 && GG < (160 === ZG ? 32 : 16) ? this.u8(ZG | GG) : bG !== wG && GG < 256 ? (this.u8(bG), this.u8(GG)) : GG < 65536 ? (this.u8(wG), this.u16(GG)) : (this.u8(SG), this.u32(GG))
      }
      room(GG) {
        if (this.at + GG <= this.buf.length) return;
        let bG = 2 * this.buf.length;
        for (; bG < this.at + GG;) bG *= 2;
        const ZG = new Uint8Array(bG);
        ZG.set(this.buf.subarray(0, this.at)), this.buf = ZG, this.view = new DataView(ZG.buffer)
      }
      u8(GG) {
        this.room(1), this.buf[this.at++] = GG
      }
      u16(GG) {
        this.room(2), this.view.setUint16(this.at, GG, !1), this.at += 2
      }
      u32(GG) {
        this.room(4), this.view.setUint32(this.at, GG, !1), this.at += 4
      }
    }
  },
  51420: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      joinRoom: () => pG,
      leaveHeldSeat: () => JG,
      resumeRoom: () => QG
    });
    var wG = ZG(140),
      SG = ZG(1169),
      LG = ZG(36826),
      yG = ZG(40999),
      kG = ZG(4810),
      UG = ZG(41065),
      YG = ZG(41299);
    const VG = Uint8Array.of(13, ...(0, yG.g)(wG.c));
    async function pG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await fG(GG, bG, ZG)
      } catch (SG) {
        var wG;
        const LG = await (null === (wG = bG.optionsAfterRefusal) || void 0 === wG ? void 0 : wG.call(bG, SG));
        if (!LG) throw SG;
        return fG(GG, {
          ...bG,
          joinOptions: LG
        }, {
          ...ZG,
          early: void 0
        })
      }
    }
    async function fG(GG, bG, ZG) {
      var wG;
      const {
        signal: LG
      } = ZG, yG = () => (0, YG.g)(bG.endpoint, bG.roomName, bG.joinOptions, ZG), {
        early: kG
      } = ZG, UG = kG ? null !== (wG = await kG.take(LG)) && void 0 !== wG ? wG : await kG.reserveInstead(yG, LG) : await yG();
      return (0, SG.p)(LG), dG(GG, bG.endpoint, UG, ZG, !1)
    }
    async function QG(GG, bG, ZG, wG) {
      let LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const yG = await (0, YG.d)(bG, ZG, wG, LG);
      return (0, SG.p)(LG.signal), dG(GG, bG, yG, LG, !0)
    }

    function KG(GG, bG, ZG) {
      const wG = (0, YG.i)(GG, bG);
      return ZG.createSocket ? ZG.createSocket(wG) : new WebSocket(wG)
    }

    function hG(GG, bG, ZG) {
      var wG;
      let SG = !1;
      return (null !== (wG = GG.setTimer) && void 0 !== wG ? wG : (GG, bG) => {
        setTimeout(GG, bG)
      })((() => {
        SG || bG()
      }), ZG), () => {
        SG = !0
      }
    }
    async function dG(GG, bG, ZG, wG, yG) {
      const {
        signal: YG
      } = wG, pG = KG(bG, ZG, wG);
      let fG = !1,
        QG = null,
        dG = null;
      const JG = [];
      let rG = !1,
        zG = !1;
      const EG = GG => {
        var bG;
        zG = !0, null === (bG = dG) || void 0 === bG || bG.reject(new UG.c("the room socket closed before the resume", "closed", GG.code))
      };
      yG && pG.addEventListener("close", EG);
      const oG = (GG, bG) => {
          var ZG;
          if (GG === (yG ? kG.M.Resumed : kG.M.Activated)) rG = !0, null === (ZG = dG) || void 0 === ZG || ZG.resolve();
          else if (!yG || GG !== kG.M.ResumeRefused && GG !== kG.M.Activated)
            if (GG === kG.M.Error) {
              var wG;
              null === (wG = dG) || void 0 === wG || wG.reject(new UG.c(`the room refused the join (code ${bG})`, "roomError", bG))
            } else {
              var SG;
              null === (SG = dG) || void 0 === SG || SG.reject(new UG.c("the room socket closed before the join", "closed", bG, null, fG))
            }
          else {
            var LG;
            null === (LG = dG) || void 0 === LG || LG.reject(new UG.l("the core refused the resume: it held no game"))
          }
        },
        XG = GG.onConnection(((GG, bG, ZG) => {
          null === QG ? JG.push([GG, bG, ZG]) : GG === QG && oG(bG, ZG)
        })),
        uG = GG.attachSocket(pG);
      if (null === uG) throw XG(), new UG.c("the core could not take the room socket", "attach");
      var iG;
      (QG = uG, yG) && (null === (iG = wG.onAttached) || void 0 === iG || iG.call(wG));
      const CG = yG ? null : new LG.d((() => {
        var bG, ZG;
        null === (bG = GG.flushNet) || void 0 === bG || bG.call(GG), null === (ZG = dG) || void 0 === ZG || ZG.reject(new LG.g(fG ? "socket" : "socket_unopened"))
      }));
      pG.addEventListener("open", (() => {
        fG = !0, null === CG || void 0 === CG || CG.socketOpened()
      }), {
        once: !0
      });
      let WG = !1;
      const mG = () => {
        if (WG) return;
        if (WG = !0, XG(), yG && (pG.removeEventListener("close", EG), !rG && !(null !== YG && void 0 !== YG && YG.aborted && (0, SG.h)(YG) instanceof UG.n))) return void(zG || GG.closeSocket(uG));
        rG && GG.leaveRoom(uG) || GG.sendRaw(uG, UG.i) ? hG(wG, (() => {
          GG.closeSocket(uG)
        }), UG.g) : GG.closeSocket(uG)
      };
      try {
        await new Promise(((bG, ZG) => {
          const wG = () => {
            var bG;
            yG && (null === (bG = GG.flushNet) || void 0 === bG || bG.call(GG));
            ZG((0, SG.h)(YG))
          };
          null === YG || void 0 === YG || YG.addEventListener("abort", wG, {
            once: !0
          }), dG = {
            resolve: () => {
              null === YG || void 0 === YG || YG.removeEventListener("abort", wG), bG()
            },
            reject: GG => {
              null === YG || void 0 === YG || YG.removeEventListener("abort", wG), ZG(GG)
            }
          };
          for (const [GG, SG, LG] of JG.splice(0)) GG === QG && oG(SG, LG)
        })), null === CG || void 0 === CG || CG.answered()
      } catch (IG) {
        throw mG(), IG
      } finally {
        null === CG || void 0 === CG || CG.stop()
      }
      yG && pG.removeEventListener("close", EG);
      return {
        conn: uG,
        seat: ZG,
        leave: mG,
        detach: () => {
          WG = !0, XG()
        },
        endJoinAd: () => !WG && GG.sendRaw(uG, VG)
      }
    }
    async function JG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const SG = KG(GG, await (0, YG.d)(GG, bG, ZG, wG), wG);
        SG.binaryType = "arraybuffer", await new Promise((GG => {
          const bG = hG(wG, (() => {
            SG.close(), GG()
          }), UG.g);
          SG.addEventListener("open", (() => {
            SG.send(UG.i)
          })), SG.addEventListener("close", (() => {
            bG(), GG()
          }))
        }))
      } catch (SG) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", SG)
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);