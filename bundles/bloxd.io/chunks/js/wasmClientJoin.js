export const id = 54;
export const ids = [54];
export const modules = {
  40003: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      d: () => cU
    });
    const tU = new TextDecoder;

    function pU(UU) {
      const RU = new EU(UU),
        gU = RU.value();
      if (RU.at !== UU.length) throw new Error(`msgpack: ${UU.length-RU.at} bytes after the value`);
      return gU
    }
    class EU {
      constructor(UU) {
        this.bytes = UU, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(UU.buffer, UU.byteOffset, UU.byteLength)
      }
      value() {
        const UU = this.u8();
        if (UU <= 127) return UU;
        if (UU >= 224) return UU - 256;
        if (UU >= 128 && UU <= 143) return this.map(15 & UU);
        if (UU >= 144 && UU <= 159) return this.array(15 & UU);
        if (UU >= 160 && UU <= 191) return this.str(31 & UU);
        switch (UU) {
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
            throw new Error(`msgpack: unknown byte 0x${UU.toString(16)} at ${this.at-1}`)
        }
      }
      take(UU) {
        const RU = this.at;
        if (RU + UU > this.bytes.length) throw new Error(`msgpack: ${UU} bytes past the end at ${RU}`);
        return this.at = RU + UU, RU
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
      int64(UU) {
        const RU = this.take(8);
        return UU ? this.view.getBigInt64(RU, !1) : this.view.getBigUint64(RU, !1)
      }
      str(UU) {
        const RU = this.take(UU),
          gU = this.bytes;
        if (UU < 16) {
          let pU = "";
          for (let EU = RU; EU < RU + UU; EU++) {
            const PU = gU[EU];
            if (PU >= 128) return tU.decode(gU.subarray(RU, RU + UU));
            pU += String.fromCharCode(PU)
          }
          return pU
        }
        return tU.decode(gU.subarray(RU, RU + UU))
      }
      bin(UU) {
        const RU = this.take(UU);
        return this.bytes.subarray(RU, RU + UU)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(UU) {
        this.enter();
        const RU = [];
        for (let gU = 0; gU < UU; gU++) RU.push(this.value());
        return this.depth--, RU
      }
      map(UU) {
        this.enter();
        const RU = {};
        for (let gU = 0; gU < UU; gU++) {
          const UU = this.value(),
            gU = this.value();
          RU["__proto__" === UU ? "__proto_" : String(UU)] = gU
        }
        return this.depth--, RU
      }
      ext(UU) {
        const RU = this.view.getInt8(this.take(1)),
          gU = this.take(UU);
        if (0 !== RU) {
          if (-1 === RU) {
            if (1 === UU) return new Date(NaN);
            if (4 === UU) return new Date(1e3 * this.view.getUint32(gU, !1));
            if (8 === UU) {
              const UU = this.view.getUint32(gU, !1),
                RU = UU >>> 2,
                tU = 4294967296 * (3 & UU) + this.view.getUint32(gU + 4, !1);
              return new Date(1e3 * tU + RU / 1e6)
            }
            if (12 === UU) {
              const UU = this.view.getUint32(gU, !1),
                RU = 4294967296 * this.view.getInt32(gU + 4, !1) + this.view.getUint32(gU + 8, !1);
              return new Date(1e3 * RU + UU / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${RU} of ${UU} bytes`)
        }
      }
    }
    const PU = new TextEncoder,
      TU = -(2n ** 63n),
      qU = 2n ** 63n - 1n,
      KU = 2n ** 64n - 1n;

    function cU(UU) {
      const RU = new GU;
      return RU.value(UU, 0), RU.bytes()
    }
    class GU {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(UU, RU) {
        if (RU > 512) throw new Error("msgpack: nested too deep");
        switch (typeof UU) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(UU ? 195 : 194);
          case "number":
            return void this.number(UU);
          case "bigint":
            return void this.bigint(UU);
          case "string":
            return void this.string(UU);
          case "object":
            if (null === UU) this.u8(192);
            else if (UU instanceof Uint8Array) this.head(UU.length, 196, -1, 197, 198), this.room(UU.length), this.buf.set(UU, this.at), this.at += UU.length;
            else if (Array.isArray(UU)) {
              this.head(UU.length, 220, 144, 220, 221);
              for (const gU of UU) this.value(gU, RU + 1)
            } else {
              var gU, tU;
              if (Object.getPrototypeOf(UU) !== Object.prototype && null !== Object.getPrototypeOf(UU)) throw new Error(`msgpack: can't encode a ${null!==(gU=null===(tU=UU.constructor)||void 0===tU?void 0:tU.name)&&void 0!==gU?gU:"object"}`);
              {
                const gU = Object.keys(UU);
                this.head(gU.length, 222, 128, 222, 223);
                for (const tU of gU) this.string(tU), this.value(UU[tU], RU + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof UU)
        }
      }
      number(UU) {
        Number.isInteger(UU) && UU >= -2147483648 && UU <= 4294967295 ? UU >= 0 ? UU < 128 ? this.u8(UU) : UU < 256 ? (this.u8(204), this.u8(UU)) : UU < 65536 ? (this.u8(205), this.u16(UU)) : (this.u8(206), this.u32(UU)) : UU >= -32 ? this.u8(UU + 256) : UU >= -128 ? (this.u8(208), this.u8(UU + 256)) : UU >= -32768 ? (this.u8(209), this.u16(UU + 65536)) : (this.u8(210), this.u32(UU >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, UU, !1), this.at += 8)
      }
      bigint(UU) {
        const RU = UU >= TU && UU <= qU;
        if (!RU && (UU < 0n || UU > KU)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(RU ? 211 : 207), this.room(8), RU ? this.view.setBigInt64(this.at, UU, !1) : this.view.setBigUint64(this.at, UU, !1), this.at += 8
      }
      string(UU) {
        const RU = PU.encode(UU);
        this.head(RU.length, 217, 160, 218, 219), this.room(RU.length), this.buf.set(RU, this.at), this.at += RU.length
      }
      head(UU, RU, gU, tU, pU) {
        gU >= 0 && UU < (160 === gU ? 32 : 16) ? this.u8(gU | UU) : RU !== tU && UU < 256 ? (this.u8(RU), this.u8(UU)) : UU < 65536 ? (this.u8(tU), this.u16(UU)) : (this.u8(pU), this.u32(UU))
      }
      room(UU) {
        if (this.at + UU <= this.buf.length) return;
        let RU = 2 * this.buf.length;
        for (; RU < this.at + UU;) RU *= 2;
        const gU = new Uint8Array(RU);
        gU.set(this.buf.subarray(0, this.at)), this.buf = gU, this.view = new DataView(gU.buffer)
      }
      u8(UU) {
        this.room(1), this.buf[this.at++] = UU
      }
      u16(UU) {
        this.room(2), this.view.setUint16(this.at, UU, !1), this.at += 2
      }
      u32(UU) {
        this.room(4), this.view.setUint32(this.at, UU, !1), this.at += 4
      }
    }
  },
  42634: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      joinRoom: () => jU,
      leaveHeldSeat: () => WU,
      resumeRoom: () => CU
    });
    var tU = gU(165),
      pU = gU(1704),
      EU = gU(38621),
      PU = gU(1675),
      TU = gU(40003),
      qU = gU(4449),
      KU = gU(40253),
      cU = gU(40316);
    const GU = Uint8Array.of(13, ...(0, TU.d)(tU.f));
    async function jU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await uU(UU, RU, gU)
      } catch (pU) {
        var tU;
        const EU = await (null === (tU = RU.optionsAfterRefusal) || void 0 === tU ? void 0 : tU.call(RU, pU));
        if (!EU) throw pU;
        return uU(UU, {
          ...RU,
          joinOptions: EU
        }, {
          ...gU,
          early: void 0
        })
      }
    }
    async function uU(UU, RU, gU) {
      var tU;
      const {
        signal: EU
      } = gU, PU = () => (0, cU.h)(RU.endpoint, RU.roomName, RU.joinOptions, gU), {
        early: TU
      } = gU, qU = TU ? null !== (tU = await TU.take(EU)) && void 0 !== tU ? tU : await TU.reserveInstead(PU, EU) : await PU();
      return (0, pU.m)(EU), eU(UU, RU.endpoint, qU, gU, !1)
    }
    async function CU(UU, RU, gU, tU) {
      let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const PU = await (0, cU.g)(RU, gU, tU, EU);
      return (0, pU.m)(EU.signal), eU(UU, RU, PU, EU, !0)
    }

    function hU(UU, RU, gU) {
      const tU = (0, cU.l)(UU, RU);
      return gU.createSocket ? gU.createSocket(tU) : new WebSocket(tU)
    }

    function QU(UU, RU, gU) {
      var tU;
      let pU = !1;
      return (null !== (tU = UU.setTimer) && void 0 !== tU ? tU : (UU, RU) => {
        setTimeout(UU, RU)
      })((() => {
        pU || RU()
      }), gU), () => {
        pU = !0
      }
    }
    async function eU(UU, RU, gU, tU, TU) {
      const {
        signal: cU
      } = tU, jU = hU(RU, gU, tU);
      let uU = null,
        CU = null;
      const eU = [];
      let WU = !1,
        fU = !1;
      const xU = UU => {
        var RU;
        fU = !0, null === (RU = CU) || void 0 === RU || RU.reject(new KU.b("the room socket closed before the resume", "closed", UU.code))
      };
      TU && jU.addEventListener("close", xU);
      const mU = (UU, RU) => {
          var gU;
          if (UU === (TU ? qU.F.Resumed : qU.F.Activated)) WU = !0, null === (gU = CU) || void 0 === gU || gU.resolve();
          else if (!TU || UU !== qU.F.ResumeRefused && UU !== qU.F.Activated)
            if (UU === qU.F.Error) {
              var tU;
              null === (tU = CU) || void 0 === tU || tU.reject(new KU.b(`the room refused the join (code ${RU})`, "roomError", RU))
            } else {
              var pU;
              null === (pU = CU) || void 0 === pU || pU.reject(new KU.b("the room socket closed before the join", "closed", RU))
            }
          else {
            var EU;
            null === (EU = CU) || void 0 === EU || EU.reject(new KU.m("the core refused the resume: it held no game"))
          }
        },
        IU = UU.onConnection(((UU, RU, gU) => {
          null === uU ? eU.push([UU, RU, gU]) : UU === uU && mU(RU, gU)
        })),
        JU = UU.attachSocket(jU);
      if (null === JU) throw IU(), new KU.b("the core could not take the room socket", "attach");
      var wU;
      (uU = JU, TU) && (null === (wU = tU.onAttached) || void 0 === wU || wU.call(tU));
      const nU = TU ? null : new PU.d(EU.d, (() => {
        var RU, gU;
        null === (RU = UU.flushNet) || void 0 === RU || RU.call(UU), null === (gU = CU) || void 0 === gU || gU.reject(new EU.e)
      }));
      let bU = !1;
      const oU = () => {
        if (bU) return;
        if (bU = !0, IU(), TU && (jU.removeEventListener("close", xU), !WU && !(null !== cU && void 0 !== cU && cU.aborted && (0, pU.g)(cU) instanceof KU.p))) return void(fU || UU.closeSocket(JU));
        WU && UU.leaveRoom(JU) || UU.sendRaw(JU, KU.f) ? QU(tU, (() => {
          UU.closeSocket(JU)
        }), KU.d) : UU.closeSocket(JU)
      };
      try {
        await new Promise(((RU, gU) => {
          const tU = () => {
            var RU;
            TU && (null === (RU = UU.flushNet) || void 0 === RU || RU.call(UU));
            gU((0, pU.g)(cU))
          };
          null === cU || void 0 === cU || cU.addEventListener("abort", tU, {
            once: !0
          }), CU = {
            resolve: () => {
              null === cU || void 0 === cU || cU.removeEventListener("abort", tU), RU()
            },
            reject: UU => {
              null === cU || void 0 === cU || cU.removeEventListener("abort", tU), gU(UU)
            }
          };
          for (const [UU, pU, EU] of eU.splice(0)) UU === uU && mU(pU, EU)
        }))
      } catch (ZU) {
        throw oU(), ZU
      } finally {
        null === nU || void 0 === nU || nU.stop()
      }
      TU && jU.removeEventListener("close", xU);
      return {
        conn: JU,
        seat: gU,
        leave: oU,
        detach: () => {
          bU = !0, IU()
        },
        endJoinAd: () => {
          bU || UU.sendRaw(JU, GU)
        }
      }
    }
    async function WU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const pU = hU(UU, await (0, cU.g)(UU, RU, gU, tU), tU);
        pU.binaryType = "arraybuffer", await new Promise((UU => {
          const RU = QU(tU, (() => {
            pU.close(), UU()
          }), KU.d);
          pU.addEventListener("open", (() => {
            pU.send(KU.f)
          })), pU.addEventListener("close", (() => {
            RU(), UU()
          }))
        }))
      } catch (pU) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", pU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);