export const id = 48;
export const ids = [48];
export const modules = {
  4630: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => FC
    });
    var QC = ZC(20),
      wC = ZC(28),
      bC = ZC(1240),
      nC = ZC(2800);
    const fC = 3e4,
      oC = 1e3;

    function qC() {
      return "visible" === document.visibilityState && "inGame" === QC.b.get("gameState") && (0, bC.x)()
    }

    function FC(CC, zC) {
      (0, nC.l)() || function(CC, zC, ZC) {
        let QC = 0;
        const wC = setInterval((() => {
          zC() && (QC += oC, QC >= CC && (clearInterval(wC), ZC()))
        }), oC)
      }(fC, qC, (() => {
        zC().then((() => {
          CC(`saved for the player after ${fC/1e3} s of play`), (0, nC.t)(), wC.o.bp("chat", {
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
  4621: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      installRenderDebug: () => WZ,
      renderDebugPlayable: () => MZ,
      startRenderDebug: () => NZ,
      waitForDraw: () => gZ
    });
    var QC = ZC(1740),
      wC = ZC(4630),
      bC = ZC(2800);
    const nC = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function fC(CC) {
      return 7 & CC
    }

    function oC(CC) {
      return CC >>> 11 & 1
    }

    function qC(CC) {
      return [1 + (CC >>> 18 & 63), 1 + (CC >>> 24 & 63)]
    }

    function FC(CC, zC) {
      const [ZC, , QC] = CC, wC = fC(QC), bC = function(CC, zC, ZC) {
        return zC + (1 === (22 >>> CC & 1) ? 4 - ZC : ZC) & 3
      }(wC, oC(QC), zC), nC = wC >>> 1, [FC, WC] = qC(ZC), NC = 1 === bC || 2 === bC ? FC : 0, MC = bC >= 2 ? WC : 0, gC = [63 & ZC, ZC >>> 6 & 63, ZC >>> 12 & 63];
      return gC[2 === nC ? 0 : 2] += NC, gC[1 === nC ? 0 : 1] += MC, gC
    }

    function WC(CC) {
      const zC = Math.max(...qC(CC[0]));
      return 1 === zC ? "1" : zC <= 4 ? "2-4" : zC <= 16 ? "5-16" : "17-64"
    }
    const NC = 16;

    function MC(CC) {
      let zC = 2166136261;
      for (let ZC = 0; ZC < CC.length; ZC++) zC = Math.imul(zC ^ CC[ZC], 16777619);
      return zC >>> 0
    }

    function gC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const QC = Math.max(0, zC - ZC),
        wC = Math.min(CC.length, zC + ZC),
        bC = [];
      for (let nC = QC; nC < wC; nC++) {
        const ZC = CC[nC].toString(16).padStart(2, "0");
        bC.push(nC === zC ? `[${ZC}]` : ZC)
      }
      return bC.join(" ")
    }
    const SC = {
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
      pC = "_vs2fs_location0";
    const PC = 0,
      GC = 4,
      RC = 6,
      AC = [0, 1, 2, 0, 2, 3],
      xC = 2048,
      JC = 4,
      IC = 256,
      iC = 64,
      vC = 268435456,
      eC = 65536,
      hC = /^#version [^\n]*\/\/ program (\S+)$/m;

    function KC(CC) {
      return null === CC.name ? `#${CC.id}` : `#${CC.id} ${CC.name}`
    }
    const YC = [],
      dC = new WeakMap,
      mC = new WeakMap,
      HC = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let EC = 1;
    const lC = new WeakMap;

    function XC(CC) {
      if (null === CC) return 0;
      let zC = lC.get(CC);
      return void 0 === zC && (zC = EC++, lC.set(CC, zC)), zC
    }
    class cC {
      constructor(CC, zC) {
        this.print = CC, this.now = zC, this.shown = 0, this.vq = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.lM = [], this.dropped = 0
      }
      line(CC) {
        const zC = this.now();
        if (zC - this.second >= 1e3 && (this.second = zC, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.vq++, void this.store(CC);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${CC} (the last line here: the rest go to bloxdDebug.save())` : CC)
      }
      keep(CC) {
        this.sections++, this.store(CC)
      }
      store(CC) {
        this.lM.push(`${new Date(Date.now()).toISOString()} ${CC}`), this.lM.length > 2e4 && (this.lM.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.vq} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.lM].join("\n")
      }
    }
    let uC = null;

    function rC() {
      if (null === uC) {
        const CC = new cC((CC => {
          (0, bC.i)("render", CC)
        }), (() => performance.now()));
        (0, bC.e)("render", (() => CC.dump())), uC = CC
      }
      return uC
    }

    function sC(CC) {
      rC().line(CC)
    }

    function TC(CC) {
      rC().keep(CC)
    }

    function aC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return CC.length <= zC ? CC : `${CC.slice(0,zC)}... (${CC.length-zC} more characters)`
    }

    function tC(CC, zC, ZC, QC, wC, bC) {
      const nC = HC.pendingCheck;
      if (null === nC) return;
      const fC = "undefined" !== typeof WebGL2RenderingContext && CC instanceof WebGL2RenderingContext,
        oC = {
          gl: CC,
          program: ZC,
          call: QC,
          np: wC,
          instances: bC,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (nC.draws.push(oC), fC) try {
        const QC = function(CC) {
          const zC = [],
            ZC = new Map,
            QC = Math.min(16, CC.getParameter(SC.MAX_VERTEX_ATTRIBS));
          for (let wC = 0; wC < QC; wC++) {
            if (!CC.getVertexAttrib(wC, SC.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const QC = CC.getVertexAttrib(wC, SC.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              bC = CC.getVertexAttribOffset(wC, SC.VERTEX_ATTRIB_ARRAY_POINTER),
              nC = CC.getVertexAttrib(wC, SC.VERTEX_ATTRIB_ARRAY_STRIDE),
              fC = CC.getVertexAttrib(wC, SC.VERTEX_ATTRIB_ARRAY_SIZE),
              oC = CC.getVertexAttrib(wC, SC.VERTEX_ATTRIB_ARRAY_TYPE),
              qC = "VERTEX_ATTRIB_ARRAY_INTEGER" in CC && CC.getVertexAttrib(wC, SC.VERTEX_ATTRIB_ARRAY_INTEGER),
              FC = "VERTEX_ATTRIB_ARRAY_DIVISOR" in CC ? CC.getVertexAttrib(wC, SC.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            ZC.set(wC, {
              buffer: QC,
              offset: bC,
              stride: nC
            }), zC.push(`@${wC} buf#${XC(QC)} +${bC} stride ${nC} ${fC}x0x${oC.toString(16)}${qC?" int":""} div ${FC}`)
          }
          return {
            lines: zC,
            byLocation: ZC
          }
        }(CC);
        if (oC.attributes = QC.lines, "inst" === ZC.terrain) {
          const {
            group: wC,
            chunk: fC
          } = function(CC, zC, ZC) {
            const QC = zC.get(RC),
              wC = CC.getVertexAttrib(RC, SC.CURRENT_VERTEX_ATTRIB),
              bC = QC ? `+${QC.offset}` : wC ? Array.from(wC).slice(0, 3).join(",") : "?";
            let nC = ZC.groups.get(bC);
            return void 0 === nC && (nC = ZC.groups.size, ZC.groups.set(bC, nC)), {
              group: nC,
              chunk: bC
            }
          }(CC, QC.byLocation, nC);
          oC.group = wC, oC.chunk = fC;
          for (const CC of [PC, GC]) {
            var qC;
            const zC = null === (qC = QC.byLocation.get(CC)) || void 0 === qC ? void 0 : qC.buffer;
            zC && oC.pages.push({
              kind: "buf",
              buffer: zC
            })
          }! function(CC, zC, ZC, QC, wC, bC, nC) {
            const fC = QC.get(PC),
              oC = nC.parts.get(bC);
            if (void 0 === oC && nC.parts.size >= JC) return;
            const qC = Math.min(wC, iC, IC - (null !== oC && void 0 !== oC ? oC : 0));
            if (null === fC || void 0 === fC || !fC.buffer || qC <= 0) return;
            const FC = DC(CC, zC, ZC);
            if (!FC) return;
            const WC = fC.stride || 12,
              NC = BC(CC, fC.buffer, fC.offset, (qC - 1) * WC + 12),
              MC = new DataView(NC.buffer),
              gC = function(CC, zC) {
                const ZC = function(CC) {
                    const zC = VC.get(CC);
                    if (void 0 !== zC && (null === zC || CC.isProgram(zC))) return zC;
                    HC.inProbe = !0;
                    let ZC = null;
                    try {
                      ZC = jC(CC, OC, kC, "fed", "the record feed")
                    } finally {
                      HC.inProbe = !1
                    }
                    return VC.set(CC, ZC), ZC
                  }(CC),
                  QC = ZC ? UC(CC, ZC, zC, (() => {
                    CC.drawArraysInstanced(SC.POINTS, 0, 1, zC)
                  }), "decode probe input (the record feed)") : null;
                return QC ? new Uint32Array(QC.buffer) : null
              }(CC, qC);
            gC || nC.fed.failed++;
            const pC = UC(CC, FC, 4 * qC, (() => {
              CC.drawArraysInstanced(SC.POINTS, 0, 4, qC)
            }));
            if (!pC) return;
            nC.parts.set(bC, (null !== oC && void 0 !== oC ? oC : 0) + qC);
            for (let SC = 0; SC < qC; SC++) {
              const CC = SC * WC,
                zC = [MC.getUint32(CC, !0), MC.getUint32(CC + 4, !0), MC.getUint32(CC + 8, !0)],
                ZC = gC ? [gC[3 * SC], gC[3 * SC + 1], gC[3 * SC + 2]] : zC;
              gC && (nC.fed.records++, ZC.some(((CC, ZC) => CC !== zC[ZC])) && (nC.fed.differing++, nC.fed.first.length < 8 && nC.fed.first.push(`part ${bC} instance ${SC}: fed ${ZC.map(wz).join(" ")} buffer ${zC.map(wz).join(" ")}`)));
              for (let QC = 0; QC < 4; QC++) {
                const CC = 3 * (4 * SC + QC);
                nC.vertices.push({
                  record: ZC,
                  slot: QC,
                  group: bC,
                  gpu: [pC[CC], pC[CC + 1], pC[CC + 2]]
                })
              }
            }
          }(CC, zC, ZC, QC.byLocation, bC, wC, nC)
        } else {
          const QC = Cz(CC, zC, 16),
            bC = Cz(CC, zC, 8);
          for (const CC of [QC, bC]) CC && oC.pages.push({
            kind: "tex",
            texture: CC
          });
          QC && function(CC, zC, ZC, QC, wC, bC) {
            if (bC.parts.size >= JC) return;
            const nC = DC(CC, zC, ZC);
            if (!nC) return;
            let fC = 6 * IC;
            const oC = [];
            for (const [MC, gC] of wC) {
              const CC = Math.min(gC, fC, Math.max(6, 6 * Math.floor(IC / wC.length)));
              CC > 0 && (oC.push([MC, CC]), fC -= CC)
            }
            const qC = oC.reduce(((CC, zC) => {
                let [, ZC] = zC;
                return CC + ZC
              }), 0),
              FC = UC(CC, nC, qC, (() => {
                for (const [zC, ZC] of oC) CC.drawArrays(SC.POINTS, zC, ZC)
              }));
            if (!FC) return;
            let WC = 0;
            for (const [MC, gC] of oC) {
              const zC = Math.floor(MC / 6),
                ZC = Math.floor((MC + gC - 1) / 6) - zC + 1,
                wC = zz(CC, QC, xC, zC, ZC);
              for (let CC = MC; CC < MC + gC; CC++, WC++) {
                var NC;
                const ZC = 4 * (Math.floor(CC / 6) - zC),
                  QC = [wC[ZC], wC[ZC + 1], wC[ZC + 2]];
                bC.parts.set(wC[ZC + 3], (null !== (NC = bC.parts.get(wC[ZC + 3])) && void 0 !== NC ? NC : 0) + (CC % 6 === 0 ? 1 : 0)), bC.vertices.push({
                  record: QC,
                  slot: AC[CC % 6],
                  group: wC[ZC + 3],
                  gpu: [FC[3 * WC], FC[3 * WC + 1], FC[3 * WC + 2]]
                })
              }
            }
          }(CC, zC, ZC, QC, wC, nC)
        }
      } catch (FC) {
        sC(`decode probe failed on program ${KC(ZC)}: ${String(FC)}`)
      }
    }

    function DC(CC, zC, ZC) {
      if (void 0 !== ZC.probe) return ZC.probe && yC(CC, zC, ZC.probe), ZC.probe;
      ZC.probe = null, HC.inProbe = !0;
      try {
        ZC.probe = function(CC, zC) {
          return jC(CC, (ZC = zC.vertex, ZC.replace(`\nvec3 ${pC} = vec3(0);\n`, `\nout vec3 ${pC};\n`)), zC.fragment, pC, `program ${KC(zC)}'s twin`);
          var ZC
        }(CC, ZC)
      } finally {
        HC.inProbe = !1
      }
      return ZC.probe && yC(CC, zC, ZC.probe), ZC.probe
    }

    function jC(CC, zC, ZC, QC, wC) {
      const bC = [CC.createShader(SC.VERTEX_SHADER), CC.createShader(SC.FRAGMENT_SHADER)],
        nC = CC.createProgram();
      if (!nC || !bC[0] || !bC[1]) return null;
      CC.shaderSource(bC[0], zC), CC.shaderSource(bC[1], ZC);
      for (const oC of bC) CC.compileShader(oC), CC.attachShader(nC, oC);
      CC.transformFeedbackVaryings(nC, [QC], SC.INTERLEAVED_ATTRIBS), CC.linkProgram(nC);
      for (const oC of bC) CC.deleteShader(oC);
      var fC;
      return CC.getProgramParameter(nC, SC.LINK_STATUS) ? nC : (sC(`decode probe: ${wC} failed to link: ${aC(null!==(fC=CC.getProgramInfoLog(nC))&&void 0!==fC?fC:"",300)}`), CC.deleteProgram(nC), null)
    }

    function yC(CC, zC, ZC) {
      const QC = CC.getProgramParameter(zC, SC.ACTIVE_UNIFORM_BLOCKS);
      for (let fC = 0; fC < QC; fC++) {
        const QC = CC.getActiveUniformBlockName(zC, fC),
          wC = null === QC ? SC.INVALID_INDEX : CC.getUniformBlockIndex(ZC, QC);
        wC !== SC.INVALID_INDEX && CC.uniformBlockBinding(ZC, wC, CC.getActiveUniformBlockParameter(zC, fC, SC.UNIFORM_BLOCK_BINDING))
      }
      const wC = CC.getParameter(SC.CURRENT_PROGRAM);
      CC.useProgram(ZC);
      const bC = CC.getProgramParameter(zC, SC.ACTIVE_UNIFORMS),
        nC = CC.getActiveUniforms(zC, [...Array(bC).keys()], SC.UNIFORM_BLOCK_INDEX);
      for (let fC = 0; fC < bC; fC++) {
        const QC = CC.getActiveUniform(zC, fC);
        if (!QC || -1 !== nC[fC]) continue;
        const wC = QC.name.replace(/\[0\]$/, "");
        for (let bC = 0; bC < QC.size; bC++) {
          const nC = QC.size > 1 ? `${wC}[${bC}]` : QC.name,
            fC = CC.getUniformLocation(zC, nC),
            oC = CC.getUniformLocation(ZC, nC);
          fC && oC && LC(CC, oC, QC.type, CC.getUniform(zC, fC))
        }
      }
      CC.useProgram(wC)
    }

    function LC(CC, zC, ZC, QC) {
      const wC = ArrayBuffer.isView(QC) ? Array.from(QC) : [Number(QC)];
      switch (ZC) {
        case SC.FLOAT:
          return void CC.uniform1f(zC, wC[0]);
        case SC.FLOAT_VEC2:
          return void CC.uniform2fv(zC, wC);
        case SC.FLOAT_VEC3:
          return void CC.uniform3fv(zC, wC);
        case SC.FLOAT_VEC4:
          return void CC.uniform4fv(zC, wC);
        case SC.FLOAT_MAT3:
          return void CC.uniformMatrix3fv(zC, !1, wC);
        case SC.FLOAT_MAT4:
          return void CC.uniformMatrix4fv(zC, !1, wC);
        case SC.UNSIGNED_INT:
          return void CC.uniform1ui(zC, wC[0]);
        case SC.UNSIGNED_INT_VEC2:
          return void CC.uniform2uiv(zC, wC);
        case SC.UNSIGNED_INT_VEC3:
          return void CC.uniform3uiv(zC, wC);
        case SC.UNSIGNED_INT_VEC4:
          return void CC.uniform4uiv(zC, wC);
        case SC.INT_VEC2:
          return void CC.uniform2iv(zC, wC);
        case SC.INT_VEC3:
          return void CC.uniform3iv(zC, wC);
        case SC.INT_VEC4:
          return void CC.uniform4iv(zC, wC);
        default:
          CC.uniform1i(zC, wC[0])
      }
    }

    function UC(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const bC = CC.getParameter(SC.CURRENT_PROGRAM),
        nC = CC.getParameter(SC.TRANSFORM_FEEDBACK_BINDING),
        fC = CC.getParameter(SC.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        oC = CC.getParameter(SC.COPY_READ_BUFFER_BINDING),
        qC = CC.isEnabled(SC.RASTERIZER_DISCARD),
        FC = CC.createTransformFeedback(),
        WC = CC.createBuffer();
      HC.inProbe = !0;
      try {
        const bC = CC.getError();
        bC !== SC.NO_ERROR && sC(`GL error 0x${bC.toString(16)} pending before the decode probe (the renderer's)`), CC.useProgram(zC), CC.bindTransformFeedback(SC.TRANSFORM_FEEDBACK, FC), CC.bindBuffer(SC.TRANSFORM_FEEDBACK_BUFFER, WC), CC.bufferData(SC.TRANSFORM_FEEDBACK_BUFFER, 12 * ZC, SC.STREAM_READ), CC.bindBufferBase(SC.TRANSFORM_FEEDBACK_BUFFER, 0, WC), CC.enable(SC.RASTERIZER_DISCARD), CC.beginTransformFeedback(SC.POINTS), QC(), CC.endTransformFeedback(), CC.bindBufferBase(SC.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const nC = CC.getError();
        if (nC !== SC.NO_ERROR) return sC(`${wC}: GL error 0x${nC.toString(16)} on the feedback draw`), null;
        const fC = new Float32Array(3 * ZC);
        return CC.bindBuffer(SC.COPY_READ_BUFFER, WC), CC.getBufferSubData(SC.COPY_READ_BUFFER, 0, fC), fC
      } finally {
        qC || CC.disable(SC.RASTERIZER_DISCARD), CC.bindTransformFeedback(SC.TRANSFORM_FEEDBACK, nC), CC.bindBuffer(SC.TRANSFORM_FEEDBACK_BUFFER, fC), CC.bindBuffer(SC.COPY_READ_BUFFER, oC), CC.deleteTransformFeedback(FC), CC.deleteBuffer(WC), CC.useProgram(bC), HC.inProbe = !1
      }
    }

    function BC(CC, zC, ZC, QC) {
      const wC = CC.getParameter(SC.COPY_READ_BUFFER_BINDING),
        bC = new Uint8Array(QC);
      return CC.bindBuffer(SC.COPY_READ_BUFFER, zC), CC.getBufferSubData(SC.COPY_READ_BUFFER, ZC, bC), CC.bindBuffer(SC.COPY_READ_BUFFER, wC), bC
    }
    const OC = `#version 300 es\nlayout(location = ${PC}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      kC = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      VC = new WeakMap;

    function Cz(CC, zC, ZC) {
      const QC = CC.getProgramParameter(zC, SC.ACTIVE_UNIFORMS),
        wC = CC.getParameter(SC.ACTIVE_TEXTURE);
      try {
        for (let wC = 0; wC < QC; wC++) {
          const QC = CC.getActiveUniform(zC, wC);
          if ((null === QC || void 0 === QC ? void 0 : QC.type) !== SC.UNSIGNED_INT_SAMPLER_2D) continue;
          const bC = CC.getUniformLocation(zC, QC.name),
            nC = bC ? CC.getUniform(zC, bC) : -1;
          if (nC < 0) continue;
          CC.activeTexture(SC.TEXTURE0 + nC);
          const fC = CC.getParameter(SC.TEXTURE_BINDING_2D);
          if (fC && mC.get(fC) === ZC) return fC
        }
        return null
      } finally {
        CC.activeTexture(wC)
      }
    }

    function zz(CC, zC, ZC, QC, wC) {
      const bC = new Uint32Array(4 * wC),
        nC = CC.getParameter(SC.READ_FRAMEBUFFER_BINDING),
        fC = CC.createFramebuffer();
      CC.bindFramebuffer(SC.READ_FRAMEBUFFER, fC), CC.framebufferTexture2D(SC.READ_FRAMEBUFFER, SC.COLOR_ATTACHMENT0, SC.TEXTURE_2D, zC, 0);
      try {
        let zC = 0;
        for (; zC < wC;) {
          const nC = QC + zC,
            fC = nC % ZC,
            oC = Math.min(wC - zC, ZC - fC);
          CC.readPixels(fC, Math.floor(nC / ZC), oC, 1, SC.RGBA_INTEGER, SC.UNSIGNED_INT, bC.subarray(4 * zC, 4 * (zC + oC))), zC += oC
        }
      } finally {
        CC.bindFramebuffer(SC.READ_FRAMEBUFFER, nC), CC.deleteFramebuffer(fC)
      }
      return bC
    }

    function Zz(CC, zC, ZC) {
      let QC = 0,
        wC = 0;
      for (let oC = 0; oC < zC.bytes.length; oC += eC) {
        QC++;
        const CC = Math.min(oC + eC, zC.bytes.length);
        MC(zC.bytes.subarray(oC, CC)) !== MC(ZC.subarray(oC, CC)) && wC++
      }
      const bC = `${CC} ${zC.bytes.length} B cpu ${MC(zC.bytes).toString(16)} gpu ${MC(ZC).toString(16)}, ${wC}/${QC} blocks differ${zC.missed?`, ${zC.missed} GPU-side writes uncopied`:""}`;
      if (0 === wC) return bC;
      const {
        count: nC,
        offsets: fC
      } = function(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const QC = Math.min(CC.length, zC.length);
        let wC = Math.abs(CC.length - zC.length);
        const bC = [];
        for (let nC = 0; nC < QC; nC++) CC[nC] !== zC[nC] && (wC++, bC.length < ZC && bC.push(nC));
        return {
          count: wC,
          offsets: bC
        }
      }(zC.bytes, ZC);
      return TC([`${bC}: ${nC} bytes differ`, ...fC.map((CC => `  +${CC}: cpu ${gC(zC.bytes,CC)} | gpu ${gC(ZC,CC)}`))].join("\n")), `${bC}: ${nC} bytes differ, first at ${fC.join(", ")} (context in the saved file)`
    }

    function Qz(CC) {
      if (0 === CC.vertices.length) return void sC(`decode probe (${CC.reason}): no terrain draw probed (${CC.draws.length} seen)`);
      const zC = function(CC) {
          const zC = new Map;
          for (const QC of CC) {
            const CC = zC.get(QC.group);
            CC ? CC.push(QC) : zC.set(QC.group, [QC])
          }
          const ZC = {
            vertices: CC.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [QC, wC] of zC) {
            const CC = new Map,
              zC = wC.map((zC => {
                const ZC = FC(zC.record, zC.slot),
                  QC = [zC.gpu[0] - ZC[0], zC.gpu[1] - ZC[1], zC.gpu[2] - ZC[2]],
                  wC = QC.map((CC => Math.round(64 * CC))).join(","),
                  bC = CC.get(wC);
                return bC ? bC.count++ : CC.set(wC, {
                  count: 1,
                  offset: QC
                }), ZC
              }));
            let bC = [0, 0, 0],
              nC = 0;
            for (const ZC of CC.values()) ZC.count > nC && (nC = ZC.count, bC = ZC.offset);
            ZC.translations.set(QC, bC), wC.forEach(((CC, QC) => {
              var wC;
              const nC = [zC[QC][0] + bC[0], zC[QC][1] + bC[1], zC[QC][2] + bC[2]];
              if (nC.every(((zC, ZC) => {
                  return QC = CC.gpu[ZC], wC = zC, Math.abs(QC - wC) <= Math.max(.001, 1e-6 * Math.abs(wC));
                  var QC, wC
                }))) return;
              ZC.mismatches++, ZC.byDirection[fC(CC.record[2])]++, ZC.byDiagonal[oC(CC.record[2])]++;
              const qC = WC(CC.record);
              ZC.byBand[qC] = (null !== (wC = ZC.byBand[qC]) && void 0 !== wC ? wC : 0) + 1, ZC.first.length < NC && ZC.first.push({
                ...CC,
                expected: nC
              })
            }))
          }
          return ZC
        }(CC.vertices),
        ZC = zC.byDirection.map(((CC, zC) => CC ? `${nC[zC]} ${CC}` : "")).filter(Boolean).join(" "),
        QC = Object.entries(zC.byBand).map((CC => {
          let [zC, ZC] = CC;
          return `${zC}: ${ZC}`
        })).join(" ");
      if (sC(`decode probe (${CC.reason}): ${zC.mismatches}/${zC.vertices} vertices differ from the CPU decode over ${CC.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (zC.mismatches ? ` by direction [${ZC}] diagonal [0: ${zC.byDiagonal[0]} 1: ${zC.byDiagonal[1]}] extent [${QC}]` : "")), CC.fed.records > 0 || CC.fed.failed > 0) {
        sC(`decode probe input: ${CC.fed.differing}/${CC.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (CC.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (CC.fed.failed ? `; the feed failed on ${CC.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const zC of CC.fed.first) sC(`  ${zC}`)
      }
      for (const wC of zC.first) {
        const [CC, zC, ZC] = wC.record;
        sC(`  mismatch part ${wC.group} r0 ${CC.toString(16)} r1 ${zC.toString(16)} r2 ${ZC.toString(16)} slot ${wC.slot} (${nC[fC(ZC)]}): expected ${wC.expected.map(bz).join(",")} gpu ${wC.gpu.map(bz).join(",")}`)
      }
      TC(`decode probe translations: ${[...zC.translations].map((CC=>{let[zC,ZC]=CC;return`${zC}: ${ZC.map(bz).join(",")}`})).join("; ")}`)
    }

    function wz(CC) {
      return CC.toString(16)
    }

    function bz(CC) {
      return Number.isInteger(CC) ? String(CC) : CC.toFixed(3)
    }

    function nz(CC) {
      return null !== HC.pendingCheck ? Promise.resolve() : new Promise((zC => {
        let ZC = !1;
        const QC = {
          reason: CC,
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
        HC.pendingCheck = QC;
        const wC = () => {
            HC.pendingCheck = null;
            try {
              ! function(CC) {
                sC(`draw ranges (${CC.reason}): ${CC.terrainDraws} terrain draws in the frame, the first ${CC.draws.length} here`);
                for (const zC of CC.draws) {
                  const CC = zC.np.slice(0, 8).map((CC => {
                      let [zC, ZC] = CC;
                      return `${zC}+${ZC}`
                    })).join(" "),
                    ZC = zC.np.length > 8 ? ` (+${zC.np.length-8} ranges)` : "";
                  sC(`  ${KC(zC.program)} ${zC.program.terrain} ${zC.call} ${CC}${ZC} x${zC.instances}${zC.group>=0?` part ${zC.group} chunk ${zC.chunk}`:""} | ${zC.attributes.join(" | ")}`)
                }
              }(QC), Qz(QC);
              QC.draws.some((CC => "undefined" !== typeof WebGL2RenderingContext && CC.gl instanceof WebGL2RenderingContext)) || 0 === QC.draws.length ? function(CC) {
                const zC = [],
                  ZC = new Map;
                for (const QC of CC)
                  if ("undefined" !== typeof WebGL2RenderingContext && QC.gl instanceof WebGL2RenderingContext)
                    for (const CC of QC.pages) ZC.set("buf" === CC.kind ? CC.buffer : CC.texture, {
                      page: CC,
                      gl: QC.gl
                    });
                for (const [QC, {
                    page: wC,
                    gl: bC
                  }] of ZC) {
                  const CC = dC.get(QC);
                  if (!CC) {
                    zC.push(`${wC.kind}#${XC(QC)}: no CPU copy (${HC.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === wC.kind) {
                    zC.push(Zz(`buf#${CC.id}`, CC, BC(bC, wC.buffer, 0, CC.bytes.length)));
                    continue
                  }
                  const ZC = zz(bC, wC.texture, CC.width, 0, CC.width * CC.height),
                    nC = 16 === CC.texelBytes ? new Uint8Array(ZC.buffer) : new Uint8Array(new Uint16Array(ZC).buffer);
                  zC.push(Zz(`tex#${CC.id} (${16===CC.texelBytes?"records":"light"})`, CC, nC))
                }
                for (const QC of zC) sC(`page readback ${QC}`)
              }(QC.draws) : sC("page readback: none on WebGL1 (no buffer readback)")
            } catch (CC) {
              sC(`check failed: ${String(CC)}`)
            }
            zC()
          },
          bC = () => {
            if (QC.draws.length > 0 && !ZC) return ZC = !0, void setTimeout(wC, 0);
            ZC || requestAnimationFrame(bC)
          };
        requestAnimationFrame(bC), setTimeout((() => {
          ZC || (ZC = !0, wC())
        }), 5e3)
      }))
    }
    var fz = ZC(4635);
    const oz = 20,
      qz = 24,
      Fz = Reflect.apply;

    function Wz(CC, zC, ZC) {
      if (!CC) return;
      const QC = CC[zC];
      if ("function" === typeof QC) {
        const wC = ZC(QC);
        CC[zC] = wC, (0, fz.v)(wC, QC)
      }
    }
    let Nz = !1;
    const Mz = new WeakMap,
      gz = new WeakMap,
      Sz = new WeakMap,
      pz = {
        gl: 0,
        lost: 0
      };
    let Pz = {
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
      Gz = {
        buffer: 0,
        texture: 0
      },
      Rz = 0;

    function Az(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (CC instanceof ArrayBuffer) return new Uint8Array(CC, zC, ZC || void 0);
      if (!ArrayBuffer.isView(CC)) return null;
      const QC = "BYTES_PER_ELEMENT" in CC ? CC.BYTES_PER_ELEMENT : 1,
        wC = CC.byteOffset + zC * QC,
        bC = ZC ? ZC * QC : CC.byteLength - zC * QC;
      return new Uint8Array(CC.buffer, wC, Math.max(0, bC))
    }

    function xz(CC, zC) {
      const ZC = function(CC) {
        switch (CC) {
          case SC.ARRAY_BUFFER:
            return SC.ARRAY_BUFFER_BINDING;
          case SC.ELEMENT_ARRAY_BUFFER:
            return SC.ELEMENT_ARRAY_BUFFER_BINDING;
          case SC.COPY_READ_BUFFER:
            return SC.COPY_READ_BUFFER_BINDING;
          case SC.COPY_WRITE_BUFFER:
            return SC.COPY_WRITE_BUFFER_BINDING;
          case SC.UNIFORM_BUFFER:
            return SC.UNIFORM_BUFFER_BINDING;
          case SC.PIXEL_UNPACK_BUFFER:
            return SC.PIXEL_UNPACK_BUFFER_BINDING;
          case SC.TRANSFORM_FEEDBACK_BUFFER:
            return SC.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(zC);
      return ZC ? CC.getParameter(ZC) : null
    }

    function Jz(CC) {
      const zC = dC.get(CC);
      zC && (HC.shadowBytes -= zC.bytes.length, dC.delete(CC))
    }

    function Iz(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      Jz(CC), HC.shadowBytes + zC > vC ? HC.uncopied++ : (HC.shadowBytes += zC, dC.set(CC, {
        id: XC(CC),
        bytes: new Uint8Array(zC),
        width: ZC,
        height: QC,
        texelBytes: wC,
        missed: 0
      }))
    }

    function iz(CC, zC) {
      for (const ZC of ["deleteBuffer", "deleteTexture"]) Wz(CC, ZC, (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        return ZC[0] && Jz(ZC[0]), Fz(CC, this, ZC)
      }));
      Wz(CC, "shaderSource", (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        return ZC[0] && "string" === typeof ZC[1] && Mz.set(ZC[0], ZC[1]), Fz(CC, this, ZC)
      })), Wz(CC, "attachShader", (CC => function() {
        for (var zC, ZC = arguments.length, QC = new Array(ZC), wC = 0; wC < ZC; wC++) QC[wC] = arguments[wC];
        const bC = QC[0],
          nC = null !== (zC = gz.get(bC)) && void 0 !== zC ? zC : [];
        return nC.push(QC[1]), gz.set(bC, nC), Fz(CC, this, QC)
      })), Wz(CC, "linkProgram", (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        const wC = Fz(CC, this, ZC);
        return HC.inProbe || function(CC, zC) {
          var ZC, QC, wC;
          "undefined" !== typeof HTMLCanvasElement && CC.canvas instanceof HTMLCanvasElement && function(CC) {
            if (dz.has(CC)) return;
            dz.add(CC);
            for (const zC of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) CC.addEventListener(zC, (CC => {
              pz.lost < oz && (pz.lost++, sC(`${zC}${"statusMessage"in CC?`: ${String(CC.statusMessage)}`:""}`))
            }))
          }(CC.canvas);
          HC.context ??= CC;
          const bC = null !== (ZC = gz.get(zC)) && void 0 !== ZC ? ZC : [];
          let nC = "",
            fC = "";
          for (const FC of bC) {
            var oC;
            const CC = null !== (oC = Mz.get(FC)) && void 0 !== oC ? oC : "";
            /\bgl_Position\b/.test(CC) ? nC = CC : fC = CC
          }
          const qC = {
            id: XC(zC),
            name: null !== (QC = null === (wC = hC.exec(nC)) || void 0 === wC ? void 0 : wC[1]) && void 0 !== QC ? QC : null,
            gl: CC,
            vertex: nC,
            fragment: fC,
            terrain: ez(nC),
            checked: !1,
            firstDraw: !1
          };
          if (Sz.set(zC, qC), YC.push([zC, qC]), null !== qC.terrain) {
            const zC = bC.map((zC => {
              var ZC;
              return null !== (ZC = CC.getShaderInfoLog(zC)) && void 0 !== ZC ? ZC : ""
            })).filter((CC => "" !== CC.trim()));
            zC.length > 0 && TC(`program ${KC(qC)} (${qC.terrain}) shader logs:\n${aC(zC.join("\n"))}`)
          }
        }(this, ZC[0]), wC
      })), Wz(CC, "bufferData", (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        const wC = Fz(CC, this, ZC);
        if (!HC.inProbe) {
          const CC = xz(this, ZC[0]);
          if (CC) {
            var bC, nC, fC;
            const zC = "number" === typeof ZC[1] ? null : Az(ZC[1], null !== (bC = ZC[3]) && void 0 !== bC ? bC : 0, null !== (nC = ZC[4]) && void 0 !== nC ? nC : 0);
            var oC;
            if (Iz(CC, "number" === typeof ZC[1] ? ZC[1] : null !== (fC = null === zC || void 0 === zC ? void 0 : zC.length) && void 0 !== fC ? fC : 0), zC) null === (oC = dC.get(CC)) || void 0 === oC || oC.bytes.set(zC)
          }
        }
        return wC
      })), Wz(CC, "bufferSubData", (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        const wC = Fz(CC, this, ZC);
        if (!HC.inProbe) {
          var bC, nC;
          const CC = xz(this, ZC[0]),
            zC = CC ? dC.get(CC) : void 0,
            QC = Az(ZC[2], null !== (bC = ZC[3]) && void 0 !== bC ? bC : 0, null !== (nC = ZC[4]) && void 0 !== nC ? nC : 0);
          if (zC && QC) {
            const CC = ZC[1];
            zC.bytes.set(QC.subarray(0, Math.max(0, zC.bytes.length - CC)), CC), vz("buffer", zC, CC, QC.length)
          }
        }
        return wC
      })), zC && (Wz(CC, "copyBufferSubData", (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        const wC = Fz(CC, this, ZC);
        if (!HC.inProbe) {
          const [CC, zC, QC, wC, bC] = ZC, nC = xz(this, CC), fC = xz(this, zC), oC = nC ? dC.get(nC) : void 0, qC = fC ? dC.get(fC) : void 0;
          qC && (oC ? qC.bytes.set(oC.bytes.slice(QC, QC + bC), wC) : qC.missed++)
        }
        return wC
      })), Wz(CC, "texStorage2D", (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        const wC = Fz(CC, this, ZC),
          [, , bC, nC, fC] = ZC;
        if (!HC.inProbe && (bC === SC.RGBA32UI || bC === SC.RGBA16UI)) {
          const CC = this.getParameter(SC.TEXTURE_BINDING_2D),
            zC = bC === SC.RGBA32UI ? 16 : 8;
          CC && (mC.set(CC, zC), Iz(CC, nC * fC * zC, nC, fC, zC))
        }
        return wC
      })), Wz(CC, "texSubImage2D", (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        const wC = Fz(CC, this, ZC);
        return !HC.inProbe && ZC.length >= 9 && ZC[0] === SC.TEXTURE_2D && 0 === ZC[1] && function(CC, zC) {
          var ZC;
          const QC = CC.getParameter(SC.TEXTURE_BINDING_2D),
            wC = QC ? dC.get(QC) : void 0;
          if (!wC) return;
          const [, , bC, nC, fC, oC] = zC;
          let qC = Az(zC[8], null !== (ZC = zC[9]) && void 0 !== ZC ? ZC : 0);
          if (null === qC && "number" === typeof zC[8]) {
            const ZC = xz(CC, SC.PIXEL_UNPACK_BUFFER),
              QC = ZC ? dC.get(ZC) : void 0;
            qC = QC ? QC.bytes.subarray(zC[8]) : null
          }
          if (null === qC) return void wC.missed++;
          const FC = CC.getParameter(SC.UNPACK_ROW_LENGTH) || fC,
            WC = CC.getParameter(SC.UNPACK_SKIP_ROWS),
            NC = CC.getParameter(SC.UNPACK_SKIP_PIXELS),
            MC = wC.texelBytes;
          for (let gC = 0; gC < oC; gC++) {
            const CC = ((WC + gC) * FC + NC) * MC,
              zC = ((nC + gC) * wC.width + bC) * MC;
            wC.bytes.set(qC.subarray(CC, CC + fC * MC), zC)
          }
          vz("texture", wC, (nC * wC.width + bC) * MC, fC * oC * MC)
        }(this, ZC), wC
      })), Wz(CC, "copyTexSubImage2D", (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        const wC = ZC[0] === SC.TEXTURE_2D ? this.getParameter(SC.TEXTURE_BINDING_2D) : null,
          bC = wC ? dC.get(wC) : void 0;
        return bC && bC.missed++, Fz(CC, this, ZC)
      })));
      for (const ZC of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) Wz(CC, ZC, (CC => function() {
        for (var zC = arguments.length, QC = new Array(zC), wC = 0; wC < zC; wC++) QC[wC] = arguments[wC];
        const bC = Fz(CC, this, QC);
        return HC.inProbe || Kz(this, ZC, QC), bC
      }));
      Wz(CC, "getExtension", (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        const wC = Fz(CC, this, ZC);
        return wC && "object" === typeof wC && function(CC, zC, ZC) {
          const QC = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(zC in QC) || ZC.bloxdRenderDebug) return;
          ZC.bloxdRenderDebug = !0;
          for (const wC of QC[zC]) {
            const zC = ZC[wC];
            "function" === typeof zC && (ZC[wC] = function() {
              for (var QC = arguments.length, bC = new Array(QC), nC = 0; nC < QC; nC++) bC[nC] = arguments[nC];
              const fC = Fz(zC, ZC, bC);
              return HC.inProbe || Kz(CC, wC, bC), fC
            })
          }
        }(this, ZC[0], wC), wC
      }))
    }

    function vz(CC, zC, ZC, QC) {
      Gz[CC] += QC, Rz < 32 && zC.bytes.length >= 1 << 20 && (Rz++, TC(`upload ${CC} #${zC.id} +${ZC} ${QC} B`))
    }

    function ez(CC) {
      if (!CC.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(CC) || /in uvec3 _p2vs_location0\b/.test(CC) ? "inst" : "tex"
    }

    function hz(CC, zC, ZC) {
      var QC;
      if (ZC.checked) return;
      ZC.checked = !0;
      const wC = CC.getProgramParameter(zC, SC.LINK_STATUS),
        bC = (null !== (QC = CC.getProgramInfoLog(zC)) && void 0 !== QC ? QC : "").trim();
      var nC;
      null === ZC.terrain && wC || (sC(`program ${KC(ZC)} ${null!==(nC=ZC.terrain)&&void 0!==nC?nC:"other"} link ${wC?"ok":"FAILED"}${bC?`: ${aC(bC,300)}`:""}`), bC && TC(`program ${KC(ZC)} link log:\n${aC(bC)}`))
    }

    function Kz(CC, zC, ZC) {
      var QC;
      const wC = CC.getParameter(SC.CURRENT_PROGRAM),
        bC = wC ? Sz.get(wC) : void 0;
      if (!wC || !bC) return;
      const nC = null !== (QC = bC.terrain) && void 0 !== QC ? QC : "other",
        {
          np: fC,
          instances: oC
        } = function(CC, zC) {
          switch (CC) {
            case "drawArrays":
              return {
                np: [
                  [zC[1], zC[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                np: [
                  [zC[1], zC[2]]
                ], instances: zC[3]
              };
            case "drawElements":
              return {
                np: [
                  [0, zC[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                np: [
                  [0, zC[1]]
                ], instances: zC[4]
              };
            case "multiDrawArraysWEBGL": {
              const CC = zC[1],
                ZC = zC[3],
                QC = zC[2],
                wC = zC[4],
                bC = [];
              for (let nC = 0; nC < zC[5]; nC++) bC.push([CC[QC + nC], ZC[wC + nC]]);
              return {
                np: bC,
                instances: 1
              }
            }
            default:
              return {
                np: [], instances: 0
              }
          }
        }(zC, ZC),
        qC = "inst" === bC.terrain ? oC : fC.reduce(((CC, zC) => {
          let [, ZC] = zC;
          return CC + ZC
        }), 0) / 6;
      if (Pz[nC].draws++, Pz[nC].faces += qC, null === bC.terrain) return;
      if (HC.context = CC, !bC.firstDraw) {
        bC.firstDraw = !0, hz(CC, wC, bC), Yz || (Yz = !0, sC(function(CC) {
          var zC;
          const ZC = CC.getParameter(SC.DEPTH_FUNC),
            QC = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let wC = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in CC && CC.getParameter(SC.DRAW_FRAMEBUFFER_BINDING)) {
            const zC = CC;
            wC = zC.getFramebufferAttachmentParameter(SC.DRAW_FRAMEBUFFER, SC.DEPTH_ATTACHMENT, SC.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(zC.getFramebufferAttachmentParameter(SC.DRAW_FRAMEBUFFER,SC.DEPTH_ATTACHMENT,SC.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(zC.getFramebufferAttachmentParameter(SC.DRAW_FRAMEBUFFER,SC.DEPTH_ATTACHMENT,SC.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const bC = CC.getParameter(SC.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(zC=QC[ZC])&&void 0!==zC?zC:`0x${ZC.toString(16)}`} clear ${bC}${516===ZC||518===ZC?" (reverse-Z)":""}, samples ${String(CC.getParameter(SC.SAMPLES))}, ${wC}`
        }(CC)));
        const ZC = CC.getError();
        ZC !== SC.NO_ERROR && pz.gl < oz && (pz.gl++, sC(`GL error 0x${ZC.toString(16)} after program ${KC(bC)}'s first terrain draw (${zC})`))
      }
      const FC = HC.pendingCheck;
      null !== FC && (FC.terrainDraws++, FC.draws.length < qz && tC(CC, wC, bC, zC, fC, oC))
    }
    let Yz = !1;
    const dz = new WeakSet;
    var mz = ZC(4445),
      Hz = ZC(4640);
    const Ez = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let lz = !1;
    const Xz = new WeakSet,
      cz = new WeakMap,
      uz = new WeakMap,
      rz = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let sz = 0,
      Tz = !1,
      az = null,
      tz = {
        draws: 0,
        faces: 0
      };

    function Dz(CC) {
      const zC = globalThis[CC];
      return null === zC || void 0 === zC ? void 0 : zC.prototype
    }

    function jz(CC) {
      return CC && "function" === typeof CC[Symbol.iterator] ? [...CC].sort().join(" ") : ""
    }

    function yz(CC, zC) {
      const ZC = null !== CC && void 0 !== CC ? CC : {},
        QC = null !== zC && void 0 !== zC ? zC : Object.keys(Object.getPrototypeOf(ZC)).concat(Object.keys(ZC));
      return [...new Set(QC)].filter((CC => "number" === typeof ZC[CC])).map((CC => `${CC} ${String(ZC[CC])}`)).join(", ")
    }

    function Lz(CC, zC) {
      var ZC;
      const QC = null !== (ZC = zC.vertex) && void 0 !== ZC ? ZC : {};
      if (QC.module && Xz.has(QC.module)) {
        var wC;
        const ZC = String(null !== (wC = QC.entryPoint) && void 0 !== wC ? wC : "");
        if (ZC.startsWith("vs_packed") && cz.set(CC, ZC), !Tz) {
          var bC, nC, fC, oC, qC;
          Tz = !0;
          const CC = null !== (bC = zC.depthStencil) && void 0 !== bC ? bC : {},
            QC = null !== (nC = zC.multisample) && void 0 !== nC ? nC : {},
            wC = String(null !== (fC = CC.depthCompare) && void 0 !== fC ? fC : "");
          sC(`WebGPU terrain pipeline ${ZC}: depth ${String(null!==(oC=CC.format)&&void 0!==oC?oC:"none")} ${wC}${wC.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(qC=QC.count)&&void 0!==qC?qC:1)}`)
        }
      }
    }

    function Uz(CC) {
      Wz(CC, "setPipeline", (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        return uz.set(this, ZC[0]), Fz(CC, this, ZC)
      }));
      for (const zC of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) Wz(CC, zC, (CC => function() {
        const ZC = uz.get(this),
          QC = ZC ? cz.get(ZC) : void 0;
        for (var wC = arguments.length, bC = new Array(wC), nC = 0; nC < wC; nC++) bC[nC] = arguments[nC];
        return void 0 !== QC && Bz(zC, QC, bC), Fz(CC, this, bC)
      }))
    }

    function Bz(CC, zC, ZC) {
      var QC;
      (tz.draws++, "draw" === CC || "drawIndexed" === CC) && (tz.faces += ZC[0] * (null !== (QC = ZC[1]) && void 0 !== QC ? QC : 1) / 6);
      if (null !== az && az.length < qz) {
        const QC = ("draw" === CC ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === CC ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((zC, QC) => {
          const wC = CC.endsWith("Indirect") ? ZC[1] : ZC[QC];
          return `${zC} ${String(null!==wC&&void 0!==wC?wC:"instances"===zC?1:0)}`
        }));
        az.push(`  ${zC} ${CC} ${QC.join(" ")}`)
      }
    }

    function Oz() {
      if (lz || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      lz = !0, Wz(Dz("GPU"), "requestAdapter", (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        return Fz(CC, this, ZC).then((CC => {
          var zC;
          CC ? function(CC) {
            var zC;
            const ZC = null !== (zC = CC.info) && void 0 !== zC ? zC : {};
            sC(`WebGPU adapter ${["vendor","architecture","device","description"].map((CC=>{var zC;return`${CC} "${String(null!==(zC=ZC[CC])&&void 0!==zC?zC:"")}"`})).join(" ")}${CC.isFallbackAdapter?" (fallback)":""}`), sC(`WebGPU adapter features ${jz(CC.features)}`), sC(`WebGPU adapter limits ${yz(CC.limits,Ez)}`), TC(`WebGPU adapter all limits ${yz(CC.limits,null)}`)
          }(CC) : sC(`WebGPU requestAdapter(${JSON.stringify(null!==(zC=ZC[0])&&void 0!==zC?zC:{})}) gave none`);
          return CC
        }))
      })), Wz(Dz("GPUAdapter"), "requestDevice", (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        return Fz(CC, this, ZC).then((CC => (function(CC) {
          sC(`WebGPU device features ${jz(CC.features)}`), sC(`WebGPU device limits ${yz(CC.limits,Ez)}`), CC.addEventListener("uncapturederror", (CC => {
            if (rz.uncaptured < oz) {
              var zC, ZC, QC;
              rz.uncaptured++;
              const wC = CC.error;
              sC(`WebGPU uncaptured ${null!==(zC=null===wC||void 0===wC||null===(ZC=wC.constructor)||void 0===ZC?void 0:ZC.name)&&void 0!==zC?zC:"error"}: ${aC(String(null!==(QC=null===wC||void 0===wC?void 0:wC.message)&&void 0!==QC?QC:""),600)}`)
            }
          }));
          const zC = CC.lost;
          null === zC || void 0 === zC || zC.then((CC => {
            var zC;
            sC(`WebGPU device lost (${String(CC.reason)}): ${aC(String(null!==(zC=CC.message)&&void 0!==zC?zC:""),600)}`)
          }))
        }(CC), CC)), (CC => {
          throw sC(`WebGPU requestDevice failed: ${String(CC)}`), CC
        }))
      }));
      const CC = Dz("GPUDevice");
      Wz(CC, "createShaderModule", (CC => function() {
        for (var zC, ZC, QC = arguments.length, wC = new Array(QC), bC = 0; bC < QC; bC++) wC[bC] = arguments[bC];
        const nC = Fz(CC, this, wC);
        return function(CC, zC) {
          const ZC = zC.includes("decodeQuad");
          ZC && Xz.add(CC);
          const QC = CC.getCompilationInfo;
          null === QC || void 0 === QC || QC.call(CC).then((CC => {
            if (0 === CC.messages.length && !ZC) return;
            const zC = {};
            for (const ZC of CC.messages) {
              var QC;
              zC[String(ZC.type)] = (null !== (QC = zC[String(ZC.type)]) && void 0 !== QC ? QC : 0) + 1
            }
            const wC = CC.messages.map((CC => `${String(CC.type)} ${String(CC.lineNum)}:${String(CC.linePos)} ${String(CC.message)}`)).join("\n");
            rz.compile < oz && (rz.compile++, sC(`WebGPU ${ZC?"terrain ":""}shader module compiled: ${JSON.stringify(zC)}${wC?` first: ${aC(wC.split("\n")[0],300)}`:""}`)), wC && TC(`WebGPU shader module messages:\n${aC(wC)}`)
          }))
        }(nC, String(null !== (zC = (null !== (ZC = wC[0]) && void 0 !== ZC ? ZC : {}).code) && void 0 !== zC ? zC : "")), nC
      })), Wz(CC, "createRenderPipeline", (CC => function() {
        for (var zC, ZC = arguments.length, QC = new Array(ZC), wC = 0; wC < ZC; wC++) QC[wC] = arguments[wC];
        const bC = Fz(CC, this, QC);
        return Lz(bC, null !== (zC = QC[0]) && void 0 !== zC ? zC : {}), bC
      })), Wz(CC, "createRenderPipelineAsync", (CC => function() {
        for (var zC = arguments.length, ZC = new Array(zC), QC = 0; QC < zC; QC++) ZC[QC] = arguments[QC];
        return Fz(CC, this, ZC).then((CC => {
          var zC;
          return Lz(CC, null !== (zC = ZC[0]) && void 0 !== zC ? zC : {}), CC
        }), (CC => {
          var zC;
          throw function(CC, zC) {
            var ZC, QC, wC;
            if (rz.rejected >= oz) return;
            rz.rejected++;
            const {
              reason: bC,
              message: nC
            } = null !== zC && void 0 !== zC ? zC : {}, fC = String(null !== (ZC = (null !== (QC = CC.vertex) && void 0 !== QC ? QC : {}).entryPoint) && void 0 !== ZC ? ZC : "");
            sC(`WebGPU pipeline "${String(null!==(wC=CC.label)&&void 0!==wC?wC:"")}" ${fC} rejected (${String(null!==bC&&void 0!==bC?bC:"no reason")}): ${aC(String(null!==nC&&void 0!==nC?nC:zC),600)}`)
          }(null !== (zC = ZC[0]) && void 0 !== zC ? zC : {}, CC), CC
        }))
      })), Wz(Dz("GPUCanvasContext"), "configure", (CC => function() {
        for (var zC, ZC = arguments.length, QC = new Array(ZC), wC = 0; wC < ZC; wC++) QC[wC] = arguments[wC];
        const bC = null !== (zC = QC[0]) && void 0 !== zC ? zC : {};
        var nC, fC;
        sz++ < 3 && sC(`WebGPU canvas ${String(bC.format)} ${String(null!==(nC=bC.colorSpace)&&void 0!==nC?nC:"srgb")} alpha ${String(null!==(fC=bC.alphaMode)&&void 0!==fC?fC:"opaque")}`);
        return Fz(CC, this, QC)
      })), Uz(Dz("GPURenderPassEncoder")), Uz(Dz("GPURenderBundleEncoder"))
    }
    const kz = 1e4,
      Vz = 6e4,
      CZ = 5e3,
      zZ = 3e3,
      ZZ = 100;
    let QZ = null,
      wZ = !1,
      bZ = {
        ...mz.c
      },
      nZ = !1,
      fZ = null,
      oZ = 0,
      qZ = () => {};
    const FZ = new Promise((CC => {
      qZ = CC
    }));

    function WZ() {
      var CC;
      wZ || (wZ = !0, bZ = Object.assign(window.bloxdRenderDebug ??= {
        ...mz.c
      }, {
        faceCull: "0" === (0, bC.j)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (CC = (0, bC.j)("adrenoProbe")) && void 0 !== CC ? CC : ""
      }), sC("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), Nz || "undefined" === typeof window || (Nz = !0, "undefined" !== typeof WebGL2RenderingContext && iz(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && iz(WebGLRenderingContext.prototype, !1)), Oz(), (0, bC.b)("renderProbe", (() => {
        PZ("console")
      })), SZ(), setInterval(RZ, CZ))
    }

    function NZ(CC) {
      var zC, ZC;
      WZ(), QZ = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.backend) && void 0 !== zC ? zC : null;
      const QC = `, renderer param ${null!==(ZC=(0,bC.j)("renderer"))&&void 0!==ZC?ZC:"none"}, faceCull ${"0"===bZ.faceCull?"off (whole parts)":"on"}, adrenoProbe ${bZ.adrenoProbe||"none"}`;
      sC(`${(0,Hz.b)(CC)}${null===CC?"":QC}`)
    }

    function MZ() {
      const CC = performance.now(),
        zC = gZ(FZ, kz, Vz).then((zC => PZ(`${Math.round((performance.now()-CC)/1e3)} s after playable${zC?"":", no terrain drawn yet"}`)));
      (0, wC.d)(sC, (async () => {
        await zC, await fZ
      }))
    }
    async function gZ(CC, zC, ZC) {
      const wC = (0, QC.c)(ZC).then((() => !1));
      return await (0, QC.c)(zC), Promise.race([CC.then((() => !0)), wC])
    }

    function SZ() {
      requestAnimationFrame((() => {
        oZ++, SZ()
      }))
    }

    function pZ() {
      var CC, zC, ZC;
      if (nZ) return;
      (nZ = !0, sC(`renderer caps ${null!==(CC=bZ.caps)&&void 0!==CC?CC:"(not noted)"}; terrain fetch ${null!==(zC=bZ.fetch)&&void 0!==zC?zC:"(not noted)"}`), bZ.adrenoProbe) && sC(`adrenoProbe ${bZ.adrenoProbe} asked; in force (storage fetch only): ${null!==(ZC=bZ.probe)&&void 0!==ZC?ZC:"(not noted)"}`);
      const QC = HC.context;
      if (QC) {
        for (const CC of function(CC) {
            var zC;
            const ZC = [],
              QC = CC.getExtension("WEBGL_debug_renderer_info"),
              wC = QC ? CC.getParameter(QC.UNMASKED_VENDOR_WEBGL) : "(masked)",
              bC = QC ? CC.getParameter(QC.UNMASKED_RENDERER_WEBGL) : "(masked)";
            ZC.push(`GL ${String(CC.getParameter(CC.VERSION))} | ${String(CC.getParameter(CC.SHADING_LANGUAGE_VERSION))} | ${String(CC.getParameter(CC.VENDOR))} / ${String(CC.getParameter(CC.RENDERER))}`), ZC.push(`GL unmasked ${wC} / ${bC}`);
            const nC = [
              ["MAX_TEXTURE_SIZE", CC.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", CC.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", CC.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", CC.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", CC.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", CC.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", CC.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in CC && nC.push(["MAX_UNIFORM_BLOCK_SIZE", CC.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", CC.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", CC.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", CC.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), ZC.push(`GL limits ${nC.map((zC=>{let[ZC,QC]=zC;return`${ZC} ${String(CC.getParameter(QC))}`})).join(", ")}`);
            const fC = (zC, ZC) => {
              const QC = CC.getShaderPrecisionFormat(zC, CC.HIGH_FLOAT),
                wC = CC.getShaderPrecisionFormat(zC, CC.HIGH_INT);
              return `${ZC} highp float ${QC?`${QC.rangeMin}/${QC.rangeMax}/${QC.precision}`:"?"} int ${wC?`${wC.rangeMin}/${wC.rangeMax}/${wC.precision}`:"?"}`
            };
            ZC.push(`GL precision ${fC(CC.VERTEX_SHADER,"VS")}, ${fC(CC.FRAGMENT_SHADER,"FS")}`);
            const oC = CC.getContextAttributes();
            return ZC.push(`GL context ${JSON.stringify(oC)} drawingBuffer ${CC.drawingBufferWidth}x${CC.drawingBufferHeight}${"drawingBufferFormat"in CC?` format 0x${Number(CC.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in CC?` ${String(CC.drawingBufferColorSpace)}`:""}`), ZC.push(`GL extensions ${(null!==(zC=CC.getSupportedExtensions())&&void 0!==zC?zC:[]).join(" ")}`), ZC
          }(QC)) sC(CC);
        ! function() {
          if (!HC.context) return;
          let CC = 0,
            zC = 0;
          for (const [ZC, QC] of YC) !QC.gl.isContextLost() && QC.gl.isProgram(ZC) && (zC++, hz(QC.gl, ZC, QC), null !== QC.terrain && CC++);
          sC(`programs: ${zC} live of ${YC.length} linked, ${CC} packed terrain; CPU page copies ${Math.round(HC.shadowBytes/1048576)} MiB (${HC.uncopied} over budget)`)
        }()
      }
    }

    function PZ(CC) {
      return fZ ??= async function(CC) {
        pZ(), "webgpu" === QZ ? (GZ(), "1" === bZ.slotCheck && sC("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), bZ.slotCheck = "1", await
          function(CC) {
            if (null !== az) return Promise.resolve();
            const zC = [];
            return az = zC, new Promise((ZC => {
              setTimeout((() => {
                az = null, sC(`WebGPU draw ranges (${CC}): ${zC.length} terrain draws recorded in a second (first ${qz}; bundles replay without new ones)`);
                for (const CC of zC) sC(CC);
                ZC()
              }), 1e3)
            }))
          }(CC), await async function() {
            if (await (0, mz.i)(bZ, "slotCheck", ["1"], zZ, ZZ), "1" === bZ.slotCheck) return void sC(`slot check: no answer in ${zZ} ms (only the storage fetch has one; a later answer logs on its own)`);
            GZ()
          }()) : await nz(CC);
        sC(`check (${CC}) done: bloxdDebug.save() downloads it all`)
      }(CC).catch((zC => {
        sC(`check (${CC}) failed: ${String(zC)}`)
      })).finally((() => {
        fZ = null
      })), fZ
    }

    function GZ() {
      void 0 !== bZ.slotCheck && "1" !== bZ.slotCheck && (sC(bZ.slotCheck), delete bZ.slotCheck)
    }

    function RZ() {
      const CC = CC => oZ ? (CC / oZ).toFixed(1) : "0",
        zC = function() {
          const CC = tz;
          return tz = {
            draws: 0,
            faces: 0
          }, CC
        }(),
        ZC = function() {
          const CC = Pz;
          return Pz = {
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
          }, CC
        }(),
        QC = function() {
          const CC = Gz;
          return Gz = {
            buffer: 0,
            texture: 0
          }, CC
        }();
      GZ(), ("webgpu" === QZ ? zC.draws : ZC.inst.draws + ZC.tex.draws) > 0 && qZ();
      const wC = "webgpu" === QZ ? [`terrain ${CC(zC.draws)} draws ${CC(zC.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((CC => ZC[CC].draws > 0)).map((zC => `${zC} ${CC(ZC[zC].draws)} draws ${CC(ZC[zC].faces)} faces a frame`));
      sC(`${oZ} frames: ${wC.join(", ")||"no draws"}; uploaded ${Math.round(QC.buffer/1024)} KiB to buffers, ${Math.round(QC.texture/1024)} KiB to data textures`), oZ = 0
    }
  },
  4640: (CC, zC, ZC) => {
    function QC(CC) {
      if (null === CC) return "backend: none picked (no renderer build)";
      const zC = CC.adapter ? `${CC.adapter.vendor}/${CC.adapter.architecture}` : "none";
      return `backend ${CC.backend}: reason ${CC.reason}, source ${CC.source}, adapter ${zC}`
    }
    ZC.d(zC, {
      b: () => QC
    })
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);