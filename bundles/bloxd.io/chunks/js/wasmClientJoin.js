export const id = 69;
export const ids = [69];
export const modules = {
  41893: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      g: () => wV
    });
    const JV = new TextDecoder;

    function YV(VV) {
      const eV = new UV(VV),
        xV = eV.value();
      if (eV.at !== VV.length) throw new Error(`msgpack: ${VV.length-eV.at} bytes after the value`);
      return xV
    }
    class UV {
      constructor(VV) {
        this.bytes = VV, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(VV.buffer, VV.byteOffset, VV.byteLength)
      }
      value() {
        const VV = this.u8();
        if (VV <= 127) return VV;
        if (VV >= 224) return VV - 256;
        if (VV >= 128 && VV <= 143) return this.map(15 & VV);
        if (VV >= 144 && VV <= 159) return this.array(15 & VV);
        if (VV >= 160 && VV <= 191) return this.str(31 & VV);
        switch (VV) {
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
            throw new Error(`msgpack: unknown byte 0x${VV.toString(16)} at ${this.at-1}`)
        }
      }
      take(VV) {
        const eV = this.at;
        if (eV + VV > this.bytes.length) throw new Error(`msgpack: ${VV} bytes past the end at ${eV}`);
        return this.at = eV + VV, eV
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
      int64(VV) {
        const eV = this.take(8);
        return VV ? this.view.getBigInt64(eV, !1) : this.view.getBigUint64(eV, !1)
      }
      str(VV) {
        const eV = this.take(VV),
          xV = this.bytes;
        if (VV < 16) {
          let YV = "";
          for (let UV = eV; UV < eV + VV; UV++) {
            const yV = xV[UV];
            if (yV >= 128) return JV.decode(xV.subarray(eV, eV + VV));
            YV += String.fromCharCode(yV)
          }
          return YV
        }
        return JV.decode(xV.subarray(eV, eV + VV))
      }
      bin(VV) {
        const eV = this.take(VV);
        return this.bytes.subarray(eV, eV + VV)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(VV) {
        this.enter();
        const eV = [];
        for (let xV = 0; xV < VV; xV++) eV.push(this.value());
        return this.depth--, eV
      }
      map(VV) {
        this.enter();
        const eV = {};
        for (let xV = 0; xV < VV; xV++) {
          const VV = this.value(),
            xV = this.value();
          eV["__proto__" === VV ? "__proto_" : String(VV)] = xV
        }
        return this.depth--, eV
      }
      ext(VV) {
        const eV = this.view.getInt8(this.take(1)),
          xV = this.take(VV);
        if (0 !== eV) {
          if (-1 === eV) {
            if (1 === VV) return new Date(NaN);
            if (4 === VV) return new Date(1e3 * this.view.getUint32(xV, !1));
            if (8 === VV) {
              const VV = this.view.getUint32(xV, !1),
                eV = VV >>> 2,
                JV = 4294967296 * (3 & VV) + this.view.getUint32(xV + 4, !1);
              return new Date(1e3 * JV + eV / 1e6)
            }
            if (12 === VV) {
              const VV = this.view.getUint32(xV, !1),
                eV = 4294967296 * this.view.getInt32(xV + 4, !1) + this.view.getUint32(xV + 8, !1);
              return new Date(1e3 * eV + VV / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${eV} of ${VV} bytes`)
        }
      }
    }
    const yV = new TextEncoder,
      pV = -(2n ** 63n),
      QV = 2n ** 63n - 1n,
      nV = 2n ** 64n - 1n;

    function wV(VV) {
      const eV = new ZV;
      return eV.value(VV, 0), eV.bytes()
    }
    class ZV {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(VV, eV) {
        if (eV > 512) throw new Error("msgpack: nested too deep");
        switch (typeof VV) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(VV ? 195 : 194);
          case "number":
            return void this.number(VV);
          case "bigint":
            return void this.bigint(VV);
          case "string":
            return void this.string(VV);
          case "object":
            if (null === VV) this.u8(192);
            else if (VV instanceof Uint8Array) this.head(VV.length, 196, -1, 197, 198), this.room(VV.length), this.buf.set(VV, this.at), this.at += VV.length;
            else if (Array.isArray(VV)) {
              this.head(VV.length, 220, 144, 220, 221);
              for (const xV of VV) this.value(xV, eV + 1)
            } else {
              var xV, JV;
              if (Object.getPrototypeOf(VV) !== Object.prototype && null !== Object.getPrototypeOf(VV)) throw new Error(`msgpack: can't encode a ${null!==(xV=null===(JV=VV.constructor)||void 0===JV?void 0:JV.name)&&void 0!==xV?xV:"object"}`);
              {
                const xV = Object.keys(VV);
                this.head(xV.length, 222, 128, 222, 223);
                for (const JV of xV) this.string(JV), this.value(VV[JV], eV + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof VV)
        }
      }
      number(VV) {
        Number.isInteger(VV) && VV >= -2147483648 && VV <= 4294967295 ? VV >= 0 ? VV < 128 ? this.u8(VV) : VV < 256 ? (this.u8(204), this.u8(VV)) : VV < 65536 ? (this.u8(205), this.u16(VV)) : (this.u8(206), this.u32(VV)) : VV >= -32 ? this.u8(VV + 256) : VV >= -128 ? (this.u8(208), this.u8(VV + 256)) : VV >= -32768 ? (this.u8(209), this.u16(VV + 65536)) : (this.u8(210), this.u32(VV >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, VV, !1), this.at += 8)
      }
      bigint(VV) {
        const eV = VV >= pV && VV <= QV;
        if (!eV && (VV < 0n || VV > nV)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(eV ? 211 : 207), this.room(8), eV ? this.view.setBigInt64(this.at, VV, !1) : this.view.setBigUint64(this.at, VV, !1), this.at += 8
      }
      string(VV) {
        const eV = yV.encode(VV);
        this.head(eV.length, 217, 160, 218, 219), this.room(eV.length), this.buf.set(eV, this.at), this.at += eV.length
      }
      head(VV, eV, xV, JV, YV) {
        xV >= 0 && VV < (160 === xV ? 32 : 16) ? this.u8(xV | VV) : eV !== JV && VV < 256 ? (this.u8(eV), this.u8(VV)) : VV < 65536 ? (this.u8(JV), this.u16(VV)) : (this.u8(YV), this.u32(VV))
      }
      room(VV) {
        if (this.at + VV <= this.buf.length) return;
        let eV = 2 * this.buf.length;
        for (; eV < this.at + VV;) eV *= 2;
        const xV = new Uint8Array(eV);
        xV.set(this.buf.subarray(0, this.at)), this.buf = xV, this.view = new DataView(xV.buffer)
      }
      u8(VV) {
        this.room(1), this.buf[this.at++] = VV
      }
      u16(VV) {
        this.room(2), this.view.setUint16(this.at, VV, !1), this.at += 2
      }
      u32(VV) {
        this.room(4), this.view.setUint32(this.at, VV, !1), this.at += 4
      }
    }
  },
  53950: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      joinRoom: () => ZV,
      leaveHeldSeat: () => BV,
      resumeRoom: () => rV
    });
    var JV = xV(165),
      YV = xV(1241),
      UV = xV(37633),
      yV = xV(41893),
      pV = xV(5297),
      QV = xV(41963),
      nV = xV(42195);
    const wV = Uint8Array.of(13, ...(0, yV.g)(JV.e));
    async function ZV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await vV(VV, eV, xV)
      } catch (YV) {
        var JV;
        const UV = await (null === (JV = eV.optionsAfterRefusal) || void 0 === JV ? void 0 : JV.call(eV, YV));
        if (!UV) throw YV;
        return vV(VV, {
          ...eV,
          joinOptions: UV
        }, {
          ...xV,
          early: void 0
        })
      }
    }
    async function vV(VV, eV, xV) {
      var JV;
      const {
        signal: UV
      } = xV, yV = () => (0, nV.j)(eV.endpoint, eV.roomName, eV.joinOptions, xV), {
        early: pV
      } = xV, QV = pV ? null !== (JV = await pV.take(UV)) && void 0 !== JV ? JV : await pV.reserveInstead(yV, UV) : await yV();
      return (0, YV.q)(UV), EV(VV, eV.endpoint, QV, xV, !1)
    }
    async function rV(VV, eV, xV, JV) {
      let UV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const yV = await (0, nV.f)(eV, xV, JV, UV);
      return (0, YV.q)(UV.signal), EV(VV, eV, yV, UV, !0)
    }

    function kV(VV, eV, xV) {
      const JV = (0, nV.n)(VV, eV);
      return xV.createSocket ? xV.createSocket(JV) : new WebSocket(JV)
    }

    function bV(VV, eV, xV) {
      var JV;
      let YV = !1;
      return (null !== (JV = VV.setTimer) && void 0 !== JV ? JV : (VV, eV) => {
        setTimeout(VV, eV)
      })((() => {
        YV || eV()
      }), xV), () => {
        YV = !0
      }
    }
    async function EV(VV, eV, xV, JV, yV) {
      const {
        signal: nV
      } = JV, ZV = kV(eV, xV, JV);
      let vV = !1,
        rV = null,
        EV = null;
      const BV = [];
      let jV = !1,
        qV = !1;
      const tV = VV => {
        var eV;
        qV = !0, null === (eV = EV) || void 0 === eV || eV.reject(new QV.c("the room socket closed before the resume", "closed", VV.code))
      };
      yV && ZV.addEventListener("close", tV);
      const FV = (VV, eV) => {
          var xV;
          if (VV === (yV ? pV.H.Resumed : pV.H.Activated)) jV = !0, null === (xV = EV) || void 0 === xV || xV.resolve();
          else if (!yV || VV !== pV.H.ResumeRefused && VV !== pV.H.Activated)
            if (VV === pV.H.Error) {
              var JV;
              null === (JV = EV) || void 0 === JV || JV.reject(new QV.c(`the room refused the join (code ${eV})`, "roomError", eV))
            } else {
              var YV;
              null === (YV = EV) || void 0 === YV || YV.reject(new QV.c("the room socket closed before the join", "closed", eV, null, vV))
            }
          else {
            var UV;
            null === (UV = EV) || void 0 === UV || UV.reject(new QV.o("the core refused the resume: it held no game"))
          }
        },
        TV = VV.onConnection(((VV, eV, xV) => {
          null === rV ? BV.push([VV, eV, xV]) : VV === rV && FV(eV, xV)
        })),
        PV = VV.attachSocket(ZV);
      if (null === PV) throw TV(), new QV.c("the core could not take the room socket", "attach");
      var AV;
      (rV = PV, yV) && (null === (AV = JV.onAttached) || void 0 === AV || AV.call(JV));
      const NV = yV ? null : new UV.c((() => {
        var eV, xV;
        null === (eV = VV.flushNet) || void 0 === eV || eV.call(VV), null === (xV = EV) || void 0 === xV || xV.reject(new UV.d(vV ? "socket" : "socket_unopened"))
      }));
      ZV.addEventListener("open", (() => {
        vV = !0, null === NV || void 0 === NV || NV.socketOpened()
      }), {
        once: !0
      });
      let XV = !1;
      const MV = () => {
        if (XV) return;
        if (XV = !0, TV(), yV && (ZV.removeEventListener("close", tV), !jV && !(null !== nV && void 0 !== nV && nV.aborted && (0, YV.g)(nV) instanceof QV.p))) return void(qV || VV.closeSocket(PV));
        jV && VV.leaveRoom(PV) || VV.sendRaw(PV, QV.k) ? bV(JV, (() => {
          VV.closeSocket(PV)
        }), QV.e) : VV.closeSocket(PV)
      };
      try {
        await new Promise(((eV, xV) => {
          const JV = () => {
            var eV;
            yV && (null === (eV = VV.flushNet) || void 0 === eV || eV.call(VV));
            xV((0, YV.g)(nV))
          };
          null === nV || void 0 === nV || nV.addEventListener("abort", JV, {
            once: !0
          }), EV = {
            resolve: () => {
              null === nV || void 0 === nV || nV.removeEventListener("abort", JV), eV()
            },
            reject: VV => {
              null === nV || void 0 === nV || nV.removeEventListener("abort", JV), xV(VV)
            }
          };
          for (const [VV, YV, UV] of BV.splice(0)) VV === rV && FV(YV, UV)
        })), null === NV || void 0 === NV || NV.answered()
      } catch (zV) {
        throw MV(), zV
      } finally {
        null === NV || void 0 === NV || NV.stop()
      }
      yV && ZV.removeEventListener("close", tV);
      return {
        conn: PV,
        seat: xV,
        leave: MV,
        detach: () => {
          XV = !0, TV()
        },
        endJoinAd: () => !XV && VV.sendRaw(PV, wV)
      }
    }
    async function BV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const YV = kV(VV, await (0, nV.f)(VV, eV, xV, JV), JV);
        YV.binaryType = "arraybuffer", await new Promise((VV => {
          const eV = bV(JV, (() => {
            YV.close(), VV()
          }), QV.e);
          YV.addEventListener("open", (() => {
            YV.send(QV.k)
          })), YV.addEventListener("close", (() => {
            eV(), VV()
          }))
        }))
      } catch (YV) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", YV)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);