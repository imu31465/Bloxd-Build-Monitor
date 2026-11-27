export const id = 271;
export const ids = [271];
export const modules = {
  44803: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(41216),
      be = He(44806);
    class Me {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        this.maxDepth = He, this.kMe = [], this._maxBlockCapacity = ie || 64, this._selectionContent = new ye.d(1024), this._creationFunc = ee
      }
      update(ee, ie, He) {
        be.c._CreateBlocks(ee, ie, He, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc)
      }
      Nbe(ee) {
        for (let ie = 0; ie < this.blocks.length; ie++) {
          this.blocks[ie].addEntry(ee)
        }
      }
      gL(ee) {
        for (let ie = 0; ie < this.blocks.length; ie++) {
          this.blocks[ie].removeEntry(ee)
        }
      }
      select(ee, ie) {
        this._selectionContent.reset();
        for (let He = 0; He < this.blocks.length; He++) {
          this.blocks[He].select(ee, this._selectionContent, ie)
        }
        return ie ? this._selectionContent.concat(this.kMe) : this._selectionContent.concatWithNoDuplicate(this.kMe), this._selectionContent
      }
      intersects(ee, ie, He) {
        this._selectionContent.reset();
        for (let ye = 0; ye < this.blocks.length; ye++) {
          this.blocks[ye].intersects(ee, ie, this._selectionContent, He)
        }
        return He ? this._selectionContent.concat(this.kMe) : this._selectionContent.concatWithNoDuplicate(this.kMe), this._selectionContent
      }
      intersectsRay(ee) {
        this._selectionContent.reset();
        for (let ie = 0; ie < this.blocks.length; ie++) {
          this.blocks[ie].intersectsRay(ee, this._selectionContent)
        }
        return this._selectionContent.concatWithNoDuplicate(this.kMe), this._selectionContent
      }
    }
    Me.CreationFuncForMeshes = (ee, ie) => {
      const He = ee.WC();
      !ee.isBlocked && He.boundingBox.intersectsMinMax(ie.MMe, ie.bMe) && ie.entries.push(ee)
    }, Me.CreationFuncForSubMeshes = (ee, ie) => {
      ee.WC().boundingBox.intersectsMinMax(ie.MMe, ie.bMe) && ie.entries.push(ee)
    }
  },
  44806: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me
    });
    var ye = He(37917),
      be = He(41437);
    class Me {
      constructor(ee, ie, He, ye, be, Me) {
        this.entries = [], this.qMe = new Array, this._capacity = He, this._depth = ye, this._maxDepth = be, this._creationFunc = Me, this._minPoint = ee, this._maxPoint = ie, this.qMe.push(ee.clone()), this.qMe.push(ie.clone()), this.qMe.push(ee.clone()), this.qMe[2].x = ie.x, this.qMe.push(ee.clone()), this.qMe[3].y = ie.y, this.qMe.push(ee.clone()), this.qMe[4].z = ie.z, this.qMe.push(ie.clone()), this.qMe[5].z = ee.z, this.qMe.push(ie.clone()), this.qMe[6].x = ee.x, this.qMe.push(ie.clone()), this.qMe[7].y = ee.y
      }
      get bk() {
        return this._capacity
      }
      get MMe() {
        return this._minPoint
      }
      get bMe() {
        return this._maxPoint
      }
      addEntry(ee) {
        if (this.blocks)
          for (let ie = 0; ie < this.blocks.length; ie++) {
            this.blocks[ie].addEntry(ee)
          } else this._creationFunc(ee, this), this.entries.length > this.bk && this._depth < this._maxDepth && this.createInnerBlocks()
      }
      removeEntry(ee) {
        if (this.blocks) {
          for (let ie = 0; ie < this.blocks.length; ie++) {
            this.blocks[ie].removeEntry(ee)
          }
          return
        }
        const ie = this.entries.indexOf(ee);
        ie > -1 && this.entries.splice(ie, 1)
      }
      addEntries(ee) {
        for (let ie = 0; ie < ee.length; ie++) {
          const He = ee[ie];
          this.addEntry(He)
        }
      }
      select(ee, ie, He) {
        if (be.d.IsInFrustum(this.qMe, ee)) {
          if (this.blocks) {
            for (let ye = 0; ye < this.blocks.length; ye++) {
              this.blocks[ye].select(ee, ie, He)
            }
            return
          }
          He ? ie.concat(this.entries) : ie.concatWithNoDuplicate(this.entries)
        }
      }
      intersects(ee, ie, He, ye) {
        if (be.d.IntersectsSphere(this._minPoint, this._maxPoint, ee, ie)) {
          if (this.blocks) {
            for (let be = 0; be < this.blocks.length; be++) {
              this.blocks[be].intersects(ee, ie, He, ye)
            }
            return
          }
          ye ? He.concat(this.entries) : He.concatWithNoDuplicate(this.entries)
        }
      }
      intersectsRay(ee, ie) {
        if (ee.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
          if (this.blocks) {
            for (let He = 0; He < this.blocks.length; He++) {
              this.blocks[He].intersectsRay(ee, ie)
            }
            return
          }
          ie.concatWithNoDuplicate(this.entries)
        }
      }
      createInnerBlocks() {
        Me._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc), this.entries.splice(0)
      }
      static _CreateBlocks(ee, ie, He, be, Ke, Ue, Fe, Je) {
        Fe.blocks = new Array;
        const oe = new ye.p((ie.x - ee.x) / 2, (ie.y - ee.y) / 2, (ie.z - ee.z) / 2);
        for (let ye = 0; ye < 2; ye++)
          for (let ie = 0; ie < 2; ie++)
            for (let Re = 0; Re < 2; Re++) {
              const ke = ee.add(oe.multiplyByFloats(ye, ie, Re)),
                qe = ee.add(oe.multiplyByFloats(ye + 1, ie + 1, Re + 1)),
                fe = new Me(ke, qe, be, Ke + 1, Ue, Je);
              fe.addEntries(He), Fe.blocks.push(fe)
            }
      }
    }
  },
  44812: (ee, ie, He) => {
    He.d(ie, {
      b: () => oe
    });
    var ye = He(41199),
      be = He(37917),
      Me = He(41556),
      Ke = He(44753),
      Ue = He(41279),
      Fe = He(37929),
      Je = He(44803);
    class oe {
      constructor(ee) {
        this.name = Ue.c.NAME_OCTREE, this.checksIsEnabled = !0, this._tempRay = new Ke.D(be.p.Zero(), new be.p(1, 1, 1)), (ee = ee || Fe.b.LastCreatedScene) && (this.yp = ee, this.yp.getActiveMeshCandidates = () => this.getActiveMeshCandidates(), this.yp.getActiveSubMeshCandidates = ee => this.getActiveSubMeshCandidates(ee), this.yp.getCollidingSubMeshCandidates = (ee, ie) => this.getCollidingSubMeshCandidates(ee, ie), this.yp.getIntersectingSubMeshCandidates = (ee, ie) => this.getIntersectingSubMeshCandidates(ee, ie))
      }
      register() {
        this.yp.onMeshRemovedObservable.add((ee => {
          const ie = this.yp.selectionOctree;
          if (void 0 !== ie && null !== ie) {
            const He = ie.kMe.indexOf(ee); - 1 !== He && ie.kMe.splice(He, 1)
          }
        })), this.yp.onMeshImportedObservable.add((ee => {
          const ie = this.yp.selectionOctree;
          void 0 !== ie && null !== ie && ie.Nbe(ee)
        }))
      }
      getActiveMeshCandidates() {
        return this.yp.EMe?.select(this.yp.frustumPlanes) || this.yp._getDefaultMeshCandidates()
      }
      getActiveSubMeshCandidates(ee) {
        if (ee._submeshesOctree && ee.useOctreeForRenderingSelection) {
          return ee._submeshesOctree.select(this.yp.frustumPlanes)
        }
        return this.yp._getDefaultSubMeshCandidates(ee)
      }
      getIntersectingSubMeshCandidates(ee, ie) {
        if (ee._submeshesOctree && ee.useOctreeForPicking) {
          Ke.D.TransformToRef(ie, ee.getWorldMatrix(), this._tempRay);
          return ee._submeshesOctree.intersectsRay(this._tempRay)
        }
        return this.yp._getDefaultSubMeshCandidates(ee)
      }
      getCollidingSubMeshCandidates(ee, ie) {
        if (ee._submeshesOctree && ee.useOctreeForCollisions) {
          const He = ie._velocityWorldLength + Math.max(ie._radius.x, ie._radius.y, ie._radius.z);
          return ee._submeshesOctree.intersects(ie._basePointWorld, He)
        }
        return this.yp._getDefaultSubMeshCandidates(ee)
      }
      rebuild() {}
      dispose() {}
    }
    let Re = !1;
    Re || (Re = !0, ye.f.prototype.createOrUpdateSelectionOctree = function() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        He = this._getComponent(Ue.c.NAME_OCTREE);
      He || (He = new oe(this), this.Cbe(He)), this.EMe || (this.EMe = new Je.e(Je.e.CreationFuncForMeshes, ee, ie));
      const ye = this.getWorldExtends();
      return this.EMe.update(ye.min, ye.max, this.meshes), this.EMe
    }, Object.defineProperty(ye.f.prototype, "selectionOctree", {
      get: function() {
        return this.EMe
      },
      enumerable: !0,
      configurable: !0
    }), Me.b.prototype.createOrUpdateSubmeshesOctree = function() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64,
        ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      const He = this.Xx();
      let ye = He._getComponent(Ue.c.NAME_OCTREE);
      ye || (ye = new oe(He), He.Cbe(ye)), this._submeshesOctree || (this._submeshesOctree = new Je.e(Je.e.CreationFuncForSubMeshes, ee, ie)), this.computeWorldMatrix(!0);
      const be = this.WC().boundingBox;
      return this._submeshesOctree.update(be.minimumWorld, be.maximumWorld, this.pW), this._submeshesOctree
    })
  },
  44753: (ee, ie, He) => {
    He.d(ie, {
      B: () => We,
      D: () => Re,
      d: () => Pe,
      h: () => Te,
      k: () => fe,
      m: () => qe,
      q: () => we,
      t: () => Ze,
      w: () => de,
      z: () => te
    });
    var ye = He(37920),
      be = He(37917),
      Me = He(37925),
      Ke = He(41424),
      Ue = He(41242),
      Fe = He(37929),
      Je = He(41298);
    const oe = {
      internalPickerForMesh: void 0
    };
    class Re {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
          be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ye.b;
        this.origin = ee, this.direction = ie, this.length = He, this.epsilon = be
      }
      clone() {
        return new Re(this.origin.clone(), this.direction.clone(), this.length)
      }
      intersectsBoxMinMax(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        const ye = Re._TmpVector3[0].wie(ee.x - He, ee.y - He, ee.z - He),
          be = Re._TmpVector3[1].wie(ie.x + He, ie.y + He, ie.z + He);
        let Me, Ke, Ue, Fe, Je = 0,
          oe = Number.MAX_VALUE;
        if (Math.abs(this.direction.x) < 1e-7) {
          if (this.origin.x < ye.x || this.origin.x > be.x) return !1
        } else if (Me = 1 / this.direction.x, Ke = (ye.x - this.origin.x) * Me, Ue = (be.x - this.origin.x) * Me, Ue === -1 / 0 && (Ue = 1 / 0), Ke > Ue && (Fe = Ke, Ke = Ue, Ue = Fe), Je = Math.max(Ke, Je), oe = Math.min(Ue, oe), Je > oe) return !1;
        if (Math.abs(this.direction.y) < 1e-7) {
          if (this.origin.y < ye.y || this.origin.y > be.y) return !1
        } else if (Me = 1 / this.direction.y, Ke = (ye.y - this.origin.y) * Me, Ue = (be.y - this.origin.y) * Me, Ue === -1 / 0 && (Ue = 1 / 0), Ke > Ue && (Fe = Ke, Ke = Ue, Ue = Fe), Je = Math.max(Ke, Je), oe = Math.min(Ue, oe), Je > oe) return !1;
        if (Math.abs(this.direction.z) < 1e-7) {
          if (this.origin.z < ye.z || this.origin.z > be.z) return !1
        } else if (Me = 1 / this.direction.z, Ke = (ye.z - this.origin.z) * Me, Ue = (be.z - this.origin.z) * Me, Ue === -1 / 0 && (Ue = 1 / 0), Ke > Ue && (Fe = Ke, Ke = Ue, Ue = Fe), Je = Math.max(Ke, Je), oe = Math.min(Ue, oe), Je > oe) return !1;
        return !0
      }
      intersectsBox(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.intersectsBoxMinMax(ee.minimum, ee.maximum, ie)
      }
      intersectsSphere(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const He = ee.center.x - this.origin.x,
          ye = ee.center.y - this.origin.y,
          be = ee.center.z - this.origin.z,
          Me = He * He + ye * ye + be * be,
          Ke = ee.radius + ie,
          Ue = Ke * Ke;
        if (Me <= Ue) return !0;
        const Fe = He * this.direction.x + ye * this.direction.y + be * this.direction.z;
        if (Fe < 0) return !1;
        return Me - Fe * Fe <= Ue
      }
      intersectsTriangle(ee, ie, He) {
        const ye = Re._TmpVector3[0],
          Me = Re._TmpVector3[1],
          Ue = Re._TmpVector3[2],
          Fe = Re._TmpVector3[3],
          Je = Re._TmpVector3[4];
        ie.subtractToRef(ee, ye), He.subtractToRef(ee, Me), be.p.CrossToRef(this.direction, Me, Ue);
        const oe = be.p.Dot(ye, Ue);
        if (0 === oe) return null;
        const ke = 1 / oe;
        this.origin.subtractToRef(ee, Fe);
        const qe = be.p.Dot(Fe, Ue) * ke;
        if (qe < -this.epsilon || qe > 1 + this.epsilon) return null;
        be.p.CrossToRef(Fe, ye, Je);
        const fe = be.p.Dot(this.direction, Je) * ke;
        if (fe < -this.epsilon || qe + fe > 1 + this.epsilon) return null;
        const Te = be.p.Dot(Me, Je) * ke;
        return Te > this.length || Te < 0 ? null : new Ke.b(1 - qe - fe, qe, Te)
      }
      intersectsPlane(ee) {
        let ie;
        const He = be.p.Dot(ee.normal, this.direction);
        if (Math.abs(He) < 9.99999997475243e-7) return null;
        {
          const ye = be.p.Dot(ee.normal, this.origin);
          return ie = (-ee.d - ye) / He, ie < 0 ? ie < -9.99999997475243e-7 ? null : 0 : ie
        }
      }
      intersectsAxis(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        switch (ee) {
          case "y": {
            const ee = (this.origin.y - ie) / this.direction.y;
            return ee > 0 ? null : new be.p(this.origin.x + this.direction.x * -ee, ie, this.origin.z + this.direction.z * -ee)
          }
          case "x": {
            const ee = (this.origin.x - ie) / this.direction.x;
            return ee > 0 ? null : new be.p(ie, this.origin.y + this.direction.y * -ee, this.origin.z + this.direction.z * -ee)
          }
          case "z": {
            const ee = (this.origin.z - ie) / this.direction.z;
            return ee > 0 ? null : new be.p(this.origin.x + this.direction.x * -ee, this.origin.y + this.direction.y * -ee, ie)
          }
          default:
            return null
        }
      }
      CMe(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Me = arguments.length > 4 ? arguments[4] : void 0,
          Ke = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Ue = be.j.Matrix[0];
        return ee.getWorldMatrix().invertToRef(Ue), this._tmpRay ? Re.TransformToRef(this, Ue, this._tmpRay) : this._tmpRay = Re.Transform(this, Ue), ee.intersects(this._tmpRay, ie, He, ye, Me, Ke)
      }
      intersectsMeshes(ee, ie, He) {
        He ? He.length = 0 : He = [];
        for (let ye = 0; ye < ee.length; ye++) {
          const be = this.CMe(ee[ye], ie);
          be.hit && He.push(be)
        }
        return He.sort(this._comparePickingInfo), He
      }
      _comparePickingInfo(ee, ie) {
        return ee.distance < ie.distance ? -1 : ee.distance > ie.distance ? 1 : 0
      }
      intersectionSegment(ee, ie, He) {
        const ye = this.origin,
          Me = be.j.rf[0],
          Ke = be.j.rf[1],
          Ue = be.j.rf[2],
          Fe = be.j.rf[3];
        ie.subtractToRef(ee, Me), this.direction.scaleToRef(Re._Rayl, Ue), ye.addToRef(Ue, Ke), ee.subtractToRef(ye, Fe);
        const Je = be.p.Dot(Me, Me),
          oe = be.p.Dot(Me, Ue),
          ke = be.p.Dot(Ue, Ue),
          qe = be.p.Dot(Me, Fe),
          fe = be.p.Dot(Ue, Fe),
          Te = Je * ke - oe * oe;
        let pe, Xe, ze = Te,
          Be = Te;
        Te < Re._Smallnum ? (pe = 0, ze = 1, Xe = fe, Be = ke) : (pe = oe * fe - ke * qe, Xe = Je * fe - oe * qe, pe < 0 ? (pe = 0, Xe = fe, Be = ke) : pe > ze && (pe = ze, Xe = fe + oe, Be = ke)), Xe < 0 ? (Xe = 0, -qe < 0 ? pe = 0 : -qe > Je ? pe = ze : (pe = -qe, ze = Je)) : Xe > Be && (Xe = Be, -qe + oe < 0 ? pe = 0 : -qe + oe > Je ? pe = ze : (pe = -qe + oe, ze = Je));
        const Ee = Math.abs(pe) < Re._Smallnum ? 0 : pe / ze,
          ge = Math.abs(Xe) < Re._Smallnum ? 0 : Xe / Be,
          Oe = be.j.rf[4];
        Ue.scaleToRef(ge, Oe);
        const de = be.j.rf[5];
        Me.scaleToRef(Ee, de), de.addInPlace(Fe);
        const We = be.j.rf[6];
        de.subtractToRef(Oe, We);
        return ge > 0 && ge <= this.length && We.lengthSquared() < He * He ? de.length() : -1
      }
      update(ee, ie, He, ye, Me, Ke, Ue) {
        if (arguments.length > 7 && void 0 !== arguments[7] && arguments[7]) {
          Re._RayDistant || (Re._RayDistant = Re.Zero()), Re._RayDistant.unprojectRayToRef(ee, ie, He, ye, be.b.IdentityReadOnly, Ke, Ue);
          const Fe = be.j.Matrix[0];
          Me.invertToRef(Fe), Re.TransformToRef(Re._RayDistant, Fe, this)
        } else this.unprojectRayToRef(ee, ie, He, ye, Me, Ke, Ue);
        return this
      }
      static Zero() {
        return new Re(be.p.Zero(), be.p.Zero())
      }
      static CreateNew(ee, ie, He, ye, be, Me, Ke) {
        return Re.Zero().update(ee, ie, He, ye, be, Me, Ke)
      }
      static CreateNewFromTo(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : be.b.IdentityReadOnly;
        const ye = new Re(new be.p(0, 0, 0), new be.p(0, 0, 0));
        return Re.CreateFromToToRef(ee, ie, ye, He)
      }
      static CreateFromToToRef(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : be.b.IdentityReadOnly;
        He.origin.jD(ee);
        const Me = ie.subtractToRef(ee, He.direction),
          Ke = Math.sqrt(Me.x * Me.x + Me.y * Me.y + Me.z * Me.z);
        return He.length = Ke, He.direction.normalize(), Re.TransformToRef(He, ye, He)
      }
      static Transform(ee, ie) {
        const He = new Re(new be.p(0, 0, 0), new be.p(0, 0, 0));
        return Re.TransformToRef(ee, ie, He), He
      }
      static TransformToRef(ee, ie, He) {
        be.p.TransformCoordinatesToRef(ee.origin, ie, He.origin), be.p.TransformNormalToRef(ee.direction, ie, He.direction), He.length = ee.length, He.epsilon = ee.epsilon;
        const ye = He.direction,
          Me = ye.length();
        if (0 !== Me && 1 !== Me) {
          const ee = 1 / Me;
          ye.x *= ee, ye.y *= ee, ye.z *= ee, He.length *= Me
        }
        return He
      }
      unprojectRayToRef(ee, ie, He, ye, Me, Ke, Ue) {
        const Je = be.j.Matrix[0];
        Me.multiplyToRef(Ke, Je), Je.multiplyToRef(Ue, Je), Je.invert();
        const oe = Fe.b.LastCreatedEngine,
          Re = be.j.rf[0];
        Re.x = ee / He * 2 - 1, Re.y = -(ie / ye * 2 - 1), Re.z = oe?.Gbe ? 1 : oe?.isNDCHalfZRange ? 0 : -1;
        const ke = be.j.rf[1].wie(Re.x, Re.y, 1 - 1e-8),
          qe = be.j.rf[2],
          fe = be.j.rf[3];
        be.p.TransformCoordinatesToRef(Re, Je, qe), be.p.TransformCoordinatesToRef(ke, Je, fe), this.origin.jD(qe), fe.subtractToRef(qe, this.direction), this.direction.normalize()
      }
    }

    function ke(ee, ie, He, ye, be) {
      let Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Ke = Re.Zero();
      return qe(ee, ie, He, ye, Ke, be, Me), Ke
    }

    function qe(ee, ie, He, ye, Me, Ke) {
      let Ue = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Fe = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      const Je = ee.Nf();
      if (!Ke && !(Ke = ee.activeCamera) && !(Ke = ee.cameraToUseForPointers)) return ee;
      const oe = Ke.viewport,
        Re = Je.getRenderHeight(),
        {
          x: ke,
          y: qe,
          width: fe,
          height: Te
        } = oe.toGlobal(Je.getRenderWidth(), Re),
        pe = 1 / Je.getHardwareScalingLevel();
      return ie = ie * pe - ke, He = He * pe - (Re - qe - Te), Me.update(ie, He, fe, Te, ye || be.b.IdentityReadOnly, Ue ? be.b.IdentityReadOnly : Ke.getViewMatrix(), Ke.getProjectionMatrix(), Fe), ee
    }

    function fe(ee, ie, He, ye) {
      const be = Re.Zero();
      return Te(ee, ie, He, be, ye), be
    }

    function Te(ee, ie, He, ye, Me) {
      if (!Ue.e) return ee;
      const Ke = ee.Nf();
      if (!Me && !(Me = ee.activeCamera) && !(Me = ee.cameraToUseForPointers)) throw new Error("Active camera not set");
      const Fe = Me.viewport,
        Je = Ke.getRenderHeight(),
        {
          x: oe,
          y: Re,
          width: ke,
          height: qe
        } = Fe.toGlobal(Ke.getRenderWidth(), Je),
        fe = be.b.Identity(),
        Te = 1 / Ke.getHardwareScalingLevel();
      return ie = ie * Te - oe, He = He * Te - (Je - Re - qe), ye.update(ie, He, ke, qe, fe, fe, Me.getProjectionMatrix()), ee
    }

    function pe(ee, ie, He, ye, be, Me, Ke, Ue) {
      return Xe(ee, He, ye, ie(ye, He.enableDistantPicking), be, Me, Ke, Ue)
    }

    function Xe(ee, ie, He, ye, be, Me, Ke, Ue) {
      const Fe = ie.intersects(ye, be, Ke, Me, He, Ue);
      return Fe && Fe.hit ? !be && null != ee && Fe.distance >= ee.distance ? null : Fe : null
    }

    function ze(ee, ie) {
      return "InstancedLinesMesh" === ee || "LinesMesh" === ee ? ie.intersectionThreshold : 0
    }

    function Be(ee) {
      const ie = ee.getClassName();
      if ("GreasedLineMesh" === ie) return {
        rawBoundingInfo: null,
        intersectionThreshold: 0
      };
      const He = ee.rawBoundingInfo;
      return {
        rawBoundingInfo: He,
        intersectionThreshold: He ? ze(ie, ee) : 0
      }
    }

    function Ee(ee, ie, He, ye, be) {
      const Me = ee(He, ie.enableDistantPicking);
      return Me.intersectsSphere(ye.OMe, be) && Me.intersectsBox(ye.boundingBox, be) ? Me : null
    }

    function ge(ee, ie, He, ye, Me, Ke) {
      let Fe = null;
      const Je = !!(ee.activeCameras && ee.activeCameras.length > 1 && ee.cameraToUseForPointers !== ee.activeCamera),
        Re = ee.cameraToUseForPointers || ee.activeCamera,
        ke = oe.internalPickerForMesh || pe,
        qe = ke === pe;
      for (let Ue = 0; Ue < ee.meshes.length; Ue++) {
        const oe = ee.meshes[Ue];
        if (He) {
          if (!He(oe, -1)) continue
        } else if (!oe.isEnabled() || !oe.isVisible || !oe.Mp) continue;
        const fe = Je && oe.isWorldMatrixCameraDependent(),
          Te = oe.computeWorldMatrix(fe, Re);
        if (oe.hasThinInstances && oe.fye) {
          const ee = ke(Fe, ie, oe, Te, !0, !0, Ke);
          if (ee) {
            if (Me) return ee;
            const {
              rawBoundingInfo: Ue,
              intersectionThreshold: Je
            } = Be(oe), Re = oe._thinInstanceDataStorage.matrixData;
            if (Re) {
              const ee = be.j.Matrix[0],
                fe = be.j.Matrix[1],
                pe = Math.min(oe.Hie, Re.length >> 4);
              for (let ze = 0; ze < pe; ze++) {
                if (He && !He(oe, ze)) continue;
                be.b.FromArrayToRef(Re, ze << 4, ee), ee.multiplyToRef(Te, fe);
                const pe = qe && Ue ? Ee(ie, oe, fe, Ue, Je) : null;
                if (qe && Ue && !pe) continue;
                const Be = qe && pe ? Xe(Fe, oe, fe, pe, ye, Me, Ke, !0) : ke(Fe, ie, oe, fe, ye, Me, Ke, !0);
                if (Be && (Fe = Be, Fe.thinInstanceIndex = ze, ye)) return Fe
              }
            }
          }
        } else {
          const ee = ke(Fe, ie, oe, Te, ye, Me, Ke);
          if (ee && (Fe = ee, ye)) return Fe
        }
      }
      return Fe || new Ue.e
    }

    function Oe(ee, ie, He, ye) {
      if (!Ue.e) return null;
      const Me = [],
        Ke = !!(ee.activeCameras && ee.activeCameras.length > 1 && ee.cameraToUseForPointers !== ee.activeCamera),
        Fe = ee.cameraToUseForPointers || ee.activeCamera,
        Je = oe.internalPickerForMesh || pe,
        Re = Je === pe;
      for (let Ue = 0; Ue < ee.meshes.length; Ue++) {
        const oe = ee.meshes[Ue];
        if (He) {
          if (!He(oe, -1)) continue
        } else if (!oe.isEnabled() || !oe.isVisible || !oe.Mp) continue;
        const ke = Ke && oe.isWorldMatrixCameraDependent(),
          qe = oe.computeWorldMatrix(ke, Fe);
        if (oe.hasThinInstances && oe.fye) {
          if (Je(null, ie, oe, qe, !0, !0, ye)) {
            const {
              rawBoundingInfo: ee,
              intersectionThreshold: Ke
            } = Be(oe), Ue = oe._thinInstanceDataStorage.matrixData;
            if (Ue) {
              const Fe = be.j.Matrix[0],
                ke = be.j.Matrix[1],
                fe = Math.min(oe.Hie, Ue.length >> 4);
              for (let Te = 0; Te < fe; Te++) {
                if (He && !He(oe, Te)) continue;
                be.b.FromArrayToRef(Ue, Te << 4, Fe), Fe.multiplyToRef(qe, ke);
                const fe = Re && ee ? Ee(ie, oe, ke, ee, Ke) : null;
                if (Re && ee && !fe) continue;
                const pe = Re && fe ? Xe(null, oe, ke, fe, !1, !1, ye, !0) : Je(null, ie, oe, ke, !1, !1, ye, !0);
                pe && (pe.thinInstanceIndex = Te, Me.push(pe))
              }
            }
          }
        } else {
          const ee = Je(null, ie, oe, qe, !1, !1, ye);
          ee && Me.push(ee)
        }
      }
      return Me
    }

    function de(ee, ie, He, ye, Me, Ke) {
      if (!Ue.e) return null;
      const Fe = ge(ee, (ye => (ee._tempPickingRay || (ee._tempPickingRay = Re.Zero()), qe(ee, ie, He, ye, ee._tempPickingRay, Ke || null), ee._tempPickingRay)), ye, Me, !0);
      return Fe && (Fe.ray = ke(ee, ie, He, be.b.Identity(), Ke || null)), Fe
    }

    function We(ee, ie, He, ye, Me, Ke, Ue) {
      const Fe = ge(ee, ((ye, be) => (ee._tempPickingRay || (ee._tempPickingRay = Re.Zero()), qe(ee, ie, He, ye, ee._tempPickingRay, Ke || null, !1, be), ee._tempPickingRay)), ye, Me, !1, Ue);
      return Fe && (Fe.ray = ke(ee, ie, He, be.b.Identity(), Ke || null)), Fe
    }

    function te(ee, ie, He, ye, Me) {
      const Ke = ge(ee, (He => (ee._pickWithRayInverseMatrix || (ee._pickWithRayInverseMatrix = be.b.Identity()), He.invertToRef(ee._pickWithRayInverseMatrix), ee._cachedRayForTransform || (ee._cachedRayForTransform = Re.Zero()), Re.TransformToRef(ie, ee._pickWithRayInverseMatrix, ee._cachedRayForTransform), ee._cachedRayForTransform)), He, ye, !1, Me);
      return Ke && (Ke.ray = ie), Ke
    }

    function Ze(ee, ie, He, ye, be, Me) {
      return Oe(ee, (ye => ke(ee, ie, He, ye, be || null)), ye, Me)
    }

    function we(ee, ie, He, ye) {
      return Oe(ee, (He => (ee._pickWithRayInverseMatrix || (ee._pickWithRayInverseMatrix = be.b.Identity()), He.invertToRef(ee._pickWithRayInverseMatrix), ee._cachedRayForTransform || (ee._cachedRayForTransform = Re.Zero()), Re.TransformToRef(ie, ee._pickWithRayInverseMatrix, ee._cachedRayForTransform), ee._cachedRayForTransform)), He, ye)
    }

    function De(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
        ye = arguments.length > 3 ? arguments[3] : void 0,
        Me = arguments.length > 4 ? arguments[4] : void 0;
      ye || (ye = ee.getWorldMatrix()), ie.length = He, Me ? ie.origin.jD(Me) : ie.origin.jD(ee.position);
      const Ke = be.j.rf[2];
      Ke.set(0, 0, ee._scene.useRightHandedSystem ? -1 : 1);
      const Ue = be.j.rf[3];
      return be.p.TransformNormalToRef(Ke, ye, Ue), be.p.NormalizeToRef(Ue, ie.direction), ie
    }

    function Pe(ee, ie) {
      ie && (ie.prototype.getForwardRay = function() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        return De(this, new Re(be.p.Zero(), be.p.Zero(), ee), ee, ie, He)
      }, ie.prototype.getForwardRayToRef = function(ee) {
        return De(this, ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, arguments.length > 2 ? arguments[2] : void 0, arguments.length > 3 ? arguments[3] : void 0)
      }), ee && (Je.c._IsPickingAvailable = !0, ee.prototype.createPickingRay = function(ee, ie, He, ye) {
        return ke(this, ee, ie, He, ye, arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
      })
    }
    Re._TmpVector3 = (0, Me.c)(6, be.p.Zero), Re._RayDistant = Re.Zero(), Re._Smallnum = 1e-8, Re._Rayl = 1e9
  },
  44748: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me.D
    });
    var ye = He(41199),
      be = He(41320),
      Me = He(44753);
    let Ke = !1;
    Ke || (Ke = !0, (0, Me.d)(ye.f, be.d), ye.f.prototype.createPickingRayToRef = function(ee, ie, He, ye, be) {
      let Ke = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ue = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Me.m)(this, ee, ie, He, ye, be, Ke, Ue)
    }, ye.f.prototype.createPickingRayInCameraSpace = function(ee, ie, He) {
      return (0, Me.k)(this, ee, ie, He)
    }, ye.f.prototype.createPickingRayInCameraSpaceToRef = function(ee, ie, He, ye) {
      return (0, Me.h)(this, ee, ie, He, ye)
    }, ye.f.prototype.pickWithBoundingInfo = function(ee, ie, He, ye, be) {
      return (0, Me.w)(this, ee, ie, He, ye, be)
    }, ye.f.prototype.tq = function(ee, ie, He, ye, be, Ke) {
      let Ue = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return (0, Me.B)(this, ee, ie, He, ye, be, Ke, Ue)
    }, ye.f.prototype.pickWithRay = function(ee, ie, He, ye) {
      return (0, Me.z)(this, ee, ie, He, ye)
    }, ye.f.prototype.multiPick = function(ee, ie, He, ye, be) {
      return (0, Me.t)(this, ee, ie, He, ye, be)
    }, ye.f.prototype.multiPickWithRay = function(ee, ie, He) {
      return (0, Me.q)(this, ee, ie, He)
    })
  },
  44758: (ee, ie, He) => {
    He.d(ie, {
      b: () => oe
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(37917),
      Ke = He(41374),
      Ue = He(44762),
      Fe = He(41323),
      Je = He(37949);
    let oe = (() => {
        var ee;
        let ie, He, Fe, Je, oe, Re, ke, qe, fe = Ue.c,
          Te = [],
          pe = [],
          Xe = [],
          ze = [],
          Be = [],
          Ee = [],
          ge = [],
          Oe = [],
          de = [],
          We = [],
          te = [],
          Ze = [],
          we = [];
        return ee = class extends fe {
          get shadowFrustumSize() {
            return this._shadowFrustumSize
          }
          set shadowFrustumSize(ee) {
            this._shadowFrustumSize = ee, this.forceProjectionMatrixCompute()
          }
          get shadowOrthoScale() {
            return this._shadowOrthoScale
          }
          set shadowOrthoScale(ee) {
            this._shadowOrthoScale = ee, this.forceProjectionMatrixCompute()
          }
          get orthoLeft() {
            return this._orthoLeft
          }
          set orthoLeft(ee) {
            this._orthoLeft = ee
          }
          get orthoRight() {
            return this._orthoRight
          }
          set orthoRight(ee) {
            this._orthoRight = ee
          }
          get orthoTop() {
            return this._orthoTop
          }
          set orthoTop(ee) {
            this._orthoTop = ee
          }
          get orthoBottom() {
            return this._orthoBottom
          }
          set orthoBottom(ee) {
            this._orthoBottom = ee
          }
          constructor(ee, ie, He, be) {
            super(ee, He, be), this._shadowFrustumSize = ((0, ye.l)(this, Te), 0), this._shadowOrthoScale = .1, this.autoUpdateExtends = (0, ye.l)(this, pe, !0), this.autoCalcShadowZBounds = ((0, ye.l)(this, Xe), (0, ye.l)(this, ze, !1)), this._orthoLeft = ((0, ye.l)(this, Be), (0, ye.l)(this, Ee, Number.MAX_VALUE)), this._orthoRight = ((0, ye.l)(this, ge), (0, ye.l)(this, Oe, Number.MIN_VALUE)), this._orthoTop = ((0, ye.l)(this, de), (0, ye.l)(this, We, Number.MIN_VALUE)), this._orthoBottom = ((0, ye.l)(this, te), (0, ye.l)(this, Ze, Number.MAX_VALUE)), (0, ye.l)(this, we), this.position = ie.scale(-1), this.direction = ie
          }
          getClassName() {
            return "DirectionalLight"
          }
          getTypeID() {
            return Ke.e.LIGHTTYPEID_DIRECTIONALLIGHT
          }
          _setDefaultShadowProjectionMatrix(ee, ie, He) {
            this.shadowFrustumSize > 0 ? this._setDefaultFixedFrustumShadowProjectionMatrix(ee) : this._setDefaultAutoExtendShadowProjectionMatrix(ee, ie, He)
          }
          _setDefaultFixedFrustumShadowProjectionMatrix(ee) {
            const ie = this.Xx().activeCamera;
            Me.b.OrthoLHToRef(this.shadowFrustumSize, this.shadowFrustumSize, void 0 !== this.shadowMinZ ? this.shadowMinZ : ie ? ie.minZ : 0, void 0 !== this.shadowMaxZ ? this.shadowMaxZ : ie ? ie.maxZ : 1e4, ee, this.Xx().Nf().isNDCHalfZRange)
          }
          _setDefaultAutoExtendShadowProjectionMatrix(ee, ie, He) {
            const ye = this.Xx().activeCamera;
            if (this.autoUpdateExtends || this._orthoLeft === Number.MAX_VALUE) {
              const ee = Me.p.Zero();
              this._orthoLeft = Number.MAX_VALUE, this._orthoRight = -Number.MAX_VALUE, this._orthoTop = -Number.MAX_VALUE, this._orthoBottom = Number.MAX_VALUE;
              let ye = Number.MAX_VALUE,
                be = -Number.MAX_VALUE;
              for (let Ke = 0; Ke < He.length; Ke++) {
                const Ue = He[Ke];
                if (!Ue) continue;
                const Fe = Ue.WC().boundingBox;
                for (let He = 0; He < Fe.vectorsWorld.length; He++) Me.p.TransformCoordinatesToRef(Fe.vectorsWorld[He], ie, ee), ee.x < this._orthoLeft && (this._orthoLeft = ee.x), ee.y < this._orthoBottom && (this._orthoBottom = ee.y), ee.x > this._orthoRight && (this._orthoRight = ee.x), ee.y > this._orthoTop && (this._orthoTop = ee.y), this.autoCalcShadowZBounds && (ee.z < ye && (ye = ee.z), ee.z > be && (be = ee.z))
              }
              this.autoCalcShadowZBounds && (this._shadowMinZ = ye, this._shadowMaxZ = be)
            }
            const be = this._orthoRight - this._orthoLeft,
              Ke = this._orthoTop - this._orthoBottom,
              Ue = void 0 !== this.shadowMinZ ? this.shadowMinZ : ye?.minZ || 0,
              Fe = void 0 !== this.shadowMaxZ ? this.shadowMaxZ : ye?.maxZ || 1e4,
              Je = this.Xx().Nf().Gbe;
            Me.b.OrthoOffCenterLHToRef(this._orthoLeft - be * this.shadowOrthoScale, this._orthoRight + be * this.shadowOrthoScale, this._orthoBottom - Ke * this.shadowOrthoScale, this._orthoTop + Ke * this.shadowOrthoScale, Je ? Fe : Ue, Je ? Ue : Fe, ee, this.Xx().Nf().isNDCHalfZRange)
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          transferToEffect(ee, ie) {
            return this.computeTransformedInformation() ? (this._uniformBuffer.updateFloat4("vLightData", this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z, 1, ie), this) : (this._uniformBuffer.updateFloat4("vLightData", this.direction.x, this.direction.y, this.direction.z, 1, ie), this)
          }
          transferToNodeMaterialEffect(ee, ie) {
            return this.computeTransformedInformation() ? (ee.setFloat3(ie, this.transformedDirection.x, this.transformedDirection.y, this.transformedDirection.z), this) : (ee.setFloat3(ie, this.direction.x, this.direction.y, this.direction.z), this)
          }
          getDepthMinZ(ee) {
            const ie = this._scene.Nf();
            return !ie.Gbe && ie.isNDCHalfZRange ? 0 : 1
          }
          getDepthMaxZ(ee) {
            const ie = this._scene.Nf();
            return ie.Gbe && ie.isNDCHalfZRange ? 0 : 1
          }
          prepareLightSpecificDefines(ee, ie) {
            ee["DIRLIGHT" + ie] = !0
          }
        }, (() => {
          const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(fe[Symbol.metadata] ?? null) : void 0;
          ie = [(0, be.R)()], He = [(0, be.R)()], Fe = [(0, be.R)()], Je = [(0, be.R)()], oe = [(0, be.R)("orthoLeft")], Re = [(0, be.R)("orthoRight")], ke = [(0, be.R)("orthoTop")], qe = [(0, be.R)("orthoBottom")], (0, ye.i)(ee, null, ie, {
            kind: "getter",
            name: "shadowFrustumSize",
            static: !1,
            private: !1,
            access: {
              has: ee => "shadowFrustumSize" in ee,
              get: ee => ee.shadowFrustumSize
            },
            metadata: Me
          }, null, Te), (0, ye.i)(ee, null, He, {
            kind: "getter",
            name: "shadowOrthoScale",
            static: !1,
            private: !1,
            access: {
              has: ee => "shadowOrthoScale" in ee,
              get: ee => ee.shadowOrthoScale
            },
            metadata: Me
          }, null, Te), (0, ye.i)(null, null, Fe, {
            kind: "field",
            name: "autoUpdateExtends",
            static: !1,
            private: !1,
            access: {
              has: ee => "autoUpdateExtends" in ee,
              get: ee => ee.autoUpdateExtends,
              set: (ee, ie) => {
                ee.autoUpdateExtends = ie
              }
            },
            metadata: Me
          }, pe, Xe), (0, ye.i)(null, null, Je, {
            kind: "field",
            name: "autoCalcShadowZBounds",
            static: !1,
            private: !1,
            access: {
              has: ee => "autoCalcShadowZBounds" in ee,
              get: ee => ee.autoCalcShadowZBounds,
              set: (ee, ie) => {
                ee.autoCalcShadowZBounds = ie
              }
            },
            metadata: Me
          }, ze, Be), (0, ye.i)(null, null, oe, {
            kind: "field",
            name: "_orthoLeft",
            static: !1,
            private: !1,
            access: {
              has: ee => "_orthoLeft" in ee,
              get: ee => ee._orthoLeft,
              set: (ee, ie) => {
                ee._orthoLeft = ie
              }
            },
            metadata: Me
          }, Ee, ge), (0, ye.i)(null, null, Re, {
            kind: "field",
            name: "_orthoRight",
            static: !1,
            private: !1,
            access: {
              has: ee => "_orthoRight" in ee,
              get: ee => ee._orthoRight,
              set: (ee, ie) => {
                ee._orthoRight = ie
              }
            },
            metadata: Me
          }, Oe, de), (0, ye.i)(null, null, ke, {
            kind: "field",
            name: "_orthoTop",
            static: !1,
            private: !1,
            access: {
              has: ee => "_orthoTop" in ee,
              get: ee => ee._orthoTop,
              set: (ee, ie) => {
                ee._orthoTop = ie
              }
            },
            metadata: Me
          }, We, te), (0, ye.i)(null, null, qe, {
            kind: "field",
            name: "_orthoBottom",
            static: !1,
            private: !1,
            access: {
              has: ee => "_orthoBottom" in ee,
              get: ee => ee._orthoBottom,
              set: (ee, ie) => {
                ee._orthoBottom = ie
              }
            },
            metadata: Me
          }, Ze, we), Me && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Me
          })
        })(), ee
      })(),
      Re = !1;
    Re || (Re = !0, Fe.d.AddNodeConstructor("Light_Type_1", ((ee, ie) => () => new oe(ee, Me.p.Zero(), ie))), (0, Je.e)("BABYLON.DirectionalLight", oe))
  },
  39499: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      g: () => Me,
      i: () => Ke,
      k: () => Ue
    });
    var ye = He(38022);
    class be {
      constructor(ee, ie, He) {
        this.gradient = ee, this.color1 = ie, this.color2 = He
      }
      getColorToRef(ee) {
        this.color2 ? ye.g.LerpToRef(this.color1, this.color2, Math.random(), ee) : ee.jD(this.color1)
      }
    }
    class Me {
      constructor(ee, ie) {
        this.gradient = ee, this.color = ie
      }
    }
    class Ke {
      constructor(ee, ie, He) {
        this.gradient = ee, this.factor1 = ie, this.factor2 = He
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class Ue {
      static GetCurrentGradient(ee, ie, He) {
        if (ie[0].gradient > ee) return void He(ie[0], ie[0], 1);
        for (let be = 0; be < ie.length - 1; be++) {
          const ye = ie[be],
            Me = ie[be + 1];
          if (ee >= ye.gradient && ee <= Me.gradient) {
            return void He(ye, Me, (ee - ye.gradient) / (Me.gradient - ye.gradient))
          }
        }
        const ye = ie.length - 1;
        He(ie[ye], ie[ye], 1)
      }
    }
  },
  39503: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(37917),
      be = He(37938),
      Me = He(39463);
    class Ke {
      constructor() {
        this.direction1 = new ye.p(0, 1, 0), this.direction2 = new ye.p(0, 1, 0), this.minEmitBox = new ye.p(-.5, -.5, -.5), this.maxEmitBox = new ye.p(.5, .5, .5)
      }
      startDirectionFunction(ee, ie, He, Me) {
        const Ke = (0, be.RandomRange)(this.direction1.x, this.direction2.x),
          Ue = (0, be.RandomRange)(this.direction1.y, this.direction2.y),
          Fe = (0, be.RandomRange)(this.direction1.z, this.direction2.z);
        if (Me) return ie.x = Ke, ie.y = Ue, void(ie.z = Fe);
        ye.p.TransformNormalFromFloatsToRef(Ke, Ue, Fe, ee, ie)
      }
      startPositionFunction(ee, ie, He, Me) {
        const Ke = (0, be.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          Ue = (0, be.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          Fe = (0, be.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Me) return ie.x = Ke, ie.y = Ue, void(ie.z = Fe);
        ye.p.TransformCoordinatesFromFloatsToRef(Ke, Ue, Fe, ee, ie)
      }
      clone() {
        const ee = new Ke;
        return Me.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {
        ee.setVector3("direction1", this.direction1), ee.setVector3("direction2", this.direction2), ee.setVector3("minEmitBox", this.minEmitBox), ee.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(ee) {
        ee.addUniform("direction1", 3), ee.addUniform("direction2", 3), ee.addUniform("minEmitBox", 3), ee.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const ee = {};
        return ee.type = this.getClassName(), ee.direction1 = this.direction1.Qbe(), ee.direction2 = this.direction2.Qbe(), ee.minEmitBox = this.minEmitBox.Qbe(), ee.maxEmitBox = this.maxEmitBox.Qbe(), ee
      }
      parse(ee) {
        ye.p.FromArrayToRef(ee.direction1, 0, this.direction1), ye.p.FromArrayToRef(ee.direction2, 0, this.direction2), ye.p.FromArrayToRef(ee.minEmitBox, 0, this.minEmitBox), ye.p.FromArrayToRef(ee.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39461: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      d: () => Ke
    });
    var ye = He(37917),
      be = He(37938),
      Me = He(39463);
    class Ke {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = ee, this.height = ie, this.radiusRange = He, this.directionRandomizer = be, this._tempVector = ye.p.Zero()
      }
      startDirectionFunction(ee, ie, He, Me, Ke) {
        He.position.subtractToRef(ee.getTranslation(), this._tempVector), this._tempVector.normalize(), ye.p.TransformNormalToRef(this._tempVector, Ke, this._tempVector);
        const Ue = (0, be.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let Fe = Math.atan2(this._tempVector.x, this._tempVector.z);
        Fe += (0, be.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = Ue, this._tempVector.x = Math.sin(Fe), this._tempVector.z = Math.cos(Fe), this._tempVector.normalize(), Me ? ie.jD(this._tempVector) : ye.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, ee, ie)
      }
      startPositionFunction(ee, ie, He, Me) {
        const Ke = (0, be.RandomRange)(-this.height / 2, this.height / 2),
          Ue = (0, be.RandomRange)(0, 2 * Math.PI),
          Fe = (0, be.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Je = Math.sqrt(Fe) * this.radius,
          oe = Je * Math.cos(Ue),
          Re = Je * Math.sin(Ue);
        Me ? ie.wie(oe, Ke, Re) : ye.p.TransformCoordinatesFromFloatsToRef(oe, Ke, Re, ee, ie)
      }
      clone() {
        const ee = new Ke(this.radius, this.directionRandomizer);
        return Me.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {
        ee.setFloat("radius", this.radius), ee.setFloat("height", this.height), ee.setFloat("radiusRange", this.radiusRange), ee.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(ee) {
        ee.addUniform("radius", 1), ee.addUniform("height", 1), ee.addUniform("radiusRange", 1), ee.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const ee = {};
        return ee.type = this.getClassName(), ee.radius = this.radius, ee.height = this.height, ee.radiusRange = this.radiusRange, ee.directionRandomizer = this.directionRandomizer, ee
      }
      parse(ee) {
        this.radius = ee.radius, this.height = ee.height, this.radiusRange = ee.radiusRange, this.directionRandomizer = ee.directionRandomizer
      }
    }
    class Ue extends Ke {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ye.p(0, 1, 0),
          Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ye.p(0, 1, 0);
        super(ee, ie, He), this.direction1 = be, this.direction2 = Me
      }
      startDirectionFunction(ee, ie, He, Me) {
        const Ke = (0, be.RandomRange)(this.direction1.x, this.direction2.x),
          Ue = (0, be.RandomRange)(this.direction1.y, this.direction2.y),
          Fe = (0, be.RandomRange)(this.direction1.z, this.direction2.z);
        Me ? ie.wie(Ke, Ue, Fe) : ye.p.TransformNormalFromFloatsToRef(Ke, Ue, Fe, ee, ie)
      }
      clone() {
        const ee = new Ue(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Me.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {
        ee.setFloat("radius", this.radius), ee.setFloat("height", this.height), ee.setFloat("radiusRange", this.radiusRange), ee.setVector3("direction1", this.direction1), ee.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(ee) {
        ee.addUniform("radius", 1), ee.addUniform("height", 1), ee.addUniform("radiusRange", 1), ee.addUniform("direction1", 3), ee.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const ee = super.serialize();
        return ee.direction1 = this.direction1.Qbe(), ee.direction2 = this.direction2.Qbe(), ee
      }
      parse(ee) {
        super.parse(ee), ye.p.FromArrayToRef(ee.direction1, 0, this.direction1), ye.p.FromArrayToRef(ee.direction2, 0, this.direction2)
      }
    }
  },
  44778: (ee, ie, He) => {
    He.d(ie, {
      b: () => si
    });
    var ye = He(39499),
      be = He(37931),
      Me = He(37917),
      Ke = He(41247),
      Ue = He(44783),
      Fe = He(37929),
      Je = He(41400),
      oe = He(38022),
      Re = He(39503),
      ke = He(39463),
      qe = He(37938);
    class fe {
      constructor() {
        this.direction1 = new Me.p(0, 1, 0), this.direction2 = new Me.p(0, 1, 0)
      }
      startDirectionFunction(ee, ie, He, ye) {
        const be = (0, qe.RandomRange)(this.direction1.x, this.direction2.x),
          Ke = (0, qe.RandomRange)(this.direction1.y, this.direction2.y),
          Ue = (0, qe.RandomRange)(this.direction1.z, this.direction2.z);
        ye ? ie.wie(be, Ke, Ue) : Me.p.TransformNormalFromFloatsToRef(be, Ke, Ue, ee, ie)
      }
      startPositionFunction(ee, ie, He, ye) {
        ye ? ie.wie(0, 0, 0) : Me.p.TransformCoordinatesFromFloatsToRef(0, 0, 0, ee, ie)
      }
      clone() {
        const ee = new fe;
        return ke.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {
        ee.setVector3("direction1", this.direction1), ee.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(ee) {
        ee.addUniform("direction1", 3), ee.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define POINTEMITTER"
      }
      getClassName() {
        return "PointParticleEmitter"
      }
      serialize() {
        const ee = {};
        return ee.type = this.getClassName(), ee.direction1 = this.direction1.Qbe(), ee.direction2 = this.direction2.Qbe(), ee
      }
      parse(ee) {
        Me.p.FromArrayToRef(ee.direction1, 0, this.direction1), Me.p.FromArrayToRef(ee.direction2, 0, this.direction2)
      }
    }
    class Te {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = ee, this.radiusRange = ie, this.directionRandomizer = He
      }
      startDirectionFunction(ee, ie, He, ye) {
        const be = He.position.subtract(ee.getTranslation()).normalize(),
          Ke = (0, qe.RandomRange)(0, this.directionRandomizer),
          Ue = (0, qe.RandomRange)(0, this.directionRandomizer),
          Fe = (0, qe.RandomRange)(0, this.directionRandomizer);
        be.x += Ke, be.y += Ue, be.z += Fe, be.normalize(), ye ? ie.jD(be) : Me.p.TransformNormalFromFloatsToRef(be.x, be.y, be.z, ee, ie)
      }
      startPositionFunction(ee, ie, He, ye) {
        const be = this.radius - (0, qe.RandomRange)(0, this.radius * this.radiusRange),
          Ke = (0, qe.RandomRange)(0, 1),
          Ue = (0, qe.RandomRange)(0, 2 * Math.PI),
          Fe = Math.acos(2 * Ke - 1),
          Je = be * Math.cos(Ue) * Math.sin(Fe),
          oe = be * Math.cos(Fe),
          Re = be * Math.sin(Ue) * Math.sin(Fe);
        ye ? ie.wie(Je, Math.abs(oe), Re) : Me.p.TransformCoordinatesFromFloatsToRef(Je, Math.abs(oe), Re, ee, ie)
      }
      clone() {
        const ee = new Te(this.radius, this.directionRandomizer);
        return ke.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {
        ee.setFloat("radius", this.radius), ee.setFloat("radiusRange", this.radiusRange), ee.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(ee) {
        ee.addUniform("radius", 1), ee.addUniform("radiusRange", 1), ee.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define HEMISPHERICEMITTER"
      }
      getClassName() {
        return "HemisphericParticleEmitter"
      }
      serialize() {
        const ee = {};
        return ee.type = this.getClassName(), ee.radius = this.radius, ee.radiusRange = this.radiusRange, ee.directionRandomizer = this.directionRandomizer, ee
      }
      parse(ee) {
        this.radius = ee.radius, this.radiusRange = ee.radiusRange, this.directionRandomizer = ee.directionRandomizer
      }
    }
    class pe {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.radius = ee, this.radiusRange = ie, this.directionRandomizer = He
      }
      startDirectionFunction(ee, ie, He, ye) {
        const be = He.position.subtract(ee.getTranslation()).normalize(),
          Ke = (0, qe.RandomRange)(0, this.directionRandomizer),
          Ue = (0, qe.RandomRange)(0, this.directionRandomizer),
          Fe = (0, qe.RandomRange)(0, this.directionRandomizer);
        be.x += Ke, be.y += Ue, be.z += Fe, be.normalize(), ye ? ie.jD(be) : Me.p.TransformNormalFromFloatsToRef(be.x, be.y, be.z, ee, ie)
      }
      startPositionFunction(ee, ie, He, ye) {
        const be = this.radius - (0, qe.RandomRange)(0, this.radius * this.radiusRange),
          Ke = (0, qe.RandomRange)(0, 1),
          Ue = (0, qe.RandomRange)(0, 2 * Math.PI),
          Fe = Math.acos(2 * Ke - 1),
          Je = be * Math.cos(Ue) * Math.sin(Fe),
          oe = be * Math.cos(Fe),
          Re = be * Math.sin(Ue) * Math.sin(Fe);
        ye ? ie.wie(Je, oe, Re) : Me.p.TransformCoordinatesFromFloatsToRef(Je, oe, Re, ee, ie)
      }
      clone() {
        const ee = new pe(this.radius, this.directionRandomizer);
        return ke.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {
        ee.setFloat("radius", this.radius), ee.setFloat("radiusRange", this.radiusRange), ee.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(ee) {
        ee.addUniform("radius", 1), ee.addUniform("radiusRange", 1), ee.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER"
      }
      getClassName() {
        return "SphereParticleEmitter"
      }
      serialize() {
        const ee = {};
        return ee.type = this.getClassName(), ee.radius = this.radius, ee.radiusRange = this.radiusRange, ee.directionRandomizer = this.directionRandomizer, ee
      }
      parse(ee) {
        this.radius = ee.radius, this.radiusRange = ee.radiusRange, this.directionRandomizer = ee.directionRandomizer
      }
    }
    class Xe extends pe {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Me.p(0, 1, 0),
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Me.p(0, 1, 0);
        super(ee), this.direction1 = ie, this.direction2 = He
      }
      startDirectionFunction(ee, ie, He, ye) {
        const be = (0, qe.RandomRange)(this.direction1.x, this.direction2.x),
          Ke = (0, qe.RandomRange)(this.direction1.y, this.direction2.y),
          Ue = (0, qe.RandomRange)(this.direction1.z, this.direction2.z);
        ye ? ie.wie(be, Ke, Ue) : Me.p.TransformNormalFromFloatsToRef(be, Ke, Ue, ee, ie)
      }
      clone() {
        const ee = new Xe(this.radius, this.direction1, this.direction2);
        return ke.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {
        ee.setFloat("radius", this.radius), ee.setFloat("radiusRange", this.radiusRange), ee.setVector3("direction1", this.direction1), ee.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(ee) {
        ee.addUniform("radius", 1), ee.addUniform("radiusRange", 1), ee.addUniform("direction1", 3), ee.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define SPHEREEMITTER\n#define DIRECTEDSPHEREEMITTER"
      }
      getClassName() {
        return "SphereDirectedParticleEmitter"
      }
      serialize() {
        const ee = super.serialize();
        return ee.direction1 = this.direction1.Qbe(), ee.direction2 = this.direction2.Qbe(), ee
      }
      parse(ee) {
        super.parse(ee), Me.p.FromArrayToRef(ee.direction1, 0, this.direction1), Me.p.FromArrayToRef(ee.direction2, 0, this.direction2)
      }
    }
    var ze = He(39461);
    class Be {
      get radius() {
        return this._radius
      }
      set radius(ee) {
        this._radius = ee, this._buildHeight()
      }
      get angle() {
        return this._angle
      }
      set angle(ee) {
        this._angle = ee, this._buildHeight()
      }
      _buildHeight() {
        0 !== this._angle ? this._height = this._radius / Math.tan(this._angle / 2) : this._height = 1
      }
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.directionRandomizer = He, this.radiusRange = 1, this.heightRange = 1, this.emitFromSpawnPointOnly = !1, this.angle = ie, this.radius = ee
      }
      startDirectionFunction(ee, ie, He, ye) {
        const be = He.position.subtract(ee.getTranslation()).normalize(),
          Ke = (0, qe.RandomRange)(0, this.directionRandomizer),
          Ue = (0, qe.RandomRange)(0, this.directionRandomizer),
          Fe = (0, qe.RandomRange)(0, this.directionRandomizer);
        be.x += Ke, be.y += Ue, be.z += Fe, be.normalize(), ye ? ie.jD(be) : Me.p.TransformNormalFromFloatsToRef(be.x, be.y, be.z, ee, ie)
      }
      startPositionFunction(ee, ie, He, ye) {
        const be = (0, qe.RandomRange)(0, 2 * Math.PI);
        let Ke;
        this.emitFromSpawnPointOnly ? Ke = 1e-4 : (Ke = (0, qe.RandomRange)(0, this.heightRange), Ke = 1 - Ke * Ke);
        let Ue = this._radius - (0, qe.RandomRange)(0, this._radius * this.radiusRange);
        Ue *= Ke;
        const Fe = Ue * Math.sin(be),
          Je = Ue * Math.cos(be),
          oe = Ke * this._height;
        if (ye) return ie.x = Fe, ie.y = oe, void(ie.z = Je);
        Me.p.TransformCoordinatesFromFloatsToRef(Fe, oe, Je, ee, ie)
      }
      clone() {
        const ee = new Be(this._radius, this._angle, this.directionRandomizer);
        return ke.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {
        ee.setFloat2("radius", this._radius, this.radiusRange), ee.setFloat("coneAngle", this._angle), ee.setFloat2("height", this._height, this.heightRange), ee.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(ee) {
        ee.addUniform("radius", 2), ee.addUniform("coneAngle", 1), ee.addUniform("height", 2), ee.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        let ee = "#define CONEEMITTER";
        return this.emitFromSpawnPointOnly && (ee += "\n#define CONEEMITTERSPAWNPOINT"), ee
      }
      getClassName() {
        return "ConeParticleEmitter"
      }
      serialize() {
        const ee = {};
        return ee.type = this.getClassName(), ee.radius = this._radius, ee.angle = this._angle, ee.directionRandomizer = this.directionRandomizer, ee.radiusRange = this.radiusRange, ee.heightRange = this.heightRange, ee.emitFromSpawnPointOnly = this.emitFromSpawnPointOnly, ee
      }
      parse(ee) {
        this.radius = ee.radius, this.angle = ee.angle, this.directionRandomizer = ee.directionRandomizer, this.radiusRange = void 0 !== ee.radiusRange ? ee.radiusRange : 1, this.heightRange = void 0 !== ee.heightRange ? ee.heightRange : 1, this.emitFromSpawnPointOnly = void 0 !== ee.emitFromSpawnPointOnly && ee.emitFromSpawnPointOnly
      }
    }
    class Ee extends Be {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Me.p(0, 1, 0),
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Me.p(0, 1, 0);
        super(ee, ie), this.direction1 = He, this.direction2 = ye
      }
      startDirectionFunction(ee, ie, He, ye) {
        const be = (0, qe.RandomRange)(this.direction1.x, this.direction2.x),
          Ke = (0, qe.RandomRange)(this.direction1.y, this.direction2.y),
          Ue = (0, qe.RandomRange)(this.direction1.z, this.direction2.z);
        ye ? ie.wie(be, Ke, Ue) : Me.p.TransformNormalFromFloatsToRef(be, Ke, Ue, ee, ie)
      }
      clone() {
        const ee = new Ee(this.radius, this.angle, this.direction1, this.direction2);
        return ke.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {
        super.applyToShader(ee), ee.setVector3("direction1", this.direction1), ee.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(ee) {
        super.buildUniformLayout(ee), ee.addUniform("direction1", 3), ee.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CONEEMITTER\n#define DIRECTEDCONEEMITTER"
      }
      getClassName() {
        return "ConeDirectedParticleEmitter"
      }
      serialize() {
        const ee = super.serialize();
        return ee.direction1 = this.direction1.Qbe(), ee.direction2 = this.direction2.Qbe(), ee
      }
      parse(ee) {
        super.parse(ee), Me.p.FromArrayToRef(ee.direction1, 0, this.direction1), Me.p.FromArrayToRef(ee.direction2, 0, this.direction2)
      }
    }
    class ge {
      get mesh() {
        return this._mesh
      }
      set mesh(ee) {
        this._mesh !== ee && (this._mesh = ee, ee ? (this._indices = ee.eMe(), this._positions = ee.getVerticesData(Ke.h.PositionKind), this._normals = ee.getVerticesData(Ke.h.NormalKind)) : (this._indices = null, this._positions = null, this._normals = null))
      }
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this._indices = null, this._positions = null, this._normals = null, this._storedNormal = Me.p.Zero(), this._mesh = null, this.direction1 = new Me.p(0, 1, 0), this.direction2 = new Me.p(0, 1, 0), this.useMeshNormalsForDirection = !0, this.mesh = ee
      }
      startDirectionFunction(ee, ie, He, ye) {
        if (this.useMeshNormalsForDirection && this._normals) return void Me.p.TransformNormalToRef(this._storedNormal, ee, ie);
        const be = (0, qe.RandomRange)(this.direction1.x, this.direction2.x),
          Ke = (0, qe.RandomRange)(this.direction1.y, this.direction2.y),
          Ue = (0, qe.RandomRange)(this.direction1.z, this.direction2.z);
        ye ? ie.wie(be, Ke, Ue) : Me.p.TransformNormalFromFloatsToRef(be, Ke, Ue, ee, ie)
      }
      startPositionFunction(ee, ie, He, ye) {
        if (!this._indices || !this._positions) return;
        const be = 3 * (Math.random() * (this._indices.length / 3) | 0),
          Ke = Math.random(),
          Ue = Math.random() * (1 - Ke),
          Fe = 1 - Ke - Ue,
          Je = this._indices[be],
          oe = this._indices[be + 1],
          Re = this._indices[be + 2],
          ke = Me.j.rf[0],
          qe = Me.j.rf[1],
          fe = Me.j.rf[2],
          Te = Me.j.rf[3];
        Me.p.FromArrayToRef(this._positions, 3 * Je, ke), Me.p.FromArrayToRef(this._positions, 3 * oe, qe), Me.p.FromArrayToRef(this._positions, 3 * Re, fe), Te.x = Ke * ke.x + Ue * qe.x + Fe * fe.x, Te.y = Ke * ke.y + Ue * qe.y + Fe * fe.y, Te.z = Ke * ke.z + Ue * qe.z + Fe * fe.z, ye ? ie.wie(Te.x, Te.y, Te.z) : Me.p.TransformCoordinatesFromFloatsToRef(Te.x, Te.y, Te.z, ee, ie), this.useMeshNormalsForDirection && this._normals && (Me.p.FromArrayToRef(this._normals, 3 * Je, ke), Me.p.FromArrayToRef(this._normals, 3 * oe, qe), Me.p.FromArrayToRef(this._normals, 3 * Re, fe), this._storedNormal.x = Ke * ke.x + Ue * qe.x + Fe * fe.x, this._storedNormal.y = Ke * ke.y + Ue * qe.y + Fe * fe.y, this._storedNormal.z = Ke * ke.z + Ue * qe.z + Fe * fe.z)
      }
      clone() {
        const ee = new ge(this.mesh);
        return ke.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {
        ee.setVector3("direction1", this.direction1), ee.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(ee) {
        ee.addUniform("direction1", 3), ee.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return ""
      }
      getClassName() {
        return "MeshParticleEmitter"
      }
      serialize() {
        const ee = {};
        return ee.type = this.getClassName(), ee.direction1 = this.direction1.Qbe(), ee.direction2 = this.direction2.Qbe(), ee.meshId = this.mesh?.id, ee.useMeshNormalsForDirection = this.useMeshNormalsForDirection, ee
      }
      parse(ee, ie) {
        Me.p.FromArrayToRef(ee.direction1, 0, this.direction1), Me.p.FromArrayToRef(ee.direction2, 0, this.direction2), ee.meshId && ie && (this.mesh = ie.getLastMeshById(ee.meshId)), this.useMeshNormalsForDirection = ee.useMeshNormalsForDirection
      }
    }
    class Oe {
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(ee) {
        this._targetStopDuration !== ee && (this._targetStopDuration = ee)
      }
      get isNodeGenerated() {
        return !1
      }
      get noiseTexture() {
        return this._noiseTexture
      }
      set noiseTexture(ee) {
        this._noiseTexture !== ee && (this._noiseTexture = ee, this._reset())
      }
      get attractors() {
        return this._attractors.slice(0)
      }
      addAttractor(ee) {
        this._attractors.push(ee)
      }
      removeAttractor(ee) {
        const ie = this._attractors.indexOf(ee); - 1 !== ie && this._attractors.splice(ie, 1)
      }
      get _isAnimationSheetEnabled() {
        return this._animationSheetEnabled
      }
      set _isAnimationSheetEnabled(ee) {
        this._animationSheetEnabled !== ee && (this._animationSheetEnabled = ee)
      }
      get isAnimationSheetEnabled() {
        return this._isAnimationSheetEnabled
      }
      set isAnimationSheetEnabled(ee) {
        this._isAnimationSheetEnabled != ee && (this._isAnimationSheetEnabled = ee, this._reset())
      }
      get useLogarithmicDepth() {
        return this._useLogarithmicDepth
      }
      set useLogarithmicDepth(ee) {
        this._useLogarithmicDepth = ee && this.Xx().Nf().getCaps().fragmentDepthSupported
      }
      Xx() {
        return this._scene
      }
      _hasTargetStopDurationDependantGradient() {
        return this._startSizeGradients && this._startSizeGradients.length > 0 || this._emitRateGradients && this._emitRateGradients.length > 0 || this._lifeTimeGradients && this._lifeTimeGradients.length > 0
      }
      _setEngineBasedOnBlendMode(ee) {
        switch (ee) {
          case Oe.BLENDMODE_MULTIPLYADD:
            return;
          case Oe.BLENDMODE_ADD:
            ee = 1;
            break;
          case Oe.BLENDMODE_ONEONE:
            ee = 6;
            break;
          case Oe.BLENDMODE_STANDARD:
            ee = 2;
            break;
          case Oe.BLENDMODE_MULTIPLY:
            ee = 4;
            break;
          case Oe.BLENDMODE_SUBTRACT:
            ee = 3
        }
        this._engine.setAlphaMode(ee)
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
      addEmitRateGradient(ee, ie, He) {
        return this._emitRateGradients || (this._emitRateGradients = []), this._addFactorGradient(this._emitRateGradients, ee, ie, He), this
      }
      removeEmitRateGradient(ee) {
        return this._removeFactorGradient(this._emitRateGradients, ee), this
      }
      get direction1() {
        return this.particleEmitterType.direction1 ? this.particleEmitterType.direction1 : Me.p.Zero()
      }
      set direction1(ee) {
        this.particleEmitterType.direction1 && (this.particleEmitterType.direction1 = ee)
      }
      get direction2() {
        return this.particleEmitterType.direction2 ? this.particleEmitterType.direction2 : Me.p.Zero()
      }
      set direction2(ee) {
        this.particleEmitterType.direction2 && (this.particleEmitterType.direction2 = ee)
      }
      get minEmitBox() {
        return this.particleEmitterType.minEmitBox ? this.particleEmitterType.minEmitBox : Me.p.Zero()
      }
      set minEmitBox(ee) {
        this.particleEmitterType.minEmitBox && (this.particleEmitterType.minEmitBox = ee)
      }
      get maxEmitBox() {
        return this.particleEmitterType.maxEmitBox ? this.particleEmitterType.maxEmitBox : Me.p.Zero()
      }
      set maxEmitBox(ee) {
        this.particleEmitterType.maxEmitBox && (this.particleEmitterType.maxEmitBox = ee)
      }
      get billboardMode() {
        return this._billboardMode
      }
      set billboardMode(ee) {
        this._billboardMode !== ee && (this._billboardMode = ee, this._reset())
      }
      get isBillboardBased() {
        return this._isBillboardBased
      }
      set isBillboardBased(ee) {
        this._isBillboardBased !== ee && (this._isBillboardBased = ee, this._reset())
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      set imageProcessingConfiguration(ee) {
        this._attachImageProcessingConfiguration(ee)
      }
      _attachImageProcessingConfiguration(ee) {
        ee !== this._imageProcessingConfiguration && (!ee && this._scene ? this._imageProcessingConfiguration = this._scene.imageProcessingConfiguration : this._imageProcessingConfiguration = ee)
      }
      _reset() {}
      _addFactorGradient(ee, ie, He, be) {
        const Me = new ye.i(ie, He, be);
        ee.push(Me), ee.sort(((ee, ie) => ee.gradient < ie.gradient ? -1 : ee.gradient > ie.gradient ? 1 : 0))
      }
      _removeFactorGradient(ee, ie) {
        if (!ee) return;
        let He = 0;
        for (const ye of ee) {
          if (ye.gradient === ie) {
            ee.splice(He, 1);
            break
          }
          He++
        }
      }
      _removeGradientAndTexture(ee, ie, He) {
        if (!ie) return this;
        let ye = 0;
        for (const be of ie) {
          if (be.gradient === ee) {
            ie.splice(ye, 1);
            break
          }
          ye++
        }
        return He && He.dispose(), this
      }
      constructor(ee) {
        this.animations = [], this.renderingGroupId = 0, this.emitter = Me.p.Zero(), this.emitRate = 10, this.manualEmitCount = -1, this.updateSpeed = .01, this._targetStopDuration = 0, this.disposeOnStop = !1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minSize = 1, this.maxSize = 1, this.minScaleX = 1, this.maxScaleX = 1, this.minScaleY = 1, this.maxScaleY = 1, this.minInitialRotation = 0, this.maxInitialRotation = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.layerMask = 268435455, this.customShader = null, this.preventAutoStart = !1, this.applyFog = !1, this._wasDispatched = !1, this._rootUrl = "", this.noiseStrength = new Me.p(10, 10, 10), this._attractors = [], this.onAnimationEnd = null, this.blendMode = Oe.BLENDMODE_ONEONE, this.forceDepthWrite = !1, this.preWarmCycles = 0, this.preWarmStepOffset = 1, this.spriteCellChangeSpeed = 1, this.startSpriteCellID = 0, this.endSpriteCellID = 0, this.spriteCellWidth = 0, this.spriteCellHeight = 0, this.spriteCellLoop = !0, this.spriteRandomStartCell = !1, this.translationPivot = new Me.n(0, 0), this._animationSheetEnabled = !1, this.beginAnimationOnStart = !1, this.beginAnimationFrom = 0, this.beginAnimationTo = 60, this.beginAnimationLoop = !1, this.worldOffset = new Me.p(0, 0, 0), this._useLogarithmicDepth = !1, this.gravity = Me.p.Zero(), this._colorGradients = null, this._sizeGradients = null, this._lifeTimeGradients = null, this._angularSpeedGradients = null, this._velocityGradients = null, this._limitVelocityGradients = null, this._dragGradients = null, this._emitRateGradients = null, this._startSizeGradients = null, this._rampGradients = null, this._colorRemapGradients = null, this._alphaRemapGradients = null, this.startDelay = 0, this.limitVelocityDamping = .4, this.color1 = new oe.g(1, 1, 1, 1), this.color2 = new oe.g(1, 1, 1, 1), this.colorDead = new oe.g(0, 0, 0, 1), this.textureMask = new oe.g(1, 1, 1, 1), this._isSubEmitter = !1, this._billboardMode = 7, this._isBillboardBased = !0, this._imageProcessingConfigurationDefines = new Je.d, this.id = ee, this.name = ee
      }
      createPointEmitter(ee, ie) {
        const He = function(ee, ie) {
          const He = new fe;
          return He.direction1 = ee, He.direction2 = ie, He
        }(ee, ie);
        return this.particleEmitterType = He, He
      }
      createHemisphericEmitter() {
        const ee = function() {
          return new Te(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = ee, ee
      }
      createSphereEmitter() {
        const ee = function() {
          return new pe(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
        return this.particleEmitterType = ee, ee
      }
      createDirectedSphereEmitter() {
        const ee = function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Me.p(0, 1, 0),
            He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Me.p(0, 1, 0);
          return new Xe(ee, ie, He)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Me.p(0, 1, 0), arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Me.p(0, 1, 0));
        return this.particleEmitterType = ee, ee
      }
      createCylinderEmitter() {
        const ee = function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          return new ze.d(ee, ie, He, ye)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0);
        return this.particleEmitterType = ee, ee
      }
      createDirectedCylinderEmitter() {
        const ee = function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Me.p(0, 1, 0),
            be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Me.p(0, 1, 0);
          return new ze.c(ee, ie, He, ye, be)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Me.p(0, 1, 0), arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Me.p(0, 1, 0));
        return this.particleEmitterType = ee, ee
      }
      createConeEmitter() {
        const ee = function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4;
          return new Be(ee, ie)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4);
        return this.particleEmitterType = ee, ee
      }
      createDirectedConeEmitter() {
        const ee = function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4,
            He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Me.p(0, 1, 0),
            ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Me.p(0, 1, 0);
          return new Ee(ee, ie, He, ye)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 4, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Me.p(0, 1, 0), arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Me.p(0, 1, 0));
        return this.particleEmitterType = ee, ee
      }
      createBoxEmitter(ee, ie, He, ye) {
        const be = new Re.d;
        return this.particleEmitterType = be, this.direction1 = ee, this.direction2 = ie, this.minEmitBox = He, this.maxEmitBox = ye, be
      }
      createMeshEmitter() {
        const ee = function() {
          return new ge(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null)
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null);
        return this.particleEmitterType = ee, ee
      }
    }
    Oe.BLENDMODE_ONEONE = 0, Oe.BLENDMODE_STANDARD = 1, Oe.BLENDMODE_ADD = 2, Oe.BLENDMODE_MULTIPLY = 3, Oe.BLENDMODE_MULTIPLYADD = 4, Oe.BLENDMODE_SUBTRACT = -1;
    class de {
      constructor() {
        this.attachedSubEmitters = null, this.currentColor1 = new oe.g(0, 0, 0, 0), this.currentColor2 = new oe.g(0, 0, 0, 0), this.currentSize1 = 0, this.currentSize2 = 0, this.currentAngularSpeed1 = 0, this.currentAngularSpeed2 = 0, this.currentVelocity1 = 0, this.currentVelocity2 = 0, this.scaledDirection = Me.p.Zero(), this.currentLimitVelocity1 = 0, this.currentLimitVelocity2 = 0, this.currentDrag1 = 0, this.currentDrag2 = 0
      }
      reset() {
        this.currentColorGradient = null, this.currentSizeGradient = null, this.currentAngularSpeedGradient = null, this.currentVelocityGradient = null, this.currentLimitVelocityGradient = null, this.currentDragGradient = null, this.randomCellOffset = void 0, this.randomNoiseCoordinates1 = null, this.randomNoiseCoordinates2 = null
      }
    }
    class We {
      constructor(ee) {
        this.particleSystem = ee, this.position = Me.p.Zero(), this.direction = Me.p.Zero(), this.color = new oe.g(0, 0, 0, 0), this.colorStep = new oe.g(0, 0, 0, 0), this.initialColor = new oe.g(0, 0, 0, 0), this.colorDead = new oe.g(0, 0, 0, 0), this.lifeTime = 1, this.age = 0, this.size = 0, this.scale = new Me.n(1, 1), this.angle = 0, this.angularSpeed = 0, this.cellIndex = 0, this.metadata = null, this._properties = new de, this.id = We._Count++, this.particleSystem.isAnimationSheetEnabled && this._updateCellInfoFromSystem()
      }
      _updateCellInfoFromSystem() {
        this.cellIndex = this.particleSystem.startSpriteCellID
      }
      updateCellIndex() {
        let ee = this.age,
          ie = this.particleSystem.spriteCellChangeSpeed;
        this.particleSystem.spriteRandomStartCell && (void 0 === this._properties.randomCellOffset && (this._properties.randomCellOffset = Math.random() * this.lifeTime), 0 === ie ? (ie = 1, ee = this._properties.randomCellOffset) : ee += this._properties.randomCellOffset);
        const He = this._properties.initialEndSpriteCellId - this._properties.initialStartSpriteCellId + 1;
        let ye;
        ye = this._properties.initialSpriteCellLoop ? (0, qe.Clamp)(ee * ie % this.lifeTime / this.lifeTime) : (0, qe.Clamp)(ee * ie / this.lifeTime), this.cellIndex = this._properties.initialStartSpriteCellId + ye * He | 0
      }
      _inheritParticleInfoToSubEmitter(ee) {
        if (ee.particleSystem.emitter.position) {
          const ie = ee.particleSystem.emitter;
          if (ie.position.jD(this.position), ee.inheritDirection) {
            const ee = Me.j.rf[0];
            this.direction.normalizeToRef(ee), ie.setDirection(ee, 0, Math.PI / 2)
          }
        } else {
          ee.particleSystem.emitter.jD(this.position)
        }
        this.direction.scaleToRef(ee.inheritedVelocityAmount / 2, Me.j.rf[0]), ee.particleSystem._inheritedVelocityOffset.jD(Me.j.rf[0])
      }
      _inheritParticleInfoToSubEmitters() {
        if (this._properties.attachedSubEmitters && this._properties.attachedSubEmitters.length > 0)
          for (const ee of this._properties.attachedSubEmitters) this._inheritParticleInfoToSubEmitter(ee)
      }
      _reset() {
        this._properties.onReset && this._properties.onReset(), this.age = 0, this.id = We._Count++, this._properties.reset(), this.metadata = null, this.cellIndex = this.particleSystem.startSpriteCellID
      }
      copyTo(ee) {
        ee.position.jD(this.position), this._properties.initialDirection ? ee._properties.initialDirection ? ee._properties.initialDirection.jD(this._properties.initialDirection) : ee._properties.initialDirection = this._properties.initialDirection.clone() : ee._properties.initialDirection = null, ee.direction.jD(this.direction), this._properties.localPosition && (ee._properties.localPosition ? ee._properties.localPosition.jD(this._properties.localPosition) : ee._properties.localPosition = this._properties.localPosition.clone()), ee.color.jD(this.color), ee.colorStep.jD(this.colorStep), ee.initialColor.jD(this.initialColor), ee.colorDead.jD(this.colorDead), ee.lifeTime = this.lifeTime, ee.age = this.age, ee._properties.randomCellOffset = this._properties.randomCellOffset, ee.size = this.size, ee.scale.jD(this.scale), ee.angle = this.angle, ee.angularSpeed = this.angularSpeed, ee.particleSystem = this.particleSystem, ee.cellIndex = this.cellIndex, ee.id = this.id, ee._properties.attachedSubEmitters = this._properties.attachedSubEmitters, this._properties.currentColorGradient && (ee._properties.currentColorGradient = this._properties.currentColorGradient, ee._properties.currentColor1.jD(this._properties.currentColor1), ee._properties.currentColor2.jD(this._properties.currentColor2)), this._properties.currentSizeGradient && (ee._properties.currentSizeGradient = this._properties.currentSizeGradient, ee._properties.currentSize1 = this._properties.currentSize1, ee._properties.currentSize2 = this._properties.currentSize2), this._properties.currentAngularSpeedGradient && (ee._properties.currentAngularSpeedGradient = this._properties.currentAngularSpeedGradient, ee._properties.currentAngularSpeed1 = this._properties.currentAngularSpeed1, ee._properties.currentAngularSpeed2 = this._properties.currentAngularSpeed2), this._properties.currentVelocityGradient && (ee._properties.currentVelocityGradient = this._properties.currentVelocityGradient, ee._properties.currentVelocity1 = this._properties.currentVelocity1, ee._properties.currentVelocity2 = this._properties.currentVelocity2), this._properties.currentLimitVelocityGradient && (ee._properties.currentLimitVelocityGradient = this._properties.currentLimitVelocityGradient, ee._properties.currentLimitVelocity1 = this._properties.currentLimitVelocity1, ee._properties.currentLimitVelocity2 = this._properties.currentLimitVelocity2), this._properties.currentDragGradient && (ee._properties.currentDragGradient = this._properties.currentDragGradient, ee._properties.currentDrag1 = this._properties.currentDrag1, ee._properties.currentDrag2 = this._properties.currentDrag2), this.particleSystem.isAnimationSheetEnabled && (ee._properties.initialStartSpriteCellId = this._properties.initialStartSpriteCellId, ee._properties.initialEndSpriteCellId = this._properties.initialEndSpriteCellId, ee._properties.initialSpriteCellLoop = this._properties.initialSpriteCellLoop), this.particleSystem.useRampGradients && (ee.remapData && this.remapData ? ee.remapData.jD(this.remapData) : ee.remapData = new Me.s(0, 0, 0, 0)), this._properties.randomNoiseCoordinates1 && this._properties.randomNoiseCoordinates2 && (ee._properties.randomNoiseCoordinates1 && ee._properties.randomNoiseCoordinates2 ? (ee._properties.randomNoiseCoordinates1.jD(this._properties.randomNoiseCoordinates1), ee._properties.randomNoiseCoordinates2.jD(this._properties.randomNoiseCoordinates2)) : (ee._properties.randomNoiseCoordinates1 = this._properties.randomNoiseCoordinates1.clone(), ee._properties.randomNoiseCoordinates2 = this._properties.randomNoiseCoordinates2.clone())), ee.metadata = this.metadata
      }
    }
    We._Count = 0;
    var te = He(42172);
    class Ze {
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
      constructor(ee, ie, He, ye) {
        if (this._events = new Array, this._currentFrame = 0, this._originalValue = new Array, this._originalBlendValue = null, this._offsetsCache = {}, this._highLimitsCache = {}, this._stopped = !1, this._blendingFactor = 0, this._currentValue = null, this._currentActiveTarget = null, this._directTarget = null, this._targetPath = "", this._weight = 1, this._absoluteFrameOffset = 0, this._previousElapsedTime = 0, this._yoyoDirection = 1, this._previousAbsoluteFrame = 0, this._playbackFrom = 0, this._playbackTo = 0, this._playbackFrames = 0, this._playbackProgress = 0, this._playbackSyncRoot = null, this._playbackJumped = !1, this._playbackSyncMasterPlayed = 0, this._playbackSyncMasterFrame = 0, this._targetIsArray = !1, this._coreRuntimeAnimation = null, this._animation = ie, this.VR = ee, this._scene = He, this._host = ye, this._activeTargets = [], ie._runtimeAnimations.push(this), this._animationState = {
            key: 0,
            repeatCount: 0,
            tH: this._getCorrectLoopMode()
          }, this._animation.dataType === te.b.ANIMATIONTYPE_MATRIX && (this._animationState.workValue = Me.b.Zero()), this._keys = this._animation.getKeys(), this._minFrame = this._keys[0].frame, this._maxFrame = this._keys[this._keys.length - 1].frame, 0 !== this._minFrame) {
          const ee = {
            frame: 0,
            value: this._keys[0].value
          };
          this._keys.splice(0, 0, ee)
        }
        if (this.VR instanceof Array) {
          let ee = 0;
          for (const ie of this.VR) this._preparePath(ie, ee), this._getOriginalValues(ee), ee++;
          this._targetIsArray = !0
        } else this._preparePath(this.VR), this._getOriginalValues(), this._targetIsArray = !1, this._directTarget = this._activeTargets[0];
        const be = ie.getEvents();
        if (be && be.length > 0)
          for (const Me of be) this._events.push(Me._clone());
        this._enableBlending = ee && ee.animationPropertiesOverride ? ee.animationPropertiesOverride.enableBlending : this._animation.enableBlending
      }
      _preparePath(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const He = this._animation.targetPropertyPath;
        if (He.length > 1) {
          let ye = ee;
          for (let ee = 0; ee < He.length - 1; ee++) {
            const ie = He[ee];
            if (ye = ye[ie], void 0 === ye) throw new Error(`Invalid property (${ie}) in property path (${He.join(".")})`)
          }
          this._targetPath = He[He.length - 1], this._activeTargets[ie] = ye
        } else this._targetPath = He[0], this._activeTargets[ie] = ee;
        if (void 0 === this._activeTargets[ie][this._targetPath]) throw new Error(`Invalid property (${this._targetPath}) in property path (${He.join(".")})`)
      }
      get animation() {
        return this._animation
      }
      reset() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0])
          if (this.VR instanceof Array) {
            let ee = 0;
            for (const ie of this.VR) void 0 !== this._originalValue[ee] && this._setValue(ie, this._activeTargets[ee], this._originalValue[ee], -1, ee), ee++
          } else void 0 !== this._originalValue[0] && this._setValue(this.VR, this._directTarget, this._originalValue[0], -1, 0);
        this._offsetsCache = {}, this._highLimitsCache = {}, this._currentFrame = 0, this._blendingFactor = 0;
        for (let ee = 0; ee < this._events.length; ee++) this._events[ee].isDone = !1
      }
      isStopped() {
        return this._stopped
      }
      dispose() {
        const ee = this._animation.runtimeAnimations.indexOf(this);
        ee > -1 && this._animation.runtimeAnimations.splice(ee, 1)
      }
      setValue(ee, ie) {
        if (this._targetIsArray)
          for (let He = 0; He < this.VR.length; He++) {
            const ye = this.VR[He];
            this._setValue(ye, this._activeTargets[He], ee, ie, He)
          } else this._setValue(this.VR, this._directTarget, ee, ie, 0)
      }
      _getOriginalValues() {
        let ee, ie = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const He = this._activeTargets[ie];
        if (te.b.InheritOriginalValueFromActiveAnimations) {
          const ee = this._scene._activeAnimatables;
          for (let ye = 0; ye < ee.length; ye++) {
            const be = ee[ye]._runtimeAnimations;
            for (let ee = 0; ee < be.length; ee++) {
              const ye = be[ee];
              if (ye !== this && ye._targetPath === this._targetPath)
                for (let ee = 0; ee < ye._activeTargets.length; ee++)
                  if (ye._activeTargets[ee] === He && void 0 !== ye._originalValue[ee]) return void(ye._originalValue[ee] && ye._originalValue[ee].clone ? this._originalValue[ie] = ye._originalValue[ee].clone() : this._originalValue[ie] = ye._originalValue[ee])
            }
          }
        }
        ee = He.getLocalMatrix && "_matrix" === this._targetPath ? He.getLocalMatrix() : He[this._targetPath], ee && ee.clone ? this._originalValue[ie] = ee.clone() : this._originalValue[ie] = ee
      }
      _registerTargetForLateAnimationBinding(ee, ie) {
        const He = ee.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(He), He._lateAnimationHolders || (He._lateAnimationHolders = {}), He._lateAnimationHolders[ee.targetPath] || (He._lateAnimationHolders[ee.targetPath] = {
          totalWeight: 0,
          totalAdditiveWeight: 0,
          animations: [],
          additiveAnimations: [],
          originalValue: ie
        }), ee.isAdditive ? (He._lateAnimationHolders[ee.targetPath].additiveAnimations.push(ee), He._lateAnimationHolders[ee.targetPath].totalAdditiveWeight += ee.weight) : (He._lateAnimationHolders[ee.targetPath].animations.push(ee), He._lateAnimationHolders[ee.targetPath].totalWeight += ee.weight)
      }
      _setValue(ee, ie, He, ye, be) {
        const Ke = this._scene._animationWrites,
          Ue = this._scene._animationWriteCount++;
        let Fe = Ke[Ue];
        if (Fe || (Fe = Ke[Ue] = {
            runtimeAnimation: this,
            target: ee,
            weight: ye,
            additive: !1,
            blendingFactor: 1,
            dp: !1
          }), Fe.runtimeAnimation = this, Fe.target = ee, Fe.weight = ye, Fe.additive = this.isAdditive, Fe.dp = !1, this._currentActiveTarget = ie, this._weight = ye, this._enableBlending && this._blendingFactor <= 1) {
          if (!this._originalBlendValue) {
            const ee = ie[this._targetPath];
            ee.clone ? this._originalBlendValue = ee.clone() : this._originalBlendValue = ee
          }
          this._originalBlendValue.m ? te.b.AllowMatrixDecomposeForInterpolation ? this._currentValue ? Me.b.DecomposeLerpToRef(this._originalBlendValue, He, this._blendingFactor, this._currentValue) : this._currentValue = Me.b.DecomposeLerp(this._originalBlendValue, He, this._blendingFactor) : this._currentValue ? Me.b.LerpToRef(this._originalBlendValue, He, this._blendingFactor, this._currentValue) : this._currentValue = Me.b.Lerp(this._originalBlendValue, He, this._blendingFactor) : this._currentValue = te.b._UniversalLerp(this._originalBlendValue, He, this._blendingFactor);
          const ye = ee && ee.animationPropertiesOverride ? ee.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
          Fe.blendingFactor = this._blendingFactor, this._blendingFactor += ye
        } else Fe.blendingFactor = 1, this._currentValue ? this._currentValue.jD ? this._currentValue.jD(He) : this._currentValue = He : this._currentValue = He?.clone ? He.clone() : He; - 1 !== ye ? this._registerTargetForLateAnimationBinding(this, this._originalValue[be]) : this._animationState.tH === te.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT ? this._currentValue.addToRef ? this._currentValue.addToRef(this._originalValue[be], ie[this._targetPath]) : ie[this._targetPath] = this._originalValue[be] + this._currentValue : ie[this._targetPath] = this._currentValue, ee.tye && ee.tye(this._animation.targetProperty)
      }
      _getCorrectLoopMode() {
        if (this.VR && this.VR.animationPropertiesOverride) {
          return "MorphTarget" === this.VR.getClassName?.() && null == this.VR._animationPropertiesOverride ? this._animation.tH : this.VR.animationPropertiesOverride.tH
        }
        return this._animation.tH
      }
      goToFrame(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        const He = this._animation.getKeys();
        ee < He[0].frame ? ee = He[0].frame : ee > He[He.length - 1].frame && (ee = He[He.length - 1].frame);
        const ye = this._events;
        if (ye.length)
          for (let Me = 0; Me < ye.length; Me++) ye[Me].onlyOnce || (ye[Me].isDone = ye[Me].frame < ee);
        this._currentFrame = ee;
        const be = this._animation._interpolate(ee, this._animationState);
        this.setValue(be, ie)
      }
      _prepareForSpeedRatioChange(ee) {
        const ie = this._previousElapsedTime * (this._animation.framePerSecond * ee) / 1e3;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - ie
      }
      animate(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
        const Ke = this._animation,
          Ue = Ke.targetPropertyPath;
        if (!Ue || Ue.length < 1) return this._stopped = !0, !1;
        let Fe, Je = !0;
        const oe = this._events;
        let Re;
        if (this._coreRuntimeAnimation) Re = He - ie, Fe = this._coreRuntimeAnimation.currentFrame, this._currentFrame = Fe, this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount, this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue, this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue, this._playbackFrom = this._coreRuntimeAnimation._playbackFrom, this._playbackTo = this._coreRuntimeAnimation._playbackTo, this._playbackFrames = this._coreRuntimeAnimation._playbackFrames, this._playbackProgress = this._coreRuntimeAnimation._playbackProgress, this._playbackJumped = this._coreRuntimeAnimation._playbackJumped, this._playbackSyncRoot = this._coreRuntimeAnimation._playbackSyncRoot;
        else {
          let Me;
          (ie < this._minFrame || ie > this._maxFrame) && (ie = this._minFrame), (He < this._minFrame || He > this._maxFrame) && (He = this._maxFrame), Re = He - ie;
          let Ue = ee * (Ke.framePerSecond * be) / 1e3 + this._absoluteFrameOffset,
            ke = 0,
            qe = !1;
          const fe = ye && this._animationState.tH === te.b.ANIMATIONLOOPMODE_YOYO;
          if (fe) {
            const ee = (Ue - ie) / Re,
              He = Math.sin(ee * Math.PI);
            Ue = Math.abs(He) * Re + ie;
            const ye = He >= 0 ? 1 : -1;
            this._yoyoDirection !== ye && (qe = !0), this._yoyoDirection = ye
          }
          if (this._previousElapsedTime = ee, this._previousAbsoluteFrame = Ue, !ye && He >= ie && (Ue >= Re && be > 0 || Ue <= 0 && be < 0)) Je = !1, ke = Ke.evaluate(He);
          else if (!ye && ie >= He && (Ue <= Re && be < 0 || Ue >= 0 && be > 0)) Je = !1, ke = Ke.evaluate(ie);
          else if (this._animationState.tH !== te.b.ANIMATIONLOOPMODE_CYCLE) {
            const ee = He.toString() + ie.toString();
            if (!this._offsetsCache[ee]) {
              this._animationState.repeatCount = 0, this._animationState.tH = te.b.ANIMATIONLOOPMODE_CYCLE;
              const ye = Ke._interpolate(ie, this._animationState),
                be = Ke._interpolate(He, this._animationState);
              switch (this._animationState.tH = this._getCorrectLoopMode(), Ke.dataType) {
                case te.b.ANIMATIONTYPE_FLOAT:
                  this._offsetsCache[ee] = be - ye;
                  break;
                case te.b.ANIMATIONTYPE_QUATERNION:
                case te.b.ANIMATIONTYPE_VECTOR3:
                case te.b.ANIMATIONTYPE_VECTOR2:
                case te.b.ANIMATIONTYPE_SIZE:
                case te.b.ANIMATIONTYPE_COLOR3:
                case te.b.ANIMATIONTYPE_COLOR4:
                  this._offsetsCache[ee] = be.subtract(ye)
              }
              this._highLimitsCache[ee] = be
            }
            ke = this._highLimitsCache[ee], Me = this._offsetsCache[ee]
          }
          if (void 0 === Me) switch (Ke.dataType) {
            case te.b.ANIMATIONTYPE_FLOAT:
              Me = 0;
              break;
            case te.b.ANIMATIONTYPE_QUATERNION:
              Me = te.m;
              break;
            case te.b.ANIMATIONTYPE_VECTOR3:
              Me = te.w;
              break;
            case te.b.ANIMATIONTYPE_VECTOR2:
              Me = te.s;
              break;
            case te.b.ANIMATIONTYPE_SIZE:
              Me = te.p;
              break;
            case te.b.ANIMATIONTYPE_COLOR3:
              Me = te.g;
              break;
            case te.b.ANIMATIONTYPE_COLOR4:
              Me = te.j
          }
          const Te = this._host ? this._host.syncRoot : null;
          let pe, Xe = this._playbackFrames,
            ze = !1;
          if (Te) {
            const ee = Te.toFrame - Te.fromFrame,
              He = Te.masterFrame,
              ye = (He - Te.fromFrame) / ee;
            Fe = ie + Re * ye;
            const be = Te.getAnimations()[0];
            if (be && 0 !== ee) {
              const ee = Re * ye,
                ie = be._playbackTo - be._playbackFrom;
              if (0 !== ie && be._playbackFrom <= Te.fromFrame && be._playbackTo >= Te.toFrame) {
                Xe = Re * Math.round((be._playbackFrames - (be._currentFrame - be._playbackFrom)) / ie) + ee
              } else ze = (He - this._playbackSyncMasterFrame) * (be._playbackFrames - this._playbackSyncMasterPlayed) < 0, Xe = ee;
              ze = ze || be._playbackJumped, this._playbackSyncMasterPlayed = be._playbackFrames, this._playbackSyncMasterFrame = He
            }
          } else Fe = Ue > 0 && ie > He || Ue < 0 && ie < He ? Je && 0 !== Re ? He + Ue % Re : ie : Je && 0 !== Re ? ie + Ue % Re : He;
          if (!fe && (be > 0 && this.currentFrame > Fe || be < 0 && this.currentFrame < Fe) || fe && qe) {
            this._onLoop();
            for (let ee = 0; ee < oe.length; ee++) oe[ee].onlyOnce || (oe[ee].isDone = !1);
            this._animationState.key = be > 0 ? 0 : Ke.getKeys().length - 1
          }
          if (this._currentFrame = Fe, this._animationState.repeatCount = 0 === Re ? 0 : Ue / Re | 0, this._animationState.highLimitValue = ke, this._animationState.offsetValue = Me, this._playbackFrom = ie, this._playbackTo = He, this._playbackJumped = ze, this._playbackSyncRoot = Te, Te) pe = Xe;
          else if (Je) pe = fe ? Fe === ie && Ue === He ? Re : Fe - ie : Ue;
          else {
            const ee = 0 !== Re ? Math.floor(this._playbackFrames / Re) : 0;
            pe = (Fe === He ? ee + 1 : ee) * Re
          }
          this._playbackFrames = pe, this._playbackProgress = this._animationState.tH === te.b.ANIMATIONLOOPMODE_CONSTANT && this._animationState.repeatCount > 0 ? Re : pe
        }
        const ke = Ke._interpolate(Fe, this._animationState);
        if (this.setValue(ke, Me), oe.length)
          for (let qe = 0; qe < oe.length; qe++)
            if (Re >= 0 && Fe >= oe[qe].frame && oe[qe].frame >= ie || Re < 0 && Fe <= oe[qe].frame && oe[qe].frame <= ie) {
              const ee = oe[qe];
              ee.isDone || (ee.onlyOnce && (oe.splice(qe, 1), qe--), ee.isDone = !0, ee.action(Fe))
            } return Je || (this._stopped = !0), Je
      }
    }
    var we = He(41005);
    class De {
      get syncRoot() {
        return this._syncRoot
      }
      get masterFrame() {
        return 0 === this._runtimeAnimations.length ? 0 : this._runtimeAnimations[0].currentFrame
      }
      get weight() {
        return this._weight
      }
      set weight(ee) {
        this._weight = -1 !== ee ? Math.min(Math.max(ee, 0), 1) : -1
      }
      get speedRatio() {
        return this._speedRatio
      }
      set speedRatio(ee) {
        for (let ie = 0; ie < this._runtimeAnimations.length; ie++) {
          this._runtimeAnimations[ie]._prepareForSpeedRatioChange(ee)
        }
        this._speedRatio = ee, null !== this._goToFrame && this.goToFrame(this._goToFrame)
      }
      get elapsedTime() {
        return null === this._localDelayOffset ? 0 : this._scene._animationTime - this._localDelayOffset
      }
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100,
          Me = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ke = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Ue = arguments.length > 6 ? arguments[6] : void 0,
          Fe = arguments.length > 7 ? arguments[7] : void 0,
          Je = arguments.length > 8 ? arguments[8] : void 0,
          oe = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
          Re = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0;
        this.target = ie, this.fromFrame = He, this.toFrame = ye, this.loopAnimation = Me, this.onAnimationEnd = Ue, this.onAnimationLoop = Je, this.isAdditive = oe, this.playOrder = Re, this._localDelayOffset = null, this._pausedDelay = null, this._manualJumpDelay = null, this._runtimeAnimations = new Array, this.AR = !1, this._speedRatio = 1, this._weight = -1, this._previousWeight = -1, this._syncRoot = null, this._frameToSyncFromJump = null, this._goToFrame = null, this.disposeOnEnd = !0, this.animationStarted = !1, this.onAnimationEndObservable = new be.d, this.onAnimationLoopObservable = new be.d, this._scene = ee, Fe && this.appendAnimations(ie, Fe), this._speedRatio = Ke, ee._activeAnimatables.push(this)
      }
      syncWith(ee) {
        if (this._syncRoot = ee, ee) {
          const ee = this._scene._activeAnimatables.indexOf(this);
          ee > -1 && (this._scene._activeAnimatables.splice(ee, 1), this._scene._activeAnimatables.push(this))
        }
        return this
      }
      getAnimations() {
        return this._runtimeAnimations
      }
      appendAnimations(ee, ie) {
        for (let He = 0; He < ie.length; He++) {
          const ye = ie[He],
            be = new Ze(ee, ye, this._scene, this);
          be._onLoop = () => {
            this.onAnimationLoopObservable.notifyObservers(this), this.onAnimationLoop && this.onAnimationLoop()
          }, this._runtimeAnimations.push(be)
        }
      }
      getAnimationByTargetProperty(ee) {
        const ie = this._runtimeAnimations;
        for (let He = 0; He < ie.length; He++)
          if (ie[He].animation.targetProperty === ee) return ie[He].animation;
        return null
      }
      getRuntimeAnimationByTargetProperty(ee) {
        const ie = this._runtimeAnimations;
        for (let He = 0; He < ie.length; He++)
          if (ie[He].animation.targetProperty === ee) return ie[He];
        return null
      }
      reset() {
        const ee = this._runtimeAnimations;
        for (let ie = 0; ie < ee.length; ie++) ee[ie].reset(!0);
        this._localDelayOffset = null, this._pausedDelay = null
      }
      enableBlending(ee) {
        const ie = this._runtimeAnimations;
        for (let He = 0; He < ie.length; He++) ie[He].animation.enableBlending = !0, ie[He].animation.blendingSpeed = ee
      }
      disableBlending() {
        const ee = this._runtimeAnimations;
        for (let ie = 0; ie < ee.length; ie++) ee[ie].animation.enableBlending = !1
      }
      goToFrame(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const He = this._runtimeAnimations;
        if (He[0]) {
          const ie = He[0].animation.framePerSecond;
          this._frameToSyncFromJump = this._frameToSyncFromJump ?? He[0].currentFrame;
          const ye = 0 === this.speedRatio ? 0 : (ee - this._frameToSyncFromJump) / ie * 1e3 / this.speedRatio;
          this._manualJumpDelay = -ye
        }
        for (let ye = 0; ye < He.length; ye++) He[ye].goToFrame(ee, ie ? this._weight : -1);
        this._goToFrame = ee
      }
      get paused() {
        return this.AR
      }
      pause() {
        this.AR || (this.AR = !0)
      }
      restart() {
        this.AR = !1
      }
      _raiseOnAnimationEnd() {
        this.onAnimationEnd && this.onAnimationEnd(), this.onAnimationEndObservable.notifyObservers(this)
      }
      stop(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (ee || ie) {
          const be = this._scene._activeAnimatables.indexOf(this);
          if (be > -1) {
            const Me = this._runtimeAnimations;
            for (let He = Me.length - 1; He >= 0; He--) {
              const ye = Me[He];
              ee && ye.animation.name != ee || (ie && !ie(ye.target) || (ye.dispose(), Me.splice(He, 1)))
            }
            0 == Me.length && (He || this._scene._activeAnimatables.splice(be, 1), ye || this._raiseOnAnimationEnd())
          }
        } else {
          const ee = this._scene._activeAnimatables.indexOf(this);
          if (ee > -1) {
            He || this._scene._activeAnimatables.splice(ee, 1);
            const ie = this._runtimeAnimations;
            for (let ee = 0; ee < ie.length; ee++) ie[ee].dispose();
            this._runtimeAnimations.length = 0, ye || this._raiseOnAnimationEnd()
          }
        }
      }
      async waitAsync() {
        return await new Promise((ee => {
          this.onAnimationEndObservable.add((() => {
            ee(this)
          }), void 0, void 0, this, !0)
        }))
      }
      _animate(ee) {
        if (this.AR) return this.animationStarted = !1, null === this._pausedDelay && (this._pausedDelay = ee), !0;
        if (null === this._localDelayOffset ? (this._localDelayOffset = ee, this._pausedDelay = null) : null !== this._pausedDelay && (this._localDelayOffset += ee - this._pausedDelay, this._pausedDelay = null), null !== this._manualJumpDelay && (this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay, this._manualJumpDelay = null, this._frameToSyncFromJump = null), this._goToFrame = null, !De.ProcessPausedAnimatables && 0 === this._weight && 0 === this._previousWeight) return !0;
        this._previousWeight = this._weight;
        let ie = !1;
        const He = this._runtimeAnimations;
        let ye;
        for (ye = 0; ye < He.length; ye++) {
          const be = He[ye].animate(ee - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
          ie = ie || be
        }
        if (this.animationStarted = ie, !ie) {
          if (this.disposeOnEnd)
            for (ye = this._scene._activeAnimatables.indexOf(this), this._scene._activeAnimatables.splice(ye, 1), ye = 0; ye < He.length; ye++) He[ye].dispose();
          this._raiseOnAnimationEnd(), this.disposeOnEnd && (this.onAnimationEnd = null, this.onAnimationLoop = null, this.onAnimationLoopObservable.clear(), this.onAnimationEndObservable.clear())
        }
        return ie
      }
    }

    function Pe(ee) {
      if (0 === ee.totalWeight && 0 === ee.totalAdditiveWeight) return ee.originalValue;
      let ie = 1;
      const He = Me.j.rf[0],
        ye = Me.j.rf[1],
        be = Me.j.Quaternion[0];
      let Ke = 0;
      const Ue = ee.animations[0],
        Fe = ee.originalValue;
      let Je, oe = !1;
      if (ee.totalWeight < 1) Je = 1 - ee.totalWeight, Fe.decompose(ye, be, He);
      else {
        if (Ke = 1, ie = ee.totalWeight, Je = Ue.weight / ie, 1 == Je) {
          if (!ee.totalAdditiveWeight) return Ue.currentValue;
          oe = !0
        }
        Ue.currentValue.decompose(ye, be, He)
      }
      if (!oe) {
        ye.scaleInPlace(Je), He.scaleInPlace(Je), be.scaleInPlace(Je);
        for (let Ue = Ke; Ue < ee.animations.length; Ue++) {
          const Ke = ee.animations[Ue];
          if (0 === Ke.weight) continue;
          Je = Ke.weight / ie;
          const Fe = Me.j.rf[2],
            oe = Me.j.rf[3],
            Re = Me.j.Quaternion[1];
          Ke.currentValue.decompose(oe, Re, Fe), oe.scaleAndAddToRef(Je, ye), Re.scaleAndAddToRef(Me.f.Dot(be, Re) > 0 ? Je : -Je, be), Fe.scaleAndAddToRef(Je, He)
        }
        be.normalize()
      }
      for (let ke = 0; ke < ee.additiveAnimations.length; ke++) {
        const ie = ee.additiveAnimations[ke];
        if (0 === ie.weight) continue;
        const Ke = Me.j.rf[2],
          Ue = Me.j.rf[3],
          Fe = Me.j.Quaternion[1];
        ie.currentValue.decompose(Ue, Fe, Ke), Ue.multiplyToRef(ye, Ue), Me.p.LerpToRef(ye, Ue, ie.weight, ye), be.multiplyToRef(Fe, Fe), Me.f.SlerpToRef(be, Fe, ie.weight, be), Ke.scaleAndAddToRef(ie.weight, He)
      }
      const Re = Ue ? Ue._animationState.workValue : Me.j.Matrix[0].clone();
      return Me.b.ComposeToRef(ye, be, He, Re), Re
    }

    function Ae(ee, ie) {
      if (0 === ee.totalWeight && 0 === ee.totalAdditiveWeight) return ie;
      const He = ee.animations[0],
        ye = ee.originalValue;
      let be = ie;
      if (0 === ee.totalWeight && ee.totalAdditiveWeight > 0) be.jD(ye);
      else if (1 === ee.animations.length) {
        if (Me.f.SlerpToRef(ye, He.currentValue, Math.min(1, ee.totalWeight), be), 0 === ee.totalAdditiveWeight) return be
      } else if (ee.animations.length > 1) {
        let He, Ke, Ue = 1;
        if (ee.totalWeight < 1) {
          const ie = 1 - ee.totalWeight;
          He = [], Ke = [], He.push(ye), Ke.push(ie)
        } else {
          if (2 === ee.animations.length && (Me.f.SlerpToRef(ee.animations[0].currentValue, ee.animations[1].currentValue, ee.animations[1].weight / ee.totalWeight, ie), 0 === ee.totalAdditiveWeight)) return ie;
          He = [], Ke = [], Ue = ee.totalWeight
        }
        for (let ie = 0; ie < ee.animations.length; ie++) {
          const ye = ee.animations[ie];
          He.push(ye.currentValue), Ke.push(ye.weight / Ue)
        }
        let Fe = 0;
        for (let ee = 0; ee < He.length;) ee ? (Fe += Ke[ee], Me.f.SlerpToRef(be, He[ee], Ke[ee] / Fe, be), ee++) : (Me.f.SlerpToRef(He[ee], He[ee + 1], Ke[ee + 1] / (Ke[ee] + Ke[ee + 1]), ie), be = ie, Fe = Ke[ee] + Ke[ee + 1], ee += 2)
      }
      for (let Ke = 0; Ke < ee.additiveAnimations.length; Ke++) {
        const ie = ee.additiveAnimations[Ke];
        0 !== ie.weight && (be.multiplyToRef(ie.currentValue, Me.j.Quaternion[0]), Me.f.SlerpToRef(be, Me.j.Quaternion[0], ie.weight, be))
      }
      return be
    }

    function Ye(ee, ie) {
      ie && (ie.prototype.copyAnimationRange = function(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        0 === this.animations.length && (this.animations.push(new te.b(this.name, "_matrix", ee.animations[0].framePerSecond, te.b.ANIMATIONTYPE_MATRIX, 0)), this.animations[0].setKeys([]));
        const Me = ee.animations[0].getRange(ie);
        if (!Me) return !1;
        const Ke = Me.from,
          Ue = Me.to,
          Fe = ee.animations[0].getKeys(),
          Je = ee.length,
          oe = ee.getParent(),
          Re = this.getParent(),
          ke = ye && oe && Je && this.length && Je !== this.length,
          qe = ke && Re && oe ? Re.length / oe.length : 1,
          fe = ye && !Re && be && (1 !== be.x || 1 !== be.y || 1 !== be.z),
          Te = this.animations[0].getKeys();
        let pe, Xe, ze;
        for (let Be = 0, Ee = Fe.length; Be < Ee; Be++) pe = Fe[Be], pe.frame >= Ke && pe.frame <= Ue && (ye ? (ze = pe.value.clone(), ke ? (Xe = ze.getTranslation(), ze.setTranslation(Xe.scaleInPlace(qe))) : fe && be ? (Xe = ze.getTranslation(), ze.setTranslation(Xe.multiplyInPlace(be))) : ze = pe.value) : ze = pe.value, Te.push({
          frame: pe.frame + He,
          value: ze
        }));
        return this.animations[0].createRange(ie, Ke + He, Ue + He), !0
      }), ee && (ee.prototype._animate = function(ee) {
        const ie = this._animationWrites,
          He = this._animationWriteCount;
        let ye = 0;
        for (let Me = this._animationStepWriteCount; Me < He; Me++) {
          const ee = ie[Me];
          ee.dp && -1 === ee.weight || (ee.dp = !0, ie[Me] = ie[ye], ie[ye] = ee, ye++)
        }
        for (let Me = ye; Me < He; Me++) {
          const ee = ie[Me];
          ee.runtimeAnimation = null, ee.target = null
        }
        if (this._animationWriteCount = ye, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, !this.animationsEnabled) return;
        const be = we.e.Now;
        if (!this._animationTimeLast) {
          if (this._pendingData.length > 0) return;
          this._animationTimeLast = be
        }
        this.deltaTime = void 0 !== ee ? ee : this.useConstantAnimationDeltaTime ? 16 : (be - this._animationTimeLast) * this.animationTimeScale, this._animationTimeLast = be;
        const Ke = this._activeAnimatables;
        if (0 === Ke.length) return;
        this._animationTime += this.deltaTime;
        const Ue = this._animationTime;
        this._animationStepEvaluated = !0;
        for (let Me = 0; Me < Ke.length; Me++) {
          const ee = Ke[Me];
          !ee._animate(Ue) && ee.disposeOnEnd && Me--
        }! function(ee) {
          if (ee._registeredForLateAnimationBindings.length) {
            for (let ie = 0; ie < ee._registeredForLateAnimationBindings.length; ie++) {
              const He = ee._registeredForLateAnimationBindings.data[ie];
              for (const ee in He._lateAnimationHolders) {
                const ie = He._lateAnimationHolders[ee],
                  ye = ie.animations[0],
                  be = ie.originalValue;
                if (void 0 === be || null === be) continue;
                const Ke = te.b.AllowMatrixDecomposeForInterpolation && be.m;
                let Ue = He[ee];
                if (Ke) Ue = Pe(ie);
                else if (void 0 !== be.w) Ue = Ae(ie, Ue || Me.f.Identity());
                else {
                  let ee = 0,
                    He = 1;
                  const Me = ye && ye._animationState.tH === te.b.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                  if (ie.totalWeight < 1) Ue = Me ? be.clone ? be.clone() : be : ye && be.scale ? be.scale(1 - ie.totalWeight) : ye ? be * (1 - ie.totalWeight) : be.clone ? be.clone() : be;
                  else if (ye) {
                    He = ie.totalWeight;
                    const Ke = ye.weight / He;
                    Ue = 1 !== Ke ? ye.currentValue.scale ? ye.currentValue.scale(Ke) : ye.currentValue * Ke : (ie.animations.length > 1 || ie.additiveAnimations.length > 0) && ye.currentValue.clone ? ye.currentValue.clone() : ye.currentValue, Me && (Ue.addToRef ? Ue.addToRef(be, Ue) : Ue += be), ee = 1
                  }
                  for (let ye = ee; ye < ie.animations.length; ye++) {
                    const ee = ie.animations[ye],
                      be = ee.weight / He;
                    be && (ee.currentValue.scaleAndAddToRef ? ee.currentValue.scaleAndAddToRef(be, Ue) : Ue += ee.currentValue * be)
                  }
                  for (let ye = 0; ye < ie.additiveAnimations.length; ye++) {
                    const ee = ie.additiveAnimations[ye],
                      He = ee.weight;
                    He && (ee.currentValue.scaleAndAddToRef ? ee.currentValue.scaleAndAddToRef(He, Ue) : Ue += ee.currentValue * He)
                  }
                }
                He[ee] = Ue
              }
              He._lateAnimationHolders = {}
            }
            ee._registeredForLateAnimationBindings.reset()
          }
        }(this), this._animationStepWriteCount = this._animationWriteCount
      }, ee.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort(((ee, ie) => ee.playOrder - ie.playOrder))
      }, ee.prototype.beginWeightedAnimation = function(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          be = arguments.length > 4 ? arguments[4] : void 0,
          Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Ke = arguments.length > 6 ? arguments[6] : void 0,
          Ue = arguments.length > 7 ? arguments[7] : void 0,
          Fe = arguments.length > 8 ? arguments[8] : void 0,
          Je = arguments.length > 9 ? arguments[9] : void 0,
          oe = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Re = this.beginAnimation(ee, ie, He, be, Me, Ke, Ue, !1, Fe, Je, oe);
        return Re.weight = ye, Re
      }, ee.prototype.beginAnimation = function(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          Me = arguments.length > 5 ? arguments[5] : void 0,
          Ke = arguments.length > 6 ? arguments[6] : void 0,
          Ue = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Fe = arguments.length > 8 ? arguments[8] : void 0,
          Je = arguments.length > 9 ? arguments[9] : void 0,
          oe = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        if (be < 0) {
          const ee = ie;
          ie = He, He = ee, be = -be
        }
        ie > He && (be = -be), Ue && this.stopAnimation(ee, void 0, Fe), Ke || (Ke = new De(this, ee, ie, He, ye, be, Me, void 0, Je, oe));
        const Re = !Fe || Fe(ee);
        if (ee.animations && Re && Ke.appendAnimations(ee, ee.animations), ee.getAnimatables) {
          const oe = ee.getAnimatables();
          for (let ee = 0; ee < oe.length; ee++) this.beginAnimation(oe[ee], ie, He, ye, be, Me, Ke, Ue, Fe, Je)
        }
        return Ke.reset(), Ke
      }, ee.prototype.beginHierarchyAnimation = function(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
          Ke = arguments.length > 6 ? arguments[6] : void 0,
          Ue = arguments.length > 7 ? arguments[7] : void 0,
          Fe = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
          Je = arguments.length > 9 ? arguments[9] : void 0,
          oe = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const Re = ee.getDescendants(ie),
          ke = [];
        ke.push(this.beginAnimation(ee, He, ye, be, Me, Ke, Ue, Fe, Je, void 0, oe));
        for (const qe of Re) ke.push(this.beginAnimation(qe, He, ye, be, Me, Ke, Ue, Fe, Je, void 0, oe));
        return ke
      }, ee.prototype.beginDirectAnimation = function(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        if (Me < 0) {
          const ee = He;
          He = ye, ye = ee, Me = -Me
        }
        He > ye && (Me = -Me);
        return new De(this, ee, He, ye, be, Me, arguments.length > 6 ? arguments[6] : void 0, ie, arguments.length > 7 ? arguments[7] : void 0, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }, ee.prototype.beginDirectHierarchyAnimation = function(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        let Je = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
        const oe = ee.getDescendants(ie),
          Re = [];
        Re.push(this.beginDirectAnimation(ee, He, ye, be, Me, Ke, Ue, Fe, Je));
        for (const ke of oe) Re.push(this.beginDirectAnimation(ke, He, ye, be, Me, Ke, Ue, Fe, Je));
        return Re
      }, ee.prototype.getAnimatableByTarget = function(ee) {
        for (let ie = 0; ie < this._activeAnimatables.length; ie++)
          if (this._activeAnimatables[ie].target === ee) return this._activeAnimatables[ie];
        return null
      }, ee.prototype.getAllAnimatablesByTarget = function(ee) {
        const ie = [];
        for (let He = 0; He < this._activeAnimatables.length; He++) this._activeAnimatables[He].target === ee && ie.push(this._activeAnimatables[He]);
        return ie
      }, ee.prototype.stopAnimation = function(ee, ie, He) {
        const ye = this.getAllAnimatablesByTarget(ee);
        for (const be of ye) be.stop(ie, He)
      }, ee.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
          for (let ee = 0; ee < this._activeAnimatables.length; ee++) this._activeAnimatables[ee].stop(void 0, void 0, !0);
          this._activeAnimatables.length = 0
        }
        for (const ee of this.animationGroups) ee.stop()
      })
    }
    De.ProcessPausedAnimatables = !1;
    var Ve, ae = He(37925),
      ce = He(41323),
      xe = He(40985);
    class Le extends ce.d {
      get _matrix() {
        return this._compose(), this._localMatrix
      }
      set _matrix(ee) {
        (ee.updateFlag !== this._localMatrix.updateFlag || this._needToCompose) && (this._needToCompose = !1, this._localMatrix.jD(ee), this._markAsDirtyAndDecompose())
      }
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Ke = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Ue = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        super(ee, ie.Xx(), !1), this.name = ee, this.children = [], this.animations = [], this._index = null, this._scalingDeterminant = 1, this._needToDecompose = !0, this._needToCompose = !1, this._linkedTransformNode = null, this._waitingTransformNodeId = null, this._waitingTransformNodeUniqueId = null, this._skeleton = ie, this._localMatrix = ye?.clone() ?? Me.b.Identity(), this._restMatrix = be ?? this._localMatrix.clone(), this._bindMatrix = Ke ?? this._localMatrix.clone(), this._index = Ue, this._absoluteMatrix = new Me.b, this._absoluteBindMatrix = new Me.b, this._absoluteInverseBindMatrix = new Me.b, this._finalMatrix = new Me.b, ie.bones.push(this), this.setParent(He, !1), this._updateAbsoluteBindMatrices()
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
      set parent(ee) {
        this.setParent(ee)
      }
      setParent(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (this.parent !== ee) {
          if (this.parent) {
            const ee = this.parent.children.indexOf(this); - 1 !== ee && this.parent.children.splice(ee, 1)
          }
          this._parentNode = ee, this.parent && this.parent.children.push(this), ie && this._updateAbsoluteBindMatrices(), this.tye()
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
      setRestMatrix(ee) {
        this._restMatrix.jD(ee)
      }
      setRestPose(ee) {
        this.setRestMatrix(ee)
      }
      getBindPose() {
        return this.getBindMatrix()
      }
      setBindMatrix(ee) {
        this.oie(ee)
      }
      setBindPose(ee) {
        this.setBindMatrix(ee)
      }
      getFinalMatrix() {
        return this._finalMatrix
      }
      getWorldMatrix() {
        return this.getFinalMatrix()
      }
      returnToRest() {
        if (this._linkedTransformNode) {
          const ee = Me.j.rf[0],
            ie = Me.j.Quaternion[0],
            He = Me.j.rf[1];
          this.getRestMatrix().decompose(ee, ie, He), this._linkedTransformNode.position.jD(He), this._linkedTransformNode.rotationQuaternion = this._linkedTransformNode.rotationQuaternion ?? Me.f.Identity(), this._linkedTransformNode.rotationQuaternion.jD(ie), this._linkedTransformNode.wR.jD(ee)
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
      linkTransformNode(ee) {
        this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode--, this._linkedTransformNode = ee, this._linkedTransformNode && this._skeleton._numBonesWithLinkedTransformNode++
      }
      getTransformNode() {
        return this._linkedTransformNode
      }
      get position() {
        return this._decompose(), this.xHe
      }
      set position(ee) {
        this._decompose(), this.xHe.jD(ee), this._markAsDirtyAndCompose()
      }
      get rotation() {
        return this.getRotation()
      }
      set rotation(ee) {
        this.setRotation(ee)
      }
      get rotationQuaternion() {
        return this._decompose(), this._localRotation
      }
      set rotationQuaternion(ee) {
        this.setRotationQuaternion(ee)
      }
      get wR() {
        return this.getScale()
      }
      set wR(ee) {
        this.setScale(ee)
      }
      get animationPropertiesOverride() {
        return this._skeleton.animationPropertiesOverride
      }
      _decompose() {
        this._needToDecompose && (this._needToDecompose = !1, this._localScaling || (this._localScaling = Me.p.Zero(), this._localRotation = Me.f.Zero(), this.xHe = Me.p.Zero()), this._localMatrix.decompose(this._localScaling, this._localRotation, this.xHe))
      }
      _compose() {
        this._needToCompose && (this._localScaling ? (this._needToCompose = !1, Me.b.ComposeToRef(this._localScaling, this._localRotation, this.xHe, this._localMatrix)) : this._needToCompose = !1)
      }
      oie(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._bindMatrix.jD(ee), ie && this._updateAbsoluteBindMatrices(), He ? this._matrix = ee : this.tye()
      }
      _updateAbsoluteBindMatrices(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (ee || (ee = this._bindMatrix), this.parent ? ee.multiplyToRef(this.parent._absoluteBindMatrix, this._absoluteBindMatrix) : this._absoluteBindMatrix.jD(ee), this._absoluteBindMatrix.invertToRef(this._absoluteInverseBindMatrix), ie)
          for (let He = 0; He < this.children.length; He++) this.children[He]._updateAbsoluteBindMatrices();
        this._scalingDeterminant = this._absoluteBindMatrix.determinant() < 0 ? -1 : 1
      }
      tye() {
        return this._currentRenderId++, this._childUpdateId++, this._skeleton._markAsDirty(), this
      }
      _markAsDirtyAndCompose() {
        this.tye(), this._needToCompose = !0
      }
      _markAsDirtyAndDecompose() {
        this.tye(), this._needToDecompose = !0
      }
      _updatePosition(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        const be = this.getLocalMatrix();
        if (0 == ie) ye ? (be.addAtIndex(12, ee.x), be.addAtIndex(13, ee.y), be.addAtIndex(14, ee.z)) : be.setTranslationFromFloats(ee.x, ee.y, ee.z);
        else {
          const ie = Le._TmpMats[0],
            Ke = Le._TmpVecs[0];
          this.parent ? (ie.jD(this.parent.getAbsoluteMatrix()), He && ie.multiplyToRef(He.getWorldMatrix(), ie)) : Me.b.IdentityToRef(ie), ye && ie.setTranslationFromFloats(0, 0, 0), ie.invert(), Me.p.TransformCoordinatesToRef(ee, ie, Ke), ye ? (be.addAtIndex(12, Ke.x), be.addAtIndex(13, Ke.y), be.addAtIndex(14, Ke.z)) : be.setTranslationFromFloats(Ke.x, Ke.y, Ke.z)
        }
        this._markAsDirtyAndDecompose()
      }
      translate(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(ee, ie, He, !0)
      }
      setPosition(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        this._updatePosition(ee, ie, He, !1)
      }
      setAbsolutePosition(ee, ie) {
        this.setPosition(ee, 1, ie)
      }
      scale(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const be = this.getLocalMatrix(),
          Ke = Le._TmpMats[0];
        Me.b.ScalingToRef(ee, ie, He, Ke), Ke.multiplyToRef(be, be), Ke.invert();
        for (const Me of this.children) {
          const ye = Me.getLocalMatrix();
          ye.multiplyToRef(Ke, ye), ye.multiplyAtIndex(12, ee), ye.multiplyAtIndex(13, ie), ye.multiplyAtIndex(14, He), Me._markAsDirtyAndDecompose()
        }
        if (this._markAsDirtyAndDecompose(), ye)
          for (const Me of this.children) Me.scale(ee, ie, He, ye)
      }
      setScale(ee) {
        this._decompose(), this._localScaling.jD(ee), this._markAsDirtyAndCompose()
      }
      getScale() {
        return this._decompose(), this._localScaling
      }
      getScaleToRef(ee) {
        this._decompose(), ee.jD(this._localScaling)
      }
      setYawPitchRoll(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          be = arguments.length > 4 ? arguments[4] : void 0;
        if (0 === ye) {
          const Ke = Le._TmpQuat;
          return Me.f.RotationYawPitchRollToRef(ee, ie, He, Ke), void this.setRotationQuaternion(Ke, ye, be)
        }
        const Ke = Le._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(Ke, be)) return;
        const Ue = Le._TmpMats[1];
        Me.b.RotationYawPitchRollToRef(ee, ie, He, Ue), Ke.multiplyToRef(Ue, Ue), this._rotateWithMatrix(Ue, ye, be)
      }
      rotate(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 ? arguments[3] : void 0;
        const be = Le._TmpMats[0];
        be.setTranslationFromFloats(0, 0, 0), Me.b.RotationAxisToRef(ee, ie, be), this._rotateWithMatrix(be, He, ye)
      }
      setAxisAngle(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 ? arguments[3] : void 0;
        if (0 === He) {
          const be = Le._TmpQuat;
          return Me.f.RotationAxisToRef(ee, ie, be), void this.setRotationQuaternion(be, He, ye)
        }
        const be = Le._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(be, ye)) return;
        const Ke = Le._TmpMats[1];
        Me.b.RotationAxisToRef(ee, ie, Ke), be.multiplyToRef(Ke, Ke), this._rotateWithMatrix(Ke, He, ye)
      }
      setRotation(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        this.setYawPitchRoll(ee.y, ee.x, ee.z, ie, He)
      }
      setRotationQuaternion(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === ie) return this._decompose(), this._localRotation.jD(ee), void this._markAsDirtyAndCompose();
        const ye = Le._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(ye, He)) return;
        const be = Le._TmpMats[1];
        Me.b.FromQuaternionToRef(ee, be), ye.multiplyToRef(be, be), this._rotateWithMatrix(be, ie, He)
      }
      setRotationMatrix(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        if (0 === ie) {
          const ye = Le._TmpQuat;
          return Me.f.FromRotationMatrixToRef(ee, ye), void this.setRotationQuaternion(ye, ie, He)
        }
        const ye = Le._TmpMats[0];
        if (!this._getAbsoluteInverseMatrixUnscaledToRef(ye, He)) return;
        const be = Le._TmpMats[1];
        be.jD(ee), ye.multiplyToRef(ee, be), this._rotateWithMatrix(be, ie, He)
      }
      _rotateWithMatrix(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const ye = this.getLocalMatrix(),
          be = ye.m[12],
          Me = ye.m[13],
          Ke = ye.m[14],
          Ue = this.getParent(),
          Fe = Le._TmpMats[3],
          Je = Le._TmpMats[4];
        Ue && 1 == ie ? (He ? (Fe.jD(He.getWorldMatrix()), Ue.getAbsoluteMatrix().multiplyToRef(Fe, Fe)) : Fe.jD(Ue.getAbsoluteMatrix()), Je.jD(Fe), Je.invert(), ye.multiplyToRef(Fe, ye), ye.multiplyToRef(ee, ye), ye.multiplyToRef(Je, ye)) : 1 == ie && He ? (Fe.jD(He.getWorldMatrix()), Je.jD(Fe), Je.invert(), ye.multiplyToRef(Fe, ye), ye.multiplyToRef(ee, ye), ye.multiplyToRef(Je, ye)) : ye.multiplyToRef(ee, ye), ye.setTranslationFromFloats(be, Me, Ke), this._markAsDirtyAndDecompose()
      }
      _getAbsoluteInverseMatrixUnscaledToRef(ee, ie) {
        const He = Le._TmpMats[2];
        return ee.jD(this.getAbsoluteMatrix()), ie ? (ee.multiplyToRef(ie.getWorldMatrix(), ee), Me.b.ScalingToRef(ie.wR.x, ie.wR.y, ie.wR.z, He)) : Me.b.IdentityToRef(He), ee.invert(), !isNaN(ee.m[0]) && (He.multiplyAtIndex(0, this._scalingDeterminant), ee.multiplyToRef(He, ee), !0)
      }
      pE() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const He = Me.p.Zero();
        return this.getPositionToRef(ee, ie, He), He
      }
      getPositionToRef() {
        let ee = arguments.length > 1 ? arguments[1] : void 0,
          ie = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) {
          const ee = this.getLocalMatrix();
          ie.x = ee.m[12], ie.y = ee.m[13], ie.z = ee.m[14]
        } else {
          const He = Le._TmpMats[0].jD(this.getAbsoluteMatrix());
          ee && He.multiplyToRef(ee.getWorldMatrix(), He), ie.x = He.m[12], ie.y = He.m[13], ie.z = He.m[14]
        }
      }
      getAbsolutePosition() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        const ie = Me.p.Zero();
        return this.getPositionToRef(1, ee, ie), ie
      }
      getAbsolutePositionToRef(ee, ie) {
        this.getPositionToRef(1, ee, ie)
      }
      computeAbsoluteMatrices() {
        if (this._compose(), this.parent) this._localMatrix.multiplyToRef(this.parent._absoluteMatrix, this._absoluteMatrix);
        else {
          this._absoluteMatrix.jD(this._localMatrix);
          const ee = this._skeleton.getPoseMatrix();
          ee && this._absoluteMatrix.multiplyToRef(ee, this._absoluteMatrix)
        }
        const ee = this.children,
          ie = ee.length;
        for (let He = 0; He < ie; He++) ee[He].computeAbsoluteMatrices()
      }
      computeAbsoluteTransforms() {
        this.computeAbsoluteMatrices()
      }
      N_(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const He = Me.p.Zero();
        return this.getDirectionToRef(ee, ie, He), He
      }
      getDirectionToRef(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const ye = Le._TmpMats[0].jD(this.getAbsoluteMatrix());
        ie && ye.multiplyToRef(ie.getWorldMatrix(), ye), Me.p.TransformNormalToRef(ee, ye, He), He.normalize()
      }
      getRotation() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const He = Me.p.Zero();
        return this.getRotationToRef(ee, ie, He), He
      }
      getRotationToRef() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const ye = Le._TmpQuat;
        this.getRotationQuaternionToRef(ee, ie, ye), ye.toEulerAnglesToRef(He)
      }
      getRotationQuaternion() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const He = Me.f.Identity();
        return this.getRotationQuaternionToRef(ee, ie, He), He
      }
      getRotationQuaternionToRef() {
        let ee = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ie = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this._decompose(), ie.jD(this._localRotation);
        else {
          const He = Le._TmpMats[0],
            ye = this.getAbsoluteMatrix();
          ee ? ye.multiplyToRef(ee.getWorldMatrix(), He) : He.jD(ye), He.multiplyAtIndex(0, this._scalingDeterminant), He.multiplyAtIndex(1, this._scalingDeterminant), He.multiplyAtIndex(2, this._scalingDeterminant), He.decompose(void 0, ie, void 0)
        }
      }
      getRotationMatrix() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 ? arguments[1] : void 0;
        const He = Me.b.Identity();
        return this.getRotationMatrixToRef(ee, ie, He), He
      }
      getRotationMatrixToRef() {
        let ee = arguments.length > 1 ? arguments[1] : void 0,
          ie = arguments.length > 2 ? arguments[2] : void 0;
        if (0 == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)) this.getLocalMatrix().getRotationMatrixToRef(ie);
        else {
          const He = Le._TmpMats[0],
            ye = this.getAbsoluteMatrix();
          ee ? ye.multiplyToRef(ee.getWorldMatrix(), He) : He.jD(ye), He.multiplyAtIndex(0, this._scalingDeterminant), He.multiplyAtIndex(1, this._scalingDeterminant), He.multiplyAtIndex(2, this._scalingDeterminant), He.getRotationMatrixToRef(ie)
        }
      }
      getAbsolutePositionFromLocal(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const He = Me.p.Zero();
        return this.getAbsolutePositionFromLocalToRef(ee, ie, He), He
      }
      getAbsolutePositionFromLocalToRef(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const ye = Le._TmpMats[0].jD(this.getAbsoluteMatrix());
        ie && ye.multiplyToRef(ie.getWorldMatrix(), ye), Me.p.TransformCoordinatesToRef(ee, ye, He)
      }
      getLocalPositionFromAbsolute(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const He = Me.p.Zero();
        return this.getLocalPositionFromAbsoluteToRef(ee, ie, He), He
      }
      getLocalPositionFromAbsoluteToRef(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const ye = Le._TmpMats[0].jD(this.getAbsoluteMatrix());
        ie && ye.multiplyToRef(ie.getWorldMatrix(), ye), ye.invert(), Me.p.TransformCoordinatesToRef(ee, ye, He)
      }
      setCurrentPoseAsRest() {
        this.setRestMatrix(this.getLocalMatrix())
      }
      dispose() {
        this._linkedTransformNode = null;
        const ee = this._skeleton.bones.indexOf(this);
        if (-1 !== ee && this._skeleton.bones.splice(ee, 1), this._parentNode && this._parentNode.children) {
          const ee = this._parentNode.children,
            ie = ee.indexOf(this); - 1 !== ie && ee.splice(ie, 1)
        }
        super.dispose()
      }
    }
    Le._TmpVecs = (0, ae.c)(2, Me.p.Zero), Le._TmpQuat = Me.f.Identity(), Le._TmpMats = (0, ae.c)(5, Me.b.Identity), (Ve = Le.prototype).copyAnimationRange ?? (Ve.copyAnimationRange = (0, xe.h)("Bone", "copyAnimationRange"));
    var Ce = He(41199);
    let ve = !1;
    var ue = He(41080),
      me = He(41446),
      le = He(41458),
      Se = He(41451),
      ne = He(41235);

    function je(ee, ie) {
      const He = (0, qe.RandomRange)(0, 1);
      oe.g.LerpToRef(ie.color1, ie.color2, He, ee.color)
    }

    function se(ee, ie) {
      ie.colorDead.subtractToRef(ee.color, ie._colorDiff), ie._colorDiff.scaleToRef(1 / ee.lifeTime, ee.colorStep)
    }

    function Ie(ee, ie) {
      ee._properties.currentColorGradient = ie._colorGradients[0], ee._properties.currentColorGradient.getColorToRef(ee.color), ee._properties.currentColor1.jD(ee.color), ie._colorGradients.length > 1 ? ie._colorGradients[1].getColorToRef(ee._properties.currentColor2) : ee._properties.currentColor2.jD(ee.color)
    }

    function he(ee, ie) {
      const He = ie._colorGradients;
      ye.k.GetCurrentGradient(ie._ratio, He, ((ie, He, ye) => {
        ie !== ee._properties.currentColorGradient && (ee._properties.currentColor1.jD(ee._properties.currentColor2), He.getColorToRef(ee._properties.currentColor2), ee._properties.currentColorGradient = ie), oe.g.LerpToRef(ee._properties.currentColor1, ee._properties.currentColor2, ye, ee.color), ee.color.a < 0 && (ee.color.a = 0)
      }))
    }

    function Ne(ee, ie) {
      ee.colorStep.scaleToRef(ie._scaledUpdateSpeed, ie._scaledColorStep), ee.color.addInPlace(ie._scaledColorStep), ee.color.a < 0 && (ee.color.a = 0)
    }

    function Ge(ee, ie) {
      ye.k.GetCurrentGradient(ie._ratio, ie._angularSpeedGradients, ((ie, He, ye) => {
        ie !== ee._properties.currentAngularSpeedGradient && (ee._properties.currentAngularSpeed1 = ee._properties.currentAngularSpeed2, ee._properties.currentAngularSpeed2 = He.getFactor(), ee._properties.currentAngularSpeedGradient = ie), ee.angularSpeed = (0, qe.Lerp)(ee._properties.currentAngularSpeed1, ee._properties.currentAngularSpeed2, ye)
      }))
    }

    function re(ee, ie) {
      ee.angle += ee.angularSpeed * ie._scaledUpdateSpeed
    }

    function Qe(ee, ie) {
      ie.particleEmitterType.startDirectionFunction(ie._emitterWorldMatrix, ee.direction, ee, ie.isLocal, ie._emitterInverseWorldMatrix)
    }

    function ei(ee, ie) {
      ie.startDirectionFunction(ie._emitterWorldMatrix, ee.direction, ee, ie.isLocal)
    }

    function ii(ee, ie) {
      ee._properties.currentVelocityGradient = ie._velocityGradients[0], ee._properties.currentVelocity1 = ee._properties.currentVelocityGradient.getFactor(), ie._velocityGradients.length > 1 ? ee._properties.currentVelocity2 = ie._velocityGradients[1].getFactor() : ee._properties.currentVelocity2 = ee._properties.currentVelocity1
    }

    function Hi(ee, ie) {
      ee._properties.currentLimitVelocityGradient = ie._limitVelocityGradients[0], ee._properties.currentLimitVelocity1 = ee._properties.currentLimitVelocityGradient.getFactor(), ie._limitVelocityGradients.length > 1 ? ee._properties.currentLimitVelocity2 = ie._limitVelocityGradients[1].getFactor() : ee._properties.currentLimitVelocity2 = ee._properties.currentLimitVelocity1
    }

    function yi(ee, ie) {
      ye.k.GetCurrentGradient(ie._ratio, ie._velocityGradients, ((ie, He, ye) => {
        ie !== ee._properties.currentVelocityGradient && (ee._properties.currentVelocity1 = ee._properties.currentVelocity2, ee._properties.currentVelocity2 = He.getFactor(), ee._properties.currentVelocityGradient = ie), ee._properties.directionScale *= (0, qe.Lerp)(ee._properties.currentVelocity1, ee._properties.currentVelocity2, ye)
      }))
    }

    function bi(ee, ie) {
      ye.k.GetCurrentGradient(ie._ratio, ie._limitVelocityGradients, ((He, ye, be) => {
        He !== ee._properties.currentLimitVelocityGradient && (ee._properties.currentLimitVelocity1 = ee._properties.currentLimitVelocity2, ee._properties.currentLimitVelocity2 = ye.getFactor(), ee._properties.currentLimitVelocityGradient = He);
        const Me = (0, qe.Lerp)(ee._properties.currentLimitVelocity1, ee._properties.currentLimitVelocity2, be);
        ee.direction.length() > Me && ee.direction.scaleInPlace(ie.limitVelocityDamping)
      }))
    }

    function Mi(ee) {
      ee.direction.scaleToRef(ee._properties.directionScale, ee._properties.scaledDirection)
    }

    function Ki(ee, ie) {
      ie.particleEmitterType.startPositionFunction(ie._emitterWorldMatrix, ee.position, ee, ie.isLocal)
    }

    function Ui(ee, ie) {
      ie.startPositionFunction(ie._emitterWorldMatrix, ee.position, ee, ie.isLocal)
    }

    function Fi(ee, ie) {
      ee._properties.localPosition ? ee._properties.localPosition.jD(ee.position) : ee._properties.localPosition = ee.position.clone(), Me.p.TransformCoordinatesToRef(ee._properties.localPosition, ie._emitterWorldMatrix, ee.position)
    }

    function Ji(ee, ie) {
      ie.isLocal && ee._properties.localPosition ? (ee._properties.localPosition.addInPlace(ee._properties.scaledDirection), Me.p.TransformCoordinatesToRef(ee._properties.localPosition, ie._emitterWorldMatrix, ee.position)) : ee.position.addInPlace(ee._properties.scaledDirection)
    }

    function oi(ee, ie) {
      ee._properties.currentDragGradient = ie._dragGradients[0], ee._properties.currentDrag1 = ee._properties.currentDragGradient.getFactor(), ie._dragGradients.length > 1 ? ee._properties.currentDrag2 = ie._dragGradients[1].getFactor() : ee._properties.currentDrag2 = ee._properties.currentDrag1
    }

    function Ri(ee, ie) {
      ye.k.GetCurrentGradient(ie._ratio, ie._dragGradients, ((ie, He, ye) => {
        ie !== ee._properties.currentDragGradient && (ee._properties.currentDrag1 = ee._properties.currentDrag2, ee._properties.currentDrag2 = He.getFactor(), ee._properties.currentDragGradient = ie);
        const be = (0, qe.Lerp)(ee._properties.currentDrag1, ee._properties.currentDrag2, ye);
        ee._properties.scaledDirection.scaleInPlace(1 - be)
      }))
    }

    function ki(ee, ie) {
      ee._properties.randomNoiseCoordinates1 && ee._properties.randomNoiseCoordinates2 ? (ee._properties.randomNoiseCoordinates1.wie(Math.random(), Math.random(), Math.random()), ee._properties.randomNoiseCoordinates2.wie(Math.random(), Math.random(), Math.random())) : (ee._properties.randomNoiseCoordinates1 = new Me.p(Math.random(), Math.random(), Math.random()), ee._properties.randomNoiseCoordinates2 = new Me.p(Math.random(), Math.random(), Math.random()))
    }

    function qi(ee, ie) {
      const He = ie._noiseTextureData,
        ye = ie._noiseTextureSize;
      if (He && ye && ee._properties.randomNoiseCoordinates1 && ee._properties.randomNoiseCoordinates2) {
        const be = ie._fetchR(ee._properties.randomNoiseCoordinates1.x, ee._properties.randomNoiseCoordinates1.y, ye.width, ye.height, He),
          Ke = ie._fetchR(ee._properties.randomNoiseCoordinates1.z, ee._properties.randomNoiseCoordinates2.x, ye.width, ye.height, He),
          Ue = ie._fetchR(ee._properties.randomNoiseCoordinates2.y, ee._properties.randomNoiseCoordinates2.z, ye.width, ye.height, He),
          Fe = Me.j.rf[0],
          Je = Me.j.rf[1];
        Fe.wie((2 * be - 1) * ie.noiseStrength.x, (2 * Ke - 1) * ie.noiseStrength.y, (2 * Ue - 1) * ie.noiseStrength.z), Fe.scaleToRef(ie._tempScaledUpdateSpeed, Je), ee.direction.addInPlace(Je)
      }
    }

    function fi(ee, ie) {
      ie.gravity.scaleToRef(ie._tempScaledUpdateSpeed, ie._scaledGravity), ee.direction.addInPlace(ie._scaledGravity)
    }

    function Ti(ee, ie) {
      ee.size = (0, qe.RandomRange)(ie.minSize, ie.maxSize), ee.scale.wie((0, qe.RandomRange)(ie.minScaleX, ie.maxScaleX), (0, qe.RandomRange)(ie.minScaleY, ie.maxScaleY))
    }

    function Xi(ee, ie) {
      ee._properties.currentSizeGradient = ie._sizeGradients[0], ee._properties.currentSize1 = ee._properties.currentSizeGradient.getFactor(), ee.size = ee._properties.currentSize1, ie._sizeGradients.length > 1 ? ee._properties.currentSize2 = ie._sizeGradients[1].getFactor() : ee._properties.currentSize2 = ee._properties.currentSize1, ee.scale.wie((0, qe.RandomRange)(ie.minScaleX, ie.maxScaleX), (0, qe.RandomRange)(ie.minScaleY, ie.maxScaleY))
    }

    function zi(ee, ie) {
      const He = ie._actualFrame / ie.targetStopDuration;
      ye.k.GetCurrentGradient(He, ie._startSizeGradients, ((He, ye, be) => {
        He !== ie._currentStartSizeGradient && (ie._currentStartSize1 = ie._currentStartSize2, ie._currentStartSize2 = ye.getFactor(), ie._currentStartSizeGradient = He);
        const Me = (0, qe.Lerp)(ie._currentStartSize1, ie._currentStartSize2, be);
        ee.scale.scaleInPlace(Me)
      }))
    }

    function Bi(ee, ie) {
      ye.k.GetCurrentGradient(ie._ratio, ie._sizeGradients, ((ie, He, ye) => {
        ie !== ee._properties.currentSizeGradient && (ee._properties.currentSize1 = ee._properties.currentSize2, ee._properties.currentSize2 = He.getFactor(), ee._properties.currentSizeGradient = ie), ee.size = (0, qe.Lerp)(ee._properties.currentSize1, ee._properties.currentSize2, ye)
      }))
    }

    function Ei(ee, ie) {
      ee.remapData = new Me.s(0, 1, 0, 1)
    }

    function gi(ee, ie) {
      ie._colorRemapGradients && ie._colorRemapGradients.length > 0 && ye.k.GetCurrentGradient(ie._ratio, ie._colorRemapGradients, ((ie, He, ye) => {
        const be = (0, qe.Lerp)(ie.factor1, He.factor1, ye),
          Me = (0, qe.Lerp)(ie.factor2, He.factor2, ye);
        ee.remapData.x = be, ee.remapData.y = Me - be
      })), ie._alphaRemapGradients && ie._alphaRemapGradients.length > 0 && ye.k.GetCurrentGradient(ie._ratio, ie._alphaRemapGradients, ((ie, He, ye) => {
        const be = (0, qe.Lerp)(ie.factor1, He.factor1, ye),
          Me = (0, qe.Lerp)(ie.factor2, He.factor2, ye);
        ee.remapData.z = be, ee.remapData.w = Me - be
      }))
    }

    function Oi(ee, ie) {
      const He = (0, qe.Clamp)(ie._actualFrame / ie.targetStopDuration);
      ye.k.GetCurrentGradient(He, ie._lifeTimeGradients, ((ie, ye) => {
        const be = ie,
          Me = ye,
          Ke = be.getFactor(),
          Ue = Me.getFactor(),
          Fe = (He - be.gradient) / (Me.gradient - be.gradient);
        ee.lifeTime = (0, qe.Lerp)(Ke, Ue, Fe)
      })), ie._emitPower = (0, qe.RandomRange)(ie.minEmitPower, ie.maxEmitPower)
    }

    function di(ee, ie) {
      ee.lifeTime = (0, qe.RandomRange)(ie.minLifeTime, ie.maxLifeTime), ie._emitPower = (0, qe.RandomRange)(ie.minEmitPower, ie.maxEmitPower)
    }

    function Wi(ee, ie) {
      0 === ie._emitPower ? (ee._properties.initialDirection ? ee._properties.initialDirection.jD(ee.direction) : ee._properties.initialDirection = ee.direction.clone(), ee.direction.set(0, 0, 0)) : (ee._properties.initialDirection = null, ee.direction.scaleInPlace(ie._emitPower)), ee.direction.addInPlace(ie._inheritedVelocityOffset)
    }

    function ti(ee, ie) {
      ee.angularSpeed = (0, qe.RandomRange)(ie.minAngularSpeed, ie.maxAngularSpeed), ee.angle = (0, qe.RandomRange)(ie.minInitialRotation, ie.maxInitialRotation)
    }

    function Zi(ee, ie) {
      ee._properties.currentAngularSpeedGradient = ie._angularSpeedGradients[0], ee.angularSpeed = ee._properties.currentAngularSpeedGradient.getFactor(), ee._properties.currentAngularSpeed1 = ee.angularSpeed, ie._angularSpeedGradients.length > 1 ? ee._properties.currentAngularSpeed2 = ie._angularSpeedGradients[1].getFactor() : ee._properties.currentAngularSpeed2 = ee._properties.currentAngularSpeed1, ee.angle = (0, qe.RandomRange)(ie.minInitialRotation, ie.maxInitialRotation)
    }

    function wi(ee, ie) {
      ee._properties.initialStartSpriteCellId = ie.startSpriteCellID, ee._properties.initialEndSpriteCellId = ie.endSpriteCellID, ee._properties.initialSpriteCellLoop = ie.spriteCellLoop
    }

    function Di(ee, ie) {
      ee.previousItem = ie.previousItem, ee.nextItem = ie, ie.previousItem && (ie.previousItem.nextItem = ee), ie.previousItem = ee
    }

    function Pi(ee, ie) {
      ee.previousItem = ie, ee.nextItem = ie.nextItem, ie.nextItem && (ie.nextItem.previousItem = ee), ie.nextItem = ee
    }

    function Ai(ee) {
      ee.previousItem && (ee.previousItem.nextItem = ee.nextItem), ee.nextItem && (ee.nextItem.previousItem = ee.previousItem)
    }
    var Yi = He(41499);
    class Vi extends Oe {
      get startDirectionFunction() {
        return this._startDirectionFunction
      }
      set startDirectionFunction(ee) {
        this._startDirectionFunction !== ee && (this._startDirectionFunction = ee, this._directionCreation.process = ee ? ei : Qe)
      }
      get startPositionFunction() {
        return this._startPositionFunction
      }
      set startPositionFunction(ee) {
        this._startPositionFunction !== ee && (this._startPositionFunction = ee, this._positionCreation.process = ee ? Ui : Ki)
      }
      set onDispose(ee) {
        this._onDisposeObserver && this.Bx.remove(this._onDisposeObserver), this._onDisposeObserver = this.Bx.add(ee)
      }
      get RZ() {
        return this._isDisposed
      }
      get useRampGradients() {
        return this._useRampGradients
      }
      set useRampGradients(ee) {
        this._useRampGradients !== ee && (this._useRampGradients = ee, this._resetEffect(), ee ? (this._rampCreation = {
          process: Ei,
          previousItem: null,
          nextItem: null
        }, Pi(this._rampCreation, this._colorDeadCreation), this._gravityProcessing && (this._remapGradientProcessing = {
          process: gi,
          previousItem: null,
          nextItem: null
        }, Pi(this._remapGradientProcessing, this._gravityProcessing))) : (Ai(this._rampCreation), Ai(this._remapGradientProcessing)))
      }
      get isLocal() {
        return this._isLocal
      }
      set isLocal(ee) {
        this._isLocal !== ee && (this._isLocal = ee, ee ? (this._isLocalCreation = {
          process: Fi,
          previousItem: null,
          nextItem: null
        }, Pi(this._isLocalCreation, this._positionCreation)) : Ai(this._isLocalCreation))
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
      set _isAnimationSheetEnabled(ee) {
        this._animationSheetEnabled !== ee && (this._animationSheetEnabled = ee, ee ? (this._sheetCreation = {
          process: wi,
          previousItem: null,
          nextItem: null
        }, Pi(this._sheetCreation, this._colorDeadCreation)) : Ai(this._sheetCreation), this._reset())
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
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[ee]?.effect ?? this._customWrappers[0].effect
      }
      _getCustomDrawWrapper() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._customWrappers[ee] ?? this._customWrappers[0]
      }
      setCustomEffect(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._customWrappers[ie] = new me.b(this._engine), this._customWrappers[ie].effect = ee, this._customWrappers[ie].drawContext && (this._customWrappers[ie].drawContext.useInstancing = this._useInstancing)
      }
      get onBeforeDrawParticlesObservable() {
        return this._onBeforeDrawParticlesObservable || (this._onBeforeDrawParticlesObservable = new be.d), this._onBeforeDrawParticlesObservable
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
      set noiseTexture(ee) {
        if (this.noiseTexture !== ee) {
          if (this._noiseTexture = ee, !ee) return Ai(this._noiseCreation), void Ai(this._noiseProcessing);
          this._noiseCreation = {
            process: ki,
            previousItem: null,
            nextItem: null
          }, Pi(this._noiseCreation, this._colorDeadCreation), this._noiseProcessing = {
            process: qi,
            previousItem: null,
            nextItem: null
          }, Pi(this._noiseProcessing, this._positionProcessing)
        }
      }
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ke = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ue = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .01,
          Je = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        ve || (ve = !0, Ye(Ce.f, Le)), (0, ue.d)(), super(ee), this._emitterInverseWorldMatrix = Me.b.Identity(), this._startDirectionFunction = null, this._startPositionFunction = null, this._inheritedVelocityOffset = new Me.p, this.Bx = new be.d, this.onStoppedObservable = new be.d, this.onStartedObservable = new be.d, this._noiseTextureSize = null, this._noiseTextureData = null, this._particles = new Array, this._stockParticles = new Array, this._newPartsExcess = 0, this._vertexBuffers = {}, this._renderPassObserver = null, this._scaledColorStep = new oe.g(0, 0, 0, 0), this._colorDiff = new oe.g(0, 0, 0, 0), this._scaledGravity = Me.p.Zero(), this._currentRenderId = -1, this._useInstancing = !1, this._useFixedCapacityForSnapshot = !1, this._fixedCapacityHighWaterMark = 0, this._isDisposed = !1, this._started = !1, this._stopped = !1, this._actualFrame = 0, this._currentEmitRate1 = 0, this._currentEmitRate2 = 0, this._currentStartSize1 = 0, this._currentStartSize2 = 0, this.updateInAnimate = !0, this._rawTextureWidth = 256, this._useRampGradients = !1, this._updateQueueStart = null, this._startSizeCreation = null, this._createQueueStart = null, this._isLocal = !1, this.isGPU = !1, this._shaderLanguage = 0, this._onBeforeDrawParticlesObservable = null, this._emitFromParticle = ee => {}, this.recycleParticle = ee => {
          const ie = this._particles.pop();
          ie !== ee && ie.copyTo(ee), ie.metadata = null, this._stockParticles.push(ie)
        }, this._createParticle = () => {
          let ee;
          return 0 !== this._stockParticles.length ? (ee = this._stockParticles.pop(), ee._reset()) : ee = new We(this), this._prepareParticle(ee), ee
        }, this.paused = !1, this._shadersLoaded = !1, this._capacity = ie, this._epsilon = Ue, He && "Scene" !== He.getClassName() ? (this._engine = He, this.defaultProjectionMatrix = Me.b.PerspectiveFovLH(.8, 1, .1, 100, this._engine.isNDCHalfZRange)) : (this._scene = He || Fe.b.LastCreatedScene, this._engine = this._scene.Nf(), this.uniqueId = this._scene.getUniqueId(), this.layerMask = this._scene.defaultRenderableLayerMask, this._scene.zW.push(this)), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._initShaderSourceAsync(), this._lifeTimeCreation = {
          process: di,
          previousItem: null,
          nextItem: null
        }, this._positionCreation = {
          process: Ki,
          previousItem: null,
          nextItem: null
        }, Pi(this._positionCreation, this._lifeTimeCreation), this._directionCreation = {
          process: Qe,
          previousItem: null,
          nextItem: null
        }, Pi(this._directionCreation, this._positionCreation), this._emitPowerCreation = {
          process: Wi,
          previousItem: null,
          nextItem: null
        }, Pi(this._emitPowerCreation, this._directionCreation), this._sizeCreation = {
          process: Ti,
          previousItem: null,
          nextItem: null
        }, Pi(this._sizeCreation, this._emitPowerCreation), this._angleCreation = {
          process: ti,
          previousItem: null,
          nextItem: null
        }, Pi(this._angleCreation, this._sizeCreation), this._colorCreation = {
          process: je,
          previousItem: null,
          nextItem: null
        }, Pi(this._colorCreation, this._angleCreation), this._colorDeadCreation = {
          process: se,
          previousItem: null,
          nextItem: null
        }, Pi(this._colorDeadCreation, this._colorCreation), this._createQueueStart = this._lifeTimeCreation, Je || (this._colorProcessing = {
          process: Ne,
          previousItem: null,
          nextItem: null
        }, this._angularSpeedProcessing = {
          process: re,
          previousItem: null,
          nextItem: null
        }, Pi(this._angularSpeedProcessing, this._colorProcessing), this._directionProcessing = {
          process: Mi,
          previousItem: null,
          nextItem: null
        }, Pi(this._directionProcessing, this._angularSpeedProcessing), this._positionProcessing = {
          process: Ji,
          previousItem: null,
          nextItem: null
        }, Pi(this._positionProcessing, this._directionProcessing), this._gravityProcessing = {
          process: fi,
          previousItem: null,
          nextItem: null
        }, Pi(this._gravityProcessing, this._positionProcessing), this._updateQueueStart = this._colorProcessing), this._isAnimationSheetEnabled = Ke, this._attachImageProcessingConfiguration(null), this._customWrappers = {
          0: new me.b(this._engine)
        }, this._customWrappers[0].effect = ye, this._drawWrappers = [], this._useInstancing = this._engine.getCaps().instancedArrays, this._createIndexBuffer(), this._createVertexBuffers(), this.particleEmitterType = new Re.d, this.updateFunction = ee => {
          this.noiseTexture && (this._noiseTextureSize = this.noiseTexture.getSize(), this.noiseTexture.getContent()?.then((ee => {
            this._noiseTextureData = ee
          })));
          const ie = ee === this._particles;
          for (let He = 0; He < ee.length; He++) {
            const ye = ee[He];
            this._tempScaledUpdateSpeed = this._scaledUpdateSpeed;
            const be = ye.age;
            if (ye.age += this._tempScaledUpdateSpeed, ye.age > ye.lifeTime) {
              const ee = ye.age - be,
                ie = ye.lifeTime - be;
              this._tempScaledUpdateSpeed = ie * this._tempScaledUpdateSpeed / ee, ye.age = ye.lifeTime
            }
            this._ratio = ye.age / ye.lifeTime, ye._properties.directionScale = this._tempScaledUpdateSpeed;
            let Me = this._updateQueueStart;
            for (; Me;) Me.process(ye, this), Me = Me.nextItem;
            if (this._isAnimationSheetEnabled && !Je && ye.updateCellIndex(), ye._inheritParticleInfoToSubEmitters(), ye.age >= ye.lifeTime) {
              if (this._emitFromParticle(ye), ye._properties.attachedSubEmitters) {
                for (const ee of ye._properties.attachedSubEmitters) ee.particleSystem.disposeOnStop = !0, ee.particleSystem.stop();
                ye._properties.attachedSubEmitters = null
              }
              this.recycleParticle(ye), ie && He--
            } else;
          }
        }
      }
      serialize(ee) {
        throw new Error("Method not implemented.")
      }
      clone(ee, ie) {
        throw new Error("Method not implemented.")
      }
      _syncLifeTimeCreation() {
        this.targetStopDuration && this._lifeTimeGradients && this._lifeTimeGradients.length > 0 ? this._lifeTimeCreation.process = Oi : this._lifeTimeCreation.process = di
      }
      _syncStartSizeCreation() {
        this._startSizeGradients && this._startSizeGradients[0] && this.targetStopDuration ? this._startSizeCreation || (this._startSizeCreation = {
          process: zi,
          previousItem: null,
          nextItem: null
        }, Pi(this._startSizeCreation, this._sizeCreation)) : this._startSizeCreation && (Ai(this._startSizeCreation), this._startSizeCreation = null)
      }
      get targetStopDuration() {
        return this._targetStopDuration
      }
      set targetStopDuration(ee) {
        this.targetStopDuration !== ee && (this._targetStopDuration = ee, this._syncLifeTimeCreation(), this._syncStartSizeCreation())
      }
      addLifeTimeGradient(ee, ie, He) {
        return this._lifeTimeGradients || (this._lifeTimeGradients = []), this._addFactorGradient(this._lifeTimeGradients, ee, ie, He), this._syncLifeTimeCreation(), this
      }
      removeLifeTimeGradient(ee) {
        return this._removeFactorGradient(this._lifeTimeGradients, ee), this._syncLifeTimeCreation(), this
      }
      addSizeGradient(ee, ie, He) {
        return this._sizeGradients || (this._sizeGradients = []), 0 === this._sizeGradients.length && (this._sizeCreation.process = Xi, this._sizeGradientProcessing = {
          process: Bi,
          previousItem: null,
          nextItem: null
        }, Di(this._sizeGradientProcessing, this._gravityProcessing)), this._addFactorGradient(this._sizeGradients, ee, ie, He), this
      }
      removeSizeGradient(ee) {
        return this._removeFactorGradient(this._sizeGradients, ee), 0 === this._sizeGradients?.length && (Ai(this._sizeGradientProcessing), this._sizeCreation.process = Ti), this
      }
      addColorRemapGradient(ee, ie, He) {
        return this._colorRemapGradients || (this._colorRemapGradients = []), this._addFactorGradient(this._colorRemapGradients, ee, ie, He), this
      }
      removeColorRemapGradient(ee) {
        return this._removeFactorGradient(this._colorRemapGradients, ee), this
      }
      addAlphaRemapGradient(ee, ie, He) {
        return this._alphaRemapGradients || (this._alphaRemapGradients = []), this._addFactorGradient(this._alphaRemapGradients, ee, ie, He), this
      }
      removeAlphaRemapGradient(ee) {
        return this._removeFactorGradient(this._alphaRemapGradients, ee), this
      }
      addAngularSpeedGradient(ee, ie, He) {
        return this._angularSpeedGradients || (this._angularSpeedGradients = []), 0 === this._angularSpeedGradients.length && (this._angleCreation.process = Zi, this._angularSpeedGradientProcessing = {
          process: Ge,
          previousItem: null,
          nextItem: null
        }, Di(this._angularSpeedGradientProcessing, this._angularSpeedProcessing)), this._addFactorGradient(this._angularSpeedGradients, ee, ie, He), this
      }
      removeAngularSpeedGradient(ee) {
        return this._removeFactorGradient(this._angularSpeedGradients, ee), 0 === this._angularSpeedGradients?.length && (this._angleCreation.process = ti, Ai(this._angularSpeedGradientProcessing)), this
      }
      addVelocityGradient(ee, ie, He) {
        return this._velocityGradients || (this._velocityGradients = []), 0 === this._velocityGradients.length && (this._velocityCreation = {
          process: ii,
          previousItem: null,
          nextItem: null
        }, Pi(this._velocityCreation, this._angleCreation), this._velocityGradientProcessing = {
          process: yi,
          previousItem: null,
          nextItem: null
        }, Di(this._velocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._velocityGradients, ee, ie, He), this
      }
      removeVelocityGradient(ee) {
        return this._removeFactorGradient(this._velocityGradients, ee), 0 === this._velocityGradients?.length && (Ai(this._velocityCreation), Ai(this._velocityGradientProcessing)), this
      }
      addLimitVelocityGradient(ee, ie, He) {
        return this._limitVelocityGradients || (this._limitVelocityGradients = []), 0 === this._limitVelocityGradients.length && (this._limitVelocityCreation = {
          process: Hi,
          previousItem: null,
          nextItem: null
        }, Pi(this._limitVelocityCreation, this._angleCreation), this._limitVelocityGradientProcessing = {
          process: bi,
          previousItem: null,
          nextItem: null
        }, Pi(this._limitVelocityGradientProcessing, this._directionProcessing)), this._addFactorGradient(this._limitVelocityGradients, ee, ie, He), this
      }
      removeLimitVelocityGradient(ee) {
        return this._removeFactorGradient(this._limitVelocityGradients, ee), 0 === this._limitVelocityGradients?.length && (Ai(this._limitVelocityCreation), Ai(this._limitVelocityGradientProcessing)), this
      }
      addDragGradient(ee, ie, He) {
        return this._dragGradients || (this._dragGradients = []), 0 === this._dragGradients.length && (this._dragCreation = {
          process: oi,
          previousItem: null,
          nextItem: null
        }, Di(this._dragCreation, this._colorDeadCreation), this._dragGradientProcessing = {
          process: Ri,
          previousItem: null,
          nextItem: null
        }, Di(this._dragGradientProcessing, this._positionProcessing)), this._addFactorGradient(this._dragGradients, ee, ie, He), this
      }
      removeDragGradient(ee) {
        return this._removeFactorGradient(this._dragGradients, ee), 0 === this._dragGradients?.length && (Ai(this._dragCreation), Ai(this._dragGradientProcessing)), this
      }
      addStartSizeGradient(ee, ie, He) {
        return this._startSizeGradients || (this._startSizeGradients = []), this._addFactorGradient(this._startSizeGradients, ee, ie, He), this._syncStartSizeCreation(), this
      }
      removeStartSizeGradient(ee) {
        return this._removeFactorGradient(this._startSizeGradients, ee), this._syncStartSizeCreation(), this
      }
      _createRampGradientTexture() {
        if (!this._rampGradients || !this._rampGradients.length || this._rampGradientsTexture || !this._scene) return;
        const ee = new Uint8Array(4 * this._rawTextureWidth),
          ie = oe.j.Color3[0];
        for (let He = 0; He < this._rawTextureWidth; He++) {
          const be = He / this._rawTextureWidth;
          ye.k.GetCurrentGradient(be, this._rampGradients, ((ye, be, Me) => {
            oe.c.LerpToRef(ye.color, be.color, Me, ie), ee[4 * He] = 255 * ie.r, ee[4 * He + 1] = 255 * ie.g, ee[4 * He + 2] = 255 * ie.b, ee[4 * He + 3] = 255
          }))
        }
        this._rampGradientsTexture = Ue.c.CreateRGBATexture(ee, this._rawTextureWidth, 1, this._scene, !1, !1, 1)
      }
      getRampGradients() {
        return this._rampGradients
      }
      forceRefreshGradients() {
        this._syncRampGradientTexture()
      }
      _syncRampGradientTexture() {
        this._rampGradients && (this._rampGradients.sort(((ee, ie) => ee.gradient < ie.gradient ? -1 : ee.gradient > ie.gradient ? 1 : 0)), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._createRampGradientTexture())
      }
      addRampGradient(ee, ie) {
        this._rampGradients || (this._rampGradients = []);
        const He = new ye.g(ee, ie);
        return this._rampGradients.push(He), this._syncRampGradientTexture(), this
      }
      removeRampGradient(ee) {
        return this._removeGradientAndTexture(ee, this._rampGradients, this._rampGradientsTexture), this._rampGradientsTexture = null, this._rampGradients && this._rampGradients.length > 0 && this._createRampGradientTexture(), this
      }
      addColorGradient(ee, ie, He) {
        this._colorGradients || (this._colorGradients = []), 0 === this._colorGradients.length && (this._colorCreation.process = Ie, this._colorProcessing.process = he);
        const be = new ye.e(ee, ie, He);
        return this._colorGradients.push(be), this._colorGradients.sort(((ee, ie) => ee.gradient < ie.gradient ? -1 : ee.gradient > ie.gradient ? 1 : 0)), this
      }
      removeColorGradient(ee) {
        if (!this._colorGradients) return this;
        let ie = 0;
        for (const He of this._colorGradients) {
          if (He.gradient === ee) {
            this._colorGradients.splice(ie, 1);
            break
          }
          ie++
        }
        return 0 === this._colorGradients.length && (this._colorCreation.process = je, this._colorProcessing.process = Ne), this
      }
      resetDrawCache() {
        if (this._drawWrappers) {
          for (const ee of this._drawWrappers)
            if (ee)
              for (const ie of ee) ie?.dispose();
          this._drawWrappers = []
        }
      }
      _fetchR(ee, ie, He, ye, be) {
        return be[4 * (((ee = .5 * Math.abs(ee) + .5) * He % He | 0) + ((ie = .5 * Math.abs(ie) + .5) * ye % ye | 0) * He)] / 255
      }
      _reset() {
        this._resetEffect()
      }
      _resetEffect() {
        this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), this._createVertexBuffers()
      }
      _createVertexBuffers() {
        this._vertexBufferSize = this._useInstancing ? 10 : 12, this._isAnimationSheetEnabled && (this._vertexBufferSize += 1), this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexBufferSize += 3), this._useRampGradients && (this._vertexBufferSize += 4);
        const ee = this._engine,
          ie = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData = new Float32Array(this._capacity * ie), this._vertexBuffer = new Ke.b(ee, this._vertexData, !0, ie);
        let He = 0;
        const ye = this._vertexBuffer.createVertexBuffer(Ke.h.PositionKind, He, 3, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Ke.h.PositionKind] = ye, He += 3;
        const be = this._vertexBuffer.createVertexBuffer(Ke.h.ColorKind, He, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[Ke.h.ColorKind] = be, He += 4;
        const Me = this._vertexBuffer.createVertexBuffer("angle", He, 1, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.angle = Me, He += 1;
        const Ue = this._vertexBuffer.createVertexBuffer("size", He, 2, this._vertexBufferSize, this._useInstancing);
        if (this._vertexBuffers.size = Ue, He += 2, this._isAnimationSheetEnabled) {
          const ee = this._vertexBuffer.createVertexBuffer("cellIndex", He, 1, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.cellIndex = ee, He += 1
        }
        if (!this._isBillboardBased || 8 === this.billboardMode || 9 === this.billboardMode) {
          const ee = this._vertexBuffer.createVertexBuffer("direction", He, 3, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.direction = ee, He += 3
        }
        if (this._useRampGradients) {
          const ee = this._vertexBuffer.createVertexBuffer("remapData", He, 4, this._vertexBufferSize, this._useInstancing);
          this._vertexBuffers.remapData = ee, He += 4
        }
        let Fe;
        if (this._useInstancing) {
          const ie = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]);
          this._spriteBuffer = new Ke.b(ee, ie, !1, 2), Fe = this._spriteBuffer.createVertexBuffer("offset", 0, 2)
        } else Fe = this._vertexBuffer.createVertexBuffer("offset", He, 2, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers.offset = Fe, this.resetDrawCache()
      }
      _createIndexBuffer() {
        if (this._useInstancing) return void(this._linesIndexBufferUseInstancing = this._engine.createIndexBuffer(new Uint32Array([0, 1, 1, 3, 3, 2, 2, 0, 0, 3])));
        const ee = [],
          ie = [];
        let He = 0;
        for (let ye = 0; ye < this._capacity; ye++) ee.push(He), ee.push(He + 1), ee.push(He + 2), ee.push(He), ee.push(He + 2), ee.push(He + 3), ie.push(He, He + 1, He + 1, He + 2, He + 2, He + 3, He + 3, He, He, He + 3), He += 4;
        this._indexBuffer = this._engine.createIndexBuffer(ee), this._linesIndexBuffer = this._engine.createIndexBuffer(ie)
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
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        if (!this.targetStopDuration && this._hasTargetStopDurationDependantGradient()) throw "Particle system started with a targetStopDuration dependant gradient (eg. startSizeGradients) but no targetStopDuration set";
        if (ee) return this.startDelay = ee, void setTimeout((() => {
          this.start(0)
        }), ee);
        if (this._started = !0, this._stopped = !1, this._actualFrame = 0, this._preStart(), this._emitRateGradients && (this._emitRateGradients.length > 0 && (this._currentEmitRateGradient = this._emitRateGradients[0], this._currentEmitRate1 = this._currentEmitRateGradient.getFactor(), this._currentEmitRate2 = this._currentEmitRate1), this._emitRateGradients.length > 1 && (this._currentEmitRate2 = this._emitRateGradients[1].getFactor())), this._startSizeGradients && (this._startSizeGradients.length > 0 && (this._currentStartSizeGradient = this._startSizeGradients[0], this._currentStartSize1 = this._currentStartSizeGradient.getFactor(), this._currentStartSize2 = this._currentStartSize1), this._startSizeGradients.length > 1 && (this._currentStartSize2 = this._startSizeGradients[1].getFactor())), this.preWarmCycles) {
          -1 !== this.emitter?.getClassName().indexOf("Mesh") && this.emitter.computeWorldMatrix(!0), this._scene?.updateTransformMatrix();
          const ee = this.noiseTexture;
          if (ee && ee.onGeneratedObservable) ee.onGeneratedObservable.addOnce((() => {
            setTimeout((() => {
              for (let ie = 0; ie < this.preWarmCycles; ie++) this.animate(!0), ee.render()
            }))
          }));
          else
            for (let ie = 0; ie < this.preWarmCycles; ie++) this.animate(!0)
        }
        this.beginAnimationOnStart && this.animations && this.animations.length > 0 && this._scene && this._scene.beginAnimation(this, this.beginAnimationFrom, this.beginAnimationTo, this.beginAnimationLoop), this.onStartedObservable.notifyObservers(this)
      }
      stop() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._stopped || (this.onStoppedObservable.notifyObservers(this), this._stopped = !0, this._postStop(ee))
      }
      _postStop(ee) {}
      reset() {
        this._stockParticles.length = 0, this._particles.length = 0
      }
      _appendParticleVertex(ee, ie, He, ye) {
        let be = ee * this._vertexBufferSize;
        const Ke = Me.j.rf[0].jD(this._scene?.floatingOriginOffset || Me.p.ZeroReadOnly);
        if (this._vertexData[be++] = ie.position.x + this.worldOffset.x - Ke.x, this._vertexData[be++] = ie.position.y + this.worldOffset.y - Ke.y, this._vertexData[be++] = ie.position.z + this.worldOffset.z - Ke.z, this._vertexData[be++] = ie.color.r, this._vertexData[be++] = ie.color.g, this._vertexData[be++] = ie.color.b, this._vertexData[be++] = ie.color.a, this._vertexData[be++] = ie.angle, this._vertexData[be++] = ie.scale.x * ie.size, this._vertexData[be++] = ie.scale.y * ie.size, this._isAnimationSheetEnabled && (this._vertexData[be++] = ie.cellIndex), this._isBillboardBased) 8 !== this.billboardMode && 9 !== this.billboardMode || (this._vertexData[be++] = ie.direction.x, this._vertexData[be++] = ie.direction.y, this._vertexData[be++] = ie.direction.z);
        else if (ie._properties.initialDirection) {
          let ee = ie._properties.initialDirection;
          this.isLocal && (Me.p.TransformNormalToRef(ee, this._emitterWorldMatrix, Me.j.rf[0]), ee = Me.j.rf[0]), 0 === ee.x && 0 === ee.z && (ee.x = .001), this._vertexData[be++] = ee.x, this._vertexData[be++] = ee.y, this._vertexData[be++] = ee.z
        } else {
          let ee = ie.direction;
          this.isLocal && (Me.p.TransformNormalToRef(ee, this._emitterWorldMatrix, Me.j.rf[0]), ee = Me.j.rf[0]), 0 === ee.x && 0 === ee.z && (ee.x = .001), this._vertexData[be++] = ee.x, this._vertexData[be++] = ee.y, this._vertexData[be++] = ee.z
        }
        this._useRampGradients && ie.remapData && (this._vertexData[be++] = ie.remapData.x, this._vertexData[be++] = ie.remapData.y, this._vertexData[be++] = ie.remapData.z, this._vertexData[be++] = ie.remapData.w), this._useInstancing || (this._isAnimationSheetEnabled && (0 === He ? He = this._epsilon : 1 === He && (He = 1 - this._epsilon), 0 === ye ? ye = this._epsilon : 1 === ye && (ye = 1 - this._epsilon)), this._vertexData[be++] = He, this._vertexData[be] = ye)
      }
      _prepareParticle(ee) {}
      _createNewOnes(ee) {
        let ie;
        for (let He = 0; He < ee && this._particles.length !== this._capacity; He++) {
          ie = this._createParticle(), this._particles.push(ie);
          let ee = this._createQueueStart;
          for (; ee;) ee.process(ie, this), ee = ee.nextItem;
          ie._inheritParticleInfoToSubEmitters()
        }
      }
      _update(ee) {
        if (this._alive = this._particles.length > 0, this.emitter.position) {
          const ee = this.emitter;
          this._emitterWorldMatrix = ee.getWorldMatrix()
        } else {
          const ee = this.emitter;
          this._emitterWorldMatrix = Me.b.Translation(ee.x, ee.y, ee.z)
        }
        this._emitterWorldMatrix.invertToRef(this._emitterInverseWorldMatrix), this.updateFunction(this._particles), this._createNewOnes(ee)
      }
      static _GetAttributeNamesOrOptions() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ye = [Ke.h.PositionKind, Ke.h.ColorKind, "angle", "offset", "size"];
        return ee && ye.push("cellIndex"), ie || ye.push("direction"), He && ye.push("remapData"), ye
      }
      static _GetEffectCreationOptions() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ye = ["invView", "view", "projection", "textureMask", "translationPivot", "eyePosition"];
        return (0, le.e)(ye), ee && ye.push("particlesInfos"), ie && ye.push("logarithmicDepthConstant"), He && (ye.push("vFogInfos"), ye.push("vFogColor")), ye
      }
      fillDefines(ee, ie) {
        let He = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._scene && ((0, le.k)(this, this._scene, ee), this.applyFog && this._scene.fogEnabled && 0 !== this._scene.fogMode && ee.push("#define FOG")), this._isAnimationSheetEnabled && ee.push("#define ANIMATESHEET"), this.useLogarithmicDepth && ee.push("#define LOGARITHMICDEPTH"), ie === Oe.BLENDMODE_MULTIPLY && ee.push("#define BLENDMULTIPLYMODE"), this.isLocal && ee.push("#define LOCAL"), this._useRampGradients && ee.push("#define RAMPGRADIENT"), this._isBillboardBased) switch (ee.push("#define BILLBOARD"), this.billboardMode) {
          case 2:
            ee.push("#define BILLBOARDY");
            break;
          case 8:
          case 9:
            ee.push("#define BILLBOARDSTRETCHED"), 9 === this.billboardMode && ee.push("#define BILLBOARDSTRETCHED_LOCAL");
            break;
          case 7:
            ee.push("#define BILLBOARDMODE_ALL")
        }
        He && this._imageProcessingConfiguration && (this._imageProcessingConfiguration.prepareDefines(this._imageProcessingConfigurationDefines), ee.push(this._imageProcessingConfigurationDefines.toString()))
      }
      fillUniformsAttributesAndSamplerNames(ee, ie, He) {
        ie.push(...Vi._GetAttributeNamesOrOptions(this._isAnimationSheetEnabled, this._isBillboardBased && 8 !== this.billboardMode && 9 !== this.billboardMode, this._useRampGradients)), ee.push(...Vi._GetEffectCreationOptions(this._isAnimationSheetEnabled, this.useLogarithmicDepth, this.applyFog)), He.push("diffuseSampler", "rampSampler"), this._imageProcessingConfiguration && ((0, ne.g)(ee, this._imageProcessingConfigurationDefines), (0, ne.d)(He, this._imageProcessingConfigurationDefines))
      }
      _getWrapper(ee) {
        var ie;
        const He = this._getCustomDrawWrapper(ee);
        if (He?.effect) return He;
        const ye = [];
        this.fillDefines(ye, ee);
        const Me = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          Ke = Yi.b._PrepareStringDefines(Me, ye),
          Ue = Ke ? Yi.b.GetConfiguration(Me) : void 0;
        let Fe = this._drawWrappers[Me];
        Fe || (Fe = this._drawWrappers[Me] = [], 0 === Me || this._renderPassObserver || (this._renderPassObserver = ((ie = this._engine)._onReleaseRenderPassObservable ?? (ie._onReleaseRenderPassObservable = new be.d)).add((ee => {
          const ie = this._drawWrappers[ee];
          if (ie) {
            for (const ee of ie) ee?.dispose();
            delete this._drawWrappers[ee]
          }
        }))));
        let Je = Fe[ee];
        Je || (Je = new me.b(this._engine), Je.drawContext && (Je.drawContext.useInstancing = this._useInstancing), Fe[ee] = Je);
        const oe = ye.join("\n");
        if (Je.defines !== oe) {
          const ee = [],
            ie = [],
            He = [];
          this.fillUniformsAttributesAndSamplerNames(ie, ee, He), Ke && (ie.push("cameraInfo", "objectId", "meshBlendTag", "geometryZeroAlphaDiscard"), this.isLocal && void 0 !== Ue?.defines.PREPASS_LOCAL_POSITION_INDEX && ie.push("inverseEmitterWM", "geometryWorldOffset")), Je.setEffect(this._engine.createEffect("particles", {
            attributes: ee,
            uniformsNames: ie,
            samplers: He,
            defines: oe,
            shaderLanguage: this._shaderLanguage,
            multiTarget: Ke,
            indexParameters: Ke ? {
              buffersCount: Ue?._mrtCount ?? 0
            } : void 0
          }, this._engine), oe)
        }
        return Je
      }
      _bindGeometryRendering(ee) {
        const ie = this._engine._features.supportRenderPasses ? this._engine.currentRenderPassId : 0,
          He = Yi.b.GetConfiguration(ie);
        if (!He?._defines) return;
        ee.setFloat("objectId", 0), ee.setInt("meshBlendTag", 0);
        const ye = this._scene?.activeCamera;
        if (ee.setFloat2("cameraInfo", ye?.minZ ?? 0, ye?.maxZ ?? 1), this.isLocal && void 0 !== He.defines.PREPASS_LOCAL_POSITION_INDEX) {
          ee.setMatrix("inverseEmitterWM", this._emitterInverseWorldMatrix);
          const ie = this.worldOffset.subtractToRef(this._scene?.floatingOriginOffset || Me.p.ZeroReadOnly, Me.j.rf[0]);
          ee.setVector3("geometryWorldOffset", ie)
        }
      }
      animate() {
        let ee, ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._started && !this.paused) {
          if (!ie && this._scene) {
            if (!this.isReady()) return;
            if (this._currentRenderId === this._scene.getFrameId()) return;
            this._currentRenderId = this._scene.getFrameId()
          }
          if (this._scaledUpdateSpeed = this.updateSpeed * (ie ? this.preWarmStepOffset : this._scene?.getAnimationRatio() || 1), this.manualEmitCount > -1) ee = this.manualEmitCount, this._newPartsExcess = 0, this.manualEmitCount = 0;
          else {
            const ie = this._calculateEmitRate();
            ee = ie * this._scaledUpdateSpeed | 0, this._newPartsExcess += ie * this._scaledUpdateSpeed - ee
          }
          if (this._newPartsExcess > 1 && (ee += this._newPartsExcess | 0, this._newPartsExcess -= this._newPartsExcess | 0), this._alive = !1, this._stopped ? ee = 0 : (this._actualFrame += this._scaledUpdateSpeed, this.targetStopDuration && this._actualFrame >= this.targetStopDuration && this.stop()), this._update(ee), this._stopped && (this._alive || (this._started = !1, this.onAnimationEnd && this.onAnimationEnd(), this.disposeOnStop && this._scene && this._scene._toBeDisposed.push(this))), !ie) {
            let ee = 0;
            for (let ie = 0; ie < this._particles.length; ie++) {
              const He = this._particles[ie];
              this._appendParticleVertices(ee, He), ee += this._useInstancing ? 1 : 4
            }
            if (this._vertexBuffer)
              if (this._useFixedCapacityForSnapshot) {
                const ee = this._vertexBufferSize * (this._useInstancing ? 1 : 4),
                  ie = this._particles.length;
                ie < this._fixedCapacityHighWaterMark && this._vertexData.fill(0, ie * ee, this._fixedCapacityHighWaterMark * ee), this._fixedCapacityHighWaterMark = ie, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
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
        const ee = this._vertexBufferSize * (this._useInstancing ? 1 : 4);
        this._vertexData.fill(0, 0, this._fixedCapacityHighWaterMark * ee), this._fixedCapacityHighWaterMark = 0, this._vertexBuffer.updateDirectly(this._vertexData, 0, this._capacity)
      }
      _calculateEmitRate() {
        let ee = this.emitRate;
        if (this._emitRateGradients && this._emitRateGradients.length > 0 && this.targetStopDuration) {
          const ie = this._actualFrame / this.targetStopDuration;
          ye.k.GetCurrentGradient(ie, this._emitRateGradients, ((ie, He, ye) => {
            ie !== this._currentEmitRateGradient && (this._currentEmitRate1 = this._currentEmitRate2, this._currentEmitRate2 = He.getFactor(), this._currentEmitRateGradient = ie), ee = (0, qe.Lerp)(this._currentEmitRate1, this._currentEmitRate2, ye)
          }))
        }
        return ee
      }
      _appendParticleVertices(ee, ie) {
        this._appendParticleVertex(ee++, ie, 0, 0), this._useInstancing || (this._appendParticleVertex(ee++, ie, 1, 0), this._appendParticleVertex(ee++, ie, 1, 1), this._appendParticleVertex(ee, ie, 0, 1))
      }
      rebuild() {
        this._engine.getCaps().vertexArrayObject && (this._vertexArrayObject = null), this._createIndexBuffer(), this._spriteBuffer?._rebuild(), this._createVertexBuffers(), this.resetDrawCache()
      }
      async _initShaderSourceAsync() {
        this._engine.isWebGPU && !Vi.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([He.e(655).then((() => He(63852))), He.e(649).then((() => He(63858)))])) : await Promise.all([He.e(638).then((() => He(63861))), Promise.all([He.e(631), He.e(664)]).then((() => He(63864)))]), this._shadersLoaded = !0
      }
      isReady() {
        if (!this._shadersLoaded) return !1;
        if (!this.emitter || this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return !1;
        if (this.blendMode !== Oe.BLENDMODE_MULTIPLYADD) {
          if (!this._getWrapper(this.blendMode).effect.isReady()) return !1
        } else {
          if (!this._getWrapper(Oe.BLENDMODE_MULTIPLY).effect.isReady()) return !1;
          if (!this._getWrapper(Oe.BLENDMODE_ADD).effect.isReady()) return !1
        }
        return !0
      }
      _render(ee) {
        const ie = this._getWrapper(ee),
          He = ie.effect,
          ye = this._engine;
        ye.enableEffect(ie);
        const be = this.defaultViewMatrix ?? this._scene.getViewMatrix();
        He.setTexture("diffuseSampler", this.particleTexture), He.setMatrix("view", be);
        const Ke = this.defaultProjectionMatrix ?? this._scene.getProjectionMatrix();
        if (He.setMatrix("projection", Ke), this._isAnimationSheetEnabled && this.particleTexture) {
          const ee = this.particleTexture.getBaseSize();
          He.setFloat3("particlesInfos", this.spriteCellWidth / ee.width, this.spriteCellHeight / ee.height, this.spriteCellWidth / ee.width)
        }
        if (He.setVector2("translationPivot", this.translationPivot), He.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a), this._isBillboardBased && this._scene) {
          const ee = this._scene.activeCamera;
          He.setVector3("eyePosition", ee.globalPosition)
        }
        this._rampGradientsTexture && (this._rampGradients && this._rampGradients.length || (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), He.setTexture("rampSampler", this._rampGradientsTexture));
        const Ue = He.defines;
        this._scene && ((0, le.f)(He, this, this._scene), this.applyFog && (0, Se.k)(this._scene, void 0, He)), Ue.indexOf("#define BILLBOARDMODE_ALL") >= 0 && (be.invertToRef(Me.j.Matrix[0]), He.setMatrix("invView", Me.j.Matrix[0])), He._multiTarget && this._bindGeometryRendering(He), void 0 !== this._vertexArrayObject ? this._scene?.forceWireframe ? ye.bindBuffers(this._vertexBuffers, this._linesIndexBufferUseInstancing, He) : (this._vertexArrayObject || (this._vertexArrayObject = this._engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, He)), this._engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer)) : this._indexBuffer ? ye.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBuffer : this._indexBuffer, He) : ye.bindBuffers(this._vertexBuffers, this._scene?.forceWireframe ? this._linesIndexBufferUseInstancing : null, He), this.useLogarithmicDepth && this._scene && (0, Se.v)(Ue, He, this._scene), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(He), this._setEngineBasedOnBlendMode(ee), He._multiTarget && Yi.b._BindZeroAlphaDiscard(ye, He);
        let Fe = !1;
        try {
          Yi.b._BindAttachmentsForEffect(ye, He) && (this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.notifyObservers(He), this._useInstancing ? this._scene?.forceWireframe ? ye.drawElementsType(6, 0, 10, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : ye.drawArraysType(7, 0, 4, this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length) : this._scene?.forceWireframe ? ye.drawElementsType(1, 0, 10 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)) : ye.drawElementsType(0, 0, 6 * (this._useFixedCapacityForSnapshot ? this._capacity : this._particles.length)), Fe = !0)
        } finally {
          Yi.b._RestoreAttachments(ye)
        }
        return Fe ? this._particles.length : 0
      }
      render() {
        if (!this.isReady() || !this._particles.length && !this._useFixedCapacityForSnapshot) return 0;
        const ee = this._engine;
        let ie;
        return ee.setState && (ee.setState(!1), this.forceDepthWrite && ee.setDepthWrite(!0)), ie = this.blendMode === Oe.BLENDMODE_MULTIPLYADD ? this._render(Oe.BLENDMODE_MULTIPLY) + this._render(Oe.BLENDMODE_ADD) : this._render(this.blendMode), this._engine.unbindInstanceAttributes(), this._engine.setAlphaMode(0), ie
      }
      _onDispose() {}
      dispose() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._engine._onReleaseRenderPassObservable?.remove(this._renderPassObserver), this._renderPassObserver = null, this.resetDrawCache(), this._vertexBuffer && (this._vertexBuffer.dispose(), this._vertexBuffer = null), this._spriteBuffer && (this._spriteBuffer.dispose(), this._spriteBuffer = null), this._indexBuffer && (this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null), this._linesIndexBuffer && (this._engine._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null), this._linesIndexBufferUseInstancing && (this._engine._releaseBuffer(this._linesIndexBufferUseInstancing), this._linesIndexBufferUseInstancing = null), this._vertexArrayObject && (this._engine.releaseVertexArrayObject(this._vertexArrayObject), this._vertexArrayObject = null), ee && this.particleTexture && (this.particleTexture.dispose(), this.particleTexture = null), ee && this.noiseTexture && (this.noiseTexture.dispose(), this.noiseTexture = null), this._rampGradientsTexture && (this._rampGradientsTexture.dispose(), this._rampGradientsTexture = null), this._onDispose(ie, He), this._onBeforeDrawParticlesObservable && this._onBeforeDrawParticlesObservable.clear(), this._scene) {
          const ee = this._scene.zW.indexOf(this);
          ee > -1 && this._scene.zW.splice(ee, 1), this._scene._activeParticleSystems.dispose()
        }
        this.Bx.notifyObservers(this), this.Bx.clear(), this.onStoppedObservable.clear(), this.onStartedObservable.clear(), this.reset(), this._isDisposed = !0
      }
    }
    Vi.ForceGLSL = !1;
    var ai, ci = He(37949);
    ! function(ee) {
      ee[ee.ATTACHED = 0] = "ATTACHED", ee[ee.END = 1] = "END"
    }(ai || (ai = {}));
    class xi {
      constructor(ee) {
        if (this.particleSystem = ee, this.type = 1, this.inheritDirection = !1, this.inheritedVelocityAmount = 0, !ee.emitter || !ee.emitter.dispose) {
          const ie = (0, ci.c)("BABYLON.AbstractMesh");
          ee.emitter = new ie("SubemitterSystemEmitter", ee.Xx()), ee._disposeEmitterOnDispose = !0
        }
      }
      clone() {
        let ee = this.particleSystem.emitter;
        if (ee) {
          if (ee instanceof Me.p) ee = ee.clone();
          else if (-1 !== ee.getClassName().indexOf("Mesh")) {
            ee = new((0, ci.c)("BABYLON.Mesh"))("", ee.Xx()), ee.isVisible = !1
          }
        } else ee = new Me.p;
        const ie = new xi(this.particleSystem.clone(this.particleSystem.name, ee));
        return ie.particleSystem.name += "Clone", ie.type = this.type, ie.inheritDirection = this.inheritDirection, ie.inheritedVelocityAmount = this.inheritedVelocityAmount, ie.particleSystem._disposeEmitterOnDispose = !0, ie.particleSystem.disposeOnStop = !0, ie
      }
      serialize() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = {};
        return ie.type = this.type, ie.inheritDirection = this.inheritDirection, ie.inheritedVelocityAmount = this.inheritedVelocityAmount, ie.particleSystem = this.particleSystem.serialize(ee), ie
      }
      static _ParseParticleSystem(ee, ie, He) {
        throw (0, xe.l)("ParseParticle")
      }
      static Parse(ee, ie, He) {
        const ye = ee.particleSystem,
          be = new xi(xi._ParseParticleSystem(ye, ie, He, !0));
        return be.type = ee.type, be.inheritDirection = ee.inheritDirection, be.inheritedVelocityAmount = ee.inheritedVelocityAmount, be.particleSystem._isSubEmitter = !0, be
      }
      dispose() {
        this.particleSystem.dispose()
      }
    }
    var Li = He(41e3),
      Ci = He(41141);
    const vi = () => {};
    class ui {
      constructor() {
        this.particlePositionGenerator = vi, this.particleDestinationGenerator = vi, this.particleDirectionGenerator = vi
      }
      startDirectionFunction(ee, ie, He, ye) {
        const be = Me.j.rf[0];
        if (this.particleDirectionGenerator && this.particleDirectionGenerator !== vi) this.particleDirectionGenerator(-1, He, be);
        else if (this.particleDestinationGenerator && this.particleDestinationGenerator !== vi) {
          this.particleDestinationGenerator(-1, He, be);
          const ee = Me.j.rf[1];
          be.subtractToRef(He.position, ee), ee.scaleToRef(1 / He.lifeTime, be)
        } else be.set(0, 0, 0);
        ye ? ie.jD(be) : Me.p.TransformNormalToRef(be, ee, ie)
      }
      startPositionFunction(ee, ie, He, ye) {
        const be = Me.j.rf[0];
        this.particlePositionGenerator && this.particlePositionGenerator !== vi ? this.particlePositionGenerator(-1, He, be) : be.set(0, 0, 0), ye ? ie.jD(be) : Me.p.TransformCoordinatesToRef(be, ee, ie)
      }
      clone() {
        const ee = new ui;
        return ke.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {}
      buildUniformLayout(ee) {}
      getEffectDefines() {
        return "#define CUSTOMEMITTER"
      }
      getClassName() {
        return "CustomParticleEmitter"
      }
      serialize() {
        const ee = {};
        return ee.type = this.getClassName(), ee.particlePositionGenerator = this.particlePositionGenerator, ee.particleDestinationGenerator = this.particleDestinationGenerator, ee
      }
      parse(ee) {
        ee.particlePositionGenerator && (this.particlePositionGenerator = ee.particlePositionGenerator), ee.particleDestinationGenerator && (this.particleDestinationGenerator = ee.particleDestinationGenerator)
      }
    }
    const mi = Me.p.Zero(),
      li = Me.p.Zero(),
      Si = Me.p.Zero();
    class ni {
      constructor() {
        this.strength = 0, this.position = Me.p.Zero()
      }
      _processParticle(ee, ie) {
        this.position.subtractToRef(ee.position, mi);
        const He = mi.lengthSquared() + 1;
        mi.normalize().scaleToRef(this.strength / He, li), li.scaleToRef(ie._tempScaledUpdateSpeed, Si), ee.direction.addInPlace(Si)
      }
      serialize() {
        return {
          position: this.position.Qbe(),
          strength: this.strength
        }
      }
    }
    const ji = ["level", "hasAlpha", "getAlphaFromRGB", "gammaSpace", "coordinatesIndex", "coordinatesMode", "wrapU", "wrapV", "wrapR", "anisotropicFilteringLevel", "uOffset", "vOffset", "uScale", "vScale", "uAng", "vAng", "wAng", "uRotationCenter", "vRotationCenter", "wRotationCenter"];
    class si extends Vi {
      constructor() {
        super(...arguments), this._disposeEmitterOnDispose = !1, this.doNotSerialize = !1, this.canStart = () => !0, this._flowMap = null, this._flowMapUpdate = null, this._source = null, this._blockReference = 0, this.flowMapStrength = 1, this._attractorUpdate = null, this.metadata = null, this._emitFromParticle = ee => {
          if (!this._subEmitters || 0 === this._subEmitters.length) return;
          const ie = Math.floor(Math.random() * this._subEmitters.length);
          for (const He of this._subEmitters[ie])
            if (1 === He.type) {
              const ie = He.clone();
              ee._inheritParticleInfoToSubEmitter(ie), ie.particleSystem._rootParticleSystem = this, this.activeSubSystems.push(ie.particleSystem), ie.particleSystem.start()
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
      set flowMap(ee) {
        this._flowMap !== ee && (this._flowMap = ee, this._flowMapUpdate && (Ai(this._flowMapUpdate), this._flowMapUpdate = null), ee && (this._flowMapUpdate = {
          process: ee => {
            const ie = this.Xx()?.getTransformMatrix();
            this._flowMap._processParticle(ee, this.flowMapStrength * this._tempScaledUpdateSpeed, ie)
          },
          previousItem: null,
          nextItem: null
        }, Pi(this._flowMapUpdate, this._directionProcessing)))
      }
      addAttractor(ee) {
        super.addAttractor(ee), 1 === this._attractors.length && (this._attractorUpdate = {
          process: ee => {
            for (const ie of this._attractors) ie._processParticle(ee, this)
          },
          previousItem: null,
          nextItem: null
        }, Pi(this._attractorUpdate, this._directionProcessing))
      }
      removeAttractor(ee) {
        super.removeAttractor(ee), 0 === this._attractors.length && this._attractorUpdate && Ai(this._attractorUpdate)
      }
      start() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startDelay;
        this.canStart() && super.start(ee)
      }
      _prepareSubEmitterInternalArray() {
        if (this._subEmitters = new Array, this.subEmitters)
          for (const ee of this.subEmitters) ee instanceof si ? this._subEmitters.push([new xi(ee)]) : ee instanceof xi ? this._subEmitters.push([ee]) : ee instanceof Array && this._subEmitters.push(ee)
      }
      _stopSubEmitters() {
        if (this.activeSubSystems) {
          for (const ee of this.activeSubSystems) ee.stop(!0);
          this.activeSubSystems = []
        }
      }
      _removeFromRoot() {
        if (!this._rootParticleSystem) return;
        const ee = this._rootParticleSystem.activeSubSystems.indexOf(this); - 1 !== ee && this._rootParticleSystem.activeSubSystems.splice(ee, 1), this._rootParticleSystem = null
      }
      _preStart() {
        this._prepareSubEmitterInternalArray(), this._subEmitters && 0 != this._subEmitters.length && (this.activeSubSystems = [])
      }
      _postStop(ee) {
        ee && this._stopSubEmitters()
      }
      _prepareParticle(ee) {
        if (this._subEmitters && this._subEmitters.length > 0) {
          const ie = this._subEmitters[Math.floor(Math.random() * this._subEmitters.length)];
          ee._properties.attachedSubEmitters = [];
          for (const He of ie)
            if (0 === He.type) {
              const ie = He.clone();
              ee._properties.attachedSubEmitters.push(ie), ie.particleSystem.start()
            }
        }
      }
      _onDispose() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._removeFromRoot(), this.subEmitters && !this._subEmitters && this._prepareSubEmitterInternalArray(), ee && this.particles)
          for (const He of this.particles)
            if (He._properties.attachedSubEmitters)
              for (let ee = He._properties.attachedSubEmitters.length - 1; ee >= 0; ee -= 1) He._properties.attachedSubEmitters[ee].dispose();
        if (ie && this.activeSubSystems)
          for (let He = this.activeSubSystems.length - 1; He >= 0; He -= 1) this.activeSubSystems[He].dispose();
        if (this._subEmitters && this._subEmitters.length) {
          for (let ee = 0; ee < this._subEmitters.length; ee++)
            for (const ie of this._subEmitters[ee]) ie.dispose();
          this._subEmitters = [], this.subEmitters = []
        }
        this._disposeEmitterOnDispose && this.emitter && this.emitter.dispose && this.emitter.dispose(!0)
      }
      static _Parse(ee, ie, He, ye) {
        let be;
        be = He instanceof Li.e ? null : He;
        const Ke = (0, ci.c)("BABYLON.Texture");
        if (Ke && be)
          if (ee.texture) ie.particleTexture = Ke.Parse(ee.texture, be, ye);
          else if (ee.textureName) {
          const He = ee.textureSettings;
          if (ie.particleTexture = new Ke(ye + ee.textureName, be, !1, void 0 === ee.invertY || ee.invertY, He ? He.samplingMode : void 0), ie.particleTexture.name = ee.textureName, He) {
            const ee = ie.particleTexture;
            for (const ie of ji) void 0 !== He[ie] && (ee[ie] = He[ie])
          }
        }
        if (ee.emitterId || 0 === ee.emitterId || void 0 !== ee.emitter ? (ee.emitterId || 0 === ee.emitterId) && be ? (ie.emitter = be.getLastMeshById(ee.emitterId), ie.emitter || (ie.emitter = Me.p.Zero())) : ie.emitter = Me.p.FromArray(ee.emitter) : ie.emitter = Me.p.Zero(), ie.isLocal = !!ee.isLocal, void 0 !== ee.renderingGroupId && (ie.renderingGroupId = ee.renderingGroupId), void 0 !== ee.isBillboardBased && (ie.isBillboardBased = ee.isBillboardBased), void 0 !== ee.billboardMode && (ie.billboardMode = ee.billboardMode), void 0 !== ee.useLogarithmicDepth && (ie.useLogarithmicDepth = ee.useLogarithmicDepth), ee.animations) {
          for (let He = 0; He < ee.animations.length; He++) {
            const ye = ee.animations[He],
              be = (0, ci.c)("BABYLON.Animation");
            be && ie.animations.push(be.Parse(ye))
          }
          ie.beginAnimationOnStart = ee.beginAnimationOnStart, ie.beginAnimationFrom = ee.beginAnimationFrom, ie.beginAnimationTo = ee.beginAnimationTo, ie.beginAnimationLoop = ee.beginAnimationLoop
        }
        if (ee.autoAnimate && be && be.beginAnimation(ie, ee.autoAnimateFrom, ee.autoAnimateTo, ee.autoAnimateLoop, ee.autoAnimateSpeed || 1), ie.startDelay = 0 | ee.startDelay, ie.minAngularSpeed = ee.minAngularSpeed, ie.maxAngularSpeed = ee.maxAngularSpeed, ie.minSize = ee.minSize, ie.maxSize = ee.maxSize, ee.minScaleX && (ie.minScaleX = ee.minScaleX, ie.maxScaleX = ee.maxScaleX, ie.minScaleY = ee.minScaleY, ie.maxScaleY = ee.maxScaleY), void 0 !== ee.preWarmCycles && (ie.preWarmCycles = ee.preWarmCycles, ie.preWarmStepOffset = ee.preWarmStepOffset), void 0 !== ee.minInitialRotation && (ie.minInitialRotation = ee.minInitialRotation, ie.maxInitialRotation = ee.maxInitialRotation), ie.minLifeTime = ee.minLifeTime, ie.maxLifeTime = ee.maxLifeTime, ie.minEmitPower = ee.minEmitPower, ie.maxEmitPower = ee.maxEmitPower, ie.emitRate = ee.emitRate, ie.gravity = Me.p.FromArray(ee.gravity), ee.noiseStrength && (ie.noiseStrength = Me.p.FromArray(ee.noiseStrength)), ie.color1 = oe.g.FromArray(ee.color1), ie.color2 = oe.g.FromArray(ee.color2), ie.colorDead = oe.g.FromArray(ee.colorDead), ie.updateSpeed = ee.updateSpeed, ie.targetStopDuration = ee.targetStopDuration, ie.blendMode = ee.blendMode, ee.colorGradients)
          for (const Me of ee.colorGradients) ie.addColorGradient(Me.gradient, oe.g.FromArray(Me.color1), Me.color2 ? oe.g.FromArray(Me.color2) : void 0);
        if (ee.rampGradients) {
          for (const He of ee.rampGradients) ie.addRampGradient(He.gradient, oe.c.FromArray(He.color));
          ie.useRampGradients = ee.useRampGradients
        }
        if (ee.colorRemapGradients)
          for (const Me of ee.colorRemapGradients) ie.addColorRemapGradient(Me.gradient, void 0 !== Me.factor1 ? Me.factor1 : Me.factor, Me.factor2);
        if (ee.alphaRemapGradients)
          for (const Me of ee.alphaRemapGradients) ie.addAlphaRemapGradient(Me.gradient, void 0 !== Me.factor1 ? Me.factor1 : Me.factor, Me.factor2);
        if (ee.sizeGradients)
          for (const Me of ee.sizeGradients) ie.addSizeGradient(Me.gradient, void 0 !== Me.factor1 ? Me.factor1 : Me.factor, Me.factor2);
        if (ee.angularSpeedGradients)
          for (const Me of ee.angularSpeedGradients) ie.addAngularSpeedGradient(Me.gradient, void 0 !== Me.factor1 ? Me.factor1 : Me.factor, Me.factor2);
        if (ee.velocityGradients)
          for (const Me of ee.velocityGradients) ie.addVelocityGradient(Me.gradient, void 0 !== Me.factor1 ? Me.factor1 : Me.factor, Me.factor2);
        if (ee.dragGradients)
          for (const Me of ee.dragGradients) ie.addDragGradient(Me.gradient, void 0 !== Me.factor1 ? Me.factor1 : Me.factor, Me.factor2);
        if (ee.emitRateGradients)
          for (const Me of ee.emitRateGradients) ie.addEmitRateGradient(Me.gradient, void 0 !== Me.factor1 ? Me.factor1 : Me.factor, Me.factor2);
        if (ee.startSizeGradients)
          for (const Me of ee.startSizeGradients) ie.addStartSizeGradient(Me.gradient, void 0 !== Me.factor1 ? Me.factor1 : Me.factor, Me.factor2);
        if (ee.lifeTimeGradients)
          for (const Me of ee.lifeTimeGradients) ie.addLifeTimeGradient(Me.gradient, void 0 !== Me.factor1 ? Me.factor1 : Me.factor, Me.factor2);
        if (ee.limitVelocityGradients) {
          for (const He of ee.limitVelocityGradients) ie.addLimitVelocityGradient(He.gradient, void 0 !== He.factor1 ? He.factor1 : He.factor, He.factor2);
          ie.limitVelocityDamping = ee.limitVelocityDamping
        }
        if (ee.noiseTexture && be) {
          const He = (0, ci.c)("BABYLON.ProceduralTexture");
          ie.noiseTexture = He.Parse(ee.noiseTexture, be, ye)
        }
        let Ue;
        if (ee.particleEmitterType) {
          switch (ee.particleEmitterType.type) {
            case "SphereParticleEmitter":
              Ue = new pe;
              break;
            case "SphereDirectedParticleEmitter":
              Ue = new Xe;
              break;
            case "ConeEmitter":
            case "ConeParticleEmitter":
              Ue = new Be;
              break;
            case "ConeDirectedParticleEmitter":
              Ue = new Ee;
              break;
            case "CylinderParticleEmitter":
              Ue = new ze.d;
              break;
            case "CylinderDirectedParticleEmitter":
              Ue = new ze.c;
              break;
            case "HemisphericParticleEmitter":
              Ue = new Te;
              break;
            case "PointParticleEmitter":
              Ue = new fe;
              break;
            case "MeshParticleEmitter":
              Ue = new ge;
              break;
            case "CustomParticleEmitter":
              Ue = new ui;
              break;
            default:
              Ue = new Re.d
          }
          Ue.parse(ee.particleEmitterType, be)
        } else Ue = new Re.d, Ue.parse(ee, be);
        ie.particleEmitterType = Ue, ie.startSpriteCellID = ee.startSpriteCellID, ie.endSpriteCellID = ee.endSpriteCellID, ie.spriteCellLoop = ee.spriteCellLoop ?? !0, ie.spriteCellWidth = ee.spriteCellWidth, ie.spriteCellHeight = ee.spriteCellHeight, ie.spriteCellChangeSpeed = ee.spriteCellChangeSpeed, ie.spriteRandomStartCell = ee.spriteRandomStartCell, ie.disposeOnStop = ee.disposeOnStop ?? !1, ie.manualEmitCount = ee.manualEmitCount ?? -1
      }
      static Parse(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          be = arguments.length > 4 ? arguments[4] : void 0;
        const Ke = ee.name;
        let Ue, Fe, Je = null,
          Re = null;
        if (ie instanceof Li.e ? Ue = ie : (Fe = ie, Ue = Fe.Nf()), ee.customShader && (0, xe.c)(Ue.createEffectForParticles)) {
          Re = ee.customShader;
          const ie = Re.shaderOptions.defines.length > 0 ? Re.shaderOptions.defines.join("\n") : "";
          Je = Ue.createEffectForParticles(Re.shaderPath.fragmentElement, Re.shaderOptions.uniforms, Re.shaderOptions.samplers, ie)
        }
        const ke = new si(Ke, be || ee.bk, ie, Je, ee.isAnimationSheetEnabled);
        if (ke.customShader = Re, ke._rootUrl = He, ee.id && (ke.id = ee.id), ee.subEmitters) {
          ke.subEmitters = [];
          for (const ye of ee.subEmitters) {
            const ee = [];
            for (const be of ye) ee.push(xi.Parse(be, ie, He));
            ke.subEmitters.push(ee)
          }
        }
        if (ee.attractors)
          for (const oe of ee.attractors) {
            const ee = new ni;
            ee.position = Me.p.FromArray(oe.position), ee.strength = oe.strength, ke.addAttractor(ee)
          }
        return si._Parse(ee, ke, ie, He), ee.textureMask && (ke.textureMask = oe.g.FromArray(ee.textureMask)), ee.worldOffset && (ke.worldOffset = Me.p.FromArray(ee.worldOffset)), ee.preventAutoStart && (ke.preventAutoStart = ee.preventAutoStart), ee.metadata && (ke.metadata = ee.metadata), ye || ke.preventAutoStart || ke.start(), ke
      }
      serialize() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = {};
        if (si._Serialize(ie, this, ee), ie.textureMask = this.textureMask.Qbe(), ie.customShader = this.customShader, ie.preventAutoStart = this.preventAutoStart, ie.worldOffset = this.worldOffset.Qbe(), this.metadata && (ie.metadata = this.metadata), this.subEmitters) {
          ie.subEmitters = [], this._subEmitters || this._prepareSubEmitterInternalArray();
          for (const He of this._subEmitters) {
            const ye = [];
            for (const ie of He) ie.particleSystem.doNotSerialize || ye.push(ie.serialize(ee));
            ie.subEmitters.push(ye)
          }
        }
        if (this._attractors && this._attractors.length) {
          ie.attractors = [];
          for (const ee of this._attractors) ie.attractors.push(ee.serialize())
        }
        return ie
      }
      static _Serialize(ee, ie, He) {
        if (ee.name = ie.name, ee.id = ie.id, ee.bk = ie.getCapacity(), ee.disposeOnStop = ie.disposeOnStop, ee.manualEmitCount = ie.manualEmitCount, ie.emitter.position) {
          const He = ie.emitter;
          ee.emitterId = He.id
        } else {
          const He = ie.emitter;
          ee.emitter = He.Qbe()
        }
        if (ie.particleEmitterType && (ee.particleEmitterType = ie.particleEmitterType.serialize()), ie.particleTexture)
          if (He) ee.texture = ie.particleTexture.serialize();
          else {
            const He = ie.particleTexture;
            ee.textureName = ie.particleTexture.name, ee.invertY = !!He._invertY;
            const ye = {};
            for (const ee of ji) ye[ee] = He[ee];
            ye.samplingMode = He.samplingMode, ee.textureSettings = ye
          } ee.isLocal = ie.isLocal, Ci.c.AppendSerializedAnimations(ie, ee), ee.beginAnimationOnStart = ie.beginAnimationOnStart, ee.beginAnimationFrom = ie.beginAnimationFrom, ee.beginAnimationTo = ie.beginAnimationTo, ee.beginAnimationLoop = ie.beginAnimationLoop, ee.startDelay = ie.startDelay, ee.renderingGroupId = ie.renderingGroupId, ee.isBillboardBased = ie.isBillboardBased, ee.billboardMode = ie.billboardMode, ee.minAngularSpeed = ie.minAngularSpeed, ee.maxAngularSpeed = ie.maxAngularSpeed, ee.minSize = ie.minSize, ee.maxSize = ie.maxSize, ee.minScaleX = ie.minScaleX, ee.maxScaleX = ie.maxScaleX, ee.minScaleY = ie.minScaleY, ee.maxScaleY = ie.maxScaleY, ee.minEmitPower = ie.minEmitPower, ee.maxEmitPower = ie.maxEmitPower, ee.minLifeTime = ie.minLifeTime, ee.maxLifeTime = ie.maxLifeTime, ee.emitRate = ie.emitRate, ee.gravity = ie.gravity.Qbe(), ee.noiseStrength = ie.noiseStrength.Qbe(), ee.color1 = ie.color1.Qbe(), ee.color2 = ie.color2.Qbe(), ee.colorDead = ie.colorDead.Qbe(), ee.updateSpeed = ie.updateSpeed, ee.targetStopDuration = ie.targetStopDuration, ee.blendMode = ie.blendMode, ee.preWarmCycles = ie.preWarmCycles, ee.preWarmStepOffset = ie.preWarmStepOffset, ee.minInitialRotation = ie.minInitialRotation, ee.maxInitialRotation = ie.maxInitialRotation, ee.startSpriteCellID = ie.startSpriteCellID, ee.spriteCellLoop = ie.spriteCellLoop, ee.endSpriteCellID = ie.endSpriteCellID, ee.spriteCellChangeSpeed = ie.spriteCellChangeSpeed, ee.spriteCellWidth = ie.spriteCellWidth, ee.spriteCellHeight = ie.spriteCellHeight, ee.spriteRandomStartCell = ie.spriteRandomStartCell, ee.isAnimationSheetEnabled = ie.isAnimationSheetEnabled, ee.useLogarithmicDepth = ie.useLogarithmicDepth;
        const ye = ie.getColorGradients();
        if (ye) {
          ee.colorGradients = [];
          for (const ie of ye) {
            const He = {
              gradient: ie.gradient,
              color1: ie.color1.Qbe()
            };
            ie.color2 ? He.color2 = ie.color2.Qbe() : He.color2 = ie.color1.Qbe(), ee.colorGradients.push(He)
          }
        }
        const be = ie.getRampGradients();
        if (be) {
          ee.rampGradients = [];
          for (const ie of be) {
            const He = {
              gradient: ie.gradient,
              color: ie.color.Qbe()
            };
            ee.rampGradients.push(He)
          }
          ee.useRampGradients = ie.useRampGradients
        }
        const Me = ie.getColorRemapGradients();
        if (Me) {
          ee.colorRemapGradients = [];
          for (const ie of Me) {
            const He = {
              gradient: ie.gradient,
              factor1: ie.factor1
            };
            void 0 !== ie.factor2 ? He.factor2 = ie.factor2 : He.factor2 = ie.factor1, ee.colorRemapGradients.push(He)
          }
        }
        const Ke = ie.getAlphaRemapGradients();
        if (Ke) {
          ee.alphaRemapGradients = [];
          for (const ie of Ke) {
            const He = {
              gradient: ie.gradient,
              factor1: ie.factor1
            };
            void 0 !== ie.factor2 ? He.factor2 = ie.factor2 : He.factor2 = ie.factor1, ee.alphaRemapGradients.push(He)
          }
        }
        const Ue = ie.getSizeGradients();
        if (Ue) {
          ee.sizeGradients = [];
          for (const ie of Ue) {
            const He = {
              gradient: ie.gradient,
              factor1: ie.factor1
            };
            void 0 !== ie.factor2 ? He.factor2 = ie.factor2 : He.factor2 = ie.factor1, ee.sizeGradients.push(He)
          }
        }
        const Fe = ie.getAngularSpeedGradients();
        if (Fe) {
          ee.angularSpeedGradients = [];
          for (const ie of Fe) {
            const He = {
              gradient: ie.gradient,
              factor1: ie.factor1
            };
            void 0 !== ie.factor2 ? He.factor2 = ie.factor2 : He.factor2 = ie.factor1, ee.angularSpeedGradients.push(He)
          }
        }
        const Je = ie.getVelocityGradients();
        if (Je) {
          ee.velocityGradients = [];
          for (const ie of Je) {
            const He = {
              gradient: ie.gradient,
              factor1: ie.factor1
            };
            void 0 !== ie.factor2 ? He.factor2 = ie.factor2 : He.factor2 = ie.factor1, ee.velocityGradients.push(He)
          }
        }
        const oe = ie.getDragGradients();
        if (oe) {
          ee.dragGradients = [];
          for (const ie of oe) {
            const He = {
              gradient: ie.gradient,
              factor1: ie.factor1
            };
            void 0 !== ie.factor2 ? He.factor2 = ie.factor2 : He.factor2 = ie.factor1, ee.dragGradients.push(He)
          }
        }
        const Re = ie.getEmitRateGradients();
        if (Re) {
          ee.emitRateGradients = [];
          for (const ie of Re) {
            const He = {
              gradient: ie.gradient,
              factor1: ie.factor1
            };
            void 0 !== ie.factor2 ? He.factor2 = ie.factor2 : He.factor2 = ie.factor1, ee.emitRateGradients.push(He)
          }
        }
        const ke = ie.getStartSizeGradients();
        if (ke) {
          ee.startSizeGradients = [];
          for (const ie of ke) {
            const He = {
              gradient: ie.gradient,
              factor1: ie.factor1
            };
            void 0 !== ie.factor2 ? He.factor2 = ie.factor2 : He.factor2 = ie.factor1, ee.startSizeGradients.push(He)
          }
        }
        const qe = ie.getLifeTimeGradients();
        if (qe) {
          ee.lifeTimeGradients = [];
          for (const ie of qe) {
            const He = {
              gradient: ie.gradient,
              factor1: ie.factor1
            };
            void 0 !== ie.factor2 ? He.factor2 = ie.factor2 : He.factor2 = ie.factor1, ee.lifeTimeGradients.push(He)
          }
        }
        const fe = ie.getLimitVelocityGradients();
        if (fe) {
          ee.limitVelocityGradients = [];
          for (const ie of fe) {
            const He = {
              gradient: ie.gradient,
              factor1: ie.factor1
            };
            void 0 !== ie.factor2 ? He.factor2 = ie.factor2 : He.factor2 = ie.factor1, ee.limitVelocityGradients.push(He)
          }
          ee.limitVelocityDamping = ie.limitVelocityDamping
        }
        ie.noiseTexture && (ee.noiseTexture = ie.noiseTexture.serialize())
      }
      clone(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ye = {
          ...this._customWrappers
        };
        let be = null;
        const Me = this._engine;
        if ((0, xe.c)(Me.createEffectForParticles) && null != this.customShader) {
          be = this.customShader;
          const ee = be.shaderOptions.defines.length > 0 ? be.shaderOptions.defines.join("\n") : "",
            ie = Me.createEffectForParticles(be.shaderPath.fragmentElement, be.shaderOptions.uniforms, be.shaderOptions.samplers, ee);
          ye[0] ? ye[0].effect = ie : this.setCustomEffect(ie, 0)
        }
        const Ke = this.serialize(He),
          Ue = !1 === He && this.particleTexture ? this.particleTexture.clone() : null;
        Ue && (Ke.textureName = void 0);
        const Fe = si.Parse(Ke, this._scene || this._engine, this._rootUrl);
        return Fe.name = ee, Fe.customShader = be, Fe._customWrappers = ye, Ue && (Fe.particleTexture = Ue), void 0 === ie && (ie = this.emitter), this.noiseTexture && (Fe.noiseTexture = this.noiseTexture.clone()), Fe.emitter = ie, this.preventAutoStart || Fe.start(), Fe
      }
    }
    si.BILLBOARDMODE_Y = 2, si.BILLBOARDMODE_ALL = 7, si.BILLBOARDMODE_STRETCHED = 8, si.BILLBOARDMODE_STRETCHED_LOCAL = 9;
    let Ii = !1;
    Ii || (Ii = !0, xi._ParseParticleSystem = si.Parse)
  },
  44830: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      SkyMaterial: () => Be,
      _MaxColorValueForRenderTarget: () => ze
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(41141),
      Ke = He(37913),
      Ue = He(41406),
      Fe = He(41472),
      Je = He(44789),
      oe = He(42233),
      Re = He(41195),
      ke = He(37949),
      qe = He(41497),
      fe = He(41481),
      Te = He(41458),
      pe = He(41451);
    class Xe extends Ue.e {
      constructor() {
        super(), this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.DITHER = !1, this.LOGARITHMICDEPTH = !1, this.SKY_RAW_HDR_OUTPUT = !1, this.rebuild()
      }
    }

    function ze(ee) {
      switch (ee) {
        case Je.c.TEXTURETYPE_HALF_FLOAT:
          return 65504;
        case Je.c.TEXTURETYPE_FLOAT:
          return 3e38;
        default:
          return 1
      }
    }
    let Be = (() => {
      var ee;
      let ie, Ue, Je, ke, Be, Ee, ge, Oe, de, We, te, Ze, we, De, Pe, Ae = Fe.c,
        Ye = [],
        Ve = [],
        ae = [],
        ce = [],
        xe = [],
        Le = [],
        Ce = [],
        ve = [],
        ue = [],
        me = [],
        le = [],
        Se = [],
        ne = [],
        je = [],
        se = [],
        Ie = [],
        he = [],
        Ne = [],
        Ge = [],
        re = [],
        Qe = [],
        ei = [],
        ii = [],
        Hi = [],
        yi = [],
        bi = [],
        Mi = [],
        Ki = [],
        Ui = [],
        Fi = [];
      return ee = class extends Ae {
        constructor(ee, ie) {
          super(ee, ie, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), this.luminance = (0, ye.l)(this, Ye, 1), this.turbidity = ((0, ye.l)(this, Ve), (0, ye.l)(this, ae, 10)), this.rayleigh = ((0, ye.l)(this, ce), (0, ye.l)(this, xe, 2)), this.mieCoefficient = ((0, ye.l)(this, Le), (0, ye.l)(this, Ce, .005)), this.mieDirectionalG = ((0, ye.l)(this, ve), (0, ye.l)(this, ue, .8)), this.distance = ((0, ye.l)(this, me), (0, ye.l)(this, le, 500)), this.inclination = ((0, ye.l)(this, Se), (0, ye.l)(this, ne, .49)), this.azimuth = ((0, ye.l)(this, je), (0, ye.l)(this, se, .25)), this.sunPosition = ((0, ye.l)(this, Ie), (0, ye.l)(this, he, new Ke.rf(0, 100, 0))), this.useSunPosition = ((0, ye.l)(this, Ne), (0, ye.l)(this, Ge, !1)), this.cameraOffset = ((0, ye.l)(this, re), (0, ye.l)(this, Qe, Ke.rf.Zero())), this.up = ((0, ye.l)(this, ei), (0, ye.l)(this, ii, Ke.rf.Up())), this.dithering = ((0, ye.l)(this, Hi), (0, ye.l)(this, yi, !1)), this.rawHdrOutput = ((0, ye.l)(this, bi), (0, ye.l)(this, Mi, !1)), this.cloudiness = ((0, ye.l)(this, Ki), (0, ye.l)(this, Ui, 0)), this._cameraPosition = ((0, ye.l)(this, Fi), Ke.rf.Zero()), this._skyOrientation = new Ke.Quaternion
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
        isReadyForSubMesh(ie, He) {
          const ye = He._drawWrapper;
          if (this.isFrozen && ye.effect && ye._wasPreviouslyReady) return !0;
          He.materialDefines || (He.materialDefines = new Xe);
          const be = He.materialDefines,
            Me = this.Xx();
          if (this._isReadyForSubMesh(He)) return !0;
          if ((0, pe._)(ie, Me, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, !1, be, void 0, void 0, void 0, this._isVertexOutputInvariant), (0, pe.T)(ie, be, !0, !1), be.IMAGEPROCESSINGPOSTPROCESS !== Me.imageProcessingConfiguration.applyByPostProcess && be.markAsMiscDirty(), be.DITHER !== this.dithering && be.markAsMiscDirty(), be.SKY_RAW_HDR_OUTPUT !== this.rawHdrOutput && be.markAsMiscDirty(), be.isDirty) {
            be.markAsProcessed(), Me.resetCachedMaterial();
            const ie = new fe.e;
            be.FOG && ie.addFallback(1, "FOG"), be.IMAGEPROCESSINGPOSTPROCESS = Me.imageProcessingConfiguration.applyByPostProcess, be.DITHER = this.dithering, be.SKY_RAW_HDR_OUTPUT = this.rawHdrOutput;
            const ye = [oe.f.PositionKind];
            be.VERTEXCOLOR && ye.push(oe.f.ColorKind);
            const Ke = "sky",
              Ue = ["world", "viewProjection", "view", "vFogInfos", "vFogColor", "logarithmicDepthConstant", "pointSize", "luminance", "turbidity", "rayleigh", "mieCoefficient", "mieDirectionalG", "sunPosition", "cameraPosition", "cameraOffset", "up", "cloudiness", "maxColorValue"];
            (0, Te.e)(Ue);
            const Fe = be.toString();
            He.setEffect(Me.Nf().createEffect(Ke, {
              attributes: ye,
              uniformsNames: Ue,
              uniformBuffersNames: [],
              samplers: [],
              defines: Fe,
              fallbacks: ie,
              onCompiled: this.onCompiled,
              onError: this.onError,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: ee._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Me.Nf()), be, this._materialContext)
          }
          return !(!He.effect || !He.effect.isReady()) && (be._renderId = Me.getRenderId(), ye._wasPreviouslyReady = !0, !0)
        }
        bindForSubMesh(ee, ie, He) {
          const ye = this.Xx(),
            be = He.materialDefines;
          if (!be) return;
          const Me = He.effect;
          if (!Me) return;
          this._activeEffect = Me, this.bindOnlyWorldMatrix(ee), this._activeEffect.setMatrix("viewProjection", ye.getTransformMatrix()), this._mustRebind(ye, Me, He) && ((0, Te.f)(Me, this, ye), this.pointsCloud && this._activeEffect.setFloat("pointSize", this.pointSize), this._useLogarithmicDepth && (0, pe.v)(be, Me, ye)), ye.fogEnabled && ie.applyFog && ye.fogMode !== Re.b.FOGMODE_NONE && this._activeEffect.setMatrix("view", ye.getViewMatrix()), (0, pe.k)(ye, ie, this._activeEffect, this.rawHdrOutput);
          const Ue = ye.activeCamera;
          if (Ue) {
            const ee = Ue.getWorldMatrix();
            this._cameraPosition.x = ee.m[12], this._cameraPosition.y = ee.m[13], this._cameraPosition.z = ee.m[14], this._activeEffect.setVector3("cameraPosition", Ke.TmpVectors.rf[0].jD(this._cameraPosition).XMe(ye.floatingOriginOffset))
          }
          if (this._activeEffect.setVector3("cameraOffset", this.cameraOffset), this._activeEffect.setVector3("up", this.up), (this.rawHdrOutput || this.luminance > 0) && this._activeEffect.setFloat("luminance", this.luminance), this._activeEffect.setFloat("turbidity", this.turbidity), this._activeEffect.setFloat("rayleigh", this.rayleigh), this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient), this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG), this._activeEffect.setFloat("cloudiness", this.cloudiness), this.rawHdrOutput) {
            const ee = ye.Nf()._currentRenderTarget;
            this._activeEffect.setFloat("maxColorValue", ze(ee?.texture?.type))
          }
          if (!this.useSunPosition) {
            const ee = Math.PI * (this.inclination - .5),
              ie = 2 * Math.PI * (this.azimuth - .5);
            this.sunPosition.x = this.distance * Math.cos(ie) * Math.cos(ee), this.sunPosition.y = this.distance * Math.sin(-ee), this.sunPosition.z = this.distance * Math.sin(ie) * Math.cos(ee), Ke.Quaternion.FromUnitVectorsToRef(Ke.rf.UpReadOnly, this.up, this._skyOrientation), this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition)
          }
          this._activeEffect.setVector3("sunPosition", this.sunPosition), this._afterBind(ie, this._activeEffect, He)
        }
        getAnimatables() {
          return []
        }
        dispose(ee) {
          super.dispose(ee)
        }
        clone(ie) {
          return Me.c.Clone((() => new ee(ie, this.Xx())), this)
        }
        serialize() {
          const ee = super.serialize();
          return ee.customType = "BABYLON.SkyMaterial", ee
        }
        getClassName() {
          return "SkyMaterial"
        }
        static Parse(ie, He, ye) {
          return Me.c.Parse((() => new ee(ie.name, He)), ie, He, ye)
        }
      }, (() => {
        const He = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ae[Symbol.metadata] ?? null) : void 0;
        ie = [(0, be.R)()], Ue = [(0, be.R)()], Je = [(0, be.R)()], ke = [(0, be.R)()], Be = [(0, be.R)()], Ee = [(0, be.R)()], ge = [(0, be.R)()], Oe = [(0, be.R)()], de = [(0, be.P)()], We = [(0, be.R)()], te = [(0, be.P)()], Ze = [(0, be.P)()], we = [(0, be.R)()], De = [(0, be.R)()], Pe = [(0, be.R)()], (0, ye.i)(null, null, ie, {
          kind: "field",
          name: "luminance",
          static: !1,
          private: !1,
          access: {
            has: ee => "luminance" in ee,
            get: ee => ee.luminance,
            set: (ee, ie) => {
              ee.luminance = ie
            }
          },
          metadata: He
        }, Ye, Ve), (0, ye.i)(null, null, Ue, {
          kind: "field",
          name: "turbidity",
          static: !1,
          private: !1,
          access: {
            has: ee => "turbidity" in ee,
            get: ee => ee.turbidity,
            set: (ee, ie) => {
              ee.turbidity = ie
            }
          },
          metadata: He
        }, ae, ce), (0, ye.i)(null, null, Je, {
          kind: "field",
          name: "rayleigh",
          static: !1,
          private: !1,
          access: {
            has: ee => "rayleigh" in ee,
            get: ee => ee.rayleigh,
            set: (ee, ie) => {
              ee.rayleigh = ie
            }
          },
          metadata: He
        }, xe, Le), (0, ye.i)(null, null, ke, {
          kind: "field",
          name: "mieCoefficient",
          static: !1,
          private: !1,
          access: {
            has: ee => "mieCoefficient" in ee,
            get: ee => ee.mieCoefficient,
            set: (ee, ie) => {
              ee.mieCoefficient = ie
            }
          },
          metadata: He
        }, Ce, ve), (0, ye.i)(null, null, Be, {
          kind: "field",
          name: "mieDirectionalG",
          static: !1,
          private: !1,
          access: {
            has: ee => "mieDirectionalG" in ee,
            get: ee => ee.mieDirectionalG,
            set: (ee, ie) => {
              ee.mieDirectionalG = ie
            }
          },
          metadata: He
        }, ue, me), (0, ye.i)(null, null, Ee, {
          kind: "field",
          name: "distance",
          static: !1,
          private: !1,
          access: {
            has: ee => "distance" in ee,
            get: ee => ee.distance,
            set: (ee, ie) => {
              ee.distance = ie
            }
          },
          metadata: He
        }, le, Se), (0, ye.i)(null, null, ge, {
          kind: "field",
          name: "inclination",
          static: !1,
          private: !1,
          access: {
            has: ee => "inclination" in ee,
            get: ee => ee.inclination,
            set: (ee, ie) => {
              ee.inclination = ie
            }
          },
          metadata: He
        }, ne, je), (0, ye.i)(null, null, Oe, {
          kind: "field",
          name: "azimuth",
          static: !1,
          private: !1,
          access: {
            has: ee => "azimuth" in ee,
            get: ee => ee.azimuth,
            set: (ee, ie) => {
              ee.azimuth = ie
            }
          },
          metadata: He
        }, se, Ie), (0, ye.i)(null, null, de, {
          kind: "field",
          name: "sunPosition",
          static: !1,
          private: !1,
          access: {
            has: ee => "sunPosition" in ee,
            get: ee => ee.sunPosition,
            set: (ee, ie) => {
              ee.sunPosition = ie
            }
          },
          metadata: He
        }, he, Ne), (0, ye.i)(null, null, We, {
          kind: "field",
          name: "useSunPosition",
          static: !1,
          private: !1,
          access: {
            has: ee => "useSunPosition" in ee,
            get: ee => ee.useSunPosition,
            set: (ee, ie) => {
              ee.useSunPosition = ie
            }
          },
          metadata: He
        }, Ge, re), (0, ye.i)(null, null, te, {
          kind: "field",
          name: "cameraOffset",
          static: !1,
          private: !1,
          access: {
            has: ee => "cameraOffset" in ee,
            get: ee => ee.cameraOffset,
            set: (ee, ie) => {
              ee.cameraOffset = ie
            }
          },
          metadata: He
        }, Qe, ei), (0, ye.i)(null, null, Ze, {
          kind: "field",
          name: "up",
          static: !1,
          private: !1,
          access: {
            has: ee => "up" in ee,
            get: ee => ee.up,
            set: (ee, ie) => {
              ee.up = ie
            }
          },
          metadata: He
        }, ii, Hi), (0, ye.i)(null, null, we, {
          kind: "field",
          name: "dithering",
          static: !1,
          private: !1,
          access: {
            has: ee => "dithering" in ee,
            get: ee => ee.dithering,
            set: (ee, ie) => {
              ee.dithering = ie
            }
          },
          metadata: He
        }, yi, bi), (0, ye.i)(null, null, De, {
          kind: "field",
          name: "rawHdrOutput",
          static: !1,
          private: !1,
          access: {
            has: ee => "rawHdrOutput" in ee,
            get: ee => ee.rawHdrOutput,
            set: (ee, ie) => {
              ee.rawHdrOutput = ie
            }
          },
          metadata: He
        }, Mi, Ki), (0, ye.i)(null, null, Pe, {
          kind: "field",
          name: "cloudiness",
          static: !1,
          private: !1,
          access: {
            has: ee => "cloudiness" in ee,
            get: ee => ee.cloudiness,
            set: (ee, ie) => {
              ee.cloudiness = ie
            }
          },
          metadata: He
        }, Ui, Fi), He && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: He
        })
      })(), ee._ShaderLoader = new qe.d((() => [He.e(639).then((() => He(63872))), He.e(632).then((() => He(63874)))]), (() => [He.e(656).then((() => He(63880))), He.e(650).then((() => He(63883)))])), ee
    })();
    (0, ke.e)("BABYLON.SkyMaterial", Be)
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);