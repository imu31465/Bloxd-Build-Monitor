export const id = 57;
export const ids = [57];
export const modules = {
  40658: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      f: () => IS
    });
    const tS = new TextDecoder;

    function bS(SS) {
      const HS = new XS(SS),
        gS = HS.value();
      if (HS.at !== SS.length) throw new Error(`msgpack: ${SS.length-HS.at} bytes after the value`);
      return gS
    }
    class XS {
      constructor(SS) {
        this.bytes = SS, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(SS.buffer, SS.byteOffset, SS.byteLength)
      }
      value() {
        const SS = this.u8();
        if (SS <= 127) return SS;
        if (SS >= 224) return SS - 256;
        if (SS >= 128 && SS <= 143) return this.map(15 & SS);
        if (SS >= 144 && SS <= 159) return this.array(15 & SS);
        if (SS >= 160 && SS <= 191) return this.str(31 & SS);
        switch (SS) {
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
            throw new Error(`msgpack: unknown byte 0x${SS.toString(16)} at ${this.at-1}`)
        }
      }
      take(SS) {
        const HS = this.at;
        if (HS + SS > this.bytes.length) throw new Error(`msgpack: ${SS} bytes past the end at ${HS}`);
        return this.at = HS + SS, HS
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
      int64(SS) {
        const HS = this.take(8);
        return SS ? this.view.getBigInt64(HS, !1) : this.view.getBigUint64(HS, !1)
      }
      str(SS) {
        const HS = this.take(SS),
          gS = this.bytes;
        if (SS < 16) {
          let bS = "";
          for (let XS = HS; XS < HS + SS; XS++) {
            const xS = gS[XS];
            if (xS >= 128) return tS.decode(gS.subarray(HS, HS + SS));
            bS += String.fromCharCode(xS)
          }
          return bS
        }
        return tS.decode(gS.subarray(HS, HS + SS))
      }
      bin(SS) {
        const HS = this.take(SS);
        return this.bytes.subarray(HS, HS + SS)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(SS) {
        this.enter();
        const HS = [];
        for (let gS = 0; gS < SS; gS++) HS.push(this.value());
        return this.depth--, HS
      }
      map(SS) {
        this.enter();
        const HS = {};
        for (let gS = 0; gS < SS; gS++) {
          const SS = this.value(),
            gS = this.value();
          HS["__proto__" === SS ? "__proto_" : String(SS)] = gS
        }
        return this.depth--, HS
      }
      ext(SS) {
        const HS = this.view.getInt8(this.take(1)),
          gS = this.take(SS);
        if (0 !== HS) {
          if (-1 === HS) {
            if (1 === SS) return new Date(NaN);
            if (4 === SS) return new Date(1e3 * this.view.getUint32(gS, !1));
            if (8 === SS) {
              const SS = this.view.getUint32(gS, !1),
                HS = SS >>> 2,
                tS = 4294967296 * (3 & SS) + this.view.getUint32(gS + 4, !1);
              return new Date(1e3 * tS + HS / 1e6)
            }
            if (12 === SS) {
              const SS = this.view.getUint32(gS, !1),
                HS = 4294967296 * this.view.getInt32(gS + 4, !1) + this.view.getUint32(gS + 8, !1);
              return new Date(1e3 * HS + SS / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${HS} of ${SS} bytes`)
        }
      }
    }
    const xS = new TextEncoder,
      NS = -(2n ** 63n),
      qS = 2n ** 63n - 1n,
      uS = 2n ** 64n - 1n;

    function IS(SS) {
      const HS = new fS;
      return HS.value(SS, 0), HS.bytes()
    }
    class fS {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(SS, HS) {
        if (HS > 512) throw new Error("msgpack: nested too deep");
        switch (typeof SS) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(SS ? 195 : 194);
          case "number":
            return void this.number(SS);
          case "bigint":
            return void this.bigint(SS);
          case "string":
            return void this.string(SS);
          case "object":
            if (null === SS) this.u8(192);
            else if (SS instanceof Uint8Array) this.head(SS.length, 196, -1, 197, 198), this.room(SS.length), this.buf.set(SS, this.at), this.at += SS.length;
            else if (Array.isArray(SS)) {
              this.head(SS.length, 220, 144, 220, 221);
              for (const gS of SS) this.value(gS, HS + 1)
            } else {
              var gS, tS;
              if (Object.getPrototypeOf(SS) !== Object.prototype && null !== Object.getPrototypeOf(SS)) throw new Error(`msgpack: can't encode a ${null!==(gS=null===(tS=SS.constructor)||void 0===tS?void 0:tS.name)&&void 0!==gS?gS:"object"}`);
              {
                const gS = Object.keys(SS);
                this.head(gS.length, 222, 128, 222, 223);
                for (const tS of gS) this.string(tS), this.value(SS[tS], HS + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof SS)
        }
      }
      number(SS) {
        Number.isInteger(SS) && SS >= -2147483648 && SS <= 4294967295 ? SS >= 0 ? SS < 128 ? this.u8(SS) : SS < 256 ? (this.u8(204), this.u8(SS)) : SS < 65536 ? (this.u8(205), this.u16(SS)) : (this.u8(206), this.u32(SS)) : SS >= -32 ? this.u8(SS + 256) : SS >= -128 ? (this.u8(208), this.u8(SS + 256)) : SS >= -32768 ? (this.u8(209), this.u16(SS + 65536)) : (this.u8(210), this.u32(SS >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, SS, !1), this.at += 8)
      }
      bigint(SS) {
        const HS = SS >= NS && SS <= qS;
        if (!HS && (SS < 0n || SS > uS)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(HS ? 211 : 207), this.room(8), HS ? this.view.setBigInt64(this.at, SS, !1) : this.view.setBigUint64(this.at, SS, !1), this.at += 8
      }
      string(SS) {
        const HS = xS.encode(SS);
        this.head(HS.length, 217, 160, 218, 219), this.room(HS.length), this.buf.set(HS, this.at), this.at += HS.length
      }
      head(SS, HS, gS, tS, bS) {
        gS >= 0 && SS < (160 === gS ? 32 : 16) ? this.u8(gS | SS) : HS !== tS && SS < 256 ? (this.u8(HS), this.u8(SS)) : SS < 65536 ? (this.u8(tS), this.u16(SS)) : (this.u8(bS), this.u32(SS))
      }
      room(SS) {
        if (this.at + SS <= this.buf.length) return;
        let HS = 2 * this.buf.length;
        for (; HS < this.at + SS;) HS *= 2;
        const gS = new Uint8Array(HS);
        gS.set(this.buf.subarray(0, this.at)), this.buf = gS, this.view = new DataView(gS.buffer)
      }
      u8(SS) {
        this.room(1), this.buf[this.at++] = SS
      }
      u16(SS) {
        this.room(2), this.view.setUint16(this.at, SS, !1), this.at += 2
      }
      u32(SS) {
        this.room(4), this.view.setUint32(this.at, SS, !1), this.at += 4
      }
    }
  },
  51e3: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      joinRoom: () => fS,
      leaveHeldSeat: () => CS,
      resumeRoom: () => aS
    });
    var tS = gS(160),
      bS = gS(1290),
      XS = gS(36503),
      xS = gS(40658),
      NS = gS(4926),
      qS = gS(40716),
      uS = gS(40931);
    const IS = Uint8Array.of(13, ...(0, xS.f)(tS.c));
    async function fS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await kS(SS, HS, gS)
      } catch (bS) {
        var tS;
        const XS = await (null === (tS = HS.optionsAfterRefusal) || void 0 === tS ? void 0 : tS.call(HS, bS));
        if (!XS) throw bS;
        return kS(SS, {
          ...HS,
          joinOptions: XS
        }, {
          ...gS,
          early: void 0
        })
      }
    }
    async function kS(SS, HS, gS) {
      var tS;
      const {
        signal: XS
      } = gS, xS = () => (0, uS.j)(HS.endpoint, HS.roomName, HS.joinOptions, gS), {
        early: NS
      } = gS, qS = NS ? null !== (tS = await NS.take(XS)) && void 0 !== tS ? tS : await NS.reserveInstead(xS, XS) : await xS();
      return (0, bS.m)(XS), GS(SS, HS.endpoint, qS, gS, !1)
    }
    async function aS(SS, HS, gS, tS) {
      let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const xS = await (0, uS.f)(HS, gS, tS, XS);
      return (0, bS.m)(XS.signal), GS(SS, HS, xS, XS, !0)
    }

    function KS(SS, HS, gS) {
      const tS = (0, uS.k)(SS, HS);
      return gS.createSocket ? gS.createSocket(tS) : new WebSocket(tS)
    }

    function jS(SS, HS, gS) {
      var tS;
      let bS = !1;
      return (null !== (tS = SS.setTimer) && void 0 !== tS ? tS : (SS, HS) => {
        setTimeout(SS, HS)
      })((() => {
        bS || HS()
      }), gS), () => {
        bS = !0
      }
    }
    async function GS(SS, HS, gS, tS, xS) {
      const {
        signal: uS
      } = tS, fS = KS(HS, gS, tS);
      let kS = !1,
        aS = null,
        GS = null;
      const CS = [];
      let nS = !1,
        PS = !1;
      const QS = SS => {
        var HS;
        PS = !0, null === (HS = GS) || void 0 === HS || HS.reject(new qS.d("the room socket closed before the resume", "closed", SS.code))
      };
      xS && fS.addEventListener("close", QS);
      const DS = (SS, HS) => {
          var gS;
          if (SS === (xS ? NS.E.Resumed : NS.E.Activated)) nS = !0, null === (gS = GS) || void 0 === gS || gS.resolve();
          else if (!xS || SS !== NS.E.ResumeRefused && SS !== NS.E.Activated)
            if (SS === NS.E.Error) {
              var tS;
              null === (tS = GS) || void 0 === tS || tS.reject(new qS.d(`the room refused the join (code ${HS})`, "roomError", HS))
            } else {
              var bS;
              null === (bS = GS) || void 0 === bS || bS.reject(new qS.d("the room socket closed before the join", "closed", HS, null, kS))
            }
          else {
            var XS;
            null === (XS = GS) || void 0 === XS || XS.reject(new qS.l("the core refused the resume: it held no game"))
          }
        },
        wS = SS.onConnection(((SS, HS, gS) => {
          null === aS ? CS.push([SS, HS, gS]) : SS === aS && DS(HS, gS)
        })),
        hS = SS.attachSocket(fS);
      if (null === hS) throw wS(), new qS.d("the core could not take the room socket", "attach");
      var ZS;
      (aS = hS, xS) && (null === (ZS = tS.onAttached) || void 0 === ZS || ZS.call(tS));
      const JS = xS ? null : new XS.d((() => {
        var HS, gS;
        null === (HS = SS.flushNet) || void 0 === HS || HS.call(SS), null === (gS = GS) || void 0 === gS || gS.reject(new XS.e(kS ? "socket" : "socket_unopened"))
      }));
      fS.addEventListener("open", (() => {
        kS = !0, null === JS || void 0 === JS || JS.socketOpened()
      }), {
        once: !0
      });
      let OS = !1;
      const dS = () => {
        if (OS) return;
        if (OS = !0, wS(), xS && (fS.removeEventListener("close", QS), !nS && !(null !== uS && void 0 !== uS && uS.aborted && (0, bS.c)(uS) instanceof qS.m))) return void(PS || SS.closeSocket(hS));
        nS && SS.leaveRoom(hS) || SS.sendRaw(hS, qS.j) ? jS(tS, (() => {
          SS.closeSocket(hS)
        }), qS.g) : SS.closeSocket(hS)
      };
      try {
        await new Promise(((HS, gS) => {
          const tS = () => {
            var HS;
            xS && (null === (HS = SS.flushNet) || void 0 === HS || HS.call(SS));
            gS((0, bS.c)(uS))
          };
          null === uS || void 0 === uS || uS.addEventListener("abort", tS, {
            once: !0
          }), GS = {
            resolve: () => {
              null === uS || void 0 === uS || uS.removeEventListener("abort", tS), HS()
            },
            reject: SS => {
              null === uS || void 0 === uS || uS.removeEventListener("abort", tS), gS(SS)
            }
          };
          for (const [SS, bS, XS] of CS.splice(0)) SS === aS && DS(bS, XS)
        })), null === JS || void 0 === JS || JS.answered()
      } catch (cS) {
        throw dS(), cS
      } finally {
        null === JS || void 0 === JS || JS.stop()
      }
      xS && fS.removeEventListener("close", QS);
      return {
        conn: hS,
        seat: gS,
        leave: dS,
        detach: () => {
          OS = !0, wS()
        },
        endJoinAd: () => !OS && SS.sendRaw(hS, IS)
      }
    }
    async function CS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const bS = KS(SS, await (0, uS.f)(SS, HS, gS, tS), tS);
        bS.binaryType = "arraybuffer", await new Promise((SS => {
          const HS = jS(tS, (() => {
            bS.close(), SS()
          }), qS.g);
          bS.addEventListener("open", (() => {
            bS.send(qS.j)
          })), bS.addEventListener("close", (() => {
            HS(), SS()
          }))
        }))
      } catch (bS) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", bS)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);