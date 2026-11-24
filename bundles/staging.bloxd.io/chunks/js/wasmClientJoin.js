export const id = 57;
export const ids = [57];
export const modules = {
  40695: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am,
      g: () => Rm
    });
    const hm = new TextDecoder;

    function Am(mm) {
      const Tm = new am(mm),
        fm = Tm.value();
      if (Tm.at !== mm.length) throw new Error(`msgpack: ${mm.length-Tm.at} bytes after the value`);
      return fm
    }
    class am {
      constructor(mm) {
        this.bytes = mm, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(mm.buffer, mm.byteOffset, mm.byteLength)
      }
      value() {
        const mm = this.u8();
        if (mm <= 127) return mm;
        if (mm >= 224) return mm - 256;
        if (mm >= 128 && mm <= 143) return this.map(15 & mm);
        if (mm >= 144 && mm <= 159) return this.array(15 & mm);
        if (mm >= 160 && mm <= 191) return this.str(31 & mm);
        switch (mm) {
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
            throw new Error(`msgpack: unknown byte 0x${mm.toString(16)} at ${this.at-1}`)
        }
      }
      take(mm) {
        const Tm = this.at;
        if (Tm + mm > this.bytes.length) throw new Error(`msgpack: ${mm} bytes past the end at ${Tm}`);
        return this.at = Tm + mm, Tm
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
      int64(mm) {
        const Tm = this.take(8);
        return mm ? this.view.getBigInt64(Tm, !1) : this.view.getBigUint64(Tm, !1)
      }
      str(mm) {
        const Tm = this.take(mm),
          fm = this.bytes;
        if (mm < 16) {
          let Am = "";
          for (let am = Tm; am < Tm + mm; am++) {
            const xm = fm[am];
            if (xm >= 128) return hm.decode(fm.subarray(Tm, Tm + mm));
            Am += String.fromCharCode(xm)
          }
          return Am
        }
        return hm.decode(fm.subarray(Tm, Tm + mm))
      }
      bin(mm) {
        const Tm = this.take(mm);
        return this.bytes.subarray(Tm, Tm + mm)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(mm) {
        this.enter();
        const Tm = [];
        for (let fm = 0; fm < mm; fm++) Tm.push(this.value());
        return this.depth--, Tm
      }
      map(mm) {
        this.enter();
        const Tm = {};
        for (let fm = 0; fm < mm; fm++) {
          const mm = this.value(),
            fm = this.value();
          Tm["__proto__" === mm ? "__proto_" : String(mm)] = fm
        }
        return this.depth--, Tm
      }
      ext(mm) {
        const Tm = this.view.getInt8(this.take(1)),
          fm = this.take(mm);
        if (0 !== Tm) {
          if (-1 === Tm) {
            if (1 === mm) return new Date(NaN);
            if (4 === mm) return new Date(1e3 * this.view.getUint32(fm, !1));
            if (8 === mm) {
              const mm = this.view.getUint32(fm, !1),
                Tm = mm >>> 2,
                hm = 4294967296 * (3 & mm) + this.view.getUint32(fm + 4, !1);
              return new Date(1e3 * hm + Tm / 1e6)
            }
            if (12 === mm) {
              const mm = this.view.getUint32(fm, !1),
                Tm = 4294967296 * this.view.getInt32(fm + 4, !1) + this.view.getUint32(fm + 8, !1);
              return new Date(1e3 * Tm + mm / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${Tm} of ${mm} bytes`)
        }
      }
    }
    const xm = new TextEncoder,
      wm = -(2n ** 63n),
      Dm = 2n ** 63n - 1n,
      im = 2n ** 64n - 1n;

    function Rm(mm) {
      const Tm = new pm;
      return Tm.value(mm, 0), Tm.bytes()
    }
    class pm {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(mm, Tm) {
        if (Tm > 512) throw new Error("msgpack: nested too deep");
        switch (typeof mm) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(mm ? 195 : 194);
          case "number":
            return void this.number(mm);
          case "bigint":
            return void this.bigint(mm);
          case "string":
            return void this.string(mm);
          case "object":
            if (null === mm) this.u8(192);
            else if (mm instanceof Uint8Array) this.head(mm.length, 196, -1, 197, 198), this.room(mm.length), this.buf.set(mm, this.at), this.at += mm.length;
            else if (Array.isArray(mm)) {
              this.head(mm.length, 220, 144, 220, 221);
              for (const fm of mm) this.value(fm, Tm + 1)
            } else {
              var fm, hm;
              if (Object.getPrototypeOf(mm) !== Object.prototype && null !== Object.getPrototypeOf(mm)) throw new Error(`msgpack: can't encode a ${null!==(fm=null===(hm=mm.constructor)||void 0===hm?void 0:hm.name)&&void 0!==fm?fm:"object"}`);
              {
                const fm = Object.keys(mm);
                this.head(fm.length, 222, 128, 222, 223);
                for (const hm of fm) this.string(hm), this.value(mm[hm], Tm + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof mm)
        }
      }
      number(mm) {
        Number.isInteger(mm) && mm >= -2147483648 && mm <= 4294967295 ? mm >= 0 ? mm < 128 ? this.u8(mm) : mm < 256 ? (this.u8(204), this.u8(mm)) : mm < 65536 ? (this.u8(205), this.u16(mm)) : (this.u8(206), this.u32(mm)) : mm >= -32 ? this.u8(mm + 256) : mm >= -128 ? (this.u8(208), this.u8(mm + 256)) : mm >= -32768 ? (this.u8(209), this.u16(mm + 65536)) : (this.u8(210), this.u32(mm >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, mm, !1), this.at += 8)
      }
      bigint(mm) {
        const Tm = mm >= wm && mm <= Dm;
        if (!Tm && (mm < 0n || mm > im)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(Tm ? 211 : 207), this.room(8), Tm ? this.view.setBigInt64(this.at, mm, !1) : this.view.setBigUint64(this.at, mm, !1), this.at += 8
      }
      string(mm) {
        const Tm = xm.encode(mm);
        this.head(Tm.length, 217, 160, 218, 219), this.room(Tm.length), this.buf.set(Tm, this.at), this.at += Tm.length
      }
      head(mm, Tm, fm, hm, Am) {
        fm >= 0 && mm < (160 === fm ? 32 : 16) ? this.u8(fm | mm) : Tm !== hm && mm < 256 ? (this.u8(Tm), this.u8(mm)) : mm < 65536 ? (this.u8(hm), this.u16(mm)) : (this.u8(Am), this.u32(mm))
      }
      room(mm) {
        if (this.at + mm <= this.buf.length) return;
        let Tm = 2 * this.buf.length;
        for (; Tm < this.at + mm;) Tm *= 2;
        const fm = new Uint8Array(Tm);
        fm.set(this.buf.subarray(0, this.at)), this.buf = fm, this.view = new DataView(fm.buffer)
      }
      u8(mm) {
        this.room(1), this.buf[this.at++] = mm
      }
      u16(mm) {
        this.room(2), this.view.setUint16(this.at, mm, !1), this.at += 2
      }
      u32(mm) {
        this.room(4), this.view.setUint32(this.at, mm, !1), this.at += 4
      }
    }
  },
  50966: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      joinRoom: () => pm,
      leaveHeldSeat: () => jm,
      resumeRoom: () => om
    });
    var hm = fm(168),
      Am = fm(1223),
      am = fm(36573),
      xm = fm(40695),
      wm = fm(4732),
      Dm = fm(40765),
      im = fm(40989);
    const Rm = Uint8Array.of(13, ...(0, xm.g)(hm.f));
    async function pm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await Em(mm, Tm, fm)
      } catch (Am) {
        var hm;
        const am = await (null === (hm = Tm.optionsAfterRefusal) || void 0 === hm ? void 0 : hm.call(Tm, Am));
        if (!am) throw Am;
        return Em(mm, {
          ...Tm,
          joinOptions: am
        }, {
          ...fm,
          early: void 0
        })
      }
    }
    async function Em(mm, Tm, fm) {
      var hm;
      const {
        signal: am
      } = fm, xm = () => (0, im.j)(Tm.endpoint, Tm.roomName, Tm.joinOptions, fm), {
        early: wm
      } = fm, Dm = wm ? null !== (hm = await wm.take(am)) && void 0 !== hm ? hm : await wm.reserveInstead(xm, am) : await xm();
      return (0, Am.h)(am), qm(mm, Tm.endpoint, Dm, fm, !1)
    }
    async function om(mm, Tm, fm, hm) {
      let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const xm = await (0, im.f)(Tm, fm, hm, am);
      return (0, Am.h)(am.signal), qm(mm, Tm, xm, am, !0)
    }

    function Om(mm, Tm, fm) {
      const hm = (0, im.l)(mm, Tm);
      return fm.createSocket ? fm.createSocket(hm) : new WebSocket(hm)
    }

    function Ym(mm, Tm, fm) {
      var hm;
      let Am = !1;
      return (null !== (hm = mm.setTimer) && void 0 !== hm ? hm : (mm, Tm) => {
        setTimeout(mm, Tm)
      })((() => {
        Am || Tm()
      }), fm), () => {
        Am = !0
      }
    }
    async function qm(mm, Tm, fm, hm, xm) {
      const {
        signal: im
      } = hm, pm = Om(Tm, fm, hm);
      let Em = !1,
        om = null,
        qm = null;
      const jm = [];
      let Vm = !1,
        Im = !1;
      const Km = mm => {
        var Tm;
        Im = !0, null === (Tm = qm) || void 0 === Tm || Tm.reject(new Dm.b("the room socket closed before the resume", "closed", mm.code))
      };
      xm && pm.addEventListener("close", Km);
      const Qm = (mm, Tm) => {
          var fm;
          if (mm === (xm ? wm.L.Resumed : wm.L.Activated)) Vm = !0, null === (fm = qm) || void 0 === fm || fm.resolve();
          else if (!xm || mm !== wm.L.ResumeRefused && mm !== wm.L.Activated)
            if (mm === wm.L.Error) {
              var hm;
              null === (hm = qm) || void 0 === hm || hm.reject(new Dm.b(`the room refused the join (code ${Tm})`, "roomError", Tm))
            } else {
              var Am;
              null === (Am = qm) || void 0 === Am || Am.reject(new Dm.b("the room socket closed before the join", "closed", Tm, null, Em))
            }
          else {
            var am;
            null === (am = qm) || void 0 === am || am.reject(new Dm.k("the core refused the resume: it held no game"))
          }
        },
        nm = mm.onConnection(((mm, Tm, fm) => {
          null === om ? jm.push([mm, Tm, fm]) : mm === om && Qm(Tm, fm)
        })),
        Jm = mm.attachSocket(pm);
      if (null === Jm) throw nm(), new Dm.b("the core could not take the room socket", "attach");
      var cm;
      (om = Jm, xm) && (null === (cm = hm.onAttached) || void 0 === cm || cm.call(hm));
      const zm = xm ? null : new am.c((() => {
        var Tm, fm;
        null === (Tm = mm.flushNet) || void 0 === Tm || Tm.call(mm), null === (fm = qm) || void 0 === fm || fm.reject(new am.e(Em ? "socket" : "socket_unopened"))
      }));
      pm.addEventListener("open", (() => {
        Em = !0, null === zm || void 0 === zm || zm.socketOpened()
      }), {
        once: !0
      });
      let Zm = !1;
      const km = () => {
        if (Zm) return;
        if (Zm = !0, nm(), xm && (pm.removeEventListener("close", Km), !Vm && !(null !== im && void 0 !== im && im.aborted && (0, Am.c)(im) instanceof Dm.m))) return void(Im || mm.closeSocket(Jm));
        Vm && mm.leaveRoom(Jm) || mm.sendRaw(Jm, Dm.i) ? Ym(hm, (() => {
          mm.closeSocket(Jm)
        }), Dm.d) : mm.closeSocket(Jm)
      };
      try {
        await new Promise(((Tm, fm) => {
          const hm = () => {
            var Tm;
            xm && (null === (Tm = mm.flushNet) || void 0 === Tm || Tm.call(mm));
            fm((0, Am.c)(im))
          };
          null === im || void 0 === im || im.addEventListener("abort", hm, {
            once: !0
          }), qm = {
            resolve: () => {
              null === im || void 0 === im || im.removeEventListener("abort", hm), Tm()
            },
            reject: mm => {
              null === im || void 0 === im || im.removeEventListener("abort", hm), fm(mm)
            }
          };
          for (const [mm, Am, am] of jm.splice(0)) mm === om && Qm(Am, am)
        })), null === zm || void 0 === zm || zm.answered()
      } catch (bm) {
        throw km(), bm
      } finally {
        null === zm || void 0 === zm || zm.stop()
      }
      xm && pm.removeEventListener("close", Km);
      return {
        conn: Jm,
        seat: fm,
        leave: km,
        detach: () => {
          Zm = !0, nm()
        },
        endJoinAd: () => !Zm && mm.sendRaw(Jm, Rm)
      }
    }
    async function jm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const Am = Om(mm, await (0, im.f)(mm, Tm, fm, hm), hm);
        Am.binaryType = "arraybuffer", await new Promise((mm => {
          const Tm = Ym(hm, (() => {
            Am.close(), mm()
          }), Dm.d);
          Am.addEventListener("open", (() => {
            Am.send(Dm.i)
          })), Am.addEventListener("close", (() => {
            Tm(), mm()
          }))
        }))
      } catch (Am) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", Am)
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);