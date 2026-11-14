export const id = 274;
export const ids = [274];
export const modules = {
  39468: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF
    });
    var CF = SF(38081),
      AF = SF(39477);
    class uF {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = SF, this.oPF = [], this._maxBlockCapacity = WF || 64, this._selectionContent = new CF.b(1024), this._creationFunc = FF
      }
      update(FF, WF, SF) {
        AF.c._CreateBlocks(FF, WF, SF, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      gRF(FF) {
        for (let WF = 0; WF < this.blocks.length; WF++) {
          this.blocks[WF].addEntry(FF)
        }
      }
      zSF(FF) {
        for (let WF = 0; WF < this.blocks.length; WF++) {
          this.blocks[WF].removeEntry(FF)
        }
      }
      select(FF, WF) {
        this._selectionContent.reset();
        for (let SF = 0; SF < this.blocks.length; SF++) {
          this.blocks[SF].select(FF, this._selectionContent, WF)
        }
        return WF ? this._selectionContent.concat(this.oPF) : this._selectionContent.concatWithNoDuplicate(this.oPF), this._selectionContent
      }
      intersects(FF, WF, SF) {
        this._selectionContent.reset();
        for (let CF = 0; CF < this.blocks.length; CF++) {
          this.blocks[CF].intersects(FF, WF, this._selectionContent, SF)
        }
        return SF ? this._selectionContent.concat(this.oPF) : this._selectionContent.concatWithNoDuplicate(this.oPF), this._selectionContent
      }
      intersectsRay(FF) {
        this._selectionContent.reset();
        for (let WF = 0; WF < this.blocks.length; WF++) {
          this.blocks[WF].intersectsRay(FF, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.oPF), this._selectionContent
      }
    }
    uF.CreationFuncForMeshes = (FF, WF) => {
      const SF = FF.JWF();
      !FF.isBlocked && SF.boundingBox.intersectsMinMax(WF.VPF, WF.qRF) && WF.entries.push(FF)
    }, uF.CreationFuncForSubMeshes = (FF, WF) => {
      FF.JWF().boundingBox.intersectsMinMax(WF.VPF, WF.qRF) && WF.entries.push(FF)
    }
  },
  39477: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF
    });
    var CF = SF(35623),
      AF = SF(38286);
    class uF {
      constructor(FF, WF, SF, CF, AF, uF) {
        this.entries = [], this.YPF = new Array, this._capacity = SF, this._depth = CF, this._maxDepth = AF, this._creationFunc = uF, this._minPoint = FF, this._maxPoint = WF, this.YPF.push(FF.clone()), this.YPF.push(WF.clone()), this.YPF.push(FF.clone()), this.YPF[2].x = WF.x, this.YPF.push(FF.clone()), this.YPF[3].y = WF.y, this.YPF.push(FF.clone()), this.YPF[4].z = WF.z, this.YPF.push(WF.clone()), this.YPF[5].z = FF.z, this.YPF.push(WF.clone()), this.YPF[6].x = FF.x, this.YPF.push(WF.clone()), this.YPF[7].y = FF.y
      }
      get ZF() {
        return this._capacity
      }
      get VPF() {
        return this._minPoint
      }
      get qRF() {
        return this._maxPoint
      }
      addEntry(FF) {
        if (this.blocks)
          for (let WF = 0; WF < this.blocks.length; WF++) {
            this.blocks[WF].addEntry(FF)
          } else this._creationFunc(FF, this), this.entries.length > this.ZF && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(FF) {
        if (this.blocks) {
          for (let WF = 0; WF < this.blocks.length; WF++) {
            this.blocks[WF].removeEntry(FF)
          }
          return
        }
        const WF = this.entries.indexOf(FF);
        WF > -1 && this.entries.splice(WF, 1)
      }
      addEntries(FF) {
        for (let WF = 0; WF < FF.length; WF++) {
          const SF = FF[WF];
          this.addEntry(SF)
        }
      }
      select(FF, WF, SF) {
        if (AF.e.IsInFrustum(this.YPF, FF)) {
          if (this.blocks) {
            for (let CF = 0; CF < this.blocks.length; CF++) {
              this.blocks[CF].select(FF, WF, SF)
            }
            return
          }
          SF ? WF.concat(this.entries) : WF.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(FF, WF, SF, CF) {
        if (AF.e.IntersectsSphere(this._minPoint, this._maxPoint, FF, WF)) {
          if (this.blocks) {
            for (let AF = 0; AF < this.blocks.length; AF++) {
              this.blocks[AF].intersects(FF, WF, SF, CF)
            }
            return
          }
          CF ? SF.concat(this.entries) : SF.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(FF, WF) {
        if (FF.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let SF = 0; SF < this.blocks.length; SF++) {
              this.blocks[SF].intersectsRay(FF, WF)
            }
            return
          }
          WF.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        uF._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(FF, WF, SF, AF, hF, bW, dF, PF) {
        dF.blocks = new Array;
        const RF = new CF.r((WF.x - FF.x) / 2, (WF.y - FF.y) / 2, (WF.z - FF.z) / 2);
        for (let CF = 0; CF < 2; CF++)
          for (let WF = 0; WF < 2; WF++)
            for (let iW = 0; iW < 2; iW++) {
              const eF = FF.add(RF.multiplyByFloats(CF, WF, iW)),
                EF = FF.add(RF.multiplyByFloats(CF + 1, WF + 1, iW + 1)),
                QF = new uF(eF, EF, AF, hF + 1, bW, PF);
              QF.addEntries(SF), dF.blocks.push(QF)
            }
      }
    }
  },
  39483: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => RF
    });
    var CF = SF(38057),
      AF = SF(35623),
      uF = SF(38412),
      hF = SF(39421),
      bW = SF(38136),
      dF = SF(35639),
      PF = SF(39468);
    class RF {
      constructor(FF) {
        this.name = bW.d.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new hF.w(AF.r.Zero(), new AF.r(1, 1, 1)), (FF = FF || dF.e.LastCreatedScene) && (this.ju = FF, this.ju.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.ju.getActiveSubMeshCandidates = FF => this.getActiveSubMeshCandidates(FF), this.ju.getCollidingSubMeshCandidates = (FF, WF) => this.getCollidingSubMeshCandidates(FF, WF), this.ju.getIntersectingSubMeshCandidates = (FF, WF) => this.getIntersectingSubMeshCandidates(FF, WF))
      }
      register() {
        this.ju.onMeshRemovedObservable.add((FF => {
          const WF = this.ju.selectionOctree;
          if (void 0 !== WF && null !== WF) {
            const SF = WF.oPF.indexOf(FF); - 1 !== SF && WF.oPF.splice(SF, 1)
          }
        })), this.ju.onMeshImportedObservable.add((FF => {
          const WF = this.ju.selectionOctree;
          void 0 !== WF && null !== WF && WF.gRF(FF)
        }))
      }
      getActiveMeshCandidates() {
        return this.ju.yRF?.select(this.ju.frustumPlanes) || this.ju._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(FF) {
        if (FF._submeshesOctree && FF.useOctreeForRenderingSelection) {
          return FF._submeshesOctree.select(this.ju.frustumPlanes)
        }
        return this.ju._getDefaultSubMeshCandidates(FF)
      }
      getIntersectingSubMeshCandidates(FF, WF) {
        if (FF._submeshesOctree && FF.useOctreeForPicking) {
          hF.w.TransformToRef(WF, FF.getWorldMatrix(), this._tempRay);
          return FF._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.ju._getDefaultSubMeshCandidates(FF)
      }
      getCollidingSubMeshCandidates(FF, WF) {
        if (FF._submeshesOctree && FF.useOctreeForCollisions) {
          const SF = WF._velocityWorldLength + Math.max(WF._radius.x, WF._radius.y, WF._radius.z);
          return FF._submeshesOctree.intersects(WF._basePointWorld, SF)
        }
        return this.ju._getDefaultSubMeshCandidates(FF)
      }
      rebuild() {}
      dispose() {}
    }
    let iW = !1;
    iW || (iW = !0, CF.f.prototype.createOrUpdateSelectionOctree = function() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        SF = this._getComponent(bW.d.NAME_OCTREE);
      SF || (SF = new RF(this), this.SPF(SF)), this.yRF || (this.yRF = new PF.c(PF.c.CreationFuncForMeshes, FF, WF));
      const CF = this.getWorldExtends();
      return this.yRF.update(CF.min, CF.max, this.meshes), this.yRF
    }, Object.defineProperty(CF.f.prototype, "selectionOctree", {
      get: function() {
        return this.yRF
      },
      enumerable: !0,
      configurable: !0
    }), uF.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const SF = this.OWF();
      let CF = SF._getComponent(bW.d.NAME_OCTREE);
      CF || (CF = new RF(SF), SF.SPF(CF)), this._submeshesOctree || (this._submeshesOctree = new PF.c(PF.c.CreationFuncForSubMeshes, FF, WF)), this.computeWorldMatrix(!0);
      const AF = this.JWF().boundingBox;
      return this._submeshesOctree.update(AF.minimumWorld, AF.maximumWorld, this.Om), this._submeshesOctree
    })
  },
  39421: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => ZF,
      f: () => rW,
      i: () => QF,
      l: () => EF,
      m: () => OF,
      n: () => mW,
      o: () => NF,
      s: () => LF,
      v: () => DF,
      w: () => iW
    });
    var CF = SF(35625),
      AF = SF(35623),
      uF = SF(35631),
      hF = SF(38278),
      bW = SF(38100),
      dF = SF(35639),
      PF = SF(38160);
    const RF = {
      internalPickerForMesh: void 0
    };
    class iW {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CF.c;
        this.origin = FF, this.direction = WF, this.length = SF, this.epsilon = AF
      }
      clone() {
        return new iW(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const CF = iW._TmpVector3[0].FhF(FF.x - SF, FF.y - SF, FF.z - SF),
          AF = iW._TmpVector3[1].FhF(WF.x + SF, WF.y + SF, WF.z + SF);
        let uF, hF, bW, dF, PF = 0,
          RF = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < CF.x || this.origin.x > AF.x) return !1
        } else if (uF = 1 / this.direction.x, hF = (CF.x - this.origin.x) * uF, bW = (AF.x - this.origin.x) * uF, bW === -1 / 0 && (bW = 1 / 0), hF > bW && (dF = hF, hF = bW, bW = dF), PF = Math.max(hF, PF), RF = Math.min(bW, RF), PF > RF) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < CF.y || this.origin.y > AF.y) return !1
        } else if (uF = 1 / this.direction.y, hF = (CF.y - this.origin.y) * uF, bW = (AF.y - this.origin.y) * uF, bW === -1 / 0 && (bW = 1 / 0), hF > bW && (dF = hF, hF = bW, bW = dF), PF = Math.max(hF, PF), RF = Math.min(bW, RF), PF > RF) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < CF.z || this.origin.z > AF.z) return !1
        } else if (uF = 1 / this.direction.z, hF = (CF.z - this.origin.z) * uF, bW = (AF.z - this.origin.z) * uF, bW === -1 / 0 && (bW = 1 / 0), hF > bW && (dF = hF, hF = bW, bW = dF), PF = Math.max(hF, PF), RF = Math.min(bW, RF), PF > RF) return !1;
        return !0
      }
      intersectsBox(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(FF.minimum, FF.maximum, WF)
      }
      intersectsSphere(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const SF = FF.center.x - this.origin.x,
          CF = FF.center.y - this.origin.y,
          AF = FF.center.z - this.origin.z,
          uF = SF * SF + CF * CF + AF * AF,
          hF = FF.radius + WF,
          bW = hF * hF;
        if (uF <= bW) return !0;
        const dF = SF * this.direction.x + CF * this.direction.y + AF * this.direction.z;
        if (dF < 0) return !1;
        return uF - dF * dF <= bW
      }
      intersectsTriangle(FF, WF, SF) {
        const CF = iW._TmpVector3[0],
          uF = iW._TmpVector3[1],
          bW = iW._TmpVector3[2],
          dF = iW._TmpVector3[3],
          PF = iW._TmpVector3[4];
        WF.subtractToRef(FF, CF), SF.subtractToRef(FF, uF), AF.r.CrossToRef(this.direction, uF, bW);
        const RF = AF.r.Dot(CF, bW);
        if (0 === RF) return null;
        const eF = 1 / RF;
        this.origin.subtractToRef(FF, dF);
        const EF = AF.r.Dot(dF, bW) * eF;
        if (EF < -this.epsilon || EF > 1 + this.epsilon) return null;
        AF.r.CrossToRef(dF, CF, PF);
        const QF = AF.r.Dot(this.direction, PF) * eF;
        if (QF < -this.epsilon || EF + QF > 1 + this.epsilon) return null;
        const rW = AF.r.Dot(uF, PF) * eF;
        return rW > this.length || rW < 0 ? null : new hF.d(1 - EF - QF, EF, rW)
      }
      intersectsPlane(FF) {
        let WF;
        const SF = AF.r.Dot(FF.normal, this.direction);
        if (Math.abs(SF) < 9.99999997475243e-7) return null;
        {
          const CF = AF.r.Dot(FF.normal, this.origin);
          return WF = (-FF.d - CF) / SF, WF < 0 ? WF < -9.99999997475243e-7 ? null : 0 : WF
        }
      }
      intersectsAxis(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (FF) {
          case "y": {
            const FF = (this.origin.y - WF) / this.direction.y;
            return FF > 0 ? null : new AF.r(this.origin.x + this.direction.x * -FF, WF, this.origin.z + this.direction.z * -FF)
          }
          case "x": {
            const FF = (this.origin.x - WF) / this.direction.x;
            return FF > 0 ? null : new AF.r(WF, this.origin.y + this.direction.y * -FF, this.origin.z + this.direction.z * -FF)
          }
          case "z": {
            const FF = (this.origin.z - WF) / this.direction.z;
            return FF > 0 ? null : new AF.r(this.origin.x + this.direction.x * -FF, this.origin.y + this.direction.y * -FF, WF)
          }
          default:
            return null
        }
      }
      ARF(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          uF = arguments.length > 4 ? arguments[4] : void 0,
          hF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const bW = AF.j.Matrix[0];
        return FF.getWorldMatrix().invertToRef(bW), this._tmpRay ? iW.TransformToRef(this, bW, this._tmpRay) : this._tmpRay = iW.Transform(this, bW), FF.intersects(this._tmpRay, WF, SF, CF, uF, hF)
      }
      intersectsMeshes(FF, WF, SF) {
        SF ? SF.length = 0 : SF = [];
        for (let CF = 0; CF < FF.length; CF++) {
          const AF = this.ARF(FF[CF], WF);
          AF.hit && SF.push(AF)
        }
        return SF.sort(this._comparePickingInfo), SF
      }
      _comparePickingInfo(FF, WF) {
        return FF.distance < WF.distance ? -1 : FF.distance > WF.distance ? 1 : 0
      }
      intersectionSegment(FF, WF, SF) {
        const CF = this.origin,
          uF = AF.j.HC[0],
          hF = AF.j.HC[1],
          bW = AF.j.HC[2],
          dF = AF.j.HC[3];
        WF.subtractToRef(FF, uF), this.direction.scaleToRef(iW._Rayl, bW), CF.addToRef(bW, hF), FF.subtractToRef(CF, dF);
        const PF = AF.r.Dot(uF, uF),
          RF = AF.r.Dot(uF, bW),
          eF = AF.r.Dot(bW, bW),
          EF = AF.r.Dot(uF, dF),
          QF = AF.r.Dot(bW, dF),
          rW = PF * eF - RF * RF;
        let gW, tW, TF = rW,
          aW = rW;
        rW < iW._Smallnum ? (gW = 0, TF = 1, tW = QF, aW = eF) : (gW = RF * QF - eF * EF, tW = PF * QF - RF * EF, gW < 0 ? (gW = 0, tW = QF, aW = eF) : gW > TF && (gW = TF, tW = QF + RF, aW = eF)), tW < 0 ? (tW = 0, -EF < 0 ? gW = 0 : -EF > PF ? gW = TF : (gW = -EF, TF = PF)) : tW > aW && (tW = aW, -EF + RF < 0 ? gW = 0 : -EF + RF > PF ? gW = TF : (gW = -EF + RF, TF = PF));
        const kW = Math.abs(gW) < iW._Smallnum ? 0 : gW / TF,
          qW = Math.abs(tW) < iW._Smallnum ? 0 : tW / aW,
          VF = AF.j.HC[4];
        bW.scaleToRef(qW, VF);
        const NF = AF.j.HC[5];
        uF.scaleToRef(kW, NF), NF.addInPlace(dF);
        const DF = AF.j.HC[6];
        NF.subtractToRef(VF, DF);
        return qW > 0 && qW <= this.length && DF.lengthSquared() < SF * SF ? NF.length() : -1
      }
      update(FF, WF, SF, CF, uF, hF, bW) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          iW._RayDistant || (iW._RayDistant = iW.Zero()), iW._RayDistant.unprojectRayToRef(FF, WF, SF, CF, AF.b.IdentityReadOnly, hF, bW);
          const dF = AF.j.Matrix[0];
          uF.invertToRef(dF), iW.TransformToRef(iW._RayDistant, dF, this)
        } else this.unprojectRayToRef(FF, WF, SF, CF, uF, hF, bW);
        return this
      }
      static Zero() {
        return new iW(AF.r.Zero(), AF.r.Zero())
      }
      static CreateNew(FF, WF, SF, CF, AF, uF, hF) {
        return iW.Zero().update(FF, WF, SF, CF, AF, uF, hF)
      }
      static CreateNewFromTo(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AF.b.IdentityReadOnly;
        const CF = new iW(new AF.r(0, 0, 0), new AF.r(0, 0, 0));
        return iW.CreateFromToToRef(FF, WF, CF, SF)
      }
      static CreateFromToToRef(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : AF.b.IdentityReadOnly;
        SF.origin.fdF(FF);
        const uF = WF.subtractToRef(FF, SF.direction),
          hF = Math.sqrt(uF.x * uF.x + uF.y * uF.y + uF.z * uF.z);
        return SF.length = hF, SF.direction.normalize(), iW.TransformToRef(SF, CF, SF)
      }
      static Transform(FF, WF) {
        const SF = new iW(new AF.r(0, 0, 0), new AF.r(0, 0, 0));
        return iW.TransformToRef(FF, WF, SF), SF
      }
      static TransformToRef(FF, WF, SF) {
        AF.r.TransformCoordinatesToRef(FF.origin, WF, SF.origin), AF.r.TransformNormalToRef(FF.direction, WF, SF.direction), SF.length = FF.length, SF.epsilon = FF.epsilon;
        const CF = SF.direction,
          uF = CF.length();
        if (0 !== uF && 1 !== uF) {
          const FF = 1 / uF;
          CF.x *= FF, CF.y *= FF, CF.z *= FF, SF.length *= uF
        }
        return SF
      }
      unprojectRayToRef(FF, WF, SF, CF, uF, hF, bW) {
        const PF = AF.j.Matrix[0];
        uF.multiplyToRef(hF, PF), PF.multiplyToRef(bW, PF), PF.invert();
        const RF = dF.e.LastCreatedEngine,
          iW = AF.j.HC[0];
        iW.x = FF / SF * 2 - 1, iW.y = -(WF / CF * 2 - 1), iW.z = RF?.QPF ? 1 : RF?.isNDCHalfZRange ? 0 : -1;
        const eF = AF.j.HC[1].FhF(iW.x, iW.y, 1 - 1e-8),
          EF = AF.j.HC[2],
          QF = AF.j.HC[3];
        AF.r.TransformCoordinatesToRef(iW, PF, EF), AF.r.TransformCoordinatesToRef(eF, PF, QF), this.origin.fdF(EF), QF.subtractToRef(EF, this.direction), this.direction.normalize()
      }
    }

    function eF(FF, WF, SF, CF, AF) {
      let uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const hF = iW.Zero();
      return EF(FF, WF, SF, CF, hF, AF, uF), hF
    }

    function EF(FF, WF, SF, CF, uF, hF) {
      let bW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        dF = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const PF = FF.sC();
      if (!hF && !(hF = FF.activeCamera) && !(hF = FF.cameraToUseForPointers)) return FF;
      const RF = hF.viewport,
        iW = PF.getRenderHeight(),
        {
          x: eF,
          y: EF,
          width: QF,
          height: rW
        } = RF.toGlobal(PF.getRenderWidth(), iW),
        gW = 1 / PF.getHardwareScalingLevel();
      return WF = WF * gW - eF, SF = SF * gW - (iW - EF - rW), uF.update(WF, SF, QF, rW, CF || AF.b.IdentityReadOnly, bW ? AF.b.IdentityReadOnly : hF.getViewMatrix(), hF.getProjectionMatrix(), dF), FF
    }

    function QF(FF, WF, SF, CF) {
      const AF = iW.Zero();
      return rW(FF, WF, SF, AF, CF), AF
    }

    function rW(FF, WF, SF, CF, uF) {
      if (!bW.b) return FF;
      const hF = FF.sC();
      if (!uF && !(uF = FF.activeCamera) && !(uF = FF.cameraToUseForPointers)) throw new Error("Active camera not set");
      const dF = uF.viewport,
        PF = hF.getRenderHeight(),
        {
          x: RF,
          y: iW,
          width: eF,
          height: EF
        } = dF.toGlobal(hF.getRenderWidth(), PF),
        QF = AF.b.Identity(),
        rW = 1 / hF.getHardwareScalingLevel();
      return WF = WF * rW - RF, SF = SF * rW - (PF - iW - EF), CF.update(WF, SF, eF, EF, QF, QF, uF.getProjectionMatrix()), FF
    }

    function gW(FF, WF, SF, CF, AF, uF, hF, bW) {
      return tW(FF, SF, CF, WF(CF, SF.enableDistantPicking), AF, uF, hF, bW)
    }

    function tW(FF, WF, SF, CF, AF, uF, hF, bW) {
      const dF = WF.intersects(CF, AF, hF, uF, SF, bW);
      return dF && dF.hit ? !AF && null != FF && dF.distance >= FF.distance ? null : dF : null
    }

    function TF(FF, WF) {
      return "InstancedLinesMesh" === FF || "LinesMesh" === FF ? WF.intersectionThreshold : 0
    }

    function aW(FF) {
      const WF = FF.getClassName();
      if ("GreasedLineMesh" === WF) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const SF = FF.rawBoundingInfo;
      return {
        rawBoundingInfo: SF,
        intersectionThreshold: SF ? TF(WF, FF) : 0
      }
    }

    function kW(FF, WF, SF, CF, AF) {
      const uF = FF(SF, WF.enableDistantPicking);
      return uF.intersectsSphere(CF.nPF, AF) && uF.intersectsBox(CF.boundingBox, AF) ? uF : null
    }

    function qW(FF, WF, SF, CF, uF, hF) {
      let dF = null;
      const PF = !!(FF.activeCameras && FF.activeCameras.length > 1 && FF.cameraToUseForPointers !== FF.activeCamera),
        iW = FF.cameraToUseForPointers || FF.activeCamera,
        eF = RF.internalPickerForMesh || gW,
        EF = eF === gW;
      for (let bW = 0; bW < FF.meshes.length; bW++) {
        const RF = FF.meshes[bW];
        if (SF) {
          if (!SF(RF, -1)) continue
        } else if (!RF.isEnabled() || !RF.isVisible || !RF.JA) continue;
        const QF = PF && RF.isWorldMatrixCameraDependent(),
          rW = RF.computeWorldMatrix(QF, iW);
        if (RF.hasThinInstances && RF.zdF) {
          const FF = eF(dF, WF, RF, rW, !0, !0, hF);
          if (FF) {
            if (uF) return FF;
            const {
              rawBoundingInfo: bW,
              intersectionThreshold: PF
            } = aW(RF), iW = RF._thinInstanceDataStorage.matrixData;
            if (iW) {
              const FF = AF.j.Matrix[0],
                QF = AF.j.Matrix[1],
                gW = Math.min(RF.YuF, iW.length >> 4);
              for (let TF = 0; TF < gW; TF++) {
                if (SF && !SF(RF, TF)) continue;
                AF.b.FromArrayToRef(iW, TF << 4, FF), FF.multiplyToRef(rW, QF);
                const gW = EF && bW ? kW(WF, RF, QF, bW, PF) : null;
                if (EF && bW && !gW) continue;
                const aW = EF && gW ? tW(dF, RF, QF, gW, CF, uF, hF, !0) : eF(dF, WF, RF, QF, CF, uF, hF, !0);
                if (aW && (dF = aW, dF.thinInstanceIndex = TF, CF)) return dF
              }
            }
          }
        } else {
          const FF = eF(dF, WF, RF, rW, CF, uF, hF);
          if (FF && (dF = FF, CF)) return dF
        }
      }
      return dF || new bW.b
    }

    function VF(FF, WF, SF, CF) {
      if (!bW.b) return null;
      const uF = [],
        hF = !!(FF.activeCameras && FF.activeCameras.length > 1 && FF.cameraToUseForPointers !== FF.activeCamera),
        dF = FF.cameraToUseForPointers || FF.activeCamera,
        PF = RF.internalPickerForMesh || gW,
        iW = PF === gW;
      for (let bW = 0; bW < FF.meshes.length; bW++) {
        const RF = FF.meshes[bW];
        if (SF) {
          if (!SF(RF, -1)) continue
        } else if (!RF.isEnabled() || !RF.isVisible || !RF.JA) continue;
        const eF = hF && RF.isWorldMatrixCameraDependent(),
          EF = RF.computeWorldMatrix(eF, dF);
        if (RF.hasThinInstances && RF.zdF) {
          if (PF(null, WF, RF, EF, !0, !0, CF)) {
            const {
              rawBoundingInfo: FF,
              intersectionThreshold: hF
            } = aW(RF), bW = RF._thinInstanceDataStorage.matrixData;
            if (bW) {
              const dF = AF.j.Matrix[0],
                eF = AF.j.Matrix[1],
                QF = Math.min(RF.YuF, bW.length >> 4);
              for (let rW = 0; rW < QF; rW++) {
                if (SF && !SF(RF, rW)) continue;
                AF.b.FromArrayToRef(bW, rW << 4, dF), dF.multiplyToRef(EF, eF);
                const QF = iW && FF ? kW(WF, RF, eF, FF, hF) : null;
                if (iW && FF && !QF) continue;
                const gW = iW && QF ? tW(null, RF, eF, QF, !1, !1, CF, !0) : PF(null, WF, RF, eF, !1, !1, CF, !0);
                gW && (gW.thinInstanceIndex = rW, uF.push(gW))
              }
            }
          }
        } else {
          const FF = PF(null, WF, RF, EF, !1, !1, CF);
          FF && uF.push(FF)
        }
      }
      return uF
    }

    function NF(FF, WF, SF, CF, uF, hF) {
      if (!bW.b) return null;
      const dF = qW(FF, (CF => (FF._tempPickingRay || (FF._tempPickingRay = iW.Zero()), EF(FF, WF, SF, CF, FF._tempPickingRay, hF || null), FF._tempPickingRay)), CF, uF, !0);
      return dF && (dF.ray = eF(FF, WF, SF, AF.b.Identity(), hF || null)), dF
    }

    function DF(FF, WF, SF, CF, uF, hF, bW) {
      const dF = qW(FF, ((CF, AF) => (FF._tempPickingRay || (FF._tempPickingRay = iW.Zero()), EF(FF, WF, SF, CF, FF._tempPickingRay, hF || null, !1, AF), FF._tempPickingRay)), CF, uF, !1, bW);
      return dF && (dF.ray = eF(FF, WF, SF, AF.b.Identity(), hF || null)), dF
    }

    function LF(FF, WF, SF, CF, uF) {
      const hF = qW(FF, (SF => (FF._pickWithRayInverseMatrix || (FF._pickWithRayInverseMatrix = AF.b.Identity()), SF.invertToRef(FF._pickWithRayInverseMatrix), FF._cachedRayForTransform || (FF._cachedRayForTransform = iW.Zero()), iW.TransformToRef(WF, FF._pickWithRayInverseMatrix, FF._cachedRayForTransform), FF._cachedRayForTransform)), SF, CF, !1, uF);
      return hF && (hF.ray = WF), hF
    }

    function mW(FF, WF, SF, CF, AF, uF) {
      return VF(FF, (CF => eF(FF, WF, SF, CF, AF || null)), CF, uF)
    }

    function OF(FF, WF, SF, CF) {
      return VF(FF, (SF => (FF._pickWithRayInverseMatrix || (FF._pickWithRayInverseMatrix = AF.b.Identity()), SF.invertToRef(FF._pickWithRayInverseMatrix), FF._cachedRayForTransform || (FF._cachedRayForTransform = iW.Zero()), iW.TransformToRef(WF, FF._pickWithRayInverseMatrix, FF._cachedRayForTransform), FF._cachedRayForTransform)), SF, CF)
    }

    function xW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        CF = arguments.length > 3 ? arguments[3] : void 0,
        uF = arguments.length > 4 ? arguments[4] : void 0;
      CF || (CF = FF.getWorldMatrix()), WF.length = SF, uF ? WF.origin.fdF(uF) : WF.origin.fdF(FF.position);
      const hF = AF.j.HC[2];
      hF.set(0, 0, FF._scene.useRightHandedSystem ? -1 : 1);
      const bW = AF.j.HC[3];
      return AF.r.TransformNormalToRef(hF, CF, bW), AF.r.NormalizeToRef(bW, WF.direction), WF
    }

    function ZF(FF, WF) {
      WF && (WF.prototype.getForwardRay = function() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        return xW(this, new iW(AF.r.Zero(), AF.r.Zero(), FF), FF, WF, SF)
      }, WF.prototype.getForwardRayToRef = function(FF) {
        return xW(this, FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), FF && (PF.c._IsPickingAvailable = !0, FF.prototype.createPickingRay = function(FF, WF, SF, CF) {
        return eF(this, FF, WF, SF, CF, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    iW._TmpVector3 = (0, uF.e)(6, AF.r.Zero), iW._RayDistant = iW.Zero(), iW._Smallnum = 1e-8, iW._Rayl = 1e9
  },
  39416: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF.w
    });
    var CF = SF(38057),
      AF = SF(38183),
      uF = SF(39421);
    let hF = !1;
    hF || (hF = !0, (0, uF.b)(CF.f, AF.c), CF.f.prototype.createPickingRayToRef = function(FF, WF, SF, CF, AF) {
      let hF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        bW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, uF.l)(this, FF, WF, SF, CF, AF, hF, bW)
    }, CF.f.prototype.createPickingRayInCameraSpace = function(FF, WF, SF) {
      return (0, uF.i)(this, FF, WF, SF)
    }, CF.f.prototype.createPickingRayInCameraSpaceToRef = function(FF, WF, SF, CF) {
      return (0, uF.f)(this, FF, WF, SF, CF)
    }, CF.f.prototype.pickWithBoundingInfo = function(FF, WF, SF, CF, AF) {
      return (0, uF.o)(this, FF, WF, SF, CF, AF)
    }, CF.f.prototype.lW = function(FF, WF, SF, CF, AF, hF) {
      let bW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, uF.v)(this, FF, WF, SF, CF, AF, hF, bW)
    }, CF.f.prototype.pickWithRay = function(FF, WF, SF, CF) {
      return (0, uF.s)(this, FF, WF, SF, CF)
    }, CF.f.prototype.multiPick = function(FF, WF, SF, CF, AF) {
      return (0, uF.n)(this, FF, WF, SF, CF, AF)
    }, CF.f.prototype.multiPickWithRay = function(FF, WF, SF) {
      return (0, uF.m)(this, FF, WF, SF)
    })
  },
  39430: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => RF
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(35623),
      hF = SF(38230),
      bW = SF(39432),
      dF = SF(38187),
      PF = SF(35660);
    let RF = (() => {
        var FF;
        let WF, SF, dF, PF, RF, iW, eF, EF, QF = bW.d,
          rW = [],
          gW = [],
          tW = [],
          TF = [],
          aW = [],
          kW = [],
          qW = [],
          VF = [],
          NF = [],
          DF = [],
          LF = [],
          mW = [],
          OF = [];
        return FF = class extends QF {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(FF) {
            this._shadowFrustumSize = FF, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(FF) {
            this._shadowOrthoScale = FF, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(FF) {
            this._orthoLeft = FF
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(FF) {
            this._orthoRight = FF
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(FF) {
            this._orthoTop = FF
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(FF) {
            this._orthoBottom = FF
          }
          constructor(FF, WF, SF, AF) {
            super(FF, SF, AF), this._shadowFrustumSize = ((0, CF.k)(this, rW), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, CF.k)(this, gW, !0), this.autoCalcShadowZBounds = ((0, CF.k)(this, tW), (0, CF.k)(this, TF, !1)), this._orthoLeft = ((0, CF.k)(this, aW), (0, CF.k)(this, kW, Number.MAX_VALUE)), this._orthoRight = ((0, CF.k)(this, qW), (0, CF.k)(this, VF, Number.MIN_VALUE)), this._orthoTop = ((0, CF.k)(this, NF), (0, CF.k)(this, DF, Number.MIN_VALUE)), this._orthoBottom = ((0, CF.k)(this, LF), (0, CF.k)(this, mW, Number.MAX_VALUE)), (0, CF.k)(this, OF), this.position = WF.scale(-1), this.direction = WF
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return hF.c.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(FF, WF, SF) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(FF) : this._setDefaultAutoExtendShadowProjectionMatrix(FF, WF, SF)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(FF) {
            const WF = this.OWF().activeCamera;
            uF.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : WF ? WF.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : WF ? WF.maxZ : 1e4, FF, this.OWF().sC().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(FF, WF, SF) {
            const CF = this.OWF().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const FF = uF.r.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let CF = Number.MAX_VALUE,
                AF = -Number.MAX_VALUE;
              for (let hF = 0; hF < SF.length; hF++) {
                const bW = SF[hF];
                if (!bW) continue;
                const dF = bW.JWF().boundingBox;
                for (let SF = 0; SF < dF.vectorsWorld.length; SF++) uF.r.TransformCoordinatesToRef(dF.vectorsWorld[SF], WF, FF), FF.x < this._orthoLeft && (this._orthoLeft = FF.x), FF.y < this._orthoBottom && (this._orthoBottom = FF.y), FF.x > this._orthoRight && (this._orthoRight = FF.x), FF.y > this._orthoTop && (this._orthoTop = FF.y), this.autoCalcShadowZBounds && (FF.z < CF && (CF = FF.z), FF.z > AF && (AF = FF.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = CF, this._shadowMaxZ = AF)
            }
            const AF = this._orthoRight - this._orthoLeft,
              hF = this._orthoTop - this._orthoBottom,
              bW = void 0 !== this.shadowMinZ ? this.shadowMinZ : CF?.minZ || 0,
              dF = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : CF?.maxZ || 1e4,
              PF = this.OWF().sC().QPF;
            uF.b.OrthoOffCenterLHToRef(this._orthoLeft - AF * this.shadowOrthoScale, this._orthoRight + AF * this.shadowOrthoScale, this._orthoBottom - hF * this.shadowOrthoScale, this._orthoTop + hF * this.shadowOrthoScale, PF ? dF : bW, PF ? bW : dF, FF, this.OWF().sC().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(FF, WF) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, WF), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, WF), this)
          }
          transferToNodeMaterialEffect(FF, WF) {
            return this.computeTransformedInformation() ? (FF.setFloat3(WF, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (FF.setFloat3(WF, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(FF) {
            const WF = this._scene.sC();
            return !WF.QPF && WF.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(FF) {
            const WF = this._scene.sC();
            return WF.QPF && WF.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(FF, WF) {
            FF["DIRLIGHT" + WF] = !0
          }
        }, (() => {
          const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(QF[Symbol.metadata] ?? null) : void 0;
          WF = [(0, AF.H)()], SF = [(0, AF.H)()], dF = [(0, AF.H)()], PF = [(0, AF.H)()], RF = [(0, AF.H)("orthoLeft")], iW = [(0, AF.H)("orthoRight")], eF = [(0, AF.H)("orthoTop")], EF = [(0, AF.H)("orthoBottom")], (0, CF.j)(FF, null, WF, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: FF => "shadowFrustumSize" in FF,
              get: FF => FF.shadowFrustumSize
            },
            metadata: uF
          }, null, rW), (0, CF.j)(FF, null, SF, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: FF => "shadowOrthoScale" in FF,
              get: FF => FF.shadowOrthoScale
            },
            metadata: uF
          }, null, rW), (0, CF.j)(null, null, dF, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: FF => "autoUpdateExtends" in FF,
              get: FF => FF.autoUpdateExtends,
              set: (FF, WF) => {
                FF.autoUpdateExtends = WF
              }
            },
            metadata: uF
          }, gW, tW), (0, CF.j)(null, null, PF, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: FF => "autoCalcShadowZBounds" in FF,
              get: FF => FF.autoCalcShadowZBounds,
              set: (FF, WF) => {
                FF.autoCalcShadowZBounds = WF
              }
            },
            metadata: uF
          }, TF, aW), (0, CF.j)(null, null, RF, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: FF => "_orthoLeft" in FF,
              get: FF => FF._orthoLeft,
              set: (FF, WF) => {
                FF._orthoLeft = WF
              }
            },
            metadata: uF
          }, kW, qW), (0, CF.j)(null, null, iW, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: FF => "_orthoRight" in FF,
              get: FF => FF._orthoRight,
              set: (FF, WF) => {
                FF._orthoRight = WF
              }
            },
            metadata: uF
          }, VF, NF), (0, CF.j)(null, null, eF, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: FF => "_orthoTop" in FF,
              get: FF => FF._orthoTop,
              set: (FF, WF) => {
                FF._orthoTop = WF
              }
            },
            metadata: uF
          }, DF, LF), (0, CF.j)(null, null, EF, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: FF => "_orthoBottom" in FF,
              get: FF => FF._orthoBottom,
              set: (FF, WF) => {
                FF._orthoBottom = WF
              }
            },
            metadata: uF
          }, mW, OF), uF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uF
          })
        })(), FF
      })(),
      iW = !1;
    iW || (iW = !0, dF.e.AddNodeConstructor("Light_Type_1", ((FF, WF) => () => new RF(FF, uF.r.Zero(), WF))), (0, PF.f)("BABYLON.DirectionalLight", RF))
  },
  39446: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => XW
    });
    var CF = SF(37107),
      AF = SF(35647),
      uF = SF(35623),
      hF = SF(38109),
      bW = SF(39450),
      dF = SF(35639),
      PF = SF(38249),
      RF = SF(35678),
      iW = SF(37114),
      eF = SF(37069),
      EF = SF(35650);
    class QF {
      constructor() {
        this.direction1 = new uF.r(0, 1, 0), this.direction2 = new uF.r(0, 1, 0)
      }
      startDirectionFunction(FF, WF, SF, CF) {
        const AF = (0, EF.RandomRange)(this.direction1.x, this.direction2.x),
          hF = (0, EF.RandomRange)(this.direction1.y, this.direction2.y),
          bW = (0, EF.RandomRange)(this.direction1.z, this.direction2.z);
        CF ? WF.FhF(AF, hF, bW) : uF.r.TransformNormalFromFloatsToRef(AF, hF, bW, FF, WF)
      }
      startPositionFunction(FF, WF, SF, CF) {
        CF ? WF.FhF(0, 0, 0) : uF.r.TransformCoordinatesFromFloatsToRef(0, 0, 0, FF, WF)
      }
      clone() {
        const FF = new QF;
        return eF.d.DeepCopy(this, FF), FF
      }
      applyToShader(FF) {
        FF.setVector3("direction1", this.direction1), FF.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(FF) {
        FF.addUniform("direction1", 3), FF.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const FF = {};
        return FF.type = this.getClassName(), FF.direction1 = this.direction1.kRF(), FF.direction2 = this.direction2.kRF(), FF
      }
      parse(FF) {
        uF.r.FromArrayToRef(FF.direction1, 0, this.direction1), uF.r.FromArrayToRef(FF.direction2, 0, this.direction2)
      }
    }
    class rW {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = FF, this.radiusRange = WF, this.directionRandomizer = SF
      }
      startDirectionFunction(FF, WF, SF, CF) {
        const AF = SF.position.subtract(FF.getTranslation()).normalize(),
          hF = (0, EF.RandomRange)(0, this.directionRandomizer),
          bW = (0, EF.RandomRange)(0, this.directionRandomizer),
          dF = (0, EF.RandomRange)(0, this.directionRandomizer);
        AF.x += hF, AF.y += bW, AF.z += dF, AF.normalize(), CF ? WF.fdF(AF) : uF.r.TransformNormalFromFloatsToRef(AF.x, AF.y, AF.z, FF, WF)
      }
      startPositionFunction(FF, WF, SF, CF) {
        const AF = this.radius - (0, EF.RandomRange)(0, this.radius * this.radiusRange),
          hF = (0, EF.RandomRange)(0, 1),
          bW = (0, EF.RandomRange)(0, 2 * Math.PI),
          dF = Math.acos(2 * hF - 1),
          PF = AF * Math.cos(bW) * Math.sin(dF),
          RF = AF * Math.cos(dF),
          iW = AF * Math.sin(bW) * Math.sin(dF);
        CF ? WF.FhF(PF, Math.abs(RF), iW) : uF.r.TransformCoordinatesFromFloatsToRef(PF, Math.abs(RF), iW, FF, WF)
      }
      clone() {
        const FF = new rW(this.radius, this.directionRandomizer);
        return eF.d.DeepCopy(this, FF), FF
      }
      applyToShader(FF) {
        FF.setFloat("radius", this.radius), FF.setFloat("radiusRange", this.radiusRange), FF.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(FF) {
        FF.addUniform("radius", 1), FF.addUniform("radiusRange", 1), FF.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const FF = {};
        return FF.type = this.getClassName(), FF.radius = this.radius, FF.radiusRange = this.radiusRange, FF.directionRandomizer = this.directionRandomizer, FF
      }
      parse(FF) {
        this.radius = FF.radius, this.radiusRange = FF.radiusRange, this.directionRandomizer = FF.directionRandomizer
      }
    }
    class gW {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = FF, this.radiusRange = WF, this.directionRandomizer = SF
      }
      startDirectionFunction(FF, WF, SF, CF) {
        const AF = SF.position.subtract(FF.getTranslation()).normalize(),
          hF = (0, EF.RandomRange)(0, this.directionRandomizer),
          bW = (0, EF.RandomRange)(0, this.directionRandomizer),
          dF = (0, EF.RandomRange)(0, this.directionRandomizer);
        AF.x += hF, AF.y += bW, AF.z += dF, AF.normalize(), CF ? WF.fdF(AF) : uF.r.TransformNormalFromFloatsToRef(AF.x, AF.y, AF.z, FF, WF)
      }
      startPositionFunction(FF, WF, SF, CF) {
        const AF = this.radius - (0, EF.RandomRange)(0, this.radius * this.radiusRange),
          hF = (0, EF.RandomRange)(0, 1),
          bW = (0, EF.RandomRange)(0, 2 * Math.PI),
          dF = Math.acos(2 * hF - 1),
          PF = AF * Math.cos(bW) * Math.sin(dF),
          RF = AF * Math.cos(dF),
          iW = AF * Math.sin(bW) * Math.sin(dF);
        CF ? WF.FhF(PF, RF, iW) : uF.r.TransformCoordinatesFromFloatsToRef(PF, RF, iW, FF, WF)
      }
      clone() {
        const FF = new gW(this.radius, this.directionRandomizer);
        return eF.d.DeepCopy(this, FF), FF
      }
      applyToShader(FF) {
        FF.setFloat("radius", this.radius), FF.setFloat("radiusRange", this.radiusRange), FF.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(FF) {
        FF.addUniform("radius", 1), FF.addUniform("radiusRange", 1), FF.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const FF = {};
        return FF.type = this.getClassName(), FF.radius = this.radius, FF.radiusRange = this.radiusRange, FF.directionRandomizer = this.directionRandomizer, FF
      }
      parse(FF) {
        this.radius = FF.radius, this.radiusRange = FF.radiusRange, this.directionRandomizer = FF.directionRandomizer
      }
    }
    class tW extends gW {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new uF.r(0, 1, 0),
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uF.r(0, 1, 0);
        super(FF), this.direction1 = WF, this.direction2 = SF
      }
      startDirectionFunction(FF, WF, SF, CF) {
        const AF = (0, EF.RandomRange)(this.direction1.x, this.direction2.x),
          hF = (0, EF.RandomRange)(this.direction1.y, this.direction2.y),
          bW = (0, EF.RandomRange)(this.direction1.z, this.direction2.z);
        CF ? WF.FhF(AF, hF, bW) : uF.r.TransformNormalFromFloatsToRef(AF, hF, bW, FF, WF)
      }
      clone() {
        const FF = new tW(this.radius, this.direction1, this.direction2);
        return eF.d.DeepCopy(this, FF), FF
      }
      applyToShader(FF) {
        FF.setFloat("radius", this.radius), FF.setFloat("radiusRange", this.radiusRange), FF.setVector3("direction1", this.direction1), FF.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(FF) {
        FF.addUniform("radius", 1), FF.addUniform("radiusRange", 1), FF.addUniform("direction1", 3), FF.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const FF = super.serialize();
        return FF.direction1 = this.direction1.kRF(), FF.direction2 = this.direction2.kRF(), FF
      }
      parse(FF) {
        super.parse(FF), uF.r.FromArrayToRef(FF.direction1, 0, this.direction1), uF.r.FromArrayToRef(FF.direction2, 0, this.direction2)
      }
    }
    var TF = SF(37065);
    class aW {
      get radius() {
        return this._radius
      }
      set radius(FF) {
        this._radius = FF, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(FF) {
        this._angle = FF, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = SF, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = WF, this.radius = FF
      }
      startDirectionFunction(FF, WF, SF, CF) {
        const AF = SF.position.subtract(FF.getTranslation()).normalize(),
          hF = (0, EF.RandomRange)(0, this.directionRandomizer),
          bW = (0, EF.RandomRange)(0, this.directionRandomizer),
          dF = (0, EF.RandomRange)(0, this.directionRandomizer);
        AF.x += hF, AF.y += bW, AF.z += dF, AF.normalize(), CF ? WF.fdF(AF) : uF.r.TransformNormalFromFloatsToRef(AF.x, AF.y, AF.z, FF, WF)
      }
      startPositionFunction(FF, WF, SF, CF) {
        const AF = (0, EF.RandomRange)(0, 2 * Math.PI);
        let hF;
        this.emitFromSpawnPointOnly ? hF = 1e-4 : (hF = (0, EF.RandomRange)(0, this.heightRange), hF = 1 - hF * hF);
        let bW = this._radius - (0, EF.RandomRange)(0, this._radius * this.radiusRange);
        bW *= hF;
        const dF = bW * Math.sin(AF),
          PF = bW * Math.cos(AF),
          RF = hF * this._height;
        if (CF) return WF.x = dF, WF.y = RF, void(WF.z = PF);
        uF.r.TransformCoordinatesFromFloatsToRef(dF, RF, PF, FF, WF)
      }
      clone() {
        const FF = new aW(this._radius, this._angle, this.directionRandomizer);
        return eF.d.DeepCopy(this, FF), FF
      }
      applyToShader(FF) {
        FF.setFloat2("radius", this._radius, this.radiusRange), FF.setFloat("coneAngle", this._angle), FF.setFloat2("height", this._height, this.heightRange), FF.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(FF) {
        FF.addUniform("radius", 2), FF.addUniform("coneAngle", 1), FF.addUniform("height", 2), FF.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let FF = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (FF += "\n#define CONEEMITTERSPAWNPOINT"), FF
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const FF = {};
        return FF.type = this.getClassName(), FF.radius = this._radius, FF.angle = this._angle, FF.directionRandomizer = this.directionRandomizer, FF.radiusRange = this.radiusRange, FF.heightRange = this.heightRange, FF.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, FF
      }
      parse(FF) {
        this.radius = FF.radius, this.angle = FF.angle, this.directionRandomizer = FF.directionRandomizer, this.radiusRange = void 0 !== FF.radiusRange ? FF.radiusRange : 1, this.heightRange = void 0 !== FF.heightRange ? FF.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== FF.emitFromSpawnPointOnly && FF.emitFromSpawnPointOnly
      }
    }
    class kW extends aW {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uF.r(0, 1, 0),
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new uF.r(0, 1, 0);
        super(FF, WF), this.direction1 = SF, this.direction2 = CF
      }
      startDirectionFunction(FF, WF, SF, CF) {
        const AF = (0, EF.RandomRange)(this.direction1.x, this.direction2.x),
          hF = (0, EF.RandomRange)(this.direction1.y, this.direction2.y),
          bW = (0, EF.RandomRange)(this.direction1.z, this.direction2.z);
        CF ? WF.FhF(AF, hF, bW) : uF.r.TransformNormalFromFloatsToRef(AF, hF, bW, FF, WF)
      }
      clone() {
        const FF = new kW(this.radius, this.angle, this.direction1, this.direction2);
        return eF.d.DeepCopy(this, FF), FF
      }
      applyToShader(FF) {
        super.applyToShader(FF), FF.setVector3("direction1", this.direction1), FF.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(FF) {
        super.buildUniformLayout(FF), FF.addUniform("direction1", 3), FF.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const FF = super.serialize();
        return FF.direction1 = this.direction1.kRF(), FF.direction2 = this.direction2.kRF(), FF
      }
      parse(FF) {
        super.parse(FF), uF.r.FromArrayToRef(FF.direction1, 0, this.direction1), uF.r.FromArrayToRef(FF.direction2, 0, this.direction2)
      }
    }
    class qW {
      get mesh() {
        return this._mesh
      }
      set mesh(FF) {
        this._mesh !== FF && (this._mesh = FF, FF ? (this._indices = FF.yEF(), this._positions = FF.getVerticesData(hF.k.PositionKind), this._normals = FF.getVerticesData(hF.k.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = uF.r.Zero(), this._mesh = null, this.direction1 = new uF.r(0, 1, 0), this.direction2 = new uF.r(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = FF
      }
      startDirectionFunction(FF, WF, SF, CF) {
        if (this.useMeshNormalsForDirection && this._normals) return void uF.r.TransformNormalToRef(this._storedNormal, FF, WF);
        const AF = (0, EF.RandomRange)(this.direction1.x, this.direction2.x),
          hF = (0, EF.RandomRange)(this.direction1.y, this.direction2.y),
          bW = (0, EF.RandomRange)(this.direction1.z, this.direction2.z);
        CF ? WF.FhF(AF, hF, bW) : uF.r.TransformNormalFromFloatsToRef(AF, hF, bW, FF, WF)
      }
      startPositionFunction(FF, WF, SF, CF) {
        if (!this._indices || !this._positions) return;
        const AF = 3 * (Math.random() * (this._indices.length / 3) | 0),
          hF = Math.random(),
          bW = Math.random() * (1 - hF),
          dF = 1 - hF - bW,
          PF = this._indices[AF],
          RF = this._indices[AF + 1],
          iW = this._indices[AF + 2],
          eF = uF.j.HC[0],
          EF = uF.j.HC[1],
          QF = uF.j.HC[2],
          rW = uF.j.HC[3];
        uF.r.FromArrayToRef(this._positions, 3 * PF, eF), uF.r.FromArrayToRef(this._positions, 3 * RF, EF), uF.r.FromArrayToRef(this._positions, 3 * iW, QF), rW.x = hF * eF.x + bW * EF.x + dF * QF.x, rW.y = hF * eF.y + bW * EF.y + dF * QF.y, rW.z = hF * eF.z + bW * EF.z + dF * QF.z, CF ? WF.FhF(rW.x, rW.y, rW.z) : uF.r.TransformCoordinatesFromFloatsToRef(rW.x, rW.y, rW.z, FF, WF), this.useMeshNormalsForDirection && this._normals && (uF.r.FromArrayToRef(this._normals, 3 * PF, eF), uF.r.FromArrayToRef(this._normals, 3 * RF, EF), uF.r.FromArrayToRef(this._normals, 3 * iW, QF), this._storedNormal.x = hF * eF.x + bW * EF.x + dF * QF.x, this._storedNormal.y = hF * eF.y + bW * EF.y + dF * QF.y, this._storedNormal.z = hF * eF.z + bW * EF.z + dF * QF.z)
      }
      clone() {
        const FF = new qW(this.mesh);
        return eF.d.DeepCopy(this, FF), FF
      }
      applyToShader(FF) {
        FF.setVector3("direction1", this.direction1), FF.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(FF) {
        FF.addUniform("direction1", 3), FF.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const FF = {};
        return FF.type = this.getClassName(), FF.direction1 = this.direction1.kRF(), FF.direction2 = this.direction2.kRF(), FF.meshId = this.mesh?.id, FF.useMeshNormalsForDirection = this.useMeshNormalsForDirection, FF
      }
      parse(FF, WF) {
        uF.r.FromArrayToRef(FF.direction1, 0, this.direction1), uF.r.FromArrayToRef(FF.direction2, 0, this.direction2), FF.meshId && WF && (this.mesh = WF.getLastMeshById(FF.meshId)), this.useMeshNormalsForDirection = FF.useMeshNormalsForDirection
      }
    }
    class VF {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(FF) {
        this._targetStopDuration !== FF && (this._targetStopDuration = FF)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(FF) {
        this._noiseTexture !== FF && (this._noiseTexture = FF, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(FF) {
        this._attractors.push(FF)
      }
      removeAttractor(FF) {
        const WF = this._attractors.indexOf(FF); - 1 !== WF && this._attractors.splice(WF, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(FF) {
        this._animationSheetEnabled !== FF && (this._animationSheetEnabled = FF)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(FF) {
        this._isAnimationSheetEnabled != FF && (this._isAnimationSheetEnabled = FF, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(FF) {
        this._useLogarithmicDepth = FF && this.OWF().sC().getCaps().fragmentDepthSupported
      }
      OWF() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(FF) {
        switch (FF) {
          case VF.BLENDMODE_MULTIPLYADD:
            return;
          case VF.BLENDMODE_ADD:
            FF = 1;
            break;
          case VF.BLENDMODE_ONEONE:
            FF = 6;
            break;
          case VF.BLENDMODE_STANDARD:
            FF = 2;
            break;
          case VF.BLENDMODE_MULTIPLY:
            FF = 4;
            break;
          case VF.BLENDMODE_SUBTRACT:
            FF = 3
        }
        this._engine.setAlphaMode(FF)
      }
      getDragGradients() {
        return this._dragGradients
      }
      getLimitVelocityGradients() {
        return this._limitVelocityGradients
      }
      getColorGradients() {
        return this._colorGradients
      }
      getSizeGradients() {
        return this._sizeGradients
      }
      getColorRemapGradients() {
        return this._colorRemapGradients
      }
      getAlphaRemapGradients() {
        return this._alphaRemapGradients
      }
      getLifeTimeGradients() {
        return this._lifeTimeGradients
      }
      getAngularSpeedGradients() {
        return this._angularSpeedGradients
      }
      getVelocityGradients() {
        return this._velocityGradients
      }
      getStartSizeGradients() {
        return this._startSizeGradients
      }
      getEmitRateGradients() {
        return this._emitRateGradients
      }
      addEmitRateGradient(FF, WF, SF) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, FF, WF, SF), this
      }
      removeEmitRateGradient(FF) {
        return this._removeFactorGradient(this._emitRateGradients, FF), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : uF.r.Zero()
      }
      set direction1(FF) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = FF)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : uF.r.Zero()
      }
      set direction2(FF) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = FF)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : uF.r.Zero()
      }
      set minEmitBox(FF) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = FF)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : uF.r.Zero()
      }
      set maxEmitBox(FF) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = FF)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(FF) {
        this._billboardMode !== FF && (this._billboardMode = FF, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(FF) {
        this._isBillboardBased !== FF && (this._isBillboardBased = FF, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(FF) {
        this._attachImageProcessingConfiguration(FF)
      }
      _attachImageProcessingConfiguration(FF) {
        FF !== this._imageProcessingConfiguration && (!FF && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = FF)
      }
      _reset() {}
      _addFactorGradient(FF, WF, SF, AF) {
        const uF = new CF.h(WF, SF, AF);
        FF.push(uF), FF.sort(((FF, WF) => FF.gradient < WF.gradient ? -1 : FF.gradient > WF.gradient ? 1 : 0))
      }
      _removeFactorGradient(FF, WF) {
        if (!FF) return;
        let SF = 0;
        for (const CF of FF) {
          if (CF.gradient === WF) {
            FF.splice(SF, 1);
            break
          }
          SF++
        }
      }
      _removeGradientAndTexture(FF, WF, SF) {
        if (!WF) return this;
        let CF = 0;
        for (const AF of WF) {
          if (AF.gradient === FF) {
            WF.splice(CF, 1);
            break
          }
          CF++
        }
        return SF && SF.dispose(), this
      }
      constructor(FF) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = uF.r.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new uF.r(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = VF.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new uF.n(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new uF.r(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = uF.r.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new RF.i(1, 1, 1, 1), this.color2 = new RF.i(1, 1, 1, 1), this.colorDead = new RF.i(0, 0, 0, 1), this.textureMask = new RF.i(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new PF.d, this.id = FF, this.name = FF
      }
      createPointEmitter(FF, WF) {
        const SF = function(FF, WF) {
          const SF = new QF;
          return SF.direction1 = FF, SF.direction2 = WF, SF
        }(FF, WF);
        return this.particleEmitterType = SF, SF
      }
      createHemisphericEmitter() {
        const FF = function() {
          return new rW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = FF, FF
      }
      createSphereEmitter() {
        const FF = function() {
          return new gW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = FF, FF
      }
      createDirectedSphereEmitter() {
        const FF = function() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new uF.r(0, 1, 0),
            SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uF.r(0, 1, 0);
          return new tW(FF, WF, SF)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new uF.r(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uF.r(0, 1, 0));
        return this.particleEmitterType = FF, FF
      }
      createCylinderEmitter() {
        const FF = function() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new TF.d(FF, WF, SF, CF)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = FF, FF
      }
      createDirectedCylinderEmitter() {
        const FF = function() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new uF.r(0, 1, 0),
            AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new uF.r(0, 1, 0);
          return new TF.b(FF, WF, SF, CF, AF)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new uF.r(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new uF.r(0, 1, 0));
        return this.particleEmitterType = FF, FF
      }
      createConeEmitter() {
        const FF = function() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new aW(FF, WF)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = FF, FF
      }
      createDirectedConeEmitter() {
        const FF = function() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uF.r(0, 1, 0),
            CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new uF.r(0, 1, 0);
          return new kW(FF, WF, SF, CF)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new uF.r(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new uF.r(0, 1, 0));
        return this.particleEmitterType = FF, FF
      }
      createBoxEmitter(FF, WF, SF, CF) {
        const AF = new iW.d;
        return this.particleEmitterType = AF, this.direction1 = FF, this.direction2 = WF, this.minEmitBox = SF, this.maxEmitBox = CF, AF
      }
      createMeshEmitter() {
        const FF = function() {
          return new qW(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = FF, FF
      }
    }
    VF.BLENDMODE_ONEONE = 0, VF.BLENDMODE_STANDARD = 1, VF.BLENDMODE_ADD = 2, VF.BLENDMODE_MULTIPLY = 3, VF.BLENDMODE_MULTIPLYADD = 4, VF.BLENDMODE_SUBTRACT = -1;
    class NF {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new RF.i(0, 0, 0, 0), this.currentColor2 = new RF.i(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = uF.r.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class DF {
      constructor(FF) {
        this.particleSystem = FF, this.position = uF.r.Zero(), this.direction = uF.r.Zero(), this.color = new RF.i(0, 0, 0, 0), this.colorStep = new RF.i(0, 0, 0, 0), this.initialColor = new RF.i(0, 0, 0, 0), this.colorDead = new RF.i(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new uF.n(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new NF, this.id = DF._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let FF = this.age,
          WF = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === WF ? (WF = 1, FF = this._properties.randomCellOffset) : FF += this._properties.randomCellOffset);
        const SF = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let CF;
        CF = this._properties.initialSpriteCellLoop ? (0, EF.Clamp)(FF * WF % this.lifeTime / this.lifeTime) : (0, EF.Clamp)(FF * WF / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + CF * SF | 0
      }
      _inheritParticleInfoToSubEmitter(FF) {
        if (FF.particleSystem.emitter.position) {
          const WF = FF.particleSystem.emitter;
          if (WF.position.fdF(this.position), FF.inheritDirection) {
            const FF = uF.j.HC[0];
            this.direction.normalizeToRef(FF), WF.setDirection(FF, 0, Math.PI / 2)
          }
        } else {
          FF.particleSystem.emitter.fdF(this.position)
        }
        this.direction.scaleToRef(FF.inheritedVelocityAmount / 2, uF.j.HC[0]), FF.particleSystem._inheritedVelocityOffset.fdF(uF.j.HC[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const FF of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(FF)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = DF._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(FF) {
        FF.position.fdF(this.position), this._properties.initialDirection ? FF._properties.initialDirection ? FF._properties.initialDirection.fdF(this._properties.initialDirection) : FF._properties.initialDirection = this._properties.initialDirection.clone() : FF._properties.initialDirection = null, FF.direction.fdF(this.direction), this._properties.localPosition && (FF._properties.localPosition ? FF._properties.localPosition.fdF(this._properties.localPosition) : FF._properties.localPosition = this._properties.localPosition.clone()), FF.color.fdF(this.color), FF.colorStep.fdF(this.colorStep), FF.initialColor.fdF(this.initialColor), FF.colorDead.fdF(this.colorDead), FF.lifeTime = this.lifeTime, FF.age = this.age, FF._properties.randomCellOffset = this._properties.randomCellOffset, FF.size = this.size, FF.scale.fdF(this.scale), FF.angle = this.angle, FF.angularSpeed = this.angularSpeed, FF.particleSystem = this.particleSystem, FF.cellIndex = this.cellIndex, FF.id = this.id, FF._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (FF._properties.currentColorGradient = this._properties.currentColorGradient, FF._properties.currentColor1.fdF(this._properties.currentColor1), FF._properties.currentColor2.fdF(this._properties.currentColor2)), this._properties.currentSizeGradient && (FF._properties.currentSizeGradient = this._properties.currentSizeGradient, FF._properties.currentSize1 = this._properties.currentSize1, FF._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (FF._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, FF._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, FF._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (FF._properties.currentVelocityGradient = this._properties.currentVelocityGradient, FF._properties.currentVelocity1 = this._properties.currentVelocity1, FF._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (FF._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, FF._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, FF._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (FF._properties.currentDragGradient = this._properties.currentDragGradient, FF._properties.currentDrag1 = this._properties.currentDrag1, FF._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (FF._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, FF._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, FF._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (FF.remapData && this.remapData ? FF.remapData.fdF(this.remapData) : FF.remapData = new uF.v(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (FF._properties.randomNoiseCoordinates1 && FF._properties.randomNoiseCoordinates2 ? (FF._properties.randomNoiseCoordinates1.fdF(this._properties.randomNoiseCoordinates1), FF._properties.randomNoiseCoordinates2.fdF(this._properties.randomNoiseCoordinates2)) : (FF._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), FF._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), FF.metadata = this.metadata
      }
    }
    DF._Count = 0;
    var LF = SF(39067);
    class mW {
      get currentFrame() {
        return this._currentFrame
      }
      get _evaluatedFrom() {
        return this._playbackFrom
      }
      get _evaluatedTo() {
        return this._playbackTo
      }
      get _evaluatedProgress() {
        return this._playbackProgress
      }
      get _evaluatedSyncRoot() {
        return this._playbackSyncRoot
      }
      get _evaluatedJump() {
        return this._playbackJumped
      }
      get weight() {
        return this._weight
      }
      get currentValue() {
        return this._currentValue
      }
      get targetPath() {
        return this._targetPath
      }
      get target() {
        return this._currentActiveTarget
      }
      get isAdditive() {
        return this._host && this._host.isAdditive
      }
      constructor(FF, WF, SF, CF) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = WF, this.ruF = FF, this._scene = SF, this._host = CF, this._activeTargets = [], WF._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            ZFF: this._getCorrectLoopMode()
          }, this._animation.dataType === LF.c.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = uF.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const FF = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, FF)
        }
        if (this.ruF instanceof Array) {
          let FF = 0;
          for (const WF of this.ruF) this._preparePath(WF, FF), this._getOriginalValues(FF), FF++;
          this._targetIsArray = !0
        } else this._preparePath(this.ruF), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const AF = WF.getEvents();
        if (AF && AF.length > 0)
          for (const uF of AF) this._events.push(uF._clone());
        this._enableBlending = FF && FF.animationPropertiesOverride ? FF.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const SF = this._animation.targetPropertyPath;
        if (SF.length > 1) {
          let CF = FF;
          for (let FF = 0; FF < SF.length - 1; FF++) {
            const WF = SF[FF];
            if (CF = CF[WF], void 0 === CF) throw new Error(`Invalid property (${WF}) in property path (${SF.join(".")})`)
          }
          this._targetPath = SF[SF.length - 1], this._activeTargets[WF] = CF
        } else this._targetPath = SF[0], this._activeTargets[WF] = FF;
        if (void 0 === this._activeTargets[WF][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${SF.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.ruF instanceof Array) {
            let FF = 0;
            for (const WF of this.ruF) void 0 !== this._originalValue[FF] && this._setValue(WF, this._activeTargets[FF], this._originalValue[FF], -1, FF), FF++
          } else void 0 !== this._originalValue[0] && this._setValue(this.ruF, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let FF = 0; FF < this._events.length; FF++) this._events[FF].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const FF = this._animation.runtimeAnimations.indexOf(this);
        FF > -1 && this._animation.runtimeAnimations.splice(FF, 1)
      }
      setValue(FF, WF) {
        if (this._targetIsArray)
          for (let SF = 0; SF < this.ruF.length; SF++) {
            const CF = this.ruF[SF];
            this._setValue(CF, this._activeTargets[SF], FF, WF, SF)
          } else this._setValue(this.ruF, this._directTarget, FF, WF, 0)
      }
      _getOriginalValues() {
        let FF, WF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const SF = this._activeTargets[WF];
        if (LF.c.InheritOriginalValueFromActiveAnimations) {
          const FF = this._scene._activeAnimatables;
          for (let CF = 0; CF < FF.length; CF++) {
            const AF = FF[CF]._runtimeAnimations;
            for (let FF = 0; FF < AF.length; FF++) {
              const CF = AF[FF];
              if (CF !== this && CF._targetPath === this._targetPath)
                for (let FF = 0; FF < CF._activeTargets.length; FF++)
                  if (CF._activeTargets[FF] === SF && void 0 !== CF._originalValue[FF]) return void(CF._originalValue[FF] && CF._originalValue[FF].clone ? this._originalValue[WF] = CF._originalValue[FF].clone() : this._originalValue[WF] = CF._originalValue[FF])
            }
          }
        }
        FF = SF.getLocalMatrix && "_matrix" === this._targetPath ? SF.getLocalMatrix() : SF[this._targetPath], FF && FF.clone ? this._originalValue[WF] = FF.clone() : this._originalValue[WF] = FF
      }
      _registerTargetForLateAnimationBinding(FF, WF) {
        const SF = FF.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(SF), SF._lateAnimationHolders || (SF._lateAnimationHolders = {}), SF._lateAnimationHolders[FF.targetPath] || (SF._lateAnimationHolders[FF.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: WF
        }), FF.isAdditive ? (SF._lateAnimationHolders[FF.targetPath].additiveAnimations.push(FF), SF._lateAnimationHolders[FF.targetPath].totalAdditiveWeight += FF.weight) : (SF._lateAnimationHolders[FF.targetPath].animations.push(FF), SF._lateAnimationHolders[FF.targetPath].totalWeight += FF.weight)
      }
      _setValue(FF, WF, SF, CF, AF) {
        const hF = this._scene._animationWrites,
          bW = this._scene._animationWriteCount++;
        let dF = hF[bW];
        if (dF || (dF = hF[bW] = {
            runtimeAnimation: this,
            target: FF,
            weight: CF,
            additive: !1,
            blendingFactor: 1,
            carried: !1
          }), dF.runtimeAnimation = this, dF.target = FF, dF.weight = CF, dF.additive = this.isAdditive, dF.carried = !1, this._currentActiveTarget = WF, this._weight = CF, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const FF = WF[this._targetPath];
            FF.clone ? this._originalBlendValue = FF.clone() : this._originalBlendValue = FF
          }
          this._originalBlendValue.m ? LF.c.AllowMatrixDecomposeForInterpolation ? this._currentValue ? uF.b.DecomposeLerpToRef(this._originalBlendValue, SF, this._blendingFactor, this._currentValue) : this._currentValue = uF.b.DecomposeLerp(this._originalBlendValue, SF, this._blendingFactor) : this._currentValue ? uF.b.LerpToRef(this._originalBlendValue, SF, this._blendingFactor, this._currentValue) : this._currentValue = uF.b.Lerp(this._originalBlendValue, SF, this._blendingFactor) : this._currentValue = LF.c._UniversalLerp(this._originalBlendValue, SF, this._blendingFactor);
          const CF = FF && FF.animationPropertiesOverride ? FF.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          dF.blendingFactor = this._blendingFactor, this._blendingFactor += CF
        } else dF.blendingFactor = 1, this._currentValue ? this._currentValue.fdF ? this._currentValue.fdF(SF) : this._currentValue = SF : this._currentValue = SF?.clone ? SF.clone() : SF; - 1 !== CF ? this._registerTargetForLateAnimationBinding(this, this._originalValue[AF]) : this._animationState.ZFF === LF.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[AF], WF[this._targetPath]) : WF[this._targetPath] = this._originalValue[AF] + this._currentValue : WF[this._targetPath] = this._currentValue, FF.XbF && FF.XbF(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.ruF && this.ruF.animationPropertiesOverride) {
          return "MorphTarget" === this.ruF.getClassName?.() && null == this.ruF._animationPropertiesOverride ? this._animation.ZFF : this.ruF.animationPropertiesOverride.ZFF
        }
        return this._animation.ZFF
      }
      goToFrame(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const SF = this._animation.getKeys();
        FF < SF[0].frame ? FF = SF[0].frame : FF > SF[SF.length - 1].frame && (FF = SF[SF.length - 1].frame);
        const CF = this._events;
        if (CF.length)
          for (let uF = 0; uF < CF.length; uF++) CF[uF].onlyOnce || (CF[uF].isDone = CF[uF].frame < FF);
        this._currentFrame = FF;
        const AF = this._animation._interpolate(FF, this._animationState);
        this.setValue(AF, WF)
      }
      _prepareForSpeedRatioChange(FF) {
        const WF = this._previousElapsedTime * (this._animation.framePerSecond * FF) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - WF
      }
      animate(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const hF = this._animation,
          bW = hF.targetPropertyPath;
        if (!bW || bW.length < 1) return this._stopped = !0, !1;
        let dF, PF = !0;
        const RF = this._events;
        let iW;
        if (this._coreRuntimeAnimation) iW = SF - WF, dF = this._coreRuntimeAnimation.currentFrame, this._currentFrame = dF, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let uF;
          (WF < this._minFrame || WF > this._maxFrame) && (WF = this._minFrame), (SF < this._minFrame || SF > this._maxFrame) && (SF = this._maxFrame), iW = SF - WF;
          let bW = FF * (hF.framePerSecond * AF) / 1e3 + this._absoluteFrameOffset,
            eF = 0,
            EF = !1;
          const QF = CF && this._animationState.ZFF === LF.c.ANIMATIONLOOPMODE_YOYO;
          if (QF) {
            const FF = (bW - WF) / iW,
              SF = Math.sin(FF * Math.PI);
            bW = Math.abs(SF) * iW + WF;
            const CF = SF >= 0 ? 1 : -1;
            this._yoyoDirection !== CF && (EF = !0), this._yoyoDirection = CF
          }
          if (this._previousElapsedTime = FF, this._previousAbsoluteFrame = bW, !CF && SF >= WF && (bW >= iW && AF > 0 || bW <= 0 && AF < 0)) PF = !1, eF = hF.evaluate(SF);
          else if (!CF && WF >= SF && (bW <= iW && AF < 0 || bW >= 0 && AF > 0)) PF = !1, eF = hF.evaluate(WF);
          else if (this._animationState.ZFF !== LF.c.ANIMATIONLOOPMODE_CYCLE) {
            const FF = SF.toString() + WF.toString();
            if (!this._offsetsCache[FF]) {
              this._animationState.repeatCount = 0, this._animationState.ZFF = LF.c.ANIMATIONLOOPMODE_CYCLE;
              const CF = hF._interpolate(WF, this._animationState),
                AF = hF._interpolate(SF, this._animationState);
              switch (this._animationState.ZFF = this._getCorrectLoopMode(), hF.dataType) {
                case LF.c.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[FF] = AF - CF;
                  break;
                case LF.c.ANIMATIONTYPE_QUATERNION:
                case LF.c.ANIMATIONTYPE_VECTOR3:
                case LF.c.ANIMATIONTYPE_VECTOR2:
                case LF.c.ANIMATIONTYPE_SIZE:
                case LF.c.ANIMATIONTYPE_COLOR3:
                case LF.c.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[FF] = AF.subtract(CF)
              }
              this._highLimitsCache[FF] = AF
            }
            eF = this._highLimitsCache[FF], uF = this._offsetsCache[FF]
          }
          if (void 0 === uF) switch (hF.dataType) {
            case LF.c.ANIMATIONTYPE_FLOAT:
              uF = 0;
              break;
            case LF.c.ANIMATIONTYPE_QUATERNION:
              uF = LF.g;
              break;
            case LF.c.ANIMATIONTYPE_VECTOR3:
              uF = LF.r;
              break;
            case LF.c.ANIMATIONTYPE_VECTOR2:
              uF = LF.n;
              break;
            case LF.c.ANIMATIONTYPE_SIZE:
              uF = LF.j;
              break;
            case LF.c.ANIMATIONTYPE_COLOR3:
              uF = LF.e;
              break;
            case LF.c.ANIMATIONTYPE_COLOR4:
              uF = LF.f
          }
          const rW = this._host ? this._host.syncRoot : null;
          let gW, tW = this._playbackFrames,
            TF = !1;
          if (rW) {
            const FF = rW.toFrame - rW.fromFrame,
              SF = rW.masterFrame,
              CF = (SF - rW.fromFrame) / FF;
            dF = WF + iW * CF;
            const AF = rW.getAnimations()[0];
            if (AF && 0 !== FF) {
              const FF = iW * CF,
                WF = AF._playbackTo - AF._playbackFrom;
              if (0 !== WF && AF._playbackFrom <= rW.fromFrame && AF._playbackTo >= rW.toFrame) {
                tW = iW * Math.round((AF._playbackFrames - (AF._currentFrame - AF._playbackFrom)) / WF) + FF
              } else TF = (SF - this._playbackSyncMasterFrame) * (AF._playbackFrames - this._playbackSyncMasterPlayed) < 0, tW = FF;
              TF = TF || AF._playbackJumped, this._playbackSyncMasterPlayed = AF._playbackFrames, this._playbackSyncMasterFrame = SF
            }
          } else dF = bW > 0 && WF > SF || bW < 0 && WF < SF ? PF && 0 !== iW ? SF + bW % iW : WF : PF && 0 !== iW ? WF + bW % iW : SF;
          if (!QF && (AF > 0 && this.currentFrame > dF || AF < 0 && this.currentFrame < dF) || QF && EF) {
            this._onLoop();
            for (let FF = 0; FF < RF.length; FF++) RF[FF].onlyOnce || (RF[FF].isDone = !1);
            this._animationState.key = AF > 0 ? 0 : hF.getKeys().length - 1
          }
          if (this._currentFrame = dF, this._animationState.repeatCount = 0 === iW ? 0 : bW / iW | 0, this._animationState.highLimitValue = eF, this._animationState.offsetValue = uF, this._playbackFrom = WF, this._playbackTo = SF, this._playbackJumped = TF, this._playbackSyncRoot = rW, rW) gW = tW;
          else if (PF) gW = QF ? dF === WF && bW === SF ? iW : dF - WF : bW;
          else {
            const FF = 0 !== iW ? Math.floor(this._playbackFrames / iW) : 0;
            gW = (dF === SF ? FF + 1 : FF) * iW
          }
          this._playbackFrames = gW, this._playbackProgress = this._animationState.ZFF === LF.c.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? iW : gW
        }
        const eF = hF._interpolate(dF, this._animationState);
        if (this.setValue(eF, uF), RF.length)
          for (let EF = 0; EF < RF.length; EF++)
            if (iW >= 0 && dF >= RF[EF].frame && RF[EF].frame >= WF || iW < 0 && dF <= RF[EF].frame && RF[EF].frame <= WF) {
              const FF = RF[EF];
              FF.isDone || (FF.onlyOnce && (RF.splice(EF, 1), EF--), FF.isDone = !0, FF.action(dF))
            } return PF || (this._stopped = !0), PF
      }
    }
    var OF = SF(37873);
    class xW {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(FF) {
        this._weight = -1 !== FF ? Math.min(Math.max(FF, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(FF) {
        for (let WF = 0; WF < this._runtimeAnimations.length; WF++) {
          this._runtimeAnimations[WF]._prepareForSpeedRatioChange(FF)
        }
        this._speedRatio = FF, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          uF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          hF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          bW = arguments.length > 6 ? arguments[6] : void 0,
          dF = arguments.length > 7 ? arguments[7] : void 0,
          PF = arguments.length > 8 ? arguments[8] : void 0,
          RF = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          iW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = WF, this.fromFrame = SF, this.toFrame = CF, this.loopAnimation = uF, this.onAnimationEnd = bW, this.onAnimationLoop = PF, this.isAdditive = RF, this.playOrder = iW, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.vmF = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new AF.b, this.onAnimationLoopObservable = new AF.b, this._scene = FF, dF && this.appendAnimations(WF, dF), this._speedRatio = hF, FF._activeAnimatables.push(this)
      }
      syncWith(FF) {
        if (this._syncRoot = FF, FF) {
          const FF = this._scene._activeAnimatables.indexOf(this);
          FF > -1 && (this._scene._activeAnimatables.splice(FF, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(FF, WF) {
        for (let SF = 0; SF < WF.length; SF++) {
          const CF = WF[SF],
            AF = new mW(FF, CF, this._scene, this);
          AF._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(AF)
        }
      }
      getAnimationByTargetProperty(FF) {
        const WF = this._runtimeAnimations;
        for (let SF = 0; SF < WF.length; SF++)
          if (WF[SF].animation.targetProperty === FF) return WF[SF].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(FF) {
        const WF = this._runtimeAnimations;
        for (let SF = 0; SF < WF.length; SF++)
          if (WF[SF].animation.targetProperty === FF) return WF[SF];
        return null
      }
      reset() {
        const FF = this._runtimeAnimations;
        for (let WF = 0; WF < FF.length; WF++) FF[WF].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(FF) {
        const WF = this._runtimeAnimations;
        for (let SF = 0; SF < WF.length; SF++) WF[SF].animation.enableBlending = !0, WF[SF].animation.blendingSpeed = FF
      }
      disableBlending() {
        const FF = this._runtimeAnimations;
        for (let WF = 0; WF < FF.length; WF++) FF[WF].animation.enableBlending = !1
      }
      goToFrame(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const SF = this._runtimeAnimations;
        if (SF[0]) {
          const WF = SF[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? SF[0].currentFrame;
          const CF = 0 === this.speedRatio ? 0 : (FF - this._frameToSyncFromJump) / WF * 1e3 / this.speedRatio;
          this._manualJumpDelay = -CF
        }
        for (let CF = 0; CF < SF.length; CF++) SF[CF].goToFrame(FF, WF ? this._weight : -1);
        this._goToFrame = FF
      }
      get paused() {
        return this.vmF
      }
      pause() {
        this.vmF || (this.vmF = !0)
      }
      restart() {
        this.vmF = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (FF || WF) {
          const AF = this._scene._activeAnimatables.indexOf(this);
          if (AF > -1) {
            const uF = this._runtimeAnimations;
            for (let SF = uF.length - 1; SF >= 0; SF--) {
              const CF = uF[SF];
              FF && CF.animation.name != FF || (WF && !WF(CF.target) || (CF.dispose(), uF.splice(SF, 1)))
            }
            0 == uF.length && (SF || this._scene._activeAnimatables.splice(AF, 1), CF || this._raiseOnAnimationEnd())
          }
        } else {
          const FF = this._scene._activeAnimatables.indexOf(this);
          if (FF > -1) {
            SF || this._scene._activeAnimatables.splice(FF, 1);
            const WF = this._runtimeAnimations;
            for (let FF = 0; FF < WF.length; FF++) WF[FF].dispose();
            this._runtimeAnimations.length = 0, CF || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((FF => {
          this.onAnimationEndObservable.add((() => {
            FF(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(FF) {
        if (this.vmF) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = FF), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = FF, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += FF - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !xW.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let WF = !1;
        const SF = this._runtimeAnimations;
        let CF;
        for (CF = 0; CF < SF.length; CF++) {
          const AF = SF[CF].animate(FF - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          WF = WF || AF
        }
        if (this.animationStarted = WF, !WF) {
          if (this.disposeOnEnd)
            for (CF = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(CF, 1), CF = 0; CF < SF.length; CF++) SF[CF].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return WF
      }
    }

    function ZF(FF) {
      if (0 === FF.totalWeight && 0 === FF.totalAdditiveWeight) return FF.originalValue;
      let WF = 1;
      const SF = uF.j.HC[0],
        CF = uF.j.HC[1],
        AF = uF.j.Quaternion[0];
      let hF = 0;
      const bW = FF.animations[0],
        dF = FF.originalValue;
      let PF, RF = !1;
      if (FF.totalWeight < 1) PF = 1 - FF.totalWeight, dF.decompose(CF, AF, SF);
      else {
        if (hF = 1, WF = FF.totalWeight, PF = bW.weight / WF, 1 == PF) {
          if (!FF.totalAdditiveWeight) return bW.currentValue;
          RF = !0
        }
        bW.currentValue.decompose(CF, AF, SF)
      }
      if (!RF) {
        CF.scaleInPlace(PF), SF.scaleInPlace(PF), AF.scaleInPlace(PF);
        for (let bW = hF; bW < FF.animations.length; bW++) {
          const hF = FF.animations[bW];
          if (0 === hF.weight) continue;
          PF = hF.weight / WF;
          const dF = uF.j.HC[2],
            RF = uF.j.HC[3],
            iW = uF.j.Quaternion[1];
          hF.currentValue.decompose(RF, iW, dF), RF.scaleAndAddToRef(PF, CF), iW.scaleAndAddToRef(uF.e.Dot(AF, iW) > 0 ? PF : -PF, AF), dF.scaleAndAddToRef(PF, SF)
        }
        AF.normalize()
      }
      for (let eF = 0; eF < FF.additiveAnimations.length; eF++) {
        const WF = FF.additiveAnimations[eF];
        if (0 === WF.weight) continue;
        const hF = uF.j.HC[2],
          bW = uF.j.HC[3],
          dF = uF.j.Quaternion[1];
        WF.currentValue.decompose(bW, dF, hF), bW.multiplyToRef(CF, bW), uF.r.LerpToRef(CF, bW, WF.weight, CF), AF.multiplyToRef(dF, dF), uF.e.SlerpToRef(AF, dF, WF.weight, AF), hF.scaleAndAddToRef(WF.weight, SF)
      }
      const iW = bW ? bW._animationState.workValue : uF.j.Matrix[0].clone();
      return uF.b.ComposeToRef(CF, AF, SF, iW), iW
    }

    function oF(FF, WF) {
      if (0 === FF.totalWeight && 0 === FF.totalAdditiveWeight) return WF;
      const SF = FF.animations[0],
        CF = FF.originalValue;
      let AF = WF;
      if (0 === FF.totalWeight && FF.totalAdditiveWeight > 0) AF.fdF(CF);
      else if (1 === FF.animations.length) {
        if (uF.e.SlerpToRef(CF, SF.currentValue, Math.min(1, FF.totalWeight), AF), 0 === FF.totalAdditiveWeight) return AF
      } else if (FF.animations.length > 1) {
        let SF, hF, bW = 1;
        if (FF.totalWeight < 1) {
          const WF = 1 - FF.totalWeight;
          SF = [], hF = [], SF.push(CF), hF.push(WF)
        } else {
          if (2 === FF.animations.length && (uF.e.SlerpToRef(FF.animations[0].currentValue, FF.animations[1].currentValue, FF.animations[1].weight / FF.totalWeight, WF), 0 === FF.totalAdditiveWeight)) return WF;
          SF = [], hF = [], bW = FF.totalWeight
        }
        for (let WF = 0; WF < FF.animations.length; WF++) {
          const CF = FF.animations[WF];
          SF.push(CF.currentValue), hF.push(CF.weight / bW)
        }
        let dF = 0;
        for (let FF = 0; FF < SF.length;) FF ? (dF += hF[FF], uF.e.SlerpToRef(AF, SF[FF], hF[FF] / dF, AF), FF++) : (uF.e.SlerpToRef(SF[FF], SF[FF + 1], hF[FF + 1] / (hF[FF] + hF[FF + 1]), WF), AF = WF, dF = hF[FF] + hF[FF + 1], FF += 2)
      }
      for (let hF = 0; hF < FF.additiveAnimations.length; hF++) {
        const WF = FF.additiveAnimations[hF];
        0 !== WF.weight && (AF.multiplyToRef(WF.currentValue, uF.j.Quaternion[0]), uF.e.SlerpToRef(AF, uF.j.Quaternion[0], WF.weight, AF))
      }
      return AF
    }

    function YF(FF, WF) {
      WF && (WF.prototype.copyAnimationRange = function(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new LF.c(this.name, "_matrix", FF.animations[0].framePerSecond, LF.c.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const uF = FF.animations[0].getRange(WF);
        if (!uF) return !1;
        const hF = uF.from,
          bW = uF.to,
          dF = FF.animations[0].getKeys(),
          PF = FF.length,
          RF = FF.getParent(),
          iW = this.getParent(),
          eF = CF && RF && PF && this.length && PF !== this.length,
          EF = eF && iW && RF ? iW.length / RF.length : 1,
          QF = CF && !iW && AF && (1 !== AF.x || 1 !== AF.y || 1 !== AF.z),
          rW = this.animations[0].getKeys();
        let gW, tW, TF;
        for (let aW = 0, kW = dF.length; aW < kW; aW++) gW = dF[aW], gW.frame >= hF && gW.frame <= bW && (CF ? (TF = gW.value.clone(), eF ? (tW = TF.getTranslation(), TF.setTranslation(tW.scaleInPlace(EF))) : QF && AF ? (tW = TF.getTranslation(), TF.setTranslation(tW.multiplyInPlace(AF))) : TF = gW.value) : TF = gW.value, rW.push({
          frame: gW.frame + SF,
          value: TF
        }));
        return this.animations[0].createRange(WF, hF + SF, bW + SF), !0
      }), FF && (FF.prototype._animate = function(FF) {
        const WF = this._animationWrites,
          SF = this._animationWriteCount;
        let CF = 0;
        for (let uF = this._animationStepWriteCount; uF < SF; uF++) {
          const FF = WF[uF];
          FF.carried && -1 === FF.weight || (FF.carried = !0, WF[uF] = WF[CF], WF[CF] = FF, CF++)
        }
        for (let uF = CF; uF < SF; uF++) {
          const FF = WF[uF];
          FF.runtimeAnimation = null, FF.target = null
        }
        if (this._animationWriteCount = CF, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const AF = OF.d.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = AF
        }
        this.deltaTime = void 0 !== FF ? FF : this.useConstantAnimationDeltaTime ? 16 : (AF - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = AF;
        const hF = this._activeAnimatables;
        if (0 === hF.length) return;
        this._animationTime += this.deltaTime;
        const bW = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let uF = 0; uF < hF.length; uF++) {
          const FF = hF[uF];
          !FF._animate(bW) && FF.disposeOnEnd && uF--
        }! function(FF) {
          if (FF._registeredForLateAnimationBindings.length) {
            for (let WF = 0; WF < FF._registeredForLateAnimationBindings.length; WF++) {
              const SF = FF._registeredForLateAnimationBindings.data[WF];
              for (const FF in SF._lateAnimationHolders) {
                const WF = SF._lateAnimationHolders[FF],
                  CF = WF.animations[0],
                  AF = WF.originalValue;
                if (void 0 === AF || null === AF) continue;
                const hF = LF.c.AllowMatrixDecomposeForInterpolation && AF.m;
                let bW = SF[FF];
                if (hF) bW = ZF(WF);
                else if (void 0 !== AF.w) bW = oF(WF, bW || uF.e.Identity());
                else {
                  let FF = 0,
                    SF = 1;
                  const uF = CF && CF._animationState.ZFF === LF.c.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (WF.totalWeight < 1) bW = uF ? AF.clone ? AF.clone() : AF : CF && AF.scale ? AF.scale(1 - WF.totalWeight) : CF ? AF * (1 - WF.totalWeight) : AF.clone ? AF.clone() : AF;
                  else if (CF) {
                    SF = WF.totalWeight;
                    const hF = CF.weight / SF;
                    bW = 1 !== hF ? CF.currentValue.scale ? CF.currentValue.scale(hF) : CF.currentValue * hF : (WF.animations.length > 1 || WF.additiveAnimations.length > 0) && CF.currentValue.clone ? CF.currentValue.clone() : CF.currentValue, uF && (bW.addToRef ? bW.addToRef(AF, bW) : bW += AF), FF = 1
                  }
                  for (let CF = FF; CF < WF.animations.length; CF++) {
                    const FF = WF.animations[CF],
                      AF = FF.weight / SF;
                    AF && (FF.currentValue.scaleAndAddToRef ? FF.currentValue.scaleAndAddToRef(AF, bW) : bW += FF.currentValue * AF)
                  }
                  for (let CF = 0; CF < WF.additiveAnimations.length; CF++) {
                    const FF = WF.additiveAnimations[CF],
                      SF = FF.weight;
                    SF && (FF.currentValue.scaleAndAddToRef ? FF.currentValue.scaleAndAddToRef(SF, bW) : bW += FF.currentValue * SF)
                  }
                }
                SF[FF] = bW
              }
              SF._lateAnimationHolders = {}
            }
            FF._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, FF.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((FF, WF) => FF.playOrder - WF.playOrder))
      }, FF.prototype.beginWeightedAnimation = function(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          AF = arguments.length > 4 ? arguments[4] : void 0,
          uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          hF = arguments.length > 6 ? arguments[6] : void 0,
          bW = arguments.length > 7 ? arguments[7] : void 0,
          dF = arguments.length > 8 ? arguments[8] : void 0,
          PF = arguments.length > 9 ? arguments[9] : void 0,
          RF = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const iW = this.beginAnimation(FF, WF, SF, AF, uF, hF, bW, !1, dF, PF, RF);
        return iW.weight = CF, iW
      }, FF.prototype.beginAnimation = function(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          uF = arguments.length > 5 ? arguments[5] : void 0,
          hF = arguments.length > 6 ? arguments[6] : void 0,
          bW = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          dF = arguments.length > 8 ? arguments[8] : void 0,
          PF = arguments.length > 9 ? arguments[9] : void 0,
          RF = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (AF < 0) {
          const FF = WF;
          WF = SF, SF = FF, AF = -AF
        }
        WF > SF && (AF = -AF), bW && this.stopAnimation(FF, void 0, dF), hF || (hF = new xW(this, FF, WF, SF, CF, AF, uF, void 0, PF, RF));
        const iW = !dF || dF(FF);
        if (FF.animations && iW && hF.appendAnimations(FF, FF.animations), FF.getAnimatables) {
          const RF = FF.getAnimatables();
          for (let FF = 0; FF < RF.length; FF++) this.beginAnimation(RF[FF], WF, SF, CF, AF, uF, hF, bW, dF, PF)
        }
        return hF.reset(), hF
      }, FF.prototype.beginHierarchyAnimation = function(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          hF = arguments.length > 6 ? arguments[6] : void 0,
          bW = arguments.length > 7 ? arguments[7] : void 0,
          dF = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          PF = arguments.length > 9 ? arguments[9] : void 0,
          RF = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const iW = FF.getDescendants(WF),
          eF = [];
        eF.push(this.beginAnimation(FF, SF, CF, AF, uF, hF, bW, dF, PF, void 0, RF));
        for (const EF of iW) eF.push(this.beginAnimation(EF, SF, CF, AF, uF, hF, bW, dF, PF, void 0, RF));
        return eF
      }, FF.prototype.beginDirectAnimation = function(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (uF < 0) {
          const FF = SF;
          SF = CF, CF = FF, uF = -uF
        }
        SF > CF && (uF = -uF);
        return new xW(this, FF, SF, CF, AF, uF, arguments.length > 6 ? arguments[6] : void 0, WF, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, FF.prototype.beginDirectHierarchyAnimation = function(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
        let PF = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const RF = FF.getDescendants(WF),
          iW = [];
        iW.push(this.beginDirectAnimation(FF, SF, CF, AF, uF, hF, bW, dF, PF));
        for (const eF of RF) iW.push(this.beginDirectAnimation(eF, SF, CF, AF, uF, hF, bW, dF, PF));
        return iW
      }, FF.prototype.getAnimatableByTarget = function(FF) {
        for (let WF = 0; WF < this._activeAnimatables.length; WF++)
          if (this._activeAnimatables[WF].target === FF) return this._activeAnimatables[WF];
        return null
      }, FF.prototype.getAllAnimatablesByTarget = function(FF) {
        const WF = [];
        for (let SF = 0; SF < this._activeAnimatables.length; SF++) this._activeAnimatables[SF].target === FF && WF.push(this._activeAnimatables[SF]);
        return WF
      }, FF.prototype.stopAnimation = function(FF, WF, SF) {
        const CF = this.getAllAnimatablesByTarget(FF);
        for (const AF of CF) AF.stop(WF, SF)
      }, FF.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let FF = 0; FF < this._activeAnimatables.length; FF++) this._activeAnimatables[FF].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const FF of this.animationGroups) FF.stop()
      })
    }
    xW.ProcessPausedAnimatables = !1;
    var MF, cW = SF(35631),
      GF = SF(38187),
      zW = SF(37855);
    class IF extends GF.e {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(FF) {
        (FF.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.fdF(FF), this._markAsDirtyAndDecompose())
      }
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          hF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          bW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(FF, WF.OWF(), !1), this.name = FF, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = WF, this._localMatrix = CF?.clone() ?? uF.b.Identity(), this._restMatrix = AF ?? this._localMatrix.clone(), this._bindMatrix = hF ?? this._localMatrix.clone(), this._index = bW, this._absoluteMatrix = new uF.b, this._absoluteBindMatrix = new uF.b, this._absoluteInverseBindMatrix = new uF.b, this._finalMatrix = new uF.b, WF.bones.push(this), this.setParent(SF, !1), this._updateAbsoluteBindMatrices()
      }
      getClassName() {
        return "Bone"
      }
      getSkeleton() {
        return this._skeleton
      }
      get parent() {
        return this._parentNode
      }
      getParent() {
        return this.parent
      }
      getChildren() {
        return this.children
      }
      getIndex() {
        return null === this._index ? this.getSkeleton().bones.indexOf(this) : this._index
      }
      set parent(FF) {
        this.setParent(FF)
      }
      setParent(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== FF) {
          if (this.parent) {
            const FF = this.parent.children.indexOf(this); - 1 !== FF && this.parent.children.splice(FF, 1)
          }
          this._parentNode = FF, this.parent && this.parent.children.push(this), WF && this._updateAbsoluteBindMatrices(), this.XbF()
        }
      }
      getLocalMatrix() {
        return this._compose(), this._localMatrix
      }
      getBindMatrix() {
        return this._bindMatrix
      }
      getBaseMatrix() {
        return this.getBindMatrix()
      }
      getRestMatrix() {
        return this._restMatrix
      }
      getRestPose() {
        return this.getRestMatrix()
      }
      setRestMatrix(FF) {
        this._restMatrix.fdF(FF)
      }
      setRestPose(FF) {
        this.setRestMatrix(FF)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(FF) {
        this.yhF(FF)
      }
      setBindPose(FF) {
        this.setBindMatrix(FF)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const FF = uF.j.HC[0],
            WF = uF.j.Quaternion[0],
            SF = uF.j.HC[1];
          this.getRestMatrix().decompose(FF, WF, SF), this._linkedTransformNode.position.fdF(SF), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? uF.e.Identity(), this._linkedTransformNode.rotationQuaternion.fdF(WF), this._linkedTransformNode.Ah.fdF(FF)
        } else this._matrix = this._restMatrix
      }
      getAbsoluteInverseBindMatrix() {
        return this._absoluteInverseBindMatrix
      }
      getInvertedAbsoluteTransform() {
        return this.getAbsoluteInverseBindMatrix()
      }
      getAbsoluteMatrix() {
        return this._skeleton.computeAbsoluteMatrices(), this._absoluteMatrix
      }
      getAbsoluteTransform() {
        return this.getAbsoluteMatrix()
      }
      linkTransformNode(FF) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = FF, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.ubF
      }
      set position(FF) {
        this._decompose(), this.ubF.fdF(FF), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(FF) {
        this.setRotation(FF)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(FF) {
        this.setRotationQuaternion(FF)
      }
      get Ah() {
        return this.getScale()
      }
      set Ah(FF) {
        this.setScale(FF)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = uF.r.Zero(), this._localRotation = uF.e.Zero(), this.ubF = uF.r.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.ubF))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, uF.b.ComposeToRef(this._localScaling, this._localRotation, this.ubF, this._localMatrix)) : this._needToCompose = !1)
      }
      yhF(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.fdF(FF), WF && this._updateAbsoluteBindMatrices(), SF ? this._matrix = FF : this.XbF()
      }
      _updateAbsoluteBindMatrices(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (FF || (FF = this._bindMatrix), this.parent ? FF.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.fdF(FF), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), WF)
          for (let SF = 0; SF < this.children.length; SF++) this.children[SF]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      XbF() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.XbF(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.XbF(), this._needToDecompose = !0
      }
      _updatePosition(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const AF = this.getLocalMatrix();
        if (0 == WF) CF ? (AF.addAtIndex(12, FF.x), AF.addAtIndex(13, FF.y), AF.addAtIndex(14, FF.z)) : AF.setTranslationFromFloats(FF.x, FF.y, FF.z);
        else {
          const WF = IF._TmpMats[0],
            hF = IF._TmpVecs[0];
          this.parent ? (WF.fdF(this.parent.getAbsoluteMatrix()), SF && WF.multiplyToRef(SF.getWorldMatrix(), WF)) : uF.b.IdentityToRef(WF), CF && WF.setTranslationFromFloats(0, 0, 0), WF.invert(), uF.r.TransformCoordinatesToRef(FF, WF, hF), CF ? (AF.addAtIndex(12, hF.x), AF.addAtIndex(13, hF.y), AF.addAtIndex(14, hF.z)) : AF.setTranslationFromFloats(hF.x, hF.y, hF.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(FF, WF, SF, !0)
      }
      setPosition(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(FF, WF, SF, !1)
      }
      setAbsolutePosition(FF, WF) {
        this.setPosition(FF, 1, WF)
      }
      scale(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const AF = this.getLocalMatrix(),
          hF = IF._TmpMats[0];
        uF.b.ScalingToRef(FF, WF, SF, hF), hF.multiplyToRef(AF, AF), hF.invert();
        for (const uF of this.children) {
          const CF = uF.getLocalMatrix();
          CF.multiplyToRef(hF, CF), CF.multiplyAtIndex(12, FF), CF.multiplyAtIndex(13, WF), CF.multiplyAtIndex(14, SF), uF._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), CF)
          for (const uF of this.children) uF.scale(FF, WF, SF, CF)
      }
      setScale(FF) {
        this._decompose(), this._localScaling.fdF(FF), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(FF) {
        this._decompose(), FF.fdF(this._localScaling)
      }
      setYawPitchRoll(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AF = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === CF) {
          const hF = IF._TmpQuat;
          return uF.e.RotationYawPitchRollToRef(FF, WF, SF, hF), void this.setRotationQuaternion(hF, CF, AF)
        }
        const hF = IF._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(hF, AF)) return;
        const bW = IF._TmpMats[1];
        uF.b.RotationYawPitchRollToRef(FF, WF, SF, bW), hF.multiplyToRef(bW, bW), this._rotateWithMatrix(bW, CF, AF)
      }
      rotate(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 ? arguments[3] : void 0;
        const AF = IF._TmpMats[0];
        AF.setTranslationFromFloats(0, 0, 0), uF.b.RotationAxisToRef(FF, WF, AF), this._rotateWithMatrix(AF, SF, CF)
      }
      setAxisAngle(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === SF) {
          const AF = IF._TmpQuat;
          return uF.e.RotationAxisToRef(FF, WF, AF), void this.setRotationQuaternion(AF, SF, CF)
        }
        const AF = IF._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(AF, CF)) return;
        const hF = IF._TmpMats[1];
        uF.b.RotationAxisToRef(FF, WF, hF), AF.multiplyToRef(hF, hF), this._rotateWithMatrix(hF, SF, CF)
      }
      setRotation(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(FF.y, FF.x, FF.z, WF, SF)
      }
      setRotationQuaternion(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === WF) return this._decompose(), this._localRotation.fdF(FF), void this._markAsDirtyAndCompose();
        const CF = IF._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(CF, SF)) return;
        const AF = IF._TmpMats[1];
        uF.b.FromQuaternionToRef(FF, AF), CF.multiplyToRef(AF, AF), this._rotateWithMatrix(AF, WF, SF)
      }
      setRotationMatrix(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === WF) {
          const CF = IF._TmpQuat;
          return uF.e.FromRotationMatrixToRef(FF, CF), void this.setRotationQuaternion(CF, WF, SF)
        }
        const CF = IF._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(CF, SF)) return;
        const AF = IF._TmpMats[1];
        AF.fdF(FF), CF.multiplyToRef(FF, AF), this._rotateWithMatrix(AF, WF, SF)
      }
      _rotateWithMatrix(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const CF = this.getLocalMatrix(),
          AF = CF.m[12],
          uF = CF.m[13],
          hF = CF.m[14],
          bW = this.getParent(),
          dF = IF._TmpMats[3],
          PF = IF._TmpMats[4];
        bW && 1 == WF ? (SF ? (dF.fdF(SF.getWorldMatrix()), bW.getAbsoluteMatrix().multiplyToRef(dF, dF)) : dF.fdF(bW.getAbsoluteMatrix()), PF.fdF(dF), PF.invert(), CF.multiplyToRef(dF, CF), CF.multiplyToRef(FF, CF), CF.multiplyToRef(PF, CF)) : 1 == WF && SF ? (dF.fdF(SF.getWorldMatrix()), PF.fdF(dF), PF.invert(), CF.multiplyToRef(dF, CF), CF.multiplyToRef(FF, CF), CF.multiplyToRef(PF, CF)) : CF.multiplyToRef(FF, CF), CF.setTranslationFromFloats(AF, uF, hF), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(FF, WF) {
        const SF = IF._TmpMats[2];
        return FF.fdF(this.getAbsoluteMatrix()), WF ? (FF.multiplyToRef(WF.getWorldMatrix(), FF), uF.b.ScalingToRef(WF.Ah.x, WF.Ah.y, WF.Ah.z, SF)) : uF.b.IdentityToRef(SF), FF.invert(), !isNaN(FF.m[0]) && (SF.multiplyAtIndex(0, this._scalingDeterminant), FF.multiplyToRef(SF, FF), !0)
      }
      fD() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const SF = uF.r.Zero();
        return this.getPositionToRef(FF, WF, SF), SF
      }
      getPositionToRef() {
        let FF = arguments.length > 1 ? arguments[1] : void 0,
          WF = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const FF = this.getLocalMatrix();
          WF.x = FF.m[12], WF.y = FF.m[13], WF.z = FF.m[14]
        } else {
          const SF = IF._TmpMats[0].fdF(this.getAbsoluteMatrix());
          FF && SF.multiplyToRef(FF.getWorldMatrix(), SF), WF.x = SF.m[12], WF.y = SF.m[13], WF.z = SF.m[14]
        }
      }
      getAbsolutePosition() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const WF = uF.r.Zero();
        return this.getPositionToRef(1, FF, WF), WF
      }
      getAbsolutePositionToRef(FF, WF) {
        this.getPositionToRef(1, FF, WF)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.fdF(this._localMatrix);
          const FF = this._skeleton.getPoseMatrix();
          FF && this._absoluteMatrix.multiplyToRef(FF, this._absoluteMatrix)
        }
        const FF = this.children,
          WF = FF.length;
        for (let SF = 0; SF < WF; SF++) FF[SF].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      CAF(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const SF = uF.r.Zero();
        return this.getDirectionToRef(FF, WF, SF), SF
      }
      getDirectionToRef(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const CF = IF._TmpMats[0].fdF(this.getAbsoluteMatrix());
        WF && CF.multiplyToRef(WF.getWorldMatrix(), CF), uF.r.TransformNormalToRef(FF, CF, SF), SF.normalize()
      }
      getRotation() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const SF = uF.r.Zero();
        return this.getRotationToRef(FF, WF, SF), SF
      }
      getRotationToRef() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const CF = IF._TmpQuat;
        this.getRotationQuaternionToRef(FF, WF, CF), CF.toEulerAnglesToRef(SF)
      }
      getRotationQuaternion() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const SF = uF.e.Identity();
        return this.getRotationQuaternionToRef(FF, WF, SF), SF
      }
      getRotationQuaternionToRef() {
        let FF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          WF = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), WF.fdF(this._localRotation);
        else {
          const SF = IF._TmpMats[0],
            CF = this.getAbsoluteMatrix();
          FF ? CF.multiplyToRef(FF.getWorldMatrix(), SF) : SF.fdF(CF), SF.multiplyAtIndex(0, this._scalingDeterminant), SF.multiplyAtIndex(1, this._scalingDeterminant), SF.multiplyAtIndex(2, this._scalingDeterminant), SF.decompose(void 0, WF, void 0)
        }
      }
      getRotationMatrix() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 ? arguments[1] : void 0;
        const SF = uF.b.Identity();
        return this.getRotationMatrixToRef(FF, WF, SF), SF
      }
      getRotationMatrixToRef() {
        let FF = arguments.length > 1 ? arguments[1] : void 0,
          WF = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(WF);
        else {
          const SF = IF._TmpMats[0],
            CF = this.getAbsoluteMatrix();
          FF ? CF.multiplyToRef(FF.getWorldMatrix(), SF) : SF.fdF(CF), SF.multiplyAtIndex(0, this._scalingDeterminant), SF.multiplyAtIndex(1, this._scalingDeterminant), SF.multiplyAtIndex(2, this._scalingDeterminant), SF.getRotationMatrixToRef(WF)
        }
      }
      getAbsolutePositionFromLocal(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const SF = uF.r.Zero();
        return this.getAbsolutePositionFromLocalToRef(FF, WF, SF), SF
      }
      getAbsolutePositionFromLocalToRef(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const CF = IF._TmpMats[0].fdF(this.getAbsoluteMatrix());
        WF && CF.multiplyToRef(WF.getWorldMatrix(), CF), uF.r.TransformCoordinatesToRef(FF, CF, SF)
      }
      getLocalPositionFromAbsolute(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const SF = uF.r.Zero();
        return this.getLocalPositionFromAbsoluteToRef(FF, WF, SF), SF
      }
      getLocalPositionFromAbsoluteToRef(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const CF = IF._TmpMats[0].fdF(this.getAbsoluteMatrix());
        WF && CF.multiplyToRef(WF.getWorldMatrix(), CF), CF.invert(), uF.r.TransformCoordinatesToRef(FF, CF, SF)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const FF = this._skeleton.bones.indexOf(this);
        if (-1 !== FF && this._skeleton.bones.splice(FF, 1), this._parentNode && this._parentNode.children) {
          const FF = this._parentNode.children,
            WF = FF.indexOf(this); - 1 !== WF && FF.splice(WF, 1)
        }
        super.dispose()
      }
    }
    IF._TmpVecs = (0, cW.e)(2, uF.r.Zero), IF._TmpQuat = uF.e.Identity(), IF._TmpMats = (0, cW.e)(5, uF.b.Identity), (MF = IF.prototype).copyAnimationRange ?? (MF.copyAnimationRange = (0, zW.j)("Bone", "copyAnimationRange"));
    var fF = SF(38057);
    let yW = !1;
    var sF = SF(37928),
      nF = SF(38301),
      HF = SF(38312),
      KF = SF(38303),
      wF = SF(38095);

    function XF(FF, WF) {
      const SF = (0, EF.RandomRange)(0, 1);
      RF.i.LerpToRef(WF.color1, WF.color2, SF, FF.color)
    }

    function UF(FF, WF) {
      WF.colorDead.subtractToRef(FF.color, WF._colorDiff), WF._colorDiff.scaleToRef(1 / FF.lifeTime, FF.colorStep)
    }

    function BF(FF, WF) {
      FF._properties.currentColorGradient = WF._colorGradients[0], FF._properties.currentColorGradient.getColorToRef(FF.color), FF._properties.currentColor1.fdF(FF.color), WF._colorGradients.length > 1 ? WF._colorGradients[1].getColorToRef(FF._properties.currentColor2) : FF._properties.currentColor2.fdF(FF.color)
    }

    function jW(FF, WF) {
      const SF = WF._colorGradients;
      CF.l.GetCurrentGradient(WF._ratio, SF, ((WF, SF, CF) => {
        WF !== FF._properties.currentColorGradient && (FF._properties.currentColor1.fdF(FF._properties.currentColor2), SF.getColorToRef(FF._properties.currentColor2), FF._properties.currentColorGradient = WF), RF.i.LerpToRef(FF._properties.currentColor1, FF._properties.currentColor2, CF, FF.color), FF.color.a < 0 && (FF.color.a = 0)
      }))
    }

    function vW(FF, WF) {
      FF.colorStep.scaleToRef(WF._scaledUpdateSpeed, WF._scaledColorStep), FF.color.addInPlace(WF._scaledColorStep), FF.color.a < 0 && (FF.color.a = 0)
    }

    function JF(FF, WF) {
      CF.l.GetCurrentGradient(WF._ratio, WF._angularSpeedGradients, ((WF, SF, CF) => {
        WF !== FF._properties.currentAngularSpeedGradient && (FF._properties.currentAngularSpeed1 = FF._properties.currentAngularSpeed2, FF._properties.currentAngularSpeed2 = SF.getFactor(), FF._properties.currentAngularSpeedGradient = WF), FF.angularSpeed = (0, EF.Lerp)(FF._properties.currentAngularSpeed1, FF._properties.currentAngularSpeed2, CF)
      }))
    }

    function pF(FF, WF) {
      FF.angle += FF.angularSpeed * WF._scaledUpdateSpeed
    }

    function lF(FF, WF) {
      WF.particleEmitterType.startDirectionFunction(WF._emitterWorldMatrix, FF.direction, FF, WF.isLocal, WF._emitterInverseWorldMatrix)
    }

    function FW(FF, WF) {
      WF.startDirectionFunction(WF._emitterWorldMatrix, FF.direction, FF, WF.isLocal)
    }

    function WW(FF, WF) {
      FF._properties.currentVelocityGradient = WF._velocityGradients[0], FF._properties.currentVelocity1 = FF._properties.currentVelocityGradient.getFactor(), WF._velocityGradients.length > 1 ? FF._properties.currentVelocity2 = WF._velocityGradients[1].getFactor() : FF._properties.currentVelocity2 = FF._properties.currentVelocity1
    }

    function SW(FF, WF) {
      FF._properties.currentLimitVelocityGradient = WF._limitVelocityGradients[0], FF._properties.currentLimitVelocity1 = FF._properties.currentLimitVelocityGradient.getFactor(), WF._limitVelocityGradients.length > 1 ? FF._properties.currentLimitVelocity2 = WF._limitVelocityGradients[1].getFactor() : FF._properties.currentLimitVelocity2 = FF._properties.currentLimitVelocity1
    }

    function CW(FF, WF) {
      CF.l.GetCurrentGradient(WF._ratio, WF._velocityGradients, ((WF, SF, CF) => {
        WF !== FF._properties.currentVelocityGradient && (FF._properties.currentVelocity1 = FF._properties.currentVelocity2, FF._properties.currentVelocity2 = SF.getFactor(), FF._properties.currentVelocityGradient = WF), FF._properties.directionScale *= (0, EF.Lerp)(FF._properties.currentVelocity1, FF._properties.currentVelocity2, CF)
      }))
    }

    function AW(FF, WF) {
      CF.l.GetCurrentGradient(WF._ratio, WF._limitVelocityGradients, ((SF, CF, AF) => {
        SF !== FF._properties.currentLimitVelocityGradient && (FF._properties.currentLimitVelocity1 = FF._properties.currentLimitVelocity2, FF._properties.currentLimitVelocity2 = CF.getFactor(), FF._properties.currentLimitVelocityGradient = SF);
        const uF = (0, EF.Lerp)(FF._properties.currentLimitVelocity1, FF._properties.currentLimitVelocity2, AF);
        FF.direction.length() > uF && FF.direction.scaleInPlace(WF.limitVelocityDamping)
      }))
    }

    function uW(FF) {
      FF.direction.scaleToRef(FF._properties.directionScale, FF._properties.scaledDirection)
    }

    function hW(FF, WF) {
      WF.particleEmitterType.startPositionFunction(WF._emitterWorldMatrix, FF.position, FF, WF.isLocal)
    }

    function bS(FF, WF) {
      WF.startPositionFunction(WF._emitterWorldMatrix, FF.position, FF, WF.isLocal)
    }

    function dW(FF, WF) {
      FF._properties.localPosition ? FF._properties.localPosition.fdF(FF.position) : FF._properties.localPosition = FF.position.clone(), uF.r.TransformCoordinatesToRef(FF._properties.localPosition, WF._emitterWorldMatrix, FF.position)
    }

    function PW(FF, WF) {
      WF.isLocal && FF._properties.localPosition ? (FF._properties.localPosition.addInPlace(FF._properties.scaledDirection), uF.r.TransformCoordinatesToRef(FF._properties.localPosition, WF._emitterWorldMatrix, FF.position)) : FF.position.addInPlace(FF._properties.scaledDirection)
    }

    function RW(FF, WF) {
      FF._properties.currentDragGradient = WF._dragGradients[0], FF._properties.currentDrag1 = FF._properties.currentDragGradient.getFactor(), WF._dragGradients.length > 1 ? FF._properties.currentDrag2 = WF._dragGradients[1].getFactor() : FF._properties.currentDrag2 = FF._properties.currentDrag1
    }

    function iS(FF, WF) {
      CF.l.GetCurrentGradient(WF._ratio, WF._dragGradients, ((WF, SF, CF) => {
        WF !== FF._properties.currentDragGradient && (FF._properties.currentDrag1 = FF._properties.currentDrag2, FF._properties.currentDrag2 = SF.getFactor(), FF._properties.currentDragGradient = WF);
        const AF = (0, EF.Lerp)(FF._properties.currentDrag1, FF._properties.currentDrag2, CF);
        FF._properties.scaledDirection.scaleInPlace(1 - AF)
      }))
    }

    function eW(FF, WF) {
      FF._properties.randomNoiseCoordinates1 && FF._properties.randomNoiseCoordinates2 ? (FF._properties.randomNoiseCoordinates1.FhF(Math.random(), Math.random(), Math.random()), FF._properties.randomNoiseCoordinates2.FhF(Math.random(), Math.random(), Math.random())) : (FF._properties.randomNoiseCoordinates1 = new uF.r(Math.random(), Math.random(), Math.random()), FF._properties.randomNoiseCoordinates2 = new uF.r(Math.random(), Math.random(), Math.random()))
    }

    function EW(FF, WF) {
      const SF = WF._noiseTextureData,
        CF = WF._noiseTextureSize;
      if (SF && CF && FF._properties.randomNoiseCoordinates1 && FF._properties.randomNoiseCoordinates2) {
        const AF = WF._fetchR(FF._properties.randomNoiseCoordinates1.x, FF._properties.randomNoiseCoordinates1.y, CF.width, CF.height, SF),
          hF = WF._fetchR(FF._properties.randomNoiseCoordinates1.z, FF._properties.randomNoiseCoordinates2.x, CF.width, CF.height, SF),
          bW = WF._fetchR(FF._properties.randomNoiseCoordinates2.y, FF._properties.randomNoiseCoordinates2.z, CF.width, CF.height, SF),
          dF = uF.j.HC[0],
          PF = uF.j.HC[1];
        dF.FhF((2 * AF - 1) * WF.noiseStrength.x, (2 * hF - 1) * WF.noiseStrength.y, (2 * bW - 1) * WF.noiseStrength.z), dF.scaleToRef(WF._tempScaledUpdateSpeed, PF), FF.direction.addInPlace(PF)
      }
    }

    function QW(FF, WF) {
      WF.gravity.scaleToRef(WF._tempScaledUpdateSpeed, WF._scaledGravity), FF.direction.addInPlace(WF._scaledGravity)
    }

    function rS(FF, WF) {
      FF.size = (0, EF.RandomRange)(WF.minSize, WF.maxSize), FF.scale.FhF((0, EF.RandomRange)(WF.minScaleX, WF.maxScaleX), (0, EF.RandomRange)(WF.minScaleY, WF.maxScaleY))
    }

    function gS(FF, WF) {
      FF._properties.currentSizeGradient = WF._sizeGradients[0], FF._properties.currentSize1 = FF._properties.currentSizeGradient.getFactor(), FF.size = FF._properties.currentSize1, WF._sizeGradients.length > 1 ? FF._properties.currentSize2 = WF._sizeGradients[1].getFactor() : FF._properties.currentSize2 = FF._properties.currentSize1, FF.scale.FhF((0, EF.RandomRange)(WF.minScaleX, WF.maxScaleX), (0, EF.RandomRange)(WF.minScaleY, WF.maxScaleY))
    }

    function tS(FF, WF) {
      const SF = WF._actualFrame / WF.targetStopDuration;
      CF.l.GetCurrentGradient(SF, WF._startSizeGradients, ((SF, CF, AF) => {
        SF !== WF._currentStartSizeGradient && (WF._currentStartSize1 = WF._currentStartSize2, WF._currentStartSize2 = CF.getFactor(), WF._currentStartSizeGradient = SF);
        const uF = (0, EF.Lerp)(WF._currentStartSize1, WF._currentStartSize2, AF);
        FF.scale.scaleInPlace(uF)
      }))
    }

    function TW(FF, WF) {
      CF.l.GetCurrentGradient(WF._ratio, WF._sizeGradients, ((WF, SF, CF) => {
        WF !== FF._properties.currentSizeGradient && (FF._properties.currentSize1 = FF._properties.currentSize2, FF._properties.currentSize2 = SF.getFactor(), FF._properties.currentSizeGradient = WF), FF.size = (0, EF.Lerp)(FF._properties.currentSize1, FF._properties.currentSize2, CF)
      }))
    }

    function aS(FF, WF) {
      FF.remapData = new uF.v(0, 1, 0, 1)
    }

    function kS(FF, WF) {
      WF._colorRemapGradients && WF._colorRemapGradients.length > 0 && CF.l.GetCurrentGradient(WF._ratio, WF._colorRemapGradients, ((WF, SF, CF) => {
        const AF = (0, EF.Lerp)(WF.factor1, SF.factor1, CF),
          uF = (0, EF.Lerp)(WF.factor2, SF.factor2, CF);
        FF.remapData.x = AF, FF.remapData.y = uF - AF
      })), WF._alphaRemapGradients && WF._alphaRemapGradients.length > 0 && CF.l.GetCurrentGradient(WF._ratio, WF._alphaRemapGradients, ((WF, SF, CF) => {
        const AF = (0, EF.Lerp)(WF.factor1, SF.factor1, CF),
          uF = (0, EF.Lerp)(WF.factor2, SF.factor2, CF);
        FF.remapData.z = AF, FF.remapData.w = uF - AF
      }))
    }

    function qS(FF, WF) {
      const SF = (0, EF.Clamp)(WF._actualFrame / WF.targetStopDuration);
      CF.l.GetCurrentGradient(SF, WF._lifeTimeGradients, ((WF, CF) => {
        const AF = WF,
          uF = CF,
          hF = AF.getFactor(),
          bW = uF.getFactor(),
          dF = (SF - AF.gradient) / (uF.gradient - AF.gradient);
        FF.lifeTime = (0, EF.Lerp)(hF, bW, dF)
      })), WF._emitPower = (0, EF.RandomRange)(WF.minEmitPower, WF.maxEmitPower)
    }

    function VW(FF, WF) {
      FF.lifeTime = (0, EF.RandomRange)(WF.minLifeTime, WF.maxLifeTime), WF._emitPower = (0, EF.RandomRange)(WF.minEmitPower, WF.maxEmitPower)
    }

    function NW(FF, WF) {
      0 === WF._emitPower ? (FF._properties.initialDirection ? FF._properties.initialDirection.fdF(FF.direction) : FF._properties.initialDirection = FF.direction.clone(), FF.direction.set(0, 0, 0)) : (FF._properties.initialDirection = null, FF.direction.scaleInPlace(WF._emitPower)), FF.direction.addInPlace(WF._inheritedVelocityOffset)
    }

    function DW(FF, WF) {
      FF.angularSpeed = (0, EF.RandomRange)(WF.minAngularSpeed, WF.maxAngularSpeed), FF.angle = (0, EF.RandomRange)(WF.minInitialRotation, WF.maxInitialRotation)
    }

    function LW(FF, WF) {
      FF._properties.currentAngularSpeedGradient = WF._angularSpeedGradients[0], FF.angularSpeed = FF._properties.currentAngularSpeedGradient.getFactor(), FF._properties.currentAngularSpeed1 = FF.angularSpeed, WF._angularSpeedGradients.length > 1 ? FF._properties.currentAngularSpeed2 = WF._angularSpeedGradients[1].getFactor() : FF._properties.currentAngularSpeed2 = FF._properties.currentAngularSpeed1, FF.angle = (0, EF.RandomRange)(WF.minInitialRotation, WF.maxInitialRotation)
    }

    function mS(FF, WF) {
      FF._properties.initialStartSpriteCellId = WF.startSpriteCellID, FF._properties.initialEndSpriteCellId = WF.endSpriteCellID, FF._properties.initialSpriteCellLoop = WF.spriteCellLoop
    }

    function OW(FF, WF) {
      FF.previousItem = WF.previousItem, FF.nextItem = WF, WF.previousItem && (WF.previousItem.nextItem = FF), WF.previousItem = FF
    }

    function xS(FF, WF) {
      FF.previousItem = WF, FF.nextItem = WF.nextItem, WF.nextItem && (WF.nextItem.previousItem = FF), WF.nextItem = FF
    }

    function ZW(FF) {
      FF.previousItem && (FF.previousItem.nextItem = FF.nextItem), FF.nextItem && (FF.nextItem.previousItem = FF.previousItem)
    }
    var oW = SF(38354);
    class YW extends VF {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(FF) {
        this._startDirectionFunction !== FF && (this._startDirectionFunction = FF, this._directionCreation.process = FF ? FW : lF)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(FF) {
        this._startPositionFunction !== FF && (this._startPositionFunction = FF, this._positionCreation.process = FF ? bS : hW)
      }
      set onDispose(FF) {
        this._onDisposeObserver && this.xSF.remove(this._onDisposeObserver), this._onDisposeObserver = this.xSF.add(FF)
      }
      get ZdF() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(FF) {
        this._useRampGradients !== FF && (this._useRampGradients = FF, this._resetEffect(), FF ? (this._rampCreation = {
          process: aS,
          previousItem: null,
          nextItem: null
        }, xS(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: kS,
          previousItem: null,
          nextItem: null
        }, xS(this._remapGradientProcessing, this._gravityProcessing))) : (ZW(this._rampCreation), ZW(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(FF) {
        this._isLocal !== FF && (this._isLocal = FF, FF ? (this._isLocalCreation = {
          process: dW,
          previousItem: null,
          nextItem: null
        }, xS(this._isLocalCreation, this._positionCreation)) : ZW(this._isLocalCreation))
      }
      get particles() {
        return this._particles
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(FF) {
        this._animationSheetEnabled !== FF && (this._animationSheetEnabled = FF, FF ? (this._sheetCreation = {
          process: mS,
          previousItem: null,
          nextItem: null
        }, xS(this._sheetCreation, this._colorDeadCreation)) : ZW(this._sheetCreation), this._reset())
      }
      getActiveCount() {
        return this._particles.length
      }
      getClassName() {
        return "ParticleSystem"
      }
      isStopping() {
        return this._stopped && this.isAlive()
      }
      getCustomEffect() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[FF]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[FF] ?? this._customWrappers[0]
      }
      setCustomEffect(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[WF] = new nF.e(this._engine), this._customWrappers[WF].effect = FF, this._customWrappers[WF].drawContext && (this._customWrappers[WF].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new AF.b), this._onBeforeDrawParticlesObservable
      }
      get vertexShaderName() {
        return "particles"
      }
      get vertexBuffers() {
        return this._vertexBuffers
      }
      get indexBuffer() {
        return this._indexBuffer
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(FF) {
        if (this.noiseTexture !== FF) {
          if (this._noiseTexture = FF, !FF) return ZW(this._noiseCreation), void ZW(this._noiseProcessing);
          this._noiseCreation = {
            process: eW,
            previousItem: null,
            nextItem: null
          }, xS(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: EW,
            previousItem: null,
            nextItem: null
          }, xS(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          hF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          bW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          PF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        yW || (yW = !0, YF(fF.f, IF)), (0, sF.c)(), super(FF), this._emitterInverseWorldMatrix = uF.b.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new uF.r, this.xSF = new AF.b, this.onStoppedObservable = new AF.b, this.onStartedObservable = new AF.b, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new RF.i(0, 0, 0, 0), this._colorDiff = new RF.i(0, 0, 0, 0), this._scaledGravity = uF.r.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = FF => {}, this.recycleParticle = FF => {
          const WF = this._particles.pop();
          WF !== FF && WF.copyTo(FF), WF.metadata = null, this._stockParticles.push(WF)
        }, this._createParticle = () => {
          let FF;
          return 0 !== this._stockParticles.length ? (FF = this._stockParticles.pop(), FF._reset()) : FF = new DF(this), this._prepareParticle(FF), FF
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = WF, this._epsilon = bW, SF && "Scene" !== SF.getClassName() ? (this._engine = SF, this.defaultProjectionMatrix = uF.b.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = SF || dF.e.LastCreatedScene, this._engine = this._scene.sC(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.Zm.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: VW,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: hW,
          previousItem: null,
          nextItem: null
        }, xS(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: lF,
          previousItem: null,
          nextItem: null
        }, xS(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: NW,
          previousItem: null,
          nextItem: null
        }, xS(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: rS,
          previousItem: null,
          nextItem: null
        }, xS(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: DW,
          previousItem: null,
          nextItem: null
        }, xS(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: XF,
          previousItem: null,
          nextItem: null
        }, xS(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: UF,
          previousItem: null,
          nextItem: null
        }, xS(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, PF || (this._colorProcessing = {
          process: vW,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: pF,
          previousItem: null,
          nextItem: null
        }, xS(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: uW,
          previousItem: null,
          nextItem: null
        }, xS(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: PW,
          previousItem: null,
          nextItem: null
        }, xS(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: QW,
          previousItem: null,
          nextItem: null
        }, xS(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = hF, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new nF.e(this._engine)
        }, this._customWrappers[0].effect = CF, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new iW.d, this.updateFunction = FF => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((FF => {
            this._noiseTextureData = FF
          })));
          const WF = FF === this._particles;
          for (let SF = 0; SF < FF.length; SF++) {
            const CF = FF[SF];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const AF = CF.age;
            if (CF.age += this._tempScaledUpdateSpeed, CF.age > CF.lifeTime) {
              const FF = CF.age - AF,
                WF = CF.lifeTime - AF;
              this._tempScaledUpdateSpeed = WF * this._tempScaledUpdateSpeed / FF, CF.age = CF.lifeTime
            }
            this._ratio = CF.age / CF.lifeTime, CF._properties.directionScale = this._tempScaledUpdateSpeed;
            let uF = this._updateQueueStart;
            for (; uF;) uF.process(CF, this), uF = uF.nextItem;
            if (this._isAnimationSheetEnabled && !PF && CF.updateCellIndex(), CF._inheritParticleInfoToSubEmitters(), CF.age >= CF.lifeTime) {
              if (this._emitFromParticle(CF), CF._properties.attachedSubEmitters) {
                for (const FF of CF._properties.attachedSubEmitters) FF.particleSystem.disposeOnStop = !0, FF.particleSystem.stop();
                CF._properties.attachedSubEmitters = null
              }
              this.recycleParticle(CF), WF && SF--
            } else;
          }
        }
      }
      serialize(FF) {
        throw new Error("Method not implemented.")
      }
      clone(FF, WF) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = qS : this._lifeTimeCreation.process = VW
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: tS,
          previousItem: null,
          nextItem: null
        }, xS(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (ZW(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(FF) {
        this.targetStopDuration !== FF && (this._targetStopDuration = FF, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(FF, WF, SF) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, FF, WF, SF), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(FF) {
        return this._removeFactorGradient(this._lifeTimeGradients, FF), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(FF, WF, SF) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = gS, this._sizeGradientProcessing = {
          process: TW,
          previousItem: null,
          nextItem: null
        }, OW(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, FF, WF, SF), this
      }
      removeSizeGradient(FF) {
        return this._removeFactorGradient(this._sizeGradients, FF), 0 === this._sizeGradients?.length && (ZW(this._sizeGradientProcessing), this._sizeCreation.process = rS), this
      }
      addColorRemapGradient(FF, WF, SF) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, FF, WF, SF), this
      }
      removeColorRemapGradient(FF) {
        return this._removeFactorGradient(this._colorRemapGradients, FF), this
      }
      addAlphaRemapGradient(FF, WF, SF) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, FF, WF, SF), this
      }
      removeAlphaRemapGradient(FF) {
        return this._removeFactorGradient(this._alphaRemapGradients, FF), this
      }
      addAngularSpeedGradient(FF, WF, SF) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = LW, this._angularSpeedGradientProcessing = {
          process: JF,
          previousItem: null,
          nextItem: null
        }, OW(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, FF, WF, SF), this
      }
      removeAngularSpeedGradient(FF) {
        return this._removeFactorGradient(this._angularSpeedGradients, FF), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = DW, ZW(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(FF, WF, SF) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: WW,
          previousItem: null,
          nextItem: null
        }, xS(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: CW,
          previousItem: null,
          nextItem: null
        }, OW(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, FF, WF, SF), this
      }
      removeVelocityGradient(FF) {
        return this._removeFactorGradient(this._velocityGradients, FF), 0 === this._velocityGradients?.length && (ZW(this._velocityCreation), ZW(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(FF, WF, SF) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: SW,
          previousItem: null,
          nextItem: null
        }, xS(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: AW,
          previousItem: null,
          nextItem: null
        }, xS(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, FF, WF, SF), this
      }
      removeLimitVelocityGradient(FF) {
        return this._removeFactorGradient(this._limitVelocityGradients, FF), 0 === this._limitVelocityGradients?.length && (ZW(this._limitVelocityCreation), ZW(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(FF, WF, SF) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: RW,
          previousItem: null,
          nextItem: null
        }, OW(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: iS,
          previousItem: null,
          nextItem: null
        }, OW(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, FF, WF, SF), this
      }
      removeDragGradient(FF) {
        return this._removeFactorGradient(this._dragGradients, FF), 0 === this._dragGradients?.length && (ZW(this._dragCreation), ZW(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(FF, WF, SF) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, FF, WF, SF), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(FF) {
        return this._removeFactorGradient(this._startSizeGradients, FF), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const FF = new Uint8Array(4 * this._rawTextureWidth),
          WF = RF.l.Color3[0];
        for (let SF = 0; SF < this._rawTextureWidth; SF++) {
          const AF = SF / this._rawTextureWidth;
          CF.l.GetCurrentGradient(AF, this._rampGradients, ((CF, AF, uF) => {
            RF.e.LerpToRef(CF.color, AF.color, uF, WF), FF[4 * SF] = 255 * WF.r, FF[4 * SF + 1] = 255 * WF.g, FF[4 * SF + 2] = 255 * WF.b, FF[4 * SF + 3] = 255
          }))
        }
        this._rampGradientsTexture = bW.b.CreateRGBATexture(FF, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((FF, WF) => FF.gradient < WF.gradient ? -1 : FF.gradient > WF.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(FF, WF) {
        this._rampGradients || (this._rampGradients = []);
        const SF = new CF.g(FF, WF);
        return this._rampGradients.push(SF), this._syncRampGradientTexture(), this
      }
      removeRampGradient(FF) {
        return this._removeGradientAndTexture(FF, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(FF, WF, SF) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = BF, this._colorProcessing.process = jW);
        const AF = new CF.e(FF, WF, SF);
        return this._colorGradients.push(AF), this._colorGradients.sort(((FF, WF) => FF.gradient < WF.gradient ? -1 : FF.gradient > WF.gradient ? 1 : 0)), this
      }
      removeColorGradient(FF) {
        if (!this._colorGradients) return this;
        let WF = 0;
        for (const SF of this._colorGradients) {
          if (SF.gradient === FF) {
            this._colorGradients.splice(WF, 1);
            break
          }
          WF++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = XF, this._colorProcessing.process = vW), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const FF of this._drawWrappers)
            if (FF)
              for (const WF of FF) WF?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(FF, WF, SF, CF, AF) {
        return AF[4 * (((FF = .5 * Math.abs(FF) + .5) * SF % SF | 0) + ((WF = .5 * Math.abs(WF) + .5) * CF % CF | 0) * SF)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const FF = this._engine,
          WF = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * WF), this._vertexBuffer = new hF.c(FF, this._vertexData, !0, WF);
        let SF = 0;
        const CF = this._vertexBuffer.createVertexBuffer(hF.k.PositionKind, SF, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[hF.k.PositionKind] = CF, SF += 3;
        const AF = this._vertexBuffer.createVertexBuffer(hF.k.ColorKind, SF, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[hF.k.ColorKind] = AF, SF += 4;
        const uF = this._vertexBuffer.createVertexBuffer("angle", SF, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = uF, SF += 1;
        const bW = this._vertexBuffer.createVertexBuffer("size", SF, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = bW, SF += 2, this._isAnimationSheetEnabled) {
          const FF = this._vertexBuffer.createVertexBuffer("cellIndex", SF, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = FF, SF += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const FF = this._vertexBuffer.createVertexBuffer("direction", SF, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = FF, SF += 3
        }
        if (this._useRampGradients) {
          const FF = this._vertexBuffer.createVertexBuffer("remapData", SF, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = FF, SF += 4
        }
        let dF;
        if (this._useInstancing) {
          const WF = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new hF.c(FF, WF, !1, 2), dF = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else dF = this._vertexBuffer.createVertexBuffer("offset", SF, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = dF, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const FF = [],
          WF = [];
        let SF = 0;
        for (let CF = 0; CF < this._capacity; CF++) FF.push(SF), FF.push(SF + 1), FF.push(SF + 2), FF.push(SF), FF.push(SF + 2), FF.push(SF + 3), WF.push(SF, SF + 1, SF + 1, SF + 2, SF + 2, SF + 3, SF + 3, SF, SF, SF + 3), SF += 4;
        this._indexBuffer = this._engine.createIndexBuffer(FF), this._linesIndexBuffer = this._engine.createIndexBuffer(WF)
      }
      getCapacity() {
        return this._capacity
      }
      isAlive() {
        return this._alive
      }
      isStarted() {
        return this._started
      }
      _preStart() {}
      start() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (FF) return this.startDelay = FF, void setTimeout((() => {
          this.start(0)
        }), FF);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const FF = this.noiseTexture;
          if (FF && FF.onGeneratedObservable) FF.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let WF = 0; WF < this.preWarmCycles; WF++) this.animate(!0), FF.render()
            }))
          }));
          else
            for (let WF = 0; WF < this.preWarmCycles; WF++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(FF))
      }
      _postStop(FF) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(FF, WF, SF, CF) {
        let AF = FF * this._vertexBufferSize;
        const hF = uF.j.HC[0].fdF(this._scene?.floatingOriginOffset || uF.r.ZeroReadOnly);
        if (this._vertexData[AF++] = WF.position.x + this.worldOffset.x - hF.x, this._vertexData[AF++] = WF.position.y + this.worldOffset.y - hF.y, this._vertexData[AF++] = WF.position.z + this.worldOffset.z - hF.z, this._vertexData[AF++] = WF.color.r, this._vertexData[AF++] = WF.color.g, this._vertexData[AF++] = WF.color.b, this._vertexData[AF++] = WF.color.a, this._vertexData[AF++] = WF.angle, this._vertexData[AF++] = WF.scale.x * WF.size, this._vertexData[AF++] = WF.scale.y * WF.size, this._isAnimationSheetEnabled && (this._vertexData[AF++] = WF.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[AF++] = WF.direction.x, this._vertexData[AF++] = WF.direction.y, this._vertexData[AF++] = WF.direction.z);
        else if (WF._properties.initialDirection) {
          let FF = WF._properties.initialDirection;
          this.isLocal && (uF.r.TransformNormalToRef(FF, this._emitterWorldMatrix, uF.j.HC[0]), FF = uF.j.HC[0]), 0 === FF.x && 0 === FF.z && (FF.x = .001), this._vertexData[AF++] = FF.x, this._vertexData[AF++] = FF.y, this._vertexData[AF++] = FF.z
        } else {
          let FF = WF.direction;
          this.isLocal && (uF.r.TransformNormalToRef(FF, this._emitterWorldMatrix, uF.j.HC[0]), FF = uF.j.HC[0]), 0 === FF.x && 0 === FF.z && (FF.x = .001), this._vertexData[AF++] = FF.x, this._vertexData[AF++] = FF.y, this._vertexData[AF++] = FF.z
        }
        this._useRampGradients && WF.remapData && (this._vertexData[AF++] = WF.remapData.x, this._vertexData[AF++] = WF.remapData.y, this._vertexData[AF++] = WF.remapData.z, this._vertexData[AF++] = WF.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === SF ? SF = this._epsilon : 1 === SF && (SF = 1 - this._epsilon), 0 === CF ? CF = this._epsilon : 1 === CF && (CF = 1 - this._epsilon)), this._vertexData[AF++] = SF, this._vertexData[AF] = CF)
      }
      _prepareParticle(FF) {}
      _createNewOnes(FF) {
        let WF;
        for (let SF = 0; SF < FF && this._particles.length !== this._capacity; SF++) {
          WF = this._createParticle(), this._particles.push(WF);
          let FF = this._createQueueStart;
          for (; FF;) FF.process(WF, this), FF = FF.nextItem;
          WF._inheritParticleInfoToSubEmitters()
        }
      }
      _update(FF) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const FF = this.emitter;
          this._emitterWorldMatrix = FF.getWorldMatrix()
        } else {
          const FF = this.emitter;
          this._emitterWorldMatrix = uF.b.Translation(FF.x, FF.y, FF.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(FF)
      }
      static _GetAttributeNamesOrOptions() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const CF = [hF.k.PositionKind, hF.k.ColorKind, "angle", "offset", "size"];
        return FF && CF.push("cellIndex"), WF || CF.push("direction"), SF && CF.push("remapData"), CF
      }
      static _GetEffectCreationOptions() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const CF = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, HF.e)(CF), FF && CF.push("particlesInfos"), WF && CF.push("logarithmicDepthConstant"), SF && (CF.push("vFogInfos"), CF.push("vFogColor")), CF
      }
      fillDefines(FF, WF) {
        let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, HF.o)(this, this._scene, FF), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && FF.push("#define FOG")), this._isAnimationSheetEnabled && FF.push("#define ANIMATESHEET"), this.useLogarithmicDepth && FF.push("#define LOGARITHMICDEPTH"), WF === VF.BLENDMODE_MULTIPLY && FF.push("#define BLENDMULTIPLYMODE"), this.isLocal && FF.push("#define LOCAL"), this._useRampGradients && FF.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (FF.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            FF.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            FF.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && FF.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            FF.push("#define BILLBOARDMODE_ALL")
        }
        SF && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), FF.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(FF, WF, SF) {
        WF.push(...YW._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), FF.push(...YW._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), SF.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, wF.e)(FF, this._imageProcessingConfigurationDefines), (0, wF.c)(SF, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(FF) {
        var WF;
        const SF = this._getCustomDrawWrapper(FF);
        if (SF?.effect) return SF;
        const CF = [];
        this.fillDefines(CF, FF);
        const uF = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          hF = oW.e._PrepareStringDefines(uF, CF),
          bW = hF ? oW.e.GetConfiguration(uF) : void 0;
        let dF = this._drawWrappers[uF];
        dF || (dF = this._drawWrappers[uF] = [], 0 === uF || this._renderPassObserver || (this._renderPassObserver = ((WF = this._engine)._onReleaseRenderPassObservable ?? (WF._onReleaseRenderPassObservable = new AF.b)).add((FF => {
          const WF = this._drawWrappers[FF];
          if (WF) {
            for (const FF of WF) FF?.dispose();
            delete this._drawWrappers[FF]
          }
        }))));
        let PF = dF[FF];
        PF || (PF = new nF.e(this._engine), PF.drawContext && (PF.drawContext.useInstancing = this._useInstancing), dF[FF] = PF);
        const RF = CF.join("\n");
        if (PF.defines !== RF) {
          const FF = [],
            WF = [],
            SF = [];
          this.fillUniformsAttributesAndSamplerNames(WF, FF, SF), hF && (WF.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== bW?.defines.PREPASS_LOCAL_POSITION_INDEX && WF.push("inverseEmitterWM", "geometryWorldOffset")), PF.setEffect(this._engine.createEffect("particles", {
            attributes: FF,
            uniformsNames: WF,
            samplers: SF,
            defines: RF,
            shaderLanguage: this._shaderLanguage,
            multiTarget: hF,
            indexParameters: hF ? {
              buffersCount: bW?._mrtCount ?? 0
            } : void 0
          }, this._engine), RF)
        }
        return PF
      }
      _bindGeometryRendering(FF) {
        const WF = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          SF = oW.e.GetConfiguration(WF);
        if (!SF?._defines) return;
        FF.setFloat("objectId", 0), FF.setInt("meshBlendTag", 0);
        const CF = this._scene?.activeCamera;
        if (FF.setFloat2("cameraInfo", CF?.minZ ?? 0, CF?.maxZ ?? 1), this.isLocal && void 0 !== SF.defines.PREPASS_LOCAL_POSITION_INDEX) {
          FF.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const WF = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || uF.r.ZeroReadOnly, uF.j.HC[0]);
          FF.setVector3("geometryWorldOffset", WF)
        }
      }
      animate() {
        let FF, WF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!WF && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (WF ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) FF = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const WF = this._calculateEmitRate();
            FF = WF * this._scaledUpdateSpeed | 0, this._newPartsExcess += WF * this._scaledUpdateSpeed - FF
          }
          if (this._newPartsExcess > 1 && (FF += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? FF = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(FF), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !WF) {
            let FF = 0;
            for (let WF = 0; WF < this._particles.length; WF++) {
              const SF = this._particles[WF];
              this._appendParticleVertices(FF, SF), FF += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const FF = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  WF = this._particles.length;
                WF < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, WF * FF, this._fixedCapacityHighWaterMark * FF), this._fixedCapacityHighWaterMark = WF, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
              } else this._vertexBuffer.updateDirectly(this._vertexData, 0, this._particles.length)
          }
          0 === this.manualEmitCount && this.disposeOnStop && this.stop()
        }
      }
      _initFixedCapacitySnapshotData() {
        return !this._useFixedCapacityForSnapshot && (this._useFixedCapacityForSnapshot = !0, this._vertexData.fill(0), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer?.updateDirectly(this._vertexData, 0, this._capacity), !0)
      }
      _clearFixedCapacitySnapshotData() {
        if (!this._useFixedCapacityForSnapshot || !this._vertexBuffer || 0 === this._fixedCapacityHighWaterMark) return;
        const FF = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * FF), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let FF = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const WF = this._actualFrame / this.targetStopDuration;
          CF.l.GetCurrentGradient(WF, this._emitRateGradients, ((WF, SF, CF) => {
            WF !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = SF.getFactor(), this._currentEmitRateGradient = WF), FF = (0, EF.Lerp)(this._currentEmitRate1, this._currentEmitRate2, CF)
          }))
        }
        return FF
      }
      _appendParticleVertices(FF, WF) {
        this._appendParticleVertex(FF++, WF, 0, 0), this._useInstancing || (this._appendParticleVertex(FF++, WF, 1, 0), this._appendParticleVertex(FF++, WF, 1, 1), this._appendParticleVertex(FF, WF, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !YW.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([SF.e(316).then((() => SF(58929))), SF.e(310).then((() => SF(58935)))])) : await Promise.all([SF.e(299).then((() => SF(58938))), Promise.all([SF.e(292), SF.e(328)]).then((() => SF(58947)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== VF.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(VF.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(VF.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(FF) {
        const WF = this._getWrapper(FF),
          SF = WF.effect,
          CF = this._engine;
        CF.enableEffect(WF);
        const AF = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        SF.setTexture("diffuseSampler", this.particleTexture), SF.setMatrix("view", AF);
        const hF = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (SF.setMatrix("projection", hF), this._isAnimationSheetEnabled && this.particleTexture) {
          const FF = this.particleTexture.getBaseSize();
          SF.setFloat3("particlesInfos", this.spriteCellWidth / FF.width, this.spriteCellHeight / FF.height, this.spriteCellWidth / FF.width)
        }
        if (SF.setVector2("translationPivot", this.translationPivot), SF.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const FF = this._scene.activeCamera;
          SF.setVector3("eyePosition", FF.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), SF.setTexture("rampSampler", this._rampGradientsTexture));
        const bW = SF.defines;
        this._scene && ((0, HF.h)(SF, this, this._scene), this.applyFog && (0, KF.i)(this._scene, void 0, SF)), bW.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (AF.invertToRef(uF.j.Matrix[0]), SF.setMatrix("invView", uF.j.Matrix[0])), SF._multiTarget && this._bindGeometryRendering(SF), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? CF.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, SF) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, SF)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? CF.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, SF) : CF.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, SF), this.useLogarithmicDepth && this._scene && (0, KF.r)(bW, SF, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(SF), this._setEngineBasedOnBlendMode(FF), SF._multiTarget && oW.e._BindZeroAlphaDiscard(CF, SF);
        let dF = !1;
        try {
          oW.e._BindAttachmentsForEffect(CF, SF) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(SF), this._useInstancing ? this._scene?.forceWireframe ? CF.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : CF.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? CF.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : CF.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), dF = !0)
        } finally {
          oW.e._RestoreAttachments(CF)
        }
        return dF ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const FF = this._engine;
        let WF;
        return FF.setState && (FF.setState(!1), this.forceDepthWrite && FF.setDepthWrite(!0)), WF = this.blendMode === VF.BLENDMODE_MULTIPLYADD ? this._render(VF.BLENDMODE_MULTIPLY) + this._render(VF.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), WF
      }
      _onDispose() {}
      dispose() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), FF && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), FF && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(WF, SF), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const FF = this._scene.Zm.indexOf(this);
          FF > -1 && this._scene.Zm.splice(FF, 1), this._scene._activeParticleSystems.dispose()
        }
        this.xSF.notifyObservers(this), this.xSF.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    YW.ForceGLSL = !1;
    var MW, cS = SF(35660);
    ! function(FF) {
      FF[FF.ATTACHED = 0] = "ATTACHED", FF[FF.END = 1] = "END"
    }(MW || (MW = {}));
    class GW {
      constructor(FF) {
        if (this.particleSystem = FF, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !FF.emitter || !FF.emitter.dispose) {
          const WF = (0, cS.c)("BABYLON.AbstractMesh");
          FF.emitter = new WF("SubemitterSystemEmitter", FF.OWF()), FF._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let FF = this.particleSystem.emitter;
        if (FF) {
          if (FF instanceof uF.r) FF = FF.clone();
          else if (-1 !== FF.getClassName().indexOf("Mesh")) {
            FF = new((0, cS.c)("BABYLON.Mesh"))("", FF.OWF()), FF.isVisible = !1
          }
        } else FF = new uF.r;
        const WF = new GW(this.particleSystem.clone(this.particleSystem.name, FF));
        return WF.particleSystem.name += "Clone", WF.type = this.type, WF.inheritDirection = this.inheritDirection, WF.inheritedVelocityAmount = this.inheritedVelocityAmount, WF.particleSystem._disposeEmitterOnDispose = !0, WF.particleSystem.disposeOnStop = !0, WF
      }
      serialize() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WF = {};
        return WF.type = this.type, WF.inheritDirection = this.inheritDirection, WF.inheritedVelocityAmount = this.inheritedVelocityAmount, WF.particleSystem = this.particleSystem.serialize(FF), WF
      }
      static _ParseParticleSystem(FF, WF, SF) {
        throw (0, zW.l)("ParseParticle")
      }
      static Parse(FF, WF, SF) {
        const CF = FF.particleSystem,
          AF = new GW(GW._ParseParticleSystem(CF, WF, SF, !0));
        return AF.type = FF.type, AF.inheritDirection = FF.inheritDirection, AF.inheritedVelocityAmount = FF.inheritedVelocityAmount, AF.particleSystem._isSubEmitter = !0, AF
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var zS = SF(37867),
      IW = SF(37994);
    const fW = () => {};
    class yS {
      constructor() {
        this.particlePositionGenerator = fW, this.particleDestinationGenerator = fW, this.particleDirectionGenerator = fW
      }
      startDirectionFunction(FF, WF, SF, CF) {
        const AF = uF.j.HC[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== fW) this.particleDirectionGenerator(-1, SF, AF);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== fW) {
          this.particleDestinationGenerator(-1, SF, AF);
          const FF = uF.j.HC[1];
          AF.subtractToRef(SF.position, FF), FF.scaleToRef(1 / SF.lifeTime, AF)
        } else AF.set(0, 0, 0);
        CF ? WF.fdF(AF) : uF.r.TransformNormalToRef(AF, FF, WF)
      }
      startPositionFunction(FF, WF, SF, CF) {
        const AF = uF.j.HC[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== fW ? this.particlePositionGenerator(-1, SF, AF) : AF.set(0, 0, 0), CF ? WF.fdF(AF) : uF.r.TransformCoordinatesToRef(AF, FF, WF)
      }
      clone() {
        const FF = new yS;
        return eF.d.DeepCopy(this, FF), FF
      }
      applyToShader(FF) {}
      buildUniformLayout(FF) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const FF = {};
        return FF.type = this.getClassName(), FF.particlePositionGenerator = this.particlePositionGenerator, FF.particleDestinationGenerator = this.particleDestinationGenerator, FF
      }
      parse(FF) {
        FF.particlePositionGenerator && (this.particlePositionGenerator = FF.particlePositionGenerator), FF.particleDestinationGenerator && (this.particleDestinationGenerator = FF.particleDestinationGenerator)
      }
    }
    const sW = uF.r.Zero(),
      nW = uF.r.Zero(),
      HW = uF.r.Zero();
    class KW {
      constructor() {
        this.strength = 0, this.position = uF.r.Zero()
      }
      _processParticle(FF, WF) {
        this.position.subtractToRef(FF.position, sW);
        const SF = sW.lengthSquared() + 1;
        sW.normalize().scaleToRef(this.strength / SF, nW), nW.scaleToRef(WF._tempScaledUpdateSpeed, HW), FF.direction.addInPlace(HW)
      }
      serialize() {
        return {
          position: this.position.kRF(),
          strength: this.strength
        }
      }
    }
    const wW = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class XW extends YW {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = FF => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const WF = Math.floor(Math.random() * this._subEmitters.length);
          for (const SF of this._subEmitters[WF])
            if (1 === SF.type) {
              const WF = SF.clone();
              FF._inheritParticleInfoToSubEmitter(WF), WF.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(WF.particleSystem), WF.particleSystem.start()
            }
        }
      }
      get source() {
        return this._source
      }
      get isNodeGenerated() {
        return null !== this._source
      }
      get flowMap() {
        return this._flowMap
      }
      set flowMap(FF) {
        this._flowMap !== FF && (this._flowMap = FF, this._flowMapUpdate && (ZW(this._flowMapUpdate), this._flowMapUpdate = null), FF && (this._flowMapUpdate = {
          process: FF => {
            const WF = this.OWF()?.getTransformMatrix();
            this._flowMap._processParticle(FF, this.flowMapStrength * this._tempScaledUpdateSpeed, WF)
          },
          previousItem: null,
          nextItem: null
        }, xS(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(FF) {
        super.addAttractor(FF), 1 === this._attractors.length && (this._attractorUpdate = {
          process: FF => {
            for (const WF of this._attractors) WF._processParticle(FF, this)
          },
          previousItem: null,
          nextItem: null
        }, xS(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(FF) {
        super.removeAttractor(FF), 0 === this._attractors.length && this._attractorUpdate && ZW(this._attractorUpdate)
      }
      start() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(FF)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const FF of this.subEmitters) FF instanceof XW ? this._subEmitters.push([new GW(FF)]) : FF instanceof GW ? this._subEmitters.push([FF]) : FF instanceof Array && this._subEmitters.push(FF)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const FF of this.activeSubSystems) FF.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const FF = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== FF && this._rootParticleSystem.activeSubSystems.splice(FF, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(FF) {
        FF && this._stopSubEmitters()
      }
      _prepareParticle(FF) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const WF = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          FF._properties.attachedSubEmitters = [];
          for (const SF of WF)
            if (0 === SF.type) {
              const WF = SF.clone();
              FF._properties.attachedSubEmitters.push(WF), WF.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), FF && this.particles)
          for (const SF of this.particles)
            if (SF._properties.attachedSubEmitters)
              for (let FF = SF._properties.attachedSubEmitters.length - 1; FF >= 0; FF -= 1) SF._properties.attachedSubEmitters[FF].dispose();
        if (WF && this.activeSubSystems)
          for (let SF = this.activeSubSystems.length - 1; SF >= 0; SF -= 1) this.activeSubSystems[SF].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let FF = 0; FF < this._subEmitters.length; FF++)
            for (const WF of this._subEmitters[FF]) WF.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(FF, WF, SF, CF) {
        let AF;
        AF = SF instanceof zS.e ? null : SF;
        const hF = (0, cS.c)("BABYLON.Texture");
        if (hF && AF)
          if (FF.texture) WF.particleTexture = hF.Parse(FF.texture, AF, CF);
          else if (FF.textureName) {
          const SF = FF.textureSettings;
          if (WF.particleTexture = new hF(CF + FF.textureName, AF, !1, void 0 === FF.invertY || FF.invertY, SF ? SF.samplingMode : void 0), WF.particleTexture.name = FF.textureName, SF) {
            const FF = WF.particleTexture;
            for (const WF of wW) void 0 !== SF[WF] && (FF[WF] = SF[WF])
          }
        }
        if (FF.emitterId || 0 === FF.emitterId || void 0 !== FF.emitter ? (FF.emitterId || 0 === FF.emitterId) && AF ? (WF.emitter = AF.getLastMeshById(FF.emitterId), WF.emitter || (WF.emitter = uF.r.Zero())) : WF.emitter = uF.r.FromArray(FF.emitter) : WF.emitter = uF.r.Zero(), WF.isLocal = !!FF.isLocal, void 0 !== FF.renderingGroupId && (WF.renderingGroupId = FF.renderingGroupId), void 0 !== FF.isBillboardBased && (WF.isBillboardBased = FF.isBillboardBased), void 0 !== FF.billboardMode && (WF.billboardMode = FF.billboardMode), void 0 !== FF.useLogarithmicDepth && (WF.useLogarithmicDepth = FF.useLogarithmicDepth), FF.animations) {
          for (let SF = 0; SF < FF.animations.length; SF++) {
            const CF = FF.animations[SF],
              AF = (0, cS.c)("BABYLON.Animation");
            AF && WF.animations.push(AF.Parse(CF))
          }
          WF.beginAnimationOnStart = FF.beginAnimationOnStart, WF.beginAnimationFrom = FF.beginAnimationFrom, WF.beginAnimationTo = FF.beginAnimationTo, WF.beginAnimationLoop = FF.beginAnimationLoop
        }
        if (FF.autoAnimate && AF && AF.beginAnimation(WF, FF.autoAnimateFrom, FF.autoAnimateTo, FF.autoAnimateLoop, FF.autoAnimateSpeed || 1), WF.startDelay = 0 | FF.startDelay, WF.minAngularSpeed = FF.minAngularSpeed, WF.maxAngularSpeed = FF.maxAngularSpeed, WF.minSize = FF.minSize, WF.maxSize = FF.maxSize, FF.minScaleX && (WF.minScaleX = FF.minScaleX, WF.maxScaleX = FF.maxScaleX, WF.minScaleY = FF.minScaleY, WF.maxScaleY = FF.maxScaleY), void 0 !== FF.preWarmCycles && (WF.preWarmCycles = FF.preWarmCycles, WF.preWarmStepOffset = FF.preWarmStepOffset), void 0 !== FF.minInitialRotation && (WF.minInitialRotation = FF.minInitialRotation, WF.maxInitialRotation = FF.maxInitialRotation), WF.minLifeTime = FF.minLifeTime, WF.maxLifeTime = FF.maxLifeTime, WF.minEmitPower = FF.minEmitPower, WF.maxEmitPower = FF.maxEmitPower, WF.emitRate = FF.emitRate, WF.gravity = uF.r.FromArray(FF.gravity), FF.noiseStrength && (WF.noiseStrength = uF.r.FromArray(FF.noiseStrength)), WF.color1 = RF.i.FromArray(FF.color1), WF.color2 = RF.i.FromArray(FF.color2), WF.colorDead = RF.i.FromArray(FF.colorDead), WF.updateSpeed = FF.updateSpeed, WF.targetStopDuration = FF.targetStopDuration, WF.blendMode = FF.blendMode, FF.colorGradients)
          for (const uF of FF.colorGradients) WF.addColorGradient(uF.gradient, RF.i.FromArray(uF.color1), uF.color2 ? RF.i.FromArray(uF.color2) : void 0);
        if (FF.rampGradients) {
          for (const SF of FF.rampGradients) WF.addRampGradient(SF.gradient, RF.e.FromArray(SF.color));
          WF.useRampGradients = FF.useRampGradients
        }
        if (FF.colorRemapGradients)
          for (const uF of FF.colorRemapGradients) WF.addColorRemapGradient(uF.gradient, void 0 !== uF.factor1 ? uF.factor1 : uF.factor, uF.factor2);
        if (FF.alphaRemapGradients)
          for (const uF of FF.alphaRemapGradients) WF.addAlphaRemapGradient(uF.gradient, void 0 !== uF.factor1 ? uF.factor1 : uF.factor, uF.factor2);
        if (FF.sizeGradients)
          for (const uF of FF.sizeGradients) WF.addSizeGradient(uF.gradient, void 0 !== uF.factor1 ? uF.factor1 : uF.factor, uF.factor2);
        if (FF.angularSpeedGradients)
          for (const uF of FF.angularSpeedGradients) WF.addAngularSpeedGradient(uF.gradient, void 0 !== uF.factor1 ? uF.factor1 : uF.factor, uF.factor2);
        if (FF.velocityGradients)
          for (const uF of FF.velocityGradients) WF.addVelocityGradient(uF.gradient, void 0 !== uF.factor1 ? uF.factor1 : uF.factor, uF.factor2);
        if (FF.dragGradients)
          for (const uF of FF.dragGradients) WF.addDragGradient(uF.gradient, void 0 !== uF.factor1 ? uF.factor1 : uF.factor, uF.factor2);
        if (FF.emitRateGradients)
          for (const uF of FF.emitRateGradients) WF.addEmitRateGradient(uF.gradient, void 0 !== uF.factor1 ? uF.factor1 : uF.factor, uF.factor2);
        if (FF.startSizeGradients)
          for (const uF of FF.startSizeGradients) WF.addStartSizeGradient(uF.gradient, void 0 !== uF.factor1 ? uF.factor1 : uF.factor, uF.factor2);
        if (FF.lifeTimeGradients)
          for (const uF of FF.lifeTimeGradients) WF.addLifeTimeGradient(uF.gradient, void 0 !== uF.factor1 ? uF.factor1 : uF.factor, uF.factor2);
        if (FF.limitVelocityGradients) {
          for (const SF of FF.limitVelocityGradients) WF.addLimitVelocityGradient(SF.gradient, void 0 !== SF.factor1 ? SF.factor1 : SF.factor, SF.factor2);
          WF.limitVelocityDamping = FF.limitVelocityDamping
        }
        if (FF.noiseTexture && AF) {
          const SF = (0, cS.c)("BABYLON.ProceduralTexture");
          WF.noiseTexture = SF.Parse(FF.noiseTexture, AF, CF)
        }
        let bW;
        if (FF.particleEmitterType) {
          switch (FF.particleEmitterType.type) {
            case "SphereParticleEmitter":
              bW = new gW;
              break;
            case "SphereDirectedParticleEmitter":
              bW = new tW;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              bW = new aW;
              break;
            case "ConeDirectedParticleEmitter":
              bW = new kW;
              break;
            case "CylinderParticleEmitter":
              bW = new TF.d;
              break;
            case "CylinderDirectedParticleEmitter":
              bW = new TF.b;
              break;
            case "HemisphericParticleEmitter":
              bW = new rW;
              break;
            case "PointParticleEmitter":
              bW = new QF;
              break;
            case "MeshParticleEmitter":
              bW = new qW;
              break;
            case "CustomParticleEmitter":
              bW = new yS;
              break;
            default:
              bW = new iW.d
          }
          bW.parse(FF.particleEmitterType, AF)
        } else bW = new iW.d, bW.parse(FF, AF);
        WF.particleEmitterType = bW, WF.startSpriteCellID = FF.startSpriteCellID, WF.endSpriteCellID = FF.endSpriteCellID, WF.spriteCellLoop = FF.spriteCellLoop ?? !0, WF.spriteCellWidth = FF.spriteCellWidth, WF.spriteCellHeight = FF.spriteCellHeight, WF.spriteCellChangeSpeed = FF.spriteCellChangeSpeed, WF.spriteRandomStartCell = FF.spriteRandomStartCell, WF.disposeOnStop = FF.disposeOnStop ?? !1, WF.manualEmitCount = FF.manualEmitCount ?? -1
      }
      static Parse(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          AF = arguments.length > 4 ? arguments[4] : void 0;
        const hF = FF.name;
        let bW, dF, PF = null,
          iW = null;
        if (WF instanceof zS.e ? bW = WF : (dF = WF, bW = dF.sC()), FF.customShader && (0, zW.b)(bW.createEffectForParticles)) {
          iW = FF.customShader;
          const WF = iW.shaderOptions.defines.length > 0 ? iW.shaderOptions.defines.join("\n") : "";
          PF = bW.createEffectForParticles(iW.shaderPath.fragmentElement, iW.shaderOptions.uniforms, iW.shaderOptions.samplers, WF)
        }
        const eF = new XW(hF, AF || FF.ZF, WF, PF, FF.isAnimationSheetEnabled);
        if (eF.customShader = iW, eF._rootUrl = SF, FF.id && (eF.id = FF.id), FF.subEmitters) {
          eF.subEmitters = [];
          for (const CF of FF.subEmitters) {
            const FF = [];
            for (const AF of CF) FF.push(GW.Parse(AF, WF, SF));
            eF.subEmitters.push(FF)
          }
        }
        if (FF.attractors)
          for (const RF of FF.attractors) {
            const FF = new KW;
            FF.position = uF.r.FromArray(RF.position), FF.strength = RF.strength, eF.addAttractor(FF)
          }
        return XW._Parse(FF, eF, WF, SF), FF.textureMask && (eF.textureMask = RF.i.FromArray(FF.textureMask)), FF.worldOffset && (eF.worldOffset = uF.r.FromArray(FF.worldOffset)), FF.preventAutoStart && (eF.preventAutoStart = FF.preventAutoStart), FF.metadata && (eF.metadata = FF.metadata), CF || eF.preventAutoStart || eF.start(), eF
      }
      serialize() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WF = {};
        if (XW._Serialize(WF, this, FF), WF.textureMask = this.textureMask.kRF(), WF.customShader = this.customShader, WF.preventAutoStart = this.preventAutoStart, WF.worldOffset = this.worldOffset.kRF(), this.metadata && (WF.metadata = this.metadata), this.subEmitters) {
          WF.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const SF of this._subEmitters) {
            const CF = [];
            for (const WF of SF) WF.particleSystem.doNotSerialize || CF.push(WF.serialize(FF));
            WF.subEmitters.push(CF)
          }
        }
        if (this._attractors && this._attractors.length) {
          WF.attractors = [];
          for (const FF of this._attractors) WF.attractors.push(FF.serialize())
        }
        return WF
      }
      static _Serialize(FF, WF, SF) {
        if (FF.name = WF.name, FF.id = WF.id, FF.ZF = WF.getCapacity(), FF.disposeOnStop = WF.disposeOnStop, FF.manualEmitCount = WF.manualEmitCount, WF.emitter.position) {
          const SF = WF.emitter;
          FF.emitterId = SF.id
        } else {
          const SF = WF.emitter;
          FF.emitter = SF.kRF()
        }
        if (WF.particleEmitterType && (FF.particleEmitterType = WF.particleEmitterType.serialize()), WF.particleTexture)
          if (SF) FF.texture = WF.particleTexture.serialize();
          else {
            const SF = WF.particleTexture;
            FF.textureName = WF.particleTexture.name, FF.invertY = !!SF._invertY;
            const CF = {};
            for (const FF of wW) CF[FF] = SF[FF];
            CF.samplingMode = SF.samplingMode, FF.textureSettings = CF
          } FF.isLocal = WF.isLocal, IW.e.AppendSerializedAnimations(WF, FF), FF.beginAnimationOnStart = WF.beginAnimationOnStart, FF.beginAnimationFrom = WF.beginAnimationFrom, FF.beginAnimationTo = WF.beginAnimationTo, FF.beginAnimationLoop = WF.beginAnimationLoop, FF.startDelay = WF.startDelay, FF.renderingGroupId = WF.renderingGroupId, FF.isBillboardBased = WF.isBillboardBased, FF.billboardMode = WF.billboardMode, FF.minAngularSpeed = WF.minAngularSpeed, FF.maxAngularSpeed = WF.maxAngularSpeed, FF.minSize = WF.minSize, FF.maxSize = WF.maxSize, FF.minScaleX = WF.minScaleX, FF.maxScaleX = WF.maxScaleX, FF.minScaleY = WF.minScaleY, FF.maxScaleY = WF.maxScaleY, FF.minEmitPower = WF.minEmitPower, FF.maxEmitPower = WF.maxEmitPower, FF.minLifeTime = WF.minLifeTime, FF.maxLifeTime = WF.maxLifeTime, FF.emitRate = WF.emitRate, FF.gravity = WF.gravity.kRF(), FF.noiseStrength = WF.noiseStrength.kRF(), FF.color1 = WF.color1.kRF(), FF.color2 = WF.color2.kRF(), FF.colorDead = WF.colorDead.kRF(), FF.updateSpeed = WF.updateSpeed, FF.targetStopDuration = WF.targetStopDuration, FF.blendMode = WF.blendMode, FF.preWarmCycles = WF.preWarmCycles, FF.preWarmStepOffset = WF.preWarmStepOffset, FF.minInitialRotation = WF.minInitialRotation, FF.maxInitialRotation = WF.maxInitialRotation, FF.startSpriteCellID = WF.startSpriteCellID, FF.spriteCellLoop = WF.spriteCellLoop, FF.endSpriteCellID = WF.endSpriteCellID, FF.spriteCellChangeSpeed = WF.spriteCellChangeSpeed, FF.spriteCellWidth = WF.spriteCellWidth, FF.spriteCellHeight = WF.spriteCellHeight, FF.spriteRandomStartCell = WF.spriteRandomStartCell, FF.isAnimationSheetEnabled = WF.isAnimationSheetEnabled, FF.useLogarithmicDepth = WF.useLogarithmicDepth;
        const CF = WF.getColorGradients();
        if (CF) {
          FF.colorGradients = [];
          for (const WF of CF) {
            const SF = {
              gradient: WF.gradient,
              color1: WF.color1.kRF()
            };
            WF.color2 ? SF.color2 = WF.color2.kRF() : SF.color2 = WF.color1.kRF(), FF.colorGradients.push(SF)
          }
        }
        const AF = WF.getRampGradients();
        if (AF) {
          FF.rampGradients = [];
          for (const WF of AF) {
            const SF = {
              gradient: WF.gradient,
              color: WF.color.kRF()
            };
            FF.rampGradients.push(SF)
          }
          FF.useRampGradients = WF.useRampGradients
        }
        const uF = WF.getColorRemapGradients();
        if (uF) {
          FF.colorRemapGradients = [];
          for (const WF of uF) {
            const SF = {
              gradient: WF.gradient,
              factor1: WF.factor1
            };
            void 0 !== WF.factor2 ? SF.factor2 = WF.factor2 : SF.factor2 = WF.factor1, FF.colorRemapGradients.push(SF)
          }
        }
        const hF = WF.getAlphaRemapGradients();
        if (hF) {
          FF.alphaRemapGradients = [];
          for (const WF of hF) {
            const SF = {
              gradient: WF.gradient,
              factor1: WF.factor1
            };
            void 0 !== WF.factor2 ? SF.factor2 = WF.factor2 : SF.factor2 = WF.factor1, FF.alphaRemapGradients.push(SF)
          }
        }
        const bW = WF.getSizeGradients();
        if (bW) {
          FF.sizeGradients = [];
          for (const WF of bW) {
            const SF = {
              gradient: WF.gradient,
              factor1: WF.factor1
            };
            void 0 !== WF.factor2 ? SF.factor2 = WF.factor2 : SF.factor2 = WF.factor1, FF.sizeGradients.push(SF)
          }
        }
        const dF = WF.getAngularSpeedGradients();
        if (dF) {
          FF.angularSpeedGradients = [];
          for (const WF of dF) {
            const SF = {
              gradient: WF.gradient,
              factor1: WF.factor1
            };
            void 0 !== WF.factor2 ? SF.factor2 = WF.factor2 : SF.factor2 = WF.factor1, FF.angularSpeedGradients.push(SF)
          }
        }
        const PF = WF.getVelocityGradients();
        if (PF) {
          FF.velocityGradients = [];
          for (const WF of PF) {
            const SF = {
              gradient: WF.gradient,
              factor1: WF.factor1
            };
            void 0 !== WF.factor2 ? SF.factor2 = WF.factor2 : SF.factor2 = WF.factor1, FF.velocityGradients.push(SF)
          }
        }
        const RF = WF.getDragGradients();
        if (RF) {
          FF.dragGradients = [];
          for (const WF of RF) {
            const SF = {
              gradient: WF.gradient,
              factor1: WF.factor1
            };
            void 0 !== WF.factor2 ? SF.factor2 = WF.factor2 : SF.factor2 = WF.factor1, FF.dragGradients.push(SF)
          }
        }
        const iW = WF.getEmitRateGradients();
        if (iW) {
          FF.emitRateGradients = [];
          for (const WF of iW) {
            const SF = {
              gradient: WF.gradient,
              factor1: WF.factor1
            };
            void 0 !== WF.factor2 ? SF.factor2 = WF.factor2 : SF.factor2 = WF.factor1, FF.emitRateGradients.push(SF)
          }
        }
        const eF = WF.getStartSizeGradients();
        if (eF) {
          FF.startSizeGradients = [];
          for (const WF of eF) {
            const SF = {
              gradient: WF.gradient,
              factor1: WF.factor1
            };
            void 0 !== WF.factor2 ? SF.factor2 = WF.factor2 : SF.factor2 = WF.factor1, FF.startSizeGradients.push(SF)
          }
        }
        const EF = WF.getLifeTimeGradients();
        if (EF) {
          FF.lifeTimeGradients = [];
          for (const WF of EF) {
            const SF = {
              gradient: WF.gradient,
              factor1: WF.factor1
            };
            void 0 !== WF.factor2 ? SF.factor2 = WF.factor2 : SF.factor2 = WF.factor1, FF.lifeTimeGradients.push(SF)
          }
        }
        const QF = WF.getLimitVelocityGradients();
        if (QF) {
          FF.limitVelocityGradients = [];
          for (const WF of QF) {
            const SF = {
              gradient: WF.gradient,
              factor1: WF.factor1
            };
            void 0 !== WF.factor2 ? SF.factor2 = WF.factor2 : SF.factor2 = WF.factor1, FF.limitVelocityGradients.push(SF)
          }
          FF.limitVelocityDamping = WF.limitVelocityDamping
        }
        WF.noiseTexture && (FF.noiseTexture = WF.noiseTexture.serialize())
      }
      clone(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const CF = {
          ...this._customWrappers
        };
        let AF = null;
        const uF = this._engine;
        if ((0, zW.b)(uF.createEffectForParticles) && null != this.customShader) {
          AF = this.customShader;
          const FF = AF.shaderOptions.defines.length > 0 ? AF.shaderOptions.defines.join("\n") : "",
            WF = uF.createEffectForParticles(AF.shaderPath.fragmentElement, AF.shaderOptions.uniforms, AF.shaderOptions.samplers, FF);
          CF[0] ? CF[0].effect = WF : this.setCustomEffect(WF, 0)
        }
        const hF = this.serialize(SF),
          bW = !1 === SF && this.particleTexture ? this.particleTexture.clone() : null;
        bW && (hF.textureName = void 0);
        const dF = XW.Parse(hF, this._scene || this._engine, this._rootUrl);
        return dF.name = FF, dF.customShader = AF, dF._customWrappers = CF, bW && (dF.particleTexture = bW), void 0 === WF && (WF = this.emitter), this.noiseTexture && (dF.noiseTexture = this.noiseTexture.clone()), dF.emitter = WF, this.preventAutoStart || dF.start(), dF
      }
    }
    XW.BILLBOARDMODE_Y = 2, XW.BILLBOARDMODE_ALL = 7, XW.BILLBOARDMODE_STRETCHED = 8, XW.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let UW = !1;
    UW || (UW = !0, GW._ParseParticleSystem = XW.Parse)
  },
  39494: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      SkyMaterial: () => aW,
      _MaxColorValueForRenderTarget: () => TF
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(37994),
      hF = SF(35617),
      bW = SF(38258),
      dF = SF(38320),
      PF = SF(39455),
      RF = SF(39116),
      iW = SF(38053),
      eF = SF(35660),
      EF = SF(38350),
      QF = SF(38323),
      rW = SF(38312),
      gW = SF(38303);
    class tW extends bW.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function TF(FF) {
      switch (FF) {
        case PF.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case PF.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let aW = (() => {
      var FF;
      let WF, bW, PF, eF, aW, kW, qW, VF, NF, DF, LF, mW, OF, xW, ZF, oF = dF.e,
        YF = [],
        MF = [],
        cW = [],
        GF = [],
        zW = [],
        IF = [],
        fF = [],
        yW = [],
        sF = [],
        nF = [],
        HF = [],
        KF = [],
        wF = [],
        XF = [],
        UF = [],
        BF = [],
        jW = [],
        vW = [],
        JF = [],
        pF = [],
        lF = [],
        FW = [],
        WW = [],
        SW = [],
        CW = [],
        AW = [],
        uW = [],
        hW = [],
        bS = [],
        dW = [];
      return FF = class extends oF {
        constructor(FF, WF) {
          super(FF, WF, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, CF.k)(this, YF, 1), this.turbidity = ((0, CF.k)(this, MF), (0, CF.k)(this, cW, 10)), this.rayleigh = ((0, CF.k)(this, GF), (0, CF.k)(this, zW, 2)), this.mieCoefficient = ((0, CF.k)(this, IF), (0, CF.k)(this, fF, .005)), this.mieDirectionalG = ((0, CF.k)(this, yW), (0, CF.k)(this, sF, .8)), this.distance = ((0, CF.k)(this, nF), (0, CF.k)(this, HF, 500)), this.inclination = ((0, CF.k)(this, KF), (0, CF.k)(this, wF, .49)), this.azimuth = ((0, CF.k)(this, XF), (0, CF.k)(this, UF, .25)), this.sunPosition = ((0, CF.k)(this, BF), (0, CF.k)(this, jW, new hF.HC(0, 100, 0))), this.useSunPosition = ((0, CF.k)(this, vW), (0, CF.k)(this, JF, !1)), this.cameraOffset = ((0, CF.k)(this, pF), (0, CF.k)(this, lF, hF.HC.Zero())), this.up = ((0, CF.k)(this, FW), (0, CF.k)(this, WW, hF.HC.Up())), this.dithering = ((0, CF.k)(this, SW), (0, CF.k)(this, CW, !1)), this.rawHdrOutput = ((0, CF.k)(this, AW), (0, CF.k)(this, uW, !1)), this.cloudiness = ((0, CF.k)(this, hW), (0, CF.k)(this, bS, 0)), this._cameraPosition = ((0, CF.k)(this, dW), hF.HC.Zero()), this._skyOrientation = new hF.Quaternion
        }
        needAlphaBlending() {
          return this.alpha < 1
        }
        needAlphaTesting() {
          return !1
        }
        getAlphaTestTexture() {
          return null
        }
        isReadyForSubMesh(WF, SF) {
          const CF = SF._drawWrapper;
          if (this.isFrozen && CF.effect && CF._wasPreviouslyReady) return !0;
          SF.materialDefines || (SF.materialDefines = new tW);
          const AF = SF.materialDefines,
            uF = this.OWF();
          if (this._isReadyForSubMesh(SF)) return !0;
          if ((0, gW.fb)(WF, uF, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, AF, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, gW.W)(WF, AF, !0, !1), AF.IMAGEPROCESSINGPOSTPROCESS !== uF.imageProcessingConfiguration.applyByPostProcess && AF.markAsMiscDirty(), AF.DITHER !== this.dithering && AF.markAsMiscDirty(), AF.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && AF.markAsMiscDirty(), AF.isDirty) {
            AF.markAsProcessed(), uF.resetCachedMaterial();
            const WF = new QF.b;
            AF.FOG && WF.addFallback(1, "FOG"), AF.IMAGEPROCESSINGPOSTPROCESS = uF.imageProcessingConfiguration.applyByPostProcess, AF.DITHER = this.dithering, AF.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const CF = [RF.h.PositionKind];
            AF.VERTEXCOLOR && CF.push(RF.h.ColorKind);
            const hF = "sky",
              bW = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, rW.e)(bW);
            const dF = AF.toString();
            SF.setEffect(uF.sC().createEffect(hF, {
              attributes: CF,
              uniformsNames: bW,
              uniformBuffersNames: [],
              samplers: [],
              defines: dF,
              fallbacks: WF,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: FF._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, uF.sC()), AF, this._materialContext)
          }
          return !(!SF.effect || !SF.effect.isReady()) && (AF._renderId = uF.getRenderId(), CF._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(FF, WF, SF) {
          const CF = this.OWF(),
            AF = SF.materialDefines;
          if (!AF) return;
          const uF = SF.effect;
          if (!uF) return;
          this._activeEffect = uF, this.bindOnlyWorldMatrix(FF), this._activeEffect.setMatrix("viewProjection", CF.getTransformMatrix()), this._mustRebind(CF, uF, SF) && ((0, rW.h)(uF, this, CF), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, gW.r)(AF, uF, CF)), CF.fogEnabled && WF.applyFog && CF.fogMode !== iW.e.FOGMODE_NONE && this._activeEffect.setMatrix("view", CF.getViewMatrix()), (0, gW.i)(CF, WF, this._activeEffect, this.rawHdrOutput);
          const bW = CF.activeCamera;
          if (bW) {
            const FF = bW.getWorldMatrix();
            this._cameraPosition.x = FF.m[12], this._cameraPosition.y = FF.m[13], this._cameraPosition.z = FF.m[14], this._activeEffect.setVector3("cameraPosition", hF.TmpVectors.HC[0].fdF(this._cameraPosition).IPF(CF.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const FF = CF.sC()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", TF(FF?.texture?.type))
          }
          if (!this.useSunPosition) {
            const FF = Math.PI * (this.inclination - .5),
              WF = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(WF) * Math.cos(FF), this.sunPosition.y = this.distance * Math.sin(-FF), this.sunPosition.z = this.distance * Math.sin(WF) * Math.cos(FF), hF.Quaternion.FromUnitVectorsToRef(hF.HC.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(WF, this._activeEffect, SF)
        }
        getAnimatables() {
          return []
        }
        dispose(FF) {
          super.dispose(FF)
        }
        clone(WF) {
          return uF.e.Clone((() => new FF(WF, this.OWF())), this)
        }
        serialize() {
          const FF = super.serialize();
          return FF.customType = "BABYLON.SkyMaterial", FF
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(WF, SF, CF) {
          return uF.e.Parse((() => new FF(WF.name, SF)), WF, SF, CF)
        }
      }, (() => {
        const SF = "function" === typeof Symbol && Symbol.metadata ? Object.create(oF[Symbol.metadata] ?? null) : void 0;
        WF = [(0, AF.H)()], bW = [(0, AF.H)()], PF = [(0, AF.H)()], eF = [(0, AF.H)()], aW = [(0, AF.H)()], kW = [(0, AF.H)()], qW = [(0, AF.H)()], VF = [(0, AF.H)()], NF = [(0, AF.G)()], DF = [(0, AF.H)()], LF = [(0, AF.G)()], mW = [(0, AF.G)()], OF = [(0, AF.H)()], xW = [(0, AF.H)()], ZF = [(0, AF.H)()], (0, CF.j)(null, null, WF, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: FF => "luminance" in FF,
            get: FF => FF.luminance,
            set: (FF, WF) => {
              FF.luminance = WF
            }
          },
          metadata: SF
        }, YF, MF), (0, CF.j)(null, null, bW, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: FF => "turbidity" in FF,
            get: FF => FF.turbidity,
            set: (FF, WF) => {
              FF.turbidity = WF
            }
          },
          metadata: SF
        }, cW, GF), (0, CF.j)(null, null, PF, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: FF => "rayleigh" in FF,
            get: FF => FF.rayleigh,
            set: (FF, WF) => {
              FF.rayleigh = WF
            }
          },
          metadata: SF
        }, zW, IF), (0, CF.j)(null, null, eF, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: FF => "mieCoefficient" in FF,
            get: FF => FF.mieCoefficient,
            set: (FF, WF) => {
              FF.mieCoefficient = WF
            }
          },
          metadata: SF
        }, fF, yW), (0, CF.j)(null, null, aW, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: FF => "mieDirectionalG" in FF,
            get: FF => FF.mieDirectionalG,
            set: (FF, WF) => {
              FF.mieDirectionalG = WF
            }
          },
          metadata: SF
        }, sF, nF), (0, CF.j)(null, null, kW, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: FF => "distance" in FF,
            get: FF => FF.distance,
            set: (FF, WF) => {
              FF.distance = WF
            }
          },
          metadata: SF
        }, HF, KF), (0, CF.j)(null, null, qW, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: FF => "inclination" in FF,
            get: FF => FF.inclination,
            set: (FF, WF) => {
              FF.inclination = WF
            }
          },
          metadata: SF
        }, wF, XF), (0, CF.j)(null, null, VF, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: FF => "azimuth" in FF,
            get: FF => FF.azimuth,
            set: (FF, WF) => {
              FF.azimuth = WF
            }
          },
          metadata: SF
        }, UF, BF), (0, CF.j)(null, null, NF, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: FF => "sunPosition" in FF,
            get: FF => FF.sunPosition,
            set: (FF, WF) => {
              FF.sunPosition = WF
            }
          },
          metadata: SF
        }, jW, vW), (0, CF.j)(null, null, DF, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: FF => "useSunPosition" in FF,
            get: FF => FF.useSunPosition,
            set: (FF, WF) => {
              FF.useSunPosition = WF
            }
          },
          metadata: SF
        }, JF, pF), (0, CF.j)(null, null, LF, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: FF => "cameraOffset" in FF,
            get: FF => FF.cameraOffset,
            set: (FF, WF) => {
              FF.cameraOffset = WF
            }
          },
          metadata: SF
        }, lF, FW), (0, CF.j)(null, null, mW, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: FF => "up" in FF,
            get: FF => FF.up,
            set: (FF, WF) => {
              FF.up = WF
            }
          },
          metadata: SF
        }, WW, SW), (0, CF.j)(null, null, OF, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: FF => "dithering" in FF,
            get: FF => FF.dithering,
            set: (FF, WF) => {
              FF.dithering = WF
            }
          },
          metadata: SF
        }, CW, AW), (0, CF.j)(null, null, xW, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: FF => "rawHdrOutput" in FF,
            get: FF => FF.rawHdrOutput,
            set: (FF, WF) => {
              FF.rawHdrOutput = WF
            }
          },
          metadata: SF
        }, uW, hW), (0, CF.j)(null, null, ZF, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: FF => "cloudiness" in FF,
            get: FF => FF.cloudiness,
            set: (FF, WF) => {
              FF.cloudiness = WF
            }
          },
          metadata: SF
        }, bS, dW), SF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: SF
        })
      })(), FF._ShaderLoader = new EF.b((() => [SF.e(300).then((() => SF(58956))), SF.e(293).then((() => SF(58962)))]), (() => [SF.e(317).then((() => SF(58966))), SF.e(311).then((() => SF(58968)))])), FF
    })();
    (0, eF.f)("BABYLON.SkyMaterial", aW)
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);