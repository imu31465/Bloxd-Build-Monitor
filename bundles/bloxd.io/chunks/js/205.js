export const id = 205;
export const ids = [205];
export const modules = {
  41885: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => QV,
      i: () => pV,
      j: () => yV
    });
    var JV = xV(41893),
      YV = xV(5297),
      UV = xV(41900);

    function yV(VV) {
      return VV.payloadKind === YV.sc.Msgpack ? (0, JV.e)(VV.payload) : void 0
    }

    function pV(VV, eV) {
      if (eV.payloadKind === YV.sc.Bytes || eV.payloadKind === YV.sc.MsgpackBin) return (0, UV.b)(VV, eV.payload)
    }

    function QV(VV) {
      return null !== VV && "object" === typeof VV
    }
  },
  41909: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => ZV,
      f: () => vV,
      h: () => rV,
      l: () => wV,
      m: () => EV
    });
    var JV = xV(5297),
      YV = xV(41914);
    const UV = new Map,
      yV = new Set,
      pV = new Set;
    let QV = 0,
      nV = 0;

    function wV(VV, eV) {
      let xV = UV.get(VV);
      return xV || (xV = new Set, UV.set(VV, xV)), xV.add(eV), () => {
        xV.delete(eV)
      }
    }

    function ZV() {
      return 0 !== QV
    }

    function vV(VV) {
      return yV.add(VV), () => {
        yV.delete(VV)
      }
    }

    function rV(VV) {
      return pV.add(VV), () => {
        pV.delete(VV)
      }
    }
    const kV = "A raw message listener threw";

    function bV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yV;
      for (const JV of eV) try {
        JV()
      } catch (xV) {
        VV ? (0, YV.o)(xV, kV) : console.error(kV, xV)
      }
    }
    const EV = {
      fire: function(VV) {
        if ("connection" === VV.type) {
          const eV = VV.phase === JV.H.Activated && VV.conn !== QV && VV.conn > nV,
            xV = (VV.phase === JV.H.Left || VV.phase === JV.H.Closed) && VV.conn === QV;
          return void(eV || xV ? (QV = eV ? VV.conn : 0, bV(!0)) : VV.phase === JV.H.Resumed && 0 !== QV && VV.conn > nV && (QV = VV.conn, bV(!0, pV)))
        }
        const eV = UV.get(VV.yZ);
        if (eV && VV.conn === QV && 0 !== QV)
          for (const JV of eV) try {
            JV(VV)
          } catch (xV) {
            (0, YV.o)(xV, kV)
          }
      },
      close: function(VV) {
        nV = Math.max(nV, VV, QV), 0 !== QV && (QV = 0, bV(!1))
      }
    }
  },
  41876: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => nV,
      g: () => QV,
      k: () => pV
    });
    var JV = xV(1293),
      YV = xV(41852);
    const UV = new TextDecoder,
      yV = new TextEncoder;

    function pV(VV, eV) {
      const xV = VV.queries.entityName(eV);
      if (xV === YV.Bc) return;
      const yV = VV.memoryData(VV.scratch(), 4 + xV, 4, "entity_name's answer");
      if (!yV) return;
      const pV = yV.getUint32(0, !0),
        QV = UV.decode(new Uint8Array(yV.buffer, yV.byteOffset + 4, xV));
      return (0, JV.b)(QV, !1, pV === YV.Yd ? null : pV)
    }

    function QV(VV, eV, xV) {
      const JV = yV.encode(xV);
      if (JV.length > YV.yb) return !1;
      const UV = VV.memoryView(Uint8Array, VV.scratch(), JV.length, "has_effect's name");
      return !!UV && (UV.set(JV), 1 === VV.queries.hasEffect(eV, JV.length))
    }

    function nV(VV, eV, xV, JV) {
      const yV = VV.queries.blockData(eV, xV, JV);
      if (yV === YV.Bc) return;
      const pV = VV.memoryView(Uint8Array, VV.scratch(), yV, "block_data's answer");
      return pV ? JSON.parse(UV.decode(pV)) : void 0
    }
  },
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
  41900: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV
    });
    var JV = xV(41880);
    const YV = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class UV {
      constructor(VV) {
        this.buf = VV, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let VV = this.u8(),
          eV = 127 & VV,
          xV = 128;
        for (; 128 & VV;) {
          if (xV > 2 ** 63) throw new RangeError("avro: varint too long");
          VV = this.u8(), eV += (127 & VV) * xV, xV *= 128
        }
        return eV % 2 === 1 ? -(eV + 1) / 2 : eV / 2
      }
      float() {
        const VV = this.take(4);
        return this.floats().getFloat32(VV, !0)
      }
      double() {
        const VV = this.take(8);
        return this.floats().getFloat64(VV, !0)
      }
      str() {
        const VV = this.size(),
          eV = this.take(VV),
          xV = eV + VV;
        if (VV <= 32) {
          let VV = "";
          for (let JV = eV; JV < xV; JV++) {
            const UV = this.buf[JV];
            if (UV >= 128) return YV.decode(this.buf.subarray(eV, xV));
            VV += String.fromCharCode(UV)
          }
          return VV
        }
        return YV.decode(this.buf.subarray(eV, xV))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(VV) {
        const eV = this.take(VV);
        return this.buf.slice(eV, eV + VV)
      }
      index(VV) {
        const eV = this.long();
        if (!(eV >= 0 && eV < VV)) throw new RangeError(`avro: index ${eV} of ${VV}`);
        return eV
      }
      kZ(VV) {
        const eV = [];
        for (let xV = this.long(); 0 !== xV; xV = this.long()) {
          xV = this.block(xV);
          for (let JV = 0; JV < xV; JV++) eV.push(VV(this))
        }
        return eV
      }
      map(VV) {
        const eV = {};
        for (let xV = this.long(); 0 !== xV; xV = this.long()) {
          xV = this.block(xV);
          for (let JV = 0; JV < xV; JV++) {
            eV[this.str()] = VV(this)
          }
        }
        return eV
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(VV) {
        let eV = VV;
        if (eV < 0 && (eV = -eV, this.long()), eV > this.buf.length - this.at) throw new RangeError(`avro: block of ${eV} items in ${this.buf.length-this.at} bytes`);
        return eV
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const VV = this.long();
        if (VV < 0) throw new RangeError(`avro: length ${VV}`);
        return VV
      }
      u8() {
        const VV = this.buf[this.at];
        if (void 0 === VV) throw new RangeError("avro: truncated");
        return this.at++, VV
      }
      take(VV) {
        const eV = this.at;
        if (VV > this.buf.length - eV) throw new RangeError("avro: truncated");
        return this.at = eV + VV, eV
      }
    }

    function yV(VV, eV) {
      const xV = new UV(eV),
        YV = (0, JV.gb)(VV, xV);
      return xV.end(), YV
    }
  },
  41880: (VV, eV, xV) => {
    xV.d(eV, {
      $: () => qV,
      B: () => yV,
      F: () => MV,
      G: () => YV,
      J: () => pV,
      M: () => rV,
      O: () => NV,
      P: () => AV,
      Q: () => TV,
      T: () => wV,
      U: () => ZV,
      Y: () => XV,
      Z: () => kV,
      c: () => FV,
      d: () => EV,
      db: () => bV,
      eb: () => QV,
      g: () => BV,
      gb: () => zV,
      k: () => jV,
      o: () => PV,
      s: () => JV,
      t: () => UV,
      v: () => tV,
      w: () => vV,
      y: () => nV
    });
    const JV = 2,
      YV = 12,
      UV = 27,
      yV = 40,
      pV = 52,
      QV = 59,
      nV = 63,
      wV = 83,
      ZV = 84,
      vV = 89,
      rV = 91,
      kV = 93,
      bV = 94,
      EV = 95,
      BV = 97,
      jV = 101,
      qV = 102,
      tV = 73,
      FV = 16,
      TV = 86,
      PV = 60,
      AV = 17,
      NV = 56,
      XV = 100,
      MV = 81;

    function zV(VV, eV) {
      switch (VV) {
        case JV:
          return function(VV) {
            return {
              mx: sV(VV),
              ux: VV.float(),
              Sx: VV.long()
            }
          }(eV);
        case YV:
          return function(VV) {
            return {
              ae: DV(VV),
              oe: DV(VV)
            }
          }(eV);
        case UV:
          return function(VV) {
            return {
              ZY: VV.bool(),
              vY: DV(VV)
            }
          }(eV);
        case yV:
          return eV.str();
        case pV:
          return function(VV) {
            return {
              id: VV.long(),
              iJ: ye(VV)
            }
          }(eV);
        case QV:
          return function(VV) {
            return {
              vV: DV(VV),
              rV: Qe(VV)
            }
          }(eV);
        case nV:
          return eV.str();
        case wV:
        case ZV:
          return eV.long();
        case vV:
          return function(VV) {
            return {
              qJ: VV.long(),
              tJ: VV.bool(),
              FJ: VV.float()
            }
          }(eV);
        case rV:
          return eV.long();
        case kV:
          return function(VV) {
            return {
              TJ: VV.bool(),
              PJ: Ze(VV)
            }
          }(eV);
        case bV:
          return function(VV) {
            return {
              id: VV.str(),
              position: we(VV),
              AJ: ve(VV),
              style: hV(VV),
              XJ: VV.bool()
            }
          }(eV);
        case EV:
          return function(VV) {
            return {
              id: DV(VV)
            }
          }(eV);
        case BV:
          return function(VV) {
            return {
              bV: VV.long(),
              EV: VV.str(),
              BV: Ye(VV),
              jV: Ye(VV),
              qV: DV(VV),
              tV: DV(VV),
              FV: DV(VV),
              TV: DV(VV),
              PV: DV(VV),
              AV: Ye(VV),
              NV: Ye(VV),
              XV: DV(VV),
              MV: DV(VV),
              zV: DV(VV)
            }
          }(eV);
        case jV:
          return eV.str();
        case qV:
          return eV.long();
        case tV:
          return function(VV) {
            return {
              LU: VV.long(),
              fU: VV.str(),
              mU: VV.float()
            }
          }(eV);
        case FV:
          return function(VV) {
            return {
              Rx: VV.bool(),
              gx: DV(VV),
              Dx: VV.str(),
              ix: ke(VV),
              Cx: ke(VV),
              ox: VV.bool(),
              hx: VV.long(),
              lx: be(VV)
            }
          }(eV);
        case TV:
          return function(VV) {
            return {
              bY: DV(VV)
            }
          }(eV);
        case PV:
          return function(VV) {
            return {
              bx: VV.str(),
              Ex: VV.str(),
              Bx: Ee(VV),
              zx: VV.str(),
              Gx: dV(VV),
              Wx: VV.float()
            }
          }(eV);
        case AV:
          return function(VV) {
            return {
              bx: VV.str(),
              Ex: VV.str(),
              Bx: Ee(VV)
            }
          }(eV);
        case NV:
          return function(VV) {
            return VV.kZ(Be)
          }(eV);
        case XV:
          return function(VV) {
            return {
              VV: qe(VV),
              yV: fV(VV)
            }
          }(eV);
        case MV:
          return function(VV) {
            return {
              LY: VV.bool(),
              fY: DV(VV),
              mY: Fe(VV),
              HY: ae(VV)
            }
          }(eV);
        default:
          throw new Error(`no reader for to-client message ${VV}`)
      }
    }

    function GV(VV) {
      return {
        entityName: VV.str()
      }
    }

    function WV(VV) {
      const eV = VV.index(4);
      return 0 === eV ? VV.str() : 1 === eV ? VV.long() : 2 === eV ? VV.bool() : GV(VV)
    }

    function RV(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return VV.map(WV)
      }(VV)
    }

    function gV(VV) {
      return {
        translationKey: VV.str(),
        params: RV(VV)
      }
    }

    function DV(VV) {
      return 0 === VV.index(2) ? null : VV.str()
    }

    function iV(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return {
          color: DV(VV),
          colour: DV(VV),
          fontSize: DV(VV)
        }
      }(VV)
    }

    function CV(VV) {
      return {
        icon: VV.str(),
        style: iV(VV)
      }
    }

    function aV(VV) {
      const eV = VV.index(3);
      return 0 === eV ? {
        string: VV.str()
      } : 1 === eV ? {
        styledEntityName: GV(VV)
      } : {
        styledTranslatedText: gV(VV)
      }
    }

    function oV(VV) {
      const eV = VV.index(3);
      return 0 === eV ? null : 1 === eV ? VV.str() : VV.long()
    }

    function cV(VV) {
      return 0 === VV.index(2) ? null : VV.float()
    }

    function hV(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return {
          color: DV(VV),
          colour: DV(VV),
          fontWeight: oV(VV),
          fontStyle: DV(VV),
          fontSize: DV(VV),
          opacity: cV(VV)
        }
      }(VV)
    }

    function lV(VV) {
      return {
        str: aV(VV),
        style: hV(VV),
        clickableUrl: DV(VV)
      }
    }

    function LV(VV) {
      return VV.str()
    }

    function fV(VV) {
      return VV.kZ(LV)
    }

    function mV(VV) {
      return 0 === VV.index(2) ? null : fV(VV)
    }

    function KV(VV) {
      return {
        type: VV.str(),
        progress: VV.float(),
        width: DV(VV),
        height: DV(VV),
        colours: mV(VV),
        backgroundColour: DV(VV)
      }
    }

    function HV(VV) {
      return {
        type: VV.str(),
        action: VV.str(),
        style: hV(VV)
      }
    }

    function uV(VV) {
      const eV = VV.index(7);
      return 0 === eV ? {
        string: VV.str()
      } : 1 === eV ? {
        entityName: GV(VV)
      } : 2 === eV ? {
        translatedText: gV(VV)
      } : 3 === eV ? {
        styledIcon: CV(VV)
      } : 4 === eV ? {
        Kx: lV(VV)
      } : 5 === eV ? {
        styledProgressBar: KV(VV)
      } : {
        styledKeyBinding: HV(VV)
      }
    }

    function sV(VV) {
      return VV.kZ(uV)
    }
    const SV = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function IV(VV) {
      return SV[VV.index(5)]
    }

    function dV(VV) {
      return 0 === VV.index(2) ? null : VV.double()
    }

    function OV(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return {
          cJ: dV(VV),
          hJ: VV.double(),
          lJ: VV.double(),
          LJ: VV.bool(),
          description: sV(VV),
          fJ: VV.str(),
          scale: dV(VV),
          rotation: dV(VV)
        }
      }(VV)
    }

    function Ve(VV) {
      return 0 === VV.index(2) ? null : VV.bool()
    }

    function ee(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return {
          KJ: VV.double(),
          icon: VV.str(),
          label: sV(VV),
          HJ: VV.bool(),
          scale: dV(VV),
          rotation: dV(VV),
          uJ: Ve(VV)
        }
      }(VV)
    }

    function xe(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return {
          cJ: dV(VV),
          SJ: VV.double(),
          IJ: VV.double(),
          dJ: VV.double(),
          gravity: VV.double(),
          OJ: VV.double(),
          VY: VV.double(),
          eY: VV.double(),
          LJ: VV.bool(),
          description: sV(VV),
          icon: DV(VV)
        }
      }(VV)
    }

    function Je(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return {
          speed: VV.double(),
          JY: VV.double(),
          label: sV(VV),
          icon: DV(VV),
          scale: dV(VV),
          rotation: dV(VV)
        }
      }(VV)
    }

    function Ye(VV) {
      return 0 === VV.index(2) ? null : VV.long()
    }

    function Ue(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return {
          UY: VV.long(),
          yY: VV.double(),
          pY: VV.double(),
          QY: Ye(VV),
          label: sV(VV),
          icon: DV(VV)
        }
      }(VV)
    }

    function ye(VV) {
      return {
        type: IV(VV),
        progressBar: OV(VV),
        timedClick: ee(VV),
        gravityBar: xe(VV),
        precisionBar: Je(VV),
        rhythmClick: Ue(VV)
      }
    }
    const pe = ["playerGone", "rateLimited"];

    function Qe(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return pe[VV.index(2)]
      }(VV)
    }

    function ne(VV) {
      return VV.float()
    }

    function we(VV) {
      return VV.kZ(ne)
    }

    function Ze(VV) {
      return 0 === VV.index(2) ? null : we(VV)
    }

    function ve(VV) {
      return 0 === VV.index(2) ? null : sV(VV)
    }

    function re(VV) {
      return VV.long()
    }

    function ke(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return VV.kZ(re)
      }(VV)
    }

    function be(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return {
          ze: VV.str(),
          Ce: VV.long()
        }
      }(VV)
    }

    function Ee(VV) {
      const eV = VV.index(3);
      return 0 === eV ? null : 1 === eV ? VV.str() : gV(VV)
    }

    function Be(VV) {
      return {
        JJ: VV.str(),
        YJ: VV.str(),
        UJ: VV.str()
      }
    }

    function je(VV) {
      return {
        eV: VV.str(),
        xV: DV(VV),
        JV: DV(VV),
        YV: fV(VV)
      }
    }

    function qe(VV) {
      return VV.kZ(je)
    }

    function te(VV) {
      return {
        KY: VV.str(),
        x: VV.long(),
        y: VV.long(),
        z: VV.long()
      }
    }

    function Fe(VV) {
      return VV.kZ(te)
    }

    function Te(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return {
          rU: VV.float(),
          kU: VV.long(),
          bU: VV.long()
        }
      }(VV)
    }

    function Pe(VV) {
      return {
        blockName: VV.str(),
        UU: VV.bool(),
        yU: VV.bool(),
        pU: VV.bool(),
        QU: VV.float(),
        nU: VV.float(),
        wU: VV.long(),
        ZU: Te(VV)
      }
    }

    function Ae(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return VV.kZ(Pe)
      }(VV)
    }

    function Ne(VV) {
      return {
        xU: VV.str(),
        JU: Ae(VV)
      }
    }

    function Xe(VV) {
      return {
        blockName: VV.str(),
        frequency: VV.float()
      }
    }

    function Me(VV) {
      return VV.kZ(Xe)
    }

    function ze(VV) {
      return {
        jU: VV.str(),
        qU: VV.str(),
        frequency: VV.float(),
        tU: Me(VV)
      }
    }

    function Ge(VV) {
      return VV.kZ(ze)
    }

    function We(VV) {
      return {
        blockName: VV.str(),
        radius: VV.long(),
        AU: VV.long(),
        SY: VV.long(),
        IY: VV.long(),
        NU: VV.float()
      }
    }

    function Re(VV) {
      return VV.kZ(We)
    }

    function ge(VV) {
      return {
        SY: VV.long(),
        IY: VV.long(),
        dY: VV.long(),
        OY: VV.bool(),
        VU: Ne(VV),
        EU: Ge(VV),
        TU: Re(VV)
      }
    }

    function De(VV) {
      return VV.kZ(ge)
    }

    function ie(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return {
          name: VV.str(),
          GU: DV(VV)
        }
      }(VV)
    }

    function Ce(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return {
          terrain: ie(VV),
          WU: Re(VV)
        }
      }(VV)
    }

    function ae(VV) {
      return 0 === VV.index(2) ? null : function(VV) {
        return {
          layers: De(VV),
          XU: Ce(VV)
        }
      }(VV)
    }
  },
  41867: (VV, eV, xV) => {
    xV.d(eV, {
      $: () => qV,
      A: () => PV,
      C: () => GV,
      E: () => tV,
      G: () => FV,
      J: () => EV,
      K: () => XV,
      O: () => RV,
      Q: () => kV,
      U: () => DV,
      W: () => jV,
      Y: () => BV,
      d: () => YV,
      db: () => TV,
      h: () => gV,
      k: () => WV,
      m: () => rV,
      o: () => bV,
      p: () => zV,
      s: () => AV,
      v: () => MV,
      y: () => NV
    });
    var JV = xV(3348);
    const YV = {
      Chat: 49,
      UiRequestResponded: 91,
      CodeCollab: 89,
      SetCustomLobbyBlock: 60,
      UpdateBook: 56,
      UpdateBoard: 33,
      UpdateMyCosmetic: 45,
      PlayEmote: 90,
      ReqDiscordReportKey: 9,
      UserReport: 11,
      LobbyReport: 12,
      CustomGameReport: 13,
      IgnoreUser: 34,
      ShopMenuChanged: 26,
      GeneralCookieSet: 72,
      CompleteTask: 69,
      OpenIronChest: 80,
      ChangeIronChestPasskey: 81,
      StopSleeping: 78,
      AnalyticsUpdate: 3,
      UiRequestResp: 15,
      QteResponse: 16,
      ItemBought: 25,
      LeaderboardRequest: 40,
      UpdateNameTag: 53,
      LobbyManage: 96
    };

    function UV(VV, eV) {
      return !ArrayBuffer.isView(VV) || VV instanceof DataView ? Array.isArray(VV) ? VV.map((VV => eV(VV))) : VV : Array.from(VV, (VV => eV(VV)))
    }

    function yV(VV) {
      if ("string" !== typeof VV) return VV;
      for (let eV = 0; eV < VV.length; eV++) {
        const xV = VV.charCodeAt(eV);
        if (xV >= 55296 && xV <= 57343) return QV.decode(pV.encode(VV))
      }
      return VV
    }
    const pV = new TextEncoder,
      QV = new TextDecoder;

    function nV(VV) {
      return VV
    }
    let wV;

    function ZV(VV) {
      return null === VV || "object" !== typeof VV ? VV : [yV(VV.Fn), yV(VV.Tn)]
    }

    function vV(VV) {
      return null === VV || "object" !== typeof VV ? VV : [UV(VV.ix, nV), UV(VV.ly, nV)]
    }

    function rV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.yZ), yV(eV.pZ)];
      var eV
    }

    function kV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [eV.id, eV.Jw];
      var eV
    }

    function bV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [eV.bV, yV(eV.EV), eV.BV, yV(eV.tV), eV.AV, eV.NV, eV.Yn, yV(eV.Un), yV(eV.yn)];
      var eV
    }

    function EV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [UV(eV.Zp, nV), eV.vp];
      var eV
    }

    function BV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [UV(eV.Zn, (VV => yV(VV))), yV(eV.vn), eV.rn];
      var eV
    }

    function jV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [UV(eV.En, nV), yV(eV.Bn), eV.jn];
      var eV
    }

    function qV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.YJ), yV(eV.UJ)];
      var eV
    }

    function tV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.Py)];
      var eV
    }

    function FV(VV) {
      return yV(VV)
    }

    function TV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.qn), yV(eV.tn), yV(eV.Fn), yV(eV.Tn)];
      var eV
    }

    function PV(VV) {
      return ZV(VV)
    }

    function AV(VV) {
      return ZV(VV)
    }

    function NV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.Yw)];
      var eV
    }

    function XV(VV) {
      return VV
    }

    function MV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.jy), yV(eV.qy)];
      var eV
    }

    function zV(VV) {
      return yV(VV)
    }

    function GV(VV) {
      return vV(VV)
    }

    function WV(VV) {
      return vV(VV)
    }

    function RV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [yV(eV.Vw)];
      var eV
    }

    function gV(VV) {
      return (wV ??= (0, JV.c)().map((VV => VV.name)), wV).map((eV => {
        return "string" === typeof(xV = VV[eV]) ? yV(xV) : UV(xV, nV);
        var xV
      }))
    }

    function DV(VV) {
      return null === (eV = VV) || "object" !== typeof eV ? eV : [eV.Ly, eV.my, eV.Ky];
      var eV
    }
  },
  9922: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => UV
    });
    var JV = xV(9861);
    const YV = "Air",
      UV = Object.freeze(new JV.g(YV, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  40472: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      h: () => pV
    });
    var JV = xV(375),
      YV = xV(4940);
    const UV = new Set(YV.q),
      yV = new Map;

    function pV(VV, eV) {
      let xV = yV.get(eV);
      void 0 === xV && (xV = new Map, yV.set(eV, xV));
      let YV = xV.get(VV);
      return void 0 === YV && (YV = `${VV}${(0,JV.v)(eV)}`, xV.set(VV, YV)), YV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);