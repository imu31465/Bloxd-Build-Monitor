export const id = 69;
export const ids = [69];
export const modules = {
  41685: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU,
      e: () => EU
    });
    const cU = new TextDecoder;

    function yU(UU) {
      const XU = new QU(UU),
        zU = XU.value();
      if (XU.at !== UU.length) throw new Error(`msgpack: ${UU.length-XU.at} bytes after the value`);
      return zU
    }
    class QU {
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
        const XU = this.at;
        if (XU + UU > this.bytes.length) throw new Error(`msgpack: ${UU} bytes past the end at ${XU}`);
        return this.at = XU + UU, XU
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
        const XU = this.take(8);
        return UU ? this.view.getBigInt64(XU, !1) : this.view.getBigUint64(XU, !1)
      }
      str(UU) {
        const XU = this.take(UU),
          zU = this.bytes;
        if (UU < 16) {
          let yU = "";
          for (let QU = XU; QU < XU + UU; QU++) {
            const AU = zU[QU];
            if (AU >= 128) return cU.decode(zU.subarray(XU, XU + UU));
            yU += String.fromCharCode(AU)
          }
          return yU
        }
        return cU.decode(zU.subarray(XU, XU + UU))
      }
      bin(UU) {
        const XU = this.take(UU);
        return this.bytes.subarray(XU, XU + UU)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(UU) {
        this.enter();
        const XU = [];
        for (let zU = 0; zU < UU; zU++) XU.push(this.value());
        return this.depth--, XU
      }
      map(UU) {
        this.enter();
        const XU = {};
        for (let zU = 0; zU < UU; zU++) {
          const UU = this.value(),
            zU = this.value();
          XU["__proto__" === UU ? "__proto_" : String(UU)] = zU
        }
        return this.depth--, XU
      }
      ext(UU) {
        const XU = this.view.getInt8(this.take(1)),
          zU = this.take(UU);
        if (0 !== XU) {
          if (-1 === XU) {
            if (1 === UU) return new Date(NaN);
            if (4 === UU) return new Date(1e3 * this.view.getUint32(zU, !1));
            if (8 === UU) {
              const UU = this.view.getUint32(zU, !1),
                XU = UU >>> 2,
                cU = 4294967296 * (3 & UU) + this.view.getUint32(zU + 4, !1);
              return new Date(1e3 * cU + XU / 1e6)
            }
            if (12 === UU) {
              const UU = this.view.getUint32(zU, !1),
                XU = 4294967296 * this.view.getInt32(zU + 4, !1) + this.view.getUint32(zU + 8, !1);
              return new Date(1e3 * XU + UU / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${XU} of ${UU} bytes`)
        }
      }
    }
    const AU = new TextEncoder,
      FU = -(2n ** 63n),
      oU = 2n ** 63n - 1n,
      DU = 2n ** 64n - 1n;

    function EU(UU) {
      const XU = new YU;
      return XU.value(UU, 0), XU.bytes()
    }
    class YU {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(UU, XU) {
        if (XU > 512) throw new Error("msgpack: nested too deep");
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
              for (const zU of UU) this.value(zU, XU + 1)
            } else {
              var zU, cU;
              if (Object.getPrototypeOf(UU) !== Object.prototype && null !== Object.getPrototypeOf(UU)) throw new Error(`msgpack: can't encode a ${null!==(zU=null===(cU=UU.constructor)||void 0===cU?void 0:cU.name)&&void 0!==zU?zU:"object"}`);
              {
                const zU = Object.keys(UU);
                this.head(zU.length, 222, 128, 222, 223);
                for (const cU of zU) this.string(cU), this.value(UU[cU], XU + 1)
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
        const XU = UU >= FU && UU <= oU;
        if (!XU && (UU < 0n || UU > DU)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(XU ? 211 : 207), this.room(8), XU ? this.view.setBigInt64(this.at, UU, !1) : this.view.setBigUint64(this.at, UU, !1), this.at += 8
      }
      string(UU) {
        const XU = AU.encode(UU);
        this.head(XU.length, 217, 160, 218, 219), this.room(XU.length), this.buf.set(XU, this.at), this.at += XU.length
      }
      head(UU, XU, zU, cU, yU) {
        zU >= 0 && UU < (160 === zU ? 32 : 16) ? this.u8(zU | UU) : XU !== cU && UU < 256 ? (this.u8(XU), this.u8(UU)) : UU < 65536 ? (this.u8(cU), this.u16(UU)) : (this.u8(yU), this.u32(UU))
      }
      room(UU) {
        if (this.at + UU <= this.buf.length) return;
        let XU = 2 * this.buf.length;
        for (; XU < this.at + UU;) XU *= 2;
        const zU = new Uint8Array(XU);
        zU.set(this.buf.subarray(0, this.at)), this.buf = zU, this.view = new DataView(zU.buffer)
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
  53743: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      joinRoom: () => YU,
      leaveHeldSeat: () => gU,
      resumeRoom: () => IU
    });
    var cU = zU(173),
      yU = zU(1220),
      QU = zU(37201),
      AU = zU(41685),
      FU = zU(5318),
      oU = zU(41750),
      DU = zU(42004);
    const EU = Uint8Array.of(13, ...(0, AU.e)(cU.h));
    async function YU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await NU(UU, XU, zU)
      } catch (yU) {
        var cU;
        const QU = await (null === (cU = XU.optionsAfterRefusal) || void 0 === cU ? void 0 : cU.call(XU, yU));
        if (!QU) throw yU;
        return NU(UU, {
          ...XU,
          joinOptions: QU
        }, {
          ...zU,
          early: void 0
        })
      }
    }
    async function NU(UU, XU, zU) {
      var cU;
      const {
        signal: QU
      } = zU, AU = () => (0, DU.f)(XU.endpoint, XU.roomName, XU.joinOptions, zU), {
        early: FU
      } = zU, oU = FU ? null !== (cU = await FU.take(QU)) && void 0 !== cU ? cU : await FU.reserveInstead(AU, QU) : await AU();
      return (0, yU.l)(QU), tU(UU, XU.endpoint, oU, zU, !1)
    }
    async function IU(UU, XU, zU, cU) {
      let QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const AU = await (0, DU.d)(XU, zU, cU, QU);
      return (0, yU.l)(QU.signal), tU(UU, XU, AU, QU, !0)
    }

    function pU(UU, XU, zU) {
      const cU = (0, DU.j)(UU, XU);
      return zU.createSocket ? zU.createSocket(cU) : new WebSocket(cU)
    }

    function aU(UU, XU, zU) {
      var cU;
      let yU = !1;
      return (null !== (cU = UU.setTimer) && void 0 !== cU ? cU : (UU, XU) => {
        setTimeout(UU, XU)
      })((() => {
        yU || XU()
      }), zU), () => {
        yU = !0
      }
    }
    async function tU(UU, XU, zU, cU, AU) {
      const {
        signal: DU
      } = cU, YU = pU(XU, zU, cU);
      let NU = !1,
        IU = null,
        tU = null;
      const gU = [];
      let kU = !1,
        GU = !1;
      const BU = UU => {
        var XU;
        GU = !0, null === (XU = tU) || void 0 === XU || XU.reject(new oU.c("the room socket closed before the resume", "closed", UU.code))
      };
      AU && YU.addEventListener("close", BU);
      const ZU = (UU, XU) => {
          var zU;
          if (UU === (AU ? FU.E.Resumed : FU.E.Activated)) kU = !0, null === (zU = tU) || void 0 === zU || zU.resolve();
          else if (!AU || UU !== FU.E.ResumeRefused && UU !== FU.E.Activated)
            if (UU === FU.E.Error) {
              var cU;
              null === (cU = tU) || void 0 === cU || cU.reject(new oU.c(`the room refused the join (code ${XU})`, "roomError", XU))
            } else {
              var yU;
              null === (yU = tU) || void 0 === yU || yU.reject(new oU.c("the room socket closed before the join", "closed", XU, null, NU))
            }
          else {
            var QU;
            null === (QU = tU) || void 0 === QU || QU.reject(new oU.o("the core refused the resume: it held no game"))
          }
        },
        RU = UU.onConnection(((UU, XU, zU) => {
          null === IU ? gU.push([UU, XU, zU]) : UU === IU && ZU(XU, zU)
        })),
        PU = UU.attachSocket(YU);
      if (null === PU) throw RU(), new oU.c("the core could not take the room socket", "attach");
      var WU;
      (IU = PU, AU) && (null === (WU = cU.onAttached) || void 0 === WU || WU.call(cU));
      const dU = AU ? null : new QU.b((() => {
        var XU, zU;
        null === (XU = UU.flushNet) || void 0 === XU || XU.call(UU), null === (zU = tU) || void 0 === zU || zU.reject(new QU.c(NU ? "socket" : "socket_unopened"))
      }));
      YU.addEventListener("open", (() => {
        NU = !0, null === dU || void 0 === dU || dU.socketOpened()
      }), {
        once: !0
      });
      let LU = !1;
      const eU = () => {
        if (LU) return;
        if (LU = !0, RU(), AU && (YU.removeEventListener("close", BU), !kU && !(null !== DU && void 0 !== DU && DU.aborted && (0, yU.e)(DU) instanceof oU.q))) return void(GU || UU.closeSocket(PU));
        kU && UU.leaveRoom(PU) || UU.sendRaw(PU, oU.k) ? aU(cU, (() => {
          UU.closeSocket(PU)
        }), oU.g) : UU.closeSocket(PU)
      };
      try {
        await new Promise(((XU, zU) => {
          const cU = () => {
            var XU;
            AU && (null === (XU = UU.flushNet) || void 0 === XU || XU.call(UU));
            zU((0, yU.e)(DU))
          };
          null === DU || void 0 === DU || DU.addEventListener("abort", cU, {
            once: !0
          }), tU = {
            resolve: () => {
              null === DU || void 0 === DU || DU.removeEventListener("abort", cU), XU()
            },
            reject: UU => {
              null === DU || void 0 === DU || DU.removeEventListener("abort", cU), zU(UU)
            }
          };
          for (const [UU, yU, QU] of gU.splice(0)) UU === IU && ZU(yU, QU)
        })), null === dU || void 0 === dU || dU.answered()
      } catch (CU) {
        throw eU(), CU
      } finally {
        null === dU || void 0 === dU || dU.stop()
      }
      AU && YU.removeEventListener("close", BU);
      return {
        conn: PU,
        seat: zU,
        leave: eU,
        detach: () => {
          LU = !0, RU()
        },
        endJoinAd: () => !LU && UU.sendRaw(PU, EU)
      }
    }
    async function gU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const yU = pU(UU, await (0, DU.d)(UU, XU, zU, cU), cU);
        yU.binaryType = "arraybuffer", await new Promise((UU => {
          const XU = aU(cU, (() => {
            yU.close(), UU()
          }), oU.g);
          yU.addEventListener("open", (() => {
            yU.send(oU.k)
          })), yU.addEventListener("close", (() => {
            XU(), UU()
          }))
        }))
      } catch (yU) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", yU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);