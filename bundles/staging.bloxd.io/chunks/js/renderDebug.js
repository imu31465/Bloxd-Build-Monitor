export const id = 56;
export const ids = [56];
export const modules = {
  5159: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB
    });
    var YB = GB(16),
      DB = GB(25),
      QB = GB(1293),
      oB = GB(3136);
    const jB = 3e4,
      yB = 1e3;

    function JB() {
      return "visible" === document.visibilityState && "inGame" === YB.c.get("gameState") && (0, QB.q)()
    }

    function MB(BB, OB) {
      (0, oB.u)() || function(BB, OB, GB) {
        let YB = 0;
        const DB = setInterval((() => {
          OB() && (YB += yB, YB >= BB && (clearInterval(DB), GB()))
        }), yB)
      }(jB, JB, (() => {
        OB().then((() => {
          BB(`saved for the player after ${jB/1e3} s of play`), (0, oB.J)(), DB.o.tM("chat", {
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
  5152: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      installRenderDebug: () => PG,
      renderDebugPlayable: () => lG,
      startRenderDebug: () => zG,
      waitForDraw: () => pG
    });
    var YB = GB(1919),
      DB = GB(5159),
      QB = GB(3136);
    const oB = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function jB(BB) {
      return 7 & BB
    }

    function yB(BB) {
      return BB >>> 11 & 1
    }

    function JB(BB) {
      return [1 + (BB >>> 18 & 63), 1 + (BB >>> 24 & 63)]
    }

    function MB(BB, OB) {
      const [GB, , YB] = BB, DB = jB(YB), QB = function(BB, OB, GB) {
        return OB + (1 === (22 >>> BB & 1) ? 4 - GB : GB) & 3
      }(DB, yB(YB), OB), oB = DB >>> 1, [MB, PB] = JB(GB), zB = 1 === QB || 2 === QB ? MB : 0, lB = QB >= 2 ? PB : 0, pB = [63 & GB, GB >>> 6 & 63, GB >>> 12 & 63];
      return pB[2 === oB ? 0 : 2] += zB, pB[1 === oB ? 0 : 1] += lB, pB
    }

    function PB(BB) {
      const OB = Math.max(...JB(BB[0]));
      return 1 === OB ? "1" : OB <= 4 ? "2-4" : OB <= 16 ? "5-16" : "17-64"
    }
    const zB = 16;

    function lB(BB) {
      let OB = 2166136261;
      for (let GB = 0; GB < BB.length; GB++) OB = Math.imul(OB ^ BB[GB], 16777619);
      return OB >>> 0
    }

    function pB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const YB = Math.max(0, OB - GB),
        DB = Math.min(BB.length, OB + GB),
        QB = [];
      for (let oB = YB; oB < DB; oB++) {
        const GB = BB[oB].toString(16).padStart(2, "0");
        QB.push(oB === OB ? `[${GB}]` : GB)
      }
      return QB.join(" ")
    }
    const qB = {
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
      ZB = "_vs2fs_location0";
    const NB = 0,
      RB = 4,
      WB = 6,
      AB = [0, 1, 2, 0, 2, 3],
      VB = 2048,
      SB = 4,
      nB = 256,
      UB = 64,
      fB = 268435456,
      kB = 65536,
      dB = /^#version [^\n]*\/\/ program (\S+)$/m;

    function KB(BB) {
      return null === BB.name ? `#${BB.id}` : `#${BB.id} ${BB.name}`
    }
    const uB = [],
      mB = new WeakMap,
      IB = new WeakMap,
      FB = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let iB = 1;
    const LB = new WeakMap;

    function gB(BB) {
      if (null === BB) return 0;
      let OB = LB.get(BB);
      return void 0 === OB && (OB = iB++, LB.set(BB, OB)), OB
    }
    class rB {
      constructor(BB, OB) {
        this.print = BB, this.now = OB, this.shown = 0, this.sJ = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.GP = [], this.dropped = 0
      }
      line(BB) {
        const OB = this.now();
        if (OB - this.second >= 1e3 && (this.second = OB, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.sJ++, void this.store(BB);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${BB} (the last line here: the rest go to bloxdDebug.save())` : BB)
      }
      keep(BB) {
        this.sections++, this.store(BB)
      }
      store(BB) {
        this.GP.push(`${new Date(Date.now()).toISOString()} ${BB}`), this.GP.length > 2e4 && (this.GP.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.sJ} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.GP].join("\n")
      }
    }
    let XB = null;

    function wB() {
      if (null === XB) {
        const BB = new rB((BB => {
          (0, QB.m)("render", BB)
        }), (() => performance.now()));
        (0, QB.l)("render", (() => BB.dump())), XB = BB
      }
      return XB
    }

    function EB(BB) {
      wB().line(BB)
    }

    function cB(BB) {
      wB().keep(BB)
    }

    function hB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return BB.length <= OB ? BB : `${BB.slice(0,OB)}... (${BB.length-OB} more characters)`
    }

    function aB(BB, OB, GB, YB, DB, QB) {
      const oB = FB.pendingCheck;
      if (null === oB) return;
      const jB = "undefined" !== typeof WebGL2RenderingContext && BB instanceof WebGL2RenderingContext,
        yB = {
          gl: BB,
          program: GB,
          call: YB,
          JZ: DB,
          instances: QB,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (oB.draws.push(yB), jB) try {
        const YB = function(BB) {
          const OB = [],
            GB = new Map,
            YB = Math.min(16, BB.getParameter(qB.MAX_VERTEX_ATTRIBS));
          for (let DB = 0; DB < YB; DB++) {
            if (!BB.getVertexAttrib(DB, qB.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const YB = BB.getVertexAttrib(DB, qB.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              QB = BB.getVertexAttribOffset(DB, qB.VERTEX_ATTRIB_ARRAY_POINTER),
              oB = BB.getVertexAttrib(DB, qB.VERTEX_ATTRIB_ARRAY_STRIDE),
              jB = BB.getVertexAttrib(DB, qB.VERTEX_ATTRIB_ARRAY_SIZE),
              yB = BB.getVertexAttrib(DB, qB.VERTEX_ATTRIB_ARRAY_TYPE),
              JB = "VERTEX_ATTRIB_ARRAY_INTEGER" in BB && BB.getVertexAttrib(DB, qB.VERTEX_ATTRIB_ARRAY_INTEGER),
              MB = "VERTEX_ATTRIB_ARRAY_DIVISOR" in BB ? BB.getVertexAttrib(DB, qB.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            GB.set(DB, {
              buffer: YB,
              offset: QB,
              stride: oB
            }), OB.push(`@${DB} buf#${gB(YB)} +${QB} stride ${oB} ${jB}x0x${yB.toString(16)}${JB?" int":""} div ${MB}`)
          }
          return {
            lines: OB,
            byLocation: GB
          }
        }(BB);
        if (yB.attributes = YB.lines, "inst" === GB.terrain) {
          const {
            group: DB,
            chunk: jB
          } = function(BB, OB, GB) {
            const YB = OB.get(WB),
              DB = BB.getVertexAttrib(WB, qB.CURRENT_VERTEX_ATTRIB),
              QB = YB ? `+${YB.offset}` : DB ? Array.from(DB).slice(0, 3).join(",") : "?";
            let oB = GB.groups.get(QB);
            return void 0 === oB && (oB = GB.groups.size, GB.groups.set(QB, oB)), {
              group: oB,
              chunk: QB
            }
          }(BB, YB.byLocation, oB);
          yB.group = DB, yB.chunk = jB;
          for (const BB of [NB, RB]) {
            var JB;
            const OB = null === (JB = YB.byLocation.get(BB)) || void 0 === JB ? void 0 : JB.buffer;
            OB && yB.pages.push({
              kind: "buf",
              buffer: OB
            })
          }! function(BB, OB, GB, YB, DB, QB, oB) {
            const jB = YB.get(NB),
              yB = oB.parts.get(QB);
            if (void 0 === yB && oB.parts.size >= SB) return;
            const JB = Math.min(DB, UB, nB - (null !== yB && void 0 !== yB ? yB : 0));
            if (null === jB || void 0 === jB || !jB.buffer || JB <= 0) return;
            const MB = eB(BB, OB, GB);
            if (!MB) return;
            const PB = jB.stride || 12,
              zB = vB(BB, jB.buffer, jB.offset, (JB - 1) * PB + 12),
              lB = new DataView(zB.buffer),
              pB = function(BB, OB) {
                const GB = function(BB) {
                    const OB = tB.get(BB);
                    if (void 0 !== OB && (null === OB || BB.isProgram(OB))) return OB;
                    FB.inProbe = !0;
                    let GB = null;
                    try {
                      GB = TB(BB, sB, xB, "fed", "the record feed")
                    } finally {
                      FB.inProbe = !1
                    }
                    return tB.set(BB, GB), GB
                  }(BB),
                  YB = GB ? HB(BB, GB, OB, (() => {
                    BB.drawArraysInstanced(qB.POINTS, 0, 1, OB)
                  }), "decode probe input (the record feed)") : null;
                return YB ? new Uint32Array(YB.buffer) : null
              }(BB, JB);
            pB || oB.fed.failed++;
            const ZB = HB(BB, MB, 4 * JB, (() => {
              BB.drawArraysInstanced(qB.POINTS, 0, 4, JB)
            }));
            if (!ZB) return;
            oB.parts.set(QB, (null !== yB && void 0 !== yB ? yB : 0) + JB);
            for (let qB = 0; qB < JB; qB++) {
              const BB = qB * PB,
                OB = [lB.getUint32(BB, !0), lB.getUint32(BB + 4, !0), lB.getUint32(BB + 8, !0)],
                GB = pB ? [pB[3 * qB], pB[3 * qB + 1], pB[3 * qB + 2]] : OB;
              pB && (oB.fed.records++, GB.some(((BB, GB) => BB !== OB[GB])) && (oB.fed.differing++, oB.fed.first.length < 8 && oB.fed.first.push(`part ${QB} instance ${qB}: fed ${GB.map(DO).join(" ")} buffer ${OB.map(DO).join(" ")}`)));
              for (let YB = 0; YB < 4; YB++) {
                const BB = 3 * (4 * qB + YB);
                oB.vertices.push({
                  record: GB,
                  slot: YB,
                  group: QB,
                  gpu: [ZB[BB], ZB[BB + 1], ZB[BB + 2]]
                })
              }
            }
          }(BB, OB, GB, YB.byLocation, QB, DB, oB)
        } else {
          const YB = BO(BB, OB, 16),
            QB = BO(BB, OB, 8);
          for (const BB of [YB, QB]) BB && yB.pages.push({
            kind: "tex",
            texture: BB
          });
          YB && function(BB, OB, GB, YB, DB, QB) {
            if (QB.parts.size >= SB) return;
            const oB = eB(BB, OB, GB);
            if (!oB) return;
            let jB = 6 * nB;
            const yB = [];
            for (const [lB, pB] of DB) {
              const BB = Math.min(pB, jB, Math.max(6, 6 * Math.floor(nB / DB.length)));
              BB > 0 && (yB.push([lB, BB]), jB -= BB)
            }
            const JB = yB.reduce(((BB, OB) => {
                let [, GB] = OB;
                return BB + GB
              }), 0),
              MB = HB(BB, oB, JB, (() => {
                for (const [OB, GB] of yB) BB.drawArrays(qB.POINTS, OB, GB)
              }));
            if (!MB) return;
            let PB = 0;
            for (const [lB, pB] of yB) {
              const OB = Math.floor(lB / 6),
                GB = Math.floor((lB + pB - 1) / 6) - OB + 1,
                DB = OO(BB, YB, VB, OB, GB);
              for (let BB = lB; BB < lB + pB; BB++, PB++) {
                var zB;
                const GB = 4 * (Math.floor(BB / 6) - OB),
                  YB = [DB[GB], DB[GB + 1], DB[GB + 2]];
                QB.parts.set(DB[GB + 3], (null !== (zB = QB.parts.get(DB[GB + 3])) && void 0 !== zB ? zB : 0) + (BB % 6 === 0 ? 1 : 0)), QB.vertices.push({
                  record: YB,
                  slot: AB[BB % 6],
                  group: DB[GB + 3],
                  gpu: [MB[3 * PB], MB[3 * PB + 1], MB[3 * PB + 2]]
                })
              }
            }
          }(BB, OB, GB, YB, DB, oB)
        }
      } catch (MB) {
        EB(`decode probe failed on program ${KB(GB)}: ${String(MB)}`)
      }
    }

    function eB(BB, OB, GB) {
      if (void 0 !== GB.probe) return GB.probe && bB(BB, OB, GB.probe), GB.probe;
      GB.probe = null, FB.inProbe = !0;
      try {
        GB.probe = function(BB, OB) {
          return TB(BB, (GB = OB.vertex, GB.replace(`\nvec3 ${ZB} = vec3(0);\n`, `\nout vec3 ${ZB};\n`)), OB.fragment, ZB, `program ${KB(OB)}'s twin`);
          var GB
        }(BB, GB)
      } finally {
        FB.inProbe = !1
      }
      return GB.probe && bB(BB, OB, GB.probe), GB.probe
    }

    function TB(BB, OB, GB, YB, DB) {
      const QB = [BB.createShader(qB.VERTEX_SHADER), BB.createShader(qB.FRAGMENT_SHADER)],
        oB = BB.createProgram();
      if (!oB || !QB[0] || !QB[1]) return null;
      BB.shaderSource(QB[0], OB), BB.shaderSource(QB[1], GB);
      for (const yB of QB) BB.compileShader(yB), BB.attachShader(oB, yB);
      BB.transformFeedbackVaryings(oB, [YB], qB.INTERLEAVED_ATTRIBS), BB.linkProgram(oB);
      for (const yB of QB) BB.deleteShader(yB);
      var jB;
      return BB.getProgramParameter(oB, qB.LINK_STATUS) ? oB : (EB(`decode probe: ${DB} failed to link: ${hB(null!==(jB=BB.getProgramInfoLog(oB))&&void 0!==jB?jB:"",300)}`), BB.deleteProgram(oB), null)
    }

    function bB(BB, OB, GB) {
      const YB = BB.getProgramParameter(OB, qB.ACTIVE_UNIFORM_BLOCKS);
      for (let jB = 0; jB < YB; jB++) {
        const YB = BB.getActiveUniformBlockName(OB, jB),
          DB = null === YB ? qB.INVALID_INDEX : BB.getUniformBlockIndex(GB, YB);
        DB !== qB.INVALID_INDEX && BB.uniformBlockBinding(GB, DB, BB.getActiveUniformBlockParameter(OB, jB, qB.UNIFORM_BLOCK_BINDING))
      }
      const DB = BB.getParameter(qB.CURRENT_PROGRAM);
      BB.useProgram(GB);
      const QB = BB.getProgramParameter(OB, qB.ACTIVE_UNIFORMS),
        oB = BB.getActiveUniforms(OB, [...Array(QB).keys()], qB.UNIFORM_BLOCK_INDEX);
      for (let jB = 0; jB < QB; jB++) {
        const YB = BB.getActiveUniform(OB, jB);
        if (!YB || -1 !== oB[jB]) continue;
        const DB = YB.name.replace(/\[0\]$/, "");
        for (let QB = 0; QB < YB.size; QB++) {
          const oB = YB.size > 1 ? `${DB}[${QB}]` : YB.name,
            jB = BB.getUniformLocation(OB, oB),
            yB = BB.getUniformLocation(GB, oB);
          jB && yB && CB(BB, yB, YB.type, BB.getUniform(OB, jB))
        }
      }
      BB.useProgram(DB)
    }

    function CB(BB, OB, GB, YB) {
      const DB = ArrayBuffer.isView(YB) ? Array.from(YB) : [Number(YB)];
      switch (GB) {
        case qB.FLOAT:
          return void BB.uniform1f(OB, DB[0]);
        case qB.FLOAT_VEC2:
          return void BB.uniform2fv(OB, DB);
        case qB.FLOAT_VEC3:
          return void BB.uniform3fv(OB, DB);
        case qB.FLOAT_VEC4:
          return void BB.uniform4fv(OB, DB);
        case qB.FLOAT_MAT3:
          return void BB.uniformMatrix3fv(OB, !1, DB);
        case qB.FLOAT_MAT4:
          return void BB.uniformMatrix4fv(OB, !1, DB);
        case qB.UNSIGNED_INT:
          return void BB.uniform1ui(OB, DB[0]);
        case qB.UNSIGNED_INT_VEC2:
          return void BB.uniform2uiv(OB, DB);
        case qB.UNSIGNED_INT_VEC3:
          return void BB.uniform3uiv(OB, DB);
        case qB.UNSIGNED_INT_VEC4:
          return void BB.uniform4uiv(OB, DB);
        case qB.INT_VEC2:
          return void BB.uniform2iv(OB, DB);
        case qB.INT_VEC3:
          return void BB.uniform3iv(OB, DB);
        case qB.INT_VEC4:
          return void BB.uniform4iv(OB, DB);
        default:
          BB.uniform1i(OB, DB[0])
      }
    }

    function HB(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const QB = BB.getParameter(qB.CURRENT_PROGRAM),
        oB = BB.getParameter(qB.TRANSFORM_FEEDBACK_BINDING),
        jB = BB.getParameter(qB.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        yB = BB.getParameter(qB.COPY_READ_BUFFER_BINDING),
        JB = BB.isEnabled(qB.RASTERIZER_DISCARD),
        MB = BB.createTransformFeedback(),
        PB = BB.createBuffer();
      FB.inProbe = !0;
      try {
        const QB = BB.getError();
        QB !== qB.NO_ERROR && EB(`GL error 0x${QB.toString(16)} pending before the decode probe (the renderer's)`), BB.useProgram(OB), BB.bindTransformFeedback(qB.TRANSFORM_FEEDBACK, MB), BB.bindBuffer(qB.TRANSFORM_FEEDBACK_BUFFER, PB), BB.bufferData(qB.TRANSFORM_FEEDBACK_BUFFER, 12 * GB, qB.STREAM_READ), BB.bindBufferBase(qB.TRANSFORM_FEEDBACK_BUFFER, 0, PB), BB.enable(qB.RASTERIZER_DISCARD), BB.beginTransformFeedback(qB.POINTS), YB(), BB.endTransformFeedback(), BB.bindBufferBase(qB.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const oB = BB.getError();
        if (oB !== qB.NO_ERROR) return EB(`${DB}: GL error 0x${oB.toString(16)} on the feedback draw`), null;
        const jB = new Float32Array(3 * GB);
        return BB.bindBuffer(qB.COPY_READ_BUFFER, PB), BB.getBufferSubData(qB.COPY_READ_BUFFER, 0, jB), jB
      } finally {
        JB || BB.disable(qB.RASTERIZER_DISCARD), BB.bindTransformFeedback(qB.TRANSFORM_FEEDBACK, oB), BB.bindBuffer(qB.TRANSFORM_FEEDBACK_BUFFER, jB), BB.bindBuffer(qB.COPY_READ_BUFFER, yB), BB.deleteTransformFeedback(MB), BB.deleteBuffer(PB), BB.useProgram(QB), FB.inProbe = !1
      }
    }

    function vB(BB, OB, GB, YB) {
      const DB = BB.getParameter(qB.COPY_READ_BUFFER_BINDING),
        QB = new Uint8Array(YB);
      return BB.bindBuffer(qB.COPY_READ_BUFFER, OB), BB.getBufferSubData(qB.COPY_READ_BUFFER, GB, QB), BB.bindBuffer(qB.COPY_READ_BUFFER, DB), QB
    }
    const sB = `#version 300 es\nlayout(location = ${NB}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      xB = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      tB = new WeakMap;

    function BO(BB, OB, GB) {
      const YB = BB.getProgramParameter(OB, qB.ACTIVE_UNIFORMS),
        DB = BB.getParameter(qB.ACTIVE_TEXTURE);
      try {
        for (let DB = 0; DB < YB; DB++) {
          const YB = BB.getActiveUniform(OB, DB);
          if ((null === YB || void 0 === YB ? void 0 : YB.type) !== qB.UNSIGNED_INT_SAMPLER_2D) continue;
          const QB = BB.getUniformLocation(OB, YB.name),
            oB = QB ? BB.getUniform(OB, QB) : -1;
          if (oB < 0) continue;
          BB.activeTexture(qB.TEXTURE0 + oB);
          const jB = BB.getParameter(qB.TEXTURE_BINDING_2D);
          if (jB && IB.get(jB) === GB) return jB
        }
        return null
      } finally {
        BB.activeTexture(DB)
      }
    }

    function OO(BB, OB, GB, YB, DB) {
      const QB = new Uint32Array(4 * DB),
        oB = BB.getParameter(qB.READ_FRAMEBUFFER_BINDING),
        jB = BB.createFramebuffer();
      BB.bindFramebuffer(qB.READ_FRAMEBUFFER, jB), BB.framebufferTexture2D(qB.READ_FRAMEBUFFER, qB.COLOR_ATTACHMENT0, qB.TEXTURE_2D, OB, 0);
      try {
        let OB = 0;
        for (; OB < DB;) {
          const oB = YB + OB,
            jB = oB % GB,
            yB = Math.min(DB - OB, GB - jB);
          BB.readPixels(jB, Math.floor(oB / GB), yB, 1, qB.RGBA_INTEGER, qB.UNSIGNED_INT, QB.subarray(4 * OB, 4 * (OB + yB))), OB += yB
        }
      } finally {
        BB.bindFramebuffer(qB.READ_FRAMEBUFFER, oB), BB.deleteFramebuffer(jB)
      }
      return QB
    }

    function GO(BB, OB, GB) {
      let YB = 0,
        DB = 0;
      for (let yB = 0; yB < OB.bytes.length; yB += kB) {
        YB++;
        const BB = Math.min(yB + kB, OB.bytes.length);
        lB(OB.bytes.subarray(yB, BB)) !== lB(GB.subarray(yB, BB)) && DB++
      }
      const QB = `${BB} ${OB.bytes.length} B cpu ${lB(OB.bytes).toString(16)} gpu ${lB(GB).toString(16)}, ${DB}/${YB} blocks differ${OB.missed?`, ${OB.missed} GPU-side writes uncopied`:""}`;
      if (0 === DB) return QB;
      const {
        count: oB,
        offsets: jB
      } = function(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const YB = Math.min(BB.length, OB.length);
        let DB = Math.abs(BB.length - OB.length);
        const QB = [];
        for (let oB = 0; oB < YB; oB++) BB[oB] !== OB[oB] && (DB++, QB.length < GB && QB.push(oB));
        return {
          count: DB,
          offsets: QB
        }
      }(OB.bytes, GB);
      return cB([`${QB}: ${oB} bytes differ`, ...jB.map((BB => `  +${BB}: cpu ${pB(OB.bytes,BB)} | gpu ${pB(GB,BB)}`))].join("\n")), `${QB}: ${oB} bytes differ, first at ${jB.join(", ")} (context in the saved file)`
    }

    function YO(BB) {
      if (0 === BB.vertices.length) return void EB(`decode probe (${BB.reason}): no terrain draw probed (${BB.draws.length} seen)`);
      const OB = function(BB) {
          const OB = new Map;
          for (const YB of BB) {
            const BB = OB.get(YB.group);
            BB ? BB.push(YB) : OB.set(YB.group, [YB])
          }
          const GB = {
            vertices: BB.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [YB, DB] of OB) {
            const BB = new Map,
              OB = DB.map((OB => {
                const GB = MB(OB.record, OB.slot),
                  YB = [OB.gpu[0] - GB[0], OB.gpu[1] - GB[1], OB.gpu[2] - GB[2]],
                  DB = YB.map((BB => Math.round(64 * BB))).join(","),
                  QB = BB.get(DB);
                return QB ? QB.count++ : BB.set(DB, {
                  count: 1,
                  offset: YB
                }), GB
              }));
            let QB = [0, 0, 0],
              oB = 0;
            for (const GB of BB.values()) GB.count > oB && (oB = GB.count, QB = GB.offset);
            GB.translations.set(YB, QB), DB.forEach(((BB, YB) => {
              var DB;
              const oB = [OB[YB][0] + QB[0], OB[YB][1] + QB[1], OB[YB][2] + QB[2]];
              if (oB.every(((OB, GB) => {
                  return YB = BB.gpu[GB], DB = OB, Math.abs(YB - DB) <= Math.max(.001, 1e-6 * Math.abs(DB));
                  var YB, DB
                }))) return;
              GB.mismatches++, GB.byDirection[jB(BB.record[2])]++, GB.byDiagonal[yB(BB.record[2])]++;
              const JB = PB(BB.record);
              GB.byBand[JB] = (null !== (DB = GB.byBand[JB]) && void 0 !== DB ? DB : 0) + 1, GB.first.length < zB && GB.first.push({
                ...BB,
                expected: oB
              })
            }))
          }
          return GB
        }(BB.vertices),
        GB = OB.byDirection.map(((BB, OB) => BB ? `${oB[OB]} ${BB}` : "")).filter(Boolean).join(" "),
        YB = Object.entries(OB.byBand).map((BB => {
          let [OB, GB] = BB;
          return `${OB}: ${GB}`
        })).join(" ");
      if (EB(`decode probe (${BB.reason}): ${OB.mismatches}/${OB.vertices} vertices differ from the CPU decode over ${BB.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (OB.mismatches ? ` by direction [${GB}] diagonal [0: ${OB.byDiagonal[0]} 1: ${OB.byDiagonal[1]}] extent [${YB}]` : "")), BB.fed.records > 0 || BB.fed.failed > 0) {
        EB(`decode probe input: ${BB.fed.differing}/${BB.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (BB.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (BB.fed.failed ? `; the feed failed on ${BB.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const OB of BB.fed.first) EB(`  ${OB}`)
      }
      for (const DB of OB.first) {
        const [BB, OB, GB] = DB.record;
        EB(`  mismatch part ${DB.group} r0 ${BB.toString(16)} r1 ${OB.toString(16)} r2 ${GB.toString(16)} slot ${DB.slot} (${oB[jB(GB)]}): expected ${DB.expected.map(QO).join(",")} gpu ${DB.gpu.map(QO).join(",")}`)
      }
      cB(`decode probe translations: ${[...OB.translations].map((BB=>{let[OB,GB]=BB;return`${OB}: ${GB.map(QO).join(",")}`})).join("; ")}`)
    }

    function DO(BB) {
      return BB.toString(16)
    }

    function QO(BB) {
      return Number.isInteger(BB) ? String(BB) : BB.toFixed(3)
    }

    function oO(BB) {
      return null !== FB.pendingCheck ? Promise.resolve() : new Promise((OB => {
        let GB = !1;
        const YB = {
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
        FB.pendingCheck = YB;
        const DB = () => {
            FB.pendingCheck = null;
            try {
              ! function(BB) {
                EB(`draw ranges (${BB.reason}): ${BB.terrainDraws} terrain draws in the frame, the first ${BB.draws.length} here`);
                for (const OB of BB.draws) {
                  const BB = OB.JZ.slice(0, 8).map((BB => {
                      let [OB, GB] = BB;
                      return `${OB}+${GB}`
                    })).join(" "),
                    GB = OB.JZ.length > 8 ? ` (+${OB.JZ.length-8} ranges)` : "";
                  EB(`  ${KB(OB.program)} ${OB.program.terrain} ${OB.call} ${BB}${GB} x${OB.instances}${OB.group>=0?` part ${OB.group} chunk ${OB.chunk}`:""} | ${OB.attributes.join(" | ")}`)
                }
              }(YB), YO(YB);
              YB.draws.some((BB => "undefined" !== typeof WebGL2RenderingContext && BB.gl instanceof WebGL2RenderingContext)) || 0 === YB.draws.length ? function(BB) {
                const OB = [],
                  GB = new Map;
                for (const YB of BB)
                  if ("undefined" !== typeof WebGL2RenderingContext && YB.gl instanceof WebGL2RenderingContext)
                    for (const BB of YB.pages) GB.set("buf" === BB.kind ? BB.buffer : BB.texture, {
                      page: BB,
                      gl: YB.gl
                    });
                for (const [YB, {
                    page: DB,
                    gl: QB
                  }] of GB) {
                  const BB = mB.get(YB);
                  if (!BB) {
                    OB.push(`${DB.kind}#${gB(YB)}: no CPU copy (${FB.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === DB.kind) {
                    OB.push(GO(`buf#${BB.id}`, BB, vB(QB, DB.buffer, 0, BB.bytes.length)));
                    continue
                  }
                  const GB = OO(QB, DB.texture, BB.width, 0, BB.width * BB.height),
                    oB = 16 === BB.texelBytes ? new Uint8Array(GB.buffer) : new Uint8Array(new Uint16Array(GB).buffer);
                  OB.push(GO(`tex#${BB.id} (${16===BB.texelBytes?"records":"light"})`, BB, oB))
                }
                for (const YB of OB) EB(`page readback ${YB}`)
              }(YB.draws) : EB("page readback: none on WebGL1 (no buffer readback)")
            } catch (BB) {
              EB(`check failed: ${String(BB)}`)
            }
            OB()
          },
          QB = () => {
            if (YB.draws.length > 0 && !GB) return GB = !0, void setTimeout(DB, 0);
            GB || requestAnimationFrame(QB)
          };
        requestAnimationFrame(QB), setTimeout((() => {
          GB || (GB = !0, DB())
        }), 5e3)
      }))
    }
    var jO = GB(5165);
    const yO = 20,
      JO = 24,
      MO = Reflect.apply;

    function PO(BB, OB, GB) {
      if (!BB) return;
      const YB = BB[OB];
      if ("function" === typeof YB) {
        const DB = GB(YB);
        BB[OB] = DB, (0, jO.r)(DB, YB)
      }
    }
    let zO = !1;
    const lO = new WeakMap,
      pO = new WeakMap,
      qO = new WeakMap,
      ZO = {
        gl: 0,
        lost: 0
      };
    let NO = {
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
      RO = {
        buffer: 0,
        texture: 0
      },
      WO = 0;

    function AO(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (BB instanceof ArrayBuffer) return new Uint8Array(BB, OB, GB || void 0);
      if (!ArrayBuffer.isView(BB)) return null;
      const YB = "BYTES_PER_ELEMENT" in BB ? BB.BYTES_PER_ELEMENT : 1,
        DB = BB.byteOffset + OB * YB,
        QB = GB ? GB * YB : BB.byteLength - OB * YB;
      return new Uint8Array(BB.buffer, DB, Math.max(0, QB))
    }

    function VO(BB, OB) {
      const GB = function(BB) {
        switch (BB) {
          case qB.ARRAY_BUFFER:
            return qB.ARRAY_BUFFER_BINDING;
          case qB.ELEMENT_ARRAY_BUFFER:
            return qB.ELEMENT_ARRAY_BUFFER_BINDING;
          case qB.COPY_READ_BUFFER:
            return qB.COPY_READ_BUFFER_BINDING;
          case qB.COPY_WRITE_BUFFER:
            return qB.COPY_WRITE_BUFFER_BINDING;
          case qB.UNIFORM_BUFFER:
            return qB.UNIFORM_BUFFER_BINDING;
          case qB.PIXEL_UNPACK_BUFFER:
            return qB.PIXEL_UNPACK_BUFFER_BINDING;
          case qB.TRANSFORM_FEEDBACK_BUFFER:
            return qB.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(OB);
      return GB ? BB.getParameter(GB) : null
    }

    function SO(BB) {
      const OB = mB.get(BB);
      OB && (FB.shadowBytes -= OB.bytes.length, mB.delete(BB))
    }

    function nO(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      SO(BB), FB.shadowBytes + OB > fB ? FB.uncopied++ : (FB.shadowBytes += OB, mB.set(BB, {
        id: gB(BB),
        bytes: new Uint8Array(OB),
        width: GB,
        height: YB,
        texelBytes: DB,
        missed: 0
      }))
    }

    function UO(BB, OB) {
      for (const GB of ["deleteBuffer", "deleteTexture"]) PO(BB, GB, (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        return GB[0] && SO(GB[0]), MO(BB, this, GB)
      }));
      PO(BB, "shaderSource", (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        return GB[0] && "string" === typeof GB[1] && lO.set(GB[0], GB[1]), MO(BB, this, GB)
      })), PO(BB, "attachShader", (BB => function() {
        for (var OB, GB = arguments.length, YB = new Array(GB), DB = 0; DB < GB; DB++) YB[DB] = arguments[DB];
        const QB = YB[0],
          oB = null !== (OB = pO.get(QB)) && void 0 !== OB ? OB : [];
        return oB.push(YB[1]), pO.set(QB, oB), MO(BB, this, YB)
      })), PO(BB, "linkProgram", (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        const DB = MO(BB, this, GB);
        return FB.inProbe || function(BB, OB) {
          var GB, YB, DB;
          "undefined" !== typeof HTMLCanvasElement && BB.canvas instanceof HTMLCanvasElement && function(BB) {
            if (mO.has(BB)) return;
            mO.add(BB);
            for (const OB of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) BB.addEventListener(OB, (BB => {
              ZO.lost < yO && (ZO.lost++, EB(`${OB}${"statusMessage"in BB?`: ${String(BB.statusMessage)}`:""}`))
            }))
          }(BB.canvas);
          FB.context ??= BB;
          const QB = null !== (GB = pO.get(OB)) && void 0 !== GB ? GB : [];
          let oB = "",
            jB = "";
          for (const MB of QB) {
            var yB;
            const BB = null !== (yB = lO.get(MB)) && void 0 !== yB ? yB : "";
            /\bgl_Position\b/.test(BB) ? oB = BB : jB = BB
          }
          const JB = {
            id: gB(OB),
            name: null !== (YB = null === (DB = dB.exec(oB)) || void 0 === DB ? void 0 : DB[1]) && void 0 !== YB ? YB : null,
            gl: BB,
            vertex: oB,
            fragment: jB,
            terrain: kO(oB),
            checked: !1,
            firstDraw: !1
          };
          if (qO.set(OB, JB), uB.push([OB, JB]), null !== JB.terrain) {
            const OB = QB.map((OB => {
              var GB;
              return null !== (GB = BB.getShaderInfoLog(OB)) && void 0 !== GB ? GB : ""
            })).filter((BB => "" !== BB.trim()));
            OB.length > 0 && cB(`program ${KB(JB)} (${JB.terrain}) shader logs:\n${hB(OB.join("\n"))}`)
          }
        }(this, GB[0]), DB
      })), PO(BB, "bufferData", (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        const DB = MO(BB, this, GB);
        if (!FB.inProbe) {
          const BB = VO(this, GB[0]);
          if (BB) {
            var QB, oB, jB;
            const OB = "number" === typeof GB[1] ? null : AO(GB[1], null !== (QB = GB[3]) && void 0 !== QB ? QB : 0, null !== (oB = GB[4]) && void 0 !== oB ? oB : 0);
            var yB;
            if (nO(BB, "number" === typeof GB[1] ? GB[1] : null !== (jB = null === OB || void 0 === OB ? void 0 : OB.length) && void 0 !== jB ? jB : 0), OB) null === (yB = mB.get(BB)) || void 0 === yB || yB.bytes.set(OB)
          }
        }
        return DB
      })), PO(BB, "bufferSubData", (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        const DB = MO(BB, this, GB);
        if (!FB.inProbe) {
          var QB, oB;
          const BB = VO(this, GB[0]),
            OB = BB ? mB.get(BB) : void 0,
            YB = AO(GB[2], null !== (QB = GB[3]) && void 0 !== QB ? QB : 0, null !== (oB = GB[4]) && void 0 !== oB ? oB : 0);
          if (OB && YB) {
            const BB = GB[1];
            OB.bytes.set(YB.subarray(0, Math.max(0, OB.bytes.length - BB)), BB), fO("buffer", OB, BB, YB.length)
          }
        }
        return DB
      })), OB && (PO(BB, "copyBufferSubData", (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        const DB = MO(BB, this, GB);
        if (!FB.inProbe) {
          const [BB, OB, YB, DB, QB] = GB, oB = VO(this, BB), jB = VO(this, OB), yB = oB ? mB.get(oB) : void 0, JB = jB ? mB.get(jB) : void 0;
          JB && (yB ? JB.bytes.set(yB.bytes.slice(YB, YB + QB), DB) : JB.missed++)
        }
        return DB
      })), PO(BB, "texStorage2D", (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        const DB = MO(BB, this, GB),
          [, , QB, oB, jB] = GB;
        if (!FB.inProbe && (QB === qB.RGBA32UI || QB === qB.RGBA16UI)) {
          const BB = this.getParameter(qB.TEXTURE_BINDING_2D),
            OB = QB === qB.RGBA32UI ? 16 : 8;
          BB && (IB.set(BB, OB), nO(BB, oB * jB * OB, oB, jB, OB))
        }
        return DB
      })), PO(BB, "texSubImage2D", (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        const DB = MO(BB, this, GB);
        return !FB.inProbe && GB.length >= 9 && GB[0] === qB.TEXTURE_2D && 0 === GB[1] && function(BB, OB) {
          var GB;
          const YB = BB.getParameter(qB.TEXTURE_BINDING_2D),
            DB = YB ? mB.get(YB) : void 0;
          if (!DB) return;
          const [, , QB, oB, jB, yB] = OB;
          let JB = AO(OB[8], null !== (GB = OB[9]) && void 0 !== GB ? GB : 0);
          if (null === JB && "number" === typeof OB[8]) {
            const GB = VO(BB, qB.PIXEL_UNPACK_BUFFER),
              YB = GB ? mB.get(GB) : void 0;
            JB = YB ? YB.bytes.subarray(OB[8]) : null
          }
          if (null === JB) return void DB.missed++;
          const MB = BB.getParameter(qB.UNPACK_ROW_LENGTH) || jB,
            PB = BB.getParameter(qB.UNPACK_SKIP_ROWS),
            zB = BB.getParameter(qB.UNPACK_SKIP_PIXELS),
            lB = DB.texelBytes;
          for (let pB = 0; pB < yB; pB++) {
            const BB = ((PB + pB) * MB + zB) * lB,
              OB = ((oB + pB) * DB.width + QB) * lB;
            DB.bytes.set(JB.subarray(BB, BB + jB * lB), OB)
          }
          fO("texture", DB, (oB * DB.width + QB) * lB, jB * yB * lB)
        }(this, GB), DB
      })), PO(BB, "copyTexSubImage2D", (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        const DB = GB[0] === qB.TEXTURE_2D ? this.getParameter(qB.TEXTURE_BINDING_2D) : null,
          QB = DB ? mB.get(DB) : void 0;
        return QB && QB.missed++, MO(BB, this, GB)
      })));
      for (const GB of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) PO(BB, GB, (BB => function() {
        for (var OB = arguments.length, YB = new Array(OB), DB = 0; DB < OB; DB++) YB[DB] = arguments[DB];
        const QB = MO(BB, this, YB);
        return FB.inProbe || KO(this, GB, YB), QB
      }));
      PO(BB, "getExtension", (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        const DB = MO(BB, this, GB);
        return DB && "object" === typeof DB && function(BB, OB, GB) {
          const YB = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(OB in YB) || GB.bloxdRenderDebug) return;
          GB.bloxdRenderDebug = !0;
          for (const DB of YB[OB]) {
            const OB = GB[DB];
            "function" === typeof OB && (GB[DB] = function() {
              for (var YB = arguments.length, QB = new Array(YB), oB = 0; oB < YB; oB++) QB[oB] = arguments[oB];
              const jB = MO(OB, GB, QB);
              return FB.inProbe || KO(BB, DB, QB), jB
            })
          }
        }(this, GB[0], DB), DB
      }))
    }

    function fO(BB, OB, GB, YB) {
      RO[BB] += YB, WO < 32 && OB.bytes.length >= 1 << 20 && (WO++, cB(`upload ${BB} #${OB.id} +${GB} ${YB} B`))
    }

    function kO(BB) {
      if (!BB.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(BB) || /in uvec3 _p2vs_location0\b/.test(BB) ? "inst" : "tex"
    }

    function dO(BB, OB, GB) {
      var YB;
      if (GB.checked) return;
      GB.checked = !0;
      const DB = BB.getProgramParameter(OB, qB.LINK_STATUS),
        QB = (null !== (YB = BB.getProgramInfoLog(OB)) && void 0 !== YB ? YB : "").trim();
      var oB;
      null === GB.terrain && DB || (EB(`program ${KB(GB)} ${null!==(oB=GB.terrain)&&void 0!==oB?oB:"other"} link ${DB?"ok":"FAILED"}${QB?`: ${hB(QB,300)}`:""}`), QB && cB(`program ${KB(GB)} link log:\n${hB(QB)}`))
    }

    function KO(BB, OB, GB) {
      var YB;
      const DB = BB.getParameter(qB.CURRENT_PROGRAM),
        QB = DB ? qO.get(DB) : void 0;
      if (!DB || !QB) return;
      const oB = null !== (YB = QB.terrain) && void 0 !== YB ? YB : "other",
        {
          JZ: jB,
          instances: yB
        } = function(BB, OB) {
          switch (BB) {
            case "drawArrays":
              return {
                JZ: [
                  [OB[1], OB[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                JZ: [
                  [OB[1], OB[2]]
                ], instances: OB[3]
              };
            case "drawElements":
              return {
                JZ: [
                  [0, OB[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                JZ: [
                  [0, OB[1]]
                ], instances: OB[4]
              };
            case "multiDrawArraysWEBGL": {
              const BB = OB[1],
                GB = OB[3],
                YB = OB[2],
                DB = OB[4],
                QB = [];
              for (let oB = 0; oB < OB[5]; oB++) QB.push([BB[YB + oB], GB[DB + oB]]);
              return {
                JZ: QB,
                instances: 1
              }
            }
            default:
              return {
                JZ: [], instances: 0
              }
          }
        }(OB, GB),
        JB = "inst" === QB.terrain ? yB : jB.reduce(((BB, OB) => {
          let [, GB] = OB;
          return BB + GB
        }), 0) / 6;
      if (NO[oB].draws++, NO[oB].faces += JB, null === QB.terrain) return;
      if (FB.context = BB, !QB.firstDraw) {
        QB.firstDraw = !0, dO(BB, DB, QB), uO || (uO = !0, EB(function(BB) {
          var OB;
          const GB = BB.getParameter(qB.DEPTH_FUNC),
            YB = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let DB = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in BB && BB.getParameter(qB.DRAW_FRAMEBUFFER_BINDING)) {
            const OB = BB;
            DB = OB.getFramebufferAttachmentParameter(qB.DRAW_FRAMEBUFFER, qB.DEPTH_ATTACHMENT, qB.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(OB.getFramebufferAttachmentParameter(qB.DRAW_FRAMEBUFFER,qB.DEPTH_ATTACHMENT,qB.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(OB.getFramebufferAttachmentParameter(qB.DRAW_FRAMEBUFFER,qB.DEPTH_ATTACHMENT,qB.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const QB = BB.getParameter(qB.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(OB=YB[GB])&&void 0!==OB?OB:`0x${GB.toString(16)}`} clear ${QB}${516===GB||518===GB?" (reverse-Z)":""}, samples ${String(BB.getParameter(qB.SAMPLES))}, ${DB}`
        }(BB)));
        const GB = BB.getError();
        GB !== qB.NO_ERROR && ZO.gl < yO && (ZO.gl++, EB(`GL error 0x${GB.toString(16)} after program ${KB(QB)}'s first terrain draw (${OB})`))
      }
      const MB = FB.pendingCheck;
      null !== MB && (MB.terrainDraws++, MB.draws.length < JO && aB(BB, DB, QB, OB, jB, yB))
    }
    let uO = !1;
    const mO = new WeakSet;
    var IO = GB(4923),
      FO = GB(5167);
    const iO = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let LO = !1;
    const gO = new WeakSet,
      rO = new WeakMap,
      XO = new WeakMap,
      wO = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let EO = 0,
      cO = !1,
      hO = null,
      aO = {
        draws: 0,
        faces: 0
      };

    function eO(BB) {
      const OB = globalThis[BB];
      return null === OB || void 0 === OB ? void 0 : OB.prototype
    }

    function TO(BB) {
      return BB && "function" === typeof BB[Symbol.iterator] ? [...BB].sort().join(" ") : ""
    }

    function bO(BB, OB) {
      const GB = null !== BB && void 0 !== BB ? BB : {},
        YB = null !== OB && void 0 !== OB ? OB : Object.keys(Object.getPrototypeOf(GB)).concat(Object.keys(GB));
      return [...new Set(YB)].filter((BB => "number" === typeof GB[BB])).map((BB => `${BB} ${String(GB[BB])}`)).join(", ")
    }

    function CO(BB, OB) {
      var GB;
      const YB = null !== (GB = OB.vertex) && void 0 !== GB ? GB : {};
      if (YB.module && gO.has(YB.module)) {
        var DB;
        const GB = String(null !== (DB = YB.entryPoint) && void 0 !== DB ? DB : "");
        if (GB.startsWith("vs_packed") && rO.set(BB, GB), !cO) {
          var QB, oB, jB, yB, JB;
          cO = !0;
          const BB = null !== (QB = OB.depthStencil) && void 0 !== QB ? QB : {},
            YB = null !== (oB = OB.multisample) && void 0 !== oB ? oB : {},
            DB = String(null !== (jB = BB.depthCompare) && void 0 !== jB ? jB : "");
          EB(`WebGPU terrain pipeline ${GB}: depth ${String(null!==(yB=BB.format)&&void 0!==yB?yB:"none")} ${DB}${DB.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(JB=YB.count)&&void 0!==JB?JB:1)}`)
        }
      }
    }

    function HO(BB) {
      PO(BB, "setPipeline", (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        return XO.set(this, GB[0]), MO(BB, this, GB)
      }));
      for (const OB of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) PO(BB, OB, (BB => function() {
        const GB = XO.get(this),
          YB = GB ? rO.get(GB) : void 0;
        for (var DB = arguments.length, QB = new Array(DB), oB = 0; oB < DB; oB++) QB[oB] = arguments[oB];
        return void 0 !== YB && vO(OB, YB, QB), MO(BB, this, QB)
      }))
    }

    function vO(BB, OB, GB) {
      var YB;
      (aO.draws++, "draw" === BB || "drawIndexed" === BB) && (aO.faces += GB[0] * (null !== (YB = GB[1]) && void 0 !== YB ? YB : 1) / 6);
      if (null !== hO && hO.length < JO) {
        const YB = ("draw" === BB ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === BB ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((OB, YB) => {
          const DB = BB.endsWith("Indirect") ? GB[1] : GB[YB];
          return `${OB} ${String(null!==DB&&void 0!==DB?DB:"instances"===OB?1:0)}`
        }));
        hO.push(`  ${OB} ${BB} ${YB.join(" ")}`)
      }
    }

    function sO() {
      if (LO || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      LO = !0, PO(eO("GPU"), "requestAdapter", (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        return MO(BB, this, GB).then((BB => {
          var OB;
          BB ? function(BB) {
            var OB;
            const GB = null !== (OB = BB.info) && void 0 !== OB ? OB : {};
            EB(`WebGPU adapter ${["vendor","architecture","device","description"].map((BB=>{var OB;return`${BB} "${String(null!==(OB=GB[BB])&&void 0!==OB?OB:"")}"`})).join(" ")}${BB.isFallbackAdapter?" (fallback)":""}`), EB(`WebGPU adapter features ${TO(BB.features)}`), EB(`WebGPU adapter limits ${bO(BB.limits,iO)}`), cB(`WebGPU adapter all limits ${bO(BB.limits,null)}`)
          }(BB) : EB(`WebGPU requestAdapter(${JSON.stringify(null!==(OB=GB[0])&&void 0!==OB?OB:{})}) gave none`);
          return BB
        }))
      })), PO(eO("GPUAdapter"), "requestDevice", (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        return MO(BB, this, GB).then((BB => (function(BB) {
          EB(`WebGPU device features ${TO(BB.features)}`), EB(`WebGPU device limits ${bO(BB.limits,iO)}`), BB.addEventListener("uncapturederror", (BB => {
            if (wO.uncaptured < yO) {
              var OB, GB, YB;
              wO.uncaptured++;
              const DB = BB.error;
              EB(`WebGPU uncaptured ${null!==(OB=null===DB||void 0===DB||null===(GB=DB.constructor)||void 0===GB?void 0:GB.name)&&void 0!==OB?OB:"error"}: ${hB(String(null!==(YB=null===DB||void 0===DB?void 0:DB.message)&&void 0!==YB?YB:""),600)}`)
            }
          }));
          const OB = BB.lost;
          null === OB || void 0 === OB || OB.then((BB => {
            var OB;
            EB(`WebGPU device lost (${String(BB.reason)}): ${hB(String(null!==(OB=BB.message)&&void 0!==OB?OB:""),600)}`)
          }))
        }(BB), BB)), (BB => {
          throw EB(`WebGPU requestDevice failed: ${String(BB)}`), BB
        }))
      }));
      const BB = eO("GPUDevice");
      PO(BB, "createShaderModule", (BB => function() {
        for (var OB, GB, YB = arguments.length, DB = new Array(YB), QB = 0; QB < YB; QB++) DB[QB] = arguments[QB];
        const oB = MO(BB, this, DB);
        return function(BB, OB) {
          const GB = OB.includes("decodeQuad");
          GB && gO.add(BB);
          const YB = BB.getCompilationInfo;
          null === YB || void 0 === YB || YB.call(BB).then((BB => {
            if (0 === BB.messages.length && !GB) return;
            const OB = {};
            for (const GB of BB.messages) {
              var YB;
              OB[String(GB.type)] = (null !== (YB = OB[String(GB.type)]) && void 0 !== YB ? YB : 0) + 1
            }
            const DB = BB.messages.map((BB => `${String(BB.type)} ${String(BB.lineNum)}:${String(BB.linePos)} ${String(BB.message)}`)).join("\n");
            wO.compile < yO && (wO.compile++, EB(`WebGPU ${GB?"terrain ":""}shader module compiled: ${JSON.stringify(OB)}${DB?` first: ${hB(DB.split("\n")[0],300)}`:""}`)), DB && cB(`WebGPU shader module messages:\n${hB(DB)}`)
          }))
        }(oB, String(null !== (OB = (null !== (GB = DB[0]) && void 0 !== GB ? GB : {}).code) && void 0 !== OB ? OB : "")), oB
      })), PO(BB, "createRenderPipeline", (BB => function() {
        for (var OB, GB = arguments.length, YB = new Array(GB), DB = 0; DB < GB; DB++) YB[DB] = arguments[DB];
        const QB = MO(BB, this, YB);
        return CO(QB, null !== (OB = YB[0]) && void 0 !== OB ? OB : {}), QB
      })), PO(BB, "createRenderPipelineAsync", (BB => function() {
        for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
        return MO(BB, this, GB).then((BB => {
          var OB;
          return CO(BB, null !== (OB = GB[0]) && void 0 !== OB ? OB : {}), BB
        }), (BB => {
          var OB;
          throw function(BB, OB) {
            var GB, YB, DB;
            if (wO.rejected >= yO) return;
            wO.rejected++;
            const {
              reason: QB,
              message: oB
            } = null !== OB && void 0 !== OB ? OB : {}, jB = String(null !== (GB = (null !== (YB = BB.vertex) && void 0 !== YB ? YB : {}).entryPoint) && void 0 !== GB ? GB : "");
            EB(`WebGPU pipeline "${String(null!==(DB=BB.label)&&void 0!==DB?DB:"")}" ${jB} rejected (${String(null!==QB&&void 0!==QB?QB:"no reason")}): ${hB(String(null!==oB&&void 0!==oB?oB:OB),600)}`)
          }(null !== (OB = GB[0]) && void 0 !== OB ? OB : {}, BB), BB
        }))
      })), PO(eO("GPUCanvasContext"), "configure", (BB => function() {
        for (var OB, GB = arguments.length, YB = new Array(GB), DB = 0; DB < GB; DB++) YB[DB] = arguments[DB];
        const QB = null !== (OB = YB[0]) && void 0 !== OB ? OB : {};
        var oB, jB;
        EO++ < 3 && EB(`WebGPU canvas ${String(QB.format)} ${String(null!==(oB=QB.colorSpace)&&void 0!==oB?oB:"srgb")} alpha ${String(null!==(jB=QB.alphaMode)&&void 0!==jB?jB:"opaque")}`);
        return MO(BB, this, YB)
      })), HO(eO("GPURenderPassEncoder")), HO(eO("GPURenderBundleEncoder"))
    }
    const xO = 1e4,
      tO = 6e4,
      BG = 5e3,
      OG = 3e3,
      GG = 100;
    let YG = null,
      DG = !1,
      QG = {
        ...IO.b
      },
      oG = !1,
      jG = null,
      yG = 0,
      JG = () => {};
    const MG = new Promise((BB => {
      JG = BB
    }));

    function PG() {
      var BB;
      DG || (DG = !0, QG = Object.assign(window.bloxdRenderDebug ??= {
        ...IO.b
      }, {
        faceCull: "0" === (0, QB.p)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (BB = (0, QB.p)("adrenoProbe")) && void 0 !== BB ? BB : ""
      }), EB("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), zO || "undefined" === typeof window || (zO = !0, "undefined" !== typeof WebGL2RenderingContext && UO(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && UO(WebGLRenderingContext.prototype, !1)), sO(), (0, QB.e)("renderProbe", (() => {
        NG("console")
      })), qG(), setInterval(WG, BG))
    }

    function zG(BB) {
      var OB, GB;
      PG(), YG = null !== (OB = null === BB || void 0 === BB ? void 0 : BB.backend) && void 0 !== OB ? OB : null;
      const YB = `, renderer param ${null!==(GB=(0,QB.p)("renderer"))&&void 0!==GB?GB:"none"}, faceCull ${"0"===QG.faceCull?"off (whole parts)":"on"}, adrenoProbe ${QG.adrenoProbe||"none"}`;
      EB(`${(0,FO.d)(BB)}${null===BB?"":YB}`)
    }

    function lG() {
      const BB = performance.now(),
        OB = pG(MG, xO, tO).then((OB => NG(`${Math.round((performance.now()-BB)/1e3)} s after playable${OB?"":", no terrain drawn yet"}`)));
      (0, DB.b)(EB, (async () => {
        await OB, await jG
      }))
    }
    async function pG(BB, OB, GB) {
      const DB = (0, YB.c)(GB).then((() => !1));
      return await (0, YB.c)(OB), Promise.race([BB.then((() => !0)), DB])
    }

    function qG() {
      requestAnimationFrame((() => {
        yG++, qG()
      }))
    }

    function ZG() {
      var BB, OB, GB;
      if (oG) return;
      (oG = !0, EB(`renderer caps ${null!==(BB=QG.caps)&&void 0!==BB?BB:"(not noted)"}; terrain fetch ${null!==(OB=QG.fetch)&&void 0!==OB?OB:"(not noted)"}`), QG.adrenoProbe) && EB(`adrenoProbe ${QG.adrenoProbe} asked; in force (storage fetch only): ${null!==(GB=QG.probe)&&void 0!==GB?GB:"(not noted)"}`);
      const YB = FB.context;
      if (YB) {
        for (const BB of function(BB) {
            var OB;
            const GB = [],
              YB = BB.getExtension("WEBGL_debug_renderer_info"),
              DB = YB ? BB.getParameter(YB.UNMASKED_VENDOR_WEBGL) : "(masked)",
              QB = YB ? BB.getParameter(YB.UNMASKED_RENDERER_WEBGL) : "(masked)";
            GB.push(`GL ${String(BB.getParameter(BB.VERSION))} | ${String(BB.getParameter(BB.SHADING_LANGUAGE_VERSION))} | ${String(BB.getParameter(BB.VENDOR))} / ${String(BB.getParameter(BB.RENDERER))}`), GB.push(`GL unmasked ${DB} / ${QB}`);
            const oB = [
              ["MAX_TEXTURE_SIZE", BB.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", BB.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", BB.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", BB.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", BB.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", BB.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", BB.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in BB && oB.push(["MAX_UNIFORM_BLOCK_SIZE", BB.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", BB.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", BB.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", BB.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), GB.push(`GL limits ${oB.map((OB=>{let[GB,YB]=OB;return`${GB} ${String(BB.getParameter(YB))}`})).join(", ")}`);
            const jB = (OB, GB) => {
              const YB = BB.getShaderPrecisionFormat(OB, BB.HIGH_FLOAT),
                DB = BB.getShaderPrecisionFormat(OB, BB.HIGH_INT);
              return `${GB} highp float ${YB?`${YB.rangeMin}/${YB.rangeMax}/${YB.precision}`:"?"} int ${DB?`${DB.rangeMin}/${DB.rangeMax}/${DB.precision}`:"?"}`
            };
            GB.push(`GL precision ${jB(BB.VERTEX_SHADER,"VS")}, ${jB(BB.FRAGMENT_SHADER,"FS")}`);
            const yB = BB.getContextAttributes();
            return GB.push(`GL context ${JSON.stringify(yB)} drawingBuffer ${BB.drawingBufferWidth}x${BB.drawingBufferHeight}${"drawingBufferFormat"in BB?` format 0x${Number(BB.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in BB?` ${String(BB.drawingBufferColorSpace)}`:""}`), GB.push(`GL extensions ${(null!==(OB=BB.getSupportedExtensions())&&void 0!==OB?OB:[]).join(" ")}`), GB
          }(YB)) EB(BB);
        ! function() {
          if (!FB.context) return;
          let BB = 0,
            OB = 0;
          for (const [GB, YB] of uB) !YB.gl.isContextLost() && YB.gl.isProgram(GB) && (OB++, dO(YB.gl, GB, YB), null !== YB.terrain && BB++);
          EB(`programs: ${OB} live of ${uB.length} linked, ${BB} packed terrain; CPU page copies ${Math.round(FB.shadowBytes/1048576)} MiB (${FB.uncopied} over budget)`)
        }()
      }
    }

    function NG(BB) {
      return jG ??= async function(BB) {
        ZG(), "webgpu" === YG ? (RG(), "1" === QG.slotCheck && EB("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), QG.slotCheck = "1", await
          function(BB) {
            if (null !== hO) return Promise.resolve();
            const OB = [];
            return hO = OB, new Promise((GB => {
              setTimeout((() => {
                hO = null, EB(`WebGPU draw ranges (${BB}): ${OB.length} terrain draws recorded in a second (first ${JO}; bundles replay without new ones)`);
                for (const BB of OB) EB(BB);
                GB()
              }), 1e3)
            }))
          }(BB), await async function() {
            if (await (0, IO.e)(QG, "slotCheck", ["1"], OG, GG), "1" === QG.slotCheck) return void EB(`slot check: no answer in ${OG} ms (only the storage fetch has one; a later answer logs on its own)`);
            RG()
          }()) : await oO(BB);
        EB(`check (${BB}) done: bloxdDebug.save() downloads it all`)
      }(BB).catch((OB => {
        EB(`check (${BB}) failed: ${String(OB)}`)
      })).finally((() => {
        jG = null
      })), jG
    }

    function RG() {
      void 0 !== QG.slotCheck && "1" !== QG.slotCheck && (EB(QG.slotCheck), delete QG.slotCheck)
    }

    function WG() {
      const BB = BB => yG ? (BB / yG).toFixed(1) : "0",
        OB = function() {
          const BB = aO;
          return aO = {
            draws: 0,
            faces: 0
          }, BB
        }(),
        GB = function() {
          const BB = NO;
          return NO = {
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
        YB = function() {
          const BB = RO;
          return RO = {
            buffer: 0,
            texture: 0
          }, BB
        }();
      RG(), ("webgpu" === YG ? OB.draws : GB.inst.draws + GB.tex.draws) > 0 && JG();
      const DB = "webgpu" === YG ? [`terrain ${BB(OB.draws)} draws ${BB(OB.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((BB => GB[BB].draws > 0)).map((OB => `${OB} ${BB(GB[OB].draws)} draws ${BB(GB[OB].faces)} faces a frame`));
      EB(`${yG} frames: ${DB.join(", ")||"no draws"}; uploaded ${Math.round(YB.buffer/1024)} KiB to buffers, ${Math.round(YB.texture/1024)} KiB to data textures`), yG = 0
    }
  },
  5167: (BB, OB, GB) => {
    function YB(BB) {
      if (null === BB) return "backend: none picked (no renderer build)";
      const OB = BB.adapter ? `${BB.adapter.vendor}/${BB.adapter.architecture}` : "none";
      return `backend ${BB.backend}: reason ${BB.reason}, source ${BB.source}, adapter ${OB}`
    }
    GB.d(OB, {
      d: () => YB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);