export const id = 44;
export const ids = [44];
export const modules = {
  4096: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => oB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(1173),
      lB = dB(2583);
    const JB = 3e4,
      YB = 1e3;

    function gB() {
      return "visible" === document.visibilityState && "inGame" === VB.d.get("gameState") && (0, pB.r)()
    }

    function oB(BB, TB) {
      ! function(BB, TB, dB) {
        let VB = 0;
        const yB = setInterval((() => {
          TB() && (VB += YB, VB >= BB && (clearInterval(yB), dB()))
        }), YB)
      }(JB, gB, (() => {
        TB().then((() => {
          BB(`saved for the player after ${JB/1e3} s of play`), (0, lB.r)(), yB.h.yH("chat", {
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
  4089: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      installRenderDebug: () => Jd,
      renderDebugPlayable: () => gd,
      startRenderDebug: () => Yd,
      waitForDraw: () => od
    });
    var VB = dB(4057),
      yB = dB(4096),
      pB = dB(2583);
    const lB = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function JB(BB) {
      return 7 & BB
    }

    function YB(BB) {
      return BB >>> 11 & 1
    }

    function gB(BB) {
      return [1 + (BB >>> 18 & 63), 1 + (BB >>> 24 & 63)]
    }

    function oB(BB, TB) {
      const [dB, , VB] = BB, yB = JB(VB), pB = function(BB, TB, dB) {
        return TB + (1 === (22 >>> BB & 1) ? 4 - dB : dB) & 3
      }(yB, YB(VB), TB), lB = yB >>> 1, [oB, kB] = gB(dB), LB = 1 === pB || 2 === pB ? oB : 0, OB = pB >= 2 ? kB : 0, DB = [63 & dB, dB >>> 6 & 63, dB >>> 12 & 63];
      return DB[2 === lB ? 0 : 2] += LB, DB[1 === lB ? 0 : 1] += OB, DB
    }

    function kB(BB) {
      const TB = Math.max(...gB(BB[0]));
      return 1 === TB ? "1" : TB <= 4 ? "2-4" : TB <= 16 ? "5-16" : "17-64"
    }
    const LB = 16;

    function OB(BB) {
      let TB = 2166136261;
      for (let dB = 0; dB < BB.length; dB++) TB = Math.imul(TB ^ BB[dB], 16777619);
      return TB >>> 0
    }

    function DB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const VB = Math.max(0, TB - dB),
        yB = Math.min(BB.length, TB + dB),
        pB = [];
      for (let lB = VB; lB < yB; lB++) {
        const dB = BB[lB].toString(16).padStart(2, "0");
        pB.push(lB === TB ? `[${dB}]` : dB)
      }
      return pB.join(" ")
    }
    const uB = {
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
      HB = "_vs2fs_location0",
      EB = 0,
      vB = 4,
      mB = 6,
      iB = [0, 1, 2, 0, 2, 3],
      NB = 2048,
      tB = 4,
      fB = 256,
      sB = 64,
      MB = 268435456,
      zB = 65536,
      wB = /^#version [^\n]*\/\/ program (\S+)$/m;

    function UB(BB) {
      return null === BB.name ? `#${BB.id}` : `#${BB.id} ${BB.name}`
    }
    const FB = [],
      KB = new WeakMap,
      rB = new WeakMap,
      IB = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let cB = 1;
    const SB = new WeakMap;

    function PB(BB) {
      if (null === BB) return 0;
      let TB = SB.get(BB);
      return void 0 === TB && (TB = cB++, SB.set(BB, TB)), TB
    }
    class QB {
      constructor(BB, TB) {
        this.print = BB, this.now = TB, this.shown = 0, this.Dg = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.RO = [], this.dropped = 0
      }
      line(BB) {
        const TB = this.now();
        if (TB - this.second >= 1e3 && (this.second = TB, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Dg++, void this.store(BB);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${BB} (the last line here: the rest go to bloxdDebug.save())` : BB)
      }
      keep(BB) {
        this.sections++, this.store(BB)
      }
      store(BB) {
        this.RO.push(`${new Date(Date.now()).toISOString()} ${BB}`), this.RO.length > 2e4 && (this.RO.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.Dg} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.RO].join("\n")
      }
    }
    let RB = null;

    function aB() {
      if (null === RB) {
        const BB = new QB((BB => {
          (0, pB.i)("render", BB)
        }), (() => performance.now()));
        (0, pB.f)("render", (() => BB.dump())), RB = BB
      }
      return RB
    }

    function ZB(BB) {
      aB().line(BB)
    }

    function XB(BB) {
      aB().keep(BB)
    }

    function WB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return BB.length <= TB ? BB : `${BB.slice(0,TB)}... (${BB.length-TB} more characters)`
    }

    function hB(BB, TB, dB, VB, yB, pB) {
      const lB = IB.pendingCheck;
      if (null === lB) return;
      const JB = "undefined" !== typeof WebGL2RenderingContext && BB instanceof WebGL2RenderingContext,
        YB = {
          gl: BB,
          program: dB,
          call: VB,
          ek: yB,
          instances: pB,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (lB.draws.push(YB), JB) try {
        const VB = function(BB) {
          const TB = [],
            dB = new Map,
            VB = Math.min(16, BB.getParameter(uB.MAX_VERTEX_ATTRIBS));
          for (let yB = 0; yB < VB; yB++) {
            if (!BB.getVertexAttrib(yB, uB.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const VB = BB.getVertexAttrib(yB, uB.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              pB = BB.getVertexAttribOffset(yB, uB.VERTEX_ATTRIB_ARRAY_POINTER),
              lB = BB.getVertexAttrib(yB, uB.VERTEX_ATTRIB_ARRAY_STRIDE),
              JB = BB.getVertexAttrib(yB, uB.VERTEX_ATTRIB_ARRAY_SIZE),
              YB = BB.getVertexAttrib(yB, uB.VERTEX_ATTRIB_ARRAY_TYPE),
              gB = "VERTEX_ATTRIB_ARRAY_INTEGER" in BB && BB.getVertexAttrib(yB, uB.VERTEX_ATTRIB_ARRAY_INTEGER),
              oB = "VERTEX_ATTRIB_ARRAY_DIVISOR" in BB ? BB.getVertexAttrib(yB, uB.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            dB.set(yB, {
              buffer: VB,
              offset: pB,
              stride: lB
            }), TB.push(`@${yB} buf#${PB(VB)} +${pB} stride ${lB} ${JB}x0x${YB.toString(16)}${gB?" int":""} div ${oB}`)
          }
          return {
            lines: TB,
            byLocation: dB
          }
        }(BB);
        if (YB.attributes = VB.lines, "inst" === dB.terrain) {
          const {
            group: yB,
            chunk: JB
          } = function(BB, TB, dB) {
            const VB = TB.get(mB),
              yB = BB.getVertexAttrib(mB, uB.CURRENT_VERTEX_ATTRIB),
              pB = VB ? `+${VB.offset}` : yB ? Array.from(yB).slice(0, 3).join(",") : "?";
            let lB = dB.groups.get(pB);
            return void 0 === lB && (lB = dB.groups.size, dB.groups.set(pB, lB)), {
              group: lB,
              chunk: pB
            }
          }(BB, VB.byLocation, lB);
          YB.group = yB, YB.chunk = JB;
          for (const BB of [EB, vB]) {
            var gB;
            const TB = null === (gB = VB.byLocation.get(BB)) || void 0 === gB ? void 0 : gB.buffer;
            TB && YB.pages.push({
              kind: "buf",
              buffer: TB
            })
          }! function(BB, TB, dB, VB, yB, pB, lB) {
            const JB = VB.get(EB),
              YB = lB.parts.get(pB);
            if (void 0 === YB && lB.parts.size >= tB) return;
            const gB = Math.min(yB, sB, fB - (null !== YB && void 0 !== YB ? YB : 0));
            if (null === JB || void 0 === JB || !JB.buffer || gB <= 0) return;
            const oB = CB(BB, TB, dB);
            if (!oB) return;
            const kB = JB.stride || 12,
              LB = AB(BB, JB.buffer, JB.offset, (gB - 1) * kB + 12),
              OB = new DataView(LB.buffer),
              DB = function(BB, TB) {
                const dB = function(BB) {
                    const TB = eB.get(BB);
                    if (void 0 !== TB && (null === TB || BB.isProgram(TB))) return TB;
                    IB.inProbe = !0;
                    let dB = null;
                    try {
                      dB = GB(BB, bB, nB, "fed", "the record feed")
                    } finally {
                      IB.inProbe = !1
                    }
                    return eB.set(BB, dB), dB
                  }(BB),
                  VB = dB ? jB(BB, dB, TB, (() => {
                    BB.drawArraysInstanced(uB.POINTS, 0, 1, TB)
                  }), "decode probe input (the record feed)") : null;
                return VB ? new Uint32Array(VB.buffer) : null
              }(BB, gB);
            DB || lB.fed.failed++;
            const HB = jB(BB, oB, 4 * gB, (() => {
              BB.drawArraysInstanced(uB.POINTS, 0, 4, gB)
            }));
            if (!HB) return;
            lB.parts.set(pB, (null !== YB && void 0 !== YB ? YB : 0) + gB);
            for (let uB = 0; uB < gB; uB++) {
              const BB = uB * kB,
                TB = [OB.getUint32(BB, !0), OB.getUint32(BB + 4, !0), OB.getUint32(BB + 8, !0)],
                dB = DB ? [DB[3 * uB], DB[3 * uB + 1], DB[3 * uB + 2]] : TB;
              DB && (lB.fed.records++, dB.some(((BB, dB) => BB !== TB[dB])) && (lB.fed.differing++, lB.fed.first.length < 8 && lB.fed.first.push(`part ${pB} instance ${uB}: fed ${dB.map(yT).join(" ")} buffer ${TB.map(yT).join(" ")}`)));
              for (let VB = 0; VB < 4; VB++) {
                const BB = 3 * (4 * uB + VB);
                lB.vertices.push({
                  record: dB,
                  slot: VB,
                  group: pB,
                  gpu: [HB[BB], HB[BB + 1], HB[BB + 2]]
                })
              }
            }
          }(BB, TB, dB, VB.byLocation, pB, yB, lB)
        } else {
          const VB = BT(BB, TB, 16),
            pB = BT(BB, TB, 8);
          for (const BB of [VB, pB]) BB && YB.pages.push({
            kind: "tex",
            texture: BB
          });
          VB && function(BB, TB, dB, VB, yB, pB) {
            if (pB.parts.size >= tB) return;
            const lB = CB(BB, TB, dB);
            if (!lB) return;
            let JB = 6 * fB;
            const YB = [];
            for (const [OB, DB] of yB) {
              const BB = Math.min(DB, JB, Math.max(6, 6 * Math.floor(fB / yB.length)));
              BB > 0 && (YB.push([OB, BB]), JB -= BB)
            }
            const gB = YB.reduce(((BB, TB) => {
                let [, dB] = TB;
                return BB + dB
              }), 0),
              oB = jB(BB, lB, gB, (() => {
                for (const [TB, dB] of YB) BB.drawArrays(uB.POINTS, TB, dB)
              }));
            if (!oB) return;
            let kB = 0;
            for (const [OB, DB] of YB) {
              const TB = Math.floor(OB / 6),
                dB = Math.floor((OB + DB - 1) / 6) - TB + 1,
                yB = TT(BB, VB, NB, TB, dB);
              for (let BB = OB; BB < OB + DB; BB++, kB++) {
                var LB;
                const dB = 4 * (Math.floor(BB / 6) - TB),
                  VB = [yB[dB], yB[dB + 1], yB[dB + 2]];
                pB.parts.set(yB[dB + 3], (null !== (LB = pB.parts.get(yB[dB + 3])) && void 0 !== LB ? LB : 0) + (BB % 6 === 0 ? 1 : 0)), pB.vertices.push({
                  record: VB,
                  slot: iB[BB % 6],
                  group: yB[dB + 3],
                  gpu: [oB[3 * kB], oB[3 * kB + 1], oB[3 * kB + 2]]
                })
              }
            }
          }(BB, TB, dB, VB, yB, lB)
        }
      } catch (oB) {
        ZB(`decode probe failed on program ${UB(dB)}: ${String(oB)}`)
      }
    }

    function CB(BB, TB, dB) {
      if (void 0 !== dB.probe) return dB.probe && qB(BB, TB, dB.probe), dB.probe;
      dB.probe = null, IB.inProbe = !0;
      try {
        dB.probe = function(BB, TB) {
          return GB(BB, TB.vertex, TB.fragment, HB, `program ${UB(TB)}'s twin`)
        }(BB, dB)
      } finally {
        IB.inProbe = !1
      }
      return dB.probe && qB(BB, TB, dB.probe), dB.probe
    }

    function GB(BB, TB, dB, VB, yB) {
      const pB = [BB.createShader(uB.VERTEX_SHADER), BB.createShader(uB.FRAGMENT_SHADER)],
        lB = BB.createProgram();
      if (!lB || !pB[0] || !pB[1]) return null;
      BB.shaderSource(pB[0], TB), BB.shaderSource(pB[1], dB);
      for (const YB of pB) BB.compileShader(YB), BB.attachShader(lB, YB);
      BB.transformFeedbackVaryings(lB, [VB], uB.INTERLEAVED_ATTRIBS), BB.linkProgram(lB);
      for (const YB of pB) BB.deleteShader(YB);
      var JB;
      return BB.getProgramParameter(lB, uB.LINK_STATUS) ? lB : (ZB(`decode probe: ${yB} failed to link: ${WB(null!==(JB=BB.getProgramInfoLog(lB))&&void 0!==JB?JB:"",300)}`), BB.deleteProgram(lB), null)
    }

    function qB(BB, TB, dB) {
      const VB = BB.getProgramParameter(TB, uB.ACTIVE_UNIFORM_BLOCKS);
      for (let JB = 0; JB < VB; JB++) {
        const VB = BB.getActiveUniformBlockName(TB, JB),
          yB = null === VB ? uB.INVALID_INDEX : BB.getUniformBlockIndex(dB, VB);
        yB !== uB.INVALID_INDEX && BB.uniformBlockBinding(dB, yB, BB.getActiveUniformBlockParameter(TB, JB, uB.UNIFORM_BLOCK_BINDING))
      }
      const yB = BB.getParameter(uB.CURRENT_PROGRAM);
      BB.useProgram(dB);
      const pB = BB.getProgramParameter(TB, uB.ACTIVE_UNIFORMS),
        lB = BB.getActiveUniforms(TB, [...Array(pB).keys()], uB.UNIFORM_BLOCK_INDEX);
      for (let JB = 0; JB < pB; JB++) {
        const VB = BB.getActiveUniform(TB, JB);
        if (!VB || -1 !== lB[JB]) continue;
        const yB = VB.name.replace(/\[0\]$/, "");
        for (let pB = 0; pB < VB.size; pB++) {
          const lB = VB.size > 1 ? `${yB}[${pB}]` : VB.name,
            JB = BB.getUniformLocation(TB, lB),
            YB = BB.getUniformLocation(dB, lB);
          JB && YB && xB(BB, YB, VB.type, BB.getUniform(TB, JB))
        }
      }
      BB.useProgram(yB)
    }

    function xB(BB, TB, dB, VB) {
      const yB = ArrayBuffer.isView(VB) ? Array.from(VB) : [Number(VB)];
      switch (dB) {
        case uB.FLOAT:
          return void BB.uniform1f(TB, yB[0]);
        case uB.FLOAT_VEC2:
          return void BB.uniform2fv(TB, yB);
        case uB.FLOAT_VEC3:
          return void BB.uniform3fv(TB, yB);
        case uB.FLOAT_VEC4:
          return void BB.uniform4fv(TB, yB);
        case uB.FLOAT_MAT3:
          return void BB.uniformMatrix3fv(TB, !1, yB);
        case uB.FLOAT_MAT4:
          return void BB.uniformMatrix4fv(TB, !1, yB);
        case uB.UNSIGNED_INT:
          return void BB.uniform1ui(TB, yB[0]);
        case uB.UNSIGNED_INT_VEC2:
          return void BB.uniform2uiv(TB, yB);
        case uB.UNSIGNED_INT_VEC3:
          return void BB.uniform3uiv(TB, yB);
        case uB.UNSIGNED_INT_VEC4:
          return void BB.uniform4uiv(TB, yB);
        case uB.INT_VEC2:
          return void BB.uniform2iv(TB, yB);
        case uB.INT_VEC3:
          return void BB.uniform3iv(TB, yB);
        case uB.INT_VEC4:
          return void BB.uniform4iv(TB, yB);
        default:
          BB.uniform1i(TB, yB[0])
      }
    }

    function jB(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const pB = BB.getParameter(uB.CURRENT_PROGRAM),
        lB = BB.getParameter(uB.TRANSFORM_FEEDBACK_BINDING),
        JB = BB.getParameter(uB.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        YB = BB.getParameter(uB.COPY_READ_BUFFER_BINDING),
        gB = BB.isEnabled(uB.RASTERIZER_DISCARD),
        oB = BB.createTransformFeedback(),
        kB = BB.createBuffer();
      IB.inProbe = !0;
      try {
        const pB = BB.getError();
        pB !== uB.NO_ERROR && ZB(`GL error 0x${pB.toString(16)} pending before the decode probe (the renderer's)`), BB.useProgram(TB), BB.bindTransformFeedback(uB.TRANSFORM_FEEDBACK, oB), BB.bindBuffer(uB.TRANSFORM_FEEDBACK_BUFFER, kB), BB.bufferData(uB.TRANSFORM_FEEDBACK_BUFFER, 12 * dB, uB.STREAM_READ), BB.bindBufferBase(uB.TRANSFORM_FEEDBACK_BUFFER, 0, kB), BB.enable(uB.RASTERIZER_DISCARD), BB.beginTransformFeedback(uB.POINTS), VB(), BB.endTransformFeedback(), BB.bindBufferBase(uB.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const lB = BB.getError();
        if (lB !== uB.NO_ERROR) return ZB(`${yB}: GL error 0x${lB.toString(16)} on the feedback draw`), null;
        const JB = new Float32Array(3 * dB);
        return BB.bindBuffer(uB.COPY_READ_BUFFER, kB), BB.getBufferSubData(uB.COPY_READ_BUFFER, 0, JB), JB
      } finally {
        gB || BB.disable(uB.RASTERIZER_DISCARD), BB.bindTransformFeedback(uB.TRANSFORM_FEEDBACK, lB), BB.bindBuffer(uB.TRANSFORM_FEEDBACK_BUFFER, JB), BB.bindBuffer(uB.COPY_READ_BUFFER, YB), BB.deleteTransformFeedback(oB), BB.deleteBuffer(kB), BB.useProgram(pB), IB.inProbe = !1
      }
    }

    function AB(BB, TB, dB, VB) {
      const yB = BB.getParameter(uB.COPY_READ_BUFFER_BINDING),
        pB = new Uint8Array(VB);
      return BB.bindBuffer(uB.COPY_READ_BUFFER, TB), BB.getBufferSubData(uB.COPY_READ_BUFFER, dB, pB), BB.bindBuffer(uB.COPY_READ_BUFFER, yB), pB
    }
    const bB = `#version 300 es\nlayout(location = ${EB}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      nB = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      eB = new WeakMap;

    function BT(BB, TB, dB) {
      const VB = BB.getProgramParameter(TB, uB.ACTIVE_UNIFORMS),
        yB = BB.getParameter(uB.ACTIVE_TEXTURE);
      try {
        for (let yB = 0; yB < VB; yB++) {
          const VB = BB.getActiveUniform(TB, yB);
          if ((null === VB || void 0 === VB ? void 0 : VB.type) !== uB.UNSIGNED_INT_SAMPLER_2D) continue;
          const pB = BB.getUniformLocation(TB, VB.name),
            lB = pB ? BB.getUniform(TB, pB) : -1;
          if (lB < 0) continue;
          BB.activeTexture(uB.TEXTURE0 + lB);
          const JB = BB.getParameter(uB.TEXTURE_BINDING_2D);
          if (JB && rB.get(JB) === dB) return JB
        }
        return null
      } finally {
        BB.activeTexture(yB)
      }
    }

    function TT(BB, TB, dB, VB, yB) {
      const pB = new Uint32Array(4 * yB),
        lB = BB.getParameter(uB.READ_FRAMEBUFFER_BINDING),
        JB = BB.createFramebuffer();
      BB.bindFramebuffer(uB.READ_FRAMEBUFFER, JB), BB.framebufferTexture2D(uB.READ_FRAMEBUFFER, uB.COLOR_ATTACHMENT0, uB.TEXTURE_2D, TB, 0);
      try {
        let TB = 0;
        for (; TB < yB;) {
          const lB = VB + TB,
            JB = lB % dB,
            YB = Math.min(yB - TB, dB - JB);
          BB.readPixels(JB, Math.floor(lB / dB), YB, 1, uB.RGBA_INTEGER, uB.UNSIGNED_INT, pB.subarray(4 * TB, 4 * (TB + YB))), TB += YB
        }
      } finally {
        BB.bindFramebuffer(uB.READ_FRAMEBUFFER, lB), BB.deleteFramebuffer(JB)
      }
      return pB
    }

    function dT(BB, TB, dB) {
      let VB = 0,
        yB = 0;
      for (let YB = 0; YB < TB.bytes.length; YB += zB) {
        VB++;
        const BB = Math.min(YB + zB, TB.bytes.length);
        OB(TB.bytes.subarray(YB, BB)) !== OB(dB.subarray(YB, BB)) && yB++
      }
      const pB = `${BB} ${TB.bytes.length} B cpu ${OB(TB.bytes).toString(16)} gpu ${OB(dB).toString(16)}, ${yB}/${VB} blocks differ${TB.missed?`, ${TB.missed} GPU-side writes uncopied`:""}`;
      if (0 === yB) return pB;
      const {
        count: lB,
        offsets: JB
      } = function(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const VB = Math.min(BB.length, TB.length);
        let yB = Math.abs(BB.length - TB.length);
        const pB = [];
        for (let lB = 0; lB < VB; lB++) BB[lB] !== TB[lB] && (yB++, pB.length < dB && pB.push(lB));
        return {
          count: yB,
          offsets: pB
        }
      }(TB.bytes, dB);
      return XB([`${pB}: ${lB} bytes differ`, ...JB.map((BB => `  +${BB}: cpu ${DB(TB.bytes,BB)} | gpu ${DB(dB,BB)}`))].join("\n")), `${pB}: ${lB} bytes differ, first at ${JB.join(", ")} (context in the saved file)`
    }

    function VT(BB) {
      if (0 === BB.vertices.length) return void ZB(`decode probe (${BB.reason}): no terrain draw probed (${BB.draws.length} seen)`);
      const TB = function(BB) {
          const TB = new Map;
          for (const VB of BB) {
            const BB = TB.get(VB.group);
            BB ? BB.push(VB) : TB.set(VB.group, [VB])
          }
          const dB = {
            vertices: BB.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [VB, yB] of TB) {
            const BB = new Map,
              TB = yB.map((TB => {
                const dB = oB(TB.record, TB.slot),
                  VB = [TB.gpu[0] - dB[0], TB.gpu[1] - dB[1], TB.gpu[2] - dB[2]],
                  yB = VB.map((BB => Math.round(64 * BB))).join(","),
                  pB = BB.get(yB);
                return pB ? pB.count++ : BB.set(yB, {
                  count: 1,
                  offset: VB
                }), dB
              }));
            let pB = [0, 0, 0],
              lB = 0;
            for (const dB of BB.values()) dB.count > lB && (lB = dB.count, pB = dB.offset);
            dB.translations.set(VB, pB), yB.forEach(((BB, VB) => {
              var yB;
              const lB = [TB[VB][0] + pB[0], TB[VB][1] + pB[1], TB[VB][2] + pB[2]];
              if (lB.every(((TB, dB) => {
                  return VB = BB.gpu[dB], yB = TB, Math.abs(VB - yB) <= Math.max(.001, 1e-6 * Math.abs(yB));
                  var VB, yB
                }))) return;
              dB.mismatches++, dB.byDirection[JB(BB.record[2])]++, dB.byDiagonal[YB(BB.record[2])]++;
              const gB = kB(BB.record);
              dB.byBand[gB] = (null !== (yB = dB.byBand[gB]) && void 0 !== yB ? yB : 0) + 1, dB.first.length < LB && dB.first.push({
                ...BB,
                expected: lB
              })
            }))
          }
          return dB
        }(BB.vertices),
        dB = TB.byDirection.map(((BB, TB) => BB ? `${lB[TB]} ${BB}` : "")).filter(Boolean).join(" "),
        VB = Object.entries(TB.byBand).map((BB => {
          let [TB, dB] = BB;
          return `${TB}: ${dB}`
        })).join(" ");
      if (ZB(`decode probe (${BB.reason}): ${TB.mismatches}/${TB.vertices} vertices differ from the CPU decode over ${BB.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (TB.mismatches ? ` by direction [${dB}] diagonal [0: ${TB.byDiagonal[0]} 1: ${TB.byDiagonal[1]}] extent [${VB}]` : "")), BB.fed.records > 0 || BB.fed.failed > 0) {
        ZB(`decode probe input: ${BB.fed.differing}/${BB.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (BB.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (BB.fed.failed ? `; the feed failed on ${BB.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const TB of BB.fed.first) ZB(`  ${TB}`)
      }
      for (const yB of TB.first) {
        const [BB, TB, dB] = yB.record;
        ZB(`  mismatch part ${yB.group} r0 ${BB.toString(16)} r1 ${TB.toString(16)} r2 ${dB.toString(16)} slot ${yB.slot} (${lB[JB(dB)]}): expected ${yB.expected.map(pT).join(",")} gpu ${yB.gpu.map(pT).join(",")}`)
      }
      XB(`decode probe translations: ${[...TB.translations].map((BB=>{let[TB,dB]=BB;return`${TB}: ${dB.map(pT).join(",")}`})).join("; ")}`)
    }

    function yT(BB) {
      return BB.toString(16)
    }

    function pT(BB) {
      return Number.isInteger(BB) ? String(BB) : BB.toFixed(3)
    }

    function lT(BB) {
      return null !== IB.pendingCheck ? Promise.resolve() : new Promise((TB => {
        let dB = !1;
        const VB = {
          reason: BB,
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
        IB.pendingCheck = VB;
        const yB = () => {
            IB.pendingCheck = null;
            try {
              ! function(BB) {
                ZB(`draw ranges (${BB.reason}): ${BB.terrainDraws} terrain draws in the frame, the first ${BB.draws.length} here`);
                for (const TB of BB.draws) {
                  const BB = TB.ek.slice(0, 8).map((BB => {
                      let [TB, dB] = BB;
                      return `${TB}+${dB}`
                    })).join(" "),
                    dB = TB.ek.length > 8 ? ` (+${TB.ek.length-8} ranges)` : "";
                  ZB(`  ${UB(TB.program)} ${TB.program.terrain} ${TB.call} ${BB}${dB} x${TB.instances}${TB.group>=0?` part ${TB.group} chunk ${TB.chunk}`:""} | ${TB.attributes.join(" | ")}`)
                }
              }(VB), VT(VB);
              VB.draws.some((BB => "undefined" !== typeof WebGL2RenderingContext && BB.gl instanceof WebGL2RenderingContext)) || 0 === VB.draws.length ? function(BB) {
                const TB = [],
                  dB = new Map;
                for (const VB of BB)
                  if ("undefined" !== typeof WebGL2RenderingContext && VB.gl instanceof WebGL2RenderingContext)
                    for (const BB of VB.pages) dB.set("buf" === BB.kind ? BB.buffer : BB.texture, {
                      page: BB,
                      gl: VB.gl
                    });
                for (const [VB, {
                    page: yB,
                    gl: pB
                  }] of dB) {
                  const BB = KB.get(VB);
                  if (!BB) {
                    TB.push(`${yB.kind}#${PB(VB)}: no CPU copy (${IB.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === yB.kind) {
                    TB.push(dT(`buf#${BB.id}`, BB, AB(pB, yB.buffer, 0, BB.bytes.length)));
                    continue
                  }
                  const dB = TT(pB, yB.texture, BB.width, 0, BB.width * BB.height),
                    lB = 16 === BB.texelBytes ? new Uint8Array(dB.buffer) : new Uint8Array(new Uint16Array(dB).buffer);
                  TB.push(dT(`tex#${BB.id} (${16===BB.texelBytes?"records":"light"})`, BB, lB))
                }
                for (const VB of TB) ZB(`page readback ${VB}`)
              }(VB.draws) : ZB("page readback: none on WebGL1 (no buffer readback)")
            } catch (BB) {
              ZB(`check failed: ${String(BB)}`)
            }
            TB()
          },
          pB = () => {
            if (VB.draws.length > 0 && !dB) return dB = !0, void setTimeout(yB, 0);
            dB || requestAnimationFrame(pB)
          };
        requestAnimationFrame(pB), setTimeout((() => {
          dB || (dB = !0, yB())
        }), 5e3)
      }))
    }
    const JT = 20,
      YT = 24;

    function gT(BB, TB, dB) {
      if (!BB) return;
      const VB = BB[TB];
      "function" === typeof VB && (BB[TB] = dB(VB))
    }
    let oT = !1;
    const kT = new WeakMap,
      LT = new WeakMap,
      OT = new WeakMap,
      DT = {
        gl: 0,
        lost: 0
      };
    let uT = {
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
      HT = {
        buffer: 0,
        texture: 0
      },
      ET = 0;

    function vT(BB, TB, dB) {
      return Reflect.apply(BB, TB, dB)
    }

    function mT(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (BB instanceof ArrayBuffer) return new Uint8Array(BB, TB, dB || void 0);
      if (!ArrayBuffer.isView(BB)) return null;
      const VB = "BYTES_PER_ELEMENT" in BB ? BB.BYTES_PER_ELEMENT : 1,
        yB = BB.byteOffset + TB * VB,
        pB = dB ? dB * VB : BB.byteLength - TB * VB;
      return new Uint8Array(BB.buffer, yB, Math.max(0, pB))
    }

    function iT(BB, TB) {
      const dB = function(BB) {
        switch (BB) {
          case uB.ARRAY_BUFFER:
            return uB.ARRAY_BUFFER_BINDING;
          case uB.ELEMENT_ARRAY_BUFFER:
            return uB.ELEMENT_ARRAY_BUFFER_BINDING;
          case uB.COPY_READ_BUFFER:
            return uB.COPY_READ_BUFFER_BINDING;
          case uB.COPY_WRITE_BUFFER:
            return uB.COPY_WRITE_BUFFER_BINDING;
          case uB.UNIFORM_BUFFER:
            return uB.UNIFORM_BUFFER_BINDING;
          case uB.PIXEL_UNPACK_BUFFER:
            return uB.PIXEL_UNPACK_BUFFER_BINDING;
          case uB.TRANSFORM_FEEDBACK_BUFFER:
            return uB.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(TB);
      return dB ? BB.getParameter(dB) : null
    }

    function NT(BB) {
      const TB = KB.get(BB);
      TB && (IB.shadowBytes -= TB.bytes.length, KB.delete(BB))
    }

    function tT(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      NT(BB), IB.shadowBytes + TB > MB ? IB.uncopied++ : (IB.shadowBytes += TB, KB.set(BB, {
        id: PB(BB),
        bytes: new Uint8Array(TB),
        width: dB,
        height: VB,
        texelBytes: yB,
        missed: 0
      }))
    }

    function fT(BB, TB) {
      for (const dB of ["deleteBuffer", "deleteTexture"]) gT(BB, dB, (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        return dB[0] && NT(dB[0]), vT(BB, this, dB)
      }));
      gT(BB, "shaderSource", (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        return dB[0] && "string" === typeof dB[1] && kT.set(dB[0], dB[1]), vT(BB, this, dB)
      })), gT(BB, "attachShader", (BB => function() {
        for (var TB, dB = arguments.length, VB = new Array(dB), yB = 0; yB < dB; yB++) VB[yB] = arguments[yB];
        const pB = VB[0],
          lB = null !== (TB = LT.get(pB)) && void 0 !== TB ? TB : [];
        return lB.push(VB[1]), LT.set(pB, lB), vT(BB, this, VB)
      })), gT(BB, "linkProgram", (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        const yB = vT(BB, this, dB);
        return IB.inProbe || function(BB, TB) {
          var dB, VB, yB;
          "undefined" !== typeof HTMLCanvasElement && BB.canvas instanceof HTMLCanvasElement && function(BB) {
            if (FT.has(BB)) return;
            FT.add(BB);
            for (const TB of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) BB.addEventListener(TB, (BB => {
              DT.lost < JT && (DT.lost++, ZB(`${TB}${"statusMessage"in BB?`: ${String(BB.statusMessage)}`:""}`))
            }))
          }(BB.canvas);
          IB.context ??= BB;
          const pB = null !== (dB = LT.get(TB)) && void 0 !== dB ? dB : [];
          let lB = "",
            JB = "";
          for (const oB of pB) {
            var YB;
            const BB = null !== (YB = kT.get(oB)) && void 0 !== YB ? YB : "";
            /\bgl_Position\b/.test(BB) ? lB = BB : JB = BB
          }
          const gB = {
            id: PB(TB),
            name: null !== (VB = null === (yB = wB.exec(lB)) || void 0 === yB ? void 0 : yB[1]) && void 0 !== VB ? VB : null,
            gl: BB,
            vertex: lB,
            fragment: JB,
            terrain: MT(lB),
            checked: !1,
            firstDraw: !1
          };
          if (OT.set(TB, gB), FB.push([TB, gB]), null !== gB.terrain) {
            const TB = pB.map((TB => {
              var dB;
              return null !== (dB = BB.getShaderInfoLog(TB)) && void 0 !== dB ? dB : ""
            })).filter((BB => "" !== BB.trim()));
            TB.length > 0 && XB(`program ${UB(gB)} (${gB.terrain}) shader logs:\n${WB(TB.join("\n"))}`)
          }
        }(this, dB[0]), yB
      })), gT(BB, "bufferData", (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        const yB = vT(BB, this, dB);
        if (!IB.inProbe) {
          const BB = iT(this, dB[0]);
          if (BB) {
            var pB, lB, JB;
            const TB = "number" === typeof dB[1] ? null : mT(dB[1], null !== (pB = dB[3]) && void 0 !== pB ? pB : 0, null !== (lB = dB[4]) && void 0 !== lB ? lB : 0);
            var YB;
            if (tT(BB, "number" === typeof dB[1] ? dB[1] : null !== (JB = null === TB || void 0 === TB ? void 0 : TB.length) && void 0 !== JB ? JB : 0), TB) null === (YB = KB.get(BB)) || void 0 === YB || YB.bytes.set(TB)
          }
        }
        return yB
      })), gT(BB, "bufferSubData", (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        const yB = vT(BB, this, dB);
        if (!IB.inProbe) {
          var pB, lB;
          const BB = iT(this, dB[0]),
            TB = BB ? KB.get(BB) : void 0,
            VB = mT(dB[2], null !== (pB = dB[3]) && void 0 !== pB ? pB : 0, null !== (lB = dB[4]) && void 0 !== lB ? lB : 0);
          if (TB && VB) {
            const BB = dB[1];
            TB.bytes.set(VB.subarray(0, Math.max(0, TB.bytes.length - BB)), BB), sT("buffer", TB, BB, VB.length)
          }
        }
        return yB
      })), TB && (gT(BB, "copyBufferSubData", (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        const yB = vT(BB, this, dB);
        if (!IB.inProbe) {
          const [BB, TB, VB, yB, pB] = dB, lB = iT(this, BB), JB = iT(this, TB), YB = lB ? KB.get(lB) : void 0, gB = JB ? KB.get(JB) : void 0;
          gB && (YB ? gB.bytes.set(YB.bytes.slice(VB, VB + pB), yB) : gB.missed++)
        }
        return yB
      })), gT(BB, "texStorage2D", (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        const yB = vT(BB, this, dB),
          [, , pB, lB, JB] = dB;
        if (!IB.inProbe && (pB === uB.RGBA32UI || pB === uB.RGBA16UI)) {
          const BB = this.getParameter(uB.TEXTURE_BINDING_2D),
            TB = pB === uB.RGBA32UI ? 16 : 8;
          BB && (rB.set(BB, TB), tT(BB, lB * JB * TB, lB, JB, TB))
        }
        return yB
      })), gT(BB, "texSubImage2D", (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        const yB = vT(BB, this, dB);
        return !IB.inProbe && dB.length >= 9 && dB[0] === uB.TEXTURE_2D && 0 === dB[1] && function(BB, TB) {
          var dB;
          const VB = BB.getParameter(uB.TEXTURE_BINDING_2D),
            yB = VB ? KB.get(VB) : void 0;
          if (!yB) return;
          const [, , pB, lB, JB, YB] = TB;
          let gB = mT(TB[8], null !== (dB = TB[9]) && void 0 !== dB ? dB : 0);
          if (null === gB && "number" === typeof TB[8]) {
            const dB = iT(BB, uB.PIXEL_UNPACK_BUFFER),
              VB = dB ? KB.get(dB) : void 0;
            gB = VB ? VB.bytes.subarray(TB[8]) : null
          }
          if (null === gB) return void yB.missed++;
          const oB = BB.getParameter(uB.UNPACK_ROW_LENGTH) || JB,
            kB = BB.getParameter(uB.UNPACK_SKIP_ROWS),
            LB = BB.getParameter(uB.UNPACK_SKIP_PIXELS),
            OB = yB.texelBytes;
          for (let DB = 0; DB < YB; DB++) {
            const BB = ((kB + DB) * oB + LB) * OB,
              TB = ((lB + DB) * yB.width + pB) * OB;
            yB.bytes.set(gB.subarray(BB, BB + JB * OB), TB)
          }
          sT("texture", yB, (lB * yB.width + pB) * OB, JB * YB * OB)
        }(this, dB), yB
      })), gT(BB, "copyTexSubImage2D", (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        const yB = dB[0] === uB.TEXTURE_2D ? this.getParameter(uB.TEXTURE_BINDING_2D) : null,
          pB = yB ? KB.get(yB) : void 0;
        return pB && pB.missed++, vT(BB, this, dB)
      })));
      for (const dB of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) gT(BB, dB, (BB => function() {
        for (var TB = arguments.length, VB = new Array(TB), yB = 0; yB < TB; yB++) VB[yB] = arguments[yB];
        const pB = vT(BB, this, VB);
        return IB.inProbe || wT(this, dB, VB), pB
      }));
      gT(BB, "getExtension", (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        const yB = vT(BB, this, dB);
        return yB && "object" === typeof yB && function(BB, TB, dB) {
          const VB = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(TB in VB) || dB.bloxdRenderDebug) return;
          dB.bloxdRenderDebug = !0;
          for (const yB of VB[TB]) {
            const TB = dB[yB];
            "function" === typeof TB && (dB[yB] = function() {
              for (var VB = arguments.length, pB = new Array(VB), lB = 0; lB < VB; lB++) pB[lB] = arguments[lB];
              const JB = Reflect.apply(TB, dB, pB);
              return IB.inProbe || wT(BB, yB, pB), JB
            })
          }
        }(this, dB[0], yB), yB
      }))
    }

    function sT(BB, TB, dB, VB) {
      HT[BB] += VB, ET < 32 && TB.bytes.length >= 1 << 20 && (ET++, XB(`upload ${BB} #${TB.id} +${dB} ${VB} B`))
    }

    function MT(BB) {
      if (!BB.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(BB) || /in uvec3 _p2vs_location0\b/.test(BB) ? "inst" : "tex"
    }

    function zT(BB, TB, dB) {
      var VB;
      if (dB.checked) return;
      dB.checked = !0;
      const yB = BB.getProgramParameter(TB, uB.LINK_STATUS),
        pB = (null !== (VB = BB.getProgramInfoLog(TB)) && void 0 !== VB ? VB : "").trim();
      var lB;
      null === dB.terrain && yB || (ZB(`program ${UB(dB)} ${null!==(lB=dB.terrain)&&void 0!==lB?lB:"other"} link ${yB?"ok":"FAILED"}${pB?`: ${WB(pB,300)}`:""}`), pB && XB(`program ${UB(dB)} link log:\n${WB(pB)}`))
    }

    function wT(BB, TB, dB) {
      var VB;
      const yB = BB.getParameter(uB.CURRENT_PROGRAM),
        pB = yB ? OT.get(yB) : void 0;
      if (!yB || !pB) return;
      const lB = null !== (VB = pB.terrain) && void 0 !== VB ? VB : "other",
        {
          ek: JB,
          instances: YB
        } = function(BB, TB) {
          switch (BB) {
            case "drawArrays":
              return {
                ek: [
                  [TB[1], TB[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                ek: [
                  [TB[1], TB[2]]
                ], instances: TB[3]
              };
            case "drawElements":
              return {
                ek: [
                  [0, TB[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                ek: [
                  [0, TB[1]]
                ], instances: TB[4]
              };
            case "multiDrawArraysWEBGL": {
              const BB = TB[1],
                dB = TB[3],
                VB = TB[2],
                yB = TB[4],
                pB = [];
              for (let lB = 0; lB < TB[5]; lB++) pB.push([BB[VB + lB], dB[yB + lB]]);
              return {
                ek: pB,
                instances: 1
              }
            }
            default:
              return {
                ek: [], instances: 0
              }
          }
        }(TB, dB),
        gB = "inst" === pB.terrain ? YB : JB.reduce(((BB, TB) => {
          let [, dB] = TB;
          return BB + dB
        }), 0) / 6;
      if (uT[lB].draws++, uT[lB].faces += gB, null === pB.terrain) return;
      if (IB.context = BB, !pB.firstDraw) {
        pB.firstDraw = !0, zT(BB, yB, pB), UT || (UT = !0, ZB(function(BB) {
          var TB;
          const dB = BB.getParameter(uB.DEPTH_FUNC),
            VB = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let yB = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in BB && BB.getParameter(uB.DRAW_FRAMEBUFFER_BINDING)) {
            const TB = BB;
            yB = TB.getFramebufferAttachmentParameter(uB.DRAW_FRAMEBUFFER, uB.DEPTH_ATTACHMENT, uB.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(TB.getFramebufferAttachmentParameter(uB.DRAW_FRAMEBUFFER,uB.DEPTH_ATTACHMENT,uB.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(TB.getFramebufferAttachmentParameter(uB.DRAW_FRAMEBUFFER,uB.DEPTH_ATTACHMENT,uB.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const pB = BB.getParameter(uB.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(TB=VB[dB])&&void 0!==TB?TB:`0x${dB.toString(16)}`} clear ${pB}${516===dB||518===dB?" (reverse-Z)":""}, samples ${String(BB.getParameter(uB.SAMPLES))}, ${yB}`
        }(BB)));
        const dB = BB.getError();
        dB !== uB.NO_ERROR && DT.gl < JT && (DT.gl++, ZB(`GL error 0x${dB.toString(16)} after program ${UB(pB)}'s first terrain draw (${TB})`))
      }
      const oB = IB.pendingCheck;
      null !== oB && (oB.terrainDraws++, oB.draws.length < YT && hB(BB, yB, pB, TB, JB, YB))
    }
    let UT = !1;
    const FT = new WeakSet;
    const KT = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let rT = !1;
    const IT = new WeakSet,
      cT = new WeakMap,
      ST = new WeakMap,
      PT = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let QT = 0,
      RT = !1,
      aT = null,
      ZT = {
        draws: 0,
        faces: 0
      };

    function XT(BB) {
      const TB = globalThis[BB];
      return null === TB || void 0 === TB ? void 0 : TB.prototype
    }

    function WT(BB) {
      return BB && "function" === typeof BB[Symbol.iterator] ? [...BB].sort().join(" ") : ""
    }

    function hT(BB, TB) {
      const dB = null !== BB && void 0 !== BB ? BB : {},
        VB = null !== TB && void 0 !== TB ? TB : Object.keys(Object.getPrototypeOf(dB)).concat(Object.keys(dB));
      return [...new Set(VB)].filter((BB => "number" === typeof dB[BB])).map((BB => `${BB} ${String(dB[BB])}`)).join(", ")
    }

    function CT(BB, TB) {
      var dB;
      const VB = null !== (dB = TB.vertex) && void 0 !== dB ? dB : {};
      if (VB.module && IT.has(VB.module)) {
        var yB;
        const dB = String(null !== (yB = VB.entryPoint) && void 0 !== yB ? yB : "");
        if (dB.startsWith("vs_packed") && cT.set(BB, dB), !RT) {
          var pB, lB, JB, YB, gB;
          RT = !0;
          const BB = null !== (pB = TB.depthStencil) && void 0 !== pB ? pB : {},
            VB = null !== (lB = TB.multisample) && void 0 !== lB ? lB : {},
            yB = String(null !== (JB = BB.depthCompare) && void 0 !== JB ? JB : "");
          ZB(`WebGPU terrain pipeline ${dB}: depth ${String(null!==(YB=BB.format)&&void 0!==YB?YB:"none")} ${yB}${yB.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(gB=VB.count)&&void 0!==gB?gB:1)}`)
        }
      }
    }

    function GT(BB) {
      gT(BB, "setPipeline", (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        return ST.set(this, dB[0]), Reflect.apply(BB, this, dB)
      }));
      for (const TB of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) gT(BB, TB, (BB => function() {
        const dB = ST.get(this),
          VB = dB ? cT.get(dB) : void 0;
        for (var yB = arguments.length, pB = new Array(yB), lB = 0; lB < yB; lB++) pB[lB] = arguments[lB];
        return void 0 !== VB && qT(TB, VB, pB), Reflect.apply(BB, this, pB)
      }))
    }

    function qT(BB, TB, dB) {
      var VB;
      (ZT.draws++, "draw" === BB || "drawIndexed" === BB) && (ZT.faces += dB[0] * (null !== (VB = dB[1]) && void 0 !== VB ? VB : 1) / 6);
      if (null !== aT && aT.length < YT) {
        const VB = ("draw" === BB ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === BB ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((TB, VB) => {
          const yB = BB.endsWith("Indirect") ? dB[1] : dB[VB];
          return `${TB} ${String(null!==yB&&void 0!==yB?yB:"instances"===TB?1:0)}`
        }));
        aT.push(`  ${TB} ${BB} ${VB.join(" ")}`)
      }
    }

    function xT() {
      if (rT || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      rT = !0, gT(XT("GPU"), "requestAdapter", (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        return Reflect.apply(BB, this, dB).then((BB => {
          var TB;
          BB ? function(BB) {
            var TB;
            const dB = null !== (TB = BB.info) && void 0 !== TB ? TB : {};
            ZB(`WebGPU adapter ${["vendor","architecture","device","description"].map((BB=>{var TB;return`${BB} "${String(null!==(TB=dB[BB])&&void 0!==TB?TB:"")}"`})).join(" ")}${BB.isFallbackAdapter?" (fallback)":""}`), ZB(`WebGPU adapter features ${WT(BB.features)}`), ZB(`WebGPU adapter limits ${hT(BB.limits,KT)}`), XB(`WebGPU adapter all limits ${hT(BB.limits,null)}`)
          }(BB) : ZB(`WebGPU requestAdapter(${JSON.stringify(null!==(TB=dB[0])&&void 0!==TB?TB:{})}) gave none`);
          return BB
        }))
      })), gT(XT("GPUAdapter"), "requestDevice", (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        return Reflect.apply(BB, this, dB).then((BB => (function(BB) {
          ZB(`WebGPU device features ${WT(BB.features)}`), ZB(`WebGPU device limits ${hT(BB.limits,KT)}`), BB.addEventListener("uncapturederror", (BB => {
            if (PT.uncaptured < JT) {
              var TB, dB, VB;
              PT.uncaptured++;
              const yB = BB.error;
              ZB(`WebGPU uncaptured ${null!==(TB=null===yB||void 0===yB||null===(dB=yB.constructor)||void 0===dB?void 0:dB.name)&&void 0!==TB?TB:"error"}: ${WB(String(null!==(VB=null===yB||void 0===yB?void 0:yB.message)&&void 0!==VB?VB:""),600)}`)
            }
          }));
          const TB = BB.lost;
          null === TB || void 0 === TB || TB.then((BB => {
            var TB;
            ZB(`WebGPU device lost (${String(BB.reason)}): ${WB(String(null!==(TB=BB.message)&&void 0!==TB?TB:""),600)}`)
          }))
        }(BB), BB)), (BB => {
          throw ZB(`WebGPU requestDevice failed: ${String(BB)}`), BB
        }))
      }));
      const BB = XT("GPUDevice");
      gT(BB, "createShaderModule", (BB => function() {
        for (var TB, dB, VB = arguments.length, yB = new Array(VB), pB = 0; pB < VB; pB++) yB[pB] = arguments[pB];
        const lB = Reflect.apply(BB, this, yB);
        return function(BB, TB) {
          const dB = TB.includes("decodeQuad");
          dB && IT.add(BB);
          const VB = BB.getCompilationInfo;
          null === VB || void 0 === VB || VB.call(BB).then((BB => {
            if (0 === BB.messages.length && !dB) return;
            const TB = {};
            for (const dB of BB.messages) {
              var VB;
              TB[String(dB.type)] = (null !== (VB = TB[String(dB.type)]) && void 0 !== VB ? VB : 0) + 1
            }
            const yB = BB.messages.map((BB => `${String(BB.type)} ${String(BB.lineNum)}:${String(BB.linePos)} ${String(BB.message)}`)).join("\n");
            PT.compile < JT && (PT.compile++, ZB(`WebGPU ${dB?"terrain ":""}shader module compiled: ${JSON.stringify(TB)}${yB?` first: ${WB(yB.split("\n")[0],300)}`:""}`)), yB && XB(`WebGPU shader module messages:\n${WB(yB)}`)
          }))
        }(lB, String(null !== (TB = (null !== (dB = yB[0]) && void 0 !== dB ? dB : {}).code) && void 0 !== TB ? TB : "")), lB
      })), gT(BB, "createRenderPipeline", (BB => function() {
        for (var TB, dB = arguments.length, VB = new Array(dB), yB = 0; yB < dB; yB++) VB[yB] = arguments[yB];
        const pB = Reflect.apply(BB, this, VB);
        return CT(pB, null !== (TB = VB[0]) && void 0 !== TB ? TB : {}), pB
      })), gT(BB, "createRenderPipelineAsync", (BB => function() {
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        return Reflect.apply(BB, this, dB).then((BB => {
          var TB;
          return CT(BB, null !== (TB = dB[0]) && void 0 !== TB ? TB : {}), BB
        }), (BB => {
          var TB;
          throw function(BB, TB) {
            var dB, VB, yB;
            if (PT.rejected >= JT) return;
            PT.rejected++;
            const {
              reason: pB,
              message: lB
            } = null !== TB && void 0 !== TB ? TB : {}, JB = String(null !== (dB = (null !== (VB = BB.vertex) && void 0 !== VB ? VB : {}).entryPoint) && void 0 !== dB ? dB : "");
            ZB(`WebGPU pipeline "${String(null!==(yB=BB.label)&&void 0!==yB?yB:"")}" ${JB} rejected (${String(null!==pB&&void 0!==pB?pB:"no reason")}): ${WB(String(null!==lB&&void 0!==lB?lB:TB),600)}`)
          }(null !== (TB = dB[0]) && void 0 !== TB ? TB : {}, BB), BB
        }))
      })), gT(XT("GPUCanvasContext"), "configure", (BB => function() {
        for (var TB, dB = arguments.length, VB = new Array(dB), yB = 0; yB < dB; yB++) VB[yB] = arguments[yB];
        const pB = null !== (TB = VB[0]) && void 0 !== TB ? TB : {};
        var lB, JB;
        QT++ < 3 && ZB(`WebGPU canvas ${String(pB.format)} ${String(null!==(lB=pB.colorSpace)&&void 0!==lB?lB:"srgb")} alpha ${String(null!==(JB=pB.alphaMode)&&void 0!==JB?JB:"opaque")}`);
        return Reflect.apply(BB, this, VB)
      })), GT(XT("GPURenderPassEncoder")), GT(XT("GPURenderBundleEncoder"))
    }
    const jT = 1e4,
      AT = 6e4,
      bT = 5e3;
    let nT = null,
      eT = !1,
      Bd = "1",
      Td = "",
      dd = !1,
      Vd = null,
      yd = 0,
      pd = () => {};
    const ld = new Promise((BB => {
      pd = BB
    }));

    function Jd() {
      var BB;
      eT || (eT = !0, Bd = "0" === (0, pB.m)("faceCull") ? "0" : "1", Td = null !== (BB = (0, pB.m)("adrenoProbe")) && void 0 !== BB ? BB : "", window.bloxdRenderDebug = {
        faceCull: Bd,
        adrenoProbe: Td
      }, ZB("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), oT || "undefined" === typeof window || (oT = !0, "undefined" !== typeof WebGL2RenderingContext && fT(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && fT(WebGLRenderingContext.prototype, !1)), xT(), (0, pB.b)("renderProbe", (() => {
        Od("console")
      })), kd(), setInterval(Dd, bT))
    }

    function Yd(BB) {
      var TB, dB;
      Jd(), nT = null !== (TB = null === BB || void 0 === BB ? void 0 : BB.backend) && void 0 !== TB ? TB : null, ZB(null === BB ? "backend: none picked (no renderer build)" : `backend ${BB.backend}: reason ${BB.reason}, source ${BB.source}, adapter ${BB.adapter?`${BB.adapter.vendor}/${BB.adapter.architecture}`:"none"}, renderer param ${null!==(dB=(0,pB.m)("renderer"))&&void 0!==dB?dB:"none"}, faceCull ${"0"===Bd?"off (whole parts)":"on"}, adrenoProbe ${Td||"none"}`)
    }

    function gd() {
      const BB = performance.now(),
        TB = od(ld, jT, AT).then((TB => Od(`${Math.round((performance.now()-BB)/1e3)} s after playable${TB?"":", no terrain drawn yet"}`)));
      (0, yB.d)(ZB, (async () => {
        await TB, await Vd
      }))
    }
    async function od(BB, TB, dB) {
      const yB = (0, VB.b)(dB).then((() => !1));
      return await (0, VB.b)(TB), Promise.race([BB.then((() => !0)), yB])
    }

    function kd() {
      requestAnimationFrame((() => {
        yd++, kd()
      }))
    }

    function Ld() {
      var BB, TB;
      if (dd) return;
      dd = !0;
      const dB = window.bloxdRenderDebug;
      var VB;
      (ZB(`renderer caps ${null!==(BB=null===dB||void 0===dB?void 0:dB.caps)&&void 0!==BB?BB:"(not noted)"}; terrain fetch ${null!==(TB=null===dB||void 0===dB?void 0:dB.fetch)&&void 0!==TB?TB:"(not noted)"}`), Td) && ZB(`adrenoProbe ${Td} asked; in force (storage fetch only): ${null!==(VB=null===dB||void 0===dB?void 0:dB.probe)&&void 0!==VB?VB:"(not noted)"}`);
      const yB = IB.context;
      if (yB) {
        for (const BB of function(BB) {
            var TB;
            const dB = [],
              VB = BB.getExtension("WEBGL_debug_renderer_info"),
              yB = VB ? BB.getParameter(VB.UNMASKED_VENDOR_WEBGL) : "(masked)",
              pB = VB ? BB.getParameter(VB.UNMASKED_RENDERER_WEBGL) : "(masked)";
            dB.push(`GL ${String(BB.getParameter(BB.VERSION))} | ${String(BB.getParameter(BB.SHADING_LANGUAGE_VERSION))} | ${String(BB.getParameter(BB.VENDOR))} / ${String(BB.getParameter(BB.RENDERER))}`), dB.push(`GL unmasked ${yB} / ${pB}`);
            const lB = [
              ["MAX_TEXTURE_SIZE", BB.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", BB.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", BB.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", BB.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", BB.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", BB.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", BB.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in BB && lB.push(["MAX_UNIFORM_BLOCK_SIZE", BB.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", BB.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", BB.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", BB.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), dB.push(`GL limits ${lB.map((TB=>{let[dB,VB]=TB;return`${dB} ${String(BB.getParameter(VB))}`})).join(", ")}`);
            const JB = (TB, dB) => {
              const VB = BB.getShaderPrecisionFormat(TB, BB.HIGH_FLOAT),
                yB = BB.getShaderPrecisionFormat(TB, BB.HIGH_INT);
              return `${dB} highp float ${VB?`${VB.rangeMin}/${VB.rangeMax}/${VB.precision}`:"?"} int ${yB?`${yB.rangeMin}/${yB.rangeMax}/${yB.precision}`:"?"}`
            };
            dB.push(`GL precision ${JB(BB.VERTEX_SHADER,"VS")}, ${JB(BB.FRAGMENT_SHADER,"FS")}`);
            const YB = BB.getContextAttributes();
            return dB.push(`GL context ${JSON.stringify(YB)} drawingBuffer ${BB.drawingBufferWidth}x${BB.drawingBufferHeight}${"drawingBufferFormat"in BB?` format 0x${Number(BB.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in BB?` ${String(BB.drawingBufferColorSpace)}`:""}`), dB.push(`GL extensions ${(null!==(TB=BB.getSupportedExtensions())&&void 0!==TB?TB:[]).join(" ")}`), dB
          }(yB)) ZB(BB);
        ! function() {
          if (!IB.context) return;
          let BB = 0,
            TB = 0;
          for (const [dB, VB] of FB) !VB.gl.isContextLost() && VB.gl.isProgram(dB) && (TB++, zT(VB.gl, dB, VB), null !== VB.terrain && BB++);
          ZB(`programs: ${TB} live of ${FB.length} linked, ${BB} packed terrain; CPU page copies ${Math.round(IB.shadowBytes/1048576)} MiB (${IB.uncopied} over budget)`)
        }()
      }
    }

    function Od(BB) {
      return Vd ??= async function(BB) {
        Ld(), "webgpu" === nT ? await
        function(BB) {
          if (null !== aT) return Promise.resolve();
          const TB = [];
          return aT = TB, new Promise((dB => {
            setTimeout((() => {
              aT = null, ZB(`WebGPU draw ranges (${BB}): ${TB.length} terrain draws recorded in a second (first ${YT}; bundles replay without new ones)`);
              for (const BB of TB) ZB(BB);
              dB()
            }), 1e3)
          }))
        }(BB): await lT(BB);
        ZB(`check (${BB}) done: bloxdDebug.save() downloads it all`)
      }(BB).catch((TB => {
        ZB(`check (${BB}) failed: ${String(TB)}`)
      })).finally((() => {
        Vd = null
      })), Vd
    }

    function Dd() {
      const BB = BB => yd ? (BB / yd).toFixed(1) : "0",
        TB = function() {
          const BB = ZT;
          return ZT = {
            draws: 0,
            faces: 0
          }, BB
        }(),
        dB = function() {
          const BB = uT;
          return uT = {
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
          }, BB
        }(),
        VB = function() {
          const BB = HT;
          return HT = {
            buffer: 0,
            texture: 0
          }, BB
        }();
      ("webgpu" === nT ? TB.draws : dB.inst.draws + dB.tex.draws) > 0 && pd();
      const yB = "webgpu" === nT ? [`terrain ${BB(TB.draws)} draws ${BB(TB.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((BB => dB[BB].draws > 0)).map((TB => `${TB} ${BB(dB[TB].draws)} draws ${BB(dB[TB].faces)} faces a frame`));
      ZB(`${yd} frames: ${yB.join(", ")||"no draws"}; uploaded ${Math.round(VB.buffer/1024)} KiB to buffers, ${Math.round(VB.texture/1024)} KiB to data textures`), yd = 0
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);