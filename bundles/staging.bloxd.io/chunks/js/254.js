export const id = 254;
export const ids = [254];
export const modules = {
  40180: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Em,
      f: () => pm,
      h: () => Dm,
      l: () => om,
      o: () => im,
      s: () => wm,
      u: () => Rm
    });
    var hm = fm(38766),
      Am = fm(40186);

    function am(mm, Tm, fm, hm) {
      switch (Tm) {
        case 5120: {
          let Tm = mm.getInt8(fm);
          return hm && (Tm = Math.max(Tm / 127, -1)), Tm
        }
        case 5121: {
          let Tm = mm.getUint8(fm);
          return hm && (Tm /= 255), Tm
        }
        case 5122: {
          let Tm = mm.getInt16(fm, !0);
          return hm && (Tm = Math.max(Tm / 32767, -1)), Tm
        }
        case 5123: {
          let Tm = mm.getUint16(fm, !0);
          return hm && (Tm /= 65535), Tm
        }
        case 5131:
          return (0, Am.d)(mm.getUint16(fm, !0));
        case 5124:
          return mm.getInt32(fm, !0);
        case 5125:
          return mm.getUint32(fm, !0);
        case 5126:
          return mm.getFloat32(fm, !0);
        default:
          throw new Error(`Invalid component type ${Tm}`)
      }
    }

    function xm(mm, Tm, fm, hm, am) {
      switch (Tm) {
        case 5120:
          hm && (am = Math.round(127 * am)), mm.setInt8(fm, am);
          break;
        case 5121:
          hm && (am = Math.round(255 * am)), mm.setUint8(fm, am);
          break;
        case 5122:
          hm && (am = Math.round(32767 * am)), mm.setInt16(fm, am, !0);
          break;
        case 5123:
          hm && (am = Math.round(65535 * am)), mm.setUint16(fm, am, !0);
          break;
        case 5131:
          mm.setUint16(fm, (0, Am.j)(am), !0);
          break;
        case 5124:
          mm.setInt32(fm, am, !0);
          break;
        case 5125:
          mm.setUint32(fm, am, !0);
          break;
        case 5126:
          mm.setFloat32(fm, am, !0);
          break;
        default:
          throw new Error(`Invalid component type ${Tm}`)
      }
    }

    function wm(mm) {
      switch (mm) {
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
          throw new Error(`Invalid type '${mm}'`)
      }
    }

    function Dm(mm, Tm, fm, hm, Am, Dm, im, Rm) {
      const pm = new Array(hm),
        Em = new Array(hm);
      if (mm instanceof Array) {
        let Am = Tm / 4;
        const am = fm / 4;
        for (let Tm = 0; Tm < Dm; Tm += hm) {
          for (let Tm = 0; Tm < hm; Tm++) pm[Tm] = Em[Tm] = mm[Am + Tm];
          Rm(Em, Tm);
          for (let Tm = 0; Tm < hm; Tm++) pm[Tm] !== Em[Tm] && (mm[Am + Tm] = Em[Tm]);
          Am += am
        }
      } else {
        const om = ArrayBuffer.isView(mm) ? new DataView(mm.buffer, mm.byteOffset, mm.byteLength) : new DataView(mm),
          Om = wm(Am);
        for (let mm = 0; mm < Dm; mm += hm) {
          for (let mm = 0, fm = Tm; mm < hm; mm++, fm += Om) pm[mm] = Em[mm] = am(om, Am, fm, im);
          Rm(Em, mm);
          for (let mm = 0, fm = Tm; mm < hm; mm++, fm += Om) pm[mm] !== Em[mm] && xm(om, Am, fm, im, Em[mm]);
          Tm += fm
        }
      }
    }

    function im(mm, Tm, fm, Am, am, xm, im, Rm) {
      const pm = Tm * wm(fm),
        Em = im * Tm;
      if (5126 !== fm || am !== pm) {
        const hm = new Float32Array(Em);
        return Dm(mm, Am, am, Tm, fm, Em, xm, ((mm, fm) => {
          for (let Am = 0; Am < Tm; Am++) hm[fm + Am] = mm[Am]
        })), hm
      }
      if (!(mm instanceof Array || mm instanceof Float32Array) || 0 !== Am || mm.length !== Em) {
        if (mm instanceof Array) {
          const Tm = Am / 4;
          return mm.slice(Tm, Tm + Em)
        }
        if (ArrayBuffer.isView(mm)) {
          const Tm = mm.byteOffset + Am;
          return 0 !== (3 & Tm) && (hm.b.Warn("Float array must be aligned to 4-bytes border"), Rm = !0), Rm ? new Float32Array(mm.buffer.slice(Tm, Tm + Em * Float32Array.BYTES_PER_ELEMENT)) : new Float32Array(mm.buffer, Tm, Em)
        }
        return new Float32Array(mm, Am, Em)
      }
      return Rm ? mm.slice() : mm
    }

    function Rm(mm, Tm, fm, Am, am, xm, im) {
      const Rm = wm(fm),
        pm = function(mm) {
          switch (mm) {
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
              throw new Error(`Invalid component type '${mm}'`)
          }
        }(fm),
        Em = xm * Tm;
      if (Array.isArray(mm)) {
        if (0 !== (3 & Am) || 0 !== (3 & am)) throw new Error("byteOffset and byteStride must be a multiple of 4 for number[] data.");
        const hm = Am / 4,
          wm = am / 4;
        if (hm + (xm - 1) * wm + Tm > mm.length) throw new Error("Last accessed index is out of bounds.");
        if (wm < Tm) throw new Error("Data stride cannot be smaller than the component size.");
        if (wm !== Tm) {
          const hm = new pm(Em);
          return Dm(mm, Am, am, Tm, fm, Em, !1, ((mm, fm) => {
            for (let Am = 0; Am < Tm; Am++) hm[fm + Am] = mm[Am]
          })), hm
        }
        return new pm(mm.slice(hm, hm + Em))
      }
      let om, Om = Am;
      ArrayBuffer.isView(mm) ? (om = mm.buffer, Om += mm.byteOffset) : om = mm;
      if (Om + (xm - 1) * am + Tm * Rm > om.byteLength) throw new Error("Last accessed byte is out of bounds.");
      const Ym = Tm * Rm;
      if (am < Ym) throw new Error("Byte stride cannot be smaller than the component's byte size.");
      if (am !== Ym) {
        const mm = new pm(Em),
          fm = new Uint8Array(om, Om),
          hm = new Uint8Array(mm.buffer),
          Am = Tm * Rm;
        for (let Tm = 0, wm = 0, Dm = 0; Tm < xm; Tm++, wm += am, Dm += Am) hm.set(fm.subarray(wm, wm + Am), Dm);
        return mm
      }
      return 1 !== Rm && 0 !== (Om & Rm - 1) && (hm.b.Warn("Array must be aligned to border of element size. Data will be copied."), im = !0), im ? new pm(om.slice(Om, Om + Em * Rm)) : new pm(om, Om, Em)
    }

    function pm(mm, Tm, fm, Am, am, xm, im, Rm) {
      const pm = Tm * wm(fm),
        Em = im * Tm;
      if (Rm.length !== Em) throw new Error("Output length is not valid");
      if (5126 === fm && am === pm)
        if (mm instanceof Array) {
          const Tm = Am / 4;
          Rm.set(mm, Tm)
        } else if (ArrayBuffer.isView(mm)) {
        const Tm = mm.byteOffset + Am;
        if (0 !== (3 & Tm)) return hm.b.Warn("Float array must be aligned to 4-bytes border"), void Rm.set(new Float32Array(mm.buffer.slice(Tm, Tm + Em * Float32Array.BYTES_PER_ELEMENT)));
        const fm = new Float32Array(mm.buffer, Tm, Em);
        Rm.set(fm)
      } else {
        const Tm = new Float32Array(mm, Am, Em);
        Rm.set(Tm)
      } else Dm(mm, Am, am, Tm, fm, Em, xm, ((mm, fm) => {
        for (let hm = 0; hm < Tm; hm++) Rm[fm + hm] = mm[hm]
      }))
    }

    function Em(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      if (Array.isArray(mm)) {
        for (let Am = 0; Am < Tm; Am++)
          if (mm[fm + Am] - hm > 65535) return !0;
        return !1
      }
      return 4 === mm.BYTES_PER_ELEMENT
    }

    function om(mm) {
      const Tm = mm.buffer;
      if (Tm instanceof ArrayBuffer) return mm;
      const fm = new ArrayBuffer(mm.byteLength);
      return new Uint8Array(fm).set(new Uint8Array(Tm, mm.byteOffset, mm.byteLength)), fm
    }
  },
  4e4: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => cm,
      d: () => nm,
      i: () => Jm,
      e: () => Nm,
      l: () => Gm
    });
    class hm {
      constructor() {
        this.children = []
      }
      isValid(mm) {
        return !0
      }
      process(mm, Tm, fm) {
        let hm = "";
        if (this.line) {
          let fm = this.line;
          const Am = Tm.processor;
          if (Am) {
            Am.lineProcessor && (fm = Am.lineProcessor(fm, Tm.isFragment, Tm.processingContext));
            const hm = Tm.processor?.attributeKeywordName ?? "attribute",
              am = Tm.isFragment && Tm.processor?.varyingFragmentKeywordName ? Tm.processor?.varyingFragmentKeywordName : !Tm.isFragment && Tm.processor?.varyingVertexKeywordName ? Tm.processor?.varyingVertexKeywordName : "varying";
            if (!Tm.isFragment && Am.attributeProcessor && this.line.startsWith(hm)) fm = Am.attributeProcessor(this.line, mm, Tm.processingContext);
            else if (Am.varyingProcessor && (Am.varyingCheck?.(this.line, Tm.isFragment) || !Am.varyingCheck && this.line.startsWith(am))) fm = Am.varyingProcessor(this.line, Tm.isFragment, mm, Tm.processingContext);
            else if (Am.uniformProcessor && Am.uniformRegexp && Am.uniformRegexp.test(this.line)) Tm.lookForClosingBracketForUniformBuffer || (fm = Am.uniformProcessor(this.line, Tm.isFragment, mm, Tm.processingContext));
            else if (Am.uniformBufferProcessor && Am.uniformBufferRegexp && Am.uniformBufferRegexp.test(this.line)) Tm.lookForClosingBracketForUniformBuffer || (fm = Am.uniformBufferProcessor(this.line, Tm.isFragment, Tm.processingContext), Tm.lookForClosingBracketForUniformBuffer = !0);
            else if (Am.textureProcessor && Am.textureRegexp && Am.textureRegexp.test(this.line)) fm = Am.textureProcessor(this.line, Tm.isFragment, mm, Tm.processingContext);
            else if ((Am.uniformProcessor || Am.uniformBufferProcessor) && this.line.startsWith("uniform") && !Tm.lookForClosingBracketForUniformBuffer) {
              /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? Am.uniformProcessor && (fm = Am.uniformProcessor(this.line, Tm.isFragment, mm, Tm.processingContext)) : Am.uniformBufferProcessor && (fm = Am.uniformBufferProcessor(this.line, Tm.isFragment, Tm.processingContext), Tm.lookForClosingBracketForUniformBuffer = !0)
            }
            Tm.lookForClosingBracketForUniformBuffer && -1 !== this.line.indexOf("}") && (Tm.lookForClosingBracketForUniformBuffer = !1, Am.endOfUniformBufferProcessor && (fm = Am.endOfUniformBufferProcessor(this.line, Tm.isFragment, Tm.processingContext)))
          }
          hm += fm + "\n"
        }
        for (const Am of this.children) hm += Am.process(mm, Tm, fm);
        return this.additionalDefineKey && (mm[this.additionalDefineKey] = this.additionalDefineValue || "true", fm[this.additionalDefineKey] = mm[this.additionalDefineKey]), hm
      }
    }
    class Am {
      constructor() {
        this._lines = []
      }
      get currentLine() {
        return this._lines[this.lineIndex]
      }
      get canRead() {
        return this.lineIndex < this._lines.length - 1
      }
      set lines(mm) {
        this._lines.length = 0;
        for (const Tm of mm) {
          if (!Tm || "\r" === Tm) continue;
          if ("#" === Tm[0]) {
            this._lines.push(Tm);
            continue
          }
          const mm = Tm.trim();
          if (!mm) continue;
          if (mm.startsWith("//")) {
            this._lines.push(Tm);
            continue
          }
          const fm = mm.indexOf(";");
          if (-1 === fm) this._lines.push(mm);
          else if (fm === mm.length - 1) mm.length > 1 && this._lines.push(mm);
          else {
            const mm = Tm.split(";");
            for (let Tm = 0; Tm < mm.length; Tm++) {
              let fm = mm[Tm];
              fm && (fm = fm.trim(), fm && this._lines.push(fm + (Tm !== mm.length - 1 ? ";" : "")))
            }
          }
        }
      }
    }
    class am extends hm {
      process(mm, Tm, fm) {
        for (let hm = 0; hm < this.children.length; hm++) {
          const Am = this.children[hm];
          if (Am.isValid(mm)) return Am.process(mm, Tm, fm)
        }
        return ""
      }
    }
    class xm extends hm {
      isValid(mm) {
        return this.testExpression.isTrue(mm)
      }
    }
    class wm {
      isTrue(mm) {
        return !0
      }
      static postfixToInfix(mm) {
        const Tm = [];
        for (const fm of mm)
          if (void 0 === wm._OperatorPriority[fm]) Tm.push(fm);
          else {
            const mm = Tm[Tm.length - 1],
              hm = Tm[Tm.length - 2];
            Tm.length -= 2, Tm.push(`(${hm}${fm}${mm})`)
          } return Tm[Tm.length - 1]
      }
      static infixToPostfix(mm) {
        const Tm = wm._InfixToPostfixCache.get(mm);
        if (Tm) return Tm.accessTime = Date.now(), Tm.result;
        if (!mm.includes("&&") && !mm.includes("||") && !mm.includes(")") && !mm.includes("(")) return [mm];
        const fm = [];
        let hm = -1;
        const Am = () => {
            Rm = Rm.trim(), "" !== Rm && (fm.push(Rm), Rm = "")
          },
          am = mm => {
            hm < wm._Stack.length - 1 && (wm._Stack[++hm] = mm)
          },
          xm = () => wm._Stack[hm],
          Dm = () => -1 === hm ? "!!INVALID EXPRESSION!!" : wm._Stack[hm--];
        let im = 0,
          Rm = "";
        for (; im < mm.length;) {
          const Tm = mm.charAt(im),
            pm = im < mm.length - 1 ? mm.substring(im, 2 + im) : "";
          if ("(" === Tm) Rm = "", am(Tm);
          else if (")" === Tm) {
            for (Am(); - 1 !== hm && "(" !== xm();) fm.push(Dm());
            Dm()
          } else if (wm._OperatorPriority[pm] > 1) {
            for (Am(); - 1 !== hm && wm._OperatorPriority[xm()] >= wm._OperatorPriority[pm];) fm.push(Dm());
            am(pm), im++
          } else Rm += Tm;
          im++
        }
        for (Am(); - 1 !== hm;) "(" === xm() ? Dm() : fm.push(Dm());
        return wm._InfixToPostfixCache.size >= wm.InfixToPostfixCacheLimitSize && wm.ClearCache(), wm._InfixToPostfixCache.set(mm, {
          result: fm,
          accessTime: Date.now()
        }), fm
      }
      static ClearCache() {
        const mm = Array.from(wm._InfixToPostfixCache.entries()).sort(((mm, Tm) => mm[1].accessTime - Tm[1].accessTime));
        for (let Tm = 0; Tm < wm.InfixToPostfixCacheCleanupSize; Tm++) wm._InfixToPostfixCache.delete(mm[Tm][0])
      }
    }
    wm.InfixToPostfixCacheLimitSize = 5e4, wm.InfixToPostfixCacheCleanupSize = 25e3, wm._InfixToPostfixCache = new Map, wm._OperatorPriority = {
      ")": 0,
      "(": 1,
      "||": 2,
      "&&": 3
    }, wm._Stack = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    class Dm extends wm {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super(), this.define = mm, this.not = Tm
      }
      isTrue(mm) {
        let Tm = void 0 !== mm[this.define];
        return this.not && (Tm = !Tm), Tm
      }
    }
    class im extends wm {
      isTrue(mm) {
        return this.leftOperand.isTrue(mm) || this.rightOperand.isTrue(mm)
      }
    }
    class Rm extends wm {
      isTrue(mm) {
        return this.leftOperand.isTrue(mm) && this.rightOperand.isTrue(mm)
      }
    }
    class pm extends wm {
      constructor(mm, Tm, fm) {
        super(), this.define = mm, this.operand = Tm, this.testValue = fm
      }
      toString() {
        return `${this.define} ${this.operand} ${this.testValue}`
      }
      isTrue(mm) {
        let Tm = !1;
        const fm = parseInt(void 0 != mm[this.define] ? mm[this.define] : this.define),
          hm = parseInt(void 0 != mm[this.testValue] ? mm[this.testValue] : this.testValue);
        if (isNaN(fm) || isNaN(hm)) return !1;
        switch (this.operand) {
          case ">":
            Tm = fm > hm;
            break;
          case "<":
            Tm = fm < hm;
            break;
          case "<=":
            Tm = fm <= hm;
            break;
          case ">=":
            Tm = fm >= hm;
            break;
          case "==":
            Tm = fm === hm;
            break;
          case "!=":
            Tm = fm !== hm
        }
        return Tm
      }
    }
    var Em = fm(39993),
      om = fm(39986);
    const Om = /defined\s*?\((.+?)\)/g,
      Ym = /defined\s*?\[(.+?)\]/g,
      qm = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
      jm = /__decl__/,
      Vm = /light\{X\}.(\w*)/g,
      Im = /\{X\}/g,
      Km = [],
      Qm = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;

    function nm(mm) {
      mm.processor && mm.processor.initializeShaders && mm.processor.initializeShaders(mm.processingContext)
    }

    function Jm(mm, Tm, fm, hm) {
      Tm.processor?.preProcessShaderCode && (mm = Tm.processor.preProcessShaderCode(mm, Tm.isFragment)), Nm(mm, Tm, (mm => {
        Tm.processCodeAfterIncludes && (mm = Tm.processCodeAfterIncludes(Tm.isFragment ? "fragment" : "vertex", mm, Tm.defines));
        const Am = function(mm, Tm, fm) {
          let hm = function(mm, Tm) {
            if (Tm.processor?.noPrecision) return mm;
            const fm = Tm.shouldUseHighPrecisionShader; - 1 === mm.indexOf("precision highp float") ? mm = fm ? "precision highp float;\n" + mm : "precision mediump float;\n" + mm : fm || (mm = mm.replace("precision highp float", "precision mediump float"));
            return mm
          }(mm, Tm);
          if (!Tm.processor) return hm;
          if (0 === Tm.processor.shaderLanguage && -1 !== hm.indexOf("#version 3") && (hm = hm.replace("#version 300 es", ""), !Tm.processor.parseGLES3)) return hm;
          const Am = Tm.defines,
            am = em(Tm, fm);
          Tm.processor.preProcessor && (hm = Tm.processor.preProcessor(hm, Am, am, Tm.isFragment, Tm.processingContext));
          const xm = {};
          hm = Sm(hm, am, Tm, xm), Tm.processor.postProcessor && (hm = Tm.processor.postProcessor(hm, Am, Tm.isFragment, Tm.processingContext, fm ? {
            drawBuffersExtensionDisabled: !fm.getCaps().drawBuffersExtension
          } : {}, am, xm));
          fm?._features.needShaderCodeInlining && (hm = fm.inlineShaderCode(hm));
          return hm
        }(mm, Tm, hm);
        fm(Am, mm)
      }))
    }

    function cm(mm, Tm, fm) {
      return fm.processor && fm.processor.finalizeShaders ? fm.processor.finalizeShaders(mm, Tm, fm.processingContext) : {
        vertexCode: mm,
        fragmentCode: Tm
      }
    }

    function zm(mm) {
      const Tm = /defined\((.+)\)/.exec(mm);
      if (Tm && Tm.length) return new Dm(Tm[1].trim(), "!" === mm[0]);
      const fm = ["==", "!=", ">=", "<=", "<", ">"];
      let hm = "",
        Am = 0;
      for (hm of fm)
        if (Am = mm.indexOf(hm), Am > -1) break;
      if (-1 === Am) return new Dm(mm);
      const am = mm.substring(0, Am).trim(),
        xm = mm.substring(Am + hm.length).trim();
      return new pm(am, hm, xm)
    }

    function Zm(mm, Tm) {
      const fm = new xm,
        hm = mm.substring(0, Tm);
      let Am = mm.substring(Tm);
      return Am = Am.substring(0, (Am.indexOf("//") + 1 || Am.length + 1) - 1).trim(), fm.testExpression = "#ifdef" === hm ? new Dm(Am) : "#ifndef" === hm ? new Dm(Am, !0) : function(mm) {
        mm = mm.replace(Om, "defined[$1]");
        const Tm = wm.infixToPostfix(mm),
          fm = [];
        for (const Am of Tm)
          if ("||" !== Am && "&&" !== Am) fm.push(Am);
          else if (fm.length >= 2) {
          let mm = fm[fm.length - 1],
            Tm = fm[fm.length - 2];
          fm.length -= 2;
          const hm = "&&" == Am ? new Rm : new im;
          "string" === typeof mm && (mm = mm.replace(Ym, "defined($1)")), "string" === typeof Tm && (Tm = Tm.replace(Ym, "defined($1)")), hm.leftOperand = "string" === typeof Tm ? zm(Tm) : Tm, hm.rightOperand = "string" === typeof mm ? zm(mm) : mm, fm.push(hm)
        }
        let hm = fm[fm.length - 1];
        return "string" === typeof hm && (hm = hm.replace(Ym, "defined($1)")), "string" === typeof hm ? zm(hm) : hm
      }(Am), fm
    }

    function km(mm, Tm, fm, Am) {
      let am;
      for (; bm(mm, fm, Am);) {
        am = mm.currentLine;
        const xm = am.substring(0, 5).toLowerCase();
        if ("#else" === xm) {
          const fm = new hm;
          return Tm.children.push(fm), void bm(mm, fm, Am)
        }
        if ("#elif" === xm) {
          const mm = Zm(am, 5);
          Tm.children.push(mm), fm = mm
        }
      }
    }

    function bm(mm, Tm, fm) {
      for (; mm.canRead;) {
        mm.lineIndex++;
        const Am = mm.currentLine;
        if (Am.indexOf("#") >= 0) {
          const hm = Qm.exec(Am);
          if (hm && hm.length) {
            switch (hm[0]) {
              case "#ifdef": {
                const hm = new am;
                Tm.children.push(hm);
                const xm = Zm(Am, 6);
                hm.children.push(xm), km(mm, hm, xm, fm);
                break
              }
              case "#else":
              case "#elif":
                return !0;
              case "#endif":
                return !1;
              case "#ifndef": {
                const hm = new am;
                Tm.children.push(hm);
                const xm = Zm(Am, 7);
                hm.children.push(xm), km(mm, hm, xm, fm);
                break
              }
              case "#if": {
                const hm = new am,
                  xm = Zm(Am, 3);
                Tm.children.push(hm), hm.children.push(xm), km(mm, hm, xm, fm);
                break
              }
            }
            continue
          }
        }
        const xm = new hm;
        if (xm.line = Am, Tm.children.push(xm), "#" === Am[0] && "d" === Am[1]) {
          const mm = Am.replace(";", "").split(" ");
          xm.additionalDefineKey = mm[1], 3 === mm.length && (xm.additionalDefineValue = mm[2])
        }
      }
      return !1
    }

    function Sm(mm, Tm, fm, am) {
      const xm = new hm,
        wm = new Am;
      return wm.lineIndex = -1, wm.lines = mm.split("\n"), bm(wm, xm, am), xm.process(Tm, fm, am)
    }

    function em(mm, Tm) {
      const fm = mm.defines,
        hm = {};
      for (const Am of fm) {
        const mm = Am.replace("#define", "").replace(";", "").trim().split(" ");
        hm[mm[0]] = mm.length > 1 ? mm[1] : ""
      }
      return 0 === mm.processor?.shaderLanguage && (hm.GL_ES = "true"), hm.__VERSION__ = mm.version, hm[mm.platformName] = "true", (0, om.i)(hm, Tm?.isNDCHalfZRange, Tm?.fhm, Tm?.useExactSrgbConversions), hm
    }

    function Nm(mm, Tm, fm) {
      let hm;
      for (Km.length = 0; null !== (hm = qm.exec(mm));) Km.push(hm);
      let Am = [mm],
        am = !1;
      for (const wm of Km) {
        let mm = wm[1];
        if (-1 !== mm.indexOf("__decl__") && (mm = mm.replace(jm, ""), Tm.supportsUniformBuffers && (mm = mm.replace("Vertex", "Ubo").replace("Fragment", "Ubo")), mm += "Declaration"), !Tm.includesShadersStore[mm]) {
          const hm = Tm.shadersRepository + "ShadersInclude/" + mm + ".fx";
          return void Gm.loadFile(hm, (hm => {
            Tm.includesShadersStore[mm] = hm, Nm(Am.join(""), Tm, fm)
          }))
        } {
          let fm = Tm.includesShadersStore[mm];
          if (wm[2]) {
            const mm = wm[3].split(",");
            for (let Tm = 0; Tm < mm.length; Tm += 2) {
              const hm = new RegExp(mm[Tm], "g"),
                Am = mm[Tm + 1];
              fm = fm.replace(hm, Am)
            }
          }
          if (wm[4]) {
            const mm = wm[5];
            if (-1 !== mm.indexOf("..")) {
              const hm = mm.split(".."),
                Am = parseInt(hm[0]);
              let am = parseInt(hm[1]),
                xm = fm.slice(0);
              fm = "", isNaN(am) && (am = Tm.indexParameters[hm[1]]);
              for (let mm = Am; mm < am; mm++) Tm.supportsUniformBuffers || (xm = xm.replace(Vm, ((mm, Tm) => Tm + "{X}"))), fm += xm.replace(Im, mm.toString()) + "\n"
            } else Tm.supportsUniformBuffers || (fm = fm.replace(Vm, ((mm, Tm) => Tm + "{X}"))), fm = fm.replace(Im, mm)
          }
          const hm = [];
          for (const mm of Am) {
            const Tm = mm.split(wm[0]);
            for (let mm = 0; mm < Tm.length - 1; mm++) hm.push(Tm[mm]), hm.push(fm);
            hm.push(Tm[Tm.length - 1])
          }
          Am = hm, am = am || fm.indexOf("#include<") >= 0 || fm.indexOf("#include <") >= 0
        }
      }
      Km.length = 0;
      const xm = Am.join("");
      am ? Nm(xm.toString(), Tm, fm) : fm(xm)
    }
    const Gm = {
      loadFile: (mm, Tm, fm, hm, Am, am) => {
        throw (0, Em.i)("FileTools")
      }
    }
  },
  39986: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      g: () => am,
      i: () => wm,
      j: () => xm,
      l: () => Dm
    });
    var hm = fm(39993);
    const Am = {};

    function am(mm, Tm) {
      return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "") + (Tm ? Tm + "\n" : "") + mm
    }

    function xm(mm, Tm, fm, am, xm, wm, Dm) {
      const im = Dm || Am.loadFile;
      if (!im) throw (0, hm.i)("FileTools");
      return im(mm, Tm, fm, am, xm, wm)
    }

    function wm(mm, Tm, fm, hm) {
      if (mm) return Tm ? mm.IS_NDC_HALF_ZRANGE = "" : delete mm.IS_NDC_HALF_ZRANGE, fm ? mm.USE_REVERSE_DEPTHBUFFER = "" : delete mm.USE_REVERSE_DEPTHBUFFER, void(hm ? mm.USE_EXACT_SRGB_CONVERSIONS = "" : delete mm.USE_EXACT_SRGB_CONVERSIONS);
      {
        let mm = "";
        return Tm && (mm += "#define IS_NDC_HALF_ZRANGE"), fm && (mm && (mm += "\n"), mm += "#define USE_REVERSE_DEPTHBUFFER"), hm && (mm && (mm += "\n"), mm += "#define USE_EXACT_SRGB_CONVERSIONS"), mm
      }
    }

    function Dm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        hm = arguments.length > 3 ? arguments[3] : void 0;
      switch (mm) {
        case 3: {
          const mm = new Int8Array(Tm);
          return hm && mm.set(new Int8Array(hm)), mm
        }
        case 0: {
          const mm = new Uint8Array(Tm);
          return hm && mm.set(new Uint8Array(hm)), mm
        }
        case 4: {
          const mm = "number" !== typeof Tm ? new Int16Array(Tm) : new Int16Array(fm ? Tm / 2 : Tm);
          return hm && mm.set(new Int16Array(hm)), mm
        }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2: {
          const mm = "number" !== typeof Tm ? new Uint16Array(Tm) : new Uint16Array(fm ? Tm / 2 : Tm);
          return hm && mm.set(new Uint16Array(hm)), mm
        }
        case 6: {
          const mm = "number" !== typeof Tm ? new Int32Array(Tm) : new Int32Array(fm ? Tm / 4 : Tm);
          return hm && mm.set(new Int32Array(hm)), mm
        }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
          const mm = "number" !== typeof Tm ? new Uint32Array(Tm) : new Uint32Array(fm ? Tm / 4 : Tm);
          return hm && mm.set(new Uint32Array(hm)), mm
        }
        case 1: {
          const mm = "number" !== typeof Tm ? new Float32Array(Tm) : new Float32Array(fm ? Tm / 4 : Tm);
          return hm && mm.set(new Float32Array(hm)), mm
        }
      }
      const Am = new Uint8Array(Tm);
      return hm && Am.set(new Uint8Array(hm)), Am
    }
  },
  39993: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im,
      e: () => Rm,
      f: () => Dm,
      i: () => Am
    });
    const hm = {};

    function Am(mm) {
      if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !hm[mm]) return hm[mm] = !0, `${mm} needs to be imported before as it contains a side-effect required by your code.`
    }
    const am = {};
    let xm = !1,
      wm = 0;

    function Dm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const hm = function() {
        if ((fm || xm) && 0 === wm) {
          const fm = `${mm}.${Tm}`;
          am[fm] || (am[fm] = !0, console.warn(`[Babylon.js] ${fm}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
        }
      };
      return hm.__isSideEffectStub = !0, hm
    }

    function im(mm) {
      return !!mm && !mm.__isSideEffectStub
    }

    function Rm(mm, Tm) {
      return {
        get() {},
        set(mm) {
          Object.defineProperty(this, Tm, {
            value: mm,
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
  39973: (mm, Tm, fm) => {
    function hm() {
      return "undefined" !== typeof window
    }

    function Am() {
      return "undefined" !== typeof navigator
    }

    function am() {
      return "undefined" !== typeof document
    }

    function xm(mm) {
      let Tm = "",
        fm = mm.firstChild;
      for (; fm;) 3 === fm.nodeType && (Tm += fm.textContent), fm = fm.nextSibling;
      return Tm
    }
    fm.d(Tm, {
      d: () => xm,
      h: () => am,
      l: () => Am,
      p: () => hm
    })
  },
  40166: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      e: () => Am,
      h: () => am
    });
    class hm extends Error {}
    hm._setPrototypeOf = Object.setPrototypeOf || ((mm, Tm) => (mm.__proto__ = Tm, mm));
    const Am = {
      MeshInvalidPositionsError: 0,
      UnsupportedTextureError: 1e3,
      GLTFLoaderUnexpectedMagicError: 2e3,
      SceneLoaderError: 3e3,
      LoadFileError: 4e3,
      RequestFileError: 4001,
      ReadFileError: 4002
    };
    class am extends hm {
      constructor(mm, Tm, fm) {
        super(mm), this.errorCode = Tm, this.innerError = fm, this.name = "RuntimeError", hm._setPrototypeOf(this, am.prototype)
      }
    }
  },
  40154: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => em,
      g: () => Im,
      k: () => Zm,
      o: () => bm,
      r: () => cm,
      u: () => nm,
      x: () => Jm,
      A: () => Hm,
      D: () => zm,
      H: () => Km
    });
    var hm = fm(40160),
      Am = fm(39973),
      am = fm(37203);
    class xm {}
    xm.FilesToLoad = {};
    var wm = fm(40166),
      Dm = fm(40173),
      im = fm(37201),
      Rm = fm(39986),
      pm = fm(4e4),
      Em = fm(38766),
      om = fm(40008),
      Om = fm(40180);
    const Ym = new RegExp(/^data:([^,]+\/[^,]+)?;base64,/i);
    class qm extends wm.h {
      constructor(mm, Tm) {
        super(mm, wm.e.LoadFileError), this.name = "LoadFileError", wm.d._setPrototypeOf(this, qm.prototype), Tm instanceof hm.c ? this.request = Tm : this.file = Tm
      }
    }
    class jm extends wm.h {
      constructor(mm, Tm) {
        super(mm, wm.e.RequestFileError), this.request = Tm, this.name = "RequestFileError", wm.d._setPrototypeOf(this, jm.prototype)
      }
    }
    class Vm extends wm.h {
      constructor(mm, Tm) {
        super(mm, wm.e.ReadFileError), this.file = Tm, this.name = "ReadFileError", wm.d._setPrototypeOf(this, Vm.prototype)
      }
    }
    const Im = {
        DefaultRetryStrategy: class {
          static ExponentialBackoff() {
            let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
              Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            return (fm, hm, Am) => 0 !== hm.status || Am >= mm || -1 !== fm.indexOf("file:") ? -1 : Math.pow(2, Am) * Tm
          }
        }.ExponentialBackoff(),
        BaseUrl: "",
        CorsBehavior: "anonymous",
        PreprocessUrl: mm => mm,
        ScriptBaseUrl: "",
        ScriptPreprocessUrl: mm => mm,
        CleanUrl: mm => mm = mm.replace(/#/gm, "%23")
      },
      Km = (mm, Tm) => {
        if ((!mm || 0 !== mm.indexOf("data:")) && Im.CorsBehavior)
          if ("string" === typeof Im.CorsBehavior || Im.CorsBehavior instanceof String) Tm.crossOrigin = Im.CorsBehavior;
          else {
            const fm = Im.CorsBehavior(mm);
            fm && (Tm.crossOrigin = fm)
          }
      },
      Qm = {
        getRequiredSize: null
      },
      nm = function(mm, Tm, fm, Am) {
        let am, wm = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
          Rm = arguments.length > 5 ? arguments[5] : void 0,
          pm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : im.c.LastCreatedEngine;
        if ("undefined" === typeof HTMLImageElement && !pm?._features.forceBitmapOverHTMLImageElement) return fm("LoadImage is only supported in web or BabylonNative environments."), null;
        if (pm?._features.forceBitmapOverHTMLImageElement && "string" !== typeof mm && "undefined" !== typeof Blob) {
          let hm;
          if (mm instanceof Blob) hm = mm;
          else {
            const Tm = mm instanceof ArrayBuffer ? mm : (0, Om.l)(mm);
            hm = new Blob([Tm], {
              type: wm
            })
          }
          return pm.createImageBitmap(hm, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Rm
          }).then(Tm).catch((Tm => {
            fm && fm("Error while trying to load image: " + mm, Tm)
          })), null
        }
        let Em = !1;
        if (mm instanceof ArrayBuffer || ArrayBuffer.isView(mm))
          if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
            let Tm;
            Tm = mm instanceof ArrayBuffer ? mm : (0, Om.l)(mm), am = URL.createObjectURL(new Blob([Tm], {
              type: wm
            })), Em = !0
          } else am = `data:${wm};base64,` + (0, Dm.g)(mm);
        else mm instanceof Blob ? (am = URL.createObjectURL(mm), Em = !0) : (am = Im.CleanUrl(mm), am = Im.PreprocessUrl(am));
        const om = Tm => {
          if (fm) {
            const hm = am || mm.toString();
            fm(`Error while trying to load image: ${0===hm.indexOf("http")||hm.length<=128?hm:hm.slice(0,128)+"..."}`, Tm)
          }
        };
        if (pm?._features.forceBitmapOverHTMLImageElement) return cm(am, (hm => {
          pm.createImageBitmap(new Blob([hm], {
            type: wm
          }), {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none",
            ...Rm
          }).then((mm => {
            Tm(mm), Em && URL.revokeObjectURL(am)
          })).catch((Tm => {
            fm && fm("Error while trying to load image: " + mm, Tm)
          }))
        }), void 0, Am || void 0, !0, ((mm, Tm) => {
          om(Tm)
        })), null;
        const Ym = new Image;
        if (Qm.getRequiredSize) {
          const Tm = Qm.getRequiredSize(mm);
          Tm.width && (Ym.width = Tm.width), Tm.height && (Ym.height = Tm.height)
        }
        Km(am, Ym);
        const qm = [],
          jm = () => {
            for (const mm of qm) mm.target.removeEventListener(mm.name, mm.handler);
            qm.length = 0
          };
        qm.push({
          target: Ym,
          name: "load",
          handler: () => {
            jm(), Tm(Ym), Em && Ym.src && URL.revokeObjectURL(Ym.src)
          }
        }), qm.push({
          target: Ym,
          name: "error",
          handler: mm => {
            jm(), om(mm), Em && Ym.src && URL.revokeObjectURL(Ym.src)
          }
        }), qm.push({
          target: document,
          name: "securitypolicyviolation",
          handler: mm => {
            if (mm.blockedURI !== Ym.src || "IO" === mm.disposition) return;
            jm();
            const Tm = new Error(`CSP violation of policy ${mm.effectiveDirective} ${mm.blockedURI}. Current policy is ${mm.originalPolicy}`);
            im.c.UseFallbackTexture = !1, om(Tm), Em && Ym.src && URL.revokeObjectURL(Ym.src), Ym.src = ""
          }
        }), (() => {
          for (const mm of qm) mm.target.addEventListener(mm.name, mm.handler)
        })();
        const Vm = "blob:" === am.substring(0, 5),
          nm = "data:" === am.substring(0, 5),
          Jm = () => {
            Vm || nm || !hm.c.IsCustomRequestAvailable ? Ym.src = am : cm(am, ((mm, Tm, fm) => {
              const hm = new Blob([mm], {
                  type: !wm && fm ? fm : wm
                }),
                Am = URL.createObjectURL(hm);
              Em = !0, Ym.src = Am
            }), void 0, Am || void 0, !0, ((mm, Tm) => {
              om(Tm)
            }))
          },
          zm = () => {
            Am && Am.loadImage(am, Ym)
          };
        if (!Vm && !nm && Am && Am.enableTexturesOffline) Am.open(zm, Jm);
        else {
          if (-1 !== am.indexOf("file:")) {
            const mm = decodeURIComponent(am.substring(5).toLowerCase());
            if (xm.FilesToLoad[mm] && "undefined" !== typeof URL) {
              try {
                let Tm;
                try {
                  Tm = URL.createObjectURL(xm.FilesToLoad[mm])
                } catch (Zm) {
                  Tm = URL.createObjectURL(xm.FilesToLoad[mm])
                }
                Ym.src = Tm, Em = !0
              } catch (km) {
                Ym.src = ""
              }
              return Ym
            }
          }
          Jm()
        }
        return Ym
      },
      Jm = (mm, Tm, fm, hm, Am) => {
        const xm = new FileReader,
          wm = {
            onCompleteObservable: new am.c,
            abort: () => xm.abort()
          };
        return xm.onloadend = () => wm.onCompleteObservable.notifyObservers(wm), Am && (xm.onerror = () => {
          Am(new Vm(`Unable to read ${mm.name}`, mm))
        }), xm.onload = mm => {
          Tm(mm.target.result)
        }, fm && (xm.onprogress = fm), hm ? xm.readAsArrayBuffer(mm) : xm.readAsText(mm), wm
      },
      cm = (mm, Tm, fm, hm, Am, Dm, im) => {
        if (mm.name) return Jm(mm, Tm, fm, Am, Dm ? mm => {
          Dm(void 0, mm)
        } : void 0);
        const Rm = mm;
        if (-1 !== Rm.indexOf("file:")) {
          let mm = decodeURIComponent(Rm.substring(5).toLowerCase());
          0 === mm.indexOf("./") && (mm = mm.substring(2));
          const hm = xm.FilesToLoad[mm];
          if (hm) return Jm(hm, Tm, fm, Am, Dm ? mm => Dm(void 0, new qm(mm.message, mm.file)) : void 0)
        }
        const {
          match: pm,
          type: Om
        } = Sm(Rm);
        if (pm) {
          const mm = {
            onCompleteObservable: new am.c,
            abort: () => () => {}
          };
          try {
            const mm = Am ? em(Rm) : Nm(Rm);
            Tm(mm, void 0, Om)
          } catch (wm) {
            Dm ? Dm(void 0, wm) : Em.b.Error(wm.message || "Failed to parse the Data URL")
          }
          return om.c.SetImmediate((() => {
            mm.onCompleteObservable.notifyObservers(mm)
          })), mm
        }
        return zm(Rm, ((mm, fm) => {
          Tm(mm, fm?.responseURL, fm?.getResponseHeader("content-type"))
        }), fm, hm, Am, Dm ? mm => {
          Dm(mm.request, new qm(mm.message, mm.request))
        } : void 0, im)
      },
      zm = (mm, Tm, fm, xm, wm, Dm, Rm) => {
        null !== xm && (xm ?? (xm = im.c.LastCreatedScene?.offlineProvider)), mm = Im.CleanUrl(mm), mm = Im.PreprocessUrl(mm);
        const pm = Im.BaseUrl + mm;
        let om = !1;
        const Om = {
            onCompleteObservable: new am.c,
            abort: () => om = !0
          },
          Ym = () => {
            let mm, am = new hm.c,
              xm = null;
            const im = () => {
              am && (fm && am.removeEventListener("progress", fm), mm && am.removeEventListener("readystatechange", mm), am.removeEventListener("loadend", Ym))
            };
            let Ym = () => {
              im(), Om.onCompleteObservable.notifyObservers(Om), Om.onCompleteObservable.clear(), fm = void 0, mm = null, Ym = null, Dm = void 0, Rm = void 0, Tm = void 0
            };
            Om.abort = () => {
              om = !0, Ym && Ym(), am && am.readyState !== (XMLHttpRequest.DONE || 4) && am.abort(), null !== xm && (clearTimeout(xm), xm = null), am = null
            };
            const qm = mm => {
                const Tm = mm.message || "Unknown error";
                Dm && am ? Dm(new jm(Tm, am)) : Em.b.Error(Tm)
              },
              Vm = Em => {
                if (am) {
                  if (am.open("GET", pm), Rm) try {
                    Rm(am)
                  } catch (Om) {
                    return void qm(Om)
                  }
                  wm && (am.responseType = "arraybuffer"), fm && am.addEventListener("progress", fm), Ym && am.addEventListener("loadend", Ym), mm = () => {
                    if (!om && am && am.readyState === (XMLHttpRequest.DONE || 4)) {
                      if (mm && am.removeEventListener("readystatechange", mm), am.status >= 200 && am.status < 300 || 0 === am.status && (!(0, Am.p)() || km())) {
                        const mm = wm ? am.response : am.responseText;
                        if (null !== mm) {
                          try {
                            Tm && Tm(mm, am)
                          } catch (Om) {
                            qm(Om)
                          }
                          return
                        }
                      }
                      const fm = Im.DefaultRetryStrategy;
                      if (fm) {
                        const mm = fm(pm, am, Em);
                        if (-1 !== mm) return im(), am = new hm.c, void(xm = setTimeout((() => Vm(Em + 1)), mm))
                      }
                      const Rm = new jm("Error status: " + am.status + " " + am.statusText + " - Unable to load " + pm, am);
                      Dm && Dm(Rm)
                    }
                  }, am.addEventListener("readystatechange", mm), am.send()
                }
              };
            Vm(0)
          };
        if (xm && xm.enableSceneOffline && !mm.startsWith("blob:")) {
          const hm = mm => {
              mm && mm.status > 400 ? Dm && Dm(mm) : Ym()
            },
            Am = () => {
              xm && xm.loadFile(Im.BaseUrl + mm, (mm => {
                !om && Tm && Tm(mm), Om.onCompleteObservable.notifyObservers(Om)
              }), fm ? mm => {
                !om && fm && fm(mm)
              } : void 0, hm, wm)
            };
          xm.open(Am, hm)
        } else Ym();
        return Om
      },
      Zm = mm => {
        const {
          match: Tm,
          type: fm
        } = Sm(mm);
        if (Tm) return fm || void 0;
        const hm = mm.lastIndexOf(".");
        switch (mm.substring(hm + 1).toLowerCase()) {
          case "glb":
            return "model/gltf-binary";
          case "bin":
            return "application/octet-stream";
          case "FN":
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
      km = () => "undefined" !== typeof location && "file:" === location.protocol,
      bm = mm => Ym.test(mm),
      Sm = mm => {
        const Tm = Ym.exec(mm);
        if (null === Tm || 0 === Tm.length) return {
          match: !1,
          type: ""
        };
        return {
          match: !0,
          type: Tm[0].replace("data:", "").replace(";base64,", "")
        }
      };

    function em(mm) {
      return (0, Dm.b)(mm.split(",")[1])
    }
    const Nm = mm => (0, Dm.f)(mm.split(",")[1]);
    let Gm;
    const Xm = (mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) => {
      Gm = {
        DecodeBase64UrlToBinary: mm,
        DecodeBase64UrlToString: Tm,
        DefaultRetryStrategy: fm.DefaultRetryStrategy,
        BaseUrl: fm.BaseUrl,
        CorsBehavior: fm.CorsBehavior,
        PreprocessUrl: fm.PreprocessUrl,
        IsBase64DataUrl: hm,
        IsFileURL: Am,
        LoadFile: am,
        LoadImage: xm,
        ReadFile: wm,
        RequestFile: Dm,
        SetCorsBehavior: im
      }, Object.defineProperty(Gm, "DefaultRetryStrategy", {
        get: function() {
          return fm.DefaultRetryStrategy
        },
        set: function(mm) {
          fm.DefaultRetryStrategy = mm
        }
      }), Object.defineProperty(Gm, "BaseUrl", {
        get: function() {
          return fm.BaseUrl
        },
        set: function(mm) {
          fm.BaseUrl = mm
        }
      }), Object.defineProperty(Gm, "PreprocessUrl", {
        get: function() {
          return fm.PreprocessUrl
        },
        set: function(mm) {
          fm.PreprocessUrl = mm
        }
      }), Object.defineProperty(Gm, "CorsBehavior", {
        get: function() {
          return fm.CorsBehavior
        },
        set: function(mm) {
          fm.CorsBehavior = mm
        }
      })
    };
    let Pm = !1;

    function Hm() {
      Pm || (Pm = !0, Xm(em, Nm, Im, bm, km, cm, nm, Jm, zm, Km), Rm.c.loadFile = cm, Rm.c.loadImage = nm, pm.l.loadFile = cm)
    }
  },
  40186: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => wm,
      h: () => am,
      j: () => xm
    });
    let hm = null;

    function Am() {
      if (hm) return hm;
      const mm = new ArrayBuffer(4),
        Tm = new Float32Array(mm),
        fm = new Uint32Array(mm),
        Am = new Uint32Array(512),
        am = new Uint32Array(512);
      for (let hm = 0; hm < 256; ++hm) {
        const mm = hm - 127;
        mm < -24 ? (Am[hm] = 0, Am[256 | hm] = 32768, am[hm] = 24, am[256 | hm] = 24) : mm < -14 ? (Am[hm] = 1024 >> -mm - 14, Am[256 | hm] = 1024 >> -mm - 14 | 32768, am[hm] = -mm - 1, am[256 | hm] = -mm - 1) : mm <= 15 ? (Am[hm] = mm + 15 << 10, Am[256 | hm] = mm + 15 << 10 | 32768, am[hm] = 13, am[256 | hm] = 13) : mm < 128 ? (Am[hm] = 31744, Am[256 | hm] = 64512, am[hm] = 24, am[256 | hm] = 24) : (Am[hm] = 31744, Am[256 | hm] = 64512, am[hm] = 13, am[256 | hm] = 13)
      }
      const xm = new Uint32Array(2048),
        wm = new Uint32Array(64),
        Dm = new Uint32Array(64);
      for (let hm = 1; hm < 1024; ++hm) {
        let mm = hm << 13,
          Tm = 0;
        for (; 0 === (8388608 & mm);) mm <<= 1, Tm -= 8388608;
        mm &= -8388609, Tm += 947912704, xm[hm] = mm | Tm
      }
      for (let hm = 1024; hm < 2048; ++hm) xm[hm] = 939524096 + (hm - 1024 << 13);
      for (let hm = 1; hm < 31; ++hm) wm[hm] = hm << 23;
      wm[31] = 1199570944, wm[32] = 2147483648;
      for (let hm = 33; hm < 63; ++hm) wm[hm] = 2147483648 + (hm - 32 << 23);
      wm[63] = 3347054592;
      for (let hm = 1; hm < 64; ++hm) 32 !== hm && (Dm[hm] = 1024);
      return hm = {
        floatView: Tm,
        uint32View: fm,
        baseTable: Am,
        shiftTable: am,
        mantissaTable: xm,
        exponentTable: wm,
        offsetTable: Dm
      }, hm
    }
    const am = 65504;

    function xm(mm) {
      const Tm = Am();
      Tm.floatView[0] = mm;
      const fm = Tm.uint32View[0],
        hm = fm >> 23 & 511;
      return Tm.baseTable[hm] + ((8388607 & fm) >> Tm.shiftTable[hm])
    }

    function wm(mm) {
      const Tm = Am();
      return Tm.uint32View[0] = Tm.mantissaTable[Tm.offsetTable[mm >> 10] + (1023 & mm)] + Tm.exponentTable[mm >> 10], Tm.floatView[0]
    }
  },
  40173: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am,
      f: () => Am,
      g: () => hm
    });
    const hm = mm => {
        const Tm = ArrayBuffer.isView(mm) ? new Uint8Array(mm.buffer, mm.byteOffset, mm.byteLength) : new Uint8Array(mm);
        return "function" === typeof Tm.toBase64 ? Tm.toBase64() : function(mm) {
          const Tm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let fm, hm, Am, am, xm, wm, Dm, im = "",
            Rm = 0;
          for (; Rm < mm.length;) fm = mm[Rm++], hm = Rm < mm.length ? mm[Rm++] : Number.NaN, Am = Rm < mm.length ? mm[Rm++] : Number.NaN, am = fm >> 2, xm = (3 & fm) << 4 | hm >> 4, wm = (15 & hm) << 2 | Am >> 6, Dm = 63 & Am, isNaN(hm) ? wm = Dm = 64 : isNaN(Am) && (Dm = 64), im += Tm.charAt(am) + Tm.charAt(xm) + Tm.charAt(wm) + Tm.charAt(Dm);
          return im
        }(Tm)
      },
      Am = mm => atob(mm),
      am = mm => "function" === typeof Uint8Array.fromBase64 ? Uint8Array.fromBase64(mm).buffer : function(mm) {
        const Tm = Am(mm),
          fm = Tm.length,
          hm = new Uint8Array(new ArrayBuffer(fm));
        for (let Am = 0; Am < fm; Am++) hm[Am] = Tm.charCodeAt(Am);
        return hm.buffer
      }(mm)
  },
  40008: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      f: () => xm
    });
    let hm = [];
    class Am {
      static SetImmediate(mm) {
        0 === hm.length && setTimeout((() => {
          const mm = hm;
          hm = [];
          for (const Tm of mm) Tm()
        }), 1), hm.push(mm)
      }
    }

    function am(mm, Tm, fm) {
      try {
        if (mm()) return Tm(), !0
      } catch (hm) {
        return fm?.(hm), !0
      }
      return !1
    }
    const xm = function(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
        Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
        xm = arguments.length > 6 ? arguments[6] : void 0;
      if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && am(mm, Tm, fm)) return null;
      const wm = setInterval((() => {
        am(mm, Tm, fm) ? clearInterval(wm) : (Am -= hm, Am < 0 && (clearInterval(wm), fm?.(new Error("Operation timed out after maximum retries. " + (xm || "")), !0)))
      }), hm);
      return () => clearInterval(wm)
    }
  },
  40160: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm
    });
    class hm {
      constructor() {
        this._xhr = "undefined" !== typeof _native && _native.XMLHttpRequest ? new _native.XMLHttpRequest : new XMLHttpRequest, this._requestURL = ""
      }
      static get IsCustomRequestAvailable() {
        return Object.keys(hm.CustomRequestHeaders).length > 0 || hm.CustomRequestModifiers.length > 0
      }
      static _CleanUrl(mm) {
        return mm = (mm = mm.replace("file:http:", "http:")).replace("file:https:", "https:")
      }
      static _ShouldSkipRequestModifications(mm) {
        return hm.SkipRequestModificationForBabylonCDN && (mm.includes("preview.babylonjs.com") || mm.includes("cdn.babylonjs.com"))
      }
      static _CollectCustomizations(mm) {
        const Tm = {
          ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        };
        if (hm._ShouldSkipRequestModifications(mm)) return {
          url: mm,
          headers: Tm
        };
        for (const Am in hm.CustomRequestHeaders) {
          const mm = hm.CustomRequestHeaders[Am];
          mm && (Tm[Am] = mm)
        }
        const fm = {
          setRequestHeader: (mm, fm) => {
            Tm[mm] = fm
          }
        };
        for (const Am of hm.CustomRequestModifiers) {
          if (hm._ShouldSkipRequestModifications(mm)) break;
          const Tm = Am(fm, mm);
          "string" === typeof Tm && (mm = Tm)
        }
        return {
          url: mm,
          headers: Tm
        }
      }
      static async FetchAsync(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const fm = Tm.method ?? "GET";
        if ("undefined" !== typeof fetch) {
          const {
            url: Am,
            headers: am
          } = hm._CollectCustomizations(hm._CleanUrl(mm), Tm.headers ?? {});
          return await fetch(Am, {
            method: fm,
            headers: am,
            body: Tm.body ?? void 0
          })
        }
        return await new Promise(((Am, am) => {
          const xm = new hm;
          xm.responseType = "arraybuffer", xm.addEventListener("readystatechange", (() => {
            if (4 === xm.readyState)
              if (xm.status >= 200 && xm.status < 300) {
                const mm = "undefined" !== typeof Headers ? new Headers : void 0,
                  Tm = xm.getResponseHeader("Content-Type");
                Tm && mm && mm.set("Content-Type", Tm), "undefined" !== typeof Response ? Am(new Response(xm.response, {
                  status: xm.status,
                  statusText: xm.statusText,
                  headers: mm
                })) : Am({
                  ok: !0,
                  status: xm.status,
                  statusText: xm.statusText,
                  headers: {
                    get: mm => xm.getResponseHeader(mm)
                  },
                  arrayBuffer: async () => await Promise.resolve(xm.response)
                })
              } else am(new Error(`HTTP ${xm.status} loading '${xm.requestURL}': ${xm.statusText}`))
          })), xm.open(fm, mm, Tm.headers), xm.send(Tm.body ?? null)
        }))
      }
      get requestURL() {
        return this._requestURL
      }
      get onprogress() {
        return this._xhr.onprogress
      }
      set onprogress(mm) {
        this._xhr.onprogress = mm
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
      set responseType(mm) {
        this._xhr.responseType = mm
      }
      get timeout() {
        return this._xhr.timeout
      }
      set timeout(mm) {
        this._xhr.timeout = mm
      }
      addEventListener(mm, Tm, fm) {
        this._xhr.addEventListener(mm, Tm, fm)
      }
      removeEventListener(mm, Tm, fm) {
        this._xhr.removeEventListener(mm, Tm, fm)
      }
      abort() {
        this._xhr.abort()
      }
      send(mm) {
        this._xhr.send(mm)
      }
      open(mm, Tm, fm) {
        const {
          url: Am,
          headers: am
        } = hm._CollectCustomizations(Tm, fm);
        this._requestURL = hm._CleanUrl(Am), this._xhr.open(mm, this._requestURL, !0);
        for (const hm in am) this._xhr.setRequestHeader(hm, am[hm])
      }
      setRequestHeader(mm, Tm) {
        this._xhr.setRequestHeader(mm, Tm)
      }
      getResponseHeader(mm) {
        return this._xhr.getResponseHeader(mm)
      }
    }
    hm.CustomRequestHeaders = {}, hm.CustomRequestModifiers = new Array, hm.SkipRequestModificationForBabylonCDN = !0
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);