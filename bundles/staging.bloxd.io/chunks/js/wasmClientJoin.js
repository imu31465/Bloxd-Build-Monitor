export const id = 58;
export const ids = [58];
export const modules = {
  40877: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu,
      f: () => Cu
    });
    const su = new TextDecoder;

    function Uu(uu) {
      const Eu = new Zu(uu),
        ju = Eu.value();
      if (Eu.at !== uu.length) throw new Error(`msgpack: ${uu.length-Eu.at} bytes after the value`);
      return ju
    }
    class Zu {
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
        const Eu = this.at;
        if (Eu + uu > this.bytes.length) throw new Error(`msgpack: ${uu} bytes past the end at ${Eu}`);
        return this.at = Eu + uu, Eu
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
        const Eu = this.take(8);
        return uu ? this.view.getBigInt64(Eu, !1) : this.view.getBigUint64(Eu, !1)
      }
      str(uu) {
        const Eu = this.take(uu),
          ju = this.bytes;
        if (uu < 16) {
          let Uu = "";
          for (let Zu = Eu; Zu < Eu + uu; Zu++) {
            const Xu = ju[Zu];
            if (Xu >= 128) return su.decode(ju.subarray(Eu, Eu + uu));
            Uu += String.fromCharCode(Xu)
          }
          return Uu
        }
        return su.decode(ju.subarray(Eu, Eu + uu))
      }
      bin(uu) {
        const Eu = this.take(uu);
        return this.bytes.subarray(Eu, Eu + uu)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(uu) {
        this.enter();
        const Eu = [];
        for (let ju = 0; ju < uu; ju++) Eu.push(this.value());
        return this.depth--, Eu
      }
      map(uu) {
        this.enter();
        const Eu = {};
        for (let ju = 0; ju < uu; ju++) {
          const uu = this.value(),
            ju = this.value();
          Eu["__proto__" === uu ? "__proto_" : String(uu)] = ju
        }
        return this.depth--, Eu
      }
      ext(uu) {
        const Eu = this.view.getInt8(this.take(1)),
          ju = this.take(uu);
        if (0 !== Eu) {
          if (-1 === Eu) {
            if (1 === uu) return new Date(NaN);
            if (4 === uu) return new Date(1e3 * this.view.getUint32(ju, !1));
            if (8 === uu) {
              const uu = this.view.getUint32(ju, !1),
                Eu = uu >>> 2,
                su = 4294967296 * (3 & uu) + this.view.getUint32(ju + 4, !1);
              return new Date(1e3 * su + Eu / 1e6)
            }
            if (12 === uu) {
              const uu = this.view.getUint32(ju, !1),
                Eu = 4294967296 * this.view.getInt32(ju + 4, !1) + this.view.getUint32(ju + 8, !1);
              return new Date(1e3 * Eu + uu / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Eu} of ${uu} bytes`)
        }
      }
    }
    const Xu = new TextEncoder,
      lu = -(2n ** 63n),
      qu = 2n ** 63n - 1n,
      fu = 2n ** 64n - 1n;

    function Cu(uu) {
      const Eu = new bu;
      return Eu.value(uu, 0), Eu.bytes()
    }
    class bu {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(uu, Eu) {
        if (Eu > 512) throw new Error("msgpack: nested too deep");
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
              for (const ju of uu) this.value(ju, Eu + 1)
            } else {
              var ju, su;
              if (Object.getPrototypeOf(uu) !== Object.prototype && null !== Object.getPrototypeOf(uu)) throw new Error(`msgpack: can't encode a ${null!==(ju=null===(su=uu.constructor)||void 0===su?void 0:su.name)&&void 0!==ju?ju:"object"}`);
              {
                const ju = Object.keys(uu);
                this.head(ju.length, 222, 128, 222, 223);
                for (const su of ju) this.string(su), this.value(uu[su], Eu + 1)
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
        const Eu = uu >= lu && uu <= qu;
        if (!Eu && (uu < 0n || uu > fu)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Eu ? 211 : 207), this.room(8), Eu ? this.view.setBigInt64(this.at, uu, !1) : this.view.setBigUint64(this.at, uu, !1), this.at += 8
      }
      string(uu) {
        const Eu = Xu.encode(uu);
        this.head(Eu.length, 217, 160, 218, 219), this.room(Eu.length), this.buf.set(Eu, this.at), this.at += Eu.length
      }
      head(uu, Eu, ju, su, Uu) {
        ju >= 0 && uu < (160 === ju ? 32 : 16) ? this.u8(ju | uu) : Eu !== su && uu < 256 ? (this.u8(Eu), this.u8(uu)) : uu < 65536 ? (this.u8(su), this.u16(uu)) : (this.u8(Uu), this.u32(uu))
      }
      room(uu) {
        if (this.at + uu <= this.buf.length) return;
        let Eu = 2 * this.buf.length;
        for (; Eu < this.at + uu;) Eu *= 2;
        const ju = new Uint8Array(Eu);
        ju.set(this.buf.subarray(0, this.at)), this.buf = ju, this.view = new DataView(ju.buffer)
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
  51252: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      joinRoom: () => bu,
      leaveHeldSeat: () => Du,
      resumeRoom: () => Nu
    });
    var su = ju(166),
      Uu = ju(1259),
      Zu = ju(36870),
      Xu = ju(40877),
      lu = ju(4970),
      qu = ju(40935),
      fu = ju(41135);
    const Cu = Uint8Array.of(13, ...(0, Xu.f)(su.e));
    async function bu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await cu(uu, Eu, ju)
      } catch (Uu) {
        var su;
        const Zu = await (null === (su = Eu.optionsAfterRefusal) || void 0 === su ? void 0 : su.call(Eu, Uu));
        if (!Zu) throw Uu;
        return cu(uu, {
          ...Eu,
          joinOptions: Zu
        }, {
          ...ju,
          early: void 0
        })
      }
    }
    async function cu(uu, Eu, ju) {
      var su;
      const {
        signal: Zu
      } = ju, Xu = () => (0, fu.j)(Eu.endpoint, Eu.roomName, Eu.joinOptions, ju), {
        early: lu
      } = ju, qu = lu ? null !== (su = await lu.take(Zu)) && void 0 !== su ? su : await lu.reserveInstead(Xu, Zu) : await Xu();
      return (0, Uu.n)(Zu), hu(uu, Eu.endpoint, qu, ju, !1)
    }
    async function Nu(uu, Eu, ju, su) {
      let Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const Xu = await (0, fu.i)(Eu, ju, su, Zu);
      return (0, Uu.n)(Zu.signal), hu(uu, Eu, Xu, Zu, !0)
    }

    function Ou(uu, Eu, ju) {
      const su = (0, fu.l)(uu, Eu);
      return ju.createSocket ? ju.createSocket(su) : new WebSocket(su)
    }

    function Yu(uu, Eu, ju) {
      var su;
      let Uu = !1;
      return (null !== (su = uu.setTimer) && void 0 !== su ? su : (uu, Eu) => {
        setTimeout(uu, Eu)
      })((() => {
        Uu || Eu()
      }), ju), () => {
        Uu = !0
      }
    }
    async function hu(uu, Eu, ju, su, Xu) {
      const {
        signal: fu
      } = su, bu = Ou(Eu, ju, su);
      let cu = !1,
        Nu = null,
        hu = null;
      const Du = [];
      let gu = !1,
        Mu = !1;
      const eu = uu => {
        var Eu;
        Mu = !0, null === (Eu = hu) || void 0 === Eu || Eu.reject(new qu.e("the room socket closed before the resume", "closed", uu.code))
      };
      Xu && bu.addEventListener("close", eu);
      const Gu = (uu, Eu) => {
          var ju;
          if (uu === (Xu ? lu.z.Resumed : lu.z.Activated)) gu = !0, null === (ju = hu) || void 0 === ju || ju.resolve();
          else if (!Xu || uu !== lu.z.ResumeRefused && uu !== lu.z.Activated)
            if (uu === lu.z.Error) {
              var su;
              null === (su = hu) || void 0 === su || su.reject(new qu.e(`the room refused the join (code ${Eu})`, "roomError", Eu))
            } else {
              var Uu;
              null === (Uu = hu) || void 0 === Uu || Uu.reject(new qu.e("the room socket closed before the join", "closed", Eu, null, cu))
            }
          else {
            var Zu;
            null === (Zu = hu) || void 0 === Zu || Zu.reject(new qu.p("the core refused the resume: it held no game"))
          }
        },
        pu = uu.onConnection(((uu, Eu, ju) => {
          null === Nu ? Du.push([uu, Eu, ju]) : uu === Nu && Gu(Eu, ju)
        })),
        wu = uu.attachSocket(bu);
      if (null === wu) throw pu(), new qu.e("the core could not take the room socket", "attach");
      var Ju;
      (Nu = wu, Xu) && (null === (Ju = su.onAttached) || void 0 === Ju || Ju.call(su));
      const du = Xu ? null : new Zu.d((() => {
        var Eu, ju;
        null === (Eu = uu.flushNet) || void 0 === Eu || Eu.call(uu), null === (ju = hu) || void 0 === ju || ju.reject(new Zu.g(cu ? "socket" : "socket_unopened"))
      }));
      bu.addEventListener("open", (() => {
        cu = !0, null === du || void 0 === du || du.socketOpened()
      }), {
        once: !0
      });
      let au = !1;
      const Pu = () => {
        if (au) return;
        if (au = !0, pu(), Xu && (bu.removeEventListener("close", eu), !gu && !(null !== fu && void 0 !== fu && fu.aborted && (0, Uu.f)(fu) instanceof qu.r))) return void(Mu || uu.closeSocket(wu));
        gu && uu.leaveRoom(wu) || uu.sendRaw(wu, qu.n) ? Yu(su, (() => {
          uu.closeSocket(wu)
        }), qu.h) : uu.closeSocket(wu)
      };
      try {
        await new Promise(((Eu, ju) => {
          const su = () => {
            var Eu;
            Xu && (null === (Eu = uu.flushNet) || void 0 === Eu || Eu.call(uu));
            ju((0, Uu.f)(fu))
          };
          null === fu || void 0 === fu || fu.addEventListener("abort", su, {
            once: !0
          }), hu = {
            resolve: () => {
              null === fu || void 0 === fu || fu.removeEventListener("abort", su), Eu()
            },
            reject: uu => {
              null === fu || void 0 === fu || fu.removeEventListener("abort", su), ju(uu)
            }
          };
          for (const [uu, Uu, Zu] of Du.splice(0)) uu === Nu && Gu(Uu, Zu)
        })), null === du || void 0 === du || du.answered()
      } catch (ou) {
        throw Pu(), ou
      } finally {
        null === du || void 0 === du || du.stop()
      }
      Xu && bu.removeEventListener("close", eu);
      return {
        conn: wu,
        seat: ju,
        leave: Pu,
        detach: () => {
          au = !0, pu()
        },
        endJoinAd: () => !au && uu.sendRaw(wu, Cu)
      }
    }
    async function Du(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const Uu = Ou(uu, await (0, fu.i)(uu, Eu, ju, su), su);
        Uu.binaryType = "arraybuffer", await new Promise((uu => {
          const Eu = Yu(su, (() => {
            Uu.close(), uu()
          }), qu.h);
          Uu.addEventListener("open", (() => {
            Uu.send(qu.n)
          })), Uu.addEventListener("close", (() => {
            Eu(), uu()
          }))
        }))
      } catch (Uu) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", Uu)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);