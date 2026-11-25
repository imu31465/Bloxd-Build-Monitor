export const id = 258;
export const ids = [258];
export const modules = {
  40270: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => lt,
      h: () => Qt,
      l: () => jt,
      o: () => Et,
      s: () => Ht,
      v: () => dt,
      z: () => Xt
    });
    var Ot = Vt(38899),
      qt = Vt(40272);

    function Dt(tt, et, Vt, Ot) {
      switch (et) {
        case 5120: {
          let et = tt.getInt8(Vt);
          return Ot && (et = Math.max(et / 127, -1)), et
        }
        case 5121: {
          let et = tt.getUint8(Vt);
          return Ot && (et /= 255), et
        }
        case 5122: {
          let et = tt.getInt16(Vt, !0);
          return Ot && (et = Math.max(et / 32767, -1)), et
        }
        case 5123: {
          let et = tt.getUint16(Vt, !0);
          return Ot && (et /= 65535), et
        }
        case 5131:
          return (0, qt.e)(tt.getUint16(Vt, !0));
        case 5124:
          return tt.getInt32(Vt, !0);
        case 5125:
          return tt.getUint32(Vt, !0);
        case 5126:
          return tt.getFloat32(Vt, !0);
        default:
          throw new Error(`Invalid component type ${et}`)
      }
    }

    function mt(tt, et, Vt, Ot, Dt) {
      switch (et) {
        case 5120:
          Ot && (Dt = Math.round(127 * Dt)), tt.setInt8(Vt, Dt);
          break;
        case 5121:
          Ot && (Dt = Math.round(255 * Dt)), tt.setUint8(Vt, Dt);
          break;
        case 5122:
          Ot && (Dt = Math.round(32767 * Dt)), tt.setInt16(Vt, Dt, !0);
          break;
        case 5123:
          Ot && (Dt = Math.round(65535 * Dt)), tt.setUint16(Vt, Dt, !0);
          break;
        case 5131:
          tt.setUint16(Vt, (0, qt.k)(Dt), !0);
          break;
        case 5124:
          tt.setInt32(Vt, Dt, !0);
          break;
        case 5125:
          tt.setUint32(Vt, Dt, !0);
          break;
        case 5126:
          tt.setFloat32(Vt, Dt, !0);
          break;
        default:
          throw new Error(`Invalid component type ${et}`)
      }
    }

    function dt(tt) {
      switch (tt) {
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
          throw new Error(`Invalid type '${tt}'`)
      }
    }

    function jt(tt, et, Vt, Ot, qt, jt, Ht, Xt) {
      const Qt = new Array(Ot),
        lt = new Array(Ot);
      if (tt instanceof Array) {
        let qt = et / 4;
        const Dt = Vt / 4;
        for (let et = 0; et < jt; et += Ot) {
          for (let et = 0; et < Ot; et++) Qt[et] = lt[et] = tt[qt + et];
          Xt(lt, et);
          for (let et = 0; et < Ot; et++) Qt[et] !== lt[et] && (tt[qt + et] = lt[et]);
          qt += Dt
        }
      } else {
        const Et = ArrayBuffer.isView(tt) ? new DataView(tt.buffer, tt.byteOffset, tt.byteLength) : new DataView(tt),
          ft = dt(qt);
        for (let tt = 0; tt < jt; tt += Ot) {
          for (let tt = 0, Vt = et; tt < Ot; tt++, Vt += ft) Qt[tt] = lt[tt] = Dt(Et, qt, Vt, Ht);
          Xt(lt, tt);
          for (let tt = 0, Vt = et; tt < Ot; tt++, Vt += ft) Qt[tt] !== lt[tt] && mt(Et, qt, Vt, Ht, lt[tt]);
          et += Vt
        }
      }
    }

    function Ht(tt, et, Vt, qt, Dt, mt, Ht, Xt) {
      const Qt = et * dt(Vt),
        lt = Ht * et;
      if (5126 !== Vt || Dt !== Qt) {
        const Ot = new Float32Array(lt);
        return jt(tt, qt, Dt, et, Vt, lt, mt, ((tt, Vt) => {
          for (let qt = 0; qt < et; qt++) Ot[Vt + qt] = tt[qt]
        })), Ot
      }
      if (!(tt instanceof Array || tt instanceof Float32Array) || 0 !== qt || tt.length !== lt) {
        if (tt instanceof Array) {
          const et = qt / 4;
          return tt.slice(et, et + lt)
        }
        if (ArrayBuffer.isView(tt)) {
          const et = tt.byteOffset + qt;
          return 0 !== (3 & et) && (Ot.d.Warn("Float array must be aligned to 4-bytes border"), Xt = !0), Xt ? new Float32Array(tt.buffer.slice(et, et + lt * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(tt.buffer, et, lt)
        }
        return new Float32Array(tt, qt, lt)
      }
      return Xt ? tt.slice() : tt
    }

    function Xt(tt, et, Vt, qt, Dt, mt, Ht) {
      const Xt = dt(Vt),
        Qt = function(tt) {
          switch (tt) {
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
              throw new Error(`Invalid component type '${tt}'`)
          }
        }(Vt),
        lt = mt * et;
      if (Array.isArray(tt)) {
        if (0 !== (3 & qt) || 0 !== (3 & Dt)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const Ot = qt / 4,
          dt = Dt / 4;
        if (Ot + (mt - 1) * dt + et > tt.length) throw new Error("Last accessed index is out of bounds.");
        if (dt < et) throw new Error("Data stride cannot be smaller than the component size.");
        if (dt !== et) {
          const Ot = new Qt(lt);
          return jt(tt, qt, Dt, et, Vt, lt, !1, ((tt, Vt) => {
            for (let qt = 0; qt < et; qt++) Ot[Vt + qt] = tt[qt]
          })), Ot
        }
        return new Qt(tt.slice(Ot, Ot + lt))
      }
      let Et, ft = qt;
      ArrayBuffer.isView(tt) ? (Et = tt.buffer, ft += tt.byteOffset) : Et = tt;
      if (ft + (mt - 1) * Dt + et * Xt > Et.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const wt = et * Xt;
      if (Dt < wt) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (Dt !== wt) {
        const tt = new Qt(lt),
          Vt = new Uint8Array(Et, ft),
          Ot = new Uint8Array(tt.buffer),
          qt = et * Xt;
        for (let et = 0, dt = 0, jt = 0; et < mt; et++, dt += Dt, jt += qt) Ot.set(Vt.subarray(dt, dt + qt), jt);
        return tt
      }
      return 1 !== Xt && 0 !== (ft & Xt - 1) && (Ot.d.Warn("Array must be aligned to border of element size. Data will be copied."), Ht = !0), Ht ? new Qt(Et.slice(ft, ft + lt * Xt)) : new Qt(Et, ft, lt)
    }

    function Qt(tt, et, Vt, qt, Dt, mt, Ht, Xt) {
      const Qt = et * dt(Vt),
        lt = Ht * et;
      if (Xt.length !== lt) throw new Error("Output length is not valid");
      if (5126 === Vt && Dt === Qt)
        if (tt instanceof Array) {
          const et = qt / 4;
          Xt.set(tt, et)
        } else if (ArrayBuffer.isView(tt)) {
        const et = tt.byteOffset + qt;
        if (0 !== (3 & et)) return Ot.d.Warn("Float array must be aligned to 4-bytes border"), void Xt.set(new Float32Array(tt.buffer.slice(et, et + lt * Float32Array.BYTES_PER_ELEMENT)));
        const Vt = new Float32Array(tt.buffer, et, lt);
        Xt.set(Vt)
      } else {
        const et = new Float32Array(tt, qt, lt);
        Xt.set(et)
      } else jt(tt, qt, Dt, et, Vt, lt, mt, ((tt, Vt) => {
        for (let Ot = 0; Ot < et; Ot++) Xt[Vt + Ot] = tt[Ot]
      }))
    }

    function lt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(tt)) {
        for (let qt = 0; qt < et; qt++)
          if (tt[Vt + qt] - Ot > 65535) return !0;
        return !1
      }
      return 4 === tt.BYTES_PER_ELEMENT
    }

    function Et(tt) {
      const et = tt.buffer;
      if (et instanceof ArrayBuffer) return tt;
      const Vt = new ArrayBuffer(tt.byteLength);
      return new Uint8Array(Vt).set(new Uint8Array(et, tt.byteOffset, tt.byteLength)), Vt
    }
  },
  40082: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => ht,
      g: () => ut,
      j: () => Kt,
      h: () => Pt,
      m: () => Zt
    });
    class Ot {
      constructor() {
        this.children = []
      }
      isValid(tt) {
        return !0
      }
      process(tt, et, Vt) {
        let Ot = "";
        if (this.line) {
          let Vt = this.line;
          const qt = et.processor;
          if (qt) {
            qt.lineProcessor && (Vt = qt.lineProcessor(Vt, et.isFragment, et.processingContext));
            const Ot = et.processor?.attributeKeywordName ?? "attribute",
              Dt = et.isFragment && et.processor?.varyingFragmentKeywordName ? et.processor?.varyingFragmentKeywordName : !et.isFragment && et.processor?.varyingVertexKeywordName ? et.processor?.varyingVertexKeywordName : "varying";
            if (!et.isFragment && qt.attributeProcessor && this.line.startsWith(Ot)) Vt = qt.attributeProcessor(this.line, tt, et.processingContext);
            else if (qt.varyingProcessor && (qt.varyingCheck?.(this.line, et.isFragment) || !qt.varyingCheck && this.line.startsWith(Dt))) Vt = qt.varyingProcessor(this.line, et.isFragment, tt, et.processingContext);
            else if (qt.uniformProcessor && qt.uniformRegexp && qt.uniformRegexp.test(this.line)) et.lookForClosingBracketForUniformBuffer || (Vt = qt.uniformProcessor(this.line, et.isFragment, tt, et.processingContext));
            else if (qt.uniformBufferProcessor && qt.uniformBufferRegexp && qt.uniformBufferRegexp.test(this.line)) et.lookForClosingBracketForUniformBuffer || (Vt = qt.uniformBufferProcessor(this.line, et.isFragment, et.processingContext), et.lookForClosingBracketForUniformBuffer = !0);
            else if (qt.textureProcessor && qt.textureRegexp && qt.textureRegexp.test(this.line)) Vt = qt.textureProcessor(this.line, et.isFragment, tt, et.processingContext);
            else if ((qt.uniformProcessor || qt.uniformBufferProcessor) && this.line.startsWith("uniform") && !et.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? qt.uniformProcessor && (Vt = qt.uniformProcessor(this.line, et.isFragment, tt, et.processingContext)) : qt.uniformBufferProcessor && (Vt = qt.uniformBufferProcessor(this.line, et.isFragment, et.processingContext), et.lookForClosingBracketForUniformBuffer = !0)
            }
            et.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (et.lookForClosingBracketForUniformBuffer = !1, qt.endOfUniformBufferProcessor && (Vt = qt.endOfUniformBufferProcessor(this.line, et.isFragment, et.processingContext)))
          }
          Ot += Vt + "\n"
        }
        for (const qt of this.children) Ot += qt.process(tt, et, Vt);
        return this.additionalDefineKey && (tt[this.additionalDefineKey] = this.additionalDefineValue || "true", Vt[this.additionalDefineKey] = tt[this.additionalDefineKey]), Ot
      }
    }
    class qt {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(tt) {
        this._lines.length = 0;
        for (const et of tt) {
          if (!et || "\r" === et) continue;
          if ("#" === et[0]) {
            this._lines.push(et);
            continue
          }
          const tt = et.trim();
          if (!tt) continue;
          if (tt.startsWith("//")) {
            this._lines.push(et);
            continue
          }
          const Vt = tt.indexOf(";");
          if (-1 === Vt) this._lines.push(tt);
          else if (Vt === tt.length - 1) tt.length > 1 && this._lines.push(tt);
          else {
            const tt = et.split(";");
            for (let et = 0; et < tt.length; et++) {
              let Vt = tt[et];
              Vt && (Vt = Vt.trim(), Vt && this._lines.push(Vt + (et !== tt.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class Dt extends Ot {
      process(tt, et, Vt) {
        for (let Ot = 0; Ot < this.children.length; Ot++) {
          const qt = this.children[Ot];
          if (qt.isValid(tt)) return qt.process(tt, et, Vt)
        }
        return ""
      }
    }
    class mt extends Ot {
      isValid(tt) {
        return this.testExpression.isTrue(tt)
      }
    }
    class dt {
      isTrue(tt) {
        return !0
      }
      static postfixToInfix(tt) {
        const et = [];
        for (const Vt of tt)
          if (void 0 === dt._OperatorPriority[Vt]) et.push(Vt);
          else {
            const tt = et[et.length - 1],
              Ot = et[et.length - 2];
            et.length -= 2, et.push(`(${Ot}${Vt}${tt})`)
          } return et[et.length - 1]
      }
      static infixToPostfix(tt) {
        const et = dt._InfixToPostfixCache.get(tt);
        if (et) return et.accessTime = Date.now(), et.result;
        if (!tt.includes("&&") && !tt.includes("||") && !tt.includes(")") && !tt.includes("(")) return [tt];
        const Vt = [];
        let Ot = -1;
        const qt = () => {
            Xt = Xt.trim(), "" !== Xt && (Vt.push(Xt), Xt = "")
          },
          Dt = tt => {
            Ot < dt._Stack.length - 1 && (dt._Stack[++Ot] = tt)
          },
          mt = () => dt._Stack[Ot],
          jt = () => -1 === Ot ? "!!INVALID EXPRESSION!!" : dt._Stack[Ot--];
        let Ht = 0,
          Xt = "";
        for (; Ht < tt.length;) {
          const et = tt.charAt(Ht),
            Qt = Ht < tt.length - 1 ? tt.substring(Ht, 2 + Ht) : "";
          if ("(" === et) Xt = "", Dt(et);
          else if (")" === et) {
            for (qt(); - 1 !== Ot && "(" !== mt();) Vt.push(jt());
            jt()
          } else if (dt._OperatorPriority[Qt] > 1) {
            for (qt(); - 1 !== Ot && dt._OperatorPriority[mt()] >= dt._OperatorPriority[Qt];) Vt.push(jt());
            Dt(Qt), Ht++
          } else Xt += et;
          Ht++
        }
        for (qt(); - 1 !== Ot;) "(" === mt() ? jt() : Vt.push(jt());
        return dt._InfixToPostfixCache.size >= dt.InfixToPostfixCacheLimitSize && dt.ClearCache(), dt._InfixToPostfixCache.set(tt, {
          result: Vt,
          accessTime: Date.now()
        }), Vt
      }
      static ClearCache() {
        const tt = Array.from(dt._InfixToPostfixCache.entries()).sort(((tt, et) => tt[1].accessTime - et[1].accessTime));
        for (let et = 0; et < dt.InfixToPostfixCacheCleanupSize; et++) dt._InfixToPostfixCache.delete(tt[et][0])
      }
    }
    dt.InfixToPostfixCacheLimitSize = 5e4, dt.InfixToPostfixCacheCleanupSize = 25e3, dt._InfixToPostfixCache = new Map, dt._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, dt._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class jt extends dt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = tt, this.not = et
      }
      isTrue(tt) {
        let et = void 0 !== tt[this.define];
        return this.not && (et = !et), et
      }
    }
    class Ht extends dt {
      isTrue(tt) {
        return this.leftOperand.isTrue(tt) || this.rightOperand.isTrue(tt)
      }
    }
    class Xt extends dt {
      isTrue(tt) {
        return this.leftOperand.isTrue(tt) && this.rightOperand.isTrue(tt)
      }
    }
    class Qt extends dt {
      constructor(tt, et, Vt) {
        super(), this.define = tt, this.operand = et, this.testValue = Vt
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(tt) {
        let et = !1;
        const Vt = parseInt(void 0 != tt[this.define] ? tt[this.define] : this.define),
          Ot = parseInt(void 0 != tt[this.testValue] ? tt[this.testValue] : this.testValue);
        if (isNaN(Vt) || isNaN(Ot)) return !1;
        switch (this.operand) {
          case ">":
            et = Vt > Ot;
            break;
          case "<":
            et = Vt < Ot;
            break;
          case "<=":
            et = Vt <= Ot;
            break;
          case ">=":
            et = Vt >= Ot;
            break;
          case "==":
            et = Vt === Ot;
            break;
          case "!=":
            et = Vt !== Ot
        }
        return et
      }
    }
    var lt = Vt(40080),
      Et = Vt(40076);
    const ft = /defined\s*?\((.+?)\)/g,
      wt = /defined\s*?\[(.+?)\]/g,
      yt = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      Nt = /__decl__/,
      Mt = /light\{X\}.(\w*)/g,
      bt = /\{X\}/g,
      Jt = [],
      Ct = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function ut(tt) {
      tt.processor && tt.processor.initializeShaders && tt.processor.initializeShaders(tt.processingContext)
    }

    function Kt(tt, et, Vt, Ot) {
      et.processor?.preProcessShaderCode && (tt = et.processor.preProcessShaderCode(tt, et.isFragment)), Pt(tt, et, (tt => {
        et.processCodeAfterIncludes && (tt = et.processCodeAfterIncludes(et.isFragment ? "fragment" : "vertex", tt, et.defines));
        const qt = function(tt, et, Vt) {
          let Ot = function(tt, et) {
            if (et.processor?.noPrecision) return tt;
            const Vt = et.shouldUseHighPrecisionShader; - 1 === tt.indexOf("precision highp float") ? tt = Vt ? "precision highp float;\n" + tt : "precision mediump float;\n" + tt : Vt || (tt = tt.replace("precision highp float", "precision mediump float"));
            return tt
          }(tt, et);
          if (!et.processor) return Ot;
          if (0 === et.processor.shaderLanguage && -1 !== Ot.indexOf("#version 3") && (Ot = Ot.replace("#version 300 es", ""), !et.processor.parseGLES3)) return Ot;
          const qt = et.defines,
            Dt = It(et, Vt);
          et.processor.preProcessor && (Ot = et.processor.preProcessor(Ot, qt, Dt, et.isFragment, et.processingContext));
          const mt = {};
          Ot = Rt(Ot, Dt, et, mt), et.processor.postProcessor && (Ot = et.processor.postProcessor(Ot, qt, et.isFragment, et.processingContext, Vt ? {
            drawBuffersExtensionDisabled: !Vt.getCaps().drawBuffersExtension
          } : {}, Dt, mt));
          Vt?._features.needShaderCodeInlining && (Ot = Vt.inlineShaderCode(Ot));
          return Ot
        }(tt, et, Ot);
        Vt(qt, tt)
      }))
    }

    function ht(tt, et, Vt) {
      return Vt.processor && Vt.processor.finalizeShaders ? Vt.processor.finalizeShaders(tt, et, Vt.processingContext) : {
        vertexCode: tt,
        fragmentCode: et
      }
    }

    function vt(tt) {
      const et = /defined\((.+)\)/.exec(tt);
      if (et && et.length) return new jt(et[1].trim(), "!" === tt[0]);
      const Vt = ["==", "!=", ">=", "<=", "<", ">"];
      let Ot = "",
        qt = 0;
      for (Ot of Vt)
        if (qt = tt.indexOf(Ot), qt > -1) break;
      if (-1 === qt) return new jt(tt);
      const Dt = tt.substring(0, qt).trim(),
        mt = tt.substring(qt + Ot.length).trim();
      return new Qt(Dt, Ot, mt)
    }

    function Wt(tt, et) {
      const Vt = new mt,
        Ot = tt.substring(0, et);
      let qt = tt.substring(et);
      return qt = qt.substring(0, (qt.indexOf("//") + 1 || qt.length + 1) - 1).trim(), Vt.testExpression = "#ifdef" === Ot ? new jt(qt) : "#ifndef" === Ot ? new jt(qt, !0) : function(tt) {
        tt = tt.replace(ft, "defined[$1]");
        const et = dt.infixToPostfix(tt),
          Vt = [];
        for (const qt of et)
          if ("||" !== qt && "&&" !== qt) Vt.push(qt);
          else if (Vt.length >= 2) {
          let tt = Vt[Vt.length - 1],
            et = Vt[Vt.length - 2];
          Vt.length -= 2;
          const Ot = "&&" == qt ? new Xt : new Ht;
          "string" === typeof tt && (tt = tt.replace(wt, "defined($1)")), "string" === typeof et && (et = et.replace(wt, "defined($1)")), Ot.leftOperand = "string" === typeof et ? vt(et) : et, Ot.rightOperand = "string" === typeof tt ? vt(tt) : tt, Vt.push(Ot)
        }
        let Ot = Vt[Vt.length - 1];
        return "string" === typeof Ot && (Ot = Ot.replace(wt, "defined($1)")), "string" === typeof Ot ? vt(Ot) : Ot
      }(qt), Vt
    }

    function St(tt, et, Vt, qt) {
      let Dt;
      for (; ct(tt, Vt, qt);) {
        Dt = tt.currentLine;
        const mt = Dt.substring(0, 5).toLowerCase();
        if ("#else" === mt) {
          const Vt = new Ot;
          return et.children.push(Vt), void ct(tt, Vt, qt)
        }
        if ("#elif" === mt) {
          const tt = Wt(Dt, 5);
          et.children.push(tt), Vt = tt
        }
      }
    }

    function ct(tt, et, Vt) {
      for (; tt.canRead;) {
        tt.lineIndex++;
        const qt = tt.currentLine;
        if (qt.indexOf("#") >= 0) {
          const Ot = Ct.exec(qt);
          if (Ot && Ot.length) {
            switch (Ot[0]) {
              case "#ifdef": {
                const Ot = new Dt;
                et.children.push(Ot);
                const mt = Wt(qt, 6);
                Ot.children.push(mt), St(tt, Ot, mt, Vt);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const Ot = new Dt;
                et.children.push(Ot);
                const mt = Wt(qt, 7);
                Ot.children.push(mt), St(tt, Ot, mt, Vt);
                break
              }
              case "#if": {
                const Ot = new Dt,
                  mt = Wt(qt, 3);
                et.children.push(Ot), Ot.children.push(mt), St(tt, Ot, mt, Vt);
                break
              }
            }
            continue
          }
        }
        const mt = new Ot;
        if (mt.line = qt, et.children.push(mt), "#" === qt[0] && "d" === qt[1]) {
          const tt = qt.replace(";", "").split(" ");
          mt.additionalDefineKey = tt[1], 3 === tt.length && (mt.additionalDefineValue = tt[2])
        }
      }
      return !1
    }

    function Rt(tt, et, Vt, Dt) {
      const mt = new Ot,
        dt = new qt;
      return dt.lineIndex = -1, dt.lines = tt.split("\n"), ct(dt, mt, Dt), mt.process(et, Vt, Dt)
    }

    function It(tt, et) {
      const Vt = tt.defines,
        Ot = {};
      for (const qt of Vt) {
        const tt = qt.replace("#define", "").replace(";", "").trim().split(" ");
        Ot[tt[0]] = tt.length > 1 ? tt[1] : ""
      }
      return 0 === tt.processor?.shaderLanguage && (Ot.GL_ES = "true"), Ot.__VERSION__ = tt.version, Ot[tt.platformName] = "true", (0, Et.i)(Ot, et?.isNDCHalfZRange, et?.LOt, et?.useExactSrgbConversions), Ot
    }

    function Pt(tt, et, Vt) {
      let Ot;
      for (Jt.length = 0; null !== (Ot = yt.exec(tt));) Jt.push(Ot);
      let qt = [tt],
        Dt = !1;
      for (const dt of Jt) {
        let tt = dt[1];
        if (-1 !== tt.indexOf("__decl__") && (tt = tt.replace(Nt, ""), et.supportsUniformBuffers && (tt = tt.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), tt += "Declaration"), !et.includesShadersStore[tt]) {
          const Ot = et.shadersRepository + "ShadersInclude/" + tt + ".fx";
          return void Zt.loadFile(Ot, (Ot => {
            et.includesShadersStore[tt] = Ot, Pt(qt.join(""), et, Vt)
          }))
        } {
          let Vt = et.includesShadersStore[tt];
          if (dt[2]) {
            const tt = dt[3].split(",");
            for (let et = 0; et < tt.length; et += 2) {
              const Ot = new RegExp(tt[et], "g"),
                qt = tt[et + 1];
              Vt = Vt.replace(Ot, qt)
            }
          }
          if (dt[4]) {
            const tt = dt[5];
            if (-1 !== tt.indexOf("..")) {
              const Ot = tt.split(".."),
                qt = parseInt(Ot[0]);
              let Dt = parseInt(Ot[1]),
                mt = Vt.slice(0);
              Vt = "", isNaN(Dt) && (Dt = et.indexParameters[Ot[1]]);
              for (let tt = qt; tt < Dt; tt++) et.supportsUniformBuffers || (mt = mt.replace(Mt, ((tt, et) => et + "{X}"))), Vt += mt.replace(bt, tt.toString()) + "\n"
            } else et.supportsUniformBuffers || (Vt = Vt.replace(Mt, ((tt, et) => et + "{X}"))), Vt = Vt.replace(bt, tt)
          }
          const Ot = [];
          for (const tt of qt) {
            const et = tt.split(dt[0]);
            for (let tt = 0; tt < et.length - 1; tt++) Ot.push(et[tt]), Ot.push(Vt);
            Ot.push(et[et.length - 1])
          }
          qt = Ot, Dt = Dt || Vt.indexOf("#include<") >= 0 || Vt.indexOf("#include <") >= 0
        }
      }
      Jt.length = 0;
      const mt = qt.join("");
      Dt ? Pt(mt.toString(), et, Vt) : Vt(mt)
    }
    const Zt = {
      loadFile: (tt, et, Vt, Ot, qt, Dt) => {
        throw (0, lt.e)("FileTools")
      }
    }
  },
  40076: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      f: () => Dt,
      i: () => dt,
      j: () => mt,
      k: () => jt
    });
    var Ot = Vt(40080);
    const qt = {};

    function Dt(tt, et) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (et ? et + "\n" : "") + tt
    }

    function mt(tt, et, Vt, Dt, mt, dt, jt) {
      const Ht = jt || qt.loadFile;
      if (!Ht) throw (0, Ot.e)("FileTools");
      return Ht(tt, et, Vt, Dt, mt, dt)
    }

    function dt(tt, et, Vt, Ot) {
      if (tt) return et ? tt.IS_NDC_HALF_ZRANGE = "" : delete tt.IS_NDC_HALF_ZRANGE, Vt ? tt.USE_REVERSE_DEPTHBUFFER = "" : delete tt.USE_REVERSE_DEPTHBUFFER, void(Ot ? tt.USE_EXACT_SRGB_CONVERSIONS = "" : delete tt.USE_EXACT_SRGB_CONVERSIONS);
      {
        let tt = "";
        return et && (tt += "#define IS_NDC_HALF_ZRANGE"), Vt && (tt && (tt += "\n"), tt += "#define USE_REVERSE_DEPTHBUFFER"), Ot && (tt && (tt += "\n"), tt += "#define USE_EXACT_SRGB_CONVERSIONS"), tt
      }
    }

    function jt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ot = arguments.length > 3 ? arguments[3] : void 0;
      switch (tt) {
        case 3: {
          const tt = new Int8Array(et);
          return Ot && tt.set(new Int8Array(Ot)), tt
        }
        case 0: {
          const tt = new Uint8Array(et);
          return Ot && tt.set(new Uint8Array(Ot)), tt
        }
        case 4: {
          const tt = "number" !== typeof et ? new Int16Array(et) : new Int16Array(Vt ? et / 2 : et);
          return Ot && tt.set(new Int16Array(Ot)), tt
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const tt = "number" !== typeof et ? new Uint16Array(et) : new Uint16Array(Vt ? et / 2 : et);
          return Ot && tt.set(new Uint16Array(Ot)), tt
        }
        case 6: {
          const tt = "number" !== typeof et ? new Int32Array(et) : new Int32Array(Vt ? et / 4 : et);
          return Ot && tt.set(new Int32Array(Ot)), tt
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const tt = "number" !== typeof et ? new Uint32Array(et) : new Uint32Array(Vt ? et / 4 : et);
          return Ot && tt.set(new Uint32Array(Ot)), tt
        }
        case 1: {
          const tt = "number" !== typeof et ? new Float32Array(et) : new Float32Array(Vt ? et / 4 : et);
          return Ot && tt.set(new Float32Array(Ot)), tt
        }
      }
      const qt = new Uint8Array(et);
      return Ot && qt.set(new Uint8Array(Ot)), qt
    }
  },
  40080: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ht,
      c: () => Xt,
      d: () => jt,
      e: () => qt
    });
    const Ot = {};

    function qt(tt) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Ot[tt]) return Ot[tt] = !0, `${tt} needs to be imported before as it contains a side-effect required by your code.`
    }
    const Dt = {};
    let mt = !1,
      dt = 0;

    function jt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const Ot = function() {
        if ((Vt || mt) && 0 === dt) {
          const Vt = `${tt}.${et}`;
          Dt[Vt] || (Dt[Vt] = !0, console.warn(`[Babylon.js] ${Vt}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return Ot.__isSideEffectStub = !0, Ot
    }

    function Ht(tt) {
      return !!tt && !tt.__isSideEffectStub
    }

    function Xt(tt, et) {
      return {
        get() {},
        set(tt) {
          Object.defineProperty(this, et, {
            value: tt,
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
  40068: (tt, et, Vt) => {
    function Ot() {
      return "undefined" !== typeof window
    }

    function qt() {
      return "undefined" !== typeof navigator
    }

    function Dt() {
      return "undefined" !== typeof document
    }

    function mt(tt) {
      let et = "",
        Vt = tt.firstChild;
      for (; Vt;) 3 === Vt.nodeType && (et += Vt.textContent), Vt = Vt.nextSibling;
      return et
    }
    Vt.d(et, {
      c: () => mt,
      d: () => Dt,
      h: () => qt,
      j: () => Ot
    })
  },
  40257: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot,
      e: () => qt,
      f: () => Dt
    });
    class Ot extends Error {}
    Ot._setPrototypeOf = Object.setPrototypeOf || ((tt, et) => (tt.__proto__ = et, tt));
    const qt = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class Dt extends Ot {
      constructor(tt, et, Vt) {
        super(tt), this.errorCode = et, this.innerError = Vt, this.name = "RuntimeError", Ot._setPrototypeOf(this, Dt.prototype)
      }
    }
  },
  40249: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => It,
      f: () => bt,
      j: () => Wt,
      k: () => ct,
      o: () => ht,
      p: () => ut,
      r: () => Kt,
      u: () => kt,
      y: () => vt,
      z: () => Jt
    });
    var Ot = Vt(40255),
      qt = Vt(40068),
      Dt = Vt(37367);
    class mt {}
    mt.FilesToLoad = {};
    var dt = Vt(40257),
      jt = Vt(40261),
      Ht = Vt(37359),
      Xt = Vt(40076),
      Qt = Vt(40082),
      lt = Vt(38899),
      Et = Vt(40085),
      ft = Vt(40270);
    const wt = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class yt extends dt.f {
      constructor(tt, et) {
        super(tt, dt.e.LoadFileError), this.name = "LoadFileError", dt.b._setPrototypeOf(this, yt.prototype), et instanceof Ot.e ? this.request = et : this.file = et
      }
    }
    class Nt extends dt.f {
      constructor(tt, et) {
        super(tt, dt.e.RequestFileError), this.request = et, this.name = "RequestFileError", dt.b._setPrototypeOf(this, Nt.prototype)
      }
    }
    class Mt extends dt.f {
      constructor(tt, et) {
        super(tt, dt.e.ReadFileError), this.file = et, this.name = "ReadFileError", dt.b._setPrototypeOf(this, Mt.prototype)
      }
    }
    const bt = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (Vt, Ot, qt) => 0 !== Ot.status || qt >= tt || -1 !== Vt.indexOf("file:") ? -1 : Math.pow(2, qt) * et
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: tt => tt,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: tt => tt,
        CleanUrl: tt => tt = tt.replace(/#/gm, "%23")
      },
      Jt = (tt, et) => {
        if ((!tt || 0 !== tt.indexOf("data:")) && bt.CorsBehavior)
          if ("string" === typeof bt.CorsBehavior || bt.CorsBehavior instanceof String) et.crossOrigin = bt.CorsBehavior;
          else {
            const Vt = bt.CorsBehavior(tt);
            Vt && (et.crossOrigin = Vt)
          }
      },
      Ct = {
        getRequiredSize: null
      },
      ut = function(tt, et, Vt, qt) {
        let Dt, dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          Xt = arguments.length > 5 ? arguments[5] : void 0,
          Qt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Ht.d.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !Qt?._features.forceBitmapOverHTMLImageElement) return Vt("LoadImage is only supported in web or BabylonNative environments."), null;
        if (Qt?._features.forceBitmapOverHTMLImageElement && "string" !== typeof tt && "undefined" !== typeof Blob) {
          let Ot;
          if (tt instanceof Blob) Ot = tt;
          else {
            const et = tt instanceof ArrayBuffer ? tt : (0, ft.o)(tt);
            Ot = new Blob([et], {
              type: dt
            })
          }
          return Qt.createImageBitmap(Ot, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Xt
          }).then(et).catch((et => {
            Vt && Vt("Error while trying to load image: " + tt, et)
          })), null
        }
        let lt = !1;
        if (tt instanceof ArrayBuffer || ArrayBuffer.isView(tt))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let et;
            et = tt instanceof ArrayBuffer ? tt : (0, ft.o)(tt), Dt = URL.createObjectURL(new Blob([et], {
              type: dt
            })), lt = !0
          } else Dt = `data:${dt};base64,` + (0, jt.j)(tt);
        else tt instanceof Blob ? (Dt = URL.createObjectURL(tt), lt = !0) : (Dt = bt.CleanUrl(tt), Dt = bt.PreprocessUrl(Dt));
        const Et = et => {
          if (Vt) {
            const Ot = Dt || tt.toString();
            Vt(`Error while trying to load image: ${0===Ot.indexOf("http")||Ot.length<=128?Ot:Ot.slice(0,128)+"..."}`, et)
          }
        };
        if (Qt?._features.forceBitmapOverHTMLImageElement) return ht(Dt, (Ot => {
          Qt.createImageBitmap(new Blob([Ot], {
            type: dt
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Xt
          }).then((tt => {
            et(tt), lt && URL.revokeObjectURL(Dt)
          })).catch((et => {
            Vt && Vt("Error while trying to load image: " + tt, et)
          }))
        }), void 0, qt || void 0, !0, ((tt, et) => {
          Et(et)
        })), null;
        const wt = new Image;
        if (Ct.getRequiredSize) {
          const et = Ct.getRequiredSize(tt);
          et.width && (wt.width = et.width), et.height && (wt.height = et.height)
        }
        Jt(Dt, wt);
        const yt = [],
          Nt = () => {
            for (const tt of yt) tt.target.removeEventListener(tt.name, tt.handler);
            yt.length = 0
          };
        yt.push({
          target: wt,
          name: "load",
          handler: () => {
            Nt(), et(wt), lt && wt.src && URL.revokeObjectURL(wt.src)
          }
        }), yt.push({
          target: wt,
          name: "error",
          handler: tt => {
            Nt(), Et(tt), lt && wt.src && URL.revokeObjectURL(wt.src)
          }
        }), yt.push({
          target: document,
          name: "securitypolicyviolation",
          handler: tt => {
            if (tt.blockedURI !== wt.src || "iE" === tt.disposition) return;
            Nt();
            const et = new Error(`CSP violation of policy ${tt.effectiveDirective} ${tt.blockedURI}. Current policy is ${tt.originalPolicy}`);
            Ht.d.UseFallbackTexture = !1, Et(et), lt && wt.src && URL.revokeObjectURL(wt.src), wt.src = ""
          }
        }), (() => {
          for (const tt of yt) tt.target.addEventListener(tt.name, tt.handler)
        })();
        const Mt = "blob:" === Dt.substring(0, 5),
          ut = "data:" === Dt.substring(0, 5),
          Kt = () => {
            Mt || ut || !Ot.e.IsCustomRequestAvailable ? wt.src = Dt : ht(Dt, ((tt, et, Vt) => {
              const Ot = new Blob([tt], {
                  type: !dt && Vt ? Vt : dt
                }),
                qt = URL.createObjectURL(Ot);
              lt = !0, wt.src = qt
            }), void 0, qt || void 0, !0, ((tt, et) => {
              Et(et)
            }))
          },
          vt = () => {
            qt && qt.loadImage(Dt, wt)
          };
        if (!Mt && !ut && qt && qt.enableTexturesOffline) qt.open(vt, Kt);
        else {
          if (-1 !== Dt.indexOf("file:")) {
            const tt = decodeURIComponent(Dt.substring(5).toLowerCase());
            if (mt.FilesToLoad[tt] && "undefined" !== typeof URL) {
              try {
                let et;
                try {
                  et = URL.createObjectURL(mt.FilesToLoad[tt])
                } catch (Wt) {
                  et = URL.createObjectURL(mt.FilesToLoad[tt])
                }
                wt.src = et, lt = !0
              } catch (St) {
                wt.src = ""
              }
              return wt
            }
          }
          Kt()
        }
        return wt
      },
      Kt = (tt, et, Vt, Ot, qt) => {
        const mt = new FileReader,
          dt = {
            onCompleteObservable: new Dt.c,
            abort: () => mt.abort()
          };
        return mt.onloadend = () => dt.onCompleteObservable.notifyObservers(dt), qt && (mt.onerror = () => {
          qt(new Mt(`Unable to read ${tt.name}`, tt))
        }), mt.onload = tt => {
          et(tt.target.result)
        }, Vt && (mt.onprogress = Vt), Ot ? mt.readAsArrayBuffer(tt) : mt.readAsText(tt), dt
      },
      ht = (tt, et, Vt, Ot, qt, jt, Ht) => {
        if (tt.name) return Kt(tt, et, Vt, qt, jt ? tt => {
          jt(void 0, tt)
        } : void 0);
        const Xt = tt;
        if (-1 !== Xt.indexOf("file:")) {
          let tt = decodeURIComponent(Xt.substring(5).toLowerCase());
          0 === tt.indexOf("./") && (tt = tt.substring(2));
          const Ot = mt.FilesToLoad[tt];
          if (Ot) return Kt(Ot, et, Vt, qt, jt ? tt => jt(void 0, new yt(tt.message, tt.file)) : void 0)
        }
        const {
          match: Qt,
          type: ft
        } = Rt(Xt);
        if (Qt) {
          const tt = {
            onCompleteObservable: new Dt.c,
            abort: () => () => {}
          };
          try {
            const tt = qt ? It(Xt) : Pt(Xt);
            et(tt, void 0, ft)
          } catch (dt) {
            jt ? jt(void 0, dt) : lt.d.Error(dt.message || "Failed to parse the Data URL")
          }
          return Et.c.SetImmediate((() => {
            tt.onCompleteObservable.notifyObservers(tt)
          })), tt
        }
        return vt(Xt, ((tt, Vt) => {
          et(tt, Vt?.responseURL, Vt?.getResponseHeader("content-type"))
        }), Vt, Ot, qt, jt ? tt => {
          jt(tt.request, new yt(tt.message, tt.request))
        } : void 0, Ht)
      },
      vt = (tt, et, Vt, mt, dt, jt, Xt) => {
        null !== mt && (mt ?? (mt = Ht.d.LastCreatedScene?.offlineProvider)), tt = bt.CleanUrl(tt), tt = bt.PreprocessUrl(tt);
        const Qt = bt.BaseUrl + tt;
        let Et = !1;
        const ft = {
            onCompleteObservable: new Dt.c,
            abort: () => Et = !0
          },
          wt = () => {
            let tt, Dt = new Ot.e,
              mt = null;
            const Ht = () => {
              Dt && (Vt && Dt.removeEventListener("progress", Vt), tt && Dt.removeEventListener("readystatechange", tt), Dt.removeEventListener("loadend", wt))
            };
            let wt = () => {
              Ht(), ft.onCompleteObservable.notifyObservers(ft), ft.onCompleteObservable.clear(), Vt = void 0, tt = null, wt = null, jt = void 0, Xt = void 0, et = void 0
            };
            ft.abort = () => {
              Et = !0, wt && wt(), Dt && Dt.readyState !== (XMLHttpRequest.DONE || 4) && Dt.abort(), null !== mt && (clearTimeout(mt), mt = null), Dt = null
            };
            const yt = tt => {
                const et = tt.message || "Unknown error";
                jt && Dt ? jt(new Nt(et, Dt)) : lt.d.Error(et)
              },
              Mt = lt => {
                if (Dt) {
                  if (Dt.open("GET", Qt), Xt) try {
                    Xt(Dt)
                  } catch (ft) {
                    return void yt(ft)
                  }
                  dt && (Dt.responseType = "arraybuffer"), Vt && Dt.addEventListener("progress", Vt), wt && Dt.addEventListener("loadend", wt), tt = () => {
                    if (!Et && Dt && Dt.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (tt && Dt.removeEventListener("readystatechange", tt), Dt.status >= 200 && Dt.status < 300 || 0 === Dt.status && (!(0, qt.j)() || St())) {
                        const tt = dt ? Dt.response : Dt.responseText;
                        if (null !== tt) {
                          try {
                            et && et(tt, Dt)
                          } catch (ft) {
                            yt(ft)
                          }
                          return
                        }
                      }
                      const Vt = bt.DefaultRetryStrategy;
                      if (Vt) {
                        const tt = Vt(Qt, Dt, lt);
                        if (-1 !== tt) return Ht(), Dt = new Ot.e, void(mt = setTimeout((() => Mt(lt + 1)), tt))
                      }
                      const Xt = new Nt("Error status: " + Dt.status + " " + Dt.statusText + " - Unable to load " + Qt, Dt);
                      jt && jt(Xt)
                    }
                  }, Dt.addEventListener("readystatechange", tt), Dt.send()
                }
              };
            Mt(0)
          };
        if (mt && mt.enableSceneOffline && !tt.startsWith("blob:")) {
          const Ot = tt => {
              tt && tt.status > 400 ? jt && jt(tt) : wt()
            },
            qt = () => {
              mt && mt.loadFile(bt.BaseUrl + tt, (tt => {
                !Et && et && et(tt), ft.onCompleteObservable.notifyObservers(ft)
              }), Vt ? tt => {
                !Et && Vt && Vt(tt)
              } : void 0, Ot, dt)
            };
          mt.open(qt, Ot)
        } else wt();
        return ft
      },
      Wt = tt => {
        const {
          match: et,
          type: Vt
        } = Rt(tt);
        if (et) return Vt || void 0;
        const Ot = tt.lastIndexOf(".");
        switch (tt.substring(Ot + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "oR":
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
      St = () => "undefined" !== typeof location && "file:" === location.protocol,
      ct = tt => wt.test(tt),
      Rt = tt => {
        const et = wt.exec(tt);
        if (null === et || 0 === et.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: et[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function It(tt) {
      return (0, jt.d)(tt.split(",")[1])
    }
    const Pt = tt => (0, jt.f)(tt.split(",")[1]);
    let Zt;
    const Lt = (tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) => {
      Zt = {
        DecodeBase64UrlToBinary: tt,
        DecodeBase64UrlToString: et,
        DefaultRetryStrategy: Vt.DefaultRetryStrategy,
        BaseUrl: Vt.BaseUrl,
        CorsBehavior: Vt.CorsBehavior,
        PreprocessUrl: Vt.PreprocessUrl,
        IsBase64DataUrl: Ot,
        IsFileURL: qt,
        LoadFile: Dt,
        LoadImage: mt,
        ReadFile: dt,
        RequestFile: jt,
        SetCorsBehavior: Ht
      }, Object.defineProperty(Zt, "DefaultRetryStrategy", {
        get: function() {
          return Vt.DefaultRetryStrategy
        },
        set: function(tt) {
          Vt.DefaultRetryStrategy = tt
        }
      }), Object.defineProperty(Zt, "BaseUrl", {
        get: function() {
          return Vt.BaseUrl
        },
        set: function(tt) {
          Vt.BaseUrl = tt
        }
      }), Object.defineProperty(Zt, "PreprocessUrl", {
        get: function() {
          return Vt.PreprocessUrl
        },
        set: function(tt) {
          Vt.PreprocessUrl = tt
        }
      }), Object.defineProperty(Zt, "CorsBehavior", {
        get: function() {
          return Vt.CorsBehavior
        },
        set: function(tt) {
          Vt.CorsBehavior = tt
        }
      })
    };
    let Ft = !1;

    function kt() {
      Ft || (Ft = !0, Lt(It, Pt, bt, ct, St, ht, ut, Kt, vt, Jt), Xt.c.loadFile = ht, Xt.c.loadImage = ut, Qt.m.loadFile = ht)
    }
  },
  40272: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => dt,
      i: () => Dt,
      k: () => mt
    });
    let Ot = null;

    function qt() {
      if (Ot) return Ot;
      const tt = new ArrayBuffer(4),
        et = new Float32Array(tt),
        Vt = new Uint32Array(tt),
        qt = new Uint32Array(512),
        Dt = new Uint32Array(512);
      for (let Ot = 0; Ot < 256; ++Ot) {
        const tt = Ot - 127;
        tt < -24 ? (qt[Ot] = 0, qt[256 | Ot] = 32768, Dt[Ot] = 24, Dt[256 | Ot] = 24) : tt < -14 ? (qt[Ot] = 1024 >> -tt - 14, qt[256 | Ot] = 1024 >> -tt - 14 | 32768, Dt[Ot] = -tt - 1, Dt[256 | Ot] = -tt - 1) : tt <= 15 ? (qt[Ot] = tt + 15 << 10, qt[256 | Ot] = tt + 15 << 10 | 32768, Dt[Ot] = 13, Dt[256 | Ot] = 13) : tt < 128 ? (qt[Ot] = 31744, qt[256 | Ot] = 64512, Dt[Ot] = 24, Dt[256 | Ot] = 24) : (qt[Ot] = 31744, qt[256 | Ot] = 64512, Dt[Ot] = 13, Dt[256 | Ot] = 13)
      }
      const mt = new Uint32Array(2048),
        dt = new Uint32Array(64),
        jt = new Uint32Array(64);
      for (let Ot = 1; Ot < 1024; ++Ot) {
        let tt = Ot << 13,
          et = 0;
        for (; 0 === (8388608 & tt);) tt <<= 1, et -= 8388608;
        tt &= -8388609, et += 947912704, mt[Ot] = tt | et
      }
      for (let Ot = 1024; Ot < 2048; ++Ot) mt[Ot] = 939524096 + (Ot - 1024 << 13);
      for (let Ot = 1; Ot < 31; ++Ot) dt[Ot] = Ot << 23;
      dt[31] = 1199570944, dt[32] = 2147483648;
      for (let Ot = 33; Ot < 63; ++Ot) dt[Ot] = 2147483648 + (Ot - 32 << 23);
      dt[63] = 3347054592;
      for (let Ot = 1; Ot < 64; ++Ot) 32 !== Ot && (jt[Ot] = 1024);
      return Ot = {
        floatView: et,
        uint32View: Vt,
        baseTable: qt,
        shiftTable: Dt,
        mantissaTable: mt,
        exponentTable: dt,
        offsetTable: jt
      }, Ot
    }
    const Dt = 65504;

    function mt(tt) {
      const et = qt();
      et.floatView[0] = tt;
      const Vt = et.uint32View[0],
        Ot = Vt >> 23 & 511;
      return et.baseTable[Ot] + ((8388607 & Vt) >> et.shiftTable[Ot])
    }

    function dt(tt) {
      const et = qt();
      return et.uint32View[0] = et.mantissaTable[et.offsetTable[tt >> 10] + (1023 & tt)] + et.exponentTable[tt >> 10], et.floatView[0]
    }
  },
  40261: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt,
      f: () => qt,
      j: () => Ot
    });
    const Ot = tt => {
        const et = ArrayBuffer.isView(tt) ? new Uint8Array(tt.buffer, tt.byteOffset, tt.byteLength) : new Uint8Array(tt);
        return "function" === typeof et.toBase64 ? et.toBase64() : function(tt) {
          const et = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let Vt, Ot, qt, Dt, mt, dt, jt, Ht = "",
            Xt = 0;
          for (; Xt < tt.length;) Vt = tt[Xt++], Ot = Xt < tt.length ? tt[Xt++] : Number.NaN, qt = Xt < tt.length ? tt[Xt++] : Number.NaN, Dt = Vt >> 2, mt = (3 & Vt) << 4 | Ot >> 4, dt = (15 & Ot) << 2 | qt >> 6, jt = 63 & qt, isNaN(Ot) ? dt = jt = 64 : isNaN(qt) && (jt = 64), Ht += et.charAt(Dt) + et.charAt(mt) + et.charAt(dt) + et.charAt(jt);
          return Ht
        }(et)
      },
      qt = tt => atob(tt),
      Dt = tt => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(tt).buffer : function(tt) {
        const et = qt(tt),
          Vt = et.length,
          Ot = new Uint8Array(new ArrayBuffer(Vt));
        for (let qt = 0; qt < Vt; qt++) Ot[qt] = et.charCodeAt(qt);
        return Ot.buffer
      }(tt)
  },
  40085: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      g: () => mt
    });
    let Ot = [];
    class qt {
      static SetImmediate(tt) {
        0 === Ot.length && setTimeout((() => {
          const tt = Ot;
          Ot = [];
          for (const et of tt) et()
        }), 1), Ot.push(tt)
      }
    }

    function Dt(tt, et, Vt) {
      try {
        if (tt()) return et(), !0
      } catch (Ot) {
        return Vt?.(Ot), !0
      }
      return !1
    }
    const mt = function(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        mt = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && Dt(tt, et, Vt)) return null;
      const dt = setInterval((() => {
        Dt(tt, et, Vt) ? clearInterval(dt) : (qt -= Ot, qt < 0 && (clearInterval(dt), Vt?.(new Error("Operation timed out after maximum retries. " + (mt || "")), !0)))
      }), Ot);
      return () => clearInterval(dt)
    }
  },
  40255: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    class Ot {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(Ot.CustomRequestHeaders).length > 0 || Ot.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(tt) {
        return tt = (tt = tt.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(tt) {
        return Ot.SkipRequestModificationForBabylonCDN && (tt.includes("preview.babylonjs.com") || tt.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(tt) {
        const et = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (Ot._ShouldSkipRequestModifications(tt)) return {
          url: tt,
          headers: et
        };
        for (const qt in Ot.CustomRequestHeaders) {
          const tt = Ot.CustomRequestHeaders[qt];
          tt && (et[qt] = tt)
        }
        const Vt = {
          setRequestHeader: (tt, Vt) => {
            et[tt] = Vt
          }
        };
        for (const qt of Ot.CustomRequestModifiers) {
          if (Ot._ShouldSkipRequestModifications(tt)) break;
          const et = qt(Vt, tt);
          "string" === typeof et && (tt = et)
        }
        return {
          url: tt,
          headers: et
        }
      }
      static async FetchAsync(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Vt = et.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: qt,
            headers: Dt
          } = Ot._CollectCustomizations(Ot._CleanUrl(tt), et.headers ?? {});
          return await fetch(qt, {
            method: Vt,
            headers: Dt,
            body: et.body ?? void 0
          })
        }
        return await new Promise(((qt, Dt) => {
          const mt = new Ot;
          mt.responseType = "arraybuffer", mt.addEventListener("readystatechange", (() => {
            if (4 === mt.readyState)
              if (mt.status >= 200 && mt.status < 300) {
                const tt = "undefined" !== typeof Headers ? new Headers : void 0,
                  et = mt.getResponseHeader("Content-Type");
                et && tt && tt.set("Content-Type", et), "undefined" !== typeof Response ? qt(new Response(mt.response, {
                  status: mt.status,
                  statusText: mt.statusText,
                  headers: tt
                })) : qt({
                  ok: !0,
                  status: mt.status,
                  statusText: mt.statusText,
                  headers: {
                    get: tt => mt.getResponseHeader(tt)
                  },
                  arrayBuffer: async () => await Promise.resolve(mt.response)
                })
              } else Dt(new Error(`HTTP ${mt.status} loading '${mt.requestURL}': ${mt.statusText}`))
          })), mt.open(Vt, tt, et.headers), mt.send(et.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(tt) {
        this._xhr.onprogress = tt
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
      set responseType(tt) {
        this._xhr.responseType = tt
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(tt) {
        this._xhr.timeout = tt
      }
      addEventListener(tt, et, Vt) {
        this._xhr.addEventListener(tt, et, Vt)
      }
      removeEventListener(tt, et, Vt) {
        this._xhr.removeEventListener(tt, et, Vt)
      }
      abort() {
        this._xhr.abort()
      }
      send(tt) {
        this._xhr.send(tt)
      }
      open(tt, et, Vt) {
        const {
          url: qt,
          headers: Dt
        } = Ot._CollectCustomizations(et, Vt);
        this._requestURL = Ot._CleanUrl(qt), this._xhr.open(tt, this._requestURL, !0);
        for (const Ot in Dt) this._xhr.setRequestHeader(Ot, Dt[Ot])
      }
      setRequestHeader(tt, et) {
        this._xhr.setRequestHeader(tt, et)
      }
      getResponseHeader(tt) {
        return this._xhr.getResponseHeader(tt)
      }
    }
    Ot.CustomRequestHeaders = {}, Ot.CustomRequestModifiers = new Array, Ot.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);