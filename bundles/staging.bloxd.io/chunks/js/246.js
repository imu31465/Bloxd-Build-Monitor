export const id = 246;
export const ids = [246];
export const modules = {
  39361: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Wv,
      g: () => Tv,
      j: () => dv,
      n: () => wv,
      p: () => Nv,
      q: () => pv,
      t: () => lv
    });
    var hv = Pv(38209),
      Sv = Pv(39368);

    function ev(vv, zv, Pv, hv) {
      switch (zv) {
        case 5120: {
          let zv = vv.getInt8(Pv);
          return hv && (zv = Math.max(zv / 127, -1)), zv
        }
        case 5121: {
          let zv = vv.getUint8(Pv);
          return hv && (zv /= 255), zv
        }
        case 5122: {
          let zv = vv.getInt16(Pv, !0);
          return hv && (zv = Math.max(zv / 32767, -1)), zv
        }
        case 5123: {
          let zv = vv.getUint16(Pv, !0);
          return hv && (zv /= 65535), zv
        }
        case 5131:
          return (0, Sv.b)(vv.getUint16(Pv, !0));
        case 5124:
          return vv.getInt32(Pv, !0);
        case 5125:
          return vv.getUint32(Pv, !0);
        case 5126:
          return vv.getFloat32(Pv, !0);
        default:
          throw new Error(`Invalid component type ${zv}`)
      }
    }

    function gv(vv, zv, Pv, hv, ev) {
      switch (zv) {
        case 5120:
          hv && (ev = Math.round(127 * ev)), vv.setInt8(Pv, ev);
          break;
        case 5121:
          hv && (ev = Math.round(255 * ev)), vv.setUint8(Pv, ev);
          break;
        case 5122:
          hv && (ev = Math.round(32767 * ev)), vv.setInt16(Pv, ev, !0);
          break;
        case 5123:
          hv && (ev = Math.round(65535 * ev)), vv.setUint16(Pv, ev, !0);
          break;
        case 5131:
          vv.setUint16(Pv, (0, Sv.i)(ev), !0);
          break;
        case 5124:
          vv.setInt32(Pv, ev, !0);
          break;
        case 5125:
          vv.setUint32(Pv, ev, !0);
          break;
        case 5126:
          vv.setFloat32(Pv, ev, !0);
          break;
        default:
          throw new Error(`Invalid component type ${zv}`)
      }
    }

    function pv(vv) {
      switch (vv) {
        case 5120:
        case 5121:
          return 1;
        case 5122:
        case 5123:
        case 5131:
          return 2;
        case 5124:
        case 5125:
        case 5126:
          return 4;
        default:
          throw new Error(`Invalid type '${vv}'`)
      }
    }

    function dv(vv, zv, Pv, hv, Sv, dv, Nv, lv) {
      const Tv = new Array(hv),
        Wv = new Array(hv);
      if (vv instanceof Array) {
        let Sv = zv / 4;
        const ev = Pv / 4;
        for (let zv = 0; zv < dv; zv += hv) {
          for (let zv = 0; zv < hv; zv++) Tv[zv] = Wv[zv] = vv[Sv + zv];
          lv(Wv, zv);
          for (let zv = 0; zv < hv; zv++) Tv[zv] !== Wv[zv] && (vv[Sv + zv] = Wv[zv]);
          Sv += ev
        }
      } else {
        const wv = ArrayBuffer.isView(vv) ? new DataView(vv.buffer, vv.byteOffset, vv.byteLength) : new DataView(vv),
          av = pv(Sv);
        for (let vv = 0; vv < dv; vv += hv) {
          for (let vv = 0, Pv = zv; vv < hv; vv++, Pv += av) Tv[vv] = Wv[vv] = ev(wv, Sv, Pv, Nv);
          lv(Wv, vv);
          for (let vv = 0, Pv = zv; vv < hv; vv++, Pv += av) Tv[vv] !== Wv[vv] && gv(wv, Sv, Pv, Nv, Wv[vv]);
          zv += Pv
        }
      }
    }

    function Nv(vv, zv, Pv, Sv, ev, gv, Nv, lv) {
      const Tv = zv * pv(Pv),
        Wv = Nv * zv;
      if (5126 !== Pv || ev !== Tv) {
        const hv = new Float32Array(Wv);
        return dv(vv, Sv, ev, zv, Pv, Wv, gv, ((vv, Pv) => {
          for (let Sv = 0; Sv < zv; Sv++) hv[Pv + Sv] = vv[Sv]
        })), hv
      }
      if (!(vv instanceof Array || vv instanceof Float32Array) || 0 !== Sv || vv.length !== Wv) {
        if (vv instanceof Array) {
          const zv = Sv / 4;
          return vv.slice(zv, zv + Wv)
        }
        if (ArrayBuffer.isView(vv)) {
          const zv = vv.byteOffset + Sv;
          return 0 !== (3 & zv) && (hv.d.Warn("Float array must be aligned to 4-bytes border"), lv = !0), lv ? new Float32Array(vv.buffer.slice(zv, zv + Wv * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(vv.buffer, zv, Wv)
        }
        return new Float32Array(vv, Sv, Wv)
      }
      return lv ? vv.slice() : vv
    }

    function lv(vv, zv, Pv, Sv, ev, gv, Nv) {
      const lv = pv(Pv),
        Tv = function(vv) {
          switch (vv) {
            case 5120:
              return Int8Array;
            case 5121:
              return Uint8Array;
            case 5122:
              return Int16Array;
            case 5123:
            case 5131:
              return Uint16Array;
            case 5124:
              return Int32Array;
            case 5125:
              return Uint32Array;
            case 5126:
              return Float32Array;
            default:
              throw new Error(`Invalid component type '${vv}'`)
          }
        }(Pv),
        Wv = gv * zv;
      if (Array.isArray(vv)) {
        if (0 !== (3 & Sv) || 0 !== (3 & ev)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const hv = Sv / 4,
          pv = ev / 4;
        if (hv + (gv - 1) * pv + zv > vv.length) throw new Error("Last accessed index is out of bounds.");
        if (pv < zv) throw new Error("Data stride cannot be smaller than the component size.");
        if (pv !== zv) {
          const hv = new Tv(Wv);
          return dv(vv, Sv, ev, zv, Pv, Wv, !1, ((vv, Pv) => {
            for (let Sv = 0; Sv < zv; Sv++) hv[Pv + Sv] = vv[Sv]
          })), hv
        }
        return new Tv(vv.slice(hv, hv + Wv))
      }
      let wv, av = Sv;
      ArrayBuffer.isView(vv) ? (wv = vv.buffer, av += vv.byteOffset) : wv = vv;
      if (av + (gv - 1) * ev + zv * lv > wv.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const sv = zv * lv;
      if (ev < sv) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (ev !== sv) {
        const vv = new Tv(Wv),
          Pv = new Uint8Array(wv, av),
          hv = new Uint8Array(vv.buffer),
          Sv = zv * lv;
        for (let zv = 0, pv = 0, dv = 0; zv < gv; zv++, pv += ev, dv += Sv) hv.set(Pv.subarray(pv, pv + Sv), dv);
        return vv
      }
      return 1 !== lv && 0 !== (av & lv - 1) && (hv.d.Warn("Array must be aligned to border of element size. Data will be copied."), Nv = !0), Nv ? new Tv(wv.slice(av, av + Wv * lv)) : new Tv(wv, av, Wv)
    }

    function Tv(vv, zv, Pv, Sv, ev, gv, Nv, lv) {
      const Tv = zv * pv(Pv),
        Wv = Nv * zv;
      if (lv.length !== Wv) throw new Error("Output length is not valid");
      if (5126 === Pv && ev === Tv)
        if (vv instanceof Array) {
          const zv = Sv / 4;
          lv.set(vv, zv)
        } else if (ArrayBuffer.isView(vv)) {
        const zv = vv.byteOffset + Sv;
        if (0 !== (3 & zv)) return hv.d.Warn("Float array must be aligned to 4-bytes border"), void lv.set(new Float32Array(vv.buffer.slice(zv, zv + Wv * Float32Array.BYTES_PER_ELEMENT)));
        const Pv = new Float32Array(vv.buffer, zv, Wv);
        lv.set(Pv)
      } else {
        const zv = new Float32Array(vv, Sv, Wv);
        lv.set(zv)
      } else dv(vv, Sv, ev, zv, Pv, Wv, gv, ((vv, Pv) => {
        for (let hv = 0; hv < zv; hv++) lv[Pv + hv] = vv[hv]
      }))
    }

    function Wv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(vv)) {
        for (let Sv = 0; Sv < zv; Sv++)
          if (vv[Pv + Sv] - hv > 65535) return !0;
        return !1
      }
      return 4 === vv.BYTES_PER_ELEMENT
    }

    function wv(vv) {
      const zv = vv.buffer;
      if (zv instanceof ArrayBuffer) return vv;
      const Pv = new ArrayBuffer(vv.byteLength);
      return new Uint8Array(Pv).set(new Uint8Array(zv, vv.byteOffset, vv.byteLength)), Pv
    }
  },
  39196: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Yv,
      d: () => fv,
      i: () => Fv,
      g: () => Rv,
      l: () => xv
    });
    class hv {
      constructor() {
        this.children = []
      }
      isValid(vv) {
        return !0
      }
      process(vv, zv, Pv) {
        let hv = "";
        if (this.line) {
          let Pv = this.line;
          const Sv = zv.processor;
          if (Sv) {
            Sv.lineProcessor && (Pv = Sv.lineProcessor(Pv, zv.isFragment, zv.processingContext));
            const hv = zv.processor?.attributeKeywordName ?? "attribute",
              ev = zv.isFragment && zv.processor?.varyingFragmentKeywordName ? zv.processor?.varyingFragmentKeywordName : !zv.isFragment && zv.processor?.varyingVertexKeywordName ? zv.processor?.varyingVertexKeywordName : "varying";
            if (!zv.isFragment && Sv.attributeProcessor && this.line.startsWith(hv)) Pv = Sv.attributeProcessor(this.line, vv, zv.processingContext);
            else if (Sv.varyingProcessor && (Sv.varyingCheck?.(this.line, zv.isFragment) || !Sv.varyingCheck && this.line.startsWith(ev))) Pv = Sv.varyingProcessor(this.line, zv.isFragment, vv, zv.processingContext);
            else if (Sv.uniformProcessor && Sv.uniformRegexp && Sv.uniformRegexp.test(this.line)) zv.lookForClosingBracketForUniformBuffer || (Pv = Sv.uniformProcessor(this.line, zv.isFragment, vv, zv.processingContext));
            else if (Sv.uniformBufferProcessor && Sv.uniformBufferRegexp && Sv.uniformBufferRegexp.test(this.line)) zv.lookForClosingBracketForUniformBuffer || (Pv = Sv.uniformBufferProcessor(this.line, zv.isFragment, zv.processingContext), zv.lookForClosingBracketForUniformBuffer = !0);
            else if (Sv.textureProcessor && Sv.textureRegexp && Sv.textureRegexp.test(this.line)) Pv = Sv.textureProcessor(this.line, zv.isFragment, vv, zv.processingContext);
            else if ((Sv.uniformProcessor || Sv.uniformBufferProcessor) && this.line.startsWith("uniform") && !zv.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Sv.uniformProcessor && (Pv = Sv.uniformProcessor(this.line, zv.isFragment, vv, zv.processingContext)) : Sv.uniformBufferProcessor && (Pv = Sv.uniformBufferProcessor(this.line, zv.isFragment, zv.processingContext), zv.lookForClosingBracketForUniformBuffer = !0)
            }
            zv.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (zv.lookForClosingBracketForUniformBuffer = !1, Sv.endOfUniformBufferProcessor && (Pv = Sv.endOfUniformBufferProcessor(this.line, zv.isFragment, zv.processingContext)))
          }
          hv += Pv + "\n"
        }
        for (const Sv of this.children) hv += Sv.process(vv, zv, Pv);
        return this.additionalDefineKey && (vv[this.additionalDefineKey] = this.additionalDefineValue || "true", Pv[this.additionalDefineKey] = vv[this.additionalDefineKey]), hv
      }
    }
    class Sv {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(vv) {
        this._lines.length = 0;
        for (const zv of vv) {
          if (!zv || "\r" === zv) continue;
          if ("#" === zv[0]) {
            this._lines.push(zv);
            continue
          }
          const vv = zv.trim();
          if (!vv) continue;
          if (vv.startsWith("//")) {
            this._lines.push(zv);
            continue
          }
          const Pv = vv.indexOf(";");
          if (-1 === Pv) this._lines.push(vv);
          else if (Pv === vv.length - 1) vv.length > 1 && this._lines.push(vv);
          else {
            const vv = zv.split(";");
            for (let zv = 0; zv < vv.length; zv++) {
              let Pv = vv[zv];
              Pv && (Pv = Pv.trim(), Pv && this._lines.push(Pv + (zv !== vv.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class ev extends hv {
      process(vv, zv, Pv) {
        for (let hv = 0; hv < this.children.length; hv++) {
          const Sv = this.children[hv];
          if (Sv.isValid(vv)) return Sv.process(vv, zv, Pv)
        }
        return ""
      }
    }
    class gv extends hv {
      isValid(vv) {
        return this.testExpression.isTrue(vv)
      }
    }
    class pv {
      isTrue(vv) {
        return !0
      }
      static postfixToInfix(vv) {
        const zv = [];
        for (const Pv of vv)
          if (void 0 === pv._OperatorPriority[Pv]) zv.push(Pv);
          else {
            const vv = zv[zv.length - 1],
              hv = zv[zv.length - 2];
            zv.length -= 2, zv.push(`(${hv}${Pv}${vv})`)
          } return zv[zv.length - 1]
      }
      static infixToPostfix(vv) {
        const zv = pv._InfixToPostfixCache.get(vv);
        if (zv) return zv.accessTime = Date.now(), zv.result;
        if (!vv.includes("&&") && !vv.includes("||") && !vv.includes(")") && !vv.includes("(")) return [vv];
        const Pv = [];
        let hv = -1;
        const Sv = () => {
            lv = lv.trim(), "" !== lv && (Pv.push(lv), lv = "")
          },
          ev = vv => {
            hv < pv._Stack.length - 1 && (pv._Stack[++hv] = vv)
          },
          gv = () => pv._Stack[hv],
          dv = () => -1 === hv ? "!!INVALID EXPRESSION!!" : pv._Stack[hv--];
        let Nv = 0,
          lv = "";
        for (; Nv < vv.length;) {
          const zv = vv.charAt(Nv),
            Tv = Nv < vv.length - 1 ? vv.substring(Nv, 2 + Nv) : "";
          if ("(" === zv) lv = "", ev(zv);
          else if (")" === zv) {
            for (Sv(); - 1 !== hv && "(" !== gv();) Pv.push(dv());
            dv()
          } else if (pv._OperatorPriority[Tv] > 1) {
            for (Sv(); - 1 !== hv && pv._OperatorPriority[gv()] >= pv._OperatorPriority[Tv];) Pv.push(dv());
            ev(Tv), Nv++
          } else lv += zv;
          Nv++
        }
        for (Sv(); - 1 !== hv;) "(" === gv() ? dv() : Pv.push(dv());
        return pv._InfixToPostfixCache.size >= pv.InfixToPostfixCacheLimitSize && pv.ClearCache(), pv._InfixToPostfixCache.set(vv, {
          result: Pv,
          accessTime: Date.now()
        }), Pv
      }
      static ClearCache() {
        const vv = Array.from(pv._InfixToPostfixCache.entries()).sort(((vv, zv) => vv[1].accessTime - zv[1].accessTime));
        for (let zv = 0; zv < pv.InfixToPostfixCacheCleanupSize; zv++) pv._InfixToPostfixCache.delete(vv[zv][0])
      }
    }
    pv.InfixToPostfixCacheLimitSize = 5e4, pv.InfixToPostfixCacheCleanupSize = 25e3, pv._InfixToPostfixCache = new Map, pv._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, pv._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class dv extends pv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = vv, this.not = zv
      }
      isTrue(vv) {
        let zv = void 0 !== vv[this.define];
        return this.not && (zv = !zv), zv
      }
    }
    class Nv extends pv {
      isTrue(vv) {
        return this.leftOperand.isTrue(vv) || this.rightOperand.isTrue(vv)
      }
    }
    class lv extends pv {
      isTrue(vv) {
        return this.leftOperand.isTrue(vv) && this.rightOperand.isTrue(vv)
      }
    }
    class Tv extends pv {
      constructor(vv, zv, Pv) {
        super(), this.define = vv, this.operand = zv, this.testValue = Pv
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(vv) {
        let zv = !1;
        const Pv = parseInt(void 0 != vv[this.define] ? vv[this.define] : this.define),
          hv = parseInt(void 0 != vv[this.testValue] ? vv[this.testValue] : this.testValue);
        if (isNaN(Pv) || isNaN(hv)) return !1;
        switch (this.operand) {
          case ">":
            zv = Pv > hv;
            break;
          case "<":
            zv = Pv < hv;
            break;
          case "<=":
            zv = Pv <= hv;
            break;
          case ">=":
            zv = Pv >= hv;
            break;
          case "==":
            zv = Pv === hv;
            break;
          case "!=":
            zv = Pv !== hv
        }
        return zv
      }
    }
    var Wv = Pv(39190),
      wv = Pv(39184);
    const av = /defined\s*?\((.+?)\)/g,
      sv = /defined\s*?\[(.+?)\]/g,
      Cv = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      iv = /__decl__/,
      cv = /light\{X\}.(\w*)/g,
      Gv = /\{X\}/g,
      mv = [],
      jv = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function fv(vv) {
      vv.processor && vv.processor.initializeShaders && vv.processor.initializeShaders(vv.processingContext)
    }

    function Fv(vv, zv, Pv, hv) {
      zv.processor?.preProcessShaderCode && (vv = zv.processor.preProcessShaderCode(vv, zv.isFragment)), Rv(vv, zv, (vv => {
        zv.processCodeAfterIncludes && (vv = zv.processCodeAfterIncludes(zv.isFragment ? "fragment" : "vertex", vv, zv.defines));
        const Sv = function(vv, zv, Pv) {
          let hv = function(vv, zv) {
            if (zv.processor?.noPrecision) return vv;
            const Pv = zv.shouldUseHighPrecisionShader; - 1 === vv.indexOf("precision highp float") ? vv = Pv ? "precision highp float;\n" + vv : "precision mediump float;\n" + vv : Pv || (vv = vv.replace("precision highp float", "precision mediump float"));
            return vv
          }(vv, zv);
          if (!zv.processor) return hv;
          if (0 === zv.processor.shaderLanguage && -1 !== hv.indexOf("#version 3") && (hv = hv.replace("#version 300 es", ""), !zv.processor.parseGLES3)) return hv;
          const Sv = zv.defines,
            ev = Uv(zv, Pv);
          zv.processor.preProcessor && (hv = zv.processor.preProcessor(hv, Sv, ev, zv.isFragment, zv.processingContext));
          const gv = {};
          hv = Vv(hv, ev, zv, gv), zv.processor.postProcessor && (hv = zv.processor.postProcessor(hv, Sv, zv.isFragment, zv.processingContext, Pv ? {
            drawBuffersExtensionDisabled: !Pv.getCaps().drawBuffersExtension
          } : {}, ev, gv));
          Pv?._features.needShaderCodeInlining && (hv = Pv.inlineShaderCode(hv));
          return hv
        }(vv, zv, hv);
        Pv(Sv, vv)
      }))
    }

    function Yv(vv, zv, Pv) {
      return Pv.processor && Pv.processor.finalizeShaders ? Pv.processor.finalizeShaders(vv, zv, Pv.processingContext) : {
        vertexCode: vv,
        fragmentCode: zv
      }
    }

    function nv(vv) {
      const zv = /defined\((.+)\)/.exec(vv);
      if (zv && zv.length) return new dv(zv[1].trim(), "!" === vv[0]);
      const Pv = ["==", "!=", ">=", "<=", "<", ">"];
      let hv = "",
        Sv = 0;
      for (hv of Pv)
        if (Sv = vv.indexOf(hv), Sv > -1) break;
      if (-1 === Sv) return new dv(vv);
      const ev = vv.substring(0, Sv).trim(),
        gv = vv.substring(Sv + hv.length).trim();
      return new Tv(ev, hv, gv)
    }

    function Ov(vv, zv) {
      const Pv = new gv,
        hv = vv.substring(0, zv);
      let Sv = vv.substring(zv);
      return Sv = Sv.substring(0, (Sv.indexOf("//") + 1 || Sv.length + 1) - 1).trim(), Pv.testExpression = "#ifdef" === hv ? new dv(Sv) : "#ifndef" === hv ? new dv(Sv, !0) : function(vv) {
        vv = vv.replace(av, "defined[$1]");
        const zv = pv.infixToPostfix(vv),
          Pv = [];
        for (const Sv of zv)
          if ("||" !== Sv && "&&" !== Sv) Pv.push(Sv);
          else if (Pv.length >= 2) {
          let vv = Pv[Pv.length - 1],
            zv = Pv[Pv.length - 2];
          Pv.length -= 2;
          const hv = "&&" == Sv ? new lv : new Nv;
          "string" === typeof vv && (vv = vv.replace(sv, "defined($1)")), "string" === typeof zv && (zv = zv.replace(sv, "defined($1)")), hv.leftOperand = "string" === typeof zv ? nv(zv) : zv, hv.rightOperand = "string" === typeof vv ? nv(vv) : vv, Pv.push(hv)
        }
        let hv = Pv[Pv.length - 1];
        return "string" === typeof hv && (hv = hv.replace(sv, "defined($1)")), "string" === typeof hv ? nv(hv) : hv
      }(Sv), Pv
    }

    function Dv(vv, zv, Pv, Sv) {
      let ev;
      for (; Kv(vv, Pv, Sv);) {
        ev = vv.currentLine;
        const gv = ev.substring(0, 5).toLowerCase();
        if ("#else" === gv) {
          const Pv = new hv;
          return zv.children.push(Pv), void Kv(vv, Pv, Sv)
        }
        if ("#elif" === gv) {
          const vv = Ov(ev, 5);
          zv.children.push(vv), Pv = vv
        }
      }
    }

    function Kv(vv, zv, Pv) {
      for (; vv.canRead;) {
        vv.lineIndex++;
        const Sv = vv.currentLine;
        if (Sv.indexOf("#") >= 0) {
          const hv = jv.exec(Sv);
          if (hv && hv.length) {
            switch (hv[0]) {
              case "#ifdef": {
                const hv = new ev;
                zv.children.push(hv);
                const gv = Ov(Sv, 6);
                hv.children.push(gv), Dv(vv, hv, gv, Pv);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const hv = new ev;
                zv.children.push(hv);
                const gv = Ov(Sv, 7);
                hv.children.push(gv), Dv(vv, hv, gv, Pv);
                break
              }
              case "#if": {
                const hv = new ev,
                  gv = Ov(Sv, 3);
                zv.children.push(hv), hv.children.push(gv), Dv(vv, hv, gv, Pv);
                break
              }
            }
            continue
          }
        }
        const gv = new hv;
        if (gv.line = Sv, zv.children.push(gv), "#" === Sv[0] && "d" === Sv[1]) {
          const vv = Sv.replace(";", "").split(" ");
          gv.additionalDefineKey = vv[1], 3 === vv.length && (gv.additionalDefineValue = vv[2])
        }
      }
      return !1
    }

    function Vv(vv, zv, Pv, ev) {
      const gv = new hv,
        pv = new Sv;
      return pv.lineIndex = -1, pv.lines = vv.split("\n"), Kv(pv, gv, ev), gv.process(zv, Pv, ev)
    }

    function Uv(vv, zv) {
      const Pv = vv.defines,
        hv = {};
      for (const Sv of Pv) {
        const vv = Sv.replace("#define", "").replace(";", "").trim().split(" ");
        hv[vv[0]] = vv.length > 1 ? vv[1] : ""
      }
      return 0 === vv.processor?.shaderLanguage && (hv.GL_ES = "true"), hv.__VERSION__ = vv.version, hv[vv.platformName] = "true", (0, wv.i)(hv, zv?.isNDCHalfZRange, zv?.SPv, zv?.useExactSrgbConversions), hv
    }

    function Rv(vv, zv, Pv) {
      let hv;
      for (mv.length = 0; null !== (hv = Cv.exec(vv));) mv.push(hv);
      let Sv = [vv],
        ev = !1;
      for (const pv of mv) {
        let vv = pv[1];
        if (-1 !== vv.indexOf("__decl__") && (vv = vv.replace(iv, ""), zv.supportsUniformBuffers && (vv = vv.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), vv += "Declaration"), !zv.includesShadersStore[vv]) {
          const hv = zv.shadersRepository + "ShadersInclude/" + vv + ".fx";
          return void xv.loadFile(hv, (hv => {
            zv.includesShadersStore[vv] = hv, Rv(Sv.join(""), zv, Pv)
          }))
        } {
          let Pv = zv.includesShadersStore[vv];
          if (pv[2]) {
            const vv = pv[3].split(",");
            for (let zv = 0; zv < vv.length; zv += 2) {
              const hv = new RegExp(vv[zv], "g"),
                Sv = vv[zv + 1];
              Pv = Pv.replace(hv, Sv)
            }
          }
          if (pv[4]) {
            const vv = pv[5];
            if (-1 !== vv.indexOf("..")) {
              const hv = vv.split(".."),
                Sv = parseInt(hv[0]);
              let ev = parseInt(hv[1]),
                gv = Pv.slice(0);
              Pv = "", isNaN(ev) && (ev = zv.indexParameters[hv[1]]);
              for (let vv = Sv; vv < ev; vv++) zv.supportsUniformBuffers || (gv = gv.replace(cv, ((vv, zv) => zv + "{X}"))), Pv += gv.replace(Gv, vv.toString()) + "\n"
            } else zv.supportsUniformBuffers || (Pv = Pv.replace(cv, ((vv, zv) => zv + "{X}"))), Pv = Pv.replace(Gv, vv)
          }
          const hv = [];
          for (const vv of Sv) {
            const zv = vv.split(pv[0]);
            for (let vv = 0; vv < zv.length - 1; vv++) hv.push(zv[vv]), hv.push(Pv);
            hv.push(zv[zv.length - 1])
          }
          Sv = hv, ev = ev || Pv.indexOf("#include<") >= 0 || Pv.indexOf("#include <") >= 0
        }
      }
      mv.length = 0;
      const gv = Sv.join("");
      ev ? Rv(gv.toString(), zv, Pv) : Pv(gv)
    }
    const xv = {
      loadFile: (vv, zv, Pv, hv, Sv, ev) => {
        throw (0, Wv.m)("FileTools")
      }
    }
  },
  39184: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      e: () => ev,
      i: () => pv,
      j: () => gv,
      k: () => dv
    });
    var hv = Pv(39190);
    const Sv = {};

    function ev(vv, zv) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (zv ? zv + "\n" : "") + vv
    }

    function gv(vv, zv, Pv, ev, gv, pv, dv) {
      const Nv = dv || Sv.loadFile;
      if (!Nv) throw (0, hv.m)("FileTools");
      return Nv(vv, zv, Pv, ev, gv, pv)
    }

    function pv(vv, zv, Pv, hv) {
      if (vv) return zv ? vv.IS_NDC_HALF_ZRANGE = "" : delete vv.IS_NDC_HALF_ZRANGE, Pv ? vv.USE_REVERSE_DEPTHBUFFER = "" : delete vv.USE_REVERSE_DEPTHBUFFER, void(hv ? vv.USE_EXACT_SRGB_CONVERSIONS = "" : delete vv.USE_EXACT_SRGB_CONVERSIONS);
      {
        let vv = "";
        return zv && (vv += "#define IS_NDC_HALF_ZRANGE"), Pv && (vv && (vv += "\n"), vv += "#define USE_REVERSE_DEPTHBUFFER"), hv && (vv && (vv += "\n"), vv += "#define USE_EXACT_SRGB_CONVERSIONS"), vv
      }
    }

    function dv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        hv = arguments.length > 3 ? arguments[3] : void 0;
      switch (vv) {
        case 3: {
          const vv = new Int8Array(zv);
          return hv && vv.set(new Int8Array(hv)), vv
        }
        case 0: {
          const vv = new Uint8Array(zv);
          return hv && vv.set(new Uint8Array(hv)), vv
        }
        case 4: {
          const vv = "number" !== typeof zv ? new Int16Array(zv) : new Int16Array(Pv ? zv / 2 : zv);
          return hv && vv.set(new Int16Array(hv)), vv
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const vv = "number" !== typeof zv ? new Uint16Array(zv) : new Uint16Array(Pv ? zv / 2 : zv);
          return hv && vv.set(new Uint16Array(hv)), vv
        }
        case 6: {
          const vv = "number" !== typeof zv ? new Int32Array(zv) : new Int32Array(Pv ? zv / 4 : zv);
          return hv && vv.set(new Int32Array(hv)), vv
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const vv = "number" !== typeof zv ? new Uint32Array(zv) : new Uint32Array(Pv ? zv / 4 : zv);
          return hv && vv.set(new Uint32Array(hv)), vv
        }
        case 1: {
          const vv = "number" !== typeof zv ? new Float32Array(zv) : new Float32Array(Pv ? zv / 4 : zv);
          return hv && vv.set(new Float32Array(hv)), vv
        }
      }
      const Sv = new Uint8Array(zv);
      return hv && Sv.set(new Uint8Array(hv)), Sv
    }
  },
  39190: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv,
      g: () => lv,
      j: () => dv,
      m: () => Sv
    });
    const hv = {};

    function Sv(vv) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !hv[vv]) return hv[vv] = !0, `${vv} needs to be imported before as it contains a side-effect required by your code.`
    }
    const ev = {};
    let gv = !1,
      pv = 0;

    function dv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const hv = function() {
        if ((Pv || gv) && 0 === pv) {
          const Pv = `${vv}.${zv}`;
          ev[Pv] || (ev[Pv] = !0, console.warn(`[Babylon.js] ${Pv}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return hv.__isSideEffectStub = !0, hv
    }

    function Nv(vv) {
      return !!vv && !vv.__isSideEffectStub
    }

    function lv(vv, zv) {
      return {
        get() {},
        set(vv) {
          Object.defineProperty(this, zv, {
            value: vv,
            writable: !0,
            configurable: !0,
            enumerable: !0
          })
        },
        configurable: !0,
        enumerable: !0
      }
    }
  },
  39167: (vv, zv, Pv) => {
    function hv() {
      return "undefined" !== typeof window
    }

    function Sv() {
      return "undefined" !== typeof navigator
    }

    function ev() {
      return "undefined" !== typeof document
    }

    function gv(vv) {
      let zv = "",
        Pv = vv.firstChild;
      for (; Pv;) 3 === Pv.nodeType && (zv += Pv.textContent), Pv = Pv.nextSibling;
      return zv
    }
    Pv.d(zv, {
      e: () => gv,
      g: () => ev,
      k: () => Sv,
      l: () => hv
    })
  },
  39348: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv,
      f: () => Sv,
      g: () => ev
    });
    class hv extends Error {}
    hv._setPrototypeOf = Object.setPrototypeOf || ((vv, zv) => (vv.__proto__ = zv, vv));
    const Sv = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class ev extends hv {
      constructor(vv, zv, Pv) {
        super(vv), this.errorCode = zv, this.innerError = Pv, this.name = "RuntimeError", hv._setPrototypeOf(this, ev.prototype)
      }
    }
  },
  39338: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Uv,
      f: () => Gv,
      i: () => Ov,
      k: () => Kv,
      l: () => Yv,
      n: () => fv,
      r: () => Fv,
      v: () => Iv,
      y: () => nv,
      C: () => mv
    });
    var hv = Pv(39346),
      Sv = Pv(39167),
      ev = Pv(36618);
    class gv {}
    gv.FilesToLoad = {};
    var pv = Pv(39348),
      dv = Pv(39356),
      Nv = Pv(36615),
      lv = Pv(39184),
      Tv = Pv(39196),
      Wv = Pv(38209),
      wv = Pv(39204),
      av = Pv(39361);
    const sv = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class Cv extends pv.g {
      constructor(vv, zv) {
        super(vv, pv.f.LoadFileError), this.name = "LoadFileError", pv.e._setPrototypeOf(this, Cv.prototype), zv instanceof hv.b ? this.request = zv : this.file = zv
      }
    }
    class iv extends pv.g {
      constructor(vv, zv) {
        super(vv, pv.f.RequestFileError), this.request = zv, this.name = "RequestFileError", pv.e._setPrototypeOf(this, iv.prototype)
      }
    }
    class cv extends pv.g {
      constructor(vv, zv) {
        super(vv, pv.f.ReadFileError), this.file = zv, this.name = "ReadFileError", pv.e._setPrototypeOf(this, cv.prototype)
      }
    }
    const Gv = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (Pv, hv, Sv) => 0 !== hv.status || Sv >= vv || -1 !== Pv.indexOf("file:") ? -1 : Math.pow(2, Sv) * zv
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: vv => vv,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: vv => vv,
        CleanUrl: vv => vv = vv.replace(/#/gm, "%23")
      },
      mv = (vv, zv) => {
        if ((!vv || 0 !== vv.indexOf("data:")) && Gv.CorsBehavior)
          if ("string" === typeof Gv.CorsBehavior || Gv.CorsBehavior instanceof String) zv.crossOrigin = Gv.CorsBehavior;
          else {
            const Pv = Gv.CorsBehavior(vv);
            Pv && (zv.crossOrigin = Pv)
          }
      },
      jv = {
        getRequiredSize: null
      },
      fv = function(vv, zv, Pv, Sv) {
        let ev, pv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          lv = arguments.length > 5 ? arguments[5] : void 0,
          Tv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Nv.e.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !Tv?._features.forceBitmapOverHTMLImageElement) return Pv("LoadImage is only supported in web or BabylonNative environments."), null;
        if (Tv?._features.forceBitmapOverHTMLImageElement && "string" !== typeof vv && "undefined" !== typeof Blob) {
          let hv;
          if (vv instanceof Blob) hv = vv;
          else {
            const zv = vv instanceof ArrayBuffer ? vv : (0, av.n)(vv);
            hv = new Blob([zv], {
              type: pv
            })
          }
          return Tv.createImageBitmap(hv, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...lv
          }).then(zv).catch((zv => {
            Pv && Pv("Error while trying to load image: " + vv, zv)
          })), null
        }
        let Wv = !1;
        if (vv instanceof ArrayBuffer || ArrayBuffer.isView(vv))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let zv;
            zv = vv instanceof ArrayBuffer ? vv : (0, av.n)(vv), ev = URL.createObjectURL(new Blob([zv], {
              type: pv
            })), Wv = !0
          } else ev = `data:${pv};base64,` + (0, dv.i)(vv);
        else vv instanceof Blob ? (ev = URL.createObjectURL(vv), Wv = !0) : (ev = Gv.CleanUrl(vv), ev = Gv.PreprocessUrl(ev));
        const wv = zv => {
          if (Pv) {
            const hv = ev || vv.toString();
            Pv(`Error while trying to load image: ${0===hv.indexOf("http")||hv.length<=128?hv:hv.slice(0,128)+"..."}`, zv)
          }
        };
        if (Tv?._features.forceBitmapOverHTMLImageElement) return Yv(ev, (hv => {
          Tv.createImageBitmap(new Blob([hv], {
            type: pv
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...lv
          }).then((vv => {
            zv(vv), Wv && URL.revokeObjectURL(ev)
          })).catch((zv => {
            Pv && Pv("Error while trying to load image: " + vv, zv)
          }))
        }), void 0, Sv || void 0, !0, ((vv, zv) => {
          wv(zv)
        })), null;
        const sv = new Image;
        if (jv.getRequiredSize) {
          const zv = jv.getRequiredSize(vv);
          zv.width && (sv.width = zv.width), zv.height && (sv.height = zv.height)
        }
        mv(ev, sv);
        const Cv = [],
          iv = () => {
            for (const vv of Cv) vv.target.removeEventListener(vv.name, vv.handler);
            Cv.length = 0
          };
        Cv.push({
          target: sv,
          name: "load",
          handler: () => {
            iv(), zv(sv), Wv && sv.src && URL.revokeObjectURL(sv.src)
          }
        }), Cv.push({
          target: sv,
          name: "error",
          handler: vv => {
            iv(), wv(vv), Wv && sv.src && URL.revokeObjectURL(sv.src)
          }
        }), Cv.push({
          target: document,
          name: "securitypolicyviolation",
          handler: vv => {
            if (vv.blockedURI !== sv.src || "yw" === vv.disposition) return;
            iv();
            const zv = new Error(`CSP violation of policy ${vv.effectiveDirective} ${vv.blockedURI}. Current policy is ${vv.originalPolicy}`);
            Nv.e.UseFallbackTexture = !1, wv(zv), Wv && sv.src && URL.revokeObjectURL(sv.src), sv.src = ""
          }
        }), (() => {
          for (const vv of Cv) vv.target.addEventListener(vv.name, vv.handler)
        })();
        const cv = "blob:" === ev.substring(0, 5),
          fv = "data:" === ev.substring(0, 5),
          Fv = () => {
            cv || fv || !hv.b.IsCustomRequestAvailable ? sv.src = ev : Yv(ev, ((vv, zv, Pv) => {
              const hv = new Blob([vv], {
                  type: !pv && Pv ? Pv : pv
                }),
                Sv = URL.createObjectURL(hv);
              Wv = !0, sv.src = Sv
            }), void 0, Sv || void 0, !0, ((vv, zv) => {
              wv(zv)
            }))
          },
          nv = () => {
            Sv && Sv.loadImage(ev, sv)
          };
        if (!cv && !fv && Sv && Sv.enableTexturesOffline) Sv.open(nv, Fv);
        else {
          if (-1 !== ev.indexOf("file:")) {
            const vv = decodeURIComponent(ev.substring(5).toLowerCase());
            if (gv.FilesToLoad[vv] && "undefined" !== typeof URL) {
              try {
                let zv;
                try {
                  zv = URL.createObjectURL(gv.FilesToLoad[vv])
                } catch (Ov) {
                  zv = URL.createObjectURL(gv.FilesToLoad[vv])
                }
                sv.src = zv, Wv = !0
              } catch (Dv) {
                sv.src = ""
              }
              return sv
            }
          }
          Fv()
        }
        return sv
      },
      Fv = (vv, zv, Pv, hv, Sv) => {
        const gv = new FileReader,
          pv = {
            onCompleteObservable: new ev.c,
            abort: () => gv.abort()
          };
        return gv.onloadend = () => pv.onCompleteObservable.notifyObservers(pv), Sv && (gv.onerror = () => {
          Sv(new cv(`Unable to read ${vv.name}`, vv))
        }), gv.onload = vv => {
          zv(vv.target.result)
        }, Pv && (gv.onprogress = Pv), hv ? gv.readAsArrayBuffer(vv) : gv.readAsText(vv), pv
      },
      Yv = (vv, zv, Pv, hv, Sv, dv, Nv) => {
        if (vv.name) return Fv(vv, zv, Pv, Sv, dv ? vv => {
          dv(void 0, vv)
        } : void 0);
        const lv = vv;
        if (-1 !== lv.indexOf("file:")) {
          let vv = decodeURIComponent(lv.substring(5).toLowerCase());
          0 === vv.indexOf("./") && (vv = vv.substring(2));
          const hv = gv.FilesToLoad[vv];
          if (hv) return Fv(hv, zv, Pv, Sv, dv ? vv => dv(void 0, new Cv(vv.message, vv.file)) : void 0)
        }
        const {
          match: Tv,
          type: av
        } = Vv(lv);
        if (Tv) {
          const vv = {
            onCompleteObservable: new ev.c,
            abort: () => () => {}
          };
          try {
            const vv = Sv ? Uv(lv) : Rv(lv);
            zv(vv, void 0, av)
          } catch (pv) {
            dv ? dv(void 0, pv) : Wv.d.Error(pv.message || "Failed to parse the Data URL")
          }
          return wv.e.SetImmediate((() => {
            vv.onCompleteObservable.notifyObservers(vv)
          })), vv
        }
        return nv(lv, ((vv, Pv) => {
          zv(vv, Pv?.responseURL, Pv?.getResponseHeader("content-type"))
        }), Pv, hv, Sv, dv ? vv => {
          dv(vv.request, new Cv(vv.message, vv.request))
        } : void 0, Nv)
      },
      nv = (vv, zv, Pv, gv, pv, dv, lv) => {
        null !== gv && (gv ?? (gv = Nv.e.LastCreatedScene?.offlineProvider)), vv = Gv.CleanUrl(vv), vv = Gv.PreprocessUrl(vv);
        const Tv = Gv.BaseUrl + vv;
        let wv = !1;
        const av = {
            onCompleteObservable: new ev.c,
            abort: () => wv = !0
          },
          sv = () => {
            let vv, ev = new hv.b,
              gv = null;
            const Nv = () => {
              ev && (Pv && ev.removeEventListener("progress", Pv), vv && ev.removeEventListener("readystatechange", vv), ev.removeEventListener("loadend", sv))
            };
            let sv = () => {
              Nv(), av.onCompleteObservable.notifyObservers(av), av.onCompleteObservable.clear(), Pv = void 0, vv = null, sv = null, dv = void 0, lv = void 0, zv = void 0
            };
            av.abort = () => {
              wv = !0, sv && sv(), ev && ev.readyState !== (XMLHttpRequest.DONE || 4) && ev.abort(), null !== gv && (clearTimeout(gv), gv = null), ev = null
            };
            const Cv = vv => {
                const zv = vv.message || "Unknown error";
                dv && ev ? dv(new iv(zv, ev)) : Wv.d.Error(zv)
              },
              cv = Wv => {
                if (ev) {
                  if (ev.open("GET", Tv), lv) try {
                    lv(ev)
                  } catch (av) {
                    return void Cv(av)
                  }
                  pv && (ev.responseType = "arraybuffer"), Pv && ev.addEventListener("progress", Pv), sv && ev.addEventListener("loadend", sv), vv = () => {
                    if (!wv && ev && ev.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (vv && ev.removeEventListener("readystatechange", vv), ev.status >= 200 && ev.status < 300 || 0 === ev.status && (!(0, Sv.l)() || Dv())) {
                        const vv = pv ? ev.response : ev.responseText;
                        if (null !== vv) {
                          try {
                            zv && zv(vv, ev)
                          } catch (av) {
                            Cv(av)
                          }
                          return
                        }
                      }
                      const Pv = Gv.DefaultRetryStrategy;
                      if (Pv) {
                        const vv = Pv(Tv, ev, Wv);
                        if (-1 !== vv) return Nv(), ev = new hv.b, void(gv = setTimeout((() => cv(Wv + 1)), vv))
                      }
                      const lv = new iv("Error status: " + ev.status + " " + ev.statusText + " - Unable to load " + Tv, ev);
                      dv && dv(lv)
                    }
                  }, ev.addEventListener("readystatechange", vv), ev.send()
                }
              };
            cv(0)
          };
        if (gv && gv.enableSceneOffline && !vv.startsWith("blob:")) {
          const hv = vv => {
              vv && vv.status > 400 ? dv && dv(vv) : sv()
            },
            Sv = () => {
              gv && gv.loadFile(Gv.BaseUrl + vv, (vv => {
                !wv && zv && zv(vv), av.onCompleteObservable.notifyObservers(av)
              }), Pv ? vv => {
                !wv && Pv && Pv(vv)
              } : void 0, hv, pv)
            };
          gv.open(Sv, hv)
        } else sv();
        return av
      },
      Ov = vv => {
        const {
          match: zv,
          type: Pv
        } = Vv(vv);
        if (zv) return Pv || void 0;
        const hv = vv.lastIndexOf(".");
        switch (vv.substring(hv + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "nD":
            return "model/gltf+json";
          case "jpg":
          case "jpeg":
            return "image/jpeg";
          case "png":
            return "image/png";
          case "webp":
            return "image/webp";
          case "ktx":
            return "image/ktx";
          case "ktx2":
            return "image/ktx2";
          case "avif":
            return "image/avif";
          default:
            return
        }
      },
      Dv = () => "undefined" !== typeof location && "file:" === location.protocol,
      Kv = vv => sv.test(vv),
      Vv = vv => {
        const zv = sv.exec(vv);
        if (null === zv || 0 === zv.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: zv[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function Uv(vv) {
      return (0, dv.c)(vv.split(",")[1])
    }
    const Rv = vv => (0, dv.e)(vv.split(",")[1]);
    let xv;
    const tv = (vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) => {
      xv = {
        DecodeBase64UrlToBinary: vv,
        DecodeBase64UrlToString: zv,
        DefaultRetryStrategy: Pv.DefaultRetryStrategy,
        BaseUrl: Pv.BaseUrl,
        CorsBehavior: Pv.CorsBehavior,
        PreprocessUrl: Pv.PreprocessUrl,
        IsBase64DataUrl: hv,
        IsFileURL: Sv,
        LoadFile: ev,
        LoadImage: gv,
        ReadFile: pv,
        RequestFile: dv,
        SetCorsBehavior: Nv
      }, Object.defineProperty(xv, "DefaultRetryStrategy", {
        get: function() {
          return Pv.DefaultRetryStrategy
        },
        set: function(vv) {
          Pv.DefaultRetryStrategy = vv
        }
      }), Object.defineProperty(xv, "BaseUrl", {
        get: function() {
          return Pv.BaseUrl
        },
        set: function(vv) {
          Pv.BaseUrl = vv
        }
      }), Object.defineProperty(xv, "PreprocessUrl", {
        get: function() {
          return Pv.PreprocessUrl
        },
        set: function(vv) {
          Pv.PreprocessUrl = vv
        }
      }), Object.defineProperty(xv, "CorsBehavior", {
        get: function() {
          return Pv.CorsBehavior
        },
        set: function(vv) {
          Pv.CorsBehavior = vv
        }
      })
    };
    let qv = !1;

    function Iv() {
      qv || (qv = !0, tv(Uv, Rv, Gv, Kv, Dv, Yv, fv, Fv, nv, mv), lv.b.loadFile = Yv, lv.b.loadImage = fv, Tv.l.loadFile = Yv)
    }
  },
  39368: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => pv,
      e: () => ev,
      i: () => gv
    });
    let hv = null;

    function Sv() {
      if (hv) return hv;
      const vv = new ArrayBuffer(4),
        zv = new Float32Array(vv),
        Pv = new Uint32Array(vv),
        Sv = new Uint32Array(512),
        ev = new Uint32Array(512);
      for (let hv = 0; hv < 256; ++hv) {
        const vv = hv - 127;
        vv < -24 ? (Sv[hv] = 0, Sv[256 | hv] = 32768, ev[hv] = 24, ev[256 | hv] = 24) : vv < -14 ? (Sv[hv] = 1024 >> -vv - 14, Sv[256 | hv] = 1024 >> -vv - 14 | 32768, ev[hv] = -vv - 1, ev[256 | hv] = -vv - 1) : vv <= 15 ? (Sv[hv] = vv + 15 << 10, Sv[256 | hv] = vv + 15 << 10 | 32768, ev[hv] = 13, ev[256 | hv] = 13) : vv < 128 ? (Sv[hv] = 31744, Sv[256 | hv] = 64512, ev[hv] = 24, ev[256 | hv] = 24) : (Sv[hv] = 31744, Sv[256 | hv] = 64512, ev[hv] = 13, ev[256 | hv] = 13)
      }
      const gv = new Uint32Array(2048),
        pv = new Uint32Array(64),
        dv = new Uint32Array(64);
      for (let hv = 1; hv < 1024; ++hv) {
        let vv = hv << 13,
          zv = 0;
        for (; 0 === (8388608 & vv);) vv <<= 1, zv -= 8388608;
        vv &= -8388609, zv += 947912704, gv[hv] = vv | zv
      }
      for (let hv = 1024; hv < 2048; ++hv) gv[hv] = 939524096 + (hv - 1024 << 13);
      for (let hv = 1; hv < 31; ++hv) pv[hv] = hv << 23;
      pv[31] = 1199570944, pv[32] = 2147483648;
      for (let hv = 33; hv < 63; ++hv) pv[hv] = 2147483648 + (hv - 32 << 23);
      pv[63] = 3347054592;
      for (let hv = 1; hv < 64; ++hv) 32 !== hv && (dv[hv] = 1024);
      return hv = {
        floatView: zv,
        uint32View: Pv,
        baseTable: Sv,
        shiftTable: ev,
        mantissaTable: gv,
        exponentTable: pv,
        offsetTable: dv
      }, hv
    }
    const ev = 65504;

    function gv(vv) {
      const zv = Sv();
      zv.floatView[0] = vv;
      const Pv = zv.uint32View[0],
        hv = Pv >> 23 & 511;
      return zv.baseTable[hv] + ((8388607 & Pv) >> zv.shiftTable[hv])
    }

    function pv(vv) {
      const zv = Sv();
      return zv.uint32View[0] = zv.mantissaTable[zv.offsetTable[vv >> 10] + (1023 & vv)] + zv.exponentTable[vv >> 10], zv.floatView[0]
    }
  },
  39356: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      e: () => Sv,
      i: () => hv
    });
    const hv = vv => {
        const zv = ArrayBuffer.isView(vv) ? new Uint8Array(vv.buffer, vv.byteOffset, vv.byteLength) : new Uint8Array(vv);
        return "function" === typeof zv.toBase64 ? zv.toBase64() : function(vv) {
          const zv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let Pv, hv, Sv, ev, gv, pv, dv, Nv = "",
            lv = 0;
          for (; lv < vv.length;) Pv = vv[lv++], hv = lv < vv.length ? vv[lv++] : Number.NaN, Sv = lv < vv.length ? vv[lv++] : Number.NaN, ev = Pv >> 2, gv = (3 & Pv) << 4 | hv >> 4, pv = (15 & hv) << 2 | Sv >> 6, dv = 63 & Sv, isNaN(hv) ? pv = dv = 64 : isNaN(Sv) && (dv = 64), Nv += zv.charAt(ev) + zv.charAt(gv) + zv.charAt(pv) + zv.charAt(dv);
          return Nv
        }(zv)
      },
      Sv = vv => atob(vv),
      ev = vv => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(vv).buffer : function(vv) {
        const zv = Sv(vv),
          Pv = zv.length,
          hv = new Uint8Array(new ArrayBuffer(Pv));
        for (let Sv = 0; Sv < Pv; Sv++) hv[Sv] = zv.charCodeAt(Sv);
        return hv.buffer
      }(vv)
  },
  39204: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv,
      g: () => gv
    });
    let hv = [];
    class Sv {
      static SetImmediate(vv) {
        0 === hv.length && setTimeout((() => {
          const vv = hv;
          hv = [];
          for (const zv of vv) zv()
        }), 1), hv.push(vv)
      }
    }

    function ev(vv, zv, Pv) {
      try {
        if (vv()) return zv(), !0
      } catch (hv) {
        return Pv?.(hv), !0
      }
      return !1
    }
    const gv = function(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        gv = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && ev(vv, zv, Pv)) return null;
      const pv = setInterval((() => {
        ev(vv, zv, Pv) ? clearInterval(pv) : (Sv -= hv, Sv < 0 && (clearInterval(pv), Pv?.(new Error("Operation timed out after maximum retries. " + (gv || "")), !0)))
      }), hv);
      return () => clearInterval(pv)
    }
  },
  39346: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv
    });
    class hv {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(hv.CustomRequestHeaders).length > 0 || hv.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(vv) {
        return vv = (vv = vv.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(vv) {
        return hv.SkipRequestModificationForBabylonCDN && (vv.includes("preview.babylonjs.com") || vv.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(vv) {
        const zv = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (hv._ShouldSkipRequestModifications(vv)) return {
          url: vv,
          headers: zv
        };
        for (const Sv in hv.CustomRequestHeaders) {
          const vv = hv.CustomRequestHeaders[Sv];
          vv && (zv[Sv] = vv)
        }
        const Pv = {
          setRequestHeader: (vv, Pv) => {
            zv[vv] = Pv
          }
        };
        for (const Sv of hv.CustomRequestModifiers) {
          if (hv._ShouldSkipRequestModifications(vv)) break;
          const zv = Sv(Pv, vv);
          "string" === typeof zv && (vv = zv)
        }
        return {
          url: vv,
          headers: zv
        }
      }
      static async FetchAsync(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Pv = zv.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Sv,
            headers: ev
          } = hv._CollectCustomizations(hv._CleanUrl(vv), zv.headers ?? {});
          return await fetch(Sv, {
            method: Pv,
            headers: ev,
            body: zv.body ?? void 0
          })
        }
        return await new Promise(((Sv, ev) => {
          const gv = new hv;
          gv.responseType = "arraybuffer", gv.addEventListener("readystatechange", (() => {
            if (4 === gv.readyState)
              if (gv.status >= 200 && gv.status < 300) {
                const vv = "undefined" !== typeof Headers ? new Headers : void 0,
                  zv = gv.getResponseHeader("Content-Type");
                zv && vv && vv.set("Content-Type", zv), "undefined" !== typeof Response ? Sv(new Response(gv.response, {
                  status: gv.status,
                  statusText: gv.statusText,
                  headers: vv
                })) : Sv({
                  ok: !0,
                  status: gv.status,
                  statusText: gv.statusText,
                  headers: {
                    get: vv => gv.getResponseHeader(vv)
                  },
                  arrayBuffer: async () => await Promise.resolve(gv.response)
                })
              } else ev(new Error(`HTTP ${gv.status} loading '${gv.requestURL}': ${gv.statusText}`))
          })), gv.open(Pv, vv, zv.headers), gv.send(zv.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(vv) {
        this._xhr.onprogress = vv
      }
      get readyState() {
        return this._xhr.readyState
      }
      get status() {
        return this._xhr.status
      }
      get statusText() {
        return this._xhr.statusText
      }
      get response() {
        return this._xhr.response
      }
      get responseURL() {
        return this._xhr.responseURL
      }
      get responseText() {
        return this._xhr.responseText
      }
      get responseType() {
        return this._xhr.responseType
      }
      set responseType(vv) {
        this._xhr.responseType = vv
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(vv) {
        this._xhr.timeout = vv
      }
      addEventListener(vv, zv, Pv) {
        this._xhr.addEventListener(vv, zv, Pv)
      }
      removeEventListener(vv, zv, Pv) {
        this._xhr.removeEventListener(vv, zv, Pv)
      }
      abort() {
        this._xhr.abort()
      }
      send(vv) {
        this._xhr.send(vv)
      }
      open(vv, zv, Pv) {
        const {
          url: Sv,
          headers: ev
        } = hv._CollectCustomizations(zv, Pv);
        this._requestURL = hv._CleanUrl(Sv), this._xhr.open(vv, this._requestURL, !0);
        for (const hv in ev) this._xhr.setRequestHeader(hv, ev[hv])
      }
      setRequestHeader(vv, zv) {
        this._xhr.setRequestHeader(vv, zv)
      }
      getResponseHeader(vv) {
        return this._xhr.getResponseHeader(vv)
      }
    }
    hv.CustomRequestHeaders = {}, hv.CustomRequestModifiers = new Array, hv.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);