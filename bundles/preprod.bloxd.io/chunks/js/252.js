export const id = 252;
export const ids = [252, 258, 262];
export const modules = {
  41354: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM,
      e: () => PM
    });
    var OM = iM(39711),
      SM = iM(41121),
      jM = iM(41323),
      aM = {};
    class PM {
      constructor(MM) {
        this.attachedToElement = !1, this.attached = {}, this.camera = MM, this.checkInputs = () => {}
      }
      add(MM) {
        const rM = MM.getSimpleName();
        this.attached[rM] ? OM.e.Warn("camera input of type " + rM + " already exists on camera") : (this.attached[rM] = MM, MM.camera = this.camera, MM.checkInputs && (this.checkInputs = this._addCheckInputs(MM.checkInputs.bind(MM))), this.attachedToElement && MM.attachControl(this.noPreventDefault))
      }
      remove(MM) {
        for (const rM in this.attached) {
          const iM = this.attached[rM];
          if (iM === MM) return iM.detachControl(), iM.camera = null, delete this.attached[rM], void this.rebuildInputCheck()
        }
      }
      removeByType(MM) {
        for (const rM in this.attached) {
          const iM = this.attached[rM];
          iM.getClassName() === MM && (iM.detachControl(), iM.camera = null, delete this.attached[rM], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(MM) {
        const rM = this.checkInputs;
        return () => {
          rM(), MM()
        }
      }
      attachInput(MM) {
        this.attachedToElement && MM.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          MM = !jM.b.ForceAttachControlToAlwaysPreventDefault && MM, this.attachedToElement = !0, this.noPreventDefault = MM;
          for (const rM in this.attached) this.attached[rM].attachControl(MM)
        }
      }
      detachElement() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const rM in this.attached) this.attached[rM].detachControl(), MM && (this.attached[rM].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const MM in this.attached) {
          const rM = this.attached[MM];
          rM.checkInputs && (this.checkInputs = this._addCheckInputs(rM.checkInputs.bind(rM)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(MM) {
        const rM = {};
        for (const iM in this.attached) {
          const MM = this.attached[iM],
            OM = SM.b.Serialize(MM);
          rM[MM.getClassName()] = OM
        }
        MM.inputsmgr = rM
      }
      parse(MM) {
        const rM = MM.inputsmgr;
        if (rM) {
          this.clear();
          for (const MM in rM) {
            const iM = aM[MM];
            if (iM) {
              const OM = rM[MM],
                jM = SM.b.Parse((() => new iM), OM, null);
              this.add(jM)
            }
          }
        } else
          for (const iM in this.attached) {
            const rM = aM[this.attached[iM].getClassName()];
            if (rM) {
              const OM = SM.b.Parse((() => new rM), MM, null);
              this.remove(this.attached[iM]), this.add(OM)
            }
          }
      }
    }
  },
  41358: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM.d
    });
    var OM = iM(41362);
    (0, OM.e)()
  },
  41362: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      e: () => mM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(38040),
      aM = iM(38173),
      PM = iM(41366),
      nM = iM(41328),
      QM = iM(38085);
    let zM = (() => {
        var MM;
        let rM, iM, nM = PM.d,
          QM = [],
          zM = [],
          LM = [],
          mM = [];
        return MM = class extends nM {
          constructor(MM, rM, iM, SM) {
            super(MM, iM, SM), this.groundColor = (0, OM.m)(this, QM, new aM.d(0, 0, 0)), this.direction = ((0, OM.m)(this, zM), (0, OM.m)(this, LM, void 0)), (0, OM.m)(this, mM), this.direction = rM || jM.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(MM) {
            return this.direction = jM.q.Normalize(MM.subtract(jM.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(MM, rM) {
            const iM = jM.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", iM.x, iM.y, iM.z, 0, rM), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), rM), this
          }
          transferToNodeMaterialEffect(MM, rM) {
            const iM = jM.q.Normalize(this.direction);
            return MM.setFloat3(rM, iM.x, iM.y, iM.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = jM.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return PM.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(MM, rM) {
            MM["HEMILIGHT" + rM] = !0
          }
        }, (() => {
          const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(nM[Symbol.metadata] ?? null) : void 0;
          rM = [(0, SM.r)()], iM = [(0, SM.J)()], (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "groundColor" in MM,
              get: MM => MM.groundColor,
              set: (MM, rM) => {
                MM.groundColor = rM
              }
            },
            metadata: jM
          }, QM, zM), (0, OM.i)(null, null, iM, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: MM => "direction" in MM,
              get: MM => MM.direction,
              set: (MM, rM) => {
                MM.direction = rM
              }
            },
            metadata: jM
          }, LM, mM), jM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jM
          })
        })(), MM
      })(),
      LM = !1;

    function mM() {
      LM || (LM = !0, nM.d.AddNodeConstructor("Light_Type_3", ((MM, rM) => () => new zM(MM, jM.q.Zero(), rM))), (0, QM.e)("BABYLON.HemisphericLight", zM))
    }
  },
  38167: (MM, rM, iM) => {
    iM.d(rM, {
      Color3: () => OM.d,
      d: () => OM.h
    });
    var OM = iM(38173);
    (0, OM.i)()
  },
  38740: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(38744);
    class SM {
      static GetPlanes(MM) {
        const rM = [];
        for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
        return SM.GetPlanesToRef(MM, rM), rM
      }
      static GetNearPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
      }
      static GetFarPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
      }
      static GetLeftPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[0], rM.normal.y = iM[7] + iM[4], rM.normal.z = iM[11] + iM[8], rM.d = iM[15] + iM[12], rM.normalize()
      }
      static GetRightPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[0], rM.normal.y = iM[7] - iM[4], rM.normal.z = iM[11] - iM[8], rM.d = iM[15] - iM[12], rM.normalize()
      }
      static GetTopPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[1], rM.normal.y = iM[7] - iM[5], rM.normal.z = iM[11] - iM[9], rM.d = iM[15] - iM[13], rM.normalize()
      }
      static GetBottomPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[1], rM.normal.y = iM[7] + iM[5], rM.normal.z = iM[11] + iM[9], rM.d = iM[15] + iM[13], rM.normalize()
      }
      static GetPlanesToRef(MM, rM) {
        SM.GetNearPlaneToRef(MM, rM[0]), SM.GetFarPlaneToRef(MM, rM[1]), SM.GetLeftPlaneToRef(MM, rM[2]), SM.GetRightPlaneToRef(MM, rM[3]), SM.GetTopPlaneToRef(MM, rM[4]), SM.GetBottomPlaneToRef(MM, rM[5])
      }
      static IsPointInFrustum(MM, rM) {
        for (let iM = 0; iM < 6; iM++)
          if (rM[iM].dotCoordinate(MM) < 0) return !1;
        return !0
      }
    }
  },
  38744: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(38040);
    class SM {
      constructor(MM, rM, iM, SM) {
        this.normal = new OM.q(MM, rM, iM), this.d = SM
      }
      HOM() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let MM = this.normal.getHashCode();
        return MM = 397 * MM ^ this.d, MM
      }
      normalize() {
        const MM = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let rM = 0;
        return 0 !== MM && (rM = 1 / MM), this.normal.x *= rM, this.normal.y *= rM, this.normal.z *= rM, this.d *= rM, this
      }
      transform(MM) {
        const rM = SM._TmpMatrix;
        MM.invertToRef(rM);
        const iM = rM.m,
          OM = this.normal.x,
          jM = this.normal.y,
          aM = this.normal.z,
          PM = this.d,
          nM = OM * iM[0] + jM * iM[1] + aM * iM[2] + PM * iM[3],
          QM = OM * iM[4] + jM * iM[5] + aM * iM[6] + PM * iM[7],
          zM = OM * iM[8] + jM * iM[9] + aM * iM[10] + PM * iM[11],
          LM = OM * iM[12] + jM * iM[13] + aM * iM[14] + PM * iM[15];
        return new SM(nM, QM, zM, LM)
      }
      dotCoordinate(MM) {
        return this.normal.x * MM.x + this.normal.y * MM.y + this.normal.z * MM.z + this.d
      }
      copyFromPoints(MM, rM, iM) {
        const OM = rM.x - MM.x,
          SM = rM.y - MM.y,
          jM = rM.z - MM.z,
          aM = iM.x - MM.x,
          PM = iM.y - MM.y,
          nM = iM.z - MM.z,
          QM = SM * nM - jM * PM,
          zM = jM * aM - OM * nM,
          LM = OM * PM - SM * aM,
          mM = Math.sqrt(QM * QM + zM * zM + LM * LM);
        let HM;
        return HM = 0 !== mM ? 1 / mM : 0, this.normal.x = QM * HM, this.normal.y = zM * HM, this.normal.z = LM * HM, this.d = -(this.normal.x * MM.x + this.normal.y * MM.y + this.normal.z * MM.z), this
      }
      isFrontFacingTo(MM, rM) {
        return OM.q.Dot(this.normal, MM) <= rM
      }
      signedDistanceTo(MM) {
        return OM.q.Dot(MM, this.normal) + this.d
      }
      static FromArray(MM) {
        return new SM(MM[0], MM[1], MM[2], MM[3])
      }
      static FromPoints(MM, rM, iM) {
        const OM = new SM(0, 0, 0, 0);
        return OM.copyFromPoints(MM, rM, iM), OM
      }
      static FromPositionAndNormal(MM, rM) {
        const iM = new SM(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(MM, rM, iM)
      }
      static FromPositionAndNormalToRef(MM, rM, iM) {
        return iM.normal.jR(rM), iM.normal.normalize(), iM.d = -MM.dot(iM.normal), iM
      }
      static SignedDistanceToPlaneFromPositionAndNormal(MM, rM, iM) {
        const SM = -(rM.x * MM.x + rM.y * MM.y + rM.z * MM.z);
        return OM.q.Dot(iM, rM) + SM
      }
    }
    SM._TmpMatrix = OM.d.Identity()
  },
  38034: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      Matrix: () => OM.d,
      Quaternion: () => OM.h,
      RegisterMathVector: () => OM.i,
      TmpVectors: () => OM.l,
      Vector2: () => OM.o,
      sh: () => OM.q,
      Vector4: () => OM.u
    });
    var OM = iM(38040);
    (0, OM.i)()
  },
  39078: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      constructor(MM, rM, iM, OM) {
        this.x = MM, this.y = rM, this.width = iM, this.height = OM
      }
      toGlobal(MM, rM) {
        return new OM(this.x * MM, this.y * rM, this.width * MM, this.height * rM)
      }
      toGlobalToRef(MM, rM, iM) {
        return iM.x = this.x * MM, iM.y = this.y * rM, iM.width = this.width * MM, iM.height = this.height * rM, this
      }
      clone() {
        return new OM(this.x, this.y, this.width, this.height)
      }
    }
  },
  41495: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => QM
    });
    var OM = iM(38040),
      SM = iM(38173),
      jM = iM(41502),
      aM = iM(41508),
      PM = iM(41520);

    function nM(MM) {
      let rM = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const iM = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        jM = [],
        nM = MM.width || MM.size || 1,
        QM = MM.height || MM.size || 1,
        zM = MM.depth || MM.size || 1,
        LM = MM.wrap || !1;
      let mM = void 0 === MM.topBaseAt ? 1 : MM.topBaseAt,
        HM = void 0 === MM.bottomBaseAt ? 0 : MM.bottomBaseAt;
      mM = (mM + 4) % 4, HM = (HM + 4) % 4;
      let hM = [2, 0, 3, 1][mM],
        JM = [2, 0, 1, 3][HM],
        dM = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (LM) {
        rM = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], dM = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let MM = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          iM = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const OM = [17, 18, 19, 16],
          SM = [22, 23, 20, 21];
        for (; hM > 0;) MM.unshift(MM.pop()), OM.unshift(OM.pop()), hM--;
        for (; JM > 0;) iM.unshift(iM.pop()), SM.unshift(SM.pop()), JM--;
        MM = MM.flat(), iM = iM.flat(), dM = dM.concat(MM).concat(iM), rM.push(OM[0], OM[2], OM[3], OM[0], OM[1], OM[2]), rM.push(SM[0], SM[2], SM[3], SM[0], SM[1], SM[2])
      }
      const yM = [nM / 2, QM / 2, zM / 2],
        lM = dM.reduce(((MM, rM, iM) => MM.concat(rM * yM[iM % 3])), []),
        EM = 0 === MM.sideOrientation ? 0 : MM.sideOrientation || aM.d.DEFAULTSIDE,
        UM = MM.faceUV || new Array(6),
        GM = MM.faceColors,
        CM = [];
      for (let aM = 0; aM < 6; aM++) void 0 === UM[aM] && (UM[aM] = new OM.u(0, 0, 1, 1)), GM && void 0 === GM[aM] && (GM[aM] = new SM.h(1, 1, 1, 1));
      for (let OM = 0; OM < 6; OM++)
        if (jM.push(UM[OM].z, PM.c ? 1 - UM[OM].w : UM[OM].w), jM.push(UM[OM].x, PM.c ? 1 - UM[OM].w : UM[OM].w), jM.push(UM[OM].x, PM.c ? 1 - UM[OM].y : UM[OM].y), jM.push(UM[OM].z, PM.c ? 1 - UM[OM].y : UM[OM].y), GM)
          for (let MM = 0; MM < 4; MM++) CM.push(GM[OM].r, GM[OM].g, GM[OM].b, GM[OM].a);
      aM.d._ComputeSides(EM, lM, rM, iM, jM, MM.frontUVs, MM.backUVs);
      const eM = new aM.d;
      if (eM.indices = rM, eM.positions = lM, eM.normals = iM, eM.uvs = jM, GM) {
        const MM = EM === aM.d.DOUBLESIDE ? CM.concat(CM) : CM;
        eM.colors = MM
      }
      return eM
    }

    function QM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const OM = new jM.d(MM, iM);
      rM.sideOrientation = jM.d._GetDefaultSideOrientation(rM.sideOrientation), OM._originalBuilderSideOrientation = rM.sideOrientation;
      return nM(rM).applyToMesh(OM, rM.updatable), OM
    }
    let zM = !1;
    zM || (zM = !0, aM.d.CreateBox = nM, jM.d.CreateBox = function(MM, rM) {
      return QM(MM, {
        size: rM,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  41543: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => LM
    });
    var OM = iM(38040),
      SM = iM(41502),
      jM = iM(41508),
      aM = iM(41546),
      PM = iM(41250),
      nM = iM(39711);

    function QM(MM) {
      const rM = [],
        iM = [],
        OM = MM.lines,
        SM = MM.colors,
        aM = [];
      let PM = 0;
      for (let jM = 0; jM < OM.length; jM++) {
        const MM = OM[jM];
        for (let OM = 0; OM < MM.length; OM++) {
          const {
            x: nM,
            y: QM,
            z: zM
          } = MM[OM];
          if (iM.push(nM, QM, zM), SM) {
            const MM = SM[jM],
              {
                r: rM,
                g: iM,
                b: PM,
                a: nM
              } = MM[OM];
            aM.push(rM, iM, PM, nM)
          }
          OM > 0 && (rM.push(PM - 1), rM.push(PM)), PM++
        }
      }
      const nM = new jM.d;
      return nM.indices = rM, nM.positions = iM, SM && (nM.colors = aM), nM
    }

    function zM(MM) {
      const rM = MM.dashSize || 3,
        iM = MM.gapSize || 1,
        SM = MM.dashNb || 200,
        aM = MM.points,
        PM = [],
        nM = [],
        QM = OM.q.Zero();
      let zM, LM, mM, HM = 0,
        hM = 0;
      for (mM = 0; mM < aM.length - 1; mM++) aM[mM + 1].subtractToRef(aM[mM], QM), HM += QM.length();
      const JM = HM / SM,
        dM = rM * JM / (rM + iM);
      for (mM = 0; mM < aM.length - 1; mM++) {
        aM[mM + 1].subtractToRef(aM[mM], QM), zM = Math.floor(QM.length() / JM), QM.normalize();
        for (let MM = 0; MM < zM; MM++) LM = JM * MM, PM.push(aM[mM].x + LM * QM.x, aM[mM].y + LM * QM.y, aM[mM].z + LM * QM.z), PM.push(aM[mM].x + (LM + dM) * QM.x, aM[mM].y + (LM + dM) * QM.y, aM[mM].z + (LM + dM) * QM.z), nM.push(hM, hM + 1), hM += 2
      }
      const yM = new jM.d;
      return yM.positions = PM, yM.indices = nM, yM
    }

    function LM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const OM = rM.instance,
        SM = rM.lines,
        jM = rM.colors;
      if (OM) {
        const MM = OM.getVerticesData(PM.j.PositionKind);
        let rM, iM;
        jM && (rM = OM.getVerticesData(PM.j.ColorKind));
        let aM = 0,
          nM = 0;
        for (let OM = 0; OM < SM.length; OM++) {
          const PM = SM[OM];
          for (let SM = 0; SM < PM.length; SM++) MM[aM] = PM[SM].x, MM[aM + 1] = PM[SM].y, MM[aM + 2] = PM[SM].z, jM && rM && (iM = jM[OM], rM[nM] = iM[SM].r, rM[nM + 1] = iM[SM].g, rM[nM + 2] = iM[SM].b, rM[nM + 3] = iM[SM].a, nM += 4), aM += 3
        }
        return OM.updateVerticesData(PM.j.PositionKind, MM, !1, !1), jM && rM && OM.updateVerticesData(PM.j.ColorKind, rM, !1, !1), OM.refreshBoundingInfo(), OM
      }
      const nM = !!jM,
        zM = new aM.c(MM, iM, null, void 0, void 0, nM, rM.useVertexAlpha, rM.material);
      return QM(rM).applyToMesh(zM, rM.updatable), zM
    }

    function mM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const OM = rM.colors ? [rM.colors] : null;
      return LM(MM, {
        lines: [rM.points],
        updatable: rM.updatable,
        instance: rM.instance,
        colors: OM,
        useVertexAlpha: rM.useVertexAlpha,
        material: rM.material
      }, iM)
    }

    function HM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const jM = rM.points,
        PM = rM.instance,
        QM = rM.gapSize || 1,
        LM = rM.dashSize || 3;
      if (PM) {
        const MM = MM => {
          const rM = OM.q.Zero(),
            iM = MM.length / 6;
          let SM, aM, nM, QM, zM = 0,
            LM = 0;
          for (nM = 0; nM < jM.length - 1; nM++) jM[nM + 1].subtractToRef(jM[nM], rM), zM += rM.length();
          const mM = zM / iM,
            HM = PM._creationDataStorage.dashSize,
            hM = HM * mM / (HM + PM._creationDataStorage.gapSize);
          for (nM = 0; nM < jM.length - 1; nM++)
            for (jM[nM + 1].subtractToRef(jM[nM], rM), SM = Math.floor(rM.length() / mM), rM.normalize(), QM = 0; QM < SM && LM < MM.length;) aM = mM * QM, MM[LM] = jM[nM].x + aM * rM.x, MM[LM + 1] = jM[nM].y + aM * rM.y, MM[LM + 2] = jM[nM].z + aM * rM.z, MM[LM + 3] = jM[nM].x + (aM + hM) * rM.x, MM[LM + 4] = jM[nM].y + (aM + hM) * rM.y, MM[LM + 5] = jM[nM].z + (aM + hM) * rM.z, LM += 6, QM++;
          for (; LM < MM.length;) MM[LM] = jM[nM].x, MM[LM + 1] = jM[nM].y, MM[LM + 2] = jM[nM].z, LM += 3
        };
        return (rM.dashNb || rM.dashSize || rM.gapSize || rM.useVertexAlpha || rM.material) && nM.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), PM.updateMeshPositions(MM, !1), PM
      }
      const mM = new aM.c(MM, iM, null, void 0, void 0, void 0, rM.useVertexAlpha, rM.material);
      return zM(rM).applyToMesh(mM, rM.updatable), mM._creationDataStorage = new SM.h, mM._creationDataStorage.dashSize = LM, mM._creationDataStorage.gapSize = QM, mM
    }
    let hM = !1;
    hM || (hM = !0, jM.d.CreateLineSystem = QM, jM.d.CreateDashedLines = zM, SM.d.CreateLines = function(MM, rM) {
      return mM(MM, {
        points: rM,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, SM.d.CreateDashedLines = function(MM, rM, iM, OM, SM) {
      return HM(MM, {
        points: rM,
        dashSize: iM,
        gapSize: OM,
        dashNb: SM,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  41546: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => mM,
      e: () => JM
    });
    var OM, SM, jM = iM(38173),
      aM = iM(41250),
      PM = iM(41502),
      nM = iM(41553),
      QM = iM(41397),
      zM = iM(41556),
      LM = iM(40990);
    class mM extends PM.d {
      _isShaderMaterial(MM) {
        return !!MM && "ShaderMaterial" === MM.getClassName()
      }
      constructor(MM) {
        let rM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          OM = arguments.length > 5 ? arguments[5] : void 0,
          SM = arguments.length > 6 ? arguments[6] : void 0,
          PM = arguments.length > 7 ? arguments[7] : void 0;
        super(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, rM, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = OM, this.useVertexAlpha = SM, this.color = new jM.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, rM && (this.color = rM.color.clone(), this.alpha = rM.alpha, this.useVertexColor = rM.useVertexColor, this.useVertexAlpha = rM.useVertexAlpha), this.intersectionThreshold = .1;
        const nM = {
          attributes: [aM.j.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? nM.defines.push("#define VERTEXALPHA") : nM.needAlphaBlending = !1, this.useVertexColor ? (nM.defines.push("#define VERTEXCOLOR"), nM.attributes.push(aM.j.ColorKind)) : (nM.uniforms.push("color"), this._color4 = new jM.h), PM) this.material = PM;
        else {
          this.Hk().ph().isWebGPU && !mM.ForceGLSL && (this._shaderLanguage = 1), nM.shaderLanguage = this._shaderLanguage, nM.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([iM.e(653).then((() => iM(45235))), iM.e(659).then((() => iM(45238)))]) : await Promise.all([iM.e(635).then((() => iM(45242))), iM.e(641).then((() => iM(45246)))])
          };
          const MM = new zM.n("colorShader", this.Hk(), "color", nM, !1);
          MM.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(MM)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(MM) {
        const rM = this.material;
        if (rM === MM) return;
        const iM = rM && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(MM), iM && rM?.dispose()
      }
      _setInternalMaterial(MM) {
        this._setMaterial(MM), this.material && (this.material.fillMode = QM.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(MM) {}
      _bind(MM, rM) {
        if (!this._geometry) return this;
        const iM = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(rM, iM) : this._geometry._bind(rM, iM, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: MM,
            g: rM,
            b: iM
          } = this.color;
          this._color4.set(MM, rM, iM, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(MM, rM, iM) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const OM = this.Hk().ph();
        return this._unIndexed ? OM.drawArraysType(QM.c.LineListDrawMode, MM.verticesStart, MM.verticesCount, iM) : OM.drawElementsType(QM.c.LineListDrawMode, MM.indexStart, MM.indexCount, iM), this
      }
      dispose(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || rM) && this.material?.dispose(!1, !1, !0), super.dispose(MM)
      }
      clone(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        if (rM && void 0 === rM._addToSceneRootNodes) {
          const iM = rM;
          return iM.source = this, new mM(MM, this.Hk(), iM.parent, iM.source, iM.doNotCloneChildren)
        }
        return new mM(MM, this.Hk(), rM, this, iM)
      }
      createInstance(MM) {
        const rM = new HM(MM, this);
        if (this.xZ) {
          rM.xZ = {};
          for (const MM in this.xZ) rM.xZ[MM] = this.xZ[MM]
        }
        return rM
      }
      serialize(MM) {
        super.serialize(MM), MM.color = this.color.HOM(), MM.alpha = this.alpha
      }
      static Parse(MM, rM) {
        const iM = new mM(MM.name, rM);
        return iM.color = jM.d.FromArray(MM.color), iM.alpha = MM.alpha, iM
      }
    }
    mM.ForceGLSL = !1;
    class HM extends nM.e {
      constructor(MM, rM) {
        super(MM, rM), this.intersectionThreshold = rM.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let hM = !1;

    function JM() {
      hM || (hM = !0, PM.d._LinesMeshParser = (MM, rM) => mM.Parse(MM, rM))
    }(OM = mM.prototype).enableEdgesRendering ?? (OM.enableEdgesRendering = (0, LM.j)("LinesMesh", "enableEdgesRendering")), (SM = HM.prototype).enableEdgesRendering ?? (SM.enableEdgesRendering = (0, LM.j)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  39705: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM
    });
    var OM = iM(39711);
    const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
      ...MM
    } : null : MM.clone(rM) : null;
    class jM {
      static DeepCopy(MM, rM, iM, jM) {
        let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const PM = function(MM) {
          const rM = [];
          do {
            const iM = Object.getOwnPropertyNames(MM);
            for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
          } while (MM = Object.getPrototypeOf(MM));
          return rM
        }(MM);
        for (const QM of PM) {
          if ("_" === QM[0] && (!jM || -1 === jM.indexOf(QM))) continue;
          if (QM.endsWith("Observable")) continue;
          if (iM && -1 !== iM.indexOf(QM)) continue;
          const PM = MM[QM],
            zM = typeof PM;
          if ("function" !== zM) try {
            if ("object" === zM)
              if (PM instanceof Uint8Array) rM[QM] = Uint8Array.from(PM);
              else if (PM instanceof Array) {
              if (rM[QM] = [], PM.length > 0)
                if ("object" == typeof PM[0])
                  for (let MM = 0; MM < PM.length; MM++) {
                    const iM = SM(PM[MM], rM, aM); - 1 === rM[QM].indexOf(iM) && rM[QM].push(iM)
                  } else rM[QM] = PM.slice(0)
            } else rM[QM] = SM(PM, rM, aM);
            else rM[QM] = PM
          } catch (nM) {
            OM.e.Warn(nM.message)
          }
        }
      }
    }
  },
  38885: (MM, rM, iM) => {
    function OM() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
        const rM = 16 * Math.random() | 0;
        return ("x" === MM ? rM : 3 & rM | 8).toString(16)
      }))
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  39711: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      static _CheckLimit(MM, rM) {
        let iM = OM._LogLimitOutputs[MM];
        return iM ? iM.current++ : (iM = {
          limit: rM,
          current: 1
        }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
      }
      static _GenerateLimitMessage(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const iM = OM._LogLimitOutputs[MM];
        if (!iM || !OM.MessageLimitReached) return;
        const SM = this._Levels[rM];
        iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
      }
      static _AddLogEntry(MM) {
        OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
      }
      static _FormatMessage(MM) {
        const rM = MM => MM < 10 ? "0" + MM : "" + MM,
          iM = new Date;
        return "[" + rM(iM.getHours()) + ":" + rM(iM.getMinutes()) + ":" + rM(iM.getSeconds()) + "]: " + MM
      }
      static _LogDisabled(MM, rM) {}
      static _LogEnabled() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const SM = Array.isArray(rM) ? rM[0] : rM;
        if (void 0 !== iM && !OM._CheckLimit(SM, iM)) return;
        const jM = OM._FormatMessage(SM),
          aM = this._Levels[MM],
          PM = Array.isArray(rM) ? rM.slice(1) : [];
        aM.logFunc && aM.logFunc("BJS - " + jM, ...PM);
        const nM = `<div style='color:${aM.color}'>${jM}</div><br>`;
        OM._AddLogEntry(nM), OM._GenerateLimitMessage(SM, MM)
      }
      static get LogCache() {
        return OM._LogCache
      }
      static ClearLogCache() {
        OM._LogCache = "", OM._LogLimitOutputs = {}, OM.errorsCount = 0
      }
      static set LogLevels(MM) {
        OM.Log = OM._LogDisabled, OM.Warn = OM._LogDisabled, OM.Error = OM._LogDisabled;
        const rM = [OM.MessageLogLevel, OM.WarningLogLevel, OM.ErrorLogLevel];
        for (const iM of rM)
          if ((MM & iM) === iM) {
            const MM = this._Levels[iM];
            OM[MM.name] = OM._LogEnabled.bind(OM, iM)
          }
      }
    }
    OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels = [{}, {
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
    }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
  },
  41190: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM.d
    });
    var OM = iM(41196);
    (0, OM.b)()
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);