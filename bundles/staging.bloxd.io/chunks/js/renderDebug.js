export const id = 44;
export const ids = [44];
export const modules = {
  4105: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => YJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(1184),
      XJ = ZJ(2610);
    const AJ = 3e4,
      qJ = 1e3;

    function jJ() {
      return "visible" === document.visibilityState && "inGame" === FJ.d.get("gameState") && (0, eJ.j)()
    }

    function YJ(JJ, cJ) {
      ! function(JJ, cJ, ZJ) {
        let FJ = 0;
        const UJ = setInterval((() => {
          cJ() && (FJ += qJ, FJ >= JJ && (clearInterval(UJ), ZJ()))
        }), qJ)
      }(AJ, jJ, (() => {
        cJ().then((() => {
          JJ(`saved for the player after ${AJ/1e3} s of play`), (0, XJ.x)(), UJ.i.Uf("chat", {
            content: [{
              str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
              style: {
                color: "#ffd84a"
              }
            }]
          })
        }))
      }))
    }
  },
  4098: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      installRenderDebug: () => AZ,
      renderDebugPlayable: () => jZ,
      startRenderDebug: () => qZ,
      waitForDraw: () => YZ
    });
    var FJ = ZJ(4064),
      UJ = ZJ(4105),
      eJ = ZJ(2610);
    const XJ = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function AJ(JJ) {
      return 7 & JJ
    }

    function qJ(JJ) {
      return JJ >>> 11 & 1
    }

    function jJ(JJ) {
      return [1 + (JJ >>> 18 & 63), 1 + (JJ >>> 24 & 63)]
    }

    function YJ(JJ, cJ) {
      const [ZJ, , FJ] = JJ, UJ = AJ(FJ), eJ = function(JJ, cJ, ZJ) {
        return cJ + (1 === (22 >>> JJ & 1) ? 4 - ZJ : ZJ) & 3
      }(UJ, qJ(FJ), cJ), XJ = UJ >>> 1, [YJ, hJ] = jJ(ZJ), DJ = 1 === eJ || 2 === eJ ? YJ : 0, sJ = eJ >= 2 ? hJ : 0, nJ = [63 & ZJ, ZJ >>> 6 & 63, ZJ >>> 12 & 63];
      return nJ[2 === XJ ? 0 : 2] += DJ, nJ[1 === XJ ? 0 : 1] += sJ, nJ
    }

    function hJ(JJ) {
      const cJ = Math.max(...jJ(JJ[0]));
      return 1 === cJ ? "1" : cJ <= 4 ? "2-4" : cJ <= 16 ? "5-16" : "17-64"
    }
    const DJ = 16;

    function sJ(JJ) {
      let cJ = 2166136261;
      for (let ZJ = 0; ZJ < JJ.length; ZJ++) cJ = Math.imul(cJ ^ JJ[ZJ], 16777619);
      return cJ >>> 0
    }

    function nJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const FJ = Math.max(0, cJ - ZJ),
        UJ = Math.min(JJ.length, cJ + ZJ),
        eJ = [];
      for (let XJ = FJ; XJ < UJ; XJ++) {
        const ZJ = JJ[XJ].toString(16).padStart(2, "0");
        eJ.push(XJ === cJ ? `[${ZJ}]` : ZJ)
      }
      return eJ.join(" ")
    }
    const GJ = {
        NO_ERROR: 0,
        POINTS: 0,
        ARRAY_BUFFER: 34962,
        ELEMENT_ARRAY_BUFFER: 34963,
        ARRAY_BUFFER_BINDING: 34964,
        ELEMENT_ARRAY_BUFFER_BINDING: 34965,
        COPY_READ_BUFFER: 36662,
        COPY_WRITE_BUFFER: 36663,
        COPY_READ_BUFFER_BINDING: 36662,
        COPY_WRITE_BUFFER_BINDING: 36663,
        UNIFORM_BUFFER: 35345,
        UNIFORM_BUFFER_BINDING: 35368,
        PIXEL_UNPACK_BUFFER: 35052,
        PIXEL_UNPACK_BUFFER_BINDING: 35055,
        TRANSFORM_FEEDBACK_BUFFER: 35982,
        TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,
        TRANSFORM_FEEDBACK: 36386,
        TRANSFORM_FEEDBACK_BINDING: 36389,
        INTERLEAVED_ATTRIBS: 35980,
        RASTERIZER_DISCARD: 35977,
        STREAM_READ: 35041,
        CURRENT_PROGRAM: 35725,
        LINK_STATUS: 35714,
        VERTEX_SHADER: 35633,
        FRAGMENT_SHADER: 35632,
        DEPTH_FUNC: 2932,
        DEPTH_CLEAR_VALUE: 2931,
        SAMPLES: 32937,
        DRAW_FRAMEBUFFER: 36009,
        DEPTH_ATTACHMENT: 36096,
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
        FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,
        DRAW_FRAMEBUFFER_BINDING: 36006,
        ACTIVE_UNIFORMS: 35718,
        ACTIVE_UNIFORM_BLOCKS: 35382,
        UNIFORM_BLOCK_BINDING: 35391,
        UNIFORM_BLOCK_INDEX: 35386,
        INVALID_INDEX: 4294967295,
        MAX_VERTEX_ATTRIBS: 34921,
        VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
        VERTEX_ATTRIB_ARRAY_SIZE: 34339,
        VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
        VERTEX_ATTRIB_ARRAY_TYPE: 34341,
        VERTEX_ATTRIB_ARRAY_POINTER: 34373,
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
        VERTEX_ATTRIB_ARRAY_INTEGER: 35069,
        VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,
        CURRENT_VERTEX_ATTRIB: 34342,
        TEXTURE_2D: 3553,
        TEXTURE0: 33984,
        ACTIVE_TEXTURE: 34016,
        TEXTURE_BINDING_2D: 32873,
        READ_FRAMEBUFFER: 36008,
        READ_FRAMEBUFFER_BINDING: 36010,
        COLOR_ATTACHMENT0: 36064,
        RGBA_INTEGER: 36249,
        UNSIGNED_INT: 5125,
        RGBA32UI: 36208,
        RGBA16UI: 36214,
        UNSIGNED_INT_SAMPLER_2D: 36306,
        UNPACK_ROW_LENGTH: 3314,
        UNPACK_SKIP_ROWS: 3315,
        UNPACK_SKIP_PIXELS: 3316,
        FLOAT: 5126,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        INT_VEC2: 35667,
        INT_VEC3: 35668,
        INT_VEC4: 35669,
        UNSIGNED_INT_VEC2: 36294,
        UNSIGNED_INT_VEC3: 36295,
        UNSIGNED_INT_VEC4: 36296,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676
      },
      fJ = "_vs2fs_location0",
      xJ = 0,
      rJ = 4,
      vJ = 6,
      mJ = [0, 1, 2, 0, 2, 3],
      QJ = 2048,
      EJ = 4,
      VJ = 256,
      KJ = 64,
      yJ = 268435456,
      SJ = 65536,
      IJ = /^#version [^\n]*\/\/ program (\S+)$/m;

    function MJ(JJ) {
      return null === JJ.name ? `#${JJ.id}` : `#${JJ.id} ${JJ.name}`
    }
    const bJ = [],
      wJ = new WeakMap,
      WJ = new WeakMap,
      gJ = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let HJ = 1;
    const PJ = new WeakMap;

    function kJ(JJ) {
      if (null === JJ) return 0;
      let cJ = PJ.get(JJ);
      return void 0 === cJ && (cJ = HJ++, PJ.set(JJ, cJ)), cJ
    }
    class pJ {
      constructor(JJ, cJ) {
        this.print = JJ, this.now = cJ, this.shown = 0, this.hj = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.ys = [], this.dropped = 0
      }
      line(JJ) {
        const cJ = this.now();
        if (cJ - this.second >= 1e3 && (this.second = cJ, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.hj++, void this.store(JJ);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${JJ} (the last line here: the rest go to bloxdDebug.save())` : JJ)
      }
      keep(JJ) {
        this.sections++, this.store(JJ)
      }
      store(JJ) {
        this.ys.push(`${new Date(Date.now()).toISOString()} ${JJ}`), this.ys.length > 2e4 && (this.ys.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.hj} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.ys].join("\n")
      }
    }
    let dJ = null;

    function zJ() {
      if (null === dJ) {
        const JJ = new pJ((JJ => {
          (0, eJ.j)("render", JJ)
        }), (() => performance.now()));
        (0, eJ.h)("render", (() => JJ.dump())), dJ = JJ
      }
      return dJ
    }

    function NJ(JJ) {
      zJ().line(JJ)
    }

    function OJ(JJ) {
      zJ().keep(JJ)
    }

    function TJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return JJ.length <= cJ ? JJ : `${JJ.slice(0,cJ)}... (${JJ.length-cJ} more characters)`
    }

    function CJ(JJ, cJ, ZJ, FJ, UJ, eJ) {
      const XJ = gJ.pendingCheck;
      if (null === XJ) return;
      const AJ = "undefined" !== typeof WebGL2RenderingContext && JJ instanceof WebGL2RenderingContext,
        qJ = {
          gl: JJ,
          program: ZJ,
          call: FJ,
          ws: UJ,
          instances: eJ,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (XJ.draws.push(qJ), AJ) try {
        const FJ = function(JJ) {
          const cJ = [],
            ZJ = new Map,
            FJ = Math.min(16, JJ.getParameter(GJ.MAX_VERTEX_ATTRIBS));
          for (let UJ = 0; UJ < FJ; UJ++) {
            if (!JJ.getVertexAttrib(UJ, GJ.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const FJ = JJ.getVertexAttrib(UJ, GJ.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              eJ = JJ.getVertexAttribOffset(UJ, GJ.VERTEX_ATTRIB_ARRAY_POINTER),
              XJ = JJ.getVertexAttrib(UJ, GJ.VERTEX_ATTRIB_ARRAY_STRIDE),
              AJ = JJ.getVertexAttrib(UJ, GJ.VERTEX_ATTRIB_ARRAY_SIZE),
              qJ = JJ.getVertexAttrib(UJ, GJ.VERTEX_ATTRIB_ARRAY_TYPE),
              jJ = "VERTEX_ATTRIB_ARRAY_INTEGER" in JJ && JJ.getVertexAttrib(UJ, GJ.VERTEX_ATTRIB_ARRAY_INTEGER),
              YJ = "VERTEX_ATTRIB_ARRAY_DIVISOR" in JJ ? JJ.getVertexAttrib(UJ, GJ.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            ZJ.set(UJ, {
              buffer: FJ,
              offset: eJ,
              stride: XJ
            }), cJ.push(`@${UJ} buf#${kJ(FJ)} +${eJ} stride ${XJ} ${AJ}x0x${qJ.toString(16)}${jJ?" int":""} div ${YJ}`)
          }
          return {
            lines: cJ,
            byLocation: ZJ
          }
        }(JJ);
        if (qJ.attributes = FJ.lines, "inst" === ZJ.terrain) {
          const {
            group: UJ,
            chunk: AJ
          } = function(JJ, cJ, ZJ) {
            const FJ = cJ.get(vJ),
              UJ = JJ.getVertexAttrib(vJ, GJ.CURRENT_VERTEX_ATTRIB),
              eJ = FJ ? `+${FJ.offset}` : UJ ? Array.from(UJ).slice(0, 3).join(",") : "?";
            let XJ = ZJ.groups.get(eJ);
            return void 0 === XJ && (XJ = ZJ.groups.size, ZJ.groups.set(eJ, XJ)), {
              group: XJ,
              chunk: eJ
            }
          }(JJ, FJ.byLocation, XJ);
          qJ.group = UJ, qJ.chunk = AJ;
          for (const JJ of [xJ, rJ]) {
            var jJ;
            const cJ = null === (jJ = FJ.byLocation.get(JJ)) || void 0 === jJ ? void 0 : jJ.buffer;
            cJ && qJ.pages.push({
              kind: "buf",
              buffer: cJ
            })
          }! function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
            const AJ = FJ.get(xJ),
              qJ = XJ.parts.get(eJ);
            if (void 0 === qJ && XJ.parts.size >= EJ) return;
            const jJ = Math.min(UJ, KJ, VJ - (null !== qJ && void 0 !== qJ ? qJ : 0));
            if (null === AJ || void 0 === AJ || !AJ.buffer || jJ <= 0) return;
            const YJ = uJ(JJ, cJ, ZJ);
            if (!YJ) return;
            const hJ = AJ.stride || 12,
              DJ = BJ(JJ, AJ.buffer, AJ.offset, (jJ - 1) * hJ + 12),
              sJ = new DataView(DJ.buffer),
              nJ = function(JJ, cJ) {
                const ZJ = function(JJ) {
                    const cJ = lJ.get(JJ);
                    if (void 0 !== cJ && (null === cJ || JJ.isProgram(cJ))) return cJ;
                    gJ.inProbe = !0;
                    let ZJ = null;
                    try {
                      ZJ = iJ(JJ, tJ, oJ, "fed", "the record feed")
                    } finally {
                      gJ.inProbe = !1
                    }
                    return lJ.set(JJ, ZJ), ZJ
                  }(JJ),
                  FJ = ZJ ? aJ(JJ, ZJ, cJ, (() => {
                    JJ.drawArraysInstanced(GJ.POINTS, 0, 1, cJ)
                  }), "decode probe input (the record feed)") : null;
                return FJ ? new Uint32Array(FJ.buffer) : null
              }(JJ, jJ);
            nJ || XJ.fed.failed++;
            const fJ = aJ(JJ, YJ, 4 * jJ, (() => {
              JJ.drawArraysInstanced(GJ.POINTS, 0, 4, jJ)
            }));
            if (!fJ) return;
            XJ.parts.set(eJ, (null !== qJ && void 0 !== qJ ? qJ : 0) + jJ);
            for (let GJ = 0; GJ < jJ; GJ++) {
              const JJ = GJ * hJ,
                cJ = [sJ.getUint32(JJ, !0), sJ.getUint32(JJ + 4, !0), sJ.getUint32(JJ + 8, !0)],
                ZJ = nJ ? [nJ[3 * GJ], nJ[3 * GJ + 1], nJ[3 * GJ + 2]] : cJ;
              nJ && (XJ.fed.records++, ZJ.some(((JJ, ZJ) => JJ !== cJ[ZJ])) && (XJ.fed.differing++, XJ.fed.first.length < 8 && XJ.fed.first.push(`part ${eJ} instance ${GJ}: fed ${ZJ.map(Uc).join(" ")} buffer ${cJ.map(Uc).join(" ")}`)));
              for (let FJ = 0; FJ < 4; FJ++) {
                const JJ = 3 * (4 * GJ + FJ);
                XJ.vertices.push({
                  record: ZJ,
                  slot: FJ,
                  group: eJ,
                  gpu: [fJ[JJ], fJ[JJ + 1], fJ[JJ + 2]]
                })
              }
            }
          }(JJ, cJ, ZJ, FJ.byLocation, eJ, UJ, XJ)
        } else {
          const FJ = Jc(JJ, cJ, 16),
            eJ = Jc(JJ, cJ, 8);
          for (const JJ of [FJ, eJ]) JJ && qJ.pages.push({
            kind: "tex",
            texture: JJ
          });
          FJ && function(JJ, cJ, ZJ, FJ, UJ, eJ) {
            if (eJ.parts.size >= EJ) return;
            const XJ = uJ(JJ, cJ, ZJ);
            if (!XJ) return;
            let AJ = 6 * VJ;
            const qJ = [];
            for (const [sJ, nJ] of UJ) {
              const JJ = Math.min(nJ, AJ, Math.max(6, 6 * Math.floor(VJ / UJ.length)));
              JJ > 0 && (qJ.push([sJ, JJ]), AJ -= JJ)
            }
            const jJ = qJ.reduce(((JJ, cJ) => {
                let [, ZJ] = cJ;
                return JJ + ZJ
              }), 0),
              YJ = aJ(JJ, XJ, jJ, (() => {
                for (const [cJ, ZJ] of qJ) JJ.drawArrays(GJ.POINTS, cJ, ZJ)
              }));
            if (!YJ) return;
            let hJ = 0;
            for (const [sJ, nJ] of qJ) {
              const cJ = Math.floor(sJ / 6),
                ZJ = Math.floor((sJ + nJ - 1) / 6) - cJ + 1,
                UJ = cc(JJ, FJ, QJ, cJ, ZJ);
              for (let JJ = sJ; JJ < sJ + nJ; JJ++, hJ++) {
                var DJ;
                const ZJ = 4 * (Math.floor(JJ / 6) - cJ),
                  FJ = [UJ[ZJ], UJ[ZJ + 1], UJ[ZJ + 2]];
                eJ.parts.set(UJ[ZJ + 3], (null !== (DJ = eJ.parts.get(UJ[ZJ + 3])) && void 0 !== DJ ? DJ : 0) + (JJ % 6 === 0 ? 1 : 0)), eJ.vertices.push({
                  record: FJ,
                  slot: mJ[JJ % 6],
                  group: UJ[ZJ + 3],
                  gpu: [YJ[3 * hJ], YJ[3 * hJ + 1], YJ[3 * hJ + 2]]
                })
              }
            }
          }(JJ, cJ, ZJ, FJ, UJ, XJ)
        }
      } catch (YJ) {
        NJ(`decode probe failed on program ${MJ(ZJ)}: ${String(YJ)}`)
      }
    }

    function uJ(JJ, cJ, ZJ) {
      if (void 0 !== ZJ.probe) return ZJ.probe && RJ(JJ, cJ, ZJ.probe), ZJ.probe;
      ZJ.probe = null, gJ.inProbe = !0;
      try {
        ZJ.probe = function(JJ, cJ) {
          return iJ(JJ, cJ.vertex, cJ.fragment, fJ, `program ${MJ(cJ)}'s twin`)
        }(JJ, ZJ)
      } finally {
        gJ.inProbe = !1
      }
      return ZJ.probe && RJ(JJ, cJ, ZJ.probe), ZJ.probe
    }

    function iJ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = [JJ.createShader(GJ.VERTEX_SHADER), JJ.createShader(GJ.FRAGMENT_SHADER)],
        XJ = JJ.createProgram();
      if (!XJ || !eJ[0] || !eJ[1]) return null;
      JJ.shaderSource(eJ[0], cJ), JJ.shaderSource(eJ[1], ZJ);
      for (const qJ of eJ) JJ.compileShader(qJ), JJ.attachShader(XJ, qJ);
      JJ.transformFeedbackVaryings(XJ, [FJ], GJ.INTERLEAVED_ATTRIBS), JJ.linkProgram(XJ);
      for (const qJ of eJ) JJ.deleteShader(qJ);
      var AJ;
      return JJ.getProgramParameter(XJ, GJ.LINK_STATUS) ? XJ : (NJ(`decode probe: ${UJ} failed to link: ${TJ(null!==(AJ=JJ.getProgramInfoLog(XJ))&&void 0!==AJ?AJ:"",300)}`), JJ.deleteProgram(XJ), null)
    }

    function RJ(JJ, cJ, ZJ) {
      const FJ = JJ.getProgramParameter(cJ, GJ.ACTIVE_UNIFORM_BLOCKS);
      for (let AJ = 0; AJ < FJ; AJ++) {
        const FJ = JJ.getActiveUniformBlockName(cJ, AJ),
          UJ = null === FJ ? GJ.INVALID_INDEX : JJ.getUniformBlockIndex(ZJ, FJ);
        UJ !== GJ.INVALID_INDEX && JJ.uniformBlockBinding(ZJ, UJ, JJ.getActiveUniformBlockParameter(cJ, AJ, GJ.UNIFORM_BLOCK_BINDING))
      }
      const UJ = JJ.getParameter(GJ.CURRENT_PROGRAM);
      JJ.useProgram(ZJ);
      const eJ = JJ.getProgramParameter(cJ, GJ.ACTIVE_UNIFORMS),
        XJ = JJ.getActiveUniforms(cJ, [...Array(eJ).keys()], GJ.UNIFORM_BLOCK_INDEX);
      for (let AJ = 0; AJ < eJ; AJ++) {
        const FJ = JJ.getActiveUniform(cJ, AJ);
        if (!FJ || -1 !== XJ[AJ]) continue;
        const UJ = FJ.name.replace(/\[0\]$/, "");
        for (let eJ = 0; eJ < FJ.size; eJ++) {
          const XJ = FJ.size > 1 ? `${UJ}[${eJ}]` : FJ.name,
            AJ = JJ.getUniformLocation(cJ, XJ),
            qJ = JJ.getUniformLocation(ZJ, XJ);
          AJ && qJ && LJ(JJ, qJ, FJ.type, JJ.getUniform(cJ, AJ))
        }
      }
      JJ.useProgram(UJ)
    }

    function LJ(JJ, cJ, ZJ, FJ) {
      const UJ = ArrayBuffer.isView(FJ) ? Array.from(FJ) : [Number(FJ)];
      switch (ZJ) {
        case GJ.FLOAT:
          return void JJ.uniform1f(cJ, UJ[0]);
        case GJ.FLOAT_VEC2:
          return void JJ.uniform2fv(cJ, UJ);
        case GJ.FLOAT_VEC3:
          return void JJ.uniform3fv(cJ, UJ);
        case GJ.FLOAT_VEC4:
          return void JJ.uniform4fv(cJ, UJ);
        case GJ.FLOAT_MAT3:
          return void JJ.uniformMatrix3fv(cJ, !1, UJ);
        case GJ.FLOAT_MAT4:
          return void JJ.uniformMatrix4fv(cJ, !1, UJ);
        case GJ.UNSIGNED_INT:
          return void JJ.uniform1ui(cJ, UJ[0]);
        case GJ.UNSIGNED_INT_VEC2:
          return void JJ.uniform2uiv(cJ, UJ);
        case GJ.UNSIGNED_INT_VEC3:
          return void JJ.uniform3uiv(cJ, UJ);
        case GJ.UNSIGNED_INT_VEC4:
          return void JJ.uniform4uiv(cJ, UJ);
        case GJ.INT_VEC2:
          return void JJ.uniform2iv(cJ, UJ);
        case GJ.INT_VEC3:
          return void JJ.uniform3iv(cJ, UJ);
        case GJ.INT_VEC4:
          return void JJ.uniform4iv(cJ, UJ);
        default:
          JJ.uniform1i(cJ, UJ[0])
      }
    }

    function aJ(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const eJ = JJ.getParameter(GJ.CURRENT_PROGRAM),
        XJ = JJ.getParameter(GJ.TRANSFORM_FEEDBACK_BINDING),
        AJ = JJ.getParameter(GJ.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        qJ = JJ.getParameter(GJ.COPY_READ_BUFFER_BINDING),
        jJ = JJ.isEnabled(GJ.RASTERIZER_DISCARD),
        YJ = JJ.createTransformFeedback(),
        hJ = JJ.createBuffer();
      gJ.inProbe = !0;
      try {
        const eJ = JJ.getError();
        eJ !== GJ.NO_ERROR && NJ(`GL error 0x${eJ.toString(16)} pending before the decode probe (the renderer's)`), JJ.useProgram(cJ), JJ.bindTransformFeedback(GJ.TRANSFORM_FEEDBACK, YJ), JJ.bindBuffer(GJ.TRANSFORM_FEEDBACK_BUFFER, hJ), JJ.bufferData(GJ.TRANSFORM_FEEDBACK_BUFFER, 12 * ZJ, GJ.STREAM_READ), JJ.bindBufferBase(GJ.TRANSFORM_FEEDBACK_BUFFER, 0, hJ), JJ.enable(GJ.RASTERIZER_DISCARD), JJ.beginTransformFeedback(GJ.POINTS), FJ(), JJ.endTransformFeedback(), JJ.bindBufferBase(GJ.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const XJ = JJ.getError();
        if (XJ !== GJ.NO_ERROR) return NJ(`${UJ}: GL error 0x${XJ.toString(16)} on the feedback draw`), null;
        const AJ = new Float32Array(3 * ZJ);
        return JJ.bindBuffer(GJ.COPY_READ_BUFFER, hJ), JJ.getBufferSubData(GJ.COPY_READ_BUFFER, 0, AJ), AJ
      } finally {
        jJ || JJ.disable(GJ.RASTERIZER_DISCARD), JJ.bindTransformFeedback(GJ.TRANSFORM_FEEDBACK, XJ), JJ.bindBuffer(GJ.TRANSFORM_FEEDBACK_BUFFER, AJ), JJ.bindBuffer(GJ.COPY_READ_BUFFER, qJ), JJ.deleteTransformFeedback(YJ), JJ.deleteBuffer(hJ), JJ.useProgram(eJ), gJ.inProbe = !1
      }
    }

    function BJ(JJ, cJ, ZJ, FJ) {
      const UJ = JJ.getParameter(GJ.COPY_READ_BUFFER_BINDING),
        eJ = new Uint8Array(FJ);
      return JJ.bindBuffer(GJ.COPY_READ_BUFFER, cJ), JJ.getBufferSubData(GJ.COPY_READ_BUFFER, ZJ, eJ), JJ.bindBuffer(GJ.COPY_READ_BUFFER, UJ), eJ
    }
    const tJ = `#version 300 es\nlayout(location = ${xJ}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      oJ = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      lJ = new WeakMap;

    function Jc(JJ, cJ, ZJ) {
      const FJ = JJ.getProgramParameter(cJ, GJ.ACTIVE_UNIFORMS),
        UJ = JJ.getParameter(GJ.ACTIVE_TEXTURE);
      try {
        for (let UJ = 0; UJ < FJ; UJ++) {
          const FJ = JJ.getActiveUniform(cJ, UJ);
          if ((null === FJ || void 0 === FJ ? void 0 : FJ.type) !== GJ.UNSIGNED_INT_SAMPLER_2D) continue;
          const eJ = JJ.getUniformLocation(cJ, FJ.name),
            XJ = eJ ? JJ.getUniform(cJ, eJ) : -1;
          if (XJ < 0) continue;
          JJ.activeTexture(GJ.TEXTURE0 + XJ);
          const AJ = JJ.getParameter(GJ.TEXTURE_BINDING_2D);
          if (AJ && WJ.get(AJ) === ZJ) return AJ
        }
        return null
      } finally {
        JJ.activeTexture(UJ)
      }
    }

    function cc(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = new Uint32Array(4 * UJ),
        XJ = JJ.getParameter(GJ.READ_FRAMEBUFFER_BINDING),
        AJ = JJ.createFramebuffer();
      JJ.bindFramebuffer(GJ.READ_FRAMEBUFFER, AJ), JJ.framebufferTexture2D(GJ.READ_FRAMEBUFFER, GJ.COLOR_ATTACHMENT0, GJ.TEXTURE_2D, cJ, 0);
      try {
        let cJ = 0;
        for (; cJ < UJ;) {
          const XJ = FJ + cJ,
            AJ = XJ % ZJ,
            qJ = Math.min(UJ - cJ, ZJ - AJ);
          JJ.readPixels(AJ, Math.floor(XJ / ZJ), qJ, 1, GJ.RGBA_INTEGER, GJ.UNSIGNED_INT, eJ.subarray(4 * cJ, 4 * (cJ + qJ))), cJ += qJ
        }
      } finally {
        JJ.bindFramebuffer(GJ.READ_FRAMEBUFFER, XJ), JJ.deleteFramebuffer(AJ)
      }
      return eJ
    }

    function Zc(JJ, cJ, ZJ) {
      let FJ = 0,
        UJ = 0;
      for (let qJ = 0; qJ < cJ.bytes.length; qJ += SJ) {
        FJ++;
        const JJ = Math.min(qJ + SJ, cJ.bytes.length);
        sJ(cJ.bytes.subarray(qJ, JJ)) !== sJ(ZJ.subarray(qJ, JJ)) && UJ++
      }
      const eJ = `${JJ} ${cJ.bytes.length} B cpu ${sJ(cJ.bytes).toString(16)} gpu ${sJ(ZJ).toString(16)}, ${UJ}/${FJ} blocks differ${cJ.missed?`, ${cJ.missed} GPU-side writes uncopied`:""}`;
      if (0 === UJ) return eJ;
      const {
        count: XJ,
        offsets: AJ
      } = function(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const FJ = Math.min(JJ.length, cJ.length);
        let UJ = Math.abs(JJ.length - cJ.length);
        const eJ = [];
        for (let XJ = 0; XJ < FJ; XJ++) JJ[XJ] !== cJ[XJ] && (UJ++, eJ.length < ZJ && eJ.push(XJ));
        return {
          count: UJ,
          offsets: eJ
        }
      }(cJ.bytes, ZJ);
      return OJ([`${eJ}: ${XJ} bytes differ`, ...AJ.map((JJ => `  +${JJ}: cpu ${nJ(cJ.bytes,JJ)} | gpu ${nJ(ZJ,JJ)}`))].join("\n")), `${eJ}: ${XJ} bytes differ, first at ${AJ.join(", ")} (context in the saved file)`
    }

    function Fc(JJ) {
      if (0 === JJ.vertices.length) return void NJ(`decode probe (${JJ.reason}): no terrain draw probed (${JJ.draws.length} seen)`);
      const cJ = function(JJ) {
          const cJ = new Map;
          for (const FJ of JJ) {
            const JJ = cJ.get(FJ.group);
            JJ ? JJ.push(FJ) : cJ.set(FJ.group, [FJ])
          }
          const ZJ = {
            vertices: JJ.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [FJ, UJ] of cJ) {
            const JJ = new Map,
              cJ = UJ.map((cJ => {
                const ZJ = YJ(cJ.record, cJ.slot),
                  FJ = [cJ.gpu[0] - ZJ[0], cJ.gpu[1] - ZJ[1], cJ.gpu[2] - ZJ[2]],
                  UJ = FJ.map((JJ => Math.round(64 * JJ))).join(","),
                  eJ = JJ.get(UJ);
                return eJ ? eJ.count++ : JJ.set(UJ, {
                  count: 1,
                  offset: FJ
                }), ZJ
              }));
            let eJ = [0, 0, 0],
              XJ = 0;
            for (const ZJ of JJ.values()) ZJ.count > XJ && (XJ = ZJ.count, eJ = ZJ.offset);
            ZJ.translations.set(FJ, eJ), UJ.forEach(((JJ, FJ) => {
              var UJ;
              const XJ = [cJ[FJ][0] + eJ[0], cJ[FJ][1] + eJ[1], cJ[FJ][2] + eJ[2]];
              if (XJ.every(((cJ, ZJ) => {
                  return FJ = JJ.gpu[ZJ], UJ = cJ, Math.abs(FJ - UJ) <= Math.max(.001, 1e-6 * Math.abs(UJ));
                  var FJ, UJ
                }))) return;
              ZJ.mismatches++, ZJ.byDirection[AJ(JJ.record[2])]++, ZJ.byDiagonal[qJ(JJ.record[2])]++;
              const jJ = hJ(JJ.record);
              ZJ.byBand[jJ] = (null !== (UJ = ZJ.byBand[jJ]) && void 0 !== UJ ? UJ : 0) + 1, ZJ.first.length < DJ && ZJ.first.push({
                ...JJ,
                expected: XJ
              })
            }))
          }
          return ZJ
        }(JJ.vertices),
        ZJ = cJ.byDirection.map(((JJ, cJ) => JJ ? `${XJ[cJ]} ${JJ}` : "")).filter(Boolean).join(" "),
        FJ = Object.entries(cJ.byBand).map((JJ => {
          let [cJ, ZJ] = JJ;
          return `${cJ}: ${ZJ}`
        })).join(" ");
      if (NJ(`decode probe (${JJ.reason}): ${cJ.mismatches}/${cJ.vertices} vertices differ from the CPU decode over ${JJ.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (cJ.mismatches ? ` by direction [${ZJ}] diagonal [0: ${cJ.byDiagonal[0]} 1: ${cJ.byDiagonal[1]}] extent [${FJ}]` : "")), JJ.fed.records > 0 || JJ.fed.failed > 0) {
        NJ(`decode probe input: ${JJ.fed.differing}/${JJ.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (JJ.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (JJ.fed.failed ? `; the feed failed on ${JJ.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const cJ of JJ.fed.first) NJ(`  ${cJ}`)
      }
      for (const UJ of cJ.first) {
        const [JJ, cJ, ZJ] = UJ.record;
        NJ(`  mismatch part ${UJ.group} r0 ${JJ.toString(16)} r1 ${cJ.toString(16)} r2 ${ZJ.toString(16)} slot ${UJ.slot} (${XJ[AJ(ZJ)]}): expected ${UJ.expected.map(ec).join(",")} gpu ${UJ.gpu.map(ec).join(",")}`)
      }
      OJ(`decode probe translations: ${[...cJ.translations].map((JJ=>{let[cJ,ZJ]=JJ;return`${cJ}: ${ZJ.map(ec).join(",")}`})).join("; ")}`)
    }

    function Uc(JJ) {
      return JJ.toString(16)
    }

    function ec(JJ) {
      return Number.isInteger(JJ) ? String(JJ) : JJ.toFixed(3)
    }

    function Xc(JJ) {
      return null !== gJ.pendingCheck ? Promise.resolve() : new Promise((cJ => {
        let ZJ = !1;
        const FJ = {
          reason: JJ,
          terrainDraws: 0,
          draws: [],
          vertices: [],
          parts: new Map,
          groups: new Map,
          fed: {
            records: 0,
            differing: 0,
            first: [],
            failed: 0
          }
        };
        gJ.pendingCheck = FJ;
        const UJ = () => {
            gJ.pendingCheck = null;
            try {
              ! function(JJ) {
                NJ(`draw ranges (${JJ.reason}): ${JJ.terrainDraws} terrain draws in the frame, the first ${JJ.draws.length} here`);
                for (const cJ of JJ.draws) {
                  const JJ = cJ.ws.slice(0, 8).map((JJ => {
                      let [cJ, ZJ] = JJ;
                      return `${cJ}+${ZJ}`
                    })).join(" "),
                    ZJ = cJ.ws.length > 8 ? ` (+${cJ.ws.length-8} ranges)` : "";
                  NJ(`  ${MJ(cJ.program)} ${cJ.program.terrain} ${cJ.call} ${JJ}${ZJ} x${cJ.instances}${cJ.group>=0?` part ${cJ.group} chunk ${cJ.chunk}`:""} | ${cJ.attributes.join(" | ")}`)
                }
              }(FJ), Fc(FJ);
              FJ.draws.some((JJ => "undefined" !== typeof WebGL2RenderingContext && JJ.gl instanceof WebGL2RenderingContext)) || 0 === FJ.draws.length ? function(JJ) {
                const cJ = [],
                  ZJ = new Map;
                for (const FJ of JJ)
                  if ("undefined" !== typeof WebGL2RenderingContext && FJ.gl instanceof WebGL2RenderingContext)
                    for (const JJ of FJ.pages) ZJ.set("buf" === JJ.kind ? JJ.buffer : JJ.texture, {
                      page: JJ,
                      gl: FJ.gl
                    });
                for (const [FJ, {
                    page: UJ,
                    gl: eJ
                  }] of ZJ) {
                  const JJ = wJ.get(FJ);
                  if (!JJ) {
                    cJ.push(`${UJ.kind}#${kJ(FJ)}: no CPU copy (${gJ.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === UJ.kind) {
                    cJ.push(Zc(`buf#${JJ.id}`, JJ, BJ(eJ, UJ.buffer, 0, JJ.bytes.length)));
                    continue
                  }
                  const ZJ = cc(eJ, UJ.texture, JJ.width, 0, JJ.width * JJ.height),
                    XJ = 16 === JJ.texelBytes ? new Uint8Array(ZJ.buffer) : new Uint8Array(new Uint16Array(ZJ).buffer);
                  cJ.push(Zc(`tex#${JJ.id} (${16===JJ.texelBytes?"records":"light"})`, JJ, XJ))
                }
                for (const FJ of cJ) NJ(`page readback ${FJ}`)
              }(FJ.draws) : NJ("page readback: none on WebGL1 (no buffer readback)")
            } catch (JJ) {
              NJ(`check failed: ${String(JJ)}`)
            }
            cJ()
          },
          eJ = () => {
            if (FJ.draws.length > 0 && !ZJ) return ZJ = !0, void setTimeout(UJ, 0);
            ZJ || requestAnimationFrame(eJ)
          };
        requestAnimationFrame(eJ), setTimeout((() => {
          ZJ || (ZJ = !0, UJ())
        }), 5e3)
      }))
    }
    const Ac = 20,
      qc = 24;

    function jc(JJ, cJ, ZJ) {
      if (!JJ) return;
      const FJ = JJ[cJ];
      "function" === typeof FJ && (JJ[cJ] = ZJ(FJ))
    }
    let Yc = !1;
    const hc = new WeakMap,
      Dc = new WeakMap,
      sc = new WeakMap,
      nc = {
        gl: 0,
        lost: 0
      };
    let Gc = {
        inst: {
          draws: 0,
          faces: 0
        },
        tex: {
          draws: 0,
          faces: 0
        },
        other: {
          draws: 0,
          faces: 0
        }
      },
      fc = {
        buffer: 0,
        texture: 0
      },
      xc = 0;

    function rc(JJ, cJ, ZJ) {
      return Reflect.apply(JJ, cJ, ZJ)
    }

    function vc(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (JJ instanceof ArrayBuffer) return new Uint8Array(JJ, cJ, ZJ || void 0);
      if (!ArrayBuffer.isView(JJ)) return null;
      const FJ = "BYTES_PER_ELEMENT" in JJ ? JJ.BYTES_PER_ELEMENT : 1,
        UJ = JJ.byteOffset + cJ * FJ,
        eJ = ZJ ? ZJ * FJ : JJ.byteLength - cJ * FJ;
      return new Uint8Array(JJ.buffer, UJ, Math.max(0, eJ))
    }

    function mc(JJ, cJ) {
      const ZJ = function(JJ) {
        switch (JJ) {
          case GJ.ARRAY_BUFFER:
            return GJ.ARRAY_BUFFER_BINDING;
          case GJ.ELEMENT_ARRAY_BUFFER:
            return GJ.ELEMENT_ARRAY_BUFFER_BINDING;
          case GJ.COPY_READ_BUFFER:
            return GJ.COPY_READ_BUFFER_BINDING;
          case GJ.COPY_WRITE_BUFFER:
            return GJ.COPY_WRITE_BUFFER_BINDING;
          case GJ.UNIFORM_BUFFER:
            return GJ.UNIFORM_BUFFER_BINDING;
          case GJ.PIXEL_UNPACK_BUFFER:
            return GJ.PIXEL_UNPACK_BUFFER_BINDING;
          case GJ.TRANSFORM_FEEDBACK_BUFFER:
            return GJ.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(cJ);
      return ZJ ? JJ.getParameter(ZJ) : null
    }

    function Qc(JJ) {
      const cJ = wJ.get(JJ);
      cJ && (gJ.shadowBytes -= cJ.bytes.length, wJ.delete(JJ))
    }

    function Ec(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      Qc(JJ), gJ.shadowBytes + cJ > yJ ? gJ.uncopied++ : (gJ.shadowBytes += cJ, wJ.set(JJ, {
        id: kJ(JJ),
        bytes: new Uint8Array(cJ),
        width: ZJ,
        height: FJ,
        texelBytes: UJ,
        missed: 0
      }))
    }

    function Vc(JJ, cJ) {
      for (const ZJ of ["deleteBuffer", "deleteTexture"]) jc(JJ, ZJ, (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        return ZJ[0] && Qc(ZJ[0]), rc(JJ, this, ZJ)
      }));
      jc(JJ, "shaderSource", (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        return ZJ[0] && "string" === typeof ZJ[1] && hc.set(ZJ[0], ZJ[1]), rc(JJ, this, ZJ)
      })), jc(JJ, "attachShader", (JJ => function() {
        for (var cJ, ZJ = arguments.length, FJ = new Array(ZJ), UJ = 0; UJ < ZJ; UJ++) FJ[UJ] = arguments[UJ];
        const eJ = FJ[0],
          XJ = null !== (cJ = Dc.get(eJ)) && void 0 !== cJ ? cJ : [];
        return XJ.push(FJ[1]), Dc.set(eJ, XJ), rc(JJ, this, FJ)
      })), jc(JJ, "linkProgram", (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        const UJ = rc(JJ, this, ZJ);
        return gJ.inProbe || function(JJ, cJ) {
          var ZJ, FJ, UJ;
          "undefined" !== typeof HTMLCanvasElement && JJ.canvas instanceof HTMLCanvasElement && function(JJ) {
            if (bc.has(JJ)) return;
            bc.add(JJ);
            for (const cJ of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) JJ.addEventListener(cJ, (JJ => {
              nc.lost < Ac && (nc.lost++, NJ(`${cJ}${"statusMessage"in JJ?`: ${String(JJ.statusMessage)}`:""}`))
            }))
          }(JJ.canvas);
          gJ.context ??= JJ;
          const eJ = null !== (ZJ = Dc.get(cJ)) && void 0 !== ZJ ? ZJ : [];
          let XJ = "",
            AJ = "";
          for (const YJ of eJ) {
            var qJ;
            const JJ = null !== (qJ = hc.get(YJ)) && void 0 !== qJ ? qJ : "";
            /\bgl_Position\b/.test(JJ) ? XJ = JJ : AJ = JJ
          }
          const jJ = {
            id: kJ(cJ),
            name: null !== (FJ = null === (UJ = IJ.exec(XJ)) || void 0 === UJ ? void 0 : UJ[1]) && void 0 !== FJ ? FJ : null,
            gl: JJ,
            vertex: XJ,
            fragment: AJ,
            terrain: yc(XJ),
            checked: !1,
            firstDraw: !1
          };
          if (sc.set(cJ, jJ), bJ.push([cJ, jJ]), null !== jJ.terrain) {
            const cJ = eJ.map((cJ => {
              var ZJ;
              return null !== (ZJ = JJ.getShaderInfoLog(cJ)) && void 0 !== ZJ ? ZJ : ""
            })).filter((JJ => "" !== JJ.trim()));
            cJ.length > 0 && OJ(`program ${MJ(jJ)} (${jJ.terrain}) shader logs:\n${TJ(cJ.join("\n"))}`)
          }
        }(this, ZJ[0]), UJ
      })), jc(JJ, "bufferData", (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        const UJ = rc(JJ, this, ZJ);
        if (!gJ.inProbe) {
          const JJ = mc(this, ZJ[0]);
          if (JJ) {
            var eJ, XJ, AJ;
            const cJ = "number" === typeof ZJ[1] ? null : vc(ZJ[1], null !== (eJ = ZJ[3]) && void 0 !== eJ ? eJ : 0, null !== (XJ = ZJ[4]) && void 0 !== XJ ? XJ : 0);
            var qJ;
            if (Ec(JJ, "number" === typeof ZJ[1] ? ZJ[1] : null !== (AJ = null === cJ || void 0 === cJ ? void 0 : cJ.length) && void 0 !== AJ ? AJ : 0), cJ) null === (qJ = wJ.get(JJ)) || void 0 === qJ || qJ.bytes.set(cJ)
          }
        }
        return UJ
      })), jc(JJ, "bufferSubData", (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        const UJ = rc(JJ, this, ZJ);
        if (!gJ.inProbe) {
          var eJ, XJ;
          const JJ = mc(this, ZJ[0]),
            cJ = JJ ? wJ.get(JJ) : void 0,
            FJ = vc(ZJ[2], null !== (eJ = ZJ[3]) && void 0 !== eJ ? eJ : 0, null !== (XJ = ZJ[4]) && void 0 !== XJ ? XJ : 0);
          if (cJ && FJ) {
            const JJ = ZJ[1];
            cJ.bytes.set(FJ.subarray(0, Math.max(0, cJ.bytes.length - JJ)), JJ), Kc("buffer", cJ, JJ, FJ.length)
          }
        }
        return UJ
      })), cJ && (jc(JJ, "copyBufferSubData", (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        const UJ = rc(JJ, this, ZJ);
        if (!gJ.inProbe) {
          const [JJ, cJ, FJ, UJ, eJ] = ZJ, XJ = mc(this, JJ), AJ = mc(this, cJ), qJ = XJ ? wJ.get(XJ) : void 0, jJ = AJ ? wJ.get(AJ) : void 0;
          jJ && (qJ ? jJ.bytes.set(qJ.bytes.slice(FJ, FJ + eJ), UJ) : jJ.missed++)
        }
        return UJ
      })), jc(JJ, "texStorage2D", (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        const UJ = rc(JJ, this, ZJ),
          [, , eJ, XJ, AJ] = ZJ;
        if (!gJ.inProbe && (eJ === GJ.RGBA32UI || eJ === GJ.RGBA16UI)) {
          const JJ = this.getParameter(GJ.TEXTURE_BINDING_2D),
            cJ = eJ === GJ.RGBA32UI ? 16 : 8;
          JJ && (WJ.set(JJ, cJ), Ec(JJ, XJ * AJ * cJ, XJ, AJ, cJ))
        }
        return UJ
      })), jc(JJ, "texSubImage2D", (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        const UJ = rc(JJ, this, ZJ);
        return !gJ.inProbe && ZJ.length >= 9 && ZJ[0] === GJ.TEXTURE_2D && 0 === ZJ[1] && function(JJ, cJ) {
          var ZJ;
          const FJ = JJ.getParameter(GJ.TEXTURE_BINDING_2D),
            UJ = FJ ? wJ.get(FJ) : void 0;
          if (!UJ) return;
          const [, , eJ, XJ, AJ, qJ] = cJ;
          let jJ = vc(cJ[8], null !== (ZJ = cJ[9]) && void 0 !== ZJ ? ZJ : 0);
          if (null === jJ && "number" === typeof cJ[8]) {
            const ZJ = mc(JJ, GJ.PIXEL_UNPACK_BUFFER),
              FJ = ZJ ? wJ.get(ZJ) : void 0;
            jJ = FJ ? FJ.bytes.subarray(cJ[8]) : null
          }
          if (null === jJ) return void UJ.missed++;
          const YJ = JJ.getParameter(GJ.UNPACK_ROW_LENGTH) || AJ,
            hJ = JJ.getParameter(GJ.UNPACK_SKIP_ROWS),
            DJ = JJ.getParameter(GJ.UNPACK_SKIP_PIXELS),
            sJ = UJ.texelBytes;
          for (let nJ = 0; nJ < qJ; nJ++) {
            const JJ = ((hJ + nJ) * YJ + DJ) * sJ,
              cJ = ((XJ + nJ) * UJ.width + eJ) * sJ;
            UJ.bytes.set(jJ.subarray(JJ, JJ + AJ * sJ), cJ)
          }
          Kc("texture", UJ, (XJ * UJ.width + eJ) * sJ, AJ * qJ * sJ)
        }(this, ZJ), UJ
      })), jc(JJ, "copyTexSubImage2D", (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        const UJ = ZJ[0] === GJ.TEXTURE_2D ? this.getParameter(GJ.TEXTURE_BINDING_2D) : null,
          eJ = UJ ? wJ.get(UJ) : void 0;
        return eJ && eJ.missed++, rc(JJ, this, ZJ)
      })));
      for (const ZJ of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) jc(JJ, ZJ, (JJ => function() {
        for (var cJ = arguments.length, FJ = new Array(cJ), UJ = 0; UJ < cJ; UJ++) FJ[UJ] = arguments[UJ];
        const eJ = rc(JJ, this, FJ);
        return gJ.inProbe || Ic(this, ZJ, FJ), eJ
      }));
      jc(JJ, "getExtension", (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        const UJ = rc(JJ, this, ZJ);
        return UJ && "object" === typeof UJ && function(JJ, cJ, ZJ) {
          const FJ = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(cJ in FJ) || ZJ.bloxdRenderDebug) return;
          ZJ.bloxdRenderDebug = !0;
          for (const UJ of FJ[cJ]) {
            const cJ = ZJ[UJ];
            "function" === typeof cJ && (ZJ[UJ] = function() {
              for (var FJ = arguments.length, eJ = new Array(FJ), XJ = 0; XJ < FJ; XJ++) eJ[XJ] = arguments[XJ];
              const AJ = Reflect.apply(cJ, ZJ, eJ);
              return gJ.inProbe || Ic(JJ, UJ, eJ), AJ
            })
          }
        }(this, ZJ[0], UJ), UJ
      }))
    }

    function Kc(JJ, cJ, ZJ, FJ) {
      fc[JJ] += FJ, xc < 32 && cJ.bytes.length >= 1 << 20 && (xc++, OJ(`upload ${JJ} #${cJ.id} +${ZJ} ${FJ} B`))
    }

    function yc(JJ) {
      if (!JJ.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(JJ) || /in uvec3 _p2vs_location0\b/.test(JJ) ? "inst" : "tex"
    }

    function Sc(JJ, cJ, ZJ) {
      var FJ;
      if (ZJ.checked) return;
      ZJ.checked = !0;
      const UJ = JJ.getProgramParameter(cJ, GJ.LINK_STATUS),
        eJ = (null !== (FJ = JJ.getProgramInfoLog(cJ)) && void 0 !== FJ ? FJ : "").trim();
      var XJ;
      null === ZJ.terrain && UJ || (NJ(`program ${MJ(ZJ)} ${null!==(XJ=ZJ.terrain)&&void 0!==XJ?XJ:"other"} link ${UJ?"ok":"FAILED"}${eJ?`: ${TJ(eJ,300)}`:""}`), eJ && OJ(`program ${MJ(ZJ)} link log:\n${TJ(eJ)}`))
    }

    function Ic(JJ, cJ, ZJ) {
      var FJ;
      const UJ = JJ.getParameter(GJ.CURRENT_PROGRAM),
        eJ = UJ ? sc.get(UJ) : void 0;
      if (!UJ || !eJ) return;
      const XJ = null !== (FJ = eJ.terrain) && void 0 !== FJ ? FJ : "other",
        {
          ws: AJ,
          instances: qJ
        } = function(JJ, cJ) {
          switch (JJ) {
            case "drawArrays":
              return {
                ws: [
                  [cJ[1], cJ[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                ws: [
                  [cJ[1], cJ[2]]
                ], instances: cJ[3]
              };
            case "drawElements":
              return {
                ws: [
                  [0, cJ[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                ws: [
                  [0, cJ[1]]
                ], instances: cJ[4]
              };
            case "multiDrawArraysWEBGL": {
              const JJ = cJ[1],
                ZJ = cJ[3],
                FJ = cJ[2],
                UJ = cJ[4],
                eJ = [];
              for (let XJ = 0; XJ < cJ[5]; XJ++) eJ.push([JJ[FJ + XJ], ZJ[UJ + XJ]]);
              return {
                ws: eJ,
                instances: 1
              }
            }
            default:
              return {
                ws: [], instances: 0
              }
          }
        }(cJ, ZJ),
        jJ = "inst" === eJ.terrain ? qJ : AJ.reduce(((JJ, cJ) => {
          let [, ZJ] = cJ;
          return JJ + ZJ
        }), 0) / 6;
      if (Gc[XJ].draws++, Gc[XJ].faces += jJ, null === eJ.terrain) return;
      if (gJ.context = JJ, !eJ.firstDraw) {
        eJ.firstDraw = !0, Sc(JJ, UJ, eJ), Mc || (Mc = !0, NJ(function(JJ) {
          var cJ;
          const ZJ = JJ.getParameter(GJ.DEPTH_FUNC),
            FJ = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let UJ = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in JJ && JJ.getParameter(GJ.DRAW_FRAMEBUFFER_BINDING)) {
            const cJ = JJ;
            UJ = cJ.getFramebufferAttachmentParameter(GJ.DRAW_FRAMEBUFFER, GJ.DEPTH_ATTACHMENT, GJ.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(cJ.getFramebufferAttachmentParameter(GJ.DRAW_FRAMEBUFFER,GJ.DEPTH_ATTACHMENT,GJ.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(cJ.getFramebufferAttachmentParameter(GJ.DRAW_FRAMEBUFFER,GJ.DEPTH_ATTACHMENT,GJ.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const eJ = JJ.getParameter(GJ.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(cJ=FJ[ZJ])&&void 0!==cJ?cJ:`0x${ZJ.toString(16)}`} clear ${eJ}${516===ZJ||518===ZJ?" (reverse-Z)":""}, samples ${String(JJ.getParameter(GJ.SAMPLES))}, ${UJ}`
        }(JJ)));
        const ZJ = JJ.getError();
        ZJ !== GJ.NO_ERROR && nc.gl < Ac && (nc.gl++, NJ(`GL error 0x${ZJ.toString(16)} after program ${MJ(eJ)}'s first terrain draw (${cJ})`))
      }
      const YJ = gJ.pendingCheck;
      null !== YJ && (YJ.terrainDraws++, YJ.draws.length < qc && CJ(JJ, UJ, eJ, cJ, AJ, qJ))
    }
    let Mc = !1;
    const bc = new WeakSet;
    const wc = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let Wc = !1;
    const gc = new WeakSet,
      Hc = new WeakMap,
      Pc = new WeakMap,
      kc = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let pc = 0,
      dc = !1,
      zc = null,
      Nc = {
        draws: 0,
        faces: 0
      };

    function Oc(JJ) {
      const cJ = globalThis[JJ];
      return null === cJ || void 0 === cJ ? void 0 : cJ.prototype
    }

    function Tc(JJ) {
      return JJ && "function" === typeof JJ[Symbol.iterator] ? [...JJ].sort().join(" ") : ""
    }

    function Cc(JJ, cJ) {
      const ZJ = null !== JJ && void 0 !== JJ ? JJ : {},
        FJ = null !== cJ && void 0 !== cJ ? cJ : Object.keys(Object.getPrototypeOf(ZJ)).concat(Object.keys(ZJ));
      return [...new Set(FJ)].filter((JJ => "number" === typeof ZJ[JJ])).map((JJ => `${JJ} ${String(ZJ[JJ])}`)).join(", ")
    }

    function uc(JJ, cJ) {
      var ZJ;
      const FJ = null !== (ZJ = cJ.vertex) && void 0 !== ZJ ? ZJ : {};
      if (FJ.module && gc.has(FJ.module)) {
        var UJ;
        const ZJ = String(null !== (UJ = FJ.entryPoint) && void 0 !== UJ ? UJ : "");
        if (ZJ.startsWith("vs_packed") && Hc.set(JJ, ZJ), !dc) {
          var eJ, XJ, AJ, qJ, jJ;
          dc = !0;
          const JJ = null !== (eJ = cJ.depthStencil) && void 0 !== eJ ? eJ : {},
            FJ = null !== (XJ = cJ.multisample) && void 0 !== XJ ? XJ : {},
            UJ = String(null !== (AJ = JJ.depthCompare) && void 0 !== AJ ? AJ : "");
          NJ(`WebGPU terrain pipeline ${ZJ}: depth ${String(null!==(qJ=JJ.format)&&void 0!==qJ?qJ:"none")} ${UJ}${UJ.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(jJ=FJ.count)&&void 0!==jJ?jJ:1)}`)
        }
      }
    }

    function ic(JJ) {
      jc(JJ, "setPipeline", (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        return Pc.set(this, ZJ[0]), Reflect.apply(JJ, this, ZJ)
      }));
      for (const cJ of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) jc(JJ, cJ, (JJ => function() {
        const ZJ = Pc.get(this),
          FJ = ZJ ? Hc.get(ZJ) : void 0;
        for (var UJ = arguments.length, eJ = new Array(UJ), XJ = 0; XJ < UJ; XJ++) eJ[XJ] = arguments[XJ];
        return void 0 !== FJ && Rc(cJ, FJ, eJ), Reflect.apply(JJ, this, eJ)
      }))
    }

    function Rc(JJ, cJ, ZJ) {
      var FJ;
      (Nc.draws++, "draw" === JJ || "drawIndexed" === JJ) && (Nc.faces += ZJ[0] * (null !== (FJ = ZJ[1]) && void 0 !== FJ ? FJ : 1) / 6);
      if (null !== zc && zc.length < qc) {
        const FJ = ("draw" === JJ ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === JJ ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((cJ, FJ) => {
          const UJ = JJ.endsWith("Indirect") ? ZJ[1] : ZJ[FJ];
          return `${cJ} ${String(null!==UJ&&void 0!==UJ?UJ:"instances"===cJ?1:0)}`
        }));
        zc.push(`  ${cJ} ${JJ} ${FJ.join(" ")}`)
      }
    }

    function Lc() {
      if (Wc || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      Wc = !0, jc(Oc("GPU"), "requestAdapter", (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        return Reflect.apply(JJ, this, ZJ).then((JJ => {
          var cJ;
          JJ ? function(JJ) {
            var cJ;
            const ZJ = null !== (cJ = JJ.info) && void 0 !== cJ ? cJ : {};
            NJ(`WebGPU adapter ${["vendor","architecture","device","description"].map((JJ=>{var cJ;return`${JJ} "${String(null!==(cJ=ZJ[JJ])&&void 0!==cJ?cJ:"")}"`})).join(" ")}${JJ.isFallbackAdapter?" (fallback)":""}`), NJ(`WebGPU adapter features ${Tc(JJ.features)}`), NJ(`WebGPU adapter limits ${Cc(JJ.limits,wc)}`), OJ(`WebGPU adapter all limits ${Cc(JJ.limits,null)}`)
          }(JJ) : NJ(`WebGPU requestAdapter(${JSON.stringify(null!==(cJ=ZJ[0])&&void 0!==cJ?cJ:{})}) gave none`);
          return JJ
        }))
      })), jc(Oc("GPUAdapter"), "requestDevice", (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        return Reflect.apply(JJ, this, ZJ).then((JJ => (function(JJ) {
          NJ(`WebGPU device features ${Tc(JJ.features)}`), NJ(`WebGPU device limits ${Cc(JJ.limits,wc)}`), JJ.addEventListener("uncapturederror", (JJ => {
            if (kc.uncaptured < Ac) {
              var cJ, ZJ, FJ;
              kc.uncaptured++;
              const UJ = JJ.error;
              NJ(`WebGPU uncaptured ${null!==(cJ=null===UJ||void 0===UJ||null===(ZJ=UJ.constructor)||void 0===ZJ?void 0:ZJ.name)&&void 0!==cJ?cJ:"error"}: ${TJ(String(null!==(FJ=null===UJ||void 0===UJ?void 0:UJ.message)&&void 0!==FJ?FJ:""),600)}`)
            }
          }));
          const cJ = JJ.lost;
          null === cJ || void 0 === cJ || cJ.then((JJ => {
            var cJ;
            NJ(`WebGPU device lost (${String(JJ.reason)}): ${TJ(String(null!==(cJ=JJ.message)&&void 0!==cJ?cJ:""),600)}`)
          }))
        }(JJ), JJ)), (JJ => {
          throw NJ(`WebGPU requestDevice failed: ${String(JJ)}`), JJ
        }))
      }));
      const JJ = Oc("GPUDevice");
      jc(JJ, "createShaderModule", (JJ => function() {
        for (var cJ, ZJ, FJ = arguments.length, UJ = new Array(FJ), eJ = 0; eJ < FJ; eJ++) UJ[eJ] = arguments[eJ];
        const XJ = Reflect.apply(JJ, this, UJ);
        return function(JJ, cJ) {
          const ZJ = cJ.includes("decodeQuad");
          ZJ && gc.add(JJ);
          const FJ = JJ.getCompilationInfo;
          null === FJ || void 0 === FJ || FJ.call(JJ).then((JJ => {
            if (0 === JJ.messages.length && !ZJ) return;
            const cJ = {};
            for (const ZJ of JJ.messages) {
              var FJ;
              cJ[String(ZJ.type)] = (null !== (FJ = cJ[String(ZJ.type)]) && void 0 !== FJ ? FJ : 0) + 1
            }
            const UJ = JJ.messages.map((JJ => `${String(JJ.type)} ${String(JJ.lineNum)}:${String(JJ.linePos)} ${String(JJ.message)}`)).join("\n");
            kc.compile < Ac && (kc.compile++, NJ(`WebGPU ${ZJ?"terrain ":""}shader module compiled: ${JSON.stringify(cJ)}${UJ?` first: ${TJ(UJ.split("\n")[0],300)}`:""}`)), UJ && OJ(`WebGPU shader module messages:\n${TJ(UJ)}`)
          }))
        }(XJ, String(null !== (cJ = (null !== (ZJ = UJ[0]) && void 0 !== ZJ ? ZJ : {}).code) && void 0 !== cJ ? cJ : "")), XJ
      })), jc(JJ, "createRenderPipeline", (JJ => function() {
        for (var cJ, ZJ = arguments.length, FJ = new Array(ZJ), UJ = 0; UJ < ZJ; UJ++) FJ[UJ] = arguments[UJ];
        const eJ = Reflect.apply(JJ, this, FJ);
        return uc(eJ, null !== (cJ = FJ[0]) && void 0 !== cJ ? cJ : {}), eJ
      })), jc(JJ, "createRenderPipelineAsync", (JJ => function() {
        for (var cJ = arguments.length, ZJ = new Array(cJ), FJ = 0; FJ < cJ; FJ++) ZJ[FJ] = arguments[FJ];
        return Reflect.apply(JJ, this, ZJ).then((JJ => {
          var cJ;
          return uc(JJ, null !== (cJ = ZJ[0]) && void 0 !== cJ ? cJ : {}), JJ
        }), (JJ => {
          var cJ;
          throw function(JJ, cJ) {
            var ZJ, FJ, UJ;
            if (kc.rejected >= Ac) return;
            kc.rejected++;
            const {
              reason: eJ,
              message: XJ
            } = null !== cJ && void 0 !== cJ ? cJ : {}, AJ = String(null !== (ZJ = (null !== (FJ = JJ.vertex) && void 0 !== FJ ? FJ : {}).entryPoint) && void 0 !== ZJ ? ZJ : "");
            NJ(`WebGPU pipeline "${String(null!==(UJ=JJ.label)&&void 0!==UJ?UJ:"")}" ${AJ} rejected (${String(null!==eJ&&void 0!==eJ?eJ:"no reason")}): ${TJ(String(null!==XJ&&void 0!==XJ?XJ:cJ),600)}`)
          }(null !== (cJ = ZJ[0]) && void 0 !== cJ ? cJ : {}, JJ), JJ
        }))
      })), jc(Oc("GPUCanvasContext"), "configure", (JJ => function() {
        for (var cJ, ZJ = arguments.length, FJ = new Array(ZJ), UJ = 0; UJ < ZJ; UJ++) FJ[UJ] = arguments[UJ];
        const eJ = null !== (cJ = FJ[0]) && void 0 !== cJ ? cJ : {};
        var XJ, AJ;
        pc++ < 3 && NJ(`WebGPU canvas ${String(eJ.format)} ${String(null!==(XJ=eJ.colorSpace)&&void 0!==XJ?XJ:"srgb")} alpha ${String(null!==(AJ=eJ.alphaMode)&&void 0!==AJ?AJ:"opaque")}`);
        return Reflect.apply(JJ, this, FJ)
      })), ic(Oc("GPURenderPassEncoder")), ic(Oc("GPURenderBundleEncoder"))
    }
    const ac = 1e4,
      Bc = 6e4,
      tc = 5e3;
    let oc = null,
      lc = !1,
      JZ = "1",
      cZ = "",
      ZZ = !1,
      FZ = null,
      UZ = 0,
      eZ = () => {};
    const XZ = new Promise((JJ => {
      eZ = JJ
    }));

    function AZ() {
      var JJ;
      lc || (lc = !0, JZ = "0" === (0, eJ.m)("faceCull") ? "0" : "1", cZ = null !== (JJ = (0, eJ.m)("adrenoProbe")) && void 0 !== JJ ? JJ : "", window.bloxdRenderDebug = {
        faceCull: JZ,
        adrenoProbe: cZ
      }, NJ("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Yc || "undefined" === typeof window || (Yc = !0, "undefined" !== typeof WebGL2RenderingContext && Vc(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && Vc(WebGLRenderingContext.prototype, !1)), Lc(), (0, eJ.e)("renderProbe", (() => {
        sZ("console")
      })), hZ(), setInterval(nZ, tc))
    }

    function qZ(JJ) {
      var cJ, ZJ;
      AZ(), oc = null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.backend) && void 0 !== cJ ? cJ : null, NJ(null === JJ ? "backend: none picked (no renderer build)" : `backend ${JJ.backend}: reason ${JJ.reason}, source ${JJ.source}, adapter ${JJ.adapter?`${JJ.adapter.vendor}/${JJ.adapter.architecture}`:"none"}, renderer param ${null!==(ZJ=(0,eJ.m)("renderer"))&&void 0!==ZJ?ZJ:"none"}, faceCull ${"0"===JZ?"off (whole parts)":"on"}, adrenoProbe ${cZ||"none"}`)
    }

    function jZ() {
      const JJ = performance.now(),
        cJ = YZ(XZ, ac, Bc).then((cJ => sZ(`${Math.round((performance.now()-JJ)/1e3)} s after playable${cJ?"":", no terrain drawn yet"}`)));
      (0, UJ.c)(NJ, (async () => {
        await cJ, await FZ
      }))
    }
    async function YZ(JJ, cJ, ZJ) {
      const UJ = (0, FJ.b)(ZJ).then((() => !1));
      return await (0, FJ.b)(cJ), Promise.race([JJ.then((() => !0)), UJ])
    }

    function hZ() {
      requestAnimationFrame((() => {
        UZ++, hZ()
      }))
    }

    function DZ() {
      var JJ, cJ;
      if (ZZ) return;
      ZZ = !0;
      const ZJ = window.bloxdRenderDebug;
      var FJ;
      (NJ(`renderer caps ${null!==(JJ=null===ZJ||void 0===ZJ?void 0:ZJ.caps)&&void 0!==JJ?JJ:"(not noted)"}; terrain fetch ${null!==(cJ=null===ZJ||void 0===ZJ?void 0:ZJ.fetch)&&void 0!==cJ?cJ:"(not noted)"}`), cZ) && NJ(`adrenoProbe ${cZ} asked; in force (storage fetch only): ${null!==(FJ=null===ZJ||void 0===ZJ?void 0:ZJ.probe)&&void 0!==FJ?FJ:"(not noted)"}`);
      const UJ = gJ.context;
      if (UJ) {
        for (const JJ of function(JJ) {
            var cJ;
            const ZJ = [],
              FJ = JJ.getExtension("WEBGL_debug_renderer_info"),
              UJ = FJ ? JJ.getParameter(FJ.UNMASKED_VENDOR_WEBGL) : "(masked)",
              eJ = FJ ? JJ.getParameter(FJ.UNMASKED_RENDERER_WEBGL) : "(masked)";
            ZJ.push(`GL ${String(JJ.getParameter(JJ.VERSION))} | ${String(JJ.getParameter(JJ.SHADING_LANGUAGE_VERSION))} | ${String(JJ.getParameter(JJ.VENDOR))} / ${String(JJ.getParameter(JJ.RENDERER))}`), ZJ.push(`GL unmasked ${UJ} / ${eJ}`);
            const XJ = [
              ["MAX_TEXTURE_SIZE", JJ.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", JJ.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", JJ.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", JJ.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", JJ.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", JJ.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", JJ.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in JJ && XJ.push(["MAX_UNIFORM_BLOCK_SIZE", JJ.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", JJ.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", JJ.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", JJ.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), ZJ.push(`GL limits ${XJ.map((cJ=>{let[ZJ,FJ]=cJ;return`${ZJ} ${String(JJ.getParameter(FJ))}`})).join(", ")}`);
            const AJ = (cJ, ZJ) => {
              const FJ = JJ.getShaderPrecisionFormat(cJ, JJ.HIGH_FLOAT),
                UJ = JJ.getShaderPrecisionFormat(cJ, JJ.HIGH_INT);
              return `${ZJ} highp float ${FJ?`${FJ.rangeMin}/${FJ.rangeMax}/${FJ.precision}`:"?"} int ${UJ?`${UJ.rangeMin}/${UJ.rangeMax}/${UJ.precision}`:"?"}`
            };
            ZJ.push(`GL precision ${AJ(JJ.VERTEX_SHADER,"VS")}, ${AJ(JJ.FRAGMENT_SHADER,"FS")}`);
            const qJ = JJ.getContextAttributes();
            return ZJ.push(`GL context ${JSON.stringify(qJ)} drawingBuffer ${JJ.drawingBufferWidth}x${JJ.drawingBufferHeight}${"drawingBufferFormat"in JJ?` format 0x${Number(JJ.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in JJ?` ${String(JJ.drawingBufferColorSpace)}`:""}`), ZJ.push(`GL extensions ${(null!==(cJ=JJ.getSupportedExtensions())&&void 0!==cJ?cJ:[]).join(" ")}`), ZJ
          }(UJ)) NJ(JJ);
        ! function() {
          if (!gJ.context) return;
          let JJ = 0,
            cJ = 0;
          for (const [ZJ, FJ] of bJ) !FJ.gl.isContextLost() && FJ.gl.isProgram(ZJ) && (cJ++, Sc(FJ.gl, ZJ, FJ), null !== FJ.terrain && JJ++);
          NJ(`programs: ${cJ} live of ${bJ.length} linked, ${JJ} packed terrain; CPU page copies ${Math.round(gJ.shadowBytes/1048576)} MiB (${gJ.uncopied} over budget)`)
        }()
      }
    }

    function sZ(JJ) {
      return FZ ??= async function(JJ) {
        DZ(), "webgpu" === oc ? await
        function(JJ) {
          if (null !== zc) return Promise.resolve();
          const cJ = [];
          return zc = cJ, new Promise((ZJ => {
            setTimeout((() => {
              zc = null, NJ(`WebGPU draw ranges (${JJ}): ${cJ.length} terrain draws recorded in a second (first ${qc}; bundles replay without new ones)`);
              for (const JJ of cJ) NJ(JJ);
              ZJ()
            }), 1e3)
          }))
        }(JJ): await Xc(JJ);
        NJ(`check (${JJ}) done: bloxdDebug.save() downloads it all`)
      }(JJ).catch((cJ => {
        NJ(`check (${JJ}) failed: ${String(cJ)}`)
      })).finally((() => {
        FZ = null
      })), FZ
    }

    function nZ() {
      const JJ = JJ => UZ ? (JJ / UZ).toFixed(1) : "0",
        cJ = function() {
          const JJ = Nc;
          return Nc = {
            draws: 0,
            faces: 0
          }, JJ
        }(),
        ZJ = function() {
          const JJ = Gc;
          return Gc = {
            inst: {
              draws: 0,
              faces: 0
            },
            tex: {
              draws: 0,
              faces: 0
            },
            other: {
              draws: 0,
              faces: 0
            }
          }, JJ
        }(),
        FJ = function() {
          const JJ = fc;
          return fc = {
            buffer: 0,
            texture: 0
          }, JJ
        }();
      ("webgpu" === oc ? cJ.draws : ZJ.inst.draws + ZJ.tex.draws) > 0 && eZ();
      const UJ = "webgpu" === oc ? [`terrain ${JJ(cJ.draws)} draws ${JJ(cJ.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((JJ => ZJ[JJ].draws > 0)).map((cJ => `${cJ} ${JJ(ZJ[cJ].draws)} draws ${JJ(ZJ[cJ].faces)} faces a frame`));
      NJ(`${UZ} frames: ${UJ.join(", ")||"no draws"}; uploaded ${Math.round(FJ.buffer/1024)} KiB to buffers, ${Math.round(FJ.texture/1024)} KiB to data textures`), UZ = 0
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);