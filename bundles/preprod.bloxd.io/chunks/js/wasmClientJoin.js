export const id = 57;
export const ids = [57];
export const modules = {
  40457: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      f: () => FC
    });
    const QC = new TextDecoder;

    function wC(CC) {
      const zC = new bC(CC),
        ZC = zC.value();
      if (zC.at !== CC.length) throw new Error(`msgpack: ${CC.length-zC.at} bytes after the value`);
      return ZC
    }
    class bC {
      constructor(CC) {
        this.bytes = CC, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(CC.buffer, CC.byteOffset, CC.byteLength)
      }
      value() {
        const CC = this.u8();
        if (CC <= 127) return CC;
        if (CC >= 224) return CC - 256;
        if (CC >= 128 && CC <= 143) return this.map(15 & CC);
        if (CC >= 144 && CC <= 159) return this.array(15 & CC);
        if (CC >= 160 && CC <= 191) return this.str(31 & CC);
        switch (CC) {
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
            throw new Error(`msgpack: unknown byte 0x${CC.toString(16)} at ${this.at-1}`)
        }
      }
      take(CC) {
        const zC = this.at;
        if (zC + CC > this.bytes.length) throw new Error(`msgpack: ${CC} bytes past the end at ${zC}`);
        return this.at = zC + CC, zC
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
      int64(CC) {
        const zC = this.take(8);
        return CC ? this.view.getBigInt64(zC, !1) : this.view.getBigUint64(zC, !1)
      }
      str(CC) {
        const zC = this.take(CC),
          ZC = this.bytes;
        if (CC < 16) {
          let wC = "";
          for (let bC = zC; bC < zC + CC; bC++) {
            const nC = ZC[bC];
            if (nC >= 128) return QC.decode(ZC.subarray(zC, zC + CC));
            wC += String.fromCharCode(nC)
          }
          return wC
        }
        return QC.decode(ZC.subarray(zC, zC + CC))
      }
      bin(CC) {
        const zC = this.take(CC);
        return this.bytes.subarray(zC, zC + CC)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(CC) {
        this.enter();
        const zC = [];
        for (let ZC = 0; ZC < CC; ZC++) zC.push(this.value());
        return this.depth--, zC
      }
      map(CC) {
        this.enter();
        const zC = {};
        for (let ZC = 0; ZC < CC; ZC++) {
          const CC = this.value(),
            ZC = this.value();
          zC["__proto__" === CC ? "__proto_" : String(CC)] = ZC
        }
        return this.depth--, zC
      }
      ext(CC) {
        const zC = this.view.getInt8(this.take(1)),
          ZC = this.take(CC);
        if (0 !== zC) {
          if (-1 === zC) {
            if (1 === CC) return new Date(NaN);
            if (4 === CC) return new Date(1e3 * this.view.getUint32(ZC, !1));
            if (8 === CC) {
              const CC = this.view.getUint32(ZC, !1),
                zC = CC >>> 2,
                QC = 4294967296 * (3 & CC) + this.view.getUint32(ZC + 4, !1);
              return new Date(1e3 * QC + zC / 1e6)
            }
            if (12 === CC) {
              const CC = this.view.getUint32(ZC, !1),
                zC = 4294967296 * this.view.getInt32(ZC + 4, !1) + this.view.getUint32(ZC + 8, !1);
              return new Date(1e3 * zC + CC / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${zC} of ${CC} bytes`)
        }
      }
    }
    const nC = new TextEncoder,
      fC = -(2n ** 63n),
      oC = 2n ** 63n - 1n,
      qC = 2n ** 64n - 1n;

    function FC(CC) {
      const zC = new WC;
      return zC.value(CC, 0), zC.bytes()
    }
    class WC {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(CC, zC) {
        if (zC > 512) throw new Error("msgpack: nested too deep");
        switch (typeof CC) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(CC ? 195 : 194);
          case "number":
            return void this.number(CC);
          case "bigint":
            return void this.bigint(CC);
          case "string":
            return void this.string(CC);
          case "object":
            if (null === CC) this.u8(192);
            else if (CC instanceof Uint8Array) this.head(CC.length, 196, -1, 197, 198), this.room(CC.length), this.buf.set(CC, this.at), this.at += CC.length;
            else if (Array.isArray(CC)) {
              this.head(CC.length, 220, 144, 220, 221);
              for (const ZC of CC) this.value(ZC, zC + 1)
            } else {
              var ZC, QC;
              if (Object.getPrototypeOf(CC) !== Object.prototype && null !== Object.getPrototypeOf(CC)) throw new Error(`msgpack: can't encode a ${null!==(ZC=null===(QC=CC.constructor)||void 0===QC?void 0:QC.name)&&void 0!==ZC?ZC:"object"}`);
              {
                const ZC = Object.keys(CC);
                this.head(ZC.length, 222, 128, 222, 223);
                for (const QC of ZC) this.string(QC), this.value(CC[QC], zC + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof CC)
        }
      }
      number(CC) {
        Number.isInteger(CC) && CC >= -2147483648 && CC <= 4294967295 ? CC >= 0 ? CC < 128 ? this.u8(CC) : CC < 256 ? (this.u8(204), this.u8(CC)) : CC < 65536 ? (this.u8(205), this.u16(CC)) : (this.u8(206), this.u32(CC)) : CC >= -32 ? this.u8(CC + 256) : CC >= -128 ? (this.u8(208), this.u8(CC + 256)) : CC >= -32768 ? (this.u8(209), this.u16(CC + 65536)) : (this.u8(210), this.u32(CC >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, CC, !1), this.at += 8)
      }
      bigint(CC) {
        const zC = CC >= fC && CC <= oC;
        if (!zC && (CC < 0n || CC > qC)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(zC ? 211 : 207), this.room(8), zC ? this.view.setBigInt64(this.at, CC, !1) : this.view.setBigUint64(this.at, CC, !1), this.at += 8
      }
      string(CC) {
        const zC = nC.encode(CC);
        this.head(zC.length, 217, 160, 218, 219), this.room(zC.length), this.buf.set(zC, this.at), this.at += zC.length
      }
      head(CC, zC, ZC, QC, wC) {
        ZC >= 0 && CC < (160 === ZC ? 32 : 16) ? this.u8(ZC | CC) : zC !== QC && CC < 256 ? (this.u8(zC), this.u8(CC)) : CC < 65536 ? (this.u8(QC), this.u16(CC)) : (this.u8(wC), this.u32(CC))
      }
      room(CC) {
        if (this.at + CC <= this.buf.length) return;
        let zC = 2 * this.buf.length;
        for (; zC < this.at + CC;) zC *= 2;
        const ZC = new Uint8Array(zC);
        ZC.set(this.buf.subarray(0, this.at)), this.buf = ZC, this.view = new DataView(ZC.buffer)
      }
      u8(CC) {
        this.room(1), this.buf[this.at++] = CC
      }
      u16(CC) {
        this.room(2), this.view.setUint16(this.at, CC, !1), this.at += 2
      }
      u32(CC) {
        this.room(4), this.view.setUint32(this.at, CC, !1), this.at += 4
      }
    }
  },
  50717: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      joinRoom: () => WC,
      leaveHeldSeat: () => PC,
      resumeRoom: () => MC
    });
    var QC = ZC(134),
      wC = ZC(1152),
      bC = ZC(36369),
      nC = ZC(40457),
      fC = ZC(4727),
      oC = ZC(40521),
      qC = ZC(40745);
    const FC = Uint8Array.of(13, ...(0, nC.f)(QC.g));
    async function WC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      try {
        return await NC(CC, zC, ZC)
      } catch (wC) {
        var QC;
        const bC = await (null === (QC = zC.optionsAfterRefusal) || void 0 === QC ? void 0 : QC.call(zC, wC));
        if (!bC) throw wC;
        return NC(CC, {
          ...zC,
          joinOptions: bC
        }, {
          ...ZC,
          early: void 0
        })
      }
    }
    async function NC(CC, zC, ZC) {
      var QC;
      const {
        signal: bC
      } = ZC, nC = () => (0, qC.l)(zC.endpoint, zC.roomName, zC.joinOptions, ZC), {
        early: fC
      } = ZC, oC = fC ? null !== (QC = await fC.take(bC)) && void 0 !== QC ? QC : await fC.reserveInstead(nC, bC) : await nC();
      return (0, wC.n)(bC), pC(CC, zC.endpoint, oC, ZC, !1)
    }
    async function MC(CC, zC, ZC, QC) {
      let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      const nC = await (0, qC.i)(zC, ZC, QC, bC);
      return (0, wC.n)(bC.signal), pC(CC, zC, nC, bC, !0)
    }

    function gC(CC, zC, ZC) {
      const QC = (0, qC.p)(CC, zC);
      return ZC.createSocket ? ZC.createSocket(QC) : new WebSocket(QC)
    }

    function SC(CC, zC, ZC) {
      var QC;
      let wC = !1;
      return (null !== (QC = CC.setTimer) && void 0 !== QC ? QC : (CC, zC) => {
        setTimeout(CC, zC)
      })((() => {
        wC || zC()
      }), ZC), () => {
        wC = !0
      }
    }
    async function pC(CC, zC, ZC, QC, nC) {
      const {
        signal: qC
      } = QC, WC = gC(zC, ZC, QC);
      let NC = !1,
        MC = null,
        pC = null;
      const PC = [];
      let GC = !1,
        RC = !1;
      const AC = CC => {
        var zC;
        RC = !0, null === (zC = pC) || void 0 === zC || zC.reject(new oC.d("the room socket closed before the resume", "closed", CC.code))
      };
      nC && WC.addEventListener("close", AC);
      const xC = (CC, zC) => {
          var ZC;
          if (CC === (nC ? fC.J.Resumed : fC.J.Activated)) GC = !0, null === (ZC = pC) || void 0 === ZC || ZC.resolve();
          else if (!nC || CC !== fC.J.ResumeRefused && CC !== fC.J.Activated)
            if (CC === fC.J.Error) {
              var QC;
              null === (QC = pC) || void 0 === QC || QC.reject(new oC.d(`the room refused the join (code ${zC})`, "roomError", zC))
            } else {
              var wC;
              null === (wC = pC) || void 0 === wC || wC.reject(new oC.d("the room socket closed before the join", "closed", zC, null, NC))
            }
          else {
            var bC;
            null === (bC = pC) || void 0 === bC || bC.reject(new oC.r("the core refused the resume: it held no game"))
          }
        },
        JC = CC.onConnection(((CC, zC, ZC) => {
          null === MC ? PC.push([CC, zC, ZC]) : CC === MC && xC(zC, ZC)
        })),
        IC = CC.attachSocket(WC);
      if (null === IC) throw JC(), new oC.d("the core could not take the room socket", "attach");
      var iC;
      (MC = IC, nC) && (null === (iC = QC.onAttached) || void 0 === iC || iC.call(QC));
      const vC = nC ? null : new bC.b((() => {
        var zC, ZC;
        null === (zC = CC.flushNet) || void 0 === zC || zC.call(CC), null === (ZC = pC) || void 0 === ZC || ZC.reject(new bC.f(NC ? "socket" : "socket_unopened"))
      }));
      WC.addEventListener("open", (() => {
        NC = !0, null === vC || void 0 === vC || vC.socketOpened()
      }), {
        once: !0
      });
      let eC = !1;
      const hC = () => {
        if (eC) return;
        if (eC = !0, JC(), nC && (WC.removeEventListener("close", AC), !GC && !(null !== qC && void 0 !== qC && qC.aborted && (0, wC.g)(qC) instanceof oC.t))) return void(RC || CC.closeSocket(IC));
        GC && CC.leaveRoom(IC) || CC.sendRaw(IC, oC.m) ? SC(QC, (() => {
          CC.closeSocket(IC)
        }), oC.g) : CC.closeSocket(IC)
      };
      try {
        await new Promise(((zC, ZC) => {
          const QC = () => {
            var zC;
            nC && (null === (zC = CC.flushNet) || void 0 === zC || zC.call(CC));
            ZC((0, wC.g)(qC))
          };
          null === qC || void 0 === qC || qC.addEventListener("abort", QC, {
            once: !0
          }), pC = {
            resolve: () => {
              null === qC || void 0 === qC || qC.removeEventListener("abort", QC), zC()
            },
            reject: CC => {
              null === qC || void 0 === qC || qC.removeEventListener("abort", QC), ZC(CC)
            }
          };
          for (const [CC, wC, bC] of PC.splice(0)) CC === MC && xC(wC, bC)
        })), null === vC || void 0 === vC || vC.answered()
      } catch (KC) {
        throw hC(), KC
      } finally {
        null === vC || void 0 === vC || vC.stop()
      }
      nC && WC.removeEventListener("close", AC);
      return {
        conn: IC,
        seat: ZC,
        leave: hC,
        detach: () => {
          eC = !0, JC()
        },
        endJoinAd: () => !eC && CC.sendRaw(IC, FC)
      }
    }
    async function PC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      try {
        const wC = gC(CC, await (0, qC.i)(CC, zC, ZC, QC), QC);
        wC.binaryType = "arraybuffer", await new Promise((CC => {
          const zC = SC(QC, (() => {
            wC.close(), CC()
          }), oC.g);
          wC.addEventListener("open", (() => {
            wC.send(oC.m)
          })), wC.addEventListener("close", (() => {
            zC(), CC()
          }))
        }))
      } catch (wC) {
        console.warn("[bloxd-wasm-client] the held seat of a game left while it reconnected couldn't be released", wC)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);