export const id = 252;
export const ids = [252, 258, 262];
export const modules = {
  41506: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      e: () => pV
    });
    var JV = xV(39870),
      YV = xV(41279),
      UV = xV(41478),
      yV = {};
    class pV {
      constructor(VV) {
        this.attachedToElement = !1, this.attached = {}, this.camera = VV, this.checkInputs = () => {}
      }
      add(VV) {
        const eV = VV.getSimpleName();
        this.attached[eV] ? JV.b.Warn("camera input of type " + eV + " already exists on camera") : (this.attached[eV] = VV, VV.camera = this.camera, VV.checkInputs && (this.checkInputs = this._addCheckInputs(VV.checkInputs.bind(VV))), this.attachedToElement && VV.attachControl(this.noPreventDefault))
      }
      remove(VV) {
        for (const eV in this.attached) {
          const xV = this.attached[eV];
          if (xV === VV) return xV.detachControl(), xV.camera = null, delete this.attached[eV], void this.rebuildInputCheck()
        }
      }
      removeByType(VV) {
        for (const eV in this.attached) {
          const xV = this.attached[eV];
          xV.getClassName() === VV && (xV.detachControl(), xV.camera = null, delete this.attached[eV], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(VV) {
        const eV = this.checkInputs;
        return () => {
          eV(), VV()
        }
      }
      attachInput(VV) {
        this.attachedToElement && VV.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          VV = !UV.c.ForceAttachControlToAlwaysPreventDefault && VV, this.attachedToElement = !0, this.noPreventDefault = VV;
          for (const eV in this.attached) this.attached[eV].attachControl(VV)
        }
      }
      detachElement() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const eV in this.attached) this.attached[eV].detachControl(), VV && (this.attached[eV].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const VV in this.attached) {
          const eV = this.attached[VV];
          eV.checkInputs && (this.checkInputs = this._addCheckInputs(eV.checkInputs.bind(eV)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(VV) {
        const eV = {};
        for (const xV in this.attached) {
          const VV = this.attached[xV],
            JV = YV.b.Serialize(VV);
          eV[VV.getClassName()] = JV
        }
        VV.inputsmgr = eV
      }
      parse(VV) {
        const eV = VV.inputsmgr;
        if (eV) {
          this.clear();
          for (const VV in eV) {
            const xV = yV[VV];
            if (xV) {
              const JV = eV[VV],
                UV = YV.b.Parse((() => new xV), JV, null);
              this.add(UV)
            }
          }
        } else
          for (const xV in this.attached) {
            const eV = yV[this.attached[xV].getClassName()];
            if (eV) {
              const JV = YV.b.Parse((() => new eV), VV, null);
              this.remove(this.attached[xV]), this.add(JV)
            }
          }
      }
    }
  },
  41510: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV.c
    });
    var JV = xV(41512);
    (0, JV.g)()
  },
  41512: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV,
      g: () => vV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(38269),
      yV = xV(38389),
      pV = xV(41521),
      QV = xV(41486),
      nV = xV(38318);
    let wV = (() => {
        var VV;
        let eV, xV, QV = pV.d,
          nV = [],
          wV = [],
          ZV = [],
          vV = [];
        return VV = class extends QV {
          constructor(VV, eV, xV, YV) {
            super(VV, xV, YV), this.groundColor = (0, JV.l)(this, nV, new yV.d(0, 0, 0)), this.direction = ((0, JV.l)(this, wV), (0, JV.l)(this, ZV, void 0)), (0, JV.l)(this, vV), this.direction = eV || UV.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(VV) {
            return this.direction = UV.o.Normalize(VV.subtract(UV.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(VV, eV) {
            const xV = UV.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", xV.x, xV.y, xV.z, 0, eV), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), eV), this
          }
          transferToNodeMaterialEffect(VV, eV) {
            const xV = UV.o.Normalize(this.direction);
            return VV.setFloat3(eV, xV.x, xV.y, xV.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = UV.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return pV.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(VV, eV) {
            VV["HEMILIGHT" + eV] = !0
          }
        }, (() => {
          const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(QV[Symbol.metadata] ?? null) : void 0;
          eV = [(0, YV.o)()], xV = [(0, YV.I)()], (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "groundColor" in VV,
              get: VV => VV.groundColor,
              set: (VV, eV) => {
                VV.groundColor = eV
              }
            },
            metadata: UV
          }, nV, wV), (0, JV.i)(null, null, xV, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: VV => "direction" in VV,
              get: VV => VV.direction,
              set: (VV, eV) => {
                VV.direction = eV
              }
            },
            metadata: UV
          }, ZV, vV), UV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UV
          })
        })(), VV
      })(),
      ZV = !1;

    function vV() {
      ZV || (ZV = !0, QV.e.AddNodeConstructor("Light_Type_3", ((VV, eV) => () => new wV(VV, UV.o.Zero(), eV))), (0, nV.d)("BABYLON.HemisphericLight", wV))
    }
  },
  38387: (VV, eV, xV) => {
    xV.d(eV, {
      Color3: () => JV.d,
      c: () => JV.h
    });
    var JV = xV(38389);
    (0, JV.i)()
  },
  38908: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    var JV = xV(38917);
    class YV {
      static GetPlanes(VV) {
        const eV = [];
        for (let xV = 0; xV < 6; xV++) eV.push(new JV.d(0, 0, 0, 0));
        return YV.GetPlanesToRef(VV, eV), eV
      }
      static GetNearPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[2], eV.normal.y = xV[7] + xV[6], eV.normal.z = xV[11] + xV[10], eV.d = xV[15] + xV[14], eV.normalize()
      }
      static GetFarPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[2], eV.normal.y = xV[7] - xV[6], eV.normal.z = xV[11] - xV[10], eV.d = xV[15] - xV[14], eV.normalize()
      }
      static GetLeftPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[0], eV.normal.y = xV[7] + xV[4], eV.normal.z = xV[11] + xV[8], eV.d = xV[15] + xV[12], eV.normalize()
      }
      static GetRightPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[0], eV.normal.y = xV[7] - xV[4], eV.normal.z = xV[11] - xV[8], eV.d = xV[15] - xV[12], eV.normalize()
      }
      static GetTopPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[1], eV.normal.y = xV[7] - xV[5], eV.normal.z = xV[11] - xV[9], eV.d = xV[15] - xV[13], eV.normalize()
      }
      static GetBottomPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[1], eV.normal.y = xV[7] + xV[5], eV.normal.z = xV[11] + xV[9], eV.d = xV[15] + xV[13], eV.normalize()
      }
      static GetPlanesToRef(VV, eV) {
        YV.GetNearPlaneToRef(VV, eV[0]), YV.GetFarPlaneToRef(VV, eV[1]), YV.GetLeftPlaneToRef(VV, eV[2]), YV.GetRightPlaneToRef(VV, eV[3]), YV.GetTopPlaneToRef(VV, eV[4]), YV.GetBottomPlaneToRef(VV, eV[5])
      }
      static IsPointInFrustum(VV, eV) {
        for (let xV = 0; xV < 6; xV++)
          if (eV[xV].dotCoordinate(VV) < 0) return !1;
        return !0
      }
    }
  },
  38917: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(38269);
    class YV {
      constructor(VV, eV, xV, YV) {
        this.normal = new JV.o(VV, eV, xV), this.d = YV
      }
      WYV() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new YV(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let VV = this.normal.getHashCode();
        return VV = 397 * VV ^ this.d, VV
      }
      normalize() {
        const VV = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let eV = 0;
        return 0 !== VV && (eV = 1 / VV), this.normal.x *= eV, this.normal.y *= eV, this.normal.z *= eV, this.d *= eV, this
      }
      transform(VV) {
        const eV = YV._TmpMatrix;
        VV.invertToRef(eV);
        const xV = eV.m,
          JV = this.normal.x,
          UV = this.normal.y,
          yV = this.normal.z,
          pV = this.d,
          QV = JV * xV[0] + UV * xV[1] + yV * xV[2] + pV * xV[3],
          nV = JV * xV[4] + UV * xV[5] + yV * xV[6] + pV * xV[7],
          wV = JV * xV[8] + UV * xV[9] + yV * xV[10] + pV * xV[11],
          ZV = JV * xV[12] + UV * xV[13] + yV * xV[14] + pV * xV[15];
        return new YV(QV, nV, wV, ZV)
      }
      dotCoordinate(VV) {
        return this.normal.x * VV.x + this.normal.y * VV.y + this.normal.z * VV.z + this.d
      }
      copyFromPoints(VV, eV, xV) {
        const JV = eV.x - VV.x,
          YV = eV.y - VV.y,
          UV = eV.z - VV.z,
          yV = xV.x - VV.x,
          pV = xV.y - VV.y,
          QV = xV.z - VV.z,
          nV = YV * QV - UV * pV,
          wV = UV * yV - JV * QV,
          ZV = JV * pV - YV * yV,
          vV = Math.sqrt(nV * nV + wV * wV + ZV * ZV);
        let rV;
        return rV = 0 !== vV ? 1 / vV : 0, this.normal.x = nV * rV, this.normal.y = wV * rV, this.normal.z = ZV * rV, this.d = -(this.normal.x * VV.x + this.normal.y * VV.y + this.normal.z * VV.z), this
      }
      isFrontFacingTo(VV, eV) {
        return JV.o.Dot(this.normal, VV) <= eV
      }
      signedDistanceTo(VV) {
        return JV.o.Dot(VV, this.normal) + this.d
      }
      static FromArray(VV) {
        return new YV(VV[0], VV[1], VV[2], VV[3])
      }
      static FromPoints(VV, eV, xV) {
        const JV = new YV(0, 0, 0, 0);
        return JV.copyFromPoints(VV, eV, xV), JV
      }
      static FromPositionAndNormal(VV, eV) {
        const xV = new YV(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(VV, eV, xV)
      }
      static FromPositionAndNormalToRef(VV, eV, xV) {
        return xV.normal.iG(eV), xV.normal.normalize(), xV.d = -VV.dot(xV.normal), xV
      }
      static SignedDistanceToPlaneFromPositionAndNormal(VV, eV, xV) {
        const YV = -(eV.x * VV.x + eV.y * VV.y + eV.z * VV.z);
        return JV.o.Dot(xV, eV) + YV
      }
    }
    YV._TmpMatrix = JV.d.Identity()
  },
  38263: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      Matrix: () => JV.d,
      Quaternion: () => JV.h,
      RegisterMathVector: () => JV.j,
      TmpVectors: () => JV.l,
      Vector2: () => JV.n,
      Ik: () => JV.o,
      Vector4: () => JV.q
    });
    var JV = xV(38269);
    (0, JV.j)()
  },
  39240: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    class JV {
      constructor(VV, eV, xV, JV) {
        this.x = VV, this.y = eV, this.width = xV, this.height = JV
      }
      toGlobal(VV, eV) {
        return new JV(this.x * VV, this.y * eV, this.width * VV, this.height * eV)
      }
      toGlobalToRef(VV, eV, xV) {
        return xV.x = this.x * VV, xV.y = this.y * eV, xV.width = this.width * VV, xV.height = this.height * eV, this
      }
      clone() {
        return new JV(this.x, this.y, this.width, this.height)
      }
    }
  },
  41660: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => nV
    });
    var JV = xV(38269),
      YV = xV(38389),
      UV = xV(41664),
      yV = xV(41674),
      pV = xV(41688);

    function QV(VV) {
      let eV = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const xV = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        UV = [],
        QV = VV.width || VV.size || 1,
        nV = VV.height || VV.size || 1,
        wV = VV.depth || VV.size || 1,
        ZV = VV.wrap || !1;
      let vV = void 0 === VV.topBaseAt ? 1 : VV.topBaseAt,
        rV = void 0 === VV.bottomBaseAt ? 0 : VV.bottomBaseAt;
      vV = (vV + 4) % 4, rV = (rV + 4) % 4;
      let kV = [2, 0, 3, 1][vV],
        bV = [2, 0, 1, 3][rV],
        EV = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (ZV) {
        eV = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], EV = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let VV = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          xV = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const JV = [17, 18, 19, 16],
          YV = [22, 23, 20, 21];
        for (; kV > 0;) VV.unshift(VV.pop()), JV.unshift(JV.pop()), kV--;
        for (; bV > 0;) xV.unshift(xV.pop()), YV.unshift(YV.pop()), bV--;
        VV = VV.flat(), xV = xV.flat(), EV = EV.concat(VV).concat(xV), eV.push(JV[0], JV[2], JV[3], JV[0], JV[1], JV[2]), eV.push(YV[0], YV[2], YV[3], YV[0], YV[1], YV[2])
      }
      const BV = [QV / 2, nV / 2, wV / 2],
        jV = EV.reduce(((VV, eV, xV) => VV.concat(eV * BV[xV % 3])), []),
        qV = 0 === VV.sideOrientation ? 0 : VV.sideOrientation || yV.c.DEFAULTSIDE,
        tV = VV.faceUV || new Array(6),
        FV = VV.faceColors,
        TV = [];
      for (let yV = 0; yV < 6; yV++) void 0 === tV[yV] && (tV[yV] = new JV.q(0, 0, 1, 1)), FV && void 0 === FV[yV] && (FV[yV] = new YV.h(1, 1, 1, 1));
      for (let JV = 0; JV < 6; JV++)
        if (UV.push(tV[JV].z, pV.d ? 1 - tV[JV].w : tV[JV].w), UV.push(tV[JV].x, pV.d ? 1 - tV[JV].w : tV[JV].w), UV.push(tV[JV].x, pV.d ? 1 - tV[JV].y : tV[JV].y), UV.push(tV[JV].z, pV.d ? 1 - tV[JV].y : tV[JV].y), FV)
          for (let VV = 0; VV < 4; VV++) TV.push(FV[JV].r, FV[JV].g, FV[JV].b, FV[JV].a);
      yV.c._ComputeSides(qV, jV, eV, xV, UV, VV.frontUVs, VV.backUVs);
      const PV = new yV.c;
      if (PV.indices = eV, PV.positions = jV, PV.normals = xV, PV.uvs = UV, FV) {
        const VV = qV === yV.c.DOUBLESIDE ? TV.concat(TV) : TV;
        PV.colors = VV
      }
      return PV
    }

    function nV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const JV = new UV.b(VV, xV);
      eV.sideOrientation = UV.b._GetDefaultSideOrientation(eV.sideOrientation), JV._originalBuilderSideOrientation = eV.sideOrientation;
      return QV(eV).applyToMesh(JV, eV.updatable), JV
    }
    let wV = !1;
    wV || (wV = !0, yV.c.CreateBox = QV, UV.b.CreateBox = function(VV, eV) {
      return nV(VV, {
        size: eV,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  41706: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => ZV
    });
    var JV = xV(38269),
      YV = xV(41664),
      UV = xV(41674),
      yV = xV(41713),
      pV = xV(41394),
      QV = xV(39870);

    function nV(VV) {
      const eV = [],
        xV = [],
        JV = VV.lines,
        YV = VV.colors,
        yV = [];
      let pV = 0;
      for (let UV = 0; UV < JV.length; UV++) {
        const VV = JV[UV];
        for (let JV = 0; JV < VV.length; JV++) {
          const {
            x: QV,
            y: nV,
            z: wV
          } = VV[JV];
          if (xV.push(QV, nV, wV), YV) {
            const VV = YV[UV],
              {
                r: eV,
                g: xV,
                b: pV,
                a: QV
              } = VV[JV];
            yV.push(eV, xV, pV, QV)
          }
          JV > 0 && (eV.push(pV - 1), eV.push(pV)), pV++
        }
      }
      const QV = new UV.c;
      return QV.indices = eV, QV.positions = xV, YV && (QV.colors = yV), QV
    }

    function wV(VV) {
      const eV = VV.dashSize || 3,
        xV = VV.gapSize || 1,
        YV = VV.dashNb || 200,
        yV = VV.points,
        pV = [],
        QV = [],
        nV = JV.o.Zero();
      let wV, ZV, vV, rV = 0,
        kV = 0;
      for (vV = 0; vV < yV.length - 1; vV++) yV[vV + 1].subtractToRef(yV[vV], nV), rV += nV.length();
      const bV = rV / YV,
        EV = eV * bV / (eV + xV);
      for (vV = 0; vV < yV.length - 1; vV++) {
        yV[vV + 1].subtractToRef(yV[vV], nV), wV = Math.floor(nV.length() / bV), nV.normalize();
        for (let VV = 0; VV < wV; VV++) ZV = bV * VV, pV.push(yV[vV].x + ZV * nV.x, yV[vV].y + ZV * nV.y, yV[vV].z + ZV * nV.z), pV.push(yV[vV].x + (ZV + EV) * nV.x, yV[vV].y + (ZV + EV) * nV.y, yV[vV].z + (ZV + EV) * nV.z), QV.push(kV, kV + 1), kV += 2
      }
      const BV = new UV.c;
      return BV.positions = pV, BV.indices = QV, BV
    }

    function ZV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const JV = eV.instance,
        YV = eV.lines,
        UV = eV.colors;
      if (JV) {
        const VV = JV.getVerticesData(pV.j.PositionKind);
        let eV, xV;
        UV && (eV = JV.getVerticesData(pV.j.ColorKind));
        let yV = 0,
          QV = 0;
        for (let JV = 0; JV < YV.length; JV++) {
          const pV = YV[JV];
          for (let YV = 0; YV < pV.length; YV++) VV[yV] = pV[YV].x, VV[yV + 1] = pV[YV].y, VV[yV + 2] = pV[YV].z, UV && eV && (xV = UV[JV], eV[QV] = xV[YV].r, eV[QV + 1] = xV[YV].g, eV[QV + 2] = xV[YV].b, eV[QV + 3] = xV[YV].a, QV += 4), yV += 3
        }
        return JV.updateVerticesData(pV.j.PositionKind, VV, !1, !1), UV && eV && JV.updateVerticesData(pV.j.ColorKind, eV, !1, !1), JV.refreshBoundingInfo(), JV
      }
      const QV = !!UV,
        wV = new yV.e(VV, xV, null, void 0, void 0, QV, eV.useVertexAlpha, eV.material);
      return nV(eV).applyToMesh(wV, eV.updatable), wV
    }

    function vV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const JV = eV.colors ? [eV.colors] : null;
      return ZV(VV, {
        lines: [eV.points],
        updatable: eV.updatable,
        instance: eV.instance,
        colors: JV,
        useVertexAlpha: eV.useVertexAlpha,
        material: eV.material
      }, xV)
    }

    function rV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const UV = eV.points,
        pV = eV.instance,
        nV = eV.gapSize || 1,
        ZV = eV.dashSize || 3;
      if (pV) {
        const VV = VV => {
          const eV = JV.o.Zero(),
            xV = VV.length / 6;
          let YV, yV, QV, nV, wV = 0,
            ZV = 0;
          for (QV = 0; QV < UV.length - 1; QV++) UV[QV + 1].subtractToRef(UV[QV], eV), wV += eV.length();
          const vV = wV / xV,
            rV = pV._creationDataStorage.dashSize,
            kV = rV * vV / (rV + pV._creationDataStorage.gapSize);
          for (QV = 0; QV < UV.length - 1; QV++)
            for (UV[QV + 1].subtractToRef(UV[QV], eV), YV = Math.floor(eV.length() / vV), eV.normalize(), nV = 0; nV < YV && ZV < VV.length;) yV = vV * nV, VV[ZV] = UV[QV].x + yV * eV.x, VV[ZV + 1] = UV[QV].y + yV * eV.y, VV[ZV + 2] = UV[QV].z + yV * eV.z, VV[ZV + 3] = UV[QV].x + (yV + kV) * eV.x, VV[ZV + 4] = UV[QV].y + (yV + kV) * eV.y, VV[ZV + 5] = UV[QV].z + (yV + kV) * eV.z, ZV += 6, nV++;
          for (; ZV < VV.length;) VV[ZV] = UV[QV].x, VV[ZV + 1] = UV[QV].y, VV[ZV + 2] = UV[QV].z, ZV += 3
        };
        return (eV.dashNb || eV.dashSize || eV.gapSize || eV.useVertexAlpha || eV.material) && QV.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), pV.updateMeshPositions(VV, !1), pV
      }
      const vV = new yV.e(VV, xV, null, void 0, void 0, void 0, eV.useVertexAlpha, eV.material);
      return wV(eV).applyToMesh(vV, eV.updatable), vV._creationDataStorage = new YV.h, vV._creationDataStorage.dashSize = ZV, vV._creationDataStorage.gapSize = nV, vV
    }
    let kV = !1;
    kV || (kV = !0, UV.c.CreateLineSystem = nV, UV.c.CreateDashedLines = wV, YV.b.CreateLines = function(VV, eV) {
      return vV(VV, {
        points: eV,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, YV.b.CreateDashedLines = function(VV, eV, xV, JV, YV) {
      return rV(VV, {
        points: eV,
        dashSize: xV,
        gapSize: JV,
        dashNb: YV,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  41713: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => vV,
      f: () => bV
    });
    var JV, YV, UV = xV(38389),
      yV = xV(41394),
      pV = xV(41664),
      QV = xV(41720),
      nV = xV(41553),
      wV = xV(41729),
      ZV = xV(41138);
    class vV extends pV.b {
      _isShaderMaterial(VV) {
        return !!VV && "ShaderMaterial" === VV.getClassName()
      }
      constructor(VV) {
        let eV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          JV = arguments.length > 5 ? arguments[5] : void 0,
          YV = arguments.length > 6 ? arguments[6] : void 0,
          pV = arguments.length > 7 ? arguments[7] : void 0;
        super(VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, eV, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = JV, this.useVertexAlpha = YV, this.color = new UV.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, eV && (this.color = eV.color.clone(), this.alpha = eV.alpha, this.useVertexColor = eV.useVertexColor, this.useVertexAlpha = eV.useVertexAlpha), this.intersectionThreshold = .1;
        const QV = {
          attributes: [yV.j.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? QV.defines.push("#define VERTEXALPHA") : QV.needAlphaBlending = !1, this.useVertexColor ? (QV.defines.push("#define VERTEXCOLOR"), QV.attributes.push(yV.j.ColorKind)) : (QV.uniforms.push("color"), this._color4 = new UV.h), pV) this.material = pV;
        else {
          this.dD().sk().isWebGPU && !vV.ForceGLSL && (this._shaderLanguage = 1), QV.shaderLanguage = this._shaderLanguage, QV.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([xV.e(653).then((() => xV(45441))), xV.e(659).then((() => xV(45448)))]) : await Promise.all([xV.e(635).then((() => xV(45456))), xV.e(641).then((() => xV(45458)))])
          };
          const VV = new wV.n("colorShader", this.dD(), "color", QV, !1);
          VV.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(VV)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(VV) {
        const eV = this.material;
        if (eV === VV) return;
        const xV = eV && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(VV), xV && eV?.dispose()
      }
      _setInternalMaterial(VV) {
        this._setMaterial(VV), this.material && (this.material.fillMode = nV.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(VV) {}
      _bind(VV, eV) {
        if (!this._geometry) return this;
        const xV = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(eV, xV) : this._geometry._bind(eV, xV, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: VV,
            g: eV,
            b: xV
          } = this.color;
          this._color4.set(VV, eV, xV, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(VV, eV, xV) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const JV = this.dD().sk();
        return this._unIndexed ? JV.drawArraysType(nV.e.LineListDrawMode, VV.verticesStart, VV.verticesCount, xV) : JV.drawElementsType(nV.e.LineListDrawMode, VV.indexStart, VV.indexCount, xV), this
      }
      dispose(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || eV) && this.material?.dispose(!1, !1, !0), super.dispose(VV)
      }
      clone(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        if (eV && void 0 === eV._addToSceneRootNodes) {
          const xV = eV;
          return xV.source = this, new vV(VV, this.dD(), xV.parent, xV.source, xV.doNotCloneChildren)
        }
        return new vV(VV, this.dD(), eV, this, xV)
      }
      createInstance(VV) {
        const eV = new rV(VV, this);
        if (this.sC) {
          eV.sC = {};
          for (const VV in this.sC) eV.sC[VV] = this.sC[VV]
        }
        return eV
      }
      serialize(VV) {
        super.serialize(VV), VV.color = this.color.WYV(), VV.alpha = this.alpha
      }
      static Parse(VV, eV) {
        const xV = new vV(VV.name, eV);
        return xV.color = UV.d.FromArray(VV.color), xV.alpha = VV.alpha, xV
      }
    }
    vV.ForceGLSL = !1;
    class rV extends QV.c {
      constructor(VV, eV) {
        super(VV, eV), this.intersectionThreshold = eV.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let kV = !1;

    function bV() {
      kV || (kV = !0, pV.b._LinesMeshParser = (VV, eV) => vV.Parse(VV, eV))
    }(JV = vV.prototype).enableEdgesRendering ?? (JV.enableEdgesRendering = (0, ZV.j)("LinesMesh", "enableEdgesRendering")), (YV = rV.prototype).enableEdgesRendering ?? (YV.enableEdgesRendering = (0, ZV.j)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  39867: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(39870);
    const YV = (VV, eV, xV) => VV ? VV.getClassName && "Mesh" === VV.getClassName() ? null : !VV.getClassName || "SubMesh" !== VV.getClassName() && "PhysicsBody" !== VV.getClassName() ? VV.clone ? VV.clone() : Array.isArray(VV) ? VV.slice() : xV && "object" === typeof VV ? {
      ...VV
    } : null : VV.clone(eV) : null;
    class UV {
      static DeepCopy(VV, eV, xV, UV) {
        let yV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pV = function(VV) {
          const eV = [];
          do {
            const xV = Object.getOwnPropertyNames(VV);
            for (const VV of xV) - 1 === eV.indexOf(VV) && eV.push(VV)
          } while (VV = Object.getPrototypeOf(VV));
          return eV
        }(VV);
        for (const nV of pV) {
          if ("_" === nV[0] && (!UV || -1 === UV.indexOf(nV))) continue;
          if (nV.endsWith("Observable")) continue;
          if (xV && -1 !== xV.indexOf(nV)) continue;
          const pV = VV[nV],
            wV = typeof pV;
          if ("function" !== wV) try {
            if ("object" === wV)
              if (pV instanceof Uint8Array) eV[nV] = Uint8Array.from(pV);
              else if (pV instanceof Array) {
              if (eV[nV] = [], pV.length > 0)
                if ("object" == typeof pV[0])
                  for (let VV = 0; VV < pV.length; VV++) {
                    const xV = YV(pV[VV], eV, yV); - 1 === eV[nV].indexOf(xV) && eV[nV].push(xV)
                  } else eV[nV] = pV.slice(0)
            } else eV[nV] = YV(pV, eV, yV);
            else eV[nV] = pV
          } catch (QV) {
            JV.b.Warn(QV.message)
          }
        }
      }
    }
  },
  39058: (VV, eV, xV) => {
    function JV() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (VV => {
        const eV = 16 * Math.random() | 0;
        return ("x" === VV ? eV : 3 & eV | 8).toString(16)
      }))
    }
    xV.d(eV, {
      d: () => JV
    })
  },
  39870: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      static _CheckLimit(VV, eV) {
        let xV = JV._LogLimitOutputs[VV];
        return xV ? xV.current++ : (xV = {
          limit: eV,
          current: 1
        }, JV._LogLimitOutputs[VV] = xV), xV.current <= xV.limit
      }
      static _GenerateLimitMessage(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const xV = JV._LogLimitOutputs[VV];
        if (!xV || !JV.MessageLimitReached) return;
        const YV = this._Levels[eV];
        xV.current === xV.limit && JV[YV.name](JV.MessageLimitReached.replace(/%LIMIT%/g, "" + xV.limit).replace(/%TYPE%/g, YV.name ?? ""))
      }
      static _AddLogEntry(VV) {
        JV._LogCache = VV + JV._LogCache, JV.OnNewCacheEntry && JV.OnNewCacheEntry(VV)
      }
      static _FormatMessage(VV) {
        const eV = VV => VV < 10 ? "0" + VV : "" + VV,
          xV = new Date;
        return "[" + eV(xV.getHours()) + ":" + eV(xV.getMinutes()) + ":" + eV(xV.getSeconds()) + "]: " + VV
      }
      static _LogDisabled(VV, eV) {}
      static _LogEnabled() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const YV = Array.isArray(eV) ? eV[0] : eV;
        if (void 0 !== xV && !JV._CheckLimit(YV, xV)) return;
        const UV = JV._FormatMessage(YV),
          yV = this._Levels[VV],
          pV = Array.isArray(eV) ? eV.slice(1) : [];
        yV.logFunc && yV.logFunc("BJS - " + UV, ...pV);
        const QV = `<div style='color:${yV.color}'>${UV}</div><br>`;
        JV._AddLogEntry(QV), JV._GenerateLimitMessage(YV, VV)
      }
      static get LogCache() {
        return JV._LogCache
      }
      static ClearLogCache() {
        JV._LogCache = "", JV._LogLimitOutputs = {}, JV.errorsCount = 0
      }
      static set LogLevels(VV) {
        JV.Log = JV._LogDisabled, JV.Warn = JV._LogDisabled, JV.Error = JV._LogDisabled;
        const eV = [JV.MessageLogLevel, JV.WarningLogLevel, JV.ErrorLogLevel];
        for (const xV of eV)
          if ((VV & xV) === xV) {
            const VV = this._Levels[xV];
            JV[VV.name] = JV._LogEnabled.bind(JV, xV)
          }
      }
    }
    JV.NoneLogLevel = 0, JV.MessageLogLevel = 1, JV.WarningLogLevel = 2, JV.ErrorLogLevel = 4, JV.AllLogLevel = 7, JV.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", JV._LogCache = "", JV._LogLimitOutputs = {}, JV._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], JV.errorsCount = 0, JV.Log = JV._LogEnabled.bind(JV, JV.MessageLogLevel), JV.Warn = JV._LogEnabled.bind(JV, JV.WarningLogLevel), JV.Error = JV._LogEnabled.bind(JV, JV.ErrorLogLevel)
  },
  41331: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV.e
    });
    var JV = xV(41337);
    (0, JV.d)()
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);