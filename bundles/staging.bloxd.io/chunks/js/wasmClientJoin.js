export const id = 69;
export const ids = [69];
export const modules = {
  41734: (ee, ie, He) => {
    He.d(ie, {
      b: () => be,
      f: () => oe
    });
    const ye = new TextDecoder;

    function be(ee) {
      const ie = new Me(ee),
        He = ie.value();
      if (ie.at !== ee.length) throw new Error(`msgpack: ${ee.length-ie.at} bytes after the value`);
      return He
    }
    class Me {
      constructor(ee) {
        this.bytes = ee, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(ee.buffer, ee.byteOffset, ee.byteLength)
      }
      value() {
        const ee = this.u8();
        if (ee <= 127) return ee;
        if (ee >= 224) return ee - 256;
        if (ee >= 128 && ee <= 143) return this.map(15 & ee);
        if (ee >= 144 && ee <= 159) return this.array(15 & ee);
        if (ee >= 160 && ee <= 191) return this.str(31 & ee);
        switch (ee) {
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
            throw new Error(`msgpack: unknown byte 0x${ee.toString(16)} at ${this.at-1}`)
        }
      }
      take(ee) {
        const ie = this.at;
        if (ie + ee > this.bytes.length) throw new Error(`msgpack: ${ee} bytes past the end at ${ie}`);
        return this.at = ie + ee, ie
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
      int64(ee) {
        const ie = this.take(8);
        return ee ? this.view.getBigInt64(ie, !1) : this.view.getBigUint64(ie, !1)
      }
      str(ee) {
        const ie = this.take(ee),
          He = this.bytes;
        if (ee < 16) {
          let be = "";
          for (let Me = ie; Me < ie + ee; Me++) {
            const Ke = He[Me];
            if (Ke >= 128) return ye.decode(He.subarray(ie, ie + ee));
            be += String.fromCharCode(Ke)
          }
          return be
        }
        return ye.decode(He.subarray(ie, ie + ee))
      }
      bin(ee) {
        const ie = this.take(ee);
        return this.bytes.subarray(ie, ie + ee)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(ee) {
        this.enter();
        const ie = [];
        for (let He = 0; He < ee; He++) ie.push(this.value());
        return this.depth--, ie
      }
      map(ee) {
        this.enter();
        const ie = {};
        for (let He = 0; He < ee; He++) {
          const ee = this.value(),
            He = this.value();
          ie["__proto__" === ee ? "__proto_" : String(ee)] = He
        }
        return this.depth--, ie
      }
      ext(ee) {
        const ie = this.view.getInt8(this.take(1)),
          He = this.take(ee);
        if (0 !== ie) {
          if (-1 === ie) {
            if (1 === ee) return new Date(NaN);
            if (4 === ee) return new Date(1e3 * this.view.getUint32(He, !1));
            if (8 === ee) {
              const ee = this.view.getUint32(He, !1),
                ie = ee >>> 2,
                ye = 4294967296 * (3 & ee) + this.view.getUint32(He + 4, !1);
              return new Date(1e3 * ye + ie / 1e6)
            }
            if (12 === ee) {
              const ee = this.view.getUint32(He, !1),
                ie = 4294967296 * this.view.getInt32(He + 4, !1) + this.view.getUint32(He + 8, !1);
              return new Date(1e3 * ie + ee / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${ie} of ${ee} bytes`)
        }
      }
    }
    const Ke = new TextEncoder,
      Ue = -(2n ** 63n),
      Fe = 2n ** 63n - 1n,
      Je = 2n ** 64n - 1n;

    function oe(ee) {
      const ie = new Re;
      return ie.value(ee, 0), ie.bytes()
    }
    class Re {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(ee, ie) {
        if (ie > 512) throw new Error("msgpack: nested too deep");
        switch (typeof ee) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(ee ? 195 : 194);
          case "number":
            return void this.number(ee);
          case "bigint":
            return void this.bigint(ee);
          case "string":
            return void this.string(ee);
          case "object":
            if (null === ee) this.u8(192);
            else if (ee instanceof Uint8Array) this.head(ee.length, 196, -1, 197, 198), this.room(ee.length), this.buf.set(ee, this.at), this.at += ee.length;
            else if (Array.isArray(ee)) {
              this.head(ee.length, 220, 144, 220, 221);
              for (const He of ee) this.value(He, ie + 1)
            } else {
              var He, ye;
              if (Object.getPrototypeOf(ee) !== Object.prototype && null !== Object.getPrototypeOf(ee)) throw new Error(`msgpack: can't encode a ${null!==(He=null===(ye=ee.constructor)||void 0===ye?void 0:ye.name)&&void 0!==He?He:"object"}`);
              {
                const He = Object.keys(ee);
                this.head(He.length, 222, 128, 222, 223);
                for (const ye of He) this.string(ye), this.value(ee[ye], ie + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof ee)
        }
      }
      number(ee) {
        Number.isInteger(ee) && ee >= -2147483648 && ee <= 4294967295 ? ee >= 0 ? ee < 128 ? this.u8(ee) : ee < 256 ? (this.u8(204), this.u8(ee)) : ee < 65536 ? (this.u8(205), this.u16(ee)) : (this.u8(206), this.u32(ee)) : ee >= -32 ? this.u8(ee + 256) : ee >= -128 ? (this.u8(208), this.u8(ee + 256)) : ee >= -32768 ? (this.u8(209), this.u16(ee + 65536)) : (this.u8(210), this.u32(ee >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, ee, !1), this.at += 8)
      }
      bigint(ee) {
        const ie = ee >= Ue && ee <= Fe;
        if (!ie && (ee < 0n || ee > Je)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(ie ? 211 : 207), this.room(8), ie ? this.view.setBigInt64(this.at, ee, !1) : this.view.setBigUint64(this.at, ee, !1), this.at += 8
      }
      string(ee) {
        const ie = Ke.encode(ee);
        this.head(ie.length, 217, 160, 218, 219), this.room(ie.length), this.buf.set(ie, this.at), this.at += ie.length
      }
      head(ee, ie, He, ye, be) {
        He >= 0 && ee < (160 === He ? 32 : 16) ? this.u8(He | ee) : ie !== ye && ee < 256 ? (this.u8(ie), this.u8(ee)) : ee < 65536 ? (this.u8(ye), this.u16(ee)) : (this.u8(be), this.u32(ee))
      }
      room(ee) {
        if (this.at + ee <= this.buf.length) return;
        let ie = 2 * this.buf.length;
        for (; ie < this.at + ee;) ie *= 2;
        const He = new Uint8Array(ie);
        He.set(this.buf.subarray(0, this.at)), this.buf = He, this.view = new DataView(He.buffer)
      }
      u8(ee) {
        this.room(1), this.buf[this.at++] = ee
      }
      u16(ee) {
        this.room(2), this.view.setUint16(this.at, ee, !1), this.at += 2
      }
      u32(ee) {
        this.room(4), this.view.setUint32(this.at, ee, !1), this.at += 4
      }
    }
  },
  54258: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      joinRoom: () => Re,
      leaveHeldSeat: () => Xe,
      resumeRoom: () => qe
    });
    var ye = He(153),
      be = He(1155),
      Me = He(37286),
      Ke = He(41734),
      Ue = He(5271),
      Fe = He(41782),
      Je = He(41999);
    const oe = Uint8Array.of(13, ...(0, Ke.f)(ye.f));
    async function Re(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await ke(ee, ie, He)
      } catch (be) {
        var ye;
        const Me = await (null === (ye = ie.optionsAfterRefusal) || void 0 === ye ? void 0 : ye.call(ie, be));
        if (!Me) throw be;
        return ke(ee, {
          ...ie,
          joinOptions: Me
        }, {
          ...He,
          early: void 0
        })
      }
    }
    async function ke(ee, ie, He) {
      var ye;
      const {
        signal: Me
      } = He, Ke = () => (0, Je.g)(ie.endpoint, ie.roomName, ie.joinOptions, He), {
        early: Ue
      } = He, Fe = Ue ? null !== (ye = await Ue.take(Me)) && void 0 !== ye ? ye : await Ue.reserveInstead(Ke, Me) : await Ke();
      return (0, be.r)(Me), pe(ee, ie.endpoint, Fe, He, !1)
    }
    async function qe(ee, ie, He, ye) {
      let Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const Ke = await (0, Je.f)(ie, He, ye, Me);
      return (0, be.r)(Me.signal), pe(ee, ie, Ke, Me, !0)
    }

    function fe(ee, ie, He) {
      const ye = (0, Je.j)(ee, ie);
      return He.createSocket ? He.createSocket(ye) : new WebSocket(ye)
    }

    function Te(ee, ie, He) {
      var ye;
      let be = !1;
      return (null !== (ye = ee.setTimer) && void 0 !== ye ? ye : (ee, ie) => {
        setTimeout(ee, ie)
      })((() => {
        be || ie()
      }), He), () => {
        be = !0
      }
    }
    async function pe(ee, ie, He, ye, Ke) {
      const {
        signal: Je
      } = ye, Re = fe(ie, He, ye);
      let ke = !1,
        qe = null,
        pe = null;
      const Xe = [];
      let ze = !1,
        Be = !1;
      const Ee = ee => {
        var ie;
        Be = !0, null === (ie = pe) || void 0 === ie || ie.reject(new Fe.c("the room socket closed before the resume", "closed", ee.code))
      };
      Ke && Re.addEventListener("close", Ee);
      const ge = (ee, ie) => {
          var He;
          if (ee === (Ke ? Ue.x.Resumed : Ue.x.Activated)) ze = !0, null === (He = pe) || void 0 === He || He.resolve();
          else if (!Ke || ee !== Ue.x.ResumeRefused && ee !== Ue.x.Activated)
            if (ee === Ue.x.Error) {
              var ye;
              null === (ye = pe) || void 0 === ye || ye.reject(new Fe.c(`the room refused the join (code ${ie})`, "roomError", ie))
            } else {
              var be;
              null === (be = pe) || void 0 === be || be.reject(new Fe.c("the room socket closed before the join", "closed", ie, null, ke))
            }
          else {
            var Me;
            null === (Me = pe) || void 0 === Me || Me.reject(new Fe.k("the core refused the resume: it held no game"))
          }
        },
        Oe = ee.onConnection(((ee, ie, He) => {
          null === qe ? Xe.push([ee, ie, He]) : ee === qe && ge(ie, He)
        })),
        de = ee.attachSocket(Re);
      if (null === de) throw Oe(), new Fe.c("the core could not take the room socket", "attach");
      var We;
      (qe = de, Ke) && (null === (We = ye.onAttached) || void 0 === We || We.call(ye));
      const te = Ke ? null : new Me.c((() => {
        var ie, He;
        null === (ie = ee.flushNet) || void 0 === ie || ie.call(ee), null === (He = pe) || void 0 === He || He.reject(new Me.d(ke ? "socket" : "socket_unopened"))
      }));
      Re.addEventListener("open", (() => {
        ke = !0, null === te || void 0 === te || te.socketOpened()
      }), {
        once: !0
      });
      let Ze = !1;
      const we = () => {
        if (Ze) return;
        if (Ze = !0, Oe(), Ke && (Re.removeEventListener("close", Ee), !ze && !(null !== Je && void 0 !== Je && Je.aborted && (0, be.f)(Je) instanceof Fe.o))) return void(Be || ee.closeSocket(de));
        ze && ee.leaveRoom(de) || ee.sendRaw(de, Fe.f) ? Te(ye, (() => {
          ee.closeSocket(de)
        }), Fe.d) : ee.closeSocket(de)
      };
      try {
        await new Promise(((ie, He) => {
          const ye = () => {
            var ie;
            Ke && (null === (ie = ee.flushNet) || void 0 === ie || ie.call(ee));
            He((0, be.f)(Je))
          };
          null === Je || void 0 === Je || Je.addEventListener("abort", ye, {
            once: !0
          }), pe = {
            resolve: () => {
              null === Je || void 0 === Je || Je.removeEventListener("abort", ye), ie()
            },
            reject: ee => {
              null === Je || void 0 === Je || Je.removeEventListener("abort", ye), He(ee)
            }
          };
          for (const [ee, be, Me] of Xe.splice(0)) ee === qe && ge(be, Me)
        })), null === te || void 0 === te || te.answered()
      } catch (De) {
        throw we(), De
      } finally {
        null === te || void 0 === te || te.stop()
      }
      Ke && Re.removeEventListener("close", Ee);
      return {
        conn: de,
        seat: He,
        leave: we,
        detach: () => {
          Ze = !0, Oe()
        },
        endJoinAd: () => !Ze && ee.sendRaw(de, oe)
      }
    }
    async function Xe(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const be = fe(ee, await (0, Je.f)(ee, ie, He, ye), ye);
        be.binaryType = "arraybuffer", await new Promise((ee => {
          const ie = Te(ye, (() => {
            be.close(), ee()
          }), Fe.d);
          be.addEventListener("open", (() => {
            be.send(Fe.f)
          })), be.addEventListener("close", (() => {
            ie(), ee()
          }))
        }))
      } catch (be) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", be)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);