export const id = 55;
export const ids = [55];
export const modules = {
  5062: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => zM
    });
    var OM = iM(19),
      SM = iM(22),
      jM = iM(1313),
      aM = iM(3122);
    const PM = 3e4,
      nM = 1e3;

    function QM() {
      return "visible" === document.visibilityState && "inGame" === OM.d.get("gameState") && (0, jM.B)()
    }

    function zM(MM, rM) {
      (0, aM.q)() || function(MM, rM, iM) {
        let OM = 0;
        const SM = setInterval((() => {
          rM() && (OM += nM, OM >= MM && (clearInterval(SM), iM()))
        }), nM)
      }(PM, QM, (() => {
        rM().then((() => {
          MM(`saved for the player after ${PM/1e3} s of play`), (0, aM.F)(), SM.i.Tz("chat", {
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
  5058: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      installRenderDebug: () => Li,
      renderDebugPlayable: () => Hi,
      startRenderDebug: () => mi,
      waitForDraw: () => Ji
    });
    var OM = iM(1919),
      SM = iM(5062),
      jM = iM(3122);
    const aM = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function PM(MM) {
      return 7 & MM
    }

    function nM(MM) {
      return MM >>> 11 & 1
    }

    function QM(MM) {
      return [1 + (MM >>> 18 & 63), 1 + (MM >>> 24 & 63)]
    }

    function zM(MM, rM) {
      const [iM, , OM] = MM, SM = PM(OM), jM = function(MM, rM, iM) {
        return rM + (1 === (22 >>> MM & 1) ? 4 - iM : iM) & 3
      }(SM, nM(OM), rM), aM = SM >>> 1, [zM, LM] = QM(iM), mM = 1 === jM || 2 === jM ? zM : 0, HM = jM >= 2 ? LM : 0, hM = [63 & iM, iM >>> 6 & 63, iM >>> 12 & 63];
      return hM[2 === aM ? 0 : 2] += mM, hM[1 === aM ? 0 : 1] += HM, hM
    }

    function LM(MM) {
      const rM = Math.max(...QM(MM[0]));
      return 1 === rM ? "1" : rM <= 4 ? "2-4" : rM <= 16 ? "5-16" : "17-64"
    }
    const mM = 16;

    function HM(MM) {
      let rM = 2166136261;
      for (let iM = 0; iM < MM.length; iM++) rM = Math.imul(rM ^ MM[iM], 16777619);
      return rM >>> 0
    }

    function hM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const OM = Math.max(0, rM - iM),
        SM = Math.min(MM.length, rM + iM),
        jM = [];
      for (let aM = OM; aM < SM; aM++) {
        const iM = MM[aM].toString(16).padStart(2, "0");
        jM.push(aM === rM ? `[${iM}]` : iM)
      }
      return jM.join(" ")
    }
    const JM = {
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
      dM = "_vs2fs_location0";
    const yM = 0,
      lM = 4,
      EM = 6,
      UM = [0, 1, 2, 0, 2, 3],
      GM = 2048,
      CM = 4,
      eM = 256,
      bM = 64,
      wM = 268435456,
      tM = 65536,
      gM = /^#version [^\n]*\/\/ program (\S+)$/m;

    function uM(MM) {
      return null === MM.name ? `#${MM.id}` : `#${MM.id} ${MM.name}`
    }
    const RM = [],
      pM = new WeakMap,
      WM = new WeakMap,
      sM = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let DM = 1;
    const kM = new WeakMap;

    function ZM(MM) {
      if (null === MM) return 0;
      let rM = kM.get(MM);
      return void 0 === rM && (rM = DM++, kM.set(MM, rM)), rM
    }
    class oM {
      constructor(MM, rM) {
        this.print = MM, this.now = rM, this.shown = 0, this.sQ = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.ML = [], this.dropped = 0
      }
      line(MM) {
        const rM = this.now();
        if (rM - this.second >= 1e3 && (this.second = rM, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.sQ++, void this.store(MM);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${MM} (the last line here: the rest go to bloxdDebug.save())` : MM)
      }
      keep(MM) {
        this.sections++, this.store(MM)
      }
      store(MM) {
        this.ML.push(`${new Date(Date.now()).toISOString()} ${MM}`), this.ML.length > 2e4 && (this.ML.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.sQ} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.ML].join("\n")
      }
    }
    let fM = null;

    function YM() {
      if (null === fM) {
        const MM = new oM((MM => {
          (0, jM.k)("render", MM)
        }), (() => performance.now()));
        (0, jM.i)("render", (() => MM.dump())), fM = MM
      }
      return fM
    }

    function NM(MM) {
      YM().line(MM)
    }

    function AM(MM) {
      YM().keep(MM)
    }

    function xM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return MM.length <= rM ? MM : `${MM.slice(0,rM)}... (${MM.length-rM} more characters)`
    }

    function vM(MM, rM, iM, OM, SM, jM) {
      const aM = sM.pendingCheck;
      if (null === aM) return;
      const PM = "undefined" !== typeof WebGL2RenderingContext && MM instanceof WebGL2RenderingContext,
        nM = {
          gl: MM,
          program: iM,
          call: OM,
          Ld: SM,
          instances: jM,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (aM.draws.push(nM), PM) try {
        const OM = function(MM) {
          const rM = [],
            iM = new Map,
            OM = Math.min(16, MM.getParameter(JM.MAX_VERTEX_ATTRIBS));
          for (let SM = 0; SM < OM; SM++) {
            if (!MM.getVertexAttrib(SM, JM.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const OM = MM.getVertexAttrib(SM, JM.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              jM = MM.getVertexAttribOffset(SM, JM.VERTEX_ATTRIB_ARRAY_POINTER),
              aM = MM.getVertexAttrib(SM, JM.VERTEX_ATTRIB_ARRAY_STRIDE),
              PM = MM.getVertexAttrib(SM, JM.VERTEX_ATTRIB_ARRAY_SIZE),
              nM = MM.getVertexAttrib(SM, JM.VERTEX_ATTRIB_ARRAY_TYPE),
              QM = "VERTEX_ATTRIB_ARRAY_INTEGER" in MM && MM.getVertexAttrib(SM, JM.VERTEX_ATTRIB_ARRAY_INTEGER),
              zM = "VERTEX_ATTRIB_ARRAY_DIVISOR" in MM ? MM.getVertexAttrib(SM, JM.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            iM.set(SM, {
              buffer: OM,
              offset: jM,
              stride: aM
            }), rM.push(`@${SM} buf#${ZM(OM)} +${jM} stride ${aM} ${PM}x0x${nM.toString(16)}${QM?" int":""} div ${zM}`)
          }
          return {
            lines: rM,
            byLocation: iM
          }
        }(MM);
        if (nM.attributes = OM.lines, "inst" === iM.terrain) {
          const {
            group: SM,
            chunk: PM
          } = function(MM, rM, iM) {
            const OM = rM.get(EM),
              SM = MM.getVertexAttrib(EM, JM.CURRENT_VERTEX_ATTRIB),
              jM = OM ? `+${OM.offset}` : SM ? Array.from(SM).slice(0, 3).join(",") : "?";
            let aM = iM.groups.get(jM);
            return void 0 === aM && (aM = iM.groups.size, iM.groups.set(jM, aM)), {
              group: aM,
              chunk: jM
            }
          }(MM, OM.byLocation, aM);
          nM.group = SM, nM.chunk = PM;
          for (const MM of [yM, lM]) {
            var QM;
            const rM = null === (QM = OM.byLocation.get(MM)) || void 0 === QM ? void 0 : QM.buffer;
            rM && nM.pages.push({
              kind: "buf",
              buffer: rM
            })
          }! function(MM, rM, iM, OM, SM, jM, aM) {
            const PM = OM.get(yM),
              nM = aM.parts.get(jM);
            if (void 0 === nM && aM.parts.size >= CM) return;
            const QM = Math.min(SM, bM, eM - (null !== nM && void 0 !== nM ? nM : 0));
            if (null === PM || void 0 === PM || !PM.buffer || QM <= 0) return;
            const zM = FM(MM, rM, iM);
            if (!zM) return;
            const LM = PM.stride || 12,
              mM = qM(MM, PM.buffer, PM.offset, (QM - 1) * LM + 12),
              HM = new DataView(mM.buffer),
              hM = function(MM, rM) {
                const iM = function(MM) {
                    const rM = cM.get(MM);
                    if (void 0 !== rM && (null === rM || MM.isProgram(rM))) return rM;
                    sM.inProbe = !0;
                    let iM = null;
                    try {
                      iM = BM(MM, TM, VM, "fed", "the record feed")
                    } finally {
                      sM.inProbe = !1
                    }
                    return cM.set(MM, iM), iM
                  }(MM),
                  OM = iM ? KM(MM, iM, rM, (() => {
                    MM.drawArraysInstanced(JM.POINTS, 0, 1, rM)
                  }), "decode probe input (the record feed)") : null;
                return OM ? new Uint32Array(OM.buffer) : null
              }(MM, QM);
            hM || aM.fed.failed++;
            const dM = KM(MM, zM, 4 * QM, (() => {
              MM.drawArraysInstanced(JM.POINTS, 0, 4, QM)
            }));
            if (!dM) return;
            aM.parts.set(jM, (null !== nM && void 0 !== nM ? nM : 0) + QM);
            for (let JM = 0; JM < QM; JM++) {
              const MM = JM * LM,
                rM = [HM.getUint32(MM, !0), HM.getUint32(MM + 4, !0), HM.getUint32(MM + 8, !0)],
                iM = hM ? [hM[3 * JM], hM[3 * JM + 1], hM[3 * JM + 2]] : rM;
              hM && (aM.fed.records++, iM.some(((MM, iM) => MM !== rM[iM])) && (aM.fed.differing++, aM.fed.first.length < 8 && aM.fed.first.push(`part ${jM} instance ${JM}: fed ${iM.map(Sr).join(" ")} buffer ${rM.map(Sr).join(" ")}`)));
              for (let OM = 0; OM < 4; OM++) {
                const MM = 3 * (4 * JM + OM);
                aM.vertices.push({
                  record: iM,
                  slot: OM,
                  group: jM,
                  gpu: [dM[MM], dM[MM + 1], dM[MM + 2]]
                })
              }
            }
          }(MM, rM, iM, OM.byLocation, jM, SM, aM)
        } else {
          const OM = Mr(MM, rM, 16),
            jM = Mr(MM, rM, 8);
          for (const MM of [OM, jM]) MM && nM.pages.push({
            kind: "tex",
            texture: MM
          });
          OM && function(MM, rM, iM, OM, SM, jM) {
            if (jM.parts.size >= CM) return;
            const aM = FM(MM, rM, iM);
            if (!aM) return;
            let PM = 6 * eM;
            const nM = [];
            for (const [HM, hM] of SM) {
              const MM = Math.min(hM, PM, Math.max(6, 6 * Math.floor(eM / SM.length)));
              MM > 0 && (nM.push([HM, MM]), PM -= MM)
            }
            const QM = nM.reduce(((MM, rM) => {
                let [, iM] = rM;
                return MM + iM
              }), 0),
              zM = KM(MM, aM, QM, (() => {
                for (const [rM, iM] of nM) MM.drawArrays(JM.POINTS, rM, iM)
              }));
            if (!zM) return;
            let LM = 0;
            for (const [HM, hM] of nM) {
              const rM = Math.floor(HM / 6),
                iM = Math.floor((HM + hM - 1) / 6) - rM + 1,
                SM = rr(MM, OM, GM, rM, iM);
              for (let MM = HM; MM < HM + hM; MM++, LM++) {
                var mM;
                const iM = 4 * (Math.floor(MM / 6) - rM),
                  OM = [SM[iM], SM[iM + 1], SM[iM + 2]];
                jM.parts.set(SM[iM + 3], (null !== (mM = jM.parts.get(SM[iM + 3])) && void 0 !== mM ? mM : 0) + (MM % 6 === 0 ? 1 : 0)), jM.vertices.push({
                  record: OM,
                  slot: UM[MM % 6],
                  group: SM[iM + 3],
                  gpu: [zM[3 * LM], zM[3 * LM + 1], zM[3 * LM + 2]]
                })
              }
            }
          }(MM, rM, iM, OM, SM, aM)
        }
      } catch (zM) {
        NM(`decode probe failed on program ${uM(iM)}: ${String(zM)}`)
      }
    }

    function FM(MM, rM, iM) {
      if (void 0 !== iM.probe) return iM.probe && XM(MM, rM, iM.probe), iM.probe;
      iM.probe = null, sM.inProbe = !0;
      try {
        iM.probe = function(MM, rM) {
          return BM(MM, (iM = rM.vertex, iM.replace(`\nvec3 ${dM} = vec3(0);\n`, `\nout vec3 ${dM};\n`)), rM.fragment, dM, `program ${uM(rM)}'s twin`);
          var iM
        }(MM, iM)
      } finally {
        sM.inProbe = !1
      }
      return iM.probe && XM(MM, rM, iM.probe), iM.probe
    }

    function BM(MM, rM, iM, OM, SM) {
      const jM = [MM.createShader(JM.VERTEX_SHADER), MM.createShader(JM.FRAGMENT_SHADER)],
        aM = MM.createProgram();
      if (!aM || !jM[0] || !jM[1]) return null;
      MM.shaderSource(jM[0], rM), MM.shaderSource(jM[1], iM);
      for (const nM of jM) MM.compileShader(nM), MM.attachShader(aM, nM);
      MM.transformFeedbackVaryings(aM, [OM], JM.INTERLEAVED_ATTRIBS), MM.linkProgram(aM);
      for (const nM of jM) MM.deleteShader(nM);
      var PM;
      return MM.getProgramParameter(aM, JM.LINK_STATUS) ? aM : (NM(`decode probe: ${SM} failed to link: ${xM(null!==(PM=MM.getProgramInfoLog(aM))&&void 0!==PM?PM:"",300)}`), MM.deleteProgram(aM), null)
    }

    function XM(MM, rM, iM) {
      const OM = MM.getProgramParameter(rM, JM.ACTIVE_UNIFORM_BLOCKS);
      for (let PM = 0; PM < OM; PM++) {
        const OM = MM.getActiveUniformBlockName(rM, PM),
          SM = null === OM ? JM.INVALID_INDEX : MM.getUniformBlockIndex(iM, OM);
        SM !== JM.INVALID_INDEX && MM.uniformBlockBinding(iM, SM, MM.getActiveUniformBlockParameter(rM, PM, JM.UNIFORM_BLOCK_BINDING))
      }
      const SM = MM.getParameter(JM.CURRENT_PROGRAM);
      MM.useProgram(iM);
      const jM = MM.getProgramParameter(rM, JM.ACTIVE_UNIFORMS),
        aM = MM.getActiveUniforms(rM, [...Array(jM).keys()], JM.UNIFORM_BLOCK_INDEX);
      for (let PM = 0; PM < jM; PM++) {
        const OM = MM.getActiveUniform(rM, PM);
        if (!OM || -1 !== aM[PM]) continue;
        const SM = OM.name.replace(/\[0\]$/, "");
        for (let jM = 0; jM < OM.size; jM++) {
          const aM = OM.size > 1 ? `${SM}[${jM}]` : OM.name,
            PM = MM.getUniformLocation(rM, aM),
            nM = MM.getUniformLocation(iM, aM);
          PM && nM && IM(MM, nM, OM.type, MM.getUniform(rM, PM))
        }
      }
      MM.useProgram(SM)
    }

    function IM(MM, rM, iM, OM) {
      const SM = ArrayBuffer.isView(OM) ? Array.from(OM) : [Number(OM)];
      switch (iM) {
        case JM.FLOAT:
          return void MM.uniform1f(rM, SM[0]);
        case JM.FLOAT_VEC2:
          return void MM.uniform2fv(rM, SM);
        case JM.FLOAT_VEC3:
          return void MM.uniform3fv(rM, SM);
        case JM.FLOAT_VEC4:
          return void MM.uniform4fv(rM, SM);
        case JM.FLOAT_MAT3:
          return void MM.uniformMatrix3fv(rM, !1, SM);
        case JM.FLOAT_MAT4:
          return void MM.uniformMatrix4fv(rM, !1, SM);
        case JM.UNSIGNED_INT:
          return void MM.uniform1ui(rM, SM[0]);
        case JM.UNSIGNED_INT_VEC2:
          return void MM.uniform2uiv(rM, SM);
        case JM.UNSIGNED_INT_VEC3:
          return void MM.uniform3uiv(rM, SM);
        case JM.UNSIGNED_INT_VEC4:
          return void MM.uniform4uiv(rM, SM);
        case JM.INT_VEC2:
          return void MM.uniform2iv(rM, SM);
        case JM.INT_VEC3:
          return void MM.uniform3iv(rM, SM);
        case JM.INT_VEC4:
          return void MM.uniform4iv(rM, SM);
        default:
          MM.uniform1i(rM, SM[0])
      }
    }

    function KM(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const jM = MM.getParameter(JM.CURRENT_PROGRAM),
        aM = MM.getParameter(JM.TRANSFORM_FEEDBACK_BINDING),
        PM = MM.getParameter(JM.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        nM = MM.getParameter(JM.COPY_READ_BUFFER_BINDING),
        QM = MM.isEnabled(JM.RASTERIZER_DISCARD),
        zM = MM.createTransformFeedback(),
        LM = MM.createBuffer();
      sM.inProbe = !0;
      try {
        const jM = MM.getError();
        jM !== JM.NO_ERROR && NM(`GL error 0x${jM.toString(16)} pending before the decode probe (the renderer's)`), MM.useProgram(rM), MM.bindTransformFeedback(JM.TRANSFORM_FEEDBACK, zM), MM.bindBuffer(JM.TRANSFORM_FEEDBACK_BUFFER, LM), MM.bufferData(JM.TRANSFORM_FEEDBACK_BUFFER, 12 * iM, JM.STREAM_READ), MM.bindBufferBase(JM.TRANSFORM_FEEDBACK_BUFFER, 0, LM), MM.enable(JM.RASTERIZER_DISCARD), MM.beginTransformFeedback(JM.POINTS), OM(), MM.endTransformFeedback(), MM.bindBufferBase(JM.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const aM = MM.getError();
        if (aM !== JM.NO_ERROR) return NM(`${SM}: GL error 0x${aM.toString(16)} on the feedback draw`), null;
        const PM = new Float32Array(3 * iM);
        return MM.bindBuffer(JM.COPY_READ_BUFFER, LM), MM.getBufferSubData(JM.COPY_READ_BUFFER, 0, PM), PM
      } finally {
        QM || MM.disable(JM.RASTERIZER_DISCARD), MM.bindTransformFeedback(JM.TRANSFORM_FEEDBACK, aM), MM.bindBuffer(JM.TRANSFORM_FEEDBACK_BUFFER, PM), MM.bindBuffer(JM.COPY_READ_BUFFER, nM), MM.deleteTransformFeedback(zM), MM.deleteBuffer(LM), MM.useProgram(jM), sM.inProbe = !1
      }
    }

    function qM(MM, rM, iM, OM) {
      const SM = MM.getParameter(JM.COPY_READ_BUFFER_BINDING),
        jM = new Uint8Array(OM);
      return MM.bindBuffer(JM.COPY_READ_BUFFER, rM), MM.getBufferSubData(JM.COPY_READ_BUFFER, iM, jM), MM.bindBuffer(JM.COPY_READ_BUFFER, SM), jM
    }
    const TM = `#version 300 es\nlayout(location = ${yM}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      VM = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      cM = new WeakMap;

    function Mr(MM, rM, iM) {
      const OM = MM.getProgramParameter(rM, JM.ACTIVE_UNIFORMS),
        SM = MM.getParameter(JM.ACTIVE_TEXTURE);
      try {
        for (let SM = 0; SM < OM; SM++) {
          const OM = MM.getActiveUniform(rM, SM);
          if ((null === OM || void 0 === OM ? void 0 : OM.type) !== JM.UNSIGNED_INT_SAMPLER_2D) continue;
          const jM = MM.getUniformLocation(rM, OM.name),
            aM = jM ? MM.getUniform(rM, jM) : -1;
          if (aM < 0) continue;
          MM.activeTexture(JM.TEXTURE0 + aM);
          const PM = MM.getParameter(JM.TEXTURE_BINDING_2D);
          if (PM && WM.get(PM) === iM) return PM
        }
        return null
      } finally {
        MM.activeTexture(SM)
      }
    }

    function rr(MM, rM, iM, OM, SM) {
      const jM = new Uint32Array(4 * SM),
        aM = MM.getParameter(JM.READ_FRAMEBUFFER_BINDING),
        PM = MM.createFramebuffer();
      MM.bindFramebuffer(JM.READ_FRAMEBUFFER, PM), MM.framebufferTexture2D(JM.READ_FRAMEBUFFER, JM.COLOR_ATTACHMENT0, JM.TEXTURE_2D, rM, 0);
      try {
        let rM = 0;
        for (; rM < SM;) {
          const aM = OM + rM,
            PM = aM % iM,
            nM = Math.min(SM - rM, iM - PM);
          MM.readPixels(PM, Math.floor(aM / iM), nM, 1, JM.RGBA_INTEGER, JM.UNSIGNED_INT, jM.subarray(4 * rM, 4 * (rM + nM))), rM += nM
        }
      } finally {
        MM.bindFramebuffer(JM.READ_FRAMEBUFFER, aM), MM.deleteFramebuffer(PM)
      }
      return jM
    }

    function ir(MM, rM, iM) {
      let OM = 0,
        SM = 0;
      for (let nM = 0; nM < rM.bytes.length; nM += tM) {
        OM++;
        const MM = Math.min(nM + tM, rM.bytes.length);
        HM(rM.bytes.subarray(nM, MM)) !== HM(iM.subarray(nM, MM)) && SM++
      }
      const jM = `${MM} ${rM.bytes.length} B cpu ${HM(rM.bytes).toString(16)} gpu ${HM(iM).toString(16)}, ${SM}/${OM} blocks differ${rM.missed?`, ${rM.missed} GPU-side writes uncopied`:""}`;
      if (0 === SM) return jM;
      const {
        count: aM,
        offsets: PM
      } = function(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const OM = Math.min(MM.length, rM.length);
        let SM = Math.abs(MM.length - rM.length);
        const jM = [];
        for (let aM = 0; aM < OM; aM++) MM[aM] !== rM[aM] && (SM++, jM.length < iM && jM.push(aM));
        return {
          count: SM,
          offsets: jM
        }
      }(rM.bytes, iM);
      return AM([`${jM}: ${aM} bytes differ`, ...PM.map((MM => `  +${MM}: cpu ${hM(rM.bytes,MM)} | gpu ${hM(iM,MM)}`))].join("\n")), `${jM}: ${aM} bytes differ, first at ${PM.join(", ")} (context in the saved file)`
    }

    function Or(MM) {
      if (0 === MM.vertices.length) return void NM(`decode probe (${MM.reason}): no terrain draw probed (${MM.draws.length} seen)`);
      const rM = function(MM) {
          const rM = new Map;
          for (const OM of MM) {
            const MM = rM.get(OM.group);
            MM ? MM.push(OM) : rM.set(OM.group, [OM])
          }
          const iM = {
            vertices: MM.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [OM, SM] of rM) {
            const MM = new Map,
              rM = SM.map((rM => {
                const iM = zM(rM.record, rM.slot),
                  OM = [rM.gpu[0] - iM[0], rM.gpu[1] - iM[1], rM.gpu[2] - iM[2]],
                  SM = OM.map((MM => Math.round(64 * MM))).join(","),
                  jM = MM.get(SM);
                return jM ? jM.count++ : MM.set(SM, {
                  count: 1,
                  offset: OM
                }), iM
              }));
            let jM = [0, 0, 0],
              aM = 0;
            for (const iM of MM.values()) iM.count > aM && (aM = iM.count, jM = iM.offset);
            iM.translations.set(OM, jM), SM.forEach(((MM, OM) => {
              var SM;
              const aM = [rM[OM][0] + jM[0], rM[OM][1] + jM[1], rM[OM][2] + jM[2]];
              if (aM.every(((rM, iM) => {
                  return OM = MM.gpu[iM], SM = rM, Math.abs(OM - SM) <= Math.max(.001, 1e-6 * Math.abs(SM));
                  var OM, SM
                }))) return;
              iM.mismatches++, iM.byDirection[PM(MM.record[2])]++, iM.byDiagonal[nM(MM.record[2])]++;
              const QM = LM(MM.record);
              iM.byBand[QM] = (null !== (SM = iM.byBand[QM]) && void 0 !== SM ? SM : 0) + 1, iM.first.length < mM && iM.first.push({
                ...MM,
                expected: aM
              })
            }))
          }
          return iM
        }(MM.vertices),
        iM = rM.byDirection.map(((MM, rM) => MM ? `${aM[rM]} ${MM}` : "")).filter(Boolean).join(" "),
        OM = Object.entries(rM.byBand).map((MM => {
          let [rM, iM] = MM;
          return `${rM}: ${iM}`
        })).join(" ");
      if (NM(`decode probe (${MM.reason}): ${rM.mismatches}/${rM.vertices} vertices differ from the CPU decode over ${MM.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (rM.mismatches ? ` by direction [${iM}] diagonal [0: ${rM.byDiagonal[0]} 1: ${rM.byDiagonal[1]}] extent [${OM}]` : "")), MM.fed.records > 0 || MM.fed.failed > 0) {
        NM(`decode probe input: ${MM.fed.differing}/${MM.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (MM.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (MM.fed.failed ? `; the feed failed on ${MM.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const rM of MM.fed.first) NM(`  ${rM}`)
      }
      for (const SM of rM.first) {
        const [MM, rM, iM] = SM.record;
        NM(`  mismatch part ${SM.group} r0 ${MM.toString(16)} r1 ${rM.toString(16)} r2 ${iM.toString(16)} slot ${SM.slot} (${aM[PM(iM)]}): expected ${SM.expected.map(jr).join(",")} gpu ${SM.gpu.map(jr).join(",")}`)
      }
      AM(`decode probe translations: ${[...rM.translations].map((MM=>{let[rM,iM]=MM;return`${rM}: ${iM.map(jr).join(",")}`})).join("; ")}`)
    }

    function Sr(MM) {
      return MM.toString(16)
    }

    function jr(MM) {
      return Number.isInteger(MM) ? String(MM) : MM.toFixed(3)
    }

    function ar(MM) {
      return null !== sM.pendingCheck ? Promise.resolve() : new Promise((rM => {
        let iM = !1;
        const OM = {
          reason: MM,
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
        sM.pendingCheck = OM;
        const SM = () => {
            sM.pendingCheck = null;
            try {
              ! function(MM) {
                NM(`draw ranges (${MM.reason}): ${MM.terrainDraws} terrain draws in the frame, the first ${MM.draws.length} here`);
                for (const rM of MM.draws) {
                  const MM = rM.Ld.slice(0, 8).map((MM => {
                      let [rM, iM] = MM;
                      return `${rM}+${iM}`
                    })).join(" "),
                    iM = rM.Ld.length > 8 ? ` (+${rM.Ld.length-8} ranges)` : "";
                  NM(`  ${uM(rM.program)} ${rM.program.terrain} ${rM.call} ${MM}${iM} x${rM.instances}${rM.group>=0?` part ${rM.group} chunk ${rM.chunk}`:""} | ${rM.attributes.join(" | ")}`)
                }
              }(OM), Or(OM);
              OM.draws.some((MM => "undefined" !== typeof WebGL2RenderingContext && MM.gl instanceof WebGL2RenderingContext)) || 0 === OM.draws.length ? function(MM) {
                const rM = [],
                  iM = new Map;
                for (const OM of MM)
                  if ("undefined" !== typeof WebGL2RenderingContext && OM.gl instanceof WebGL2RenderingContext)
                    for (const MM of OM.pages) iM.set("buf" === MM.kind ? MM.buffer : MM.texture, {
                      page: MM,
                      gl: OM.gl
                    });
                for (const [OM, {
                    page: SM,
                    gl: jM
                  }] of iM) {
                  const MM = pM.get(OM);
                  if (!MM) {
                    rM.push(`${SM.kind}#${ZM(OM)}: no CPU copy (${sM.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === SM.kind) {
                    rM.push(ir(`buf#${MM.id}`, MM, qM(jM, SM.buffer, 0, MM.bytes.length)));
                    continue
                  }
                  const iM = rr(jM, SM.texture, MM.width, 0, MM.width * MM.height),
                    aM = 16 === MM.texelBytes ? new Uint8Array(iM.buffer) : new Uint8Array(new Uint16Array(iM).buffer);
                  rM.push(ir(`tex#${MM.id} (${16===MM.texelBytes?"records":"light"})`, MM, aM))
                }
                for (const OM of rM) NM(`page readback ${OM}`)
              }(OM.draws) : NM("page readback: none on WebGL1 (no buffer readback)")
            } catch (MM) {
              NM(`check failed: ${String(MM)}`)
            }
            rM()
          },
          jM = () => {
            if (OM.draws.length > 0 && !iM) return iM = !0, void setTimeout(SM, 0);
            iM || requestAnimationFrame(jM)
          };
        requestAnimationFrame(jM), setTimeout((() => {
          iM || (iM = !0, SM())
        }), 5e3)
      }))
    }
    var Pr = iM(5069);
    const nr = 20,
      Qr = 24,
      zr = Reflect.apply;

    function Lr(MM, rM, iM) {
      if (!MM) return;
      const OM = MM[rM];
      if ("function" === typeof OM) {
        const SM = iM(OM);
        MM[rM] = SM, (0, Pr.A)(SM, OM)
      }
    }
    let mr = !1;
    const Hr = new WeakMap,
      hr = new WeakMap,
      Jr = new WeakMap,
      dr = {
        gl: 0,
        lost: 0
      };
    let yr = {
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
      lr = {
        buffer: 0,
        texture: 0
      },
      Er = 0;

    function Ur(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (MM instanceof ArrayBuffer) return new Uint8Array(MM, rM, iM || void 0);
      if (!ArrayBuffer.isView(MM)) return null;
      const OM = "BYTES_PER_ELEMENT" in MM ? MM.BYTES_PER_ELEMENT : 1,
        SM = MM.byteOffset + rM * OM,
        jM = iM ? iM * OM : MM.byteLength - rM * OM;
      return new Uint8Array(MM.buffer, SM, Math.max(0, jM))
    }

    function Gr(MM, rM) {
      const iM = function(MM) {
        switch (MM) {
          case JM.ARRAY_BUFFER:
            return JM.ARRAY_BUFFER_BINDING;
          case JM.ELEMENT_ARRAY_BUFFER:
            return JM.ELEMENT_ARRAY_BUFFER_BINDING;
          case JM.COPY_READ_BUFFER:
            return JM.COPY_READ_BUFFER_BINDING;
          case JM.COPY_WRITE_BUFFER:
            return JM.COPY_WRITE_BUFFER_BINDING;
          case JM.UNIFORM_BUFFER:
            return JM.UNIFORM_BUFFER_BINDING;
          case JM.PIXEL_UNPACK_BUFFER:
            return JM.PIXEL_UNPACK_BUFFER_BINDING;
          case JM.TRANSFORM_FEEDBACK_BUFFER:
            return JM.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(rM);
      return iM ? MM.getParameter(iM) : null
    }

    function Cr(MM) {
      const rM = pM.get(MM);
      rM && (sM.shadowBytes -= rM.bytes.length, pM.delete(MM))
    }

    function er(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      Cr(MM), sM.shadowBytes + rM > wM ? sM.uncopied++ : (sM.shadowBytes += rM, pM.set(MM, {
        id: ZM(MM),
        bytes: new Uint8Array(rM),
        width: iM,
        height: OM,
        texelBytes: SM,
        missed: 0
      }))
    }

    function br(MM, rM) {
      for (const iM of ["deleteBuffer", "deleteTexture"]) Lr(MM, iM, (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        return iM[0] && Cr(iM[0]), zr(MM, this, iM)
      }));
      Lr(MM, "shaderSource", (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        return iM[0] && "string" === typeof iM[1] && Hr.set(iM[0], iM[1]), zr(MM, this, iM)
      })), Lr(MM, "attachShader", (MM => function() {
        for (var rM, iM = arguments.length, OM = new Array(iM), SM = 0; SM < iM; SM++) OM[SM] = arguments[SM];
        const jM = OM[0],
          aM = null !== (rM = hr.get(jM)) && void 0 !== rM ? rM : [];
        return aM.push(OM[1]), hr.set(jM, aM), zr(MM, this, OM)
      })), Lr(MM, "linkProgram", (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        const SM = zr(MM, this, iM);
        return sM.inProbe || function(MM, rM) {
          var iM, OM, SM;
          "undefined" !== typeof HTMLCanvasElement && MM.canvas instanceof HTMLCanvasElement && function(MM) {
            if (pr.has(MM)) return;
            pr.add(MM);
            for (const rM of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) MM.addEventListener(rM, (MM => {
              dr.lost < nr && (dr.lost++, NM(`${rM}${"statusMessage"in MM?`: ${String(MM.statusMessage)}`:""}`))
            }))
          }(MM.canvas);
          sM.context ??= MM;
          const jM = null !== (iM = hr.get(rM)) && void 0 !== iM ? iM : [];
          let aM = "",
            PM = "";
          for (const zM of jM) {
            var nM;
            const MM = null !== (nM = Hr.get(zM)) && void 0 !== nM ? nM : "";
            /\bgl_Position\b/.test(MM) ? aM = MM : PM = MM
          }
          const QM = {
            id: ZM(rM),
            name: null !== (OM = null === (SM = gM.exec(aM)) || void 0 === SM ? void 0 : SM[1]) && void 0 !== OM ? OM : null,
            gl: MM,
            vertex: aM,
            fragment: PM,
            terrain: tr(aM),
            checked: !1,
            firstDraw: !1
          };
          if (Jr.set(rM, QM), RM.push([rM, QM]), null !== QM.terrain) {
            const rM = jM.map((rM => {
              var iM;
              return null !== (iM = MM.getShaderInfoLog(rM)) && void 0 !== iM ? iM : ""
            })).filter((MM => "" !== MM.trim()));
            rM.length > 0 && AM(`program ${uM(QM)} (${QM.terrain}) shader logs:\n${xM(rM.join("\n"))}`)
          }
        }(this, iM[0]), SM
      })), Lr(MM, "bufferData", (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        const SM = zr(MM, this, iM);
        if (!sM.inProbe) {
          const MM = Gr(this, iM[0]);
          if (MM) {
            var jM, aM, PM;
            const rM = "number" === typeof iM[1] ? null : Ur(iM[1], null !== (jM = iM[3]) && void 0 !== jM ? jM : 0, null !== (aM = iM[4]) && void 0 !== aM ? aM : 0);
            var nM;
            if (er(MM, "number" === typeof iM[1] ? iM[1] : null !== (PM = null === rM || void 0 === rM ? void 0 : rM.length) && void 0 !== PM ? PM : 0), rM) null === (nM = pM.get(MM)) || void 0 === nM || nM.bytes.set(rM)
          }
        }
        return SM
      })), Lr(MM, "bufferSubData", (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        const SM = zr(MM, this, iM);
        if (!sM.inProbe) {
          var jM, aM;
          const MM = Gr(this, iM[0]),
            rM = MM ? pM.get(MM) : void 0,
            OM = Ur(iM[2], null !== (jM = iM[3]) && void 0 !== jM ? jM : 0, null !== (aM = iM[4]) && void 0 !== aM ? aM : 0);
          if (rM && OM) {
            const MM = iM[1];
            rM.bytes.set(OM.subarray(0, Math.max(0, rM.bytes.length - MM)), MM), wr("buffer", rM, MM, OM.length)
          }
        }
        return SM
      })), rM && (Lr(MM, "copyBufferSubData", (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        const SM = zr(MM, this, iM);
        if (!sM.inProbe) {
          const [MM, rM, OM, SM, jM] = iM, aM = Gr(this, MM), PM = Gr(this, rM), nM = aM ? pM.get(aM) : void 0, QM = PM ? pM.get(PM) : void 0;
          QM && (nM ? QM.bytes.set(nM.bytes.slice(OM, OM + jM), SM) : QM.missed++)
        }
        return SM
      })), Lr(MM, "texStorage2D", (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        const SM = zr(MM, this, iM),
          [, , jM, aM, PM] = iM;
        if (!sM.inProbe && (jM === JM.RGBA32UI || jM === JM.RGBA16UI)) {
          const MM = this.getParameter(JM.TEXTURE_BINDING_2D),
            rM = jM === JM.RGBA32UI ? 16 : 8;
          MM && (WM.set(MM, rM), er(MM, aM * PM * rM, aM, PM, rM))
        }
        return SM
      })), Lr(MM, "texSubImage2D", (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        const SM = zr(MM, this, iM);
        return !sM.inProbe && iM.length >= 9 && iM[0] === JM.TEXTURE_2D && 0 === iM[1] && function(MM, rM) {
          var iM;
          const OM = MM.getParameter(JM.TEXTURE_BINDING_2D),
            SM = OM ? pM.get(OM) : void 0;
          if (!SM) return;
          const [, , jM, aM, PM, nM] = rM;
          let QM = Ur(rM[8], null !== (iM = rM[9]) && void 0 !== iM ? iM : 0);
          if (null === QM && "number" === typeof rM[8]) {
            const iM = Gr(MM, JM.PIXEL_UNPACK_BUFFER),
              OM = iM ? pM.get(iM) : void 0;
            QM = OM ? OM.bytes.subarray(rM[8]) : null
          }
          if (null === QM) return void SM.missed++;
          const zM = MM.getParameter(JM.UNPACK_ROW_LENGTH) || PM,
            LM = MM.getParameter(JM.UNPACK_SKIP_ROWS),
            mM = MM.getParameter(JM.UNPACK_SKIP_PIXELS),
            HM = SM.texelBytes;
          for (let hM = 0; hM < nM; hM++) {
            const MM = ((LM + hM) * zM + mM) * HM,
              rM = ((aM + hM) * SM.width + jM) * HM;
            SM.bytes.set(QM.subarray(MM, MM + PM * HM), rM)
          }
          wr("texture", SM, (aM * SM.width + jM) * HM, PM * nM * HM)
        }(this, iM), SM
      })), Lr(MM, "copyTexSubImage2D", (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        const SM = iM[0] === JM.TEXTURE_2D ? this.getParameter(JM.TEXTURE_BINDING_2D) : null,
          jM = SM ? pM.get(SM) : void 0;
        return jM && jM.missed++, zr(MM, this, iM)
      })));
      for (const iM of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) Lr(MM, iM, (MM => function() {
        for (var rM = arguments.length, OM = new Array(rM), SM = 0; SM < rM; SM++) OM[SM] = arguments[SM];
        const jM = zr(MM, this, OM);
        return sM.inProbe || ur(this, iM, OM), jM
      }));
      Lr(MM, "getExtension", (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        const SM = zr(MM, this, iM);
        return SM && "object" === typeof SM && function(MM, rM, iM) {
          const OM = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(rM in OM) || iM.bloxdRenderDebug) return;
          iM.bloxdRenderDebug = !0;
          for (const SM of OM[rM]) {
            const rM = iM[SM];
            "function" === typeof rM && (iM[SM] = function() {
              for (var OM = arguments.length, jM = new Array(OM), aM = 0; aM < OM; aM++) jM[aM] = arguments[aM];
              const PM = zr(rM, iM, jM);
              return sM.inProbe || ur(MM, SM, jM), PM
            })
          }
        }(this, iM[0], SM), SM
      }))
    }

    function wr(MM, rM, iM, OM) {
      lr[MM] += OM, Er < 32 && rM.bytes.length >= 1 << 20 && (Er++, AM(`upload ${MM} #${rM.id} +${iM} ${OM} B`))
    }

    function tr(MM) {
      if (!MM.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(MM) || /in uvec3 _p2vs_location0\b/.test(MM) ? "inst" : "tex"
    }

    function gr(MM, rM, iM) {
      var OM;
      if (iM.checked) return;
      iM.checked = !0;
      const SM = MM.getProgramParameter(rM, JM.LINK_STATUS),
        jM = (null !== (OM = MM.getProgramInfoLog(rM)) && void 0 !== OM ? OM : "").trim();
      var aM;
      null === iM.terrain && SM || (NM(`program ${uM(iM)} ${null!==(aM=iM.terrain)&&void 0!==aM?aM:"other"} link ${SM?"ok":"FAILED"}${jM?`: ${xM(jM,300)}`:""}`), jM && AM(`program ${uM(iM)} link log:\n${xM(jM)}`))
    }

    function ur(MM, rM, iM) {
      var OM;
      const SM = MM.getParameter(JM.CURRENT_PROGRAM),
        jM = SM ? Jr.get(SM) : void 0;
      if (!SM || !jM) return;
      const aM = null !== (OM = jM.terrain) && void 0 !== OM ? OM : "other",
        {
          Ld: PM,
          instances: nM
        } = function(MM, rM) {
          switch (MM) {
            case "drawArrays":
              return {
                Ld: [
                  [rM[1], rM[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                Ld: [
                  [rM[1], rM[2]]
                ], instances: rM[3]
              };
            case "drawElements":
              return {
                Ld: [
                  [0, rM[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                Ld: [
                  [0, rM[1]]
                ], instances: rM[4]
              };
            case "multiDrawArraysWEBGL": {
              const MM = rM[1],
                iM = rM[3],
                OM = rM[2],
                SM = rM[4],
                jM = [];
              for (let aM = 0; aM < rM[5]; aM++) jM.push([MM[OM + aM], iM[SM + aM]]);
              return {
                Ld: jM,
                instances: 1
              }
            }
            default:
              return {
                Ld: [], instances: 0
              }
          }
        }(rM, iM),
        QM = "inst" === jM.terrain ? nM : PM.reduce(((MM, rM) => {
          let [, iM] = rM;
          return MM + iM
        }), 0) / 6;
      if (yr[aM].draws++, yr[aM].faces += QM, null === jM.terrain) return;
      if (sM.context = MM, !jM.firstDraw) {
        jM.firstDraw = !0, gr(MM, SM, jM), Rr || (Rr = !0, NM(function(MM) {
          var rM;
          const iM = MM.getParameter(JM.DEPTH_FUNC),
            OM = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let SM = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in MM && MM.getParameter(JM.DRAW_FRAMEBUFFER_BINDING)) {
            const rM = MM;
            SM = rM.getFramebufferAttachmentParameter(JM.DRAW_FRAMEBUFFER, JM.DEPTH_ATTACHMENT, JM.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(rM.getFramebufferAttachmentParameter(JM.DRAW_FRAMEBUFFER,JM.DEPTH_ATTACHMENT,JM.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(rM.getFramebufferAttachmentParameter(JM.DRAW_FRAMEBUFFER,JM.DEPTH_ATTACHMENT,JM.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const jM = MM.getParameter(JM.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(rM=OM[iM])&&void 0!==rM?rM:`0x${iM.toString(16)}`} clear ${jM}${516===iM||518===iM?" (reverse-Z)":""}, samples ${String(MM.getParameter(JM.SAMPLES))}, ${SM}`
        }(MM)));
        const iM = MM.getError();
        iM !== JM.NO_ERROR && dr.gl < nr && (dr.gl++, NM(`GL error 0x${iM.toString(16)} after program ${uM(jM)}'s first terrain draw (${rM})`))
      }
      const zM = sM.pendingCheck;
      null !== zM && (zM.terrainDraws++, zM.draws.length < Qr && vM(MM, SM, jM, rM, PM, nM))
    }
    let Rr = !1;
    const pr = new WeakSet;
    var Wr = iM(4895),
      sr = iM(5076);
    const Dr = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let kr = !1;
    const Zr = new WeakSet,
      or = new WeakMap,
      fr = new WeakMap,
      Yr = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let Nr = 0,
      Ar = !1,
      xr = null,
      vr = {
        draws: 0,
        faces: 0
      };

    function Fr(MM) {
      const rM = globalThis[MM];
      return null === rM || void 0 === rM ? void 0 : rM.prototype
    }

    function Br(MM) {
      return MM && "function" === typeof MM[Symbol.iterator] ? [...MM].sort().join(" ") : ""
    }

    function Xr(MM, rM) {
      const iM = null !== MM && void 0 !== MM ? MM : {},
        OM = null !== rM && void 0 !== rM ? rM : Object.keys(Object.getPrototypeOf(iM)).concat(Object.keys(iM));
      return [...new Set(OM)].filter((MM => "number" === typeof iM[MM])).map((MM => `${MM} ${String(iM[MM])}`)).join(", ")
    }

    function Ir(MM, rM) {
      var iM;
      const OM = null !== (iM = rM.vertex) && void 0 !== iM ? iM : {};
      if (OM.module && Zr.has(OM.module)) {
        var SM;
        const iM = String(null !== (SM = OM.entryPoint) && void 0 !== SM ? SM : "");
        if (iM.startsWith("vs_packed") && or.set(MM, iM), !Ar) {
          var jM, aM, PM, nM, QM;
          Ar = !0;
          const MM = null !== (jM = rM.depthStencil) && void 0 !== jM ? jM : {},
            OM = null !== (aM = rM.multisample) && void 0 !== aM ? aM : {},
            SM = String(null !== (PM = MM.depthCompare) && void 0 !== PM ? PM : "");
          NM(`WebGPU terrain pipeline ${iM}: depth ${String(null!==(nM=MM.format)&&void 0!==nM?nM:"none")} ${SM}${SM.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(QM=OM.count)&&void 0!==QM?QM:1)}`)
        }
      }
    }

    function Kr(MM) {
      Lr(MM, "setPipeline", (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        return fr.set(this, iM[0]), zr(MM, this, iM)
      }));
      for (const rM of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) Lr(MM, rM, (MM => function() {
        const iM = fr.get(this),
          OM = iM ? or.get(iM) : void 0;
        for (var SM = arguments.length, jM = new Array(SM), aM = 0; aM < SM; aM++) jM[aM] = arguments[aM];
        return void 0 !== OM && qr(rM, OM, jM), zr(MM, this, jM)
      }))
    }

    function qr(MM, rM, iM) {
      var OM;
      (vr.draws++, "draw" === MM || "drawIndexed" === MM) && (vr.faces += iM[0] * (null !== (OM = iM[1]) && void 0 !== OM ? OM : 1) / 6);
      if (null !== xr && xr.length < Qr) {
        const OM = ("draw" === MM ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === MM ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((rM, OM) => {
          const SM = MM.endsWith("Indirect") ? iM[1] : iM[OM];
          return `${rM} ${String(null!==SM&&void 0!==SM?SM:"instances"===rM?1:0)}`
        }));
        xr.push(`  ${rM} ${MM} ${OM.join(" ")}`)
      }
    }

    function Tr() {
      if (kr || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      kr = !0, Lr(Fr("GPU"), "requestAdapter", (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        return zr(MM, this, iM).then((MM => {
          var rM;
          MM ? function(MM) {
            var rM;
            const iM = null !== (rM = MM.info) && void 0 !== rM ? rM : {};
            NM(`WebGPU adapter ${["vendor","architecture","device","description"].map((MM=>{var rM;return`${MM} "${String(null!==(rM=iM[MM])&&void 0!==rM?rM:"")}"`})).join(" ")}${MM.isFallbackAdapter?" (fallback)":""}`), NM(`WebGPU adapter features ${Br(MM.features)}`), NM(`WebGPU adapter limits ${Xr(MM.limits,Dr)}`), AM(`WebGPU adapter all limits ${Xr(MM.limits,null)}`)
          }(MM) : NM(`WebGPU requestAdapter(${JSON.stringify(null!==(rM=iM[0])&&void 0!==rM?rM:{})}) gave none`);
          return MM
        }))
      })), Lr(Fr("GPUAdapter"), "requestDevice", (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        return zr(MM, this, iM).then((MM => (function(MM) {
          NM(`WebGPU device features ${Br(MM.features)}`), NM(`WebGPU device limits ${Xr(MM.limits,Dr)}`), MM.addEventListener("uncapturederror", (MM => {
            if (Yr.uncaptured < nr) {
              var rM, iM, OM;
              Yr.uncaptured++;
              const SM = MM.error;
              NM(`WebGPU uncaptured ${null!==(rM=null===SM||void 0===SM||null===(iM=SM.constructor)||void 0===iM?void 0:iM.name)&&void 0!==rM?rM:"error"}: ${xM(String(null!==(OM=null===SM||void 0===SM?void 0:SM.message)&&void 0!==OM?OM:""),600)}`)
            }
          }));
          const rM = MM.lost;
          null === rM || void 0 === rM || rM.then((MM => {
            var rM;
            NM(`WebGPU device lost (${String(MM.reason)}): ${xM(String(null!==(rM=MM.message)&&void 0!==rM?rM:""),600)}`)
          }))
        }(MM), MM)), (MM => {
          throw NM(`WebGPU requestDevice failed: ${String(MM)}`), MM
        }))
      }));
      const MM = Fr("GPUDevice");
      Lr(MM, "createShaderModule", (MM => function() {
        for (var rM, iM, OM = arguments.length, SM = new Array(OM), jM = 0; jM < OM; jM++) SM[jM] = arguments[jM];
        const aM = zr(MM, this, SM);
        return function(MM, rM) {
          const iM = rM.includes("decodeQuad");
          iM && Zr.add(MM);
          const OM = MM.getCompilationInfo;
          null === OM || void 0 === OM || OM.call(MM).then((MM => {
            if (0 === MM.messages.length && !iM) return;
            const rM = {};
            for (const iM of MM.messages) {
              var OM;
              rM[String(iM.type)] = (null !== (OM = rM[String(iM.type)]) && void 0 !== OM ? OM : 0) + 1
            }
            const SM = MM.messages.map((MM => `${String(MM.type)} ${String(MM.lineNum)}:${String(MM.linePos)} ${String(MM.message)}`)).join("\n");
            Yr.compile < nr && (Yr.compile++, NM(`WebGPU ${iM?"terrain ":""}shader module compiled: ${JSON.stringify(rM)}${SM?` first: ${xM(SM.split("\n")[0],300)}`:""}`)), SM && AM(`WebGPU shader module messages:\n${xM(SM)}`)
          }))
        }(aM, String(null !== (rM = (null !== (iM = SM[0]) && void 0 !== iM ? iM : {}).code) && void 0 !== rM ? rM : "")), aM
      })), Lr(MM, "createRenderPipeline", (MM => function() {
        for (var rM, iM = arguments.length, OM = new Array(iM), SM = 0; SM < iM; SM++) OM[SM] = arguments[SM];
        const jM = zr(MM, this, OM);
        return Ir(jM, null !== (rM = OM[0]) && void 0 !== rM ? rM : {}), jM
      })), Lr(MM, "createRenderPipelineAsync", (MM => function() {
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        return zr(MM, this, iM).then((MM => {
          var rM;
          return Ir(MM, null !== (rM = iM[0]) && void 0 !== rM ? rM : {}), MM
        }), (MM => {
          var rM;
          throw function(MM, rM) {
            var iM, OM, SM;
            if (Yr.rejected >= nr) return;
            Yr.rejected++;
            const {
              reason: jM,
              message: aM
            } = null !== rM && void 0 !== rM ? rM : {}, PM = String(null !== (iM = (null !== (OM = MM.vertex) && void 0 !== OM ? OM : {}).entryPoint) && void 0 !== iM ? iM : "");
            NM(`WebGPU pipeline "${String(null!==(SM=MM.label)&&void 0!==SM?SM:"")}" ${PM} rejected (${String(null!==jM&&void 0!==jM?jM:"no reason")}): ${xM(String(null!==aM&&void 0!==aM?aM:rM),600)}`)
          }(null !== (rM = iM[0]) && void 0 !== rM ? rM : {}, MM), MM
        }))
      })), Lr(Fr("GPUCanvasContext"), "configure", (MM => function() {
        for (var rM, iM = arguments.length, OM = new Array(iM), SM = 0; SM < iM; SM++) OM[SM] = arguments[SM];
        const jM = null !== (rM = OM[0]) && void 0 !== rM ? rM : {};
        var aM, PM;
        Nr++ < 3 && NM(`WebGPU canvas ${String(jM.format)} ${String(null!==(aM=jM.colorSpace)&&void 0!==aM?aM:"srgb")} alpha ${String(null!==(PM=jM.alphaMode)&&void 0!==PM?PM:"opaque")}`);
        return zr(MM, this, OM)
      })), Kr(Fr("GPURenderPassEncoder")), Kr(Fr("GPURenderBundleEncoder"))
    }
    const Vr = 1e4,
      cr = 6e4,
      Mi = 5e3,
      ri = 3e3,
      ii = 100;
    let Oi = null,
      Si = !1,
      ji = {
        ...Wr.c
      },
      ai = !1,
      Pi = null,
      ni = 0,
      Qi = () => {};
    const zi = new Promise((MM => {
      Qi = MM
    }));

    function Li() {
      var MM;
      Si || (Si = !0, ji = Object.assign(window.bloxdRenderDebug ??= {
        ...Wr.c
      }, {
        faceCull: "0" === (0, jM.o)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (MM = (0, jM.o)("adrenoProbe")) && void 0 !== MM ? MM : ""
      }), NM("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), mr || "undefined" === typeof window || (mr = !0, "undefined" !== typeof WebGL2RenderingContext && br(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && br(WebGLRenderingContext.prototype, !1)), Tr(), (0, jM.b)("renderProbe", (() => {
        li("console")
      })), di(), setInterval(Ui, Mi))
    }

    function mi(MM) {
      var rM, iM;
      Li(), Oi = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.backend) && void 0 !== rM ? rM : null;
      const OM = `, renderer param ${null!==(iM=(0,jM.o)("renderer"))&&void 0!==iM?iM:"none"}, faceCull ${"0"===ji.faceCull?"off (whole parts)":"on"}, adrenoProbe ${ji.adrenoProbe||"none"}`;
      NM(`${(0,sr.d)(MM)}${null===MM?"":OM}`)
    }

    function Hi() {
      const MM = performance.now(),
        rM = Ji(zi, Vr, cr).then((rM => li(`${Math.round((performance.now()-MM)/1e3)} s after playable${rM?"":", no terrain drawn yet"}`)));
      (0, SM.c)(NM, (async () => {
        await rM, await Pi
      }))
    }
    async function Ji(MM, rM, iM) {
      const SM = (0, OM.c)(iM).then((() => !1));
      return await (0, OM.c)(rM), Promise.race([MM.then((() => !0)), SM])
    }

    function di() {
      requestAnimationFrame((() => {
        ni++, di()
      }))
    }

    function yi() {
      var MM, rM, iM;
      if (ai) return;
      (ai = !0, NM(`renderer caps ${null!==(MM=ji.caps)&&void 0!==MM?MM:"(not noted)"}; terrain fetch ${null!==(rM=ji.fetch)&&void 0!==rM?rM:"(not noted)"}`), ji.adrenoProbe) && NM(`adrenoProbe ${ji.adrenoProbe} asked; in force (storage fetch only): ${null!==(iM=ji.probe)&&void 0!==iM?iM:"(not noted)"}`);
      const OM = sM.context;
      if (OM) {
        for (const MM of function(MM) {
            var rM;
            const iM = [],
              OM = MM.getExtension("WEBGL_debug_renderer_info"),
              SM = OM ? MM.getParameter(OM.UNMASKED_VENDOR_WEBGL) : "(masked)",
              jM = OM ? MM.getParameter(OM.UNMASKED_RENDERER_WEBGL) : "(masked)";
            iM.push(`GL ${String(MM.getParameter(MM.VERSION))} | ${String(MM.getParameter(MM.SHADING_LANGUAGE_VERSION))} | ${String(MM.getParameter(MM.VENDOR))} / ${String(MM.getParameter(MM.RENDERER))}`), iM.push(`GL unmasked ${SM} / ${jM}`);
            const aM = [
              ["MAX_TEXTURE_SIZE", MM.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", MM.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", MM.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", MM.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", MM.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", MM.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", MM.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in MM && aM.push(["MAX_UNIFORM_BLOCK_SIZE", MM.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", MM.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", MM.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", MM.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), iM.push(`GL limits ${aM.map((rM=>{let[iM,OM]=rM;return`${iM} ${String(MM.getParameter(OM))}`})).join(", ")}`);
            const PM = (rM, iM) => {
              const OM = MM.getShaderPrecisionFormat(rM, MM.HIGH_FLOAT),
                SM = MM.getShaderPrecisionFormat(rM, MM.HIGH_INT);
              return `${iM} highp float ${OM?`${OM.rangeMin}/${OM.rangeMax}/${OM.precision}`:"?"} int ${SM?`${SM.rangeMin}/${SM.rangeMax}/${SM.precision}`:"?"}`
            };
            iM.push(`GL precision ${PM(MM.VERTEX_SHADER,"VS")}, ${PM(MM.FRAGMENT_SHADER,"FS")}`);
            const nM = MM.getContextAttributes();
            return iM.push(`GL context ${JSON.stringify(nM)} drawingBuffer ${MM.drawingBufferWidth}x${MM.drawingBufferHeight}${"drawingBufferFormat"in MM?` format 0x${Number(MM.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in MM?` ${String(MM.drawingBufferColorSpace)}`:""}`), iM.push(`GL extensions ${(null!==(rM=MM.getSupportedExtensions())&&void 0!==rM?rM:[]).join(" ")}`), iM
          }(OM)) NM(MM);
        ! function() {
          if (!sM.context) return;
          let MM = 0,
            rM = 0;
          for (const [iM, OM] of RM) !OM.gl.isContextLost() && OM.gl.isProgram(iM) && (rM++, gr(OM.gl, iM, OM), null !== OM.terrain && MM++);
          NM(`programs: ${rM} live of ${RM.length} linked, ${MM} packed terrain; CPU page copies ${Math.round(sM.shadowBytes/1048576)} MiB (${sM.uncopied} over budget)`)
        }()
      }
    }

    function li(MM) {
      return Pi ??= async function(MM) {
        yi(), "webgpu" === Oi ? (Ei(), "1" === ji.slotCheck && NM("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), ji.slotCheck = "1", await
          function(MM) {
            if (null !== xr) return Promise.resolve();
            const rM = [];
            return xr = rM, new Promise((iM => {
              setTimeout((() => {
                xr = null, NM(`WebGPU draw ranges (${MM}): ${rM.length} terrain draws recorded in a second (first ${Qr}; bundles replay without new ones)`);
                for (const MM of rM) NM(MM);
                iM()
              }), 1e3)
            }))
          }(MM), await async function() {
            if (await (0, Wr.e)(ji, "slotCheck", ["1"], ri, ii), "1" === ji.slotCheck) return void NM(`slot check: no answer in ${ri} ms (only the storage fetch has one; a later answer logs on its own)`);
            Ei()
          }()) : await ar(MM);
        NM(`check (${MM}) done: bloxdDebug.save() downloads it all`)
      }(MM).catch((rM => {
        NM(`check (${MM}) failed: ${String(rM)}`)
      })).finally((() => {
        Pi = null
      })), Pi
    }

    function Ei() {
      void 0 !== ji.slotCheck && "1" !== ji.slotCheck && (NM(ji.slotCheck), delete ji.slotCheck)
    }

    function Ui() {
      const MM = MM => ni ? (MM / ni).toFixed(1) : "0",
        rM = function() {
          const MM = vr;
          return vr = {
            draws: 0,
            faces: 0
          }, MM
        }(),
        iM = function() {
          const MM = yr;
          return yr = {
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
          }, MM
        }(),
        OM = function() {
          const MM = lr;
          return lr = {
            buffer: 0,
            texture: 0
          }, MM
        }();
      Ei(), ("webgpu" === Oi ? rM.draws : iM.inst.draws + iM.tex.draws) > 0 && Qi();
      const SM = "webgpu" === Oi ? [`terrain ${MM(rM.draws)} draws ${MM(rM.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((MM => iM[MM].draws > 0)).map((rM => `${rM} ${MM(iM[rM].draws)} draws ${MM(iM[rM].faces)} faces a frame`));
      NM(`${ni} frames: ${SM.join(", ")||"no draws"}; uploaded ${Math.round(OM.buffer/1024)} KiB to buffers, ${Math.round(OM.texture/1024)} KiB to data textures`), ni = 0
    }
  },
  5076: (MM, rM, iM) => {
    function OM(MM) {
      if (null === MM) return "backend: none picked (no renderer build)";
      const rM = MM.adapter ? `${MM.adapter.vendor}/${MM.adapter.architecture}` : "none";
      return `backend ${MM.backend}: reason ${MM.reason}, source ${MM.source}, adapter ${rM}`
    }
    iM.d(rM, {
      d: () => OM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);