export const id = 49;
export const ids = [49];
export const modules = {
  4866: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB
    });
    var TB = ZB(20),
      JB = ZB(24),
      oB = ZB(1353),
      GB = ZB(2973);
    const vB = 3e4,
      kB = 1e3;

    function cB() {
      return "visible" === document.visibilityState && "inGame" === TB.d.get("gameState") && (0, oB.w)()
    }

    function nB(BB, IB) {
      (0, GB.u)() || function(BB, IB, ZB) {
        let TB = 0;
        const JB = setInterval((() => {
          IB() && (TB += kB, TB >= BB && (clearInterval(JB), ZB()))
        }), kB)
      }(vB, cB, (() => {
        IB().then((() => {
          BB(`saved for the player after ${vB/1e3} s of play`), (0, GB.I)(), JB.l.Gq("chat", {
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
  4862: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      installRenderDebug: () => hZ,
      renderDebugPlayable: () => FZ,
      startRenderDebug: () => zZ,
      waitForDraw: () => NZ
    });
    var TB = ZB(1878),
      JB = ZB(4866),
      oB = ZB(2973);
    const GB = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function vB(BB) {
      return 7 & BB
    }

    function kB(BB) {
      return BB >>> 11 & 1
    }

    function cB(BB) {
      return [1 + (BB >>> 18 & 63), 1 + (BB >>> 24 & 63)]
    }

    function nB(BB, IB) {
      const [ZB, , TB] = BB, JB = vB(TB), oB = function(BB, IB, ZB) {
        return IB + (1 === (22 >>> BB & 1) ? 4 - ZB : ZB) & 3
      }(JB, kB(TB), IB), GB = JB >>> 1, [nB, hB] = cB(ZB), zB = 1 === oB || 2 === oB ? nB : 0, FB = oB >= 2 ? hB : 0, NB = [63 & ZB, ZB >>> 6 & 63, ZB >>> 12 & 63];
      return NB[2 === GB ? 0 : 2] += zB, NB[1 === GB ? 0 : 1] += FB, NB
    }

    function hB(BB) {
      const IB = Math.max(...cB(BB[0]));
      return 1 === IB ? "1" : IB <= 4 ? "2-4" : IB <= 16 ? "5-16" : "17-64"
    }
    const zB = 16;

    function FB(BB) {
      let IB = 2166136261;
      for (let ZB = 0; ZB < BB.length; ZB++) IB = Math.imul(IB ^ BB[ZB], 16777619);
      return IB >>> 0
    }

    function NB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const TB = Math.max(0, IB - ZB),
        JB = Math.min(BB.length, IB + ZB),
        oB = [];
      for (let GB = TB; GB < JB; GB++) {
        const ZB = BB[GB].toString(16).padStart(2, "0");
        oB.push(GB === IB ? `[${ZB}]` : ZB)
      }
      return oB.join(" ")
    }
    const gB = {
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
      qB = "_vs2fs_location0";
    const yB = 0,
      UB = 4,
      WB = 6,
      dB = [0, 1, 2, 0, 2, 3],
      CB = 2048,
      QB = 4,
      sB = 256,
      wB = 64,
      OB = 268435456,
      YB = 65536,
      iB = /^#version [^\n]*\/\/ program (\S+)$/m;

    function pB(BB) {
      return null === BB.name ? `#${BB.id}` : `#${BB.id} ${BB.name}`
    }
    const aB = [],
      HB = new WeakMap,
      MB = new WeakMap,
      jB = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let PB = 1;
    const RB = new WeakMap;

    function rB(BB) {
      if (null === BB) return 0;
      let IB = RB.get(BB);
      return void 0 === IB && (IB = PB++, RB.set(BB, IB)), IB
    }
    class mB {
      constructor(BB, IB) {
        this.print = BB, this.now = IB, this.shown = 0, this.sv = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.XF = [], this.dropped = 0
      }
      line(BB) {
        const IB = this.now();
        if (IB - this.second >= 1e3 && (this.second = IB, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.sv++, void this.store(BB);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${BB} (the last line here: the rest go to bloxdDebug.save())` : BB)
      }
      keep(BB) {
        this.sections++, this.store(BB)
      }
      store(BB) {
        this.XF.push(`${new Date(Date.now()).toISOString()} ${BB}`), this.XF.length > 2e4 && (this.XF.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.sv} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.XF].join("\n")
      }
    }
    let XB = null;

    function LB() {
      if (null === XB) {
        const BB = new mB((BB => {
          (0, oB.o)("render", BB)
        }), (() => performance.now()));
        (0, oB.l)("render", (() => BB.dump())), XB = BB
      }
      return XB
    }

    function eB(BB) {
      LB().line(BB)
    }

    function uB(BB) {
      LB().keep(BB)
    }

    function fB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return BB.length <= IB ? BB : `${BB.slice(0,IB)}... (${BB.length-IB} more characters)`
    }

    function lB(BB, IB, ZB, TB, JB, oB) {
      const GB = jB.pendingCheck;
      if (null === GB) return;
      const vB = "undefined" !== typeof WebGL2RenderingContext && BB instanceof WebGL2RenderingContext,
        kB = {
          gl: BB,
          program: ZB,
          call: TB,
          vq: JB,
          instances: oB,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (GB.draws.push(kB), vB) try {
        const TB = function(BB) {
          const IB = [],
            ZB = new Map,
            TB = Math.min(16, BB.getParameter(gB.MAX_VERTEX_ATTRIBS));
          for (let JB = 0; JB < TB; JB++) {
            if (!BB.getVertexAttrib(JB, gB.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const TB = BB.getVertexAttrib(JB, gB.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              oB = BB.getVertexAttribOffset(JB, gB.VERTEX_ATTRIB_ARRAY_POINTER),
              GB = BB.getVertexAttrib(JB, gB.VERTEX_ATTRIB_ARRAY_STRIDE),
              vB = BB.getVertexAttrib(JB, gB.VERTEX_ATTRIB_ARRAY_SIZE),
              kB = BB.getVertexAttrib(JB, gB.VERTEX_ATTRIB_ARRAY_TYPE),
              cB = "VERTEX_ATTRIB_ARRAY_INTEGER" in BB && BB.getVertexAttrib(JB, gB.VERTEX_ATTRIB_ARRAY_INTEGER),
              nB = "VERTEX_ATTRIB_ARRAY_DIVISOR" in BB ? BB.getVertexAttrib(JB, gB.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            ZB.set(JB, {
              buffer: TB,
              offset: oB,
              stride: GB
            }), IB.push(`@${JB} buf#${rB(TB)} +${oB} stride ${GB} ${vB}x0x${kB.toString(16)}${cB?" int":""} div ${nB}`)
          }
          return {
            lines: IB,
            byLocation: ZB
          }
        }(BB);
        if (kB.attributes = TB.lines, "inst" === ZB.terrain) {
          const {
            group: JB,
            chunk: vB
          } = function(BB, IB, ZB) {
            const TB = IB.get(WB),
              JB = BB.getVertexAttrib(WB, gB.CURRENT_VERTEX_ATTRIB),
              oB = TB ? `+${TB.offset}` : JB ? Array.from(JB).slice(0, 3).join(",") : "?";
            let GB = ZB.groups.get(oB);
            return void 0 === GB && (GB = ZB.groups.size, ZB.groups.set(oB, GB)), {
              group: GB,
              chunk: oB
            }
          }(BB, TB.byLocation, GB);
          kB.group = JB, kB.chunk = vB;
          for (const BB of [yB, UB]) {
            var cB;
            const IB = null === (cB = TB.byLocation.get(BB)) || void 0 === cB ? void 0 : cB.buffer;
            IB && kB.pages.push({
              kind: "buf",
              buffer: IB
            })
          }! function(BB, IB, ZB, TB, JB, oB, GB) {
            const vB = TB.get(yB),
              kB = GB.parts.get(oB);
            if (void 0 === kB && GB.parts.size >= QB) return;
            const cB = Math.min(JB, wB, sB - (null !== kB && void 0 !== kB ? kB : 0));
            if (null === vB || void 0 === vB || !vB.buffer || cB <= 0) return;
            const nB = AB(BB, IB, ZB);
            if (!nB) return;
            const hB = vB.stride || 12,
              zB = DB(BB, vB.buffer, vB.offset, (cB - 1) * hB + 12),
              FB = new DataView(zB.buffer),
              NB = function(BB, IB) {
                const ZB = function(BB) {
                    const IB = SB.get(BB);
                    if (void 0 !== IB && (null === IB || BB.isProgram(IB))) return IB;
                    jB.inProbe = !0;
                    let ZB = null;
                    try {
                      ZB = tB(BB, KB, VB, "fed", "the record feed")
                    } finally {
                      jB.inProbe = !1
                    }
                    return SB.set(BB, ZB), ZB
                  }(BB),
                  TB = ZB ? EB(BB, ZB, IB, (() => {
                    BB.drawArraysInstanced(gB.POINTS, 0, 1, IB)
                  }), "decode probe input (the record feed)") : null;
                return TB ? new Uint32Array(TB.buffer) : null
              }(BB, cB);
            NB || GB.fed.failed++;
            const qB = EB(BB, nB, 4 * cB, (() => {
              BB.drawArraysInstanced(gB.POINTS, 0, 4, cB)
            }));
            if (!qB) return;
            GB.parts.set(oB, (null !== kB && void 0 !== kB ? kB : 0) + cB);
            for (let gB = 0; gB < cB; gB++) {
              const BB = gB * hB,
                IB = [FB.getUint32(BB, !0), FB.getUint32(BB + 4, !0), FB.getUint32(BB + 8, !0)],
                ZB = NB ? [NB[3 * gB], NB[3 * gB + 1], NB[3 * gB + 2]] : IB;
              NB && (GB.fed.records++, ZB.some(((BB, ZB) => BB !== IB[ZB])) && (GB.fed.differing++, GB.fed.first.length < 8 && GB.fed.first.push(`part ${oB} instance ${gB}: fed ${ZB.map(JI).join(" ")} buffer ${IB.map(JI).join(" ")}`)));
              for (let TB = 0; TB < 4; TB++) {
                const BB = 3 * (4 * gB + TB);
                GB.vertices.push({
                  record: ZB,
                  slot: TB,
                  group: oB,
                  gpu: [qB[BB], qB[BB + 1], qB[BB + 2]]
                })
              }
            }
          }(BB, IB, ZB, TB.byLocation, oB, JB, GB)
        } else {
          const TB = BI(BB, IB, 16),
            oB = BI(BB, IB, 8);
          for (const BB of [TB, oB]) BB && kB.pages.push({
            kind: "tex",
            texture: BB
          });
          TB && function(BB, IB, ZB, TB, JB, oB) {
            if (oB.parts.size >= QB) return;
            const GB = AB(BB, IB, ZB);
            if (!GB) return;
            let vB = 6 * sB;
            const kB = [];
            for (const [FB, NB] of JB) {
              const BB = Math.min(NB, vB, Math.max(6, 6 * Math.floor(sB / JB.length)));
              BB > 0 && (kB.push([FB, BB]), vB -= BB)
            }
            const cB = kB.reduce(((BB, IB) => {
                let [, ZB] = IB;
                return BB + ZB
              }), 0),
              nB = EB(BB, GB, cB, (() => {
                for (const [IB, ZB] of kB) BB.drawArrays(gB.POINTS, IB, ZB)
              }));
            if (!nB) return;
            let hB = 0;
            for (const [FB, NB] of kB) {
              const IB = Math.floor(FB / 6),
                ZB = Math.floor((FB + NB - 1) / 6) - IB + 1,
                JB = II(BB, TB, CB, IB, ZB);
              for (let BB = FB; BB < FB + NB; BB++, hB++) {
                var zB;
                const ZB = 4 * (Math.floor(BB / 6) - IB),
                  TB = [JB[ZB], JB[ZB + 1], JB[ZB + 2]];
                oB.parts.set(JB[ZB + 3], (null !== (zB = oB.parts.get(JB[ZB + 3])) && void 0 !== zB ? zB : 0) + (BB % 6 === 0 ? 1 : 0)), oB.vertices.push({
                  record: TB,
                  slot: dB[BB % 6],
                  group: JB[ZB + 3],
                  gpu: [nB[3 * hB], nB[3 * hB + 1], nB[3 * hB + 2]]
                })
              }
            }
          }(BB, IB, ZB, TB, JB, GB)
        }
      } catch (nB) {
        eB(`decode probe failed on program ${pB(ZB)}: ${String(nB)}`)
      }
    }

    function AB(BB, IB, ZB) {
      if (void 0 !== ZB.probe) return ZB.probe && bB(BB, IB, ZB.probe), ZB.probe;
      ZB.probe = null, jB.inProbe = !0;
      try {
        ZB.probe = function(BB, IB) {
          return tB(BB, (ZB = IB.vertex, ZB.replace(`\nvec3 ${qB} = vec3(0);\n`, `\nout vec3 ${qB};\n`)), IB.fragment, qB, `program ${pB(IB)}'s twin`);
          var ZB
        }(BB, ZB)
      } finally {
        jB.inProbe = !1
      }
      return ZB.probe && bB(BB, IB, ZB.probe), ZB.probe
    }

    function tB(BB, IB, ZB, TB, JB) {
      const oB = [BB.createShader(gB.VERTEX_SHADER), BB.createShader(gB.FRAGMENT_SHADER)],
        GB = BB.createProgram();
      if (!GB || !oB[0] || !oB[1]) return null;
      BB.shaderSource(oB[0], IB), BB.shaderSource(oB[1], ZB);
      for (const kB of oB) BB.compileShader(kB), BB.attachShader(GB, kB);
      BB.transformFeedbackVaryings(GB, [TB], gB.INTERLEAVED_ATTRIBS), BB.linkProgram(GB);
      for (const kB of oB) BB.deleteShader(kB);
      var vB;
      return BB.getProgramParameter(GB, gB.LINK_STATUS) ? GB : (eB(`decode probe: ${JB} failed to link: ${fB(null!==(vB=BB.getProgramInfoLog(GB))&&void 0!==vB?vB:"",300)}`), BB.deleteProgram(GB), null)
    }

    function bB(BB, IB, ZB) {
      const TB = BB.getProgramParameter(IB, gB.ACTIVE_UNIFORM_BLOCKS);
      for (let vB = 0; vB < TB; vB++) {
        const TB = BB.getActiveUniformBlockName(IB, vB),
          JB = null === TB ? gB.INVALID_INDEX : BB.getUniformBlockIndex(ZB, TB);
        JB !== gB.INVALID_INDEX && BB.uniformBlockBinding(ZB, JB, BB.getActiveUniformBlockParameter(IB, vB, gB.UNIFORM_BLOCK_BINDING))
      }
      const JB = BB.getParameter(gB.CURRENT_PROGRAM);
      BB.useProgram(ZB);
      const oB = BB.getProgramParameter(IB, gB.ACTIVE_UNIFORMS),
        GB = BB.getActiveUniforms(IB, [...Array(oB).keys()], gB.UNIFORM_BLOCK_INDEX);
      for (let vB = 0; vB < oB; vB++) {
        const TB = BB.getActiveUniform(IB, vB);
        if (!TB || -1 !== GB[vB]) continue;
        const JB = TB.name.replace(/\[0\]$/, "");
        for (let oB = 0; oB < TB.size; oB++) {
          const GB = TB.size > 1 ? `${JB}[${oB}]` : TB.name,
            vB = BB.getUniformLocation(IB, GB),
            kB = BB.getUniformLocation(ZB, GB);
          vB && kB && xB(BB, kB, TB.type, BB.getUniform(IB, vB))
        }
      }
      BB.useProgram(JB)
    }

    function xB(BB, IB, ZB, TB) {
      const JB = ArrayBuffer.isView(TB) ? Array.from(TB) : [Number(TB)];
      switch (ZB) {
        case gB.FLOAT:
          return void BB.uniform1f(IB, JB[0]);
        case gB.FLOAT_VEC2:
          return void BB.uniform2fv(IB, JB);
        case gB.FLOAT_VEC3:
          return void BB.uniform3fv(IB, JB);
        case gB.FLOAT_VEC4:
          return void BB.uniform4fv(IB, JB);
        case gB.FLOAT_MAT3:
          return void BB.uniformMatrix3fv(IB, !1, JB);
        case gB.FLOAT_MAT4:
          return void BB.uniformMatrix4fv(IB, !1, JB);
        case gB.UNSIGNED_INT:
          return void BB.uniform1ui(IB, JB[0]);
        case gB.UNSIGNED_INT_VEC2:
          return void BB.uniform2uiv(IB, JB);
        case gB.UNSIGNED_INT_VEC3:
          return void BB.uniform3uiv(IB, JB);
        case gB.UNSIGNED_INT_VEC4:
          return void BB.uniform4uiv(IB, JB);
        case gB.INT_VEC2:
          return void BB.uniform2iv(IB, JB);
        case gB.INT_VEC3:
          return void BB.uniform3iv(IB, JB);
        case gB.INT_VEC4:
          return void BB.uniform4iv(IB, JB);
        default:
          BB.uniform1i(IB, JB[0])
      }
    }

    function EB(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const oB = BB.getParameter(gB.CURRENT_PROGRAM),
        GB = BB.getParameter(gB.TRANSFORM_FEEDBACK_BINDING),
        vB = BB.getParameter(gB.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        kB = BB.getParameter(gB.COPY_READ_BUFFER_BINDING),
        cB = BB.isEnabled(gB.RASTERIZER_DISCARD),
        nB = BB.createTransformFeedback(),
        hB = BB.createBuffer();
      jB.inProbe = !0;
      try {
        const oB = BB.getError();
        oB !== gB.NO_ERROR && eB(`GL error 0x${oB.toString(16)} pending before the decode probe (the renderer's)`), BB.useProgram(IB), BB.bindTransformFeedback(gB.TRANSFORM_FEEDBACK, nB), BB.bindBuffer(gB.TRANSFORM_FEEDBACK_BUFFER, hB), BB.bufferData(gB.TRANSFORM_FEEDBACK_BUFFER, 12 * ZB, gB.STREAM_READ), BB.bindBufferBase(gB.TRANSFORM_FEEDBACK_BUFFER, 0, hB), BB.enable(gB.RASTERIZER_DISCARD), BB.beginTransformFeedback(gB.POINTS), TB(), BB.endTransformFeedback(), BB.bindBufferBase(gB.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const GB = BB.getError();
        if (GB !== gB.NO_ERROR) return eB(`${JB}: GL error 0x${GB.toString(16)} on the feedback draw`), null;
        const vB = new Float32Array(3 * ZB);
        return BB.bindBuffer(gB.COPY_READ_BUFFER, hB), BB.getBufferSubData(gB.COPY_READ_BUFFER, 0, vB), vB
      } finally {
        cB || BB.disable(gB.RASTERIZER_DISCARD), BB.bindTransformFeedback(gB.TRANSFORM_FEEDBACK, GB), BB.bindBuffer(gB.TRANSFORM_FEEDBACK_BUFFER, vB), BB.bindBuffer(gB.COPY_READ_BUFFER, kB), BB.deleteTransformFeedback(nB), BB.deleteBuffer(hB), BB.useProgram(oB), jB.inProbe = !1
      }
    }

    function DB(BB, IB, ZB, TB) {
      const JB = BB.getParameter(gB.COPY_READ_BUFFER_BINDING),
        oB = new Uint8Array(TB);
      return BB.bindBuffer(gB.COPY_READ_BUFFER, IB), BB.getBufferSubData(gB.COPY_READ_BUFFER, ZB, oB), BB.bindBuffer(gB.COPY_READ_BUFFER, JB), oB
    }
    const KB = `#version 300 es\nlayout(location = ${yB}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      VB = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      SB = new WeakMap;

    function BI(BB, IB, ZB) {
      const TB = BB.getProgramParameter(IB, gB.ACTIVE_UNIFORMS),
        JB = BB.getParameter(gB.ACTIVE_TEXTURE);
      try {
        for (let JB = 0; JB < TB; JB++) {
          const TB = BB.getActiveUniform(IB, JB);
          if ((null === TB || void 0 === TB ? void 0 : TB.type) !== gB.UNSIGNED_INT_SAMPLER_2D) continue;
          const oB = BB.getUniformLocation(IB, TB.name),
            GB = oB ? BB.getUniform(IB, oB) : -1;
          if (GB < 0) continue;
          BB.activeTexture(gB.TEXTURE0 + GB);
          const vB = BB.getParameter(gB.TEXTURE_BINDING_2D);
          if (vB && MB.get(vB) === ZB) return vB
        }
        return null
      } finally {
        BB.activeTexture(JB)
      }
    }

    function II(BB, IB, ZB, TB, JB) {
      const oB = new Uint32Array(4 * JB),
        GB = BB.getParameter(gB.READ_FRAMEBUFFER_BINDING),
        vB = BB.createFramebuffer();
      BB.bindFramebuffer(gB.READ_FRAMEBUFFER, vB), BB.framebufferTexture2D(gB.READ_FRAMEBUFFER, gB.COLOR_ATTACHMENT0, gB.TEXTURE_2D, IB, 0);
      try {
        let IB = 0;
        for (; IB < JB;) {
          const GB = TB + IB,
            vB = GB % ZB,
            kB = Math.min(JB - IB, ZB - vB);
          BB.readPixels(vB, Math.floor(GB / ZB), kB, 1, gB.RGBA_INTEGER, gB.UNSIGNED_INT, oB.subarray(4 * IB, 4 * (IB + kB))), IB += kB
        }
      } finally {
        BB.bindFramebuffer(gB.READ_FRAMEBUFFER, GB), BB.deleteFramebuffer(vB)
      }
      return oB
    }

    function ZI(BB, IB, ZB) {
      let TB = 0,
        JB = 0;
      for (let kB = 0; kB < IB.bytes.length; kB += YB) {
        TB++;
        const BB = Math.min(kB + YB, IB.bytes.length);
        FB(IB.bytes.subarray(kB, BB)) !== FB(ZB.subarray(kB, BB)) && JB++
      }
      const oB = `${BB} ${IB.bytes.length} B cpu ${FB(IB.bytes).toString(16)} gpu ${FB(ZB).toString(16)}, ${JB}/${TB} blocks differ${IB.missed?`, ${IB.missed} GPU-side writes uncopied`:""}`;
      if (0 === JB) return oB;
      const {
        count: GB,
        offsets: vB
      } = function(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const TB = Math.min(BB.length, IB.length);
        let JB = Math.abs(BB.length - IB.length);
        const oB = [];
        for (let GB = 0; GB < TB; GB++) BB[GB] !== IB[GB] && (JB++, oB.length < ZB && oB.push(GB));
        return {
          count: JB,
          offsets: oB
        }
      }(IB.bytes, ZB);
      return uB([`${oB}: ${GB} bytes differ`, ...vB.map((BB => `  +${BB}: cpu ${NB(IB.bytes,BB)} | gpu ${NB(ZB,BB)}`))].join("\n")), `${oB}: ${GB} bytes differ, first at ${vB.join(", ")} (context in the saved file)`
    }

    function TI(BB) {
      if (0 === BB.vertices.length) return void eB(`decode probe (${BB.reason}): no terrain draw probed (${BB.draws.length} seen)`);
      const IB = function(BB) {
          const IB = new Map;
          for (const TB of BB) {
            const BB = IB.get(TB.group);
            BB ? BB.push(TB) : IB.set(TB.group, [TB])
          }
          const ZB = {
            vertices: BB.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [TB, JB] of IB) {
            const BB = new Map,
              IB = JB.map((IB => {
                const ZB = nB(IB.record, IB.slot),
                  TB = [IB.gpu[0] - ZB[0], IB.gpu[1] - ZB[1], IB.gpu[2] - ZB[2]],
                  JB = TB.map((BB => Math.round(64 * BB))).join(","),
                  oB = BB.get(JB);
                return oB ? oB.count++ : BB.set(JB, {
                  count: 1,
                  offset: TB
                }), ZB
              }));
            let oB = [0, 0, 0],
              GB = 0;
            for (const ZB of BB.values()) ZB.count > GB && (GB = ZB.count, oB = ZB.offset);
            ZB.translations.set(TB, oB), JB.forEach(((BB, TB) => {
              var JB;
              const GB = [IB[TB][0] + oB[0], IB[TB][1] + oB[1], IB[TB][2] + oB[2]];
              if (GB.every(((IB, ZB) => {
                  return TB = BB.gpu[ZB], JB = IB, Math.abs(TB - JB) <= Math.max(.001, 1e-6 * Math.abs(JB));
                  var TB, JB
                }))) return;
              ZB.mismatches++, ZB.byDirection[vB(BB.record[2])]++, ZB.byDiagonal[kB(BB.record[2])]++;
              const cB = hB(BB.record);
              ZB.byBand[cB] = (null !== (JB = ZB.byBand[cB]) && void 0 !== JB ? JB : 0) + 1, ZB.first.length < zB && ZB.first.push({
                ...BB,
                expected: GB
              })
            }))
          }
          return ZB
        }(BB.vertices),
        ZB = IB.byDirection.map(((BB, IB) => BB ? `${GB[IB]} ${BB}` : "")).filter(Boolean).join(" "),
        TB = Object.entries(IB.byBand).map((BB => {
          let [IB, ZB] = BB;
          return `${IB}: ${ZB}`
        })).join(" ");
      if (eB(`decode probe (${BB.reason}): ${IB.mismatches}/${IB.vertices} vertices differ from the CPU decode over ${BB.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (IB.mismatches ? ` by direction [${ZB}] diagonal [0: ${IB.byDiagonal[0]} 1: ${IB.byDiagonal[1]}] extent [${TB}]` : "")), BB.fed.records > 0 || BB.fed.failed > 0) {
        eB(`decode probe input: ${BB.fed.differing}/${BB.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (BB.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (BB.fed.failed ? `; the feed failed on ${BB.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const IB of BB.fed.first) eB(`  ${IB}`)
      }
      for (const JB of IB.first) {
        const [BB, IB, ZB] = JB.record;
        eB(`  mismatch part ${JB.group} r0 ${BB.toString(16)} r1 ${IB.toString(16)} r2 ${ZB.toString(16)} slot ${JB.slot} (${GB[vB(ZB)]}): expected ${JB.expected.map(oI).join(",")} gpu ${JB.gpu.map(oI).join(",")}`)
      }
      uB(`decode probe translations: ${[...IB.translations].map((BB=>{let[IB,ZB]=BB;return`${IB}: ${ZB.map(oI).join(",")}`})).join("; ")}`)
    }

    function JI(BB) {
      return BB.toString(16)
    }

    function oI(BB) {
      return Number.isInteger(BB) ? String(BB) : BB.toFixed(3)
    }

    function GI(BB) {
      return null !== jB.pendingCheck ? Promise.resolve() : new Promise((IB => {
        let ZB = !1;
        const TB = {
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
        jB.pendingCheck = TB;
        const JB = () => {
            jB.pendingCheck = null;
            try {
              ! function(BB) {
                eB(`draw ranges (${BB.reason}): ${BB.terrainDraws} terrain draws in the frame, the first ${BB.draws.length} here`);
                for (const IB of BB.draws) {
                  const BB = IB.vq.slice(0, 8).map((BB => {
                      let [IB, ZB] = BB;
                      return `${IB}+${ZB}`
                    })).join(" "),
                    ZB = IB.vq.length > 8 ? ` (+${IB.vq.length-8} ranges)` : "";
                  eB(`  ${pB(IB.program)} ${IB.program.terrain} ${IB.call} ${BB}${ZB} x${IB.instances}${IB.group>=0?` part ${IB.group} chunk ${IB.chunk}`:""} | ${IB.attributes.join(" | ")}`)
                }
              }(TB), TI(TB);
              TB.draws.some((BB => "undefined" !== typeof WebGL2RenderingContext && BB.gl instanceof WebGL2RenderingContext)) || 0 === TB.draws.length ? function(BB) {
                const IB = [],
                  ZB = new Map;
                for (const TB of BB)
                  if ("undefined" !== typeof WebGL2RenderingContext && TB.gl instanceof WebGL2RenderingContext)
                    for (const BB of TB.pages) ZB.set("buf" === BB.kind ? BB.buffer : BB.texture, {
                      page: BB,
                      gl: TB.gl
                    });
                for (const [TB, {
                    page: JB,
                    gl: oB
                  }] of ZB) {
                  const BB = HB.get(TB);
                  if (!BB) {
                    IB.push(`${JB.kind}#${rB(TB)}: no CPU copy (${jB.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === JB.kind) {
                    IB.push(ZI(`buf#${BB.id}`, BB, DB(oB, JB.buffer, 0, BB.bytes.length)));
                    continue
                  }
                  const ZB = II(oB, JB.texture, BB.width, 0, BB.width * BB.height),
                    GB = 16 === BB.texelBytes ? new Uint8Array(ZB.buffer) : new Uint8Array(new Uint16Array(ZB).buffer);
                  IB.push(ZI(`tex#${BB.id} (${16===BB.texelBytes?"records":"light"})`, BB, GB))
                }
                for (const TB of IB) eB(`page readback ${TB}`)
              }(TB.draws) : eB("page readback: none on WebGL1 (no buffer readback)")
            } catch (BB) {
              eB(`check failed: ${String(BB)}`)
            }
            IB()
          },
          oB = () => {
            if (TB.draws.length > 0 && !ZB) return ZB = !0, void setTimeout(JB, 0);
            ZB || requestAnimationFrame(oB)
          };
        requestAnimationFrame(oB), setTimeout((() => {
          ZB || (ZB = !0, JB())
        }), 5e3)
      }))
    }
    var vI = ZB(4874);
    const kI = 20,
      cI = 24,
      nI = Reflect.apply;

    function hI(BB, IB, ZB) {
      if (!BB) return;
      const TB = BB[IB];
      if ("function" === typeof TB) {
        const JB = ZB(TB);
        BB[IB] = JB, (0, vI.A)(JB, TB)
      }
    }
    let zI = !1;
    const FI = new WeakMap,
      NI = new WeakMap,
      gI = new WeakMap,
      qI = {
        gl: 0,
        lost: 0
      };
    let yI = {
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
      UI = {
        buffer: 0,
        texture: 0
      },
      WI = 0;

    function dI(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (BB instanceof ArrayBuffer) return new Uint8Array(BB, IB, ZB || void 0);
      if (!ArrayBuffer.isView(BB)) return null;
      const TB = "BYTES_PER_ELEMENT" in BB ? BB.BYTES_PER_ELEMENT : 1,
        JB = BB.byteOffset + IB * TB,
        oB = ZB ? ZB * TB : BB.byteLength - IB * TB;
      return new Uint8Array(BB.buffer, JB, Math.max(0, oB))
    }

    function CI(BB, IB) {
      const ZB = function(BB) {
        switch (BB) {
          case gB.ARRAY_BUFFER:
            return gB.ARRAY_BUFFER_BINDING;
          case gB.ELEMENT_ARRAY_BUFFER:
            return gB.ELEMENT_ARRAY_BUFFER_BINDING;
          case gB.COPY_READ_BUFFER:
            return gB.COPY_READ_BUFFER_BINDING;
          case gB.COPY_WRITE_BUFFER:
            return gB.COPY_WRITE_BUFFER_BINDING;
          case gB.UNIFORM_BUFFER:
            return gB.UNIFORM_BUFFER_BINDING;
          case gB.PIXEL_UNPACK_BUFFER:
            return gB.PIXEL_UNPACK_BUFFER_BINDING;
          case gB.TRANSFORM_FEEDBACK_BUFFER:
            return gB.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(IB);
      return ZB ? BB.getParameter(ZB) : null
    }

    function QI(BB) {
      const IB = HB.get(BB);
      IB && (jB.shadowBytes -= IB.bytes.length, HB.delete(BB))
    }

    function sI(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      QI(BB), jB.shadowBytes + IB > OB ? jB.uncopied++ : (jB.shadowBytes += IB, HB.set(BB, {
        id: rB(BB),
        bytes: new Uint8Array(IB),
        width: ZB,
        height: TB,
        texelBytes: JB,
        missed: 0
      }))
    }

    function wI(BB, IB) {
      for (const ZB of ["deleteBuffer", "deleteTexture"]) hI(BB, ZB, (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        return ZB[0] && QI(ZB[0]), nI(BB, this, ZB)
      }));
      hI(BB, "shaderSource", (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        return ZB[0] && "string" === typeof ZB[1] && FI.set(ZB[0], ZB[1]), nI(BB, this, ZB)
      })), hI(BB, "attachShader", (BB => function() {
        for (var IB, ZB = arguments.length, TB = new Array(ZB), JB = 0; JB < ZB; JB++) TB[JB] = arguments[JB];
        const oB = TB[0],
          GB = null !== (IB = NI.get(oB)) && void 0 !== IB ? IB : [];
        return GB.push(TB[1]), NI.set(oB, GB), nI(BB, this, TB)
      })), hI(BB, "linkProgram", (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        const JB = nI(BB, this, ZB);
        return jB.inProbe || function(BB, IB) {
          var ZB, TB, JB;
          "undefined" !== typeof HTMLCanvasElement && BB.canvas instanceof HTMLCanvasElement && function(BB) {
            if (HI.has(BB)) return;
            HI.add(BB);
            for (const IB of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) BB.addEventListener(IB, (BB => {
              qI.lost < kI && (qI.lost++, eB(`${IB}${"statusMessage"in BB?`: ${String(BB.statusMessage)}`:""}`))
            }))
          }(BB.canvas);
          jB.context ??= BB;
          const oB = null !== (ZB = NI.get(IB)) && void 0 !== ZB ? ZB : [];
          let GB = "",
            vB = "";
          for (const nB of oB) {
            var kB;
            const BB = null !== (kB = FI.get(nB)) && void 0 !== kB ? kB : "";
            /\bgl_Position\b/.test(BB) ? GB = BB : vB = BB
          }
          const cB = {
            id: rB(IB),
            name: null !== (TB = null === (JB = iB.exec(GB)) || void 0 === JB ? void 0 : JB[1]) && void 0 !== TB ? TB : null,
            gl: BB,
            vertex: GB,
            fragment: vB,
            terrain: YI(GB),
            checked: !1,
            firstDraw: !1
          };
          if (gI.set(IB, cB), aB.push([IB, cB]), null !== cB.terrain) {
            const IB = oB.map((IB => {
              var ZB;
              return null !== (ZB = BB.getShaderInfoLog(IB)) && void 0 !== ZB ? ZB : ""
            })).filter((BB => "" !== BB.trim()));
            IB.length > 0 && uB(`program ${pB(cB)} (${cB.terrain}) shader logs:\n${fB(IB.join("\n"))}`)
          }
        }(this, ZB[0]), JB
      })), hI(BB, "bufferData", (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        const JB = nI(BB, this, ZB);
        if (!jB.inProbe) {
          const BB = CI(this, ZB[0]);
          if (BB) {
            var oB, GB, vB;
            const IB = "number" === typeof ZB[1] ? null : dI(ZB[1], null !== (oB = ZB[3]) && void 0 !== oB ? oB : 0, null !== (GB = ZB[4]) && void 0 !== GB ? GB : 0);
            var kB;
            if (sI(BB, "number" === typeof ZB[1] ? ZB[1] : null !== (vB = null === IB || void 0 === IB ? void 0 : IB.length) && void 0 !== vB ? vB : 0), IB) null === (kB = HB.get(BB)) || void 0 === kB || kB.bytes.set(IB)
          }
        }
        return JB
      })), hI(BB, "bufferSubData", (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        const JB = nI(BB, this, ZB);
        if (!jB.inProbe) {
          var oB, GB;
          const BB = CI(this, ZB[0]),
            IB = BB ? HB.get(BB) : void 0,
            TB = dI(ZB[2], null !== (oB = ZB[3]) && void 0 !== oB ? oB : 0, null !== (GB = ZB[4]) && void 0 !== GB ? GB : 0);
          if (IB && TB) {
            const BB = ZB[1];
            IB.bytes.set(TB.subarray(0, Math.max(0, IB.bytes.length - BB)), BB), OI("buffer", IB, BB, TB.length)
          }
        }
        return JB
      })), IB && (hI(BB, "copyBufferSubData", (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        const JB = nI(BB, this, ZB);
        if (!jB.inProbe) {
          const [BB, IB, TB, JB, oB] = ZB, GB = CI(this, BB), vB = CI(this, IB), kB = GB ? HB.get(GB) : void 0, cB = vB ? HB.get(vB) : void 0;
          cB && (kB ? cB.bytes.set(kB.bytes.slice(TB, TB + oB), JB) : cB.missed++)
        }
        return JB
      })), hI(BB, "texStorage2D", (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        const JB = nI(BB, this, ZB),
          [, , oB, GB, vB] = ZB;
        if (!jB.inProbe && (oB === gB.RGBA32UI || oB === gB.RGBA16UI)) {
          const BB = this.getParameter(gB.TEXTURE_BINDING_2D),
            IB = oB === gB.RGBA32UI ? 16 : 8;
          BB && (MB.set(BB, IB), sI(BB, GB * vB * IB, GB, vB, IB))
        }
        return JB
      })), hI(BB, "texSubImage2D", (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        const JB = nI(BB, this, ZB);
        return !jB.inProbe && ZB.length >= 9 && ZB[0] === gB.TEXTURE_2D && 0 === ZB[1] && function(BB, IB) {
          var ZB;
          const TB = BB.getParameter(gB.TEXTURE_BINDING_2D),
            JB = TB ? HB.get(TB) : void 0;
          if (!JB) return;
          const [, , oB, GB, vB, kB] = IB;
          let cB = dI(IB[8], null !== (ZB = IB[9]) && void 0 !== ZB ? ZB : 0);
          if (null === cB && "number" === typeof IB[8]) {
            const ZB = CI(BB, gB.PIXEL_UNPACK_BUFFER),
              TB = ZB ? HB.get(ZB) : void 0;
            cB = TB ? TB.bytes.subarray(IB[8]) : null
          }
          if (null === cB) return void JB.missed++;
          const nB = BB.getParameter(gB.UNPACK_ROW_LENGTH) || vB,
            hB = BB.getParameter(gB.UNPACK_SKIP_ROWS),
            zB = BB.getParameter(gB.UNPACK_SKIP_PIXELS),
            FB = JB.texelBytes;
          for (let NB = 0; NB < kB; NB++) {
            const BB = ((hB + NB) * nB + zB) * FB,
              IB = ((GB + NB) * JB.width + oB) * FB;
            JB.bytes.set(cB.subarray(BB, BB + vB * FB), IB)
          }
          OI("texture", JB, (GB * JB.width + oB) * FB, vB * kB * FB)
        }(this, ZB), JB
      })), hI(BB, "copyTexSubImage2D", (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        const JB = ZB[0] === gB.TEXTURE_2D ? this.getParameter(gB.TEXTURE_BINDING_2D) : null,
          oB = JB ? HB.get(JB) : void 0;
        return oB && oB.missed++, nI(BB, this, ZB)
      })));
      for (const ZB of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) hI(BB, ZB, (BB => function() {
        for (var IB = arguments.length, TB = new Array(IB), JB = 0; JB < IB; JB++) TB[JB] = arguments[JB];
        const oB = nI(BB, this, TB);
        return jB.inProbe || pI(this, ZB, TB), oB
      }));
      hI(BB, "getExtension", (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        const JB = nI(BB, this, ZB);
        return JB && "object" === typeof JB && function(BB, IB, ZB) {
          const TB = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(IB in TB) || ZB.bloxdRenderDebug) return;
          ZB.bloxdRenderDebug = !0;
          for (const JB of TB[IB]) {
            const IB = ZB[JB];
            "function" === typeof IB && (ZB[JB] = function() {
              for (var TB = arguments.length, oB = new Array(TB), GB = 0; GB < TB; GB++) oB[GB] = arguments[GB];
              const vB = nI(IB, ZB, oB);
              return jB.inProbe || pI(BB, JB, oB), vB
            })
          }
        }(this, ZB[0], JB), JB
      }))
    }

    function OI(BB, IB, ZB, TB) {
      UI[BB] += TB, WI < 32 && IB.bytes.length >= 1 << 20 && (WI++, uB(`upload ${BB} #${IB.id} +${ZB} ${TB} B`))
    }

    function YI(BB) {
      if (!BB.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(BB) || /in uvec3 _p2vs_location0\b/.test(BB) ? "inst" : "tex"
    }

    function iI(BB, IB, ZB) {
      var TB;
      if (ZB.checked) return;
      ZB.checked = !0;
      const JB = BB.getProgramParameter(IB, gB.LINK_STATUS),
        oB = (null !== (TB = BB.getProgramInfoLog(IB)) && void 0 !== TB ? TB : "").trim();
      var GB;
      null === ZB.terrain && JB || (eB(`program ${pB(ZB)} ${null!==(GB=ZB.terrain)&&void 0!==GB?GB:"other"} link ${JB?"ok":"FAILED"}${oB?`: ${fB(oB,300)}`:""}`), oB && uB(`program ${pB(ZB)} link log:\n${fB(oB)}`))
    }

    function pI(BB, IB, ZB) {
      var TB;
      const JB = BB.getParameter(gB.CURRENT_PROGRAM),
        oB = JB ? gI.get(JB) : void 0;
      if (!JB || !oB) return;
      const GB = null !== (TB = oB.terrain) && void 0 !== TB ? TB : "other",
        {
          vq: vB,
          instances: kB
        } = function(BB, IB) {
          switch (BB) {
            case "drawArrays":
              return {
                vq: [
                  [IB[1], IB[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                vq: [
                  [IB[1], IB[2]]
                ], instances: IB[3]
              };
            case "drawElements":
              return {
                vq: [
                  [0, IB[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                vq: [
                  [0, IB[1]]
                ], instances: IB[4]
              };
            case "multiDrawArraysWEBGL": {
              const BB = IB[1],
                ZB = IB[3],
                TB = IB[2],
                JB = IB[4],
                oB = [];
              for (let GB = 0; GB < IB[5]; GB++) oB.push([BB[TB + GB], ZB[JB + GB]]);
              return {
                vq: oB,
                instances: 1
              }
            }
            default:
              return {
                vq: [], instances: 0
              }
          }
        }(IB, ZB),
        cB = "inst" === oB.terrain ? kB : vB.reduce(((BB, IB) => {
          let [, ZB] = IB;
          return BB + ZB
        }), 0) / 6;
      if (yI[GB].draws++, yI[GB].faces += cB, null === oB.terrain) return;
      if (jB.context = BB, !oB.firstDraw) {
        oB.firstDraw = !0, iI(BB, JB, oB), aI || (aI = !0, eB(function(BB) {
          var IB;
          const ZB = BB.getParameter(gB.DEPTH_FUNC),
            TB = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let JB = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in BB && BB.getParameter(gB.DRAW_FRAMEBUFFER_BINDING)) {
            const IB = BB;
            JB = IB.getFramebufferAttachmentParameter(gB.DRAW_FRAMEBUFFER, gB.DEPTH_ATTACHMENT, gB.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(IB.getFramebufferAttachmentParameter(gB.DRAW_FRAMEBUFFER,gB.DEPTH_ATTACHMENT,gB.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(IB.getFramebufferAttachmentParameter(gB.DRAW_FRAMEBUFFER,gB.DEPTH_ATTACHMENT,gB.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const oB = BB.getParameter(gB.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(IB=TB[ZB])&&void 0!==IB?IB:`0x${ZB.toString(16)}`} clear ${oB}${516===ZB||518===ZB?" (reverse-Z)":""}, samples ${String(BB.getParameter(gB.SAMPLES))}, ${JB}`
        }(BB)));
        const ZB = BB.getError();
        ZB !== gB.NO_ERROR && qI.gl < kI && (qI.gl++, eB(`GL error 0x${ZB.toString(16)} after program ${pB(oB)}'s first terrain draw (${IB})`))
      }
      const nB = jB.pendingCheck;
      null !== nB && (nB.terrainDraws++, nB.draws.length < cI && lB(BB, JB, oB, IB, vB, kB))
    }
    let aI = !1;
    const HI = new WeakSet;
    var MI = ZB(4698),
      jI = ZB(4879);
    const PI = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let RI = !1;
    const rI = new WeakSet,
      mI = new WeakMap,
      XI = new WeakMap,
      LI = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let eI = 0,
      uI = !1,
      fI = null,
      lI = {
        draws: 0,
        faces: 0
      };

    function AI(BB) {
      const IB = globalThis[BB];
      return null === IB || void 0 === IB ? void 0 : IB.prototype
    }

    function tI(BB) {
      return BB && "function" === typeof BB[Symbol.iterator] ? [...BB].sort().join(" ") : ""
    }

    function bI(BB, IB) {
      const ZB = null !== BB && void 0 !== BB ? BB : {},
        TB = null !== IB && void 0 !== IB ? IB : Object.keys(Object.getPrototypeOf(ZB)).concat(Object.keys(ZB));
      return [...new Set(TB)].filter((BB => "number" === typeof ZB[BB])).map((BB => `${BB} ${String(ZB[BB])}`)).join(", ")
    }

    function xI(BB, IB) {
      var ZB;
      const TB = null !== (ZB = IB.vertex) && void 0 !== ZB ? ZB : {};
      if (TB.module && rI.has(TB.module)) {
        var JB;
        const ZB = String(null !== (JB = TB.entryPoint) && void 0 !== JB ? JB : "");
        if (ZB.startsWith("vs_packed") && mI.set(BB, ZB), !uI) {
          var oB, GB, vB, kB, cB;
          uI = !0;
          const BB = null !== (oB = IB.depthStencil) && void 0 !== oB ? oB : {},
            TB = null !== (GB = IB.multisample) && void 0 !== GB ? GB : {},
            JB = String(null !== (vB = BB.depthCompare) && void 0 !== vB ? vB : "");
          eB(`WebGPU terrain pipeline ${ZB}: depth ${String(null!==(kB=BB.format)&&void 0!==kB?kB:"none")} ${JB}${JB.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(cB=TB.count)&&void 0!==cB?cB:1)}`)
        }
      }
    }

    function EI(BB) {
      hI(BB, "setPipeline", (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        return XI.set(this, ZB[0]), nI(BB, this, ZB)
      }));
      for (const IB of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) hI(BB, IB, (BB => function() {
        const ZB = XI.get(this),
          TB = ZB ? mI.get(ZB) : void 0;
        for (var JB = arguments.length, oB = new Array(JB), GB = 0; GB < JB; GB++) oB[GB] = arguments[GB];
        return void 0 !== TB && DI(IB, TB, oB), nI(BB, this, oB)
      }))
    }

    function DI(BB, IB, ZB) {
      var TB;
      (lI.draws++, "draw" === BB || "drawIndexed" === BB) && (lI.faces += ZB[0] * (null !== (TB = ZB[1]) && void 0 !== TB ? TB : 1) / 6);
      if (null !== fI && fI.length < cI) {
        const TB = ("draw" === BB ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === BB ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((IB, TB) => {
          const JB = BB.endsWith("Indirect") ? ZB[1] : ZB[TB];
          return `${IB} ${String(null!==JB&&void 0!==JB?JB:"instances"===IB?1:0)}`
        }));
        fI.push(`  ${IB} ${BB} ${TB.join(" ")}`)
      }
    }

    function KI() {
      if (RI || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      RI = !0, hI(AI("GPU"), "requestAdapter", (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        return nI(BB, this, ZB).then((BB => {
          var IB;
          BB ? function(BB) {
            var IB;
            const ZB = null !== (IB = BB.info) && void 0 !== IB ? IB : {};
            eB(`WebGPU adapter ${["vendor","architecture","device","description"].map((BB=>{var IB;return`${BB} "${String(null!==(IB=ZB[BB])&&void 0!==IB?IB:"")}"`})).join(" ")}${BB.isFallbackAdapter?" (fallback)":""}`), eB(`WebGPU adapter features ${tI(BB.features)}`), eB(`WebGPU adapter limits ${bI(BB.limits,PI)}`), uB(`WebGPU adapter all limits ${bI(BB.limits,null)}`)
          }(BB) : eB(`WebGPU requestAdapter(${JSON.stringify(null!==(IB=ZB[0])&&void 0!==IB?IB:{})}) gave none`);
          return BB
        }))
      })), hI(AI("GPUAdapter"), "requestDevice", (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        return nI(BB, this, ZB).then((BB => (function(BB) {
          eB(`WebGPU device features ${tI(BB.features)}`), eB(`WebGPU device limits ${bI(BB.limits,PI)}`), BB.addEventListener("uncapturederror", (BB => {
            if (LI.uncaptured < kI) {
              var IB, ZB, TB;
              LI.uncaptured++;
              const JB = BB.error;
              eB(`WebGPU uncaptured ${null!==(IB=null===JB||void 0===JB||null===(ZB=JB.constructor)||void 0===ZB?void 0:ZB.name)&&void 0!==IB?IB:"error"}: ${fB(String(null!==(TB=null===JB||void 0===JB?void 0:JB.message)&&void 0!==TB?TB:""),600)}`)
            }
          }));
          const IB = BB.lost;
          null === IB || void 0 === IB || IB.then((BB => {
            var IB;
            eB(`WebGPU device lost (${String(BB.reason)}): ${fB(String(null!==(IB=BB.message)&&void 0!==IB?IB:""),600)}`)
          }))
        }(BB), BB)), (BB => {
          throw eB(`WebGPU requestDevice failed: ${String(BB)}`), BB
        }))
      }));
      const BB = AI("GPUDevice");
      hI(BB, "createShaderModule", (BB => function() {
        for (var IB, ZB, TB = arguments.length, JB = new Array(TB), oB = 0; oB < TB; oB++) JB[oB] = arguments[oB];
        const GB = nI(BB, this, JB);
        return function(BB, IB) {
          const ZB = IB.includes("decodeQuad");
          ZB && rI.add(BB);
          const TB = BB.getCompilationInfo;
          null === TB || void 0 === TB || TB.call(BB).then((BB => {
            if (0 === BB.messages.length && !ZB) return;
            const IB = {};
            for (const ZB of BB.messages) {
              var TB;
              IB[String(ZB.type)] = (null !== (TB = IB[String(ZB.type)]) && void 0 !== TB ? TB : 0) + 1
            }
            const JB = BB.messages.map((BB => `${String(BB.type)} ${String(BB.lineNum)}:${String(BB.linePos)} ${String(BB.message)}`)).join("\n");
            LI.compile < kI && (LI.compile++, eB(`WebGPU ${ZB?"terrain ":""}shader module compiled: ${JSON.stringify(IB)}${JB?` first: ${fB(JB.split("\n")[0],300)}`:""}`)), JB && uB(`WebGPU shader module messages:\n${fB(JB)}`)
          }))
        }(GB, String(null !== (IB = (null !== (ZB = JB[0]) && void 0 !== ZB ? ZB : {}).code) && void 0 !== IB ? IB : "")), GB
      })), hI(BB, "createRenderPipeline", (BB => function() {
        for (var IB, ZB = arguments.length, TB = new Array(ZB), JB = 0; JB < ZB; JB++) TB[JB] = arguments[JB];
        const oB = nI(BB, this, TB);
        return xI(oB, null !== (IB = TB[0]) && void 0 !== IB ? IB : {}), oB
      })), hI(BB, "createRenderPipelineAsync", (BB => function() {
        for (var IB = arguments.length, ZB = new Array(IB), TB = 0; TB < IB; TB++) ZB[TB] = arguments[TB];
        return nI(BB, this, ZB).then((BB => {
          var IB;
          return xI(BB, null !== (IB = ZB[0]) && void 0 !== IB ? IB : {}), BB
        }), (BB => {
          var IB;
          throw function(BB, IB) {
            var ZB, TB, JB;
            if (LI.rejected >= kI) return;
            LI.rejected++;
            const {
              reason: oB,
              message: GB
            } = null !== IB && void 0 !== IB ? IB : {}, vB = String(null !== (ZB = (null !== (TB = BB.vertex) && void 0 !== TB ? TB : {}).entryPoint) && void 0 !== ZB ? ZB : "");
            eB(`WebGPU pipeline "${String(null!==(JB=BB.label)&&void 0!==JB?JB:"")}" ${vB} rejected (${String(null!==oB&&void 0!==oB?oB:"no reason")}): ${fB(String(null!==GB&&void 0!==GB?GB:IB),600)}`)
          }(null !== (IB = ZB[0]) && void 0 !== IB ? IB : {}, BB), BB
        }))
      })), hI(AI("GPUCanvasContext"), "configure", (BB => function() {
        for (var IB, ZB = arguments.length, TB = new Array(ZB), JB = 0; JB < ZB; JB++) TB[JB] = arguments[JB];
        const oB = null !== (IB = TB[0]) && void 0 !== IB ? IB : {};
        var GB, vB;
        eI++ < 3 && eB(`WebGPU canvas ${String(oB.format)} ${String(null!==(GB=oB.colorSpace)&&void 0!==GB?GB:"srgb")} alpha ${String(null!==(vB=oB.alphaMode)&&void 0!==vB?vB:"opaque")}`);
        return nI(BB, this, TB)
      })), EI(AI("GPURenderPassEncoder")), EI(AI("GPURenderBundleEncoder"))
    }
    const VI = 1e4,
      SI = 6e4,
      BZ = 5e3,
      IZ = 3e3,
      ZZ = 100;
    let TZ = null,
      JZ = !1,
      oZ = {
        ...MI.c
      },
      GZ = !1,
      vZ = null,
      kZ = 0,
      cZ = () => {};
    const nZ = new Promise((BB => {
      cZ = BB
    }));

    function hZ() {
      var BB;
      JZ || (JZ = !0, oZ = Object.assign(window.bloxdRenderDebug ??= {
        ...MI.c
      }, {
        faceCull: "0" === (0, oB.r)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (BB = (0, oB.r)("adrenoProbe")) && void 0 !== BB ? BB : ""
      }), eB("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), zI || "undefined" === typeof window || (zI = !0, "undefined" !== typeof WebGL2RenderingContext && wI(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && wI(WebGLRenderingContext.prototype, !1)), KI(), (0, oB.e)("renderProbe", (() => {
        yZ("console")
      })), gZ(), setInterval(WZ, BZ))
    }

    function zZ(BB) {
      var IB, ZB;
      hZ(), TZ = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.backend) && void 0 !== IB ? IB : null;
      const TB = `, renderer param ${null!==(ZB=(0,oB.r)("renderer"))&&void 0!==ZB?ZB:"none"}, faceCull ${"0"===oZ.faceCull?"off (whole parts)":"on"}, adrenoProbe ${oZ.adrenoProbe||"none"}`;
      eB(`${(0,jI.b)(BB)}${null===BB?"":TB}`)
    }

    function FZ() {
      const BB = performance.now(),
        IB = NZ(nZ, VI, SI).then((IB => yZ(`${Math.round((performance.now()-BB)/1e3)} s after playable${IB?"":", no terrain drawn yet"}`)));
      (0, JB.e)(eB, (async () => {
        await IB, await vZ
      }))
    }
    async function NZ(BB, IB, ZB) {
      const JB = (0, TB.b)(ZB).then((() => !1));
      return await (0, TB.b)(IB), Promise.race([BB.then((() => !0)), JB])
    }

    function gZ() {
      requestAnimationFrame((() => {
        kZ++, gZ()
      }))
    }

    function qZ() {
      var BB, IB, ZB;
      if (GZ) return;
      (GZ = !0, eB(`renderer caps ${null!==(BB=oZ.caps)&&void 0!==BB?BB:"(not noted)"}; terrain fetch ${null!==(IB=oZ.fetch)&&void 0!==IB?IB:"(not noted)"}`), oZ.adrenoProbe) && eB(`adrenoProbe ${oZ.adrenoProbe} asked; in force (storage fetch only): ${null!==(ZB=oZ.probe)&&void 0!==ZB?ZB:"(not noted)"}`);
      const TB = jB.context;
      if (TB) {
        for (const BB of function(BB) {
            var IB;
            const ZB = [],
              TB = BB.getExtension("WEBGL_debug_renderer_info"),
              JB = TB ? BB.getParameter(TB.UNMASKED_VENDOR_WEBGL) : "(masked)",
              oB = TB ? BB.getParameter(TB.UNMASKED_RENDERER_WEBGL) : "(masked)";
            ZB.push(`GL ${String(BB.getParameter(BB.VERSION))} | ${String(BB.getParameter(BB.SHADING_LANGUAGE_VERSION))} | ${String(BB.getParameter(BB.VENDOR))} / ${String(BB.getParameter(BB.RENDERER))}`), ZB.push(`GL unmasked ${JB} / ${oB}`);
            const GB = [
              ["MAX_TEXTURE_SIZE", BB.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", BB.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", BB.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", BB.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", BB.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", BB.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", BB.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in BB && GB.push(["MAX_UNIFORM_BLOCK_SIZE", BB.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", BB.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", BB.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", BB.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), ZB.push(`GL limits ${GB.map((IB=>{let[ZB,TB]=IB;return`${ZB} ${String(BB.getParameter(TB))}`})).join(", ")}`);
            const vB = (IB, ZB) => {
              const TB = BB.getShaderPrecisionFormat(IB, BB.HIGH_FLOAT),
                JB = BB.getShaderPrecisionFormat(IB, BB.HIGH_INT);
              return `${ZB} highp float ${TB?`${TB.rangeMin}/${TB.rangeMax}/${TB.precision}`:"?"} int ${JB?`${JB.rangeMin}/${JB.rangeMax}/${JB.precision}`:"?"}`
            };
            ZB.push(`GL precision ${vB(BB.VERTEX_SHADER,"VS")}, ${vB(BB.FRAGMENT_SHADER,"FS")}`);
            const kB = BB.getContextAttributes();
            return ZB.push(`GL context ${JSON.stringify(kB)} drawingBuffer ${BB.drawingBufferWidth}x${BB.drawingBufferHeight}${"drawingBufferFormat"in BB?` format 0x${Number(BB.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in BB?` ${String(BB.drawingBufferColorSpace)}`:""}`), ZB.push(`GL extensions ${(null!==(IB=BB.getSupportedExtensions())&&void 0!==IB?IB:[]).join(" ")}`), ZB
          }(TB)) eB(BB);
        ! function() {
          if (!jB.context) return;
          let BB = 0,
            IB = 0;
          for (const [ZB, TB] of aB) !TB.gl.isContextLost() && TB.gl.isProgram(ZB) && (IB++, iI(TB.gl, ZB, TB), null !== TB.terrain && BB++);
          eB(`programs: ${IB} live of ${aB.length} linked, ${BB} packed terrain; CPU page copies ${Math.round(jB.shadowBytes/1048576)} MiB (${jB.uncopied} over budget)`)
        }()
      }
    }

    function yZ(BB) {
      return vZ ??= async function(BB) {
        qZ(), "webgpu" === TZ ? (UZ(), "1" === oZ.slotCheck && eB("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), oZ.slotCheck = "1", await
          function(BB) {
            if (null !== fI) return Promise.resolve();
            const IB = [];
            return fI = IB, new Promise((ZB => {
              setTimeout((() => {
                fI = null, eB(`WebGPU draw ranges (${BB}): ${IB.length} terrain draws recorded in a second (first ${cI}; bundles replay without new ones)`);
                for (const BB of IB) eB(BB);
                ZB()
              }), 1e3)
            }))
          }(BB), await async function() {
            if (await (0, MI.j)(oZ, "slotCheck", ["1"], IZ, ZZ), "1" === oZ.slotCheck) return void eB(`slot check: no answer in ${IZ} ms (only the storage fetch has one; a later answer logs on its own)`);
            UZ()
          }()) : await GI(BB);
        eB(`check (${BB}) done: bloxdDebug.save() downloads it all`)
      }(BB).catch((IB => {
        eB(`check (${BB}) failed: ${String(IB)}`)
      })).finally((() => {
        vZ = null
      })), vZ
    }

    function UZ() {
      void 0 !== oZ.slotCheck && "1" !== oZ.slotCheck && (eB(oZ.slotCheck), delete oZ.slotCheck)
    }

    function WZ() {
      const BB = BB => kZ ? (BB / kZ).toFixed(1) : "0",
        IB = function() {
          const BB = lI;
          return lI = {
            draws: 0,
            faces: 0
          }, BB
        }(),
        ZB = function() {
          const BB = yI;
          return yI = {
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
        TB = function() {
          const BB = UI;
          return UI = {
            buffer: 0,
            texture: 0
          }, BB
        }();
      UZ(), ("webgpu" === TZ ? IB.draws : ZB.inst.draws + ZB.tex.draws) > 0 && cZ();
      const JB = "webgpu" === TZ ? [`terrain ${BB(IB.draws)} draws ${BB(IB.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((BB => ZB[BB].draws > 0)).map((IB => `${IB} ${BB(ZB[IB].draws)} draws ${BB(ZB[IB].faces)} faces a frame`));
      eB(`${kZ} frames: ${JB.join(", ")||"no draws"}; uploaded ${Math.round(TB.buffer/1024)} KiB to buffers, ${Math.round(TB.texture/1024)} KiB to data textures`), kZ = 0
    }
  },
  4879: (BB, IB, ZB) => {
    function TB(BB) {
      if (null === BB) return "backend: none picked (no renderer build)";
      const IB = BB.adapter ? `${BB.adapter.vendor}/${BB.adapter.architecture}` : "none";
      return `backend ${BB.backend}: reason ${BB.reason}, source ${BB.source}, adapter ${IB}`
    }
    ZB.d(IB, {
      b: () => TB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);