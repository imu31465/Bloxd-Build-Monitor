export const id = 191;
export const ids = [191];
export const modules = {
  40873: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => qu,
      g: () => lu,
      i: () => Xu
    });
    var su = ju(40877),
      Uu = ju(4970),
      Zu = ju(40883);

    function Xu(uu) {
      return uu.payloadKind === Uu.ic.Msgpack ? (0, su.d)(uu.payload) : void 0
    }

    function lu(uu, Eu) {
      if (Eu.payloadKind === Uu.ic.Bytes || Eu.payloadKind === Uu.ic.MsgpackBin) return (0, Zu.c)(uu, Eu.payload)
    }

    function qu(uu) {
      return null !== uu && "object" === typeof uu
    }
  },
  40889: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => bu,
      i: () => cu,
      k: () => Nu,
      n: () => Cu,
      q: () => hu
    });
    var su = ju(4970),
      Uu = ju(40897);
    const Zu = new Map,
      Xu = new Set,
      lu = new Set;
    let qu = 0,
      fu = 0;

    function Cu(uu, Eu) {
      let ju = Zu.get(uu);
      return ju || (ju = new Set, Zu.set(uu, ju)), ju.add(Eu), () => {
        ju.delete(Eu)
      }
    }

    function bu() {
      return 0 !== qu
    }

    function cu(uu) {
      return Xu.add(uu), () => {
        Xu.delete(uu)
      }
    }

    function Nu(uu) {
      return lu.add(uu), () => {
        lu.delete(uu)
      }
    }
    const Ou = "A raw message listener threw";

    function Yu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xu;
      for (const su of Eu) try {
        su()
      } catch (ju) {
        uu ? (0, Uu.p)(ju, Ou) : console.error(Ou, ju)
      }
    }
    const hu = {
      fire: function(uu) {
        if ("connection" === uu.type) {
          const Eu = uu.phase === su.z.Activated && uu.conn !== qu && uu.conn > fu,
            ju = (uu.phase === su.z.Left || uu.phase === su.z.Closed) && uu.conn === qu;
          return void(Eu || ju ? (qu = Eu ? uu.conn : 0, Yu(!0)) : uu.phase === su.z.Resumed && 0 !== qu && uu.conn > fu && (qu = uu.conn, Yu(!0, lu)))
        }
        const Eu = Zu.get(uu.VC);
        if (Eu && uu.conn === qu && 0 !== qu)
          for (const su of Eu) try {
            su(uu)
          } catch (ju) {
            (0, Uu.p)(ju, Ou)
          }
      },
      close: function(uu) {
        fu = Math.max(fu, uu, qu), 0 !== qu && (qu = 0, Yu(!1))
      }
    }
  },
  40860: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => fu,
      e: () => qu,
      h: () => lu
    });
    var su = ju(1320),
      Uu = ju(40833);
    const Zu = new TextDecoder,
      Xu = new TextEncoder;

    function lu(uu, Eu) {
      const ju = uu.queries.entityName(Eu);
      if (ju === Uu.yc) return;
      const Xu = uu.memoryData(uu.scratch(), 4 + ju, 4, "entity_name's answer");
      if (!Xu) return;
      const lu = Xu.getUint32(0, !0),
        qu = Zu.decode(new Uint8Array(Xu.buffer, Xu.byteOffset + 4, ju));
      return (0, su.e)(qu, !1, lu === Uu.Hd ? null : lu)
    }

    function qu(uu, Eu, ju) {
      const su = Xu.encode(ju);
      if (su.length > Uu.yb) return !1;
      const Zu = uu.memoryView(Uint8Array, uu.scratch(), su.length, "has_effect's name");
      return !!Zu && (Zu.set(su), 1 === uu.queries.hasEffect(Eu, su.length))
    }

    function fu(uu, Eu, ju, su) {
      const Xu = uu.queries.blockData(Eu, ju, su);
      if (Xu === Uu.yc) return;
      const lu = uu.memoryView(Uint8Array, uu.scratch(), Xu, "block_data's answer");
      return lu ? JSON.parse(Zu.decode(lu)) : void 0
    }
  },
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
  40883: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(40864);
    const Uu = new TextDecoder("utf-8", {
      ignoreBOM: !0
    });
    class Zu {
      constructor(uu) {
        this.buf = uu, this.at = 0, this.view = null
      }
      bool() {
        return 0 !== this.u8()
      }
      long() {
        let uu = this.u8(),
          Eu = 127 & uu,
          ju = 128;
        for (; 128 & uu;) {
          if (ju > 2 ** 63) throw new RangeError("avro: varint too long");
          uu = this.u8(), Eu += (127 & uu) * ju, ju *= 128
        }
        return Eu % 2 === 1 ? -(Eu + 1) / 2 : Eu / 2
      }
      float() {
        const uu = this.take(4);
        return this.floats().getFloat32(uu, !0)
      }
      double() {
        const uu = this.take(8);
        return this.floats().getFloat64(uu, !0)
      }
      str() {
        const uu = this.size(),
          Eu = this.take(uu),
          ju = Eu + uu;
        if (uu <= 32) {
          let uu = "";
          for (let su = Eu; su < ju; su++) {
            const Zu = this.buf[su];
            if (Zu >= 128) return Uu.decode(this.buf.subarray(Eu, ju));
            uu += String.fromCharCode(Zu)
          }
          return uu
        }
        return Uu.decode(this.buf.subarray(Eu, ju))
      }
      bytes() {
        return this.fixed(this.size())
      }
      fixed(uu) {
        const Eu = this.take(uu);
        return this.buf.slice(Eu, Eu + uu)
      }
      index(uu) {
        const Eu = this.long();
        if (!(Eu >= 0 && Eu < uu)) throw new RangeError(`avro: index ${Eu} of ${uu}`);
        return Eu
      }
      CO(uu) {
        const Eu = [];
        for (let ju = this.long(); 0 !== ju; ju = this.long()) {
          ju = this.block(ju);
          for (let su = 0; su < ju; su++) Eu.push(uu(this))
        }
        return Eu
      }
      map(uu) {
        const Eu = {};
        for (let ju = this.long(); 0 !== ju; ju = this.long()) {
          ju = this.block(ju);
          for (let su = 0; su < ju; su++) {
            Eu[this.str()] = uu(this)
          }
        }
        return Eu
      }
      end() {
        if (this.at !== this.buf.length) throw new RangeError(`avro: ${this.buf.length-this.at} bytes after the value`)
      }
      block(uu) {
        let Eu = uu;
        if (Eu < 0 && (Eu = -Eu, this.long()), Eu > this.buf.length - this.at) throw new RangeError(`avro: block of ${Eu} items in ${this.buf.length-this.at} bytes`);
        return Eu
      }
      floats() {
        return this.view ??= new DataView(this.buf.buffer, this.buf.byteOffset, this.buf.byteLength), this.view
      }
      size() {
        const uu = this.long();
        if (uu < 0) throw new RangeError(`avro: length ${uu}`);
        return uu
      }
      u8() {
        const uu = this.buf[this.at];
        if (void 0 === uu) throw new RangeError("avro: truncated");
        return this.at++, uu
      }
      take(uu) {
        const Eu = this.at;
        if (uu > this.buf.length - Eu) throw new RangeError("avro: truncated");
        return this.at = Eu + uu, Eu
      }
    }

    function Xu(uu, Eu) {
      const ju = new Zu(Eu),
        Uu = (0, su.ub)(uu, ju);
      return ju.end(), Uu
    }
  },
  40864: (uu, Eu, ju) => {
    ju.d(Eu, {
      C: () => Xu,
      G: () => Pu,
      J: () => Uu,
      L: () => lu,
      P: () => Nu,
      R: () => du,
      V: () => Ju,
      W: () => pu,
      _: () => Cu,
      ab: () => bu,
      b: () => Gu,
      d: () => hu,
      db: () => au,
      h: () => Du,
      hb: () => Ou,
      i: () => gu,
      k: () => wu,
      kb: () => Mu,
      o: () => su,
      ob: () => Yu,
      qb: () => qu,
      s: () => Zu,
      u: () => eu,
      ub: () => ou,
      w: () => cu,
      z: () => fu
    });
    const su = 2,
      Uu = 12,
      Zu = 27,
      Xu = 40,
      lu = 52,
      qu = 59,
      fu = 63,
      Cu = 83,
      bu = 84,
      cu = 89,
      Nu = 91,
      Ou = 93,
      Yu = 94,
      hu = 95,
      Du = 97,
      gu = 101,
      Mu = 102,
      eu = 73,
      Gu = 16,
      pu = 86,
      wu = 60,
      Ju = 17,
      du = 56,
      au = 100,
      Pu = 81;

    function ou(uu, Eu) {
      switch (uu) {
        case su:
          return function(uu) {
            return {
              SZ: Au(uu),
              IZ: uu.float(),
              FZ: uu.long()
            }
          }(Eu);
        case Uu:
          return function(uu) {
            return {
              HU: Vu(uu),
              AU: Vu(uu)
            }
          }(Eu);
        case Zu:
          return function(uu) {
            return {
              qu: uu.bool(),
              fu: Vu(uu)
            }
          }(Eu);
        case Xu:
          return Eu.str();
        case lu:
          return function(uu) {
            return {
              id: uu.long(),
              Hu: XE(uu)
            }
          }(Eu);
        case qu:
          return function(uu) {
            return {
              UX: Vu(uu),
              ZX: qE(uu)
            }
          }(Eu);
        case fu:
          return Eu.str();
        case Cu:
        case bu:
          return Eu.long();
        case cu:
          return function(uu) {
            return {
              BU: uu.long(),
              LU: uu.bool(),
              tU: uu.float()
            }
          }(Eu);
        case Nu:
          return Eu.long();
        case Ou:
          return function(uu) {
            return {
              FE: uu.bool(),
              ku: bE(uu)
            }
          }(Eu);
        case Yu:
          return function(uu) {
            return {
              id: uu.str(),
              position: CE(uu),
              KE: cE(uu),
              style: Iu(uu),
              rE: uu.bool()
            }
          }(Eu);
        case hu:
          return function(uu) {
            return {
              id: Vu(uu)
            }
          }(Eu);
        case Du:
          return function(uu) {
            return {
              lZ: uu.long(),
              qZ: uu.str(),
              fZ: UE(uu),
              CZ: UE(uu),
              bZ: Vu(uu),
              cZ: Vu(uu),
              NZ: Vu(uu),
              OZ: Vu(uu),
              YZ: Vu(uu),
              hZ: UE(uu),
              DZ: UE(uu),
              gZ: Vu(uu),
              MZ: Vu(uu),
              eZ: Vu(uu)
            }
          }(Eu);
        case gu:
          return Eu.str();
        case Mu:
          return Eu.long();
        case eu:
          return function(uu) {
            return {
              hj: uu.long(),
              Dj: uu.str(),
              gj: uu.float()
            }
          }(Eu);
        case Gu:
          return function(uu) {
            return {
              nU: uu.bool(),
              yU: Vu(uu),
              zU: uu.str(),
              RU: OE(uu),
              uZ: OE(uu),
              EZ: uu.bool(),
              jZ: uu.long(),
              sZ: YE(uu)
            }
          }(Eu);
        case pu:
          return function(uu) {
            return {
              FU: Vu(uu)
            }
          }(Eu);
        case wu:
          return function(uu) {
            return {
              Qu: uu.str(),
              iu: uu.str(),
              Wu: hE(uu),
              BE: uu.str(),
              LE: zu(uu),
              tE: uu.float()
            }
          }(Eu);
        case Ju:
          return function(uu) {
            return {
              Qu: uu.str(),
              iu: uu.str(),
              Wu: hE(uu)
            }
          }(Eu);
        case du:
          return function(uu) {
            return uu.CO(DE)
          }(Eu);
        case au:
          return function(uu) {
            return {
              Su: ME(uu),
              tu: Lu(uu)
            }
          }(Eu);
        case Pu:
          return function(uu) {
            return {
              Hj: uu.bool(),
              Aj: Vu(uu),
              nj: GE(uu),
              zj: iE(uu)
            }
          }(Eu);
        default:
          throw new Error(`no reader for to-client message ${uu}`)
      }
    }

    function ku(uu) {
      return {
        entityName: uu.str()
      }
    }

    function mu(uu) {
      const Eu = uu.index(4);
      return 0 === Eu ? uu.str() : 1 === Eu ? uu.long() : 2 === Eu ? uu.bool() : ku(uu)
    }

    function vu(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return uu.map(mu)
      }(uu)
    }

    function Ku(uu) {
      return {
        translationKey: uu.str(),
        params: vu(uu)
      }
    }

    function Vu(uu) {
      return 0 === uu.index(2) ? null : uu.str()
    }

    function ru(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          color: Vu(uu),
          colour: Vu(uu),
          fontSize: Vu(uu)
        }
      }(uu)
    }

    function Qu(uu) {
      return {
        icon: uu.str(),
        style: ru(uu)
      }
    }

    function iu(uu) {
      const Eu = uu.index(3);
      return 0 === Eu ? {
        string: uu.str()
      } : 1 === Eu ? {
        styledEntityName: ku(uu)
      } : {
        styledTranslatedText: Ku(uu)
      }
    }

    function Wu(uu) {
      const Eu = uu.index(3);
      return 0 === Eu ? null : 1 === Eu ? uu.str() : uu.long()
    }

    function Su(uu) {
      return 0 === uu.index(2) ? null : uu.float()
    }

    function Iu(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          color: Vu(uu),
          colour: Vu(uu),
          fontWeight: Wu(uu),
          fontStyle: Vu(uu),
          fontSize: Vu(uu),
          opacity: Su(uu)
        }
      }(uu)
    }

    function Fu(uu) {
      return {
        str: iu(uu),
        style: Iu(uu),
        clickableUrl: Vu(uu)
      }
    }

    function Bu(uu) {
      return uu.str()
    }

    function Lu(uu) {
      return uu.CO(Bu)
    }

    function tu(uu) {
      return 0 === uu.index(2) ? null : Lu(uu)
    }

    function xu(uu) {
      return {
        type: uu.str(),
        progress: uu.float(),
        width: Vu(uu),
        height: Vu(uu),
        colours: tu(uu),
        backgroundColour: Vu(uu)
      }
    }

    function Tu(uu) {
      return {
        type: uu.str(),
        action: uu.str(),
        style: Iu(uu)
      }
    }

    function Hu(uu) {
      const Eu = uu.index(7);
      return 0 === Eu ? {
        string: uu.str()
      } : 1 === Eu ? {
        entityName: ku(uu)
      } : 2 === Eu ? {
        translatedText: Ku(uu)
      } : 3 === Eu ? {
        styledIcon: Qu(uu)
      } : 4 === Eu ? {
        jE: Fu(uu)
      } : 5 === Eu ? {
        styledProgressBar: xu(uu)
      } : {
        styledKeyBinding: Tu(uu)
      }
    }

    function Au(uu) {
      return uu.CO(Hu)
    }
    const nu = ["progressBar", "timedClick", "gravityBar", "precisionBar", "rhythmClick"];

    function yu(uu) {
      return nu[uu.index(5)]
    }

    function zu(uu) {
      return 0 === uu.index(2) ? null : uu.double()
    }

    function Ru(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          zu: zu(uu),
          Ru: uu.double(),
          uE: uu.double(),
          EE: uu.bool(),
          description: Au(uu),
          UE: uu.str(),
          scale: zu(uu),
          rotation: zu(uu)
        }
      }(uu)
    }

    function uE(uu) {
      return 0 === uu.index(2) ? null : uu.bool()
    }

    function EE(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          XE: uu.double(),
          icon: uu.str(),
          label: Au(uu),
          lE: uu.bool(),
          scale: zu(uu),
          rotation: zu(uu),
          qE: uE(uu)
        }
      }(uu)
    }

    function jE(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          zu: zu(uu),
          CE: uu.double(),
          bE: uu.double(),
          cE: uu.double(),
          gravity: uu.double(),
          NE: uu.double(),
          OE: uu.double(),
          YE: uu.double(),
          EE: uu.bool(),
          description: Au(uu),
          icon: Vu(uu)
        }
      }(uu)
    }

    function sE(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          speed: uu.double(),
          DE: uu.double(),
          label: Au(uu),
          icon: Vu(uu),
          scale: zu(uu),
          rotation: zu(uu)
        }
      }(uu)
    }

    function UE(uu) {
      return 0 === uu.index(2) ? null : uu.long()
    }

    function ZE(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          ME: uu.long(),
          eE: uu.double(),
          GE: uu.double(),
          pE: UE(uu),
          label: Au(uu),
          icon: Vu(uu)
        }
      }(uu)
    }

    function XE(uu) {
      return {
        type: yu(uu),
        progressBar: Ru(uu),
        timedClick: EE(uu),
        gravityBar: jE(uu),
        precisionBar: sE(uu),
        rhythmClick: ZE(uu)
      }
    }
    const lE = ["playerGone", "rateLimited"];

    function qE(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return lE[uu.index(2)]
      }(uu)
    }

    function fE(uu) {
      return uu.float()
    }

    function CE(uu) {
      return uu.CO(fE)
    }

    function bE(uu) {
      return 0 === uu.index(2) ? null : CE(uu)
    }

    function cE(uu) {
      return 0 === uu.index(2) ? null : Au(uu)
    }

    function NE(uu) {
      return uu.long()
    }

    function OE(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return uu.CO(NE)
      }(uu)
    }

    function YE(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          ZZ: uu.str(),
          XZ: uu.long()
        }
      }(uu)
    }

    function hE(uu) {
      const Eu = uu.index(3);
      return 0 === Eu ? null : 1 === Eu ? uu.str() : Ku(uu)
    }

    function DE(uu) {
      return {
        QZ: uu.str(),
        iZ: uu.str(),
        WZ: uu.str()
      }
    }

    function gE(uu) {
      return {
        Iu: uu.str(),
        Fu: Vu(uu),
        Bu: Vu(uu),
        Lu: Lu(uu)
      }
    }

    function ME(uu) {
      return uu.CO(gE)
    }

    function eE(uu) {
      return {
        yj: uu.str(),
        x: uu.long(),
        y: uu.long(),
        z: uu.long()
      }
    }

    function GE(uu) {
      return uu.CO(eE)
    }

    function pE(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          Gs: uu.float(),
          ws: uu.long(),
          ds: uu.long()
        }
      }(uu)
    }

    function wE(uu) {
      return {
        blockName: uu.str(),
        Ns: uu.bool(),
        Os: uu.bool(),
        Ys: uu.bool(),
        hs: uu.float(),
        Ds: uu.float(),
        gs: uu.long(),
        Ms: pE(uu)
      }
    }

    function JE(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return uu.CO(wE)
      }(uu)
    }

    function dE(uu) {
      return {
        fs: uu.str(),
        Cs: JE(uu)
      }
    }

    function aE(uu) {
      return {
        blockName: uu.str(),
        frequency: uu.float()
      }
    }

    function PE(uu) {
      return uu.CO(aE)
    }

    function oE(uu) {
      return {
        Ks: uu.str(),
        Vs: uu.str(),
        frequency: uu.float(),
        Qs: PE(uu)
      }
    }

    function kE(uu) {
      return uu.CO(oE)
    }

    function mE(uu) {
      return {
        blockName: uu.str(),
        radius: uu.long(),
        Fs: uu.long(),
        ss: uu.long(),
        Us: uu.long(),
        Bs: uu.float()
      }
    }

    function vE(uu) {
      return uu.CO(mE)
    }

    function KE(uu) {
      return {
        ss: uu.long(),
        Us: uu.long(),
        Zs: uu.long(),
        Xs: uu.bool(),
        ls: dE(uu),
        Ps: kE(uu),
        Ss: vE(uu)
      }
    }

    function VE(uu) {
      return uu.CO(KE)
    }

    function rE(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          name: uu.str(),
          Hs: Vu(uu)
        }
      }(uu)
    }

    function QE(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          terrain: rE(uu),
          ns: vE(uu)
        }
      }(uu)
    }

    function iE(uu) {
      return 0 === uu.index(2) ? null : function(uu) {
        return {
          layers: VE(uu),
          Ls: QE(uu)
        }
      }(uu)
    }
  },
  40854: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => wu,
      B: () => ku,
      C: () => eu,
      E: () => Gu,
      H: () => hu,
      K: () => au,
      O: () => vu,
      S: () => Ou,
      U: () => Vu,
      X: () => gu,
      _: () => Du,
      c: () => Uu,
      cb: () => Mu,
      g: () => Ku,
      gb: () => pu,
      k: () => mu,
      m: () => Nu,
      n: () => Yu,
      r: () => ou,
      s: () => Ju,
      w: () => Pu,
      y: () => du
    });
    var su = ju(3165);
    const Uu = {
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

    function Zu(uu, Eu) {
      return !ArrayBuffer.isView(uu) || uu instanceof DataView ? Array.isArray(uu) ? uu.map((uu => Eu(uu))) : uu : Array.from(uu, (uu => Eu(uu)))
    }

    function Xu(uu) {
      if ("string" !== typeof uu) return uu;
      for (let Eu = 0; Eu < uu.length; Eu++) {
        const ju = uu.charCodeAt(Eu);
        if (ju >= 55296 && ju <= 57343) return qu.decode(lu.encode(uu))
      }
      return uu
    }
    const lu = new TextEncoder,
      qu = new TextDecoder;

    function fu(uu) {
      return uu
    }
    let Cu;

    function bu(uu) {
      return null === uu || "object" !== typeof uu ? uu : [Xu(uu.ql), Xu(uu.fl)]
    }

    function cu(uu) {
      return null === uu || "object" !== typeof uu ? uu : [Zu(uu.RU, fu), Zu(uu.wl, fu)]
    }

    function Nu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.VC), Xu(Eu.rC)];
      var Eu
    }

    function Ou(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Eu.id, Eu.eC];
      var Eu
    }

    function Yu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Eu.lZ, Xu(Eu.qZ), Eu.fZ, Xu(Eu.cZ), Eu.hZ, Eu.DZ, Eu.mC, Xu(Eu.vC), Xu(Eu.KC)];
      var Eu
    }

    function hu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Zu(Eu.RX, fu), Eu.ul];
      var Eu
    }

    function Du(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Zu(Eu.AX, (uu => Xu(uu))), Xu(Eu.yX), Eu.zX];
      var Eu
    }

    function gu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Zu(Eu.eq, fu), Xu(Eu.Gq), Eu.pq];
      var Eu
    }

    function Mu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.iZ), Xu(Eu.WZ)];
      var Eu
    }

    function eu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.Vl)];
      var Eu
    }

    function Gu(uu) {
      return Xu(uu)
    }

    function pu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.DC), Xu(Eu.gC), Xu(Eu.ql), Xu(Eu.fl)];
      var Eu
    }

    function wu(uu) {
      return bu(uu)
    }

    function Ju(uu) {
      return bu(uu)
    }

    function du(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.bq)];
      var Eu
    }

    function au(uu) {
      return uu
    }

    function Pu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.Xl), Xu(Eu.ll)];
      var Eu
    }

    function ou(uu) {
      return Xu(uu)
    }

    function ku(uu) {
      return cu(uu)
    }

    function mu(uu) {
      return cu(uu)
    }

    function vu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Xu(Eu.wq)];
      var Eu
    }

    function Ku(uu) {
      return (Cu ??= (0, su.d)().map((uu => uu.name)), Cu).map((Eu => {
        return "string" === typeof(ju = uu[Eu]) ? Xu(ju) : Zu(ju, fu);
        var ju
      }))
    }

    function Vu(uu) {
      return null === (Eu = uu) || "object" !== typeof Eu ? Eu : [Eu.qq, Eu.fq, Eu.Cq];
      var Eu
    }
  },
  9505: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      g: () => Zu
    });
    var su = ju(9456);
    const Uu = "Air",
      Zu = Object.freeze(new su.h(Uu, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  39547: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu,
      g: () => lu
    });
    var su = ju(349),
      Uu = ju(4643);
    const Zu = new Set(Uu.q),
      Xu = new Map;

    function lu(uu, Eu) {
      let ju = Xu.get(Eu);
      void 0 === ju && (ju = new Map, Xu.set(Eu, ju));
      let Uu = ju.get(uu);
      return void 0 === Uu && (Uu = `${uu}${(0,su.t)(Eu)}`, ju.set(uu, Uu)), Uu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);