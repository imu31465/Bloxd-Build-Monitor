export const id = 199;
export const ids = [199];
export const modules = {
  39933: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => dv,
      f: () => pv,
      j: () => gv
    });
    var hv = Pv(39940),
      Sv = Pv(4535),
      ev = Pv(39947);

    function gv(vv) {
      return vv.payloadKind === Sv.pc.Msgpack ? (0, hv.d)(vv.payload) : void 0
    }

    function pv(vv, zv) {
      if (zv.payloadKind === Sv.pc.Bytes || zv.payloadKind === Sv.pc.MsgpackBin) return (0, ev.b)(vv, zv.payload)
    }

    function dv(vv) {
      return null !== vv && "object" === typeof vv
    }
  },
  39949: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Tv,
      i: () => Wv,
      l: () => wv,
      m: () => lv,
      o: () => Cv
    });
    var hv = Pv(4535),
      Sv = Pv(39956);
    const ev = new Map,
      gv = new Set,
      pv = new Set;
    let dv = 0,
      Nv = 0;

    function lv(vv, zv) {
      let Pv = ev.get(vv);
      return Pv || (Pv = new Set, ev.set(vv, Pv)), Pv.add(zv), () => {
        Pv.delete(zv)
      }
    }

    function Tv() {
      return 0 !== dv
    }

    function Wv(vv) {
      return gv.add(vv), () => {
        gv.delete(vv)
      }
    }

    function wv(vv) {
      return pv.add(vv), () => {
        pv.delete(vv)
      }
    }
    const av = "A raw message listener threw";

    function sv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gv;
      for (const hv of zv) try {
        hv()
      } catch (Pv) {
        vv ? (0, Sv.q)(Pv, av) : console.error(av, Pv)
      }
    }
    const Cv = {
      fire: function(vv) {
        if ("connection" === vv.type) {
          const zv = vv.phase === hv.F.Activated && vv.conn !== dv && vv.conn > Nv,
            Pv = (vv.phase === hv.F.Left || vv.phase === hv.F.Closed) && vv.conn === dv;
          return void(zv || Pv ? (dv = zv ? vv.conn : 0, sv(!0)) : vv.phase === hv.F.Resumed && 0 !== dv && vv.conn > Nv && (dv = vv.conn, sv(!0, pv)))
        }
        const zv = ev.get(vv.al);
        if (zv && vv.conn === dv && 0 !== dv)
          for (const hv of zv) try {
            hv(vv)
          } catch (Pv) {
            (0, Sv.q)(Pv, av)
          }
      },
      close: function(vv) {
        Nv = Math.max(Nv, vv, dv), 0 !== dv && (dv = 0, sv(!1))
      }
    }
  },
  39918: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Nv,
      f: () => dv,
      h: () => pv
    });
    var hv = Pv(1250),
      Sv = Pv(39889);
    const ev = new TextDecoder,
      gv = new TextEncoder;

    function pv(vv, zv) {
      const Pv = vv.queries.entityName(zv);
      if (Pv === Sv.Nc) return;
      const gv = vv.memoryData(vv.scratch(), 4 + Pv, 4, "entity_name's answer");
      if (!gv) return;
      const pv = gv.getUint32(0, !0),
        dv = ev.decode(new Uint8Array(gv.buffer, gv.byteOffset + 4, Pv));
      return (0, hv.c)(dv, !1, pv === Sv.Od ? null : pv)
    }

    function dv(vv, zv, Pv) {
      const hv = gv.encode(Pv);
      if (hv.length > Sv.Db) return !1;
      const ev = vv.memoryView(Uint8Array, vv.scratch(), hv.length, "has_effect's name");
      return !!ev && (ev.set(hv), 1 === vv.queries.hasEffect(zv, hv.length))
    }

    function Nv(vv, zv, Pv, hv) {
      const gv = vv.queries.blockData(zv, Pv, hv);
      if (gv === Sv.Nc) return;
      const pv = vv.memoryView(Uint8Array, vv.scratch(), gv, "block_data's answer");
      return pv ? JSON.parse(ev.decode(pv)) : void 0
    }
  },
  39940: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      f: () => lv
    });
    const hv = new TextDecoder;

    function Sv(vv) {
      const zv = new ev(vv),
        Pv = zv.value();
      if (zv.at !== vv.length) throw new Error(`msgpack: ${vv.length-zv.at} bytes after the value`);
      return Pv
    }
    class ev {
      constructor(vv) {
        this.bytes = vv, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(vv.buffer, vv.byteOffset, vv.byteLength)
      }
      value() {
        const vv = this.u8();
        if (vv <= 127) return vv;
        if (vv >= 224) return vv - 256;
        if (vv >= 128 && vv <= 143) return this.map(15 & vv);
        if (vv >= 144 && vv <= 159) return this.array(15 & vv);
        if (vv >= 160 && vv <= 191) return this.str(31 & vv);
        switch (vv) {
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
            throw new Error(`msgpack: unknown byte 0x${vv.toString(16)} at ${this.at-1}`)
        }
      }
      take(vv) {
        const zv = this.at;
        if (zv + vv > this.bytes.length) throw new Error(`msgpack: ${vv} bytes past the end at ${zv}`);
        return this.at = zv + vv, zv
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
      int64(vv) {
        const zv = this.take(8);
        return vv ? this.view.getBigInt64(zv, !1) : this.view.getBigUint64(zv, !1)
      }
      str(vv) {
        const zv = this.take(vv),
          Pv = this.bytes;
        if (vv < 16) {
          let Sv = "";
          for (let ev = zv; ev < zv + vv; ev++) {
            const gv = Pv[ev];
            if (gv >= 128) return hv.decode(Pv.subarray(zv, zv + vv));
            Sv += String.fromCharCode(gv)
          }
          return Sv
        }
        return hv.decode(Pv.subarray(zv, zv + vv))
      }
      bin(vv) {
        const zv = this.take(vv);
        return this.bytes.subarray(zv, zv + vv)
      }
      enter() {
        if (++this.depth > 512) throw new Error("msgpack: nested too deep")
      }
      array(vv) {
        this.enter();
        const zv = [];
        for (let Pv = 0; Pv < vv; Pv++) zv.push(this.value());
        return this.depth--, zv
      }
      map(vv) {
        this.enter();
        const zv = {};
        for (let Pv = 0; Pv < vv; Pv++) {
          const vv = this.value(),
            Pv = this.value();
          zv["__proto__" === vv ? "__proto_" : String(vv)] = Pv
        }
        return this.depth--, zv
      }
      ext(vv) {
        const zv = this.view.getInt8(this.take(1)),
          Pv = this.take(vv);
        if (0 !== zv) {
          if (-1 === zv) {
            if (1 === vv) return new Date(NaN);
            if (4 === vv) return new Date(1e3 * this.view.getUint32(Pv, !1));
            if (8 === vv) {
              const vv = this.view.getUint32(Pv, !1),
                zv = vv >>> 2,
                hv = 4294967296 * (3 & vv) + this.view.getUint32(Pv + 4, !1);
              return new Date(1e3 * hv + zv / 1e6)
            }
            if (12 === vv) {
              const vv = this.view.getUint32(Pv, !1),
                zv = 4294967296 * this.view.getInt32(Pv + 4, !1) + this.view.getUint32(Pv + 8, !1);
              return new Date(1e3 * zv + vv / 1e6)
            }
          }
          throw new Error(`msgpack: ext type ${zv} of ${vv} bytes`)
        }
      }
    }
    const gv = new TextEncoder,
      pv = -(2n ** 63n),
      dv = 2n ** 63n - 1n,
      Nv = 2n ** 64n - 1n;

    function lv(vv) {
      const zv = new Tv;
      return zv.value(vv, 0), zv.bytes()
    }
    class Tv {
      constructor() {
        this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
      }
      bytes() {
        return this.buf.subarray(0, this.at)
      }
      value(vv, zv) {
        if (zv > 512) throw new Error("msgpack: nested too deep");
        switch (typeof vv) {
          case "undefined":
            return this.u8(212), this.u8(0), void this.u8(0);
          case "boolean":
            return void this.u8(vv ? 195 : 194);
          case "number":
            return void this.number(vv);
          case "bigint":
            return void this.bigint(vv);
          case "string":
            return void this.string(vv);
          case "object":
            if (null === vv) this.u8(192);
            else if (vv instanceof Uint8Array) this.head(vv.length, 196, -1, 197, 198), this.room(vv.length), this.buf.set(vv, this.at), this.at += vv.length;
            else if (Array.isArray(vv)) {
              this.head(vv.length, 220, 144, 220, 221);
              for (const Pv of vv) this.value(Pv, zv + 1)
            } else {
              var Pv, hv;
              if (Object.getPrototypeOf(vv) !== Object.prototype && null !== Object.getPrototypeOf(vv)) throw new Error(`msgpack: can't encode a ${null!==(Pv=null===(hv=vv.constructor)||void 0===hv?void 0:hv.name)&&void 0!==Pv?Pv:"object"}`);
              {
                const Pv = Object.keys(vv);
                this.head(Pv.length, 222, 128, 222, 223);
                for (const hv of Pv) this.string(hv), this.value(vv[hv], zv + 1)
              }
            }
            return;
          default:
            throw new Error("msgpack: can't encode a " + typeof vv)
        }
      }
      number(vv) {
        Number.isInteger(vv) && vv >= -2147483648 && vv <= 4294967295 ? vv >= 0 ? vv < 128 ? this.u8(vv) : vv < 256 ? (this.u8(204), this.u8(vv)) : vv < 65536 ? (this.u8(205), this.u16(vv)) : (this.u8(206), this.u32(vv)) : vv >= -32 ? this.u8(vv + 256) : vv >= -128 ? (this.u8(208), this.u8(vv + 256)) : vv >= -32768 ? (this.u8(209), this.u16(vv + 65536)) : (this.u8(210), this.u32(vv >>> 0)) : (this.u8(203), this.room(8), this.view.setFloat64(this.at, vv, !1), this.at += 8)
      }
      bigint(vv) {
        const zv = vv >= pv && vv <= dv;
        if (!zv && (vv < 0n || vv > Nv)) throw new Error("msgpack: a BigInt past 64 bits");
        this.u8(zv ? 211 : 207), this.room(8), zv ? this.view.setBigInt64(this.at, vv, !1) : this.view.setBigUint64(this.at, vv, !1), this.at += 8
      }
      string(vv) {
        const zv = gv.encode(vv);
        this.head(zv.length, 217, 160, 218, 219), this.room(zv.length), this.buf.set(zv, this.at), this.at += zv.length
      }
      head(vv, zv, Pv, hv, Sv) {
        Pv >= 0 && vv < (160 === Pv ? 32 : 16) ? this.u8(Pv | vv) : zv !== hv && vv < 256 ? (this.u8(zv), this.u8(vv)) : vv < 65536 ? (this.u8(hv), this.u16(vv)) : (this.u8(Sv), this.u32(vv))
      }
      room(vv) {
        if (this.at + vv <= this.buf.length) return;
        let zv = 2 * this.buf.length;
        for (; zv < this.at + vv;) zv *= 2;
        const Pv = new Uint8Array(zv);
        Pv.set(this.buf.subarray(0, this.at)), this.buf = Pv, this.view = new DataView(Pv.buffer)
      }
      u8(vv) {
        this.room(1), this.buf[this.at++] = vv
      }
      u16(vv) {
        this.room(2), this.view.setUint16(this.at, vv, !1), this.at += 2
      }
      u32(vv) {
        this.room(4), this.view.setUint32(this.at, vv, !1), this.at += 4
      }
    }
  },
  39947: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv
    });
    var hv = Pv(39927);
    const Sv = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class ev {
      constructor(vv) {
        this.buf = vv, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let vv = this.u8(),
          zv = 127 & vv,
          Pv = 128;
        for (; 128 & vv;) {
          if (Pv > 2 ** 63) throw new RangeError("avro: varint too long");
          vv = this.u8(), zv += (127 & vv) * Pv, Pv *= 128
        }
        return zv % 2 === 1 ? -(zv + 1) / 2 : zv / 2
      }
      float() {
        const vv = this.take(4);
        return this.floats().getFloat32(vv, !0)
      }
      double() {
        const vv = this.take(8);
        return this.floats().getFloat64(vv, !0)
      }
      str() {
        const vv = this.size(),
          zv = this.take(vv),
          Pv = zv + vv;
        if (vv <= 32) {
          let vv = "";
          for (let hv = zv; hv < Pv; hv++) {
            const ev = this.buf[hv];
            if (ev >= 128) return Sv.decode(this.buf.subarray(zv, Pv));
            vv += String.fromCharCode(ev)
          }
          return vv
        }
        return Sv.decode(this.buf.subarray(zv, Pv))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(vv) {
        const zv = this.take(vv);
        return this.buf.slice(zv, zv + vv)
      }
      index(vv) {
        const zv = this.long();
        if (!(zv >= 0 && zv < vv)) throw new RangeError(`avro: index ${zv} of ${vv}`);
        return zv
      }
      ga(vv) {
        const zv = [];
        for (let Pv = this.long(); 0 !== Pv; Pv = this.long()) {
          Pv = this.block(Pv);
          for (let hv = 0; hv < Pv; hv++) zv.push(vv(this))
        }
        return zv
      }
      map(vv) {
        const zv = {};
        for (let Pv = this.long(); 0 !== Pv; Pv = this.long()) {
          Pv = this.block(Pv);
          for (let hv = 0; hv < Pv; hv++) {
            zv[this.str()] = vv(this)
          }
        }
        return zv
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(vv) {
        let zv = vv;
        if (zv < 0 && (zv = -zv, this.long()), zv > this.buf.length - this.at) throw new RangeError(`avro: block of ${zv} items in ${this.buf.length-this.at} bytes`);
        return zv
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const vv = this.long();
        if (vv < 0) throw new RangeError(`avro: length ${vv}`);
        return vv
      }
      u8() {
        const vv = this.buf[this.at];
        if (void 0 === vv) throw new RangeError("avro: truncated");
        return this.at++, vv
      }
      take(vv) {
        const zv = this.at;
        if (vv > this.buf.length - zv) throw new RangeError("avro: truncated");
        return this.at = zv + vv, zv
      }
    }

    function gv(vv, zv) {
      const Pv = new ev(zv),
        Sv = (0, hv.wb)(vv, Pv);
      return Pv.end(), Sv
    }
  },
  39927: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => mv,
      D: () => Wv,
      G: () => Nv,
      I: () => gv,
      M: () => Dv,
      Q: () => Sv,
      U: () => pv,
      W: () => wv,
      Y: () => nv,
      _: () => Yv,
      cb: () => fv,
      e: () => jv,
      g: () => Cv,
      gb: () => lv,
      h: () => iv,
      hb: () => Tv,
      ib: () => Ov,
      l: () => cv,
      mb: () => av,
      p: () => Fv,
      pb: () => Gv,
      t: () => hv,
      tb: () => sv,
      vb: () => dv,
      w: () => ev,
      wb: () => Kv
    });
    const hv = 2,
      Sv = 12,
      ev = 27,
      gv = 40,
      pv = 52,
      dv = 59,
      Nv = 63,
      lv = 83,
      Tv = 84,
      Wv = 89,
      wv = 91,
      av = 93,
      sv = 94,
      Cv = 95,
      iv = 97,
      cv = 101,
      Gv = 102,
      mv = 73,
      jv = 16,
      fv = 86,
      Fv = 60,
      Yv = 17,
      nv = 56,
      Ov = 100,
      Dv = 81;

    function Kv(vv, zv) {
      switch (vv) {
        case hv:
          return function(vv) {
            return {
              wP: bv(vv),
              aP: vv.float(),
              sP: vv.long()
            }
          }(zv);
        case Sv:
          return function(vv) {
            return {
              CP: tv(vv),
              iP: tv(vv)
            }
          }(zv);
        case ev:
          return function(vv) {
            return {
              gz: vv.bool(),
              pz: tv(vv)
            }
          }(zv);
        case gv:
          return zv.str();
        case pv:
          return function(vv) {
            return {
              id: vv.long(),
              qz: gz(vv)
            }
          }(zv);
        case dv:
        case Nv:
          return zv.str();
        case lv:
        case Tv:
          return zv.long();
        case Wv:
          return function(vv) {
            return {
              Rv: vv.long(),
              xv: vv.bool(),
              tv: vv.float()
            }
          }(zv);
        case wv:
          return zv.long();
        case av:
          return function(vv) {
            return {
              WP: vv.bool(),
              nv: Nz(vv)
            }
          }(zv);
        case sv:
          return function(vv) {
            return {
              id: vv.str(),
              position: dz(vv),
              Tv: lz(vv),
              style: Lv(vv),
              sv: vv.bool()
            }
          }(zv);
        case Cv:
          return function(vv) {
            return {
              id: tv(vv)
            }
          }(zv);
        case iv:
          return function(vv) {
            return {
              ah: vv.long(),
              sh: vv.str(),
              Ch: Sz(vv),
              ih: Sz(vv),
              Gh: tv(vv),
              mh: tv(vv),
              jh: tv(vv),
              fh: tv(vv),
              Fh: tv(vv),
              Yh: Sz(vv),
              nh: Sz(vv),
              Oh: tv(vv),
              Dh: tv(vv),
              Kh: tv(vv)
            }
          }(zv);
        case cv:
          return zv.str();
        case Gv:
          return zv.long();
        case mv:
          return function(vv) {
            return {
              Be: vv.long(),
              Je: vv.str(),
              Ee: vv.float()
            }
          }(zv);
        case jv:
          return function(vv) {
            return {
              uh: vv.bool(),
              vS: tv(vv),
              zS: vv.str(),
              PS: Wz(vv),
              hS: Wz(vv),
              SS: vv.bool(),
              eS: vv.long(),
              gS: wz(vv)
            }
          }(zv);
        case fv:
          return function(vv) {
            return {
              DP: tv(vv)
            }
          }(zv);
        case Fv:
          return function(vv) {
            return {
              Cv: vv.str(),
              iv: vv.str(),
              cv: az(vv),
              Gv: vv.str(),
              mv: Xv(vv),
              jv: vv.float()
            }
          }(zv);
        case Yv:
          return function(vv) {
            return {
              Cv: vv.str(),
              iv: vv.str(),
              cv: az(vv)
            }
          }(zv);
        case nv:
          return function(vv) {
            return vv.ga(sz)
          }(zv);
        case Ov:
          return function(vv) {
            return {
              dz: iz(vv),
              wz: yv(vv)
            }
          }(zv);
        case Dv:
          return function(vv) {
            return {
              ES: vv.bool(),
              oS: tv(vv),
              bS: Gz(vv),
              kS: qz(vv)
            }
          }(zv);
        default:
          throw new Error(`no reader for to-client message ${vv}`)
      }
    }

    function Vv(vv) {
      return {
        entityName: vv.str()
      }
    }

    function Uv(vv) {
      const zv = vv.index(4);
      return 0 === zv ? vv.str() : 1 === zv ? vv.long() : 2 === zv ? vv.bool() : Vv(vv)
    }

    function Rv(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return vv.map(Uv)
      }(vv)
    }

    function xv(vv) {
      return {
        translationKey: vv.str(),
        params: Rv(vv)
      }
    }

    function tv(vv) {
      return 0 === vv.index(2) ? null : vv.str()
    }

    function qv(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return {
          color: tv(vv),
          colour: tv(vv),
          fontSize: tv(vv)
        }
      }(vv)
    }

    function Iv(vv) {
      return {
        icon: vv.str(),
        style: qv(vv)
      }
    }

    function Qv(vv) {
      const zv = vv.index(3);
      return 0 === zv ? {
        string: vv.str()
      } : 1 === zv ? {
        styledEntityName: Vv(vv)
      } : {
        styledTranslatedText: xv(vv)
      }
    }

    function Zv(vv) {
      const zv = vv.index(3);
      return 0 === zv ? null : 1 === zv ? vv.str() : vv.long()
    }

    function Av(vv) {
      return 0 === vv.index(2) ? null : vv.float()
    }

    function Lv(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return {
          color: tv(vv),
          colour: tv(vv),
          fontWeight: Zv(vv),
          fontStyle: tv(vv),
          fontSize: tv(vv),
          opacity: Av(vv)
        }
      }(vv)
    }

    function Hv(vv) {
      return {
        str: Qv(vv),
        style: Lv(vv),
        clickableUrl: tv(vv)
      }
    }

    function Mv(vv) {
      return vv.str()
    }

    function yv(vv) {
      return vv.ga(Mv)
    }

    function Bv(vv) {
      return 0 === vv.index(2) ? null : yv(vv)
    }

    function Jv(vv) {
      return {
        type: vv.str(),
        progress: vv.float(),
        width: tv(vv),
        height: tv(vv),
        colours: Bv(vv),
        backgroundColour: tv(vv)
      }
    }

    function Ev(vv) {
      return {
        type: vv.str(),
        action: vv.str(),
        style: Lv(vv)
      }
    }

    function ov(vv) {
      const zv = vv.index(7);
      return 0 === zv ? {
        string: vv.str()
      } : 1 === zv ? {
        entityName: Vv(vv)
      } : 2 === zv ? {
        translatedText: xv(vv)
      } : 3 === zv ? {
        styledIcon: Iv(vv)
      } : 4 === zv ? {
        Wv: Hv(vv)
      } : 5 === zv ? {
        styledProgressBar: Jv(vv)
      } : {
        styledKeyBinding: Ev(vv)
      }
    }

    function bv(vv) {
      return vv.ga(ov)
    }
    const rv = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function kv(vv) {
      return rv[vv.index(5)]
    }

    function Xv(vv) {
      return 0 === vv.index(2) ? null : vv.double()
    }

    function uv(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return {
          Az: Xv(vv),
          Lz: vv.double(),
          Mz: vv.double(),
          yz: vv.bool(),
          description: bv(vv),
          Bz: vv.str(),
          scale: Xv(vv),
          rotation: Xv(vv)
        }
      }(vv)
    }

    function vz(vv) {
      return 0 === vv.index(2) ? null : vv.bool()
    }

    function zz(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return {
          Ez: vv.double(),
          icon: vv.str(),
          label: bv(vv),
          bz: vv.bool(),
          scale: Xv(vv),
          rotation: Xv(vv),
          rz: vz(vv)
        }
      }(vv)
    }

    function Pz(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return {
          Az: Xv(vv),
          Xz: vv.double(),
          vP: vv.double(),
          zP: vv.double(),
          gravity: vv.double(),
          PP: vv.double(),
          hP: vv.double(),
          SP: vv.double(),
          yz: vv.bool(),
          description: bv(vv),
          icon: tv(vv)
        }
      }(vv)
    }

    function hz(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return {
          speed: vv.double(),
          gP: vv.double(),
          label: bv(vv),
          icon: tv(vv),
          scale: Xv(vv),
          rotation: Xv(vv)
        }
      }(vv)
    }

    function Sz(vv) {
      return 0 === vv.index(2) ? null : vv.long()
    }

    function ez(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return {
          dP: vv.long(),
          NP: vv.double(),
          lP: vv.double(),
          TP: Sz(vv),
          label: bv(vv),
          icon: tv(vv)
        }
      }(vv)
    }

    function gz(vv) {
      return {
        type: kv(vv),
        progressBar: uv(vv),
        timedClick: zz(vv),
        gravityBar: Pz(vv),
        precisionBar: hz(vv),
        rhythmClick: ez(vv)
      }
    }

    function pz(vv) {
      return vv.float()
    }

    function dz(vv) {
      return vv.ga(pz)
    }

    function Nz(vv) {
      return 0 === vv.index(2) ? null : dz(vv)
    }

    function lz(vv) {
      return 0 === vv.index(2) ? null : bv(vv)
    }

    function Tz(vv) {
      return vv.long()
    }

    function Wz(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return vv.ga(Tz)
      }(vv)
    }

    function wz(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return {
          xh: vv.str(),
          Lh: vv.long()
        }
      }(vv)
    }

    function az(vv) {
      const zv = vv.index(3);
      return 0 === zv ? null : 1 === zv ? vv.str() : xv(vv)
    }

    function sz(vv) {
      return {
        cP: vv.str(),
        GP: vv.str(),
        mP: vv.str()
      }
    }

    function Cz(vv) {
      return {
        Nz: vv.str(),
        lz: tv(vv),
        Tz: tv(vv),
        Wz: yv(vv)
      }
    }

    function iz(vv) {
      return vv.ga(Cz)
    }

    function cz(vv) {
      return {
        rS: vv.str(),
        x: vv.long(),
        y: vv.long(),
        z: vv.long()
      }
    }

    function Gz(vv) {
      return vv.ga(cz)
    }

    function mz(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return {
          je: vv.float(),
          fe: vv.long(),
          Fe: vv.long()
        }
      }(vv)
    }

    function jz(vv) {
      return {
        blockName: vv.str(),
        le: vv.bool(),
        Te: vv.bool(),
        ae: vv.bool(),
        se: vv.float(),
        Ce: vv.float(),
        ie: vv.long(),
        ce: mz(vv)
      }
    }

    function fz(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return vv.ga(jz)
      }(vv)
    }

    function Fz(vv) {
      return {
        pe: vv.str(),
        de: fz(vv)
      }
    }

    function Yz(vv) {
      return {
        blockName: vv.str(),
        frequency: vv.float()
      }
    }

    function nz(vv) {
      return vv.ga(Yz)
    }

    function Oz(vv) {
      return {
        Oe: vv.str(),
        De: vv.str(),
        frequency: vv.float(),
        Ke: nz(vv)
      }
    }

    function Dz(vv) {
      return vv.ga(Oz)
    }

    function Kz(vv) {
      return {
        blockName: vv.str(),
        radius: vv.long(),
        te: vv.long(),
        ve: vv.long(),
        ze: vv.long(),
        qe: vv.float()
      }
    }

    function Vz(vv) {
      return vv.ga(Kz)
    }

    function Uz(vv) {
      return {
        ve: vv.long(),
        ze: vv.long(),
        Pe: vv.long(),
        he: vv.bool(),
        Se: Fz(vv),
        Ye: Dz(vv),
        Ue: Vz(vv)
      }
    }

    function Rz(vv) {
      return vv.ga(Uz)
    }

    function xz(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return {
          name: vv.str(),
          Ae: tv(vv)
        }
      }(vv)
    }

    function tz(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return {
          terrain: xz(vv),
          Le: Vz(vv)
        }
      }(vv)
    }

    function qz(vv) {
      return 0 === vv.index(2) ? null : function(vv) {
        return {
          layers: Rz(vv),
          Ie: tz(vv)
        }
      }(vv)
    }
  },
  39907: (vv, zv, Pv) => {
    Pv.d(zv, {
      B: () => mv,
      E: () => jv,
      G: () => Cv,
      H: () => Ov,
      I: () => Rv,
      J: () => av,
      K: () => tv,
      L: () => cv,
      P: () => iv,
      T: () => Gv,
      V: () => fv,
      d: () => Sv,
      e: () => xv,
      g: () => Uv,
      i: () => wv,
      k: () => sv,
      m: () => Kv,
      o: () => Yv,
      q: () => Dv,
      r: () => nv,
      u: () => Fv,
      x: () => Vv
    });
    var hv = Pv(2762);
    const Sv = {
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

    function ev(vv, zv) {
      return !ArrayBuffer.isView(vv) || vv instanceof DataView ? Array.isArray(vv) ? vv.map((vv => zv(vv))) : vv : Array.from(vv, (vv => zv(vv)))
    }

    function gv(vv) {
      if ("string" !== typeof vv) return vv;
      for (let zv = 0; zv < vv.length; zv++) {
        const Pv = vv.charCodeAt(zv);
        if (Pv >= 55296 && Pv <= 57343) return dv.decode(pv.encode(vv))
      }
      return vv
    }
    const pv = new TextEncoder,
      dv = new TextDecoder;

    function Nv(vv) {
      return vv
    }
    let lv;

    function Tv(vv) {
      return null === vv || "object" !== typeof vv ? vv : [gv(vv.ug), gv(vv.vp)]
    }

    function Wv(vv) {
      return null === vv || "object" !== typeof vv ? vv : [ev(vv.PS, Nv), ev(vv.Yg, Nv)]
    }

    function wv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.al), gv(zv.sl)];
      var zv
    }

    function av(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [zv.id, zv.Nl];
      var zv
    }

    function sv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [zv.ah, gv(zv.sh), zv.Ch, gv(zv.mh), zv.Yh, zv.nh, zv.Bg, gv(zv.Jg), gv(zv.Eg)];
      var zv
    }

    function Cv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [ev(zv.MN, Nv), zv.yN];
      var zv
    }

    function iv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [ev(zv.Sl, (vv => gv(vv))), gv(zv.el), zv.gl];
      var zv
    }

    function cv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [ev(zv.BN, Nv), gv(zv.JN), zv.EN];
      var zv
    }

    function Gv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.GP), gv(zv.mP)];
      var zv
    }

    function mv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.Fp)];
      var zv
    }

    function jv(vv) {
      return gv(vv)
    }

    function fv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.kg), gv(zv.Xg), gv(zv.ug), gv(zv.vp)];
      var zv
    }

    function Fv(vv) {
      return Tv(vv)
    }

    function Yv(vv) {
      return Tv(vv)
    }

    function nv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.Zl)];
      var zv
    }

    function Ov(vv) {
      return vv
    }

    function Dv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.Pl), gv(zv.hl)];
      var zv
    }

    function Kv(vv) {
      return gv(vv)
    }

    function Vv(vv) {
      return Wv(vv)
    }

    function Uv(vv) {
      return Wv(vv)
    }

    function Rv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [gv(zv.pl)];
      var zv
    }

    function xv(vv) {
      return (lv ??= (0, hv.d)().map((vv => vv.name)), lv).map((zv => {
        return "string" === typeof(Pv = vv[zv]) ? gv(Pv) : ev(Pv, Nv);
        var Pv
      }))
    }

    function tv(vv) {
      return null === (zv = vv) || "object" !== typeof zv ? zv : [zv.Al, zv.Ll, zv.Hl];
      var zv
    }
  },
  9185: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv,
      f: () => ev
    });
    var hv = Pv(9144);
    const Sv = "Air",
      ev = Object.freeze(new hv.f(Sv, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  38726: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      g: () => pv
    });
    var hv = Pv(312),
      Sv = Pv(4209);
    const ev = new Set(Sv.k),
      gv = new Map;

    function pv(vv, zv) {
      let Pv = gv.get(zv);
      void 0 === Pv && (Pv = new Map, gv.set(zv, Pv));
      let Sv = Pv.get(vv);
      return void 0 === Sv && (Sv = `${vv}${(0,hv.B)(zv)}`, Pv.set(vv, Sv)), Sv
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);