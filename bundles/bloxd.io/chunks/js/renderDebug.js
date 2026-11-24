export const id = 48;
export const ids = [48];
export const modules = {
  4807: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => IS
    });
    var tS = gS(24),
      bS = gS(31),
      XS = gS(1366),
      xS = gS(2953);
    const NS = 3e4,
      qS = 1e3;

    function uS() {
      return "visible" === document.visibilityState && "inGame" === tS.b.get("gameState") && (0, XS.v)()
    }

    function IS(SS, HS) {
      (0, xS.r)() || function(SS, HS, gS) {
        let tS = 0;
        const bS = setInterval((() => {
          HS() && (tS += qS, tS >= SS && (clearInterval(bS), gS()))
        }), qS)
      }(NS, uS, (() => {
        HS().then((() => {
          SS(`saved for the player after ${NS/1e3} s of play`), (0, xS.A)(), bS.k.cj("chat", {
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
  4803: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      installRenderDebug: () => fg,
      renderDebugPlayable: () => ag,
      startRenderDebug: () => kg,
      waitForDraw: () => Kg
    });
    var tS = gS(1934),
      bS = gS(4807),
      XS = gS(2953);
    const xS = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function NS(SS) {
      return 7 & SS
    }

    function qS(SS) {
      return SS >>> 11 & 1
    }

    function uS(SS) {
      return [1 + (SS >>> 18 & 63), 1 + (SS >>> 24 & 63)]
    }

    function IS(SS, HS) {
      const [gS, , tS] = SS, bS = NS(tS), XS = function(SS, HS, gS) {
        return HS + (1 === (22 >>> SS & 1) ? 4 - gS : gS) & 3
      }(bS, qS(tS), HS), xS = bS >>> 1, [IS, fS] = uS(gS), kS = 1 === XS || 2 === XS ? IS : 0, aS = XS >= 2 ? fS : 0, KS = [63 & gS, gS >>> 6 & 63, gS >>> 12 & 63];
      return KS[2 === xS ? 0 : 2] += kS, KS[1 === xS ? 0 : 1] += aS, KS
    }

    function fS(SS) {
      const HS = Math.max(...uS(SS[0]));
      return 1 === HS ? "1" : HS <= 4 ? "2-4" : HS <= 16 ? "5-16" : "17-64"
    }
    const kS = 16;

    function aS(SS) {
      let HS = 2166136261;
      for (let gS = 0; gS < SS.length; gS++) HS = Math.imul(HS ^ SS[gS], 16777619);
      return HS >>> 0
    }

    function KS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const tS = Math.max(0, HS - gS),
        bS = Math.min(SS.length, HS + gS),
        XS = [];
      for (let xS = tS; xS < bS; xS++) {
        const gS = SS[xS].toString(16).padStart(2, "0");
        XS.push(xS === HS ? `[${gS}]` : gS)
      }
      return XS.join(" ")
    }
    const jS = {
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
      GS = "_vs2fs_location0";
    const CS = 0,
      nS = 4,
      PS = 6,
      QS = [0, 1, 2, 0, 2, 3],
      DS = 2048,
      wS = 4,
      hS = 256,
      ZS = 64,
      JS = 268435456,
      OS = 65536,
      dS = /^#version [^\n]*\/\/ program (\S+)$/m;

    function cS(SS) {
      return null === SS.name ? `#${SS.id}` : `#${SS.id} ${SS.name}`
    }
    const vS = [],
      ES = new WeakMap,
      LS = new WeakMap,
      YS = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let AS = 1;
    const yS = new WeakMap;

    function VS(SS) {
      if (null === SS) return 0;
      let HS = yS.get(SS);
      return void 0 === HS && (HS = AS++, yS.set(SS, HS)), HS
    }
    class iS {
      constructor(SS, HS) {
        this.print = SS, this.now = HS, this.shown = 0, this.Ku = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.ia = [], this.dropped = 0
      }
      line(SS) {
        const HS = this.now();
        if (HS - this.second >= 1e3 && (this.second = HS, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Ku++, void this.store(SS);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${SS} (the last line here: the rest go to bloxdDebug.save())` : SS)
      }
      keep(SS) {
        this.sections++, this.store(SS)
      }
      store(SS) {
        this.ia.push(`${new Date(Date.now()).toISOString()} ${SS}`), this.ia.length > 2e4 && (this.ia.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.Ku} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.ia].join("\n")
      }
    }
    let WS = null;

    function zS() {
      if (null === WS) {
        const SS = new iS((SS => {
          (0, XS.i)("render", SS)
        }), (() => performance.now()));
        (0, XS.h)("render", (() => SS.dump())), WS = SS
      }
      return WS
    }

    function US(SS) {
      zS().line(SS)
    }

    function pS(SS) {
      zS().keep(SS)
    }

    function sS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return SS.length <= HS ? SS : `${SS.slice(0,HS)}... (${SS.length-HS} more characters)`
    }

    function BS(SS, HS, gS, tS, bS, XS) {
      const xS = YS.pendingCheck;
      if (null === xS) return;
      const NS = "undefined" !== typeof WebGL2RenderingContext && SS instanceof WebGL2RenderingContext,
        qS = {
          gl: SS,
          program: gS,
          call: tS,
          HG: bS,
          instances: XS,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (xS.draws.push(qS), NS) try {
        const tS = function(SS) {
          const HS = [],
            gS = new Map,
            tS = Math.min(16, SS.getParameter(jS.MAX_VERTEX_ATTRIBS));
          for (let bS = 0; bS < tS; bS++) {
            if (!SS.getVertexAttrib(bS, jS.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const tS = SS.getVertexAttrib(bS, jS.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              XS = SS.getVertexAttribOffset(bS, jS.VERTEX_ATTRIB_ARRAY_POINTER),
              xS = SS.getVertexAttrib(bS, jS.VERTEX_ATTRIB_ARRAY_STRIDE),
              NS = SS.getVertexAttrib(bS, jS.VERTEX_ATTRIB_ARRAY_SIZE),
              qS = SS.getVertexAttrib(bS, jS.VERTEX_ATTRIB_ARRAY_TYPE),
              uS = "VERTEX_ATTRIB_ARRAY_INTEGER" in SS && SS.getVertexAttrib(bS, jS.VERTEX_ATTRIB_ARRAY_INTEGER),
              IS = "VERTEX_ATTRIB_ARRAY_DIVISOR" in SS ? SS.getVertexAttrib(bS, jS.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            gS.set(bS, {
              buffer: tS,
              offset: XS,
              stride: xS
            }), HS.push(`@${bS} buf#${VS(tS)} +${XS} stride ${xS} ${NS}x0x${qS.toString(16)}${uS?" int":""} div ${IS}`)
          }
          return {
            lines: HS,
            byLocation: gS
          }
        }(SS);
        if (qS.attributes = tS.lines, "inst" === gS.terrain) {
          const {
            group: bS,
            chunk: NS
          } = function(SS, HS, gS) {
            const tS = HS.get(PS),
              bS = SS.getVertexAttrib(PS, jS.CURRENT_VERTEX_ATTRIB),
              XS = tS ? `+${tS.offset}` : bS ? Array.from(bS).slice(0, 3).join(",") : "?";
            let xS = gS.groups.get(XS);
            return void 0 === xS && (xS = gS.groups.size, gS.groups.set(XS, xS)), {
              group: xS,
              chunk: XS
            }
          }(SS, tS.byLocation, xS);
          qS.group = bS, qS.chunk = NS;
          for (const SS of [CS, nS]) {
            var uS;
            const HS = null === (uS = tS.byLocation.get(SS)) || void 0 === uS ? void 0 : uS.buffer;
            HS && qS.pages.push({
              kind: "buf",
              buffer: HS
            })
          }! function(SS, HS, gS, tS, bS, XS, xS) {
            const NS = tS.get(CS),
              qS = xS.parts.get(XS);
            if (void 0 === qS && xS.parts.size >= wS) return;
            const uS = Math.min(bS, ZS, hS - (null !== qS && void 0 !== qS ? qS : 0));
            if (null === NS || void 0 === NS || !NS.buffer || uS <= 0) return;
            const IS = MS(SS, HS, gS);
            if (!IS) return;
            const fS = NS.stride || 12,
              kS = lS(SS, NS.buffer, NS.offset, (uS - 1) * fS + 12),
              aS = new DataView(kS.buffer),
              KS = function(SS, HS) {
                const gS = function(SS) {
                    const HS = rS.get(SS);
                    if (void 0 !== HS && (null === HS || SS.isProgram(HS))) return HS;
                    YS.inProbe = !0;
                    let gS = null;
                    try {
                      gS = FS(SS, mS, eS, "fed", "the record feed")
                    } finally {
                      YS.inProbe = !1
                    }
                    return rS.set(SS, gS), gS
                  }(SS),
                  tS = gS ? oS(SS, gS, HS, (() => {
                    SS.drawArraysInstanced(jS.POINTS, 0, 1, HS)
                  }), "decode probe input (the record feed)") : null;
                return tS ? new Uint32Array(tS.buffer) : null
              }(SS, uS);
            KS || xS.fed.failed++;
            const GS = oS(SS, IS, 4 * uS, (() => {
              SS.drawArraysInstanced(jS.POINTS, 0, 4, uS)
            }));
            if (!GS) return;
            xS.parts.set(XS, (null !== qS && void 0 !== qS ? qS : 0) + uS);
            for (let jS = 0; jS < uS; jS++) {
              const SS = jS * fS,
                HS = [aS.getUint32(SS, !0), aS.getUint32(SS + 4, !0), aS.getUint32(SS + 8, !0)],
                gS = KS ? [KS[3 * jS], KS[3 * jS + 1], KS[3 * jS + 2]] : HS;
              KS && (xS.fed.records++, gS.some(((SS, gS) => SS !== HS[gS])) && (xS.fed.differing++, xS.fed.first.length < 8 && xS.fed.first.push(`part ${XS} instance ${jS}: fed ${gS.map(bH).join(" ")} buffer ${HS.map(bH).join(" ")}`)));
              for (let tS = 0; tS < 4; tS++) {
                const SS = 3 * (4 * jS + tS);
                xS.vertices.push({
                  record: gS,
                  slot: tS,
                  group: XS,
                  gpu: [GS[SS], GS[SS + 1], GS[SS + 2]]
                })
              }
            }
          }(SS, HS, gS, tS.byLocation, XS, bS, xS)
        } else {
          const tS = SH(SS, HS, 16),
            XS = SH(SS, HS, 8);
          for (const SS of [tS, XS]) SS && qS.pages.push({
            kind: "tex",
            texture: SS
          });
          tS && function(SS, HS, gS, tS, bS, XS) {
            if (XS.parts.size >= wS) return;
            const xS = MS(SS, HS, gS);
            if (!xS) return;
            let NS = 6 * hS;
            const qS = [];
            for (const [aS, KS] of bS) {
              const SS = Math.min(KS, NS, Math.max(6, 6 * Math.floor(hS / bS.length)));
              SS > 0 && (qS.push([aS, SS]), NS -= SS)
            }
            const uS = qS.reduce(((SS, HS) => {
                let [, gS] = HS;
                return SS + gS
              }), 0),
              IS = oS(SS, xS, uS, (() => {
                for (const [HS, gS] of qS) SS.drawArrays(jS.POINTS, HS, gS)
              }));
            if (!IS) return;
            let fS = 0;
            for (const [aS, KS] of qS) {
              const HS = Math.floor(aS / 6),
                gS = Math.floor((aS + KS - 1) / 6) - HS + 1,
                bS = HH(SS, tS, DS, HS, gS);
              for (let SS = aS; SS < aS + KS; SS++, fS++) {
                var kS;
                const gS = 4 * (Math.floor(SS / 6) - HS),
                  tS = [bS[gS], bS[gS + 1], bS[gS + 2]];
                XS.parts.set(bS[gS + 3], (null !== (kS = XS.parts.get(bS[gS + 3])) && void 0 !== kS ? kS : 0) + (SS % 6 === 0 ? 1 : 0)), XS.vertices.push({
                  record: tS,
                  slot: QS[SS % 6],
                  group: bS[gS + 3],
                  gpu: [IS[3 * fS], IS[3 * fS + 1], IS[3 * fS + 2]]
                })
              }
            }
          }(SS, HS, gS, tS, bS, xS)
        }
      } catch (IS) {
        US(`decode probe failed on program ${cS(gS)}: ${String(IS)}`)
      }
    }

    function MS(SS, HS, gS) {
      if (void 0 !== gS.probe) return gS.probe && RS(SS, HS, gS.probe), gS.probe;
      gS.probe = null, YS.inProbe = !0;
      try {
        gS.probe = function(SS, HS) {
          return FS(SS, (gS = HS.vertex, gS.replace(`\nvec3 ${GS} = vec3(0);\n`, `\nout vec3 ${GS};\n`)), HS.fragment, GS, `program ${cS(HS)}'s twin`);
          var gS
        }(SS, gS)
      } finally {
        YS.inProbe = !1
      }
      return gS.probe && RS(SS, HS, gS.probe), gS.probe
    }

    function FS(SS, HS, gS, tS, bS) {
      const XS = [SS.createShader(jS.VERTEX_SHADER), SS.createShader(jS.FRAGMENT_SHADER)],
        xS = SS.createProgram();
      if (!xS || !XS[0] || !XS[1]) return null;
      SS.shaderSource(XS[0], HS), SS.shaderSource(XS[1], gS);
      for (const qS of XS) SS.compileShader(qS), SS.attachShader(xS, qS);
      SS.transformFeedbackVaryings(xS, [tS], jS.INTERLEAVED_ATTRIBS), SS.linkProgram(xS);
      for (const qS of XS) SS.deleteShader(qS);
      var NS;
      return SS.getProgramParameter(xS, jS.LINK_STATUS) ? xS : (US(`decode probe: ${bS} failed to link: ${sS(null!==(NS=SS.getProgramInfoLog(xS))&&void 0!==NS?NS:"",300)}`), SS.deleteProgram(xS), null)
    }

    function RS(SS, HS, gS) {
      const tS = SS.getProgramParameter(HS, jS.ACTIVE_UNIFORM_BLOCKS);
      for (let NS = 0; NS < tS; NS++) {
        const tS = SS.getActiveUniformBlockName(HS, NS),
          bS = null === tS ? jS.INVALID_INDEX : SS.getUniformBlockIndex(gS, tS);
        bS !== jS.INVALID_INDEX && SS.uniformBlockBinding(gS, bS, SS.getActiveUniformBlockParameter(HS, NS, jS.UNIFORM_BLOCK_BINDING))
      }
      const bS = SS.getParameter(jS.CURRENT_PROGRAM);
      SS.useProgram(gS);
      const XS = SS.getProgramParameter(HS, jS.ACTIVE_UNIFORMS),
        xS = SS.getActiveUniforms(HS, [...Array(XS).keys()], jS.UNIFORM_BLOCK_INDEX);
      for (let NS = 0; NS < XS; NS++) {
        const tS = SS.getActiveUniform(HS, NS);
        if (!tS || -1 !== xS[NS]) continue;
        const bS = tS.name.replace(/\[0\]$/, "");
        for (let XS = 0; XS < tS.size; XS++) {
          const xS = tS.size > 1 ? `${bS}[${XS}]` : tS.name,
            NS = SS.getUniformLocation(HS, xS),
            qS = SS.getUniformLocation(gS, xS);
          NS && qS && TS(SS, qS, tS.type, SS.getUniform(HS, NS))
        }
      }
      SS.useProgram(bS)
    }

    function TS(SS, HS, gS, tS) {
      const bS = ArrayBuffer.isView(tS) ? Array.from(tS) : [Number(tS)];
      switch (gS) {
        case jS.FLOAT:
          return void SS.uniform1f(HS, bS[0]);
        case jS.FLOAT_VEC2:
          return void SS.uniform2fv(HS, bS);
        case jS.FLOAT_VEC3:
          return void SS.uniform3fv(HS, bS);
        case jS.FLOAT_VEC4:
          return void SS.uniform4fv(HS, bS);
        case jS.FLOAT_MAT3:
          return void SS.uniformMatrix3fv(HS, !1, bS);
        case jS.FLOAT_MAT4:
          return void SS.uniformMatrix4fv(HS, !1, bS);
        case jS.UNSIGNED_INT:
          return void SS.uniform1ui(HS, bS[0]);
        case jS.UNSIGNED_INT_VEC2:
          return void SS.uniform2uiv(HS, bS);
        case jS.UNSIGNED_INT_VEC3:
          return void SS.uniform3uiv(HS, bS);
        case jS.UNSIGNED_INT_VEC4:
          return void SS.uniform4uiv(HS, bS);
        case jS.INT_VEC2:
          return void SS.uniform2iv(HS, bS);
        case jS.INT_VEC3:
          return void SS.uniform3iv(HS, bS);
        case jS.INT_VEC4:
          return void SS.uniform4iv(HS, bS);
        default:
          SS.uniform1i(HS, bS[0])
      }
    }

    function oS(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const XS = SS.getParameter(jS.CURRENT_PROGRAM),
        xS = SS.getParameter(jS.TRANSFORM_FEEDBACK_BINDING),
        NS = SS.getParameter(jS.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        qS = SS.getParameter(jS.COPY_READ_BUFFER_BINDING),
        uS = SS.isEnabled(jS.RASTERIZER_DISCARD),
        IS = SS.createTransformFeedback(),
        fS = SS.createBuffer();
      YS.inProbe = !0;
      try {
        const XS = SS.getError();
        XS !== jS.NO_ERROR && US(`GL error 0x${XS.toString(16)} pending before the decode probe (the renderer's)`), SS.useProgram(HS), SS.bindTransformFeedback(jS.TRANSFORM_FEEDBACK, IS), SS.bindBuffer(jS.TRANSFORM_FEEDBACK_BUFFER, fS), SS.bufferData(jS.TRANSFORM_FEEDBACK_BUFFER, 12 * gS, jS.STREAM_READ), SS.bindBufferBase(jS.TRANSFORM_FEEDBACK_BUFFER, 0, fS), SS.enable(jS.RASTERIZER_DISCARD), SS.beginTransformFeedback(jS.POINTS), tS(), SS.endTransformFeedback(), SS.bindBufferBase(jS.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const xS = SS.getError();
        if (xS !== jS.NO_ERROR) return US(`${bS}: GL error 0x${xS.toString(16)} on the feedback draw`), null;
        const NS = new Float32Array(3 * gS);
        return SS.bindBuffer(jS.COPY_READ_BUFFER, fS), SS.getBufferSubData(jS.COPY_READ_BUFFER, 0, NS), NS
      } finally {
        uS || SS.disable(jS.RASTERIZER_DISCARD), SS.bindTransformFeedback(jS.TRANSFORM_FEEDBACK, xS), SS.bindBuffer(jS.TRANSFORM_FEEDBACK_BUFFER, NS), SS.bindBuffer(jS.COPY_READ_BUFFER, qS), SS.deleteTransformFeedback(IS), SS.deleteBuffer(fS), SS.useProgram(XS), YS.inProbe = !1
      }
    }

    function lS(SS, HS, gS, tS) {
      const bS = SS.getParameter(jS.COPY_READ_BUFFER_BINDING),
        XS = new Uint8Array(tS);
      return SS.bindBuffer(jS.COPY_READ_BUFFER, HS), SS.getBufferSubData(jS.COPY_READ_BUFFER, gS, XS), SS.bindBuffer(jS.COPY_READ_BUFFER, bS), XS
    }
    const mS = `#version 300 es\nlayout(location = ${CS}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      eS = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      rS = new WeakMap;

    function SH(SS, HS, gS) {
      const tS = SS.getProgramParameter(HS, jS.ACTIVE_UNIFORMS),
        bS = SS.getParameter(jS.ACTIVE_TEXTURE);
      try {
        for (let bS = 0; bS < tS; bS++) {
          const tS = SS.getActiveUniform(HS, bS);
          if ((null === tS || void 0 === tS ? void 0 : tS.type) !== jS.UNSIGNED_INT_SAMPLER_2D) continue;
          const XS = SS.getUniformLocation(HS, tS.name),
            xS = XS ? SS.getUniform(HS, XS) : -1;
          if (xS < 0) continue;
          SS.activeTexture(jS.TEXTURE0 + xS);
          const NS = SS.getParameter(jS.TEXTURE_BINDING_2D);
          if (NS && LS.get(NS) === gS) return NS
        }
        return null
      } finally {
        SS.activeTexture(bS)
      }
    }

    function HH(SS, HS, gS, tS, bS) {
      const XS = new Uint32Array(4 * bS),
        xS = SS.getParameter(jS.READ_FRAMEBUFFER_BINDING),
        NS = SS.createFramebuffer();
      SS.bindFramebuffer(jS.READ_FRAMEBUFFER, NS), SS.framebufferTexture2D(jS.READ_FRAMEBUFFER, jS.COLOR_ATTACHMENT0, jS.TEXTURE_2D, HS, 0);
      try {
        let HS = 0;
        for (; HS < bS;) {
          const xS = tS + HS,
            NS = xS % gS,
            qS = Math.min(bS - HS, gS - NS);
          SS.readPixels(NS, Math.floor(xS / gS), qS, 1, jS.RGBA_INTEGER, jS.UNSIGNED_INT, XS.subarray(4 * HS, 4 * (HS + qS))), HS += qS
        }
      } finally {
        SS.bindFramebuffer(jS.READ_FRAMEBUFFER, xS), SS.deleteFramebuffer(NS)
      }
      return XS
    }

    function gH(SS, HS, gS) {
      let tS = 0,
        bS = 0;
      for (let qS = 0; qS < HS.bytes.length; qS += OS) {
        tS++;
        const SS = Math.min(qS + OS, HS.bytes.length);
        aS(HS.bytes.subarray(qS, SS)) !== aS(gS.subarray(qS, SS)) && bS++
      }
      const XS = `${SS} ${HS.bytes.length} B cpu ${aS(HS.bytes).toString(16)} gpu ${aS(gS).toString(16)}, ${bS}/${tS} blocks differ${HS.missed?`, ${HS.missed} GPU-side writes uncopied`:""}`;
      if (0 === bS) return XS;
      const {
        count: xS,
        offsets: NS
      } = function(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const tS = Math.min(SS.length, HS.length);
        let bS = Math.abs(SS.length - HS.length);
        const XS = [];
        for (let xS = 0; xS < tS; xS++) SS[xS] !== HS[xS] && (bS++, XS.length < gS && XS.push(xS));
        return {
          count: bS,
          offsets: XS
        }
      }(HS.bytes, gS);
      return pS([`${XS}: ${xS} bytes differ`, ...NS.map((SS => `  +${SS}: cpu ${KS(HS.bytes,SS)} | gpu ${KS(gS,SS)}`))].join("\n")), `${XS}: ${xS} bytes differ, first at ${NS.join(", ")} (context in the saved file)`
    }

    function tH(SS) {
      if (0 === SS.vertices.length) return void US(`decode probe (${SS.reason}): no terrain draw probed (${SS.draws.length} seen)`);
      const HS = function(SS) {
          const HS = new Map;
          for (const tS of SS) {
            const SS = HS.get(tS.group);
            SS ? SS.push(tS) : HS.set(tS.group, [tS])
          }
          const gS = {
            vertices: SS.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [tS, bS] of HS) {
            const SS = new Map,
              HS = bS.map((HS => {
                const gS = IS(HS.record, HS.slot),
                  tS = [HS.gpu[0] - gS[0], HS.gpu[1] - gS[1], HS.gpu[2] - gS[2]],
                  bS = tS.map((SS => Math.round(64 * SS))).join(","),
                  XS = SS.get(bS);
                return XS ? XS.count++ : SS.set(bS, {
                  count: 1,
                  offset: tS
                }), gS
              }));
            let XS = [0, 0, 0],
              xS = 0;
            for (const gS of SS.values()) gS.count > xS && (xS = gS.count, XS = gS.offset);
            gS.translations.set(tS, XS), bS.forEach(((SS, tS) => {
              var bS;
              const xS = [HS[tS][0] + XS[0], HS[tS][1] + XS[1], HS[tS][2] + XS[2]];
              if (xS.every(((HS, gS) => {
                  return tS = SS.gpu[gS], bS = HS, Math.abs(tS - bS) <= Math.max(.001, 1e-6 * Math.abs(bS));
                  var tS, bS
                }))) return;
              gS.mismatches++, gS.byDirection[NS(SS.record[2])]++, gS.byDiagonal[qS(SS.record[2])]++;
              const uS = fS(SS.record);
              gS.byBand[uS] = (null !== (bS = gS.byBand[uS]) && void 0 !== bS ? bS : 0) + 1, gS.first.length < kS && gS.first.push({
                ...SS,
                expected: xS
              })
            }))
          }
          return gS
        }(SS.vertices),
        gS = HS.byDirection.map(((SS, HS) => SS ? `${xS[HS]} ${SS}` : "")).filter(Boolean).join(" "),
        tS = Object.entries(HS.byBand).map((SS => {
          let [HS, gS] = SS;
          return `${HS}: ${gS}`
        })).join(" ");
      if (US(`decode probe (${SS.reason}): ${HS.mismatches}/${HS.vertices} vertices differ from the CPU decode over ${SS.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (HS.mismatches ? ` by direction [${gS}] diagonal [0: ${HS.byDiagonal[0]} 1: ${HS.byDiagonal[1]}] extent [${tS}]` : "")), SS.fed.records > 0 || SS.fed.failed > 0) {
        US(`decode probe input: ${SS.fed.differing}/${SS.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (SS.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (SS.fed.failed ? `; the feed failed on ${SS.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const HS of SS.fed.first) US(`  ${HS}`)
      }
      for (const bS of HS.first) {
        const [SS, HS, gS] = bS.record;
        US(`  mismatch part ${bS.group} r0 ${SS.toString(16)} r1 ${HS.toString(16)} r2 ${gS.toString(16)} slot ${bS.slot} (${xS[NS(gS)]}): expected ${bS.expected.map(XH).join(",")} gpu ${bS.gpu.map(XH).join(",")}`)
      }
      pS(`decode probe translations: ${[...HS.translations].map((SS=>{let[HS,gS]=SS;return`${HS}: ${gS.map(XH).join(",")}`})).join("; ")}`)
    }

    function bH(SS) {
      return SS.toString(16)
    }

    function XH(SS) {
      return Number.isInteger(SS) ? String(SS) : SS.toFixed(3)
    }

    function xH(SS) {
      return null !== YS.pendingCheck ? Promise.resolve() : new Promise((HS => {
        let gS = !1;
        const tS = {
          reason: SS,
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
        YS.pendingCheck = tS;
        const bS = () => {
            YS.pendingCheck = null;
            try {
              ! function(SS) {
                US(`draw ranges (${SS.reason}): ${SS.terrainDraws} terrain draws in the frame, the first ${SS.draws.length} here`);
                for (const HS of SS.draws) {
                  const SS = HS.HG.slice(0, 8).map((SS => {
                      let [HS, gS] = SS;
                      return `${HS}+${gS}`
                    })).join(" "),
                    gS = HS.HG.length > 8 ? ` (+${HS.HG.length-8} ranges)` : "";
                  US(`  ${cS(HS.program)} ${HS.program.terrain} ${HS.call} ${SS}${gS} x${HS.instances}${HS.group>=0?` part ${HS.group} chunk ${HS.chunk}`:""} | ${HS.attributes.join(" | ")}`)
                }
              }(tS), tH(tS);
              tS.draws.some((SS => "undefined" !== typeof WebGL2RenderingContext && SS.gl instanceof WebGL2RenderingContext)) || 0 === tS.draws.length ? function(SS) {
                const HS = [],
                  gS = new Map;
                for (const tS of SS)
                  if ("undefined" !== typeof WebGL2RenderingContext && tS.gl instanceof WebGL2RenderingContext)
                    for (const SS of tS.pages) gS.set("buf" === SS.kind ? SS.buffer : SS.texture, {
                      page: SS,
                      gl: tS.gl
                    });
                for (const [tS, {
                    page: bS,
                    gl: XS
                  }] of gS) {
                  const SS = ES.get(tS);
                  if (!SS) {
                    HS.push(`${bS.kind}#${VS(tS)}: no CPU copy (${YS.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === bS.kind) {
                    HS.push(gH(`buf#${SS.id}`, SS, lS(XS, bS.buffer, 0, SS.bytes.length)));
                    continue
                  }
                  const gS = HH(XS, bS.texture, SS.width, 0, SS.width * SS.height),
                    xS = 16 === SS.texelBytes ? new Uint8Array(gS.buffer) : new Uint8Array(new Uint16Array(gS).buffer);
                  HS.push(gH(`tex#${SS.id} (${16===SS.texelBytes?"records":"light"})`, SS, xS))
                }
                for (const tS of HS) US(`page readback ${tS}`)
              }(tS.draws) : US("page readback: none on WebGL1 (no buffer readback)")
            } catch (SS) {
              US(`check failed: ${String(SS)}`)
            }
            HS()
          },
          XS = () => {
            if (tS.draws.length > 0 && !gS) return gS = !0, void setTimeout(bS, 0);
            gS || requestAnimationFrame(XS)
          };
        requestAnimationFrame(XS), setTimeout((() => {
          gS || (gS = !0, bS())
        }), 5e3)
      }))
    }
    var NH = gS(4812);
    const qH = 20,
      uH = 24,
      IH = Reflect.apply;

    function fH(SS, HS, gS) {
      if (!SS) return;
      const tS = SS[HS];
      if ("function" === typeof tS) {
        const bS = gS(tS);
        SS[HS] = bS, (0, NH.z)(bS, tS)
      }
    }
    let kH = !1;
    const aH = new WeakMap,
      KH = new WeakMap,
      jH = new WeakMap,
      GH = {
        gl: 0,
        lost: 0
      };
    let CH = {
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
      nH = {
        buffer: 0,
        texture: 0
      },
      PH = 0;

    function QH(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (SS instanceof ArrayBuffer) return new Uint8Array(SS, HS, gS || void 0);
      if (!ArrayBuffer.isView(SS)) return null;
      const tS = "BYTES_PER_ELEMENT" in SS ? SS.BYTES_PER_ELEMENT : 1,
        bS = SS.byteOffset + HS * tS,
        XS = gS ? gS * tS : SS.byteLength - HS * tS;
      return new Uint8Array(SS.buffer, bS, Math.max(0, XS))
    }

    function DH(SS, HS) {
      const gS = function(SS) {
        switch (SS) {
          case jS.ARRAY_BUFFER:
            return jS.ARRAY_BUFFER_BINDING;
          case jS.ELEMENT_ARRAY_BUFFER:
            return jS.ELEMENT_ARRAY_BUFFER_BINDING;
          case jS.COPY_READ_BUFFER:
            return jS.COPY_READ_BUFFER_BINDING;
          case jS.COPY_WRITE_BUFFER:
            return jS.COPY_WRITE_BUFFER_BINDING;
          case jS.UNIFORM_BUFFER:
            return jS.UNIFORM_BUFFER_BINDING;
          case jS.PIXEL_UNPACK_BUFFER:
            return jS.PIXEL_UNPACK_BUFFER_BINDING;
          case jS.TRANSFORM_FEEDBACK_BUFFER:
            return jS.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(HS);
      return gS ? SS.getParameter(gS) : null
    }

    function wH(SS) {
      const HS = ES.get(SS);
      HS && (YS.shadowBytes -= HS.bytes.length, ES.delete(SS))
    }

    function hH(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      wH(SS), YS.shadowBytes + HS > JS ? YS.uncopied++ : (YS.shadowBytes += HS, ES.set(SS, {
        id: VS(SS),
        bytes: new Uint8Array(HS),
        width: gS,
        height: tS,
        texelBytes: bS,
        missed: 0
      }))
    }

    function ZH(SS, HS) {
      for (const gS of ["deleteBuffer", "deleteTexture"]) fH(SS, gS, (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        return gS[0] && wH(gS[0]), IH(SS, this, gS)
      }));
      fH(SS, "shaderSource", (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        return gS[0] && "string" === typeof gS[1] && aH.set(gS[0], gS[1]), IH(SS, this, gS)
      })), fH(SS, "attachShader", (SS => function() {
        for (var HS, gS = arguments.length, tS = new Array(gS), bS = 0; bS < gS; bS++) tS[bS] = arguments[bS];
        const XS = tS[0],
          xS = null !== (HS = KH.get(XS)) && void 0 !== HS ? HS : [];
        return xS.push(tS[1]), KH.set(XS, xS), IH(SS, this, tS)
      })), fH(SS, "linkProgram", (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        const bS = IH(SS, this, gS);
        return YS.inProbe || function(SS, HS) {
          var gS, tS, bS;
          "undefined" !== typeof HTMLCanvasElement && SS.canvas instanceof HTMLCanvasElement && function(SS) {
            if (EH.has(SS)) return;
            EH.add(SS);
            for (const HS of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) SS.addEventListener(HS, (SS => {
              GH.lost < qH && (GH.lost++, US(`${HS}${"statusMessage"in SS?`: ${String(SS.statusMessage)}`:""}`))
            }))
          }(SS.canvas);
          YS.context ??= SS;
          const XS = null !== (gS = KH.get(HS)) && void 0 !== gS ? gS : [];
          let xS = "",
            NS = "";
          for (const IS of XS) {
            var qS;
            const SS = null !== (qS = aH.get(IS)) && void 0 !== qS ? qS : "";
            /\bgl_Position\b/.test(SS) ? xS = SS : NS = SS
          }
          const uS = {
            id: VS(HS),
            name: null !== (tS = null === (bS = dS.exec(xS)) || void 0 === bS ? void 0 : bS[1]) && void 0 !== tS ? tS : null,
            gl: SS,
            vertex: xS,
            fragment: NS,
            terrain: OH(xS),
            checked: !1,
            firstDraw: !1
          };
          if (jH.set(HS, uS), vS.push([HS, uS]), null !== uS.terrain) {
            const HS = XS.map((HS => {
              var gS;
              return null !== (gS = SS.getShaderInfoLog(HS)) && void 0 !== gS ? gS : ""
            })).filter((SS => "" !== SS.trim()));
            HS.length > 0 && pS(`program ${cS(uS)} (${uS.terrain}) shader logs:\n${sS(HS.join("\n"))}`)
          }
        }(this, gS[0]), bS
      })), fH(SS, "bufferData", (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        const bS = IH(SS, this, gS);
        if (!YS.inProbe) {
          const SS = DH(this, gS[0]);
          if (SS) {
            var XS, xS, NS;
            const HS = "number" === typeof gS[1] ? null : QH(gS[1], null !== (XS = gS[3]) && void 0 !== XS ? XS : 0, null !== (xS = gS[4]) && void 0 !== xS ? xS : 0);
            var qS;
            if (hH(SS, "number" === typeof gS[1] ? gS[1] : null !== (NS = null === HS || void 0 === HS ? void 0 : HS.length) && void 0 !== NS ? NS : 0), HS) null === (qS = ES.get(SS)) || void 0 === qS || qS.bytes.set(HS)
          }
        }
        return bS
      })), fH(SS, "bufferSubData", (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        const bS = IH(SS, this, gS);
        if (!YS.inProbe) {
          var XS, xS;
          const SS = DH(this, gS[0]),
            HS = SS ? ES.get(SS) : void 0,
            tS = QH(gS[2], null !== (XS = gS[3]) && void 0 !== XS ? XS : 0, null !== (xS = gS[4]) && void 0 !== xS ? xS : 0);
          if (HS && tS) {
            const SS = gS[1];
            HS.bytes.set(tS.subarray(0, Math.max(0, HS.bytes.length - SS)), SS), JH("buffer", HS, SS, tS.length)
          }
        }
        return bS
      })), HS && (fH(SS, "copyBufferSubData", (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        const bS = IH(SS, this, gS);
        if (!YS.inProbe) {
          const [SS, HS, tS, bS, XS] = gS, xS = DH(this, SS), NS = DH(this, HS), qS = xS ? ES.get(xS) : void 0, uS = NS ? ES.get(NS) : void 0;
          uS && (qS ? uS.bytes.set(qS.bytes.slice(tS, tS + XS), bS) : uS.missed++)
        }
        return bS
      })), fH(SS, "texStorage2D", (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        const bS = IH(SS, this, gS),
          [, , XS, xS, NS] = gS;
        if (!YS.inProbe && (XS === jS.RGBA32UI || XS === jS.RGBA16UI)) {
          const SS = this.getParameter(jS.TEXTURE_BINDING_2D),
            HS = XS === jS.RGBA32UI ? 16 : 8;
          SS && (LS.set(SS, HS), hH(SS, xS * NS * HS, xS, NS, HS))
        }
        return bS
      })), fH(SS, "texSubImage2D", (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        const bS = IH(SS, this, gS);
        return !YS.inProbe && gS.length >= 9 && gS[0] === jS.TEXTURE_2D && 0 === gS[1] && function(SS, HS) {
          var gS;
          const tS = SS.getParameter(jS.TEXTURE_BINDING_2D),
            bS = tS ? ES.get(tS) : void 0;
          if (!bS) return;
          const [, , XS, xS, NS, qS] = HS;
          let uS = QH(HS[8], null !== (gS = HS[9]) && void 0 !== gS ? gS : 0);
          if (null === uS && "number" === typeof HS[8]) {
            const gS = DH(SS, jS.PIXEL_UNPACK_BUFFER),
              tS = gS ? ES.get(gS) : void 0;
            uS = tS ? tS.bytes.subarray(HS[8]) : null
          }
          if (null === uS) return void bS.missed++;
          const IS = SS.getParameter(jS.UNPACK_ROW_LENGTH) || NS,
            fS = SS.getParameter(jS.UNPACK_SKIP_ROWS),
            kS = SS.getParameter(jS.UNPACK_SKIP_PIXELS),
            aS = bS.texelBytes;
          for (let KS = 0; KS < qS; KS++) {
            const SS = ((fS + KS) * IS + kS) * aS,
              HS = ((xS + KS) * bS.width + XS) * aS;
            bS.bytes.set(uS.subarray(SS, SS + NS * aS), HS)
          }
          JH("texture", bS, (xS * bS.width + XS) * aS, NS * qS * aS)
        }(this, gS), bS
      })), fH(SS, "copyTexSubImage2D", (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        const bS = gS[0] === jS.TEXTURE_2D ? this.getParameter(jS.TEXTURE_BINDING_2D) : null,
          XS = bS ? ES.get(bS) : void 0;
        return XS && XS.missed++, IH(SS, this, gS)
      })));
      for (const gS of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) fH(SS, gS, (SS => function() {
        for (var HS = arguments.length, tS = new Array(HS), bS = 0; bS < HS; bS++) tS[bS] = arguments[bS];
        const XS = IH(SS, this, tS);
        return YS.inProbe || cH(this, gS, tS), XS
      }));
      fH(SS, "getExtension", (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        const bS = IH(SS, this, gS);
        return bS && "object" === typeof bS && function(SS, HS, gS) {
          const tS = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(HS in tS) || gS.bloxdRenderDebug) return;
          gS.bloxdRenderDebug = !0;
          for (const bS of tS[HS]) {
            const HS = gS[bS];
            "function" === typeof HS && (gS[bS] = function() {
              for (var tS = arguments.length, XS = new Array(tS), xS = 0; xS < tS; xS++) XS[xS] = arguments[xS];
              const NS = IH(HS, gS, XS);
              return YS.inProbe || cH(SS, bS, XS), NS
            })
          }
        }(this, gS[0], bS), bS
      }))
    }

    function JH(SS, HS, gS, tS) {
      nH[SS] += tS, PH < 32 && HS.bytes.length >= 1 << 20 && (PH++, pS(`upload ${SS} #${HS.id} +${gS} ${tS} B`))
    }

    function OH(SS) {
      if (!SS.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(SS) || /in uvec3 _p2vs_location0\b/.test(SS) ? "inst" : "tex"
    }

    function dH(SS, HS, gS) {
      var tS;
      if (gS.checked) return;
      gS.checked = !0;
      const bS = SS.getProgramParameter(HS, jS.LINK_STATUS),
        XS = (null !== (tS = SS.getProgramInfoLog(HS)) && void 0 !== tS ? tS : "").trim();
      var xS;
      null === gS.terrain && bS || (US(`program ${cS(gS)} ${null!==(xS=gS.terrain)&&void 0!==xS?xS:"other"} link ${bS?"ok":"FAILED"}${XS?`: ${sS(XS,300)}`:""}`), XS && pS(`program ${cS(gS)} link log:\n${sS(XS)}`))
    }

    function cH(SS, HS, gS) {
      var tS;
      const bS = SS.getParameter(jS.CURRENT_PROGRAM),
        XS = bS ? jH.get(bS) : void 0;
      if (!bS || !XS) return;
      const xS = null !== (tS = XS.terrain) && void 0 !== tS ? tS : "other",
        {
          HG: NS,
          instances: qS
        } = function(SS, HS) {
          switch (SS) {
            case "drawArrays":
              return {
                HG: [
                  [HS[1], HS[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                HG: [
                  [HS[1], HS[2]]
                ], instances: HS[3]
              };
            case "drawElements":
              return {
                HG: [
                  [0, HS[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                HG: [
                  [0, HS[1]]
                ], instances: HS[4]
              };
            case "multiDrawArraysWEBGL": {
              const SS = HS[1],
                gS = HS[3],
                tS = HS[2],
                bS = HS[4],
                XS = [];
              for (let xS = 0; xS < HS[5]; xS++) XS.push([SS[tS + xS], gS[bS + xS]]);
              return {
                HG: XS,
                instances: 1
              }
            }
            default:
              return {
                HG: [], instances: 0
              }
          }
        }(HS, gS),
        uS = "inst" === XS.terrain ? qS : NS.reduce(((SS, HS) => {
          let [, gS] = HS;
          return SS + gS
        }), 0) / 6;
      if (CH[xS].draws++, CH[xS].faces += uS, null === XS.terrain) return;
      if (YS.context = SS, !XS.firstDraw) {
        XS.firstDraw = !0, dH(SS, bS, XS), vH || (vH = !0, US(function(SS) {
          var HS;
          const gS = SS.getParameter(jS.DEPTH_FUNC),
            tS = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let bS = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in SS && SS.getParameter(jS.DRAW_FRAMEBUFFER_BINDING)) {
            const HS = SS;
            bS = HS.getFramebufferAttachmentParameter(jS.DRAW_FRAMEBUFFER, jS.DEPTH_ATTACHMENT, jS.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(HS.getFramebufferAttachmentParameter(jS.DRAW_FRAMEBUFFER,jS.DEPTH_ATTACHMENT,jS.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(HS.getFramebufferAttachmentParameter(jS.DRAW_FRAMEBUFFER,jS.DEPTH_ATTACHMENT,jS.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const XS = SS.getParameter(jS.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(HS=tS[gS])&&void 0!==HS?HS:`0x${gS.toString(16)}`} clear ${XS}${516===gS||518===gS?" (reverse-Z)":""}, samples ${String(SS.getParameter(jS.SAMPLES))}, ${bS}`
        }(SS)));
        const gS = SS.getError();
        gS !== jS.NO_ERROR && GH.gl < qH && (GH.gl++, US(`GL error 0x${gS.toString(16)} after program ${cS(XS)}'s first terrain draw (${HS})`))
      }
      const IS = YS.pendingCheck;
      null !== IS && (IS.terrainDraws++, IS.draws.length < uH && BS(SS, bS, XS, HS, NS, qS))
    }
    let vH = !1;
    const EH = new WeakSet;
    var LH = gS(4648),
      YH = gS(4815);
    const AH = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let yH = !1;
    const VH = new WeakSet,
      iH = new WeakMap,
      WH = new WeakMap,
      zH = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let UH = 0,
      pH = !1,
      sH = null,
      BH = {
        draws: 0,
        faces: 0
      };

    function MH(SS) {
      const HS = globalThis[SS];
      return null === HS || void 0 === HS ? void 0 : HS.prototype
    }

    function FH(SS) {
      return SS && "function" === typeof SS[Symbol.iterator] ? [...SS].sort().join(" ") : ""
    }

    function RH(SS, HS) {
      const gS = null !== SS && void 0 !== SS ? SS : {},
        tS = null !== HS && void 0 !== HS ? HS : Object.keys(Object.getPrototypeOf(gS)).concat(Object.keys(gS));
      return [...new Set(tS)].filter((SS => "number" === typeof gS[SS])).map((SS => `${SS} ${String(gS[SS])}`)).join(", ")
    }

    function TH(SS, HS) {
      var gS;
      const tS = null !== (gS = HS.vertex) && void 0 !== gS ? gS : {};
      if (tS.module && VH.has(tS.module)) {
        var bS;
        const gS = String(null !== (bS = tS.entryPoint) && void 0 !== bS ? bS : "");
        if (gS.startsWith("vs_packed") && iH.set(SS, gS), !pH) {
          var XS, xS, NS, qS, uS;
          pH = !0;
          const SS = null !== (XS = HS.depthStencil) && void 0 !== XS ? XS : {},
            tS = null !== (xS = HS.multisample) && void 0 !== xS ? xS : {},
            bS = String(null !== (NS = SS.depthCompare) && void 0 !== NS ? NS : "");
          US(`WebGPU terrain pipeline ${gS}: depth ${String(null!==(qS=SS.format)&&void 0!==qS?qS:"none")} ${bS}${bS.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(uS=tS.count)&&void 0!==uS?uS:1)}`)
        }
      }
    }

    function oH(SS) {
      fH(SS, "setPipeline", (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        return WH.set(this, gS[0]), IH(SS, this, gS)
      }));
      for (const HS of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) fH(SS, HS, (SS => function() {
        const gS = WH.get(this),
          tS = gS ? iH.get(gS) : void 0;
        for (var bS = arguments.length, XS = new Array(bS), xS = 0; xS < bS; xS++) XS[xS] = arguments[xS];
        return void 0 !== tS && lH(HS, tS, XS), IH(SS, this, XS)
      }))
    }

    function lH(SS, HS, gS) {
      var tS;
      (BH.draws++, "draw" === SS || "drawIndexed" === SS) && (BH.faces += gS[0] * (null !== (tS = gS[1]) && void 0 !== tS ? tS : 1) / 6);
      if (null !== sH && sH.length < uH) {
        const tS = ("draw" === SS ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === SS ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((HS, tS) => {
          const bS = SS.endsWith("Indirect") ? gS[1] : gS[tS];
          return `${HS} ${String(null!==bS&&void 0!==bS?bS:"instances"===HS?1:0)}`
        }));
        sH.push(`  ${HS} ${SS} ${tS.join(" ")}`)
      }
    }

    function mH() {
      if (yH || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      yH = !0, fH(MH("GPU"), "requestAdapter", (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        return IH(SS, this, gS).then((SS => {
          var HS;
          SS ? function(SS) {
            var HS;
            const gS = null !== (HS = SS.info) && void 0 !== HS ? HS : {};
            US(`WebGPU adapter ${["vendor","architecture","device","description"].map((SS=>{var HS;return`${SS} "${String(null!==(HS=gS[SS])&&void 0!==HS?HS:"")}"`})).join(" ")}${SS.isFallbackAdapter?" (fallback)":""}`), US(`WebGPU adapter features ${FH(SS.features)}`), US(`WebGPU adapter limits ${RH(SS.limits,AH)}`), pS(`WebGPU adapter all limits ${RH(SS.limits,null)}`)
          }(SS) : US(`WebGPU requestAdapter(${JSON.stringify(null!==(HS=gS[0])&&void 0!==HS?HS:{})}) gave none`);
          return SS
        }))
      })), fH(MH("GPUAdapter"), "requestDevice", (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        return IH(SS, this, gS).then((SS => (function(SS) {
          US(`WebGPU device features ${FH(SS.features)}`), US(`WebGPU device limits ${RH(SS.limits,AH)}`), SS.addEventListener("uncapturederror", (SS => {
            if (zH.uncaptured < qH) {
              var HS, gS, tS;
              zH.uncaptured++;
              const bS = SS.error;
              US(`WebGPU uncaptured ${null!==(HS=null===bS||void 0===bS||null===(gS=bS.constructor)||void 0===gS?void 0:gS.name)&&void 0!==HS?HS:"error"}: ${sS(String(null!==(tS=null===bS||void 0===bS?void 0:bS.message)&&void 0!==tS?tS:""),600)}`)
            }
          }));
          const HS = SS.lost;
          null === HS || void 0 === HS || HS.then((SS => {
            var HS;
            US(`WebGPU device lost (${String(SS.reason)}): ${sS(String(null!==(HS=SS.message)&&void 0!==HS?HS:""),600)}`)
          }))
        }(SS), SS)), (SS => {
          throw US(`WebGPU requestDevice failed: ${String(SS)}`), SS
        }))
      }));
      const SS = MH("GPUDevice");
      fH(SS, "createShaderModule", (SS => function() {
        for (var HS, gS, tS = arguments.length, bS = new Array(tS), XS = 0; XS < tS; XS++) bS[XS] = arguments[XS];
        const xS = IH(SS, this, bS);
        return function(SS, HS) {
          const gS = HS.includes("decodeQuad");
          gS && VH.add(SS);
          const tS = SS.getCompilationInfo;
          null === tS || void 0 === tS || tS.call(SS).then((SS => {
            if (0 === SS.messages.length && !gS) return;
            const HS = {};
            for (const gS of SS.messages) {
              var tS;
              HS[String(gS.type)] = (null !== (tS = HS[String(gS.type)]) && void 0 !== tS ? tS : 0) + 1
            }
            const bS = SS.messages.map((SS => `${String(SS.type)} ${String(SS.lineNum)}:${String(SS.linePos)} ${String(SS.message)}`)).join("\n");
            zH.compile < qH && (zH.compile++, US(`WebGPU ${gS?"terrain ":""}shader module compiled: ${JSON.stringify(HS)}${bS?` first: ${sS(bS.split("\n")[0],300)}`:""}`)), bS && pS(`WebGPU shader module messages:\n${sS(bS)}`)
          }))
        }(xS, String(null !== (HS = (null !== (gS = bS[0]) && void 0 !== gS ? gS : {}).code) && void 0 !== HS ? HS : "")), xS
      })), fH(SS, "createRenderPipeline", (SS => function() {
        for (var HS, gS = arguments.length, tS = new Array(gS), bS = 0; bS < gS; bS++) tS[bS] = arguments[bS];
        const XS = IH(SS, this, tS);
        return TH(XS, null !== (HS = tS[0]) && void 0 !== HS ? HS : {}), XS
      })), fH(SS, "createRenderPipelineAsync", (SS => function() {
        for (var HS = arguments.length, gS = new Array(HS), tS = 0; tS < HS; tS++) gS[tS] = arguments[tS];
        return IH(SS, this, gS).then((SS => {
          var HS;
          return TH(SS, null !== (HS = gS[0]) && void 0 !== HS ? HS : {}), SS
        }), (SS => {
          var HS;
          throw function(SS, HS) {
            var gS, tS, bS;
            if (zH.rejected >= qH) return;
            zH.rejected++;
            const {
              reason: XS,
              message: xS
            } = null !== HS && void 0 !== HS ? HS : {}, NS = String(null !== (gS = (null !== (tS = SS.vertex) && void 0 !== tS ? tS : {}).entryPoint) && void 0 !== gS ? gS : "");
            US(`WebGPU pipeline "${String(null!==(bS=SS.label)&&void 0!==bS?bS:"")}" ${NS} rejected (${String(null!==XS&&void 0!==XS?XS:"no reason")}): ${sS(String(null!==xS&&void 0!==xS?xS:HS),600)}`)
          }(null !== (HS = gS[0]) && void 0 !== HS ? HS : {}, SS), SS
        }))
      })), fH(MH("GPUCanvasContext"), "configure", (SS => function() {
        for (var HS, gS = arguments.length, tS = new Array(gS), bS = 0; bS < gS; bS++) tS[bS] = arguments[bS];
        const XS = null !== (HS = tS[0]) && void 0 !== HS ? HS : {};
        var xS, NS;
        UH++ < 3 && US(`WebGPU canvas ${String(XS.format)} ${String(null!==(xS=XS.colorSpace)&&void 0!==xS?xS:"srgb")} alpha ${String(null!==(NS=XS.alphaMode)&&void 0!==NS?NS:"opaque")}`);
        return IH(SS, this, tS)
      })), oH(MH("GPURenderPassEncoder")), oH(MH("GPURenderBundleEncoder"))
    }
    const eH = 1e4,
      rH = 6e4,
      Sg = 5e3,
      Hg = 3e3,
      gg = 100;
    let tg = null,
      bg = !1,
      Xg = {
        ...LH.b
      },
      xg = !1,
      Ng = null,
      qg = 0,
      ug = () => {};
    const Ig = new Promise((SS => {
      ug = SS
    }));

    function fg() {
      var SS;
      bg || (bg = !0, Xg = Object.assign(window.bloxdRenderDebug ??= {
        ...LH.b
      }, {
        faceCull: "0" === (0, XS.m)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (SS = (0, XS.m)("adrenoProbe")) && void 0 !== SS ? SS : ""
      }), US("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), kH || "undefined" === typeof window || (kH = !0, "undefined" !== typeof WebGL2RenderingContext && ZH(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && ZH(WebGLRenderingContext.prototype, !1)), mH(), (0, XS.c)("renderProbe", (() => {
        Cg("console")
      })), jg(), setInterval(Pg, Sg))
    }

    function kg(SS) {
      var HS, gS;
      fg(), tg = null !== (HS = null === SS || void 0 === SS ? void 0 : SS.backend) && void 0 !== HS ? HS : null;
      const tS = `, renderer param ${null!==(gS=(0,XS.m)("renderer"))&&void 0!==gS?gS:"none"}, faceCull ${"0"===Xg.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Xg.adrenoProbe||"none"}`;
      US(`${(0,YH.e)(SS)}${null===SS?"":tS}`)
    }

    function ag() {
      const SS = performance.now(),
        HS = Kg(Ig, eH, rH).then((HS => Cg(`${Math.round((performance.now()-SS)/1e3)} s after playable${HS?"":", no terrain drawn yet"}`)));
      (0, bS.e)(US, (async () => {
        await HS, await Ng
      }))
    }
    async function Kg(SS, HS, gS) {
      const bS = (0, tS.e)(gS).then((() => !1));
      return await (0, tS.e)(HS), Promise.race([SS.then((() => !0)), bS])
    }

    function jg() {
      requestAnimationFrame((() => {
        qg++, jg()
      }))
    }

    function Gg() {
      var SS, HS, gS;
      if (xg) return;
      (xg = !0, US(`renderer caps ${null!==(SS=Xg.caps)&&void 0!==SS?SS:"(not noted)"}; terrain fetch ${null!==(HS=Xg.fetch)&&void 0!==HS?HS:"(not noted)"}`), Xg.adrenoProbe) && US(`adrenoProbe ${Xg.adrenoProbe} asked; in force (storage fetch only): ${null!==(gS=Xg.probe)&&void 0!==gS?gS:"(not noted)"}`);
      const tS = YS.context;
      if (tS) {
        for (const SS of function(SS) {
            var HS;
            const gS = [],
              tS = SS.getExtension("WEBGL_debug_renderer_info"),
              bS = tS ? SS.getParameter(tS.UNMASKED_VENDOR_WEBGL) : "(masked)",
              XS = tS ? SS.getParameter(tS.UNMASKED_RENDERER_WEBGL) : "(masked)";
            gS.push(`GL ${String(SS.getParameter(SS.VERSION))} | ${String(SS.getParameter(SS.SHADING_LANGUAGE_VERSION))} | ${String(SS.getParameter(SS.VENDOR))} / ${String(SS.getParameter(SS.RENDERER))}`), gS.push(`GL unmasked ${bS} / ${XS}`);
            const xS = [
              ["MAX_TEXTURE_SIZE", SS.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", SS.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", SS.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", SS.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", SS.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", SS.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", SS.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in SS && xS.push(["MAX_UNIFORM_BLOCK_SIZE", SS.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", SS.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", SS.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", SS.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), gS.push(`GL limits ${xS.map((HS=>{let[gS,tS]=HS;return`${gS} ${String(SS.getParameter(tS))}`})).join(", ")}`);
            const NS = (HS, gS) => {
              const tS = SS.getShaderPrecisionFormat(HS, SS.HIGH_FLOAT),
                bS = SS.getShaderPrecisionFormat(HS, SS.HIGH_INT);
              return `${gS} highp float ${tS?`${tS.rangeMin}/${tS.rangeMax}/${tS.precision}`:"?"} int ${bS?`${bS.rangeMin}/${bS.rangeMax}/${bS.precision}`:"?"}`
            };
            gS.push(`GL precision ${NS(SS.VERTEX_SHADER,"VS")}, ${NS(SS.FRAGMENT_SHADER,"FS")}`);
            const qS = SS.getContextAttributes();
            return gS.push(`GL context ${JSON.stringify(qS)} drawingBuffer ${SS.drawingBufferWidth}x${SS.drawingBufferHeight}${"drawingBufferFormat"in SS?` format 0x${Number(SS.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in SS?` ${String(SS.drawingBufferColorSpace)}`:""}`), gS.push(`GL extensions ${(null!==(HS=SS.getSupportedExtensions())&&void 0!==HS?HS:[]).join(" ")}`), gS
          }(tS)) US(SS);
        ! function() {
          if (!YS.context) return;
          let SS = 0,
            HS = 0;
          for (const [gS, tS] of vS) !tS.gl.isContextLost() && tS.gl.isProgram(gS) && (HS++, dH(tS.gl, gS, tS), null !== tS.terrain && SS++);
          US(`programs: ${HS} live of ${vS.length} linked, ${SS} packed terrain; CPU page copies ${Math.round(YS.shadowBytes/1048576)} MiB (${YS.uncopied} over budget)`)
        }()
      }
    }

    function Cg(SS) {
      return Ng ??= async function(SS) {
        Gg(), "webgpu" === tg ? (ng(), "1" === Xg.slotCheck && US("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Xg.slotCheck = "1", await
          function(SS) {
            if (null !== sH) return Promise.resolve();
            const HS = [];
            return sH = HS, new Promise((gS => {
              setTimeout((() => {
                sH = null, US(`WebGPU draw ranges (${SS}): ${HS.length} terrain draws recorded in a second (first ${uH}; bundles replay without new ones)`);
                for (const SS of HS) US(SS);
                gS()
              }), 1e3)
            }))
          }(SS), await async function() {
            if (await (0, LH.e)(Xg, "slotCheck", ["1"], Hg, gg), "1" === Xg.slotCheck) return void US(`slot check: no answer in ${Hg} ms (only the storage fetch has one; a later answer logs on its own)`);
            ng()
          }()) : await xH(SS);
        US(`check (${SS}) done: bloxdDebug.save() downloads it all`)
      }(SS).catch((HS => {
        US(`check (${SS}) failed: ${String(HS)}`)
      })).finally((() => {
        Ng = null
      })), Ng
    }

    function ng() {
      void 0 !== Xg.slotCheck && "1" !== Xg.slotCheck && (US(Xg.slotCheck), delete Xg.slotCheck)
    }

    function Pg() {
      const SS = SS => qg ? (SS / qg).toFixed(1) : "0",
        HS = function() {
          const SS = BH;
          return BH = {
            draws: 0,
            faces: 0
          }, SS
        }(),
        gS = function() {
          const SS = CH;
          return CH = {
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
          }, SS
        }(),
        tS = function() {
          const SS = nH;
          return nH = {
            buffer: 0,
            texture: 0
          }, SS
        }();
      ng(), ("webgpu" === tg ? HS.draws : gS.inst.draws + gS.tex.draws) > 0 && ug();
      const bS = "webgpu" === tg ? [`terrain ${SS(HS.draws)} draws ${SS(HS.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((SS => gS[SS].draws > 0)).map((HS => `${HS} ${SS(gS[HS].draws)} draws ${SS(gS[HS].faces)} faces a frame`));
      US(`${qg} frames: ${bS.join(", ")||"no draws"}; uploaded ${Math.round(tS.buffer/1024)} KiB to buffers, ${Math.round(tS.texture/1024)} KiB to data textures`), qg = 0
    }
  },
  4815: (SS, HS, gS) => {
    function tS(SS) {
      if (null === SS) return "backend: none picked (no renderer build)";
      const HS = SS.adapter ? `${SS.adapter.vendor}/${SS.adapter.architecture}` : "none";
      return `backend ${SS.backend}: reason ${SS.reason}, source ${SS.source}, adapter ${HS}`
    }
    gS.d(HS, {
      e: () => tS
    })
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);