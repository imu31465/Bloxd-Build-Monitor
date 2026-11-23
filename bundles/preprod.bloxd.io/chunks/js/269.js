export const id = 269;
export const ids = [269];
export const modules = {
  40412: (CC, zC, ZC) => {
    ZC.d(zC, {
      $: () => Vz,
      $d: () => gz,
      $e: () => BZ,
      $f: () => cZ,
      Ab: () => rC,
      Ac: () => RC,
      Ad: () => SC,
      Be: () => ZQ,
      Bf: () => hZ,
      Cc: () => Fz,
      Cg: () => NZ,
      D: () => DC,
      Dd: () => gC,
      Eb: () => ZZ,
      Ee: () => PZ,
      Ef: () => eZ,
      Eg: () => gZ,
      Fd: () => bZ,
      Gb: () => zZ,
      Gc: () => qC,
      H: () => yz,
      He: () => xZ,
      Hf: () => QQ,
      Jd: () => nZ,
      K: () => NC,
      Kb: () => Mz,
      Kc: () => Dz,
      Kf: () => kZ,
      L: () => wz,
      Le: () => MZ,
      Lf: () => CQ,
      Mf: () => OZ,
      N: () => hC,
      Nd: () => JC,
      Ob: () => fz,
      Oc: () => TC,
      Of: () => VZ,
      Pe: () => yZ,
      Pf: () => zQ,
      Q: () => YC,
      Qf: () => LZ,
      R: () => KC,
      Rb: () => wC,
      Rc: () => jC,
      Rd: () => EC,
      S: () => az,
      Sb: () => PC,
      Te: () => DZ,
      U: () => MC,
      Uc: () => Lz,
      Uf: () => JZ,
      Vd: () => HC,
      Ve: () => HZ,
      W: () => tC,
      Wb: () => Gz,
      Wc: () => Qz,
      We: () => lZ,
      Wf: () => pZ,
      Xc: () => Wz,
      Xe: () => EZ,
      Xf: () => UZ,
      Yd: () => XC,
      Z: () => bQ,
      _b: () => BC,
      _c: () => eC,
      _d: () => lC,
      ac: () => CZ,
      b: () => bC,
      cb: () => UC,
      cd: () => qz,
      ce: () => oC,
      dc: () => dC,
      df: () => mZ,
      dg: () => uZ,
      eb: () => Oz,
      ec: () => kC,
      f: () => nC,
      fe: () => FC,
      fg: () => RZ,
      g: () => IC,
      gd: () => oz,
      ge: () => pz,
      hb: () => kz,
      hc: () => OC,
      he: () => jz,
      hf: () => rZ,
      hg: () => SZ,
      ie: () => sC,
      j: () => cC,
      kc: () => zz,
      kd: () => Zz,
      kf: () => dZ,
      kg: () => XZ,
      l: () => qZ,
      lb: () => LC,
      le: () => Nz,
      mb: () => Bz,
      me: () => Uz,
      mf: () => aZ,
      nc: () => Sz,
      nd: () => vC,
      ne: () => sz,
      oc: () => yC,
      od: () => AC,
      oe: () => Cz,
      of: () => TZ,
      og: () => IZ,
      p: () => fZ,
      pf: () => sZ,
      qb: () => uC,
      qd: () => QC,
      rc: () => mC,
      rd: () => iC,
      re: () => VC,
      rf: () => wQ,
      s: () => fC,
      sg: () => AZ,
      tb: () => QZ,
      td: () => nz,
      te: () => aC,
      ue: () => xC,
      uf: () => iZ,
      ug: () => jZ,
      vc: () => bz,
      ve: () => WC,
      w: () => Tz,
      wf: () => KZ,
      xb: () => wZ,
      xc: () => GC,
      xd: () => pC,
      xe: () => oZ,
      yf: () => vZ,
      yg: () => GZ,
      z: () => tz,
      zf: () => YZ,
      zg: () => tZ
    });
    const QC = -2147483648,
      wC = 12,
      bC = 12,
      nC = 4095,
      fC = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      oC = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      qC = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      FC = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      WC = {
        Alive: 16
      },
      NC = 32,
      MC = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      gC = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      SC = 4294967295,
      pC = 0,
      PC = 4294967295,
      GC = 4,
      RC = 123,
      AC = -2147483648,
      xC = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      JC = 51,
      IC = 5,
      iC = 4294967295,
      vC = 4294967295,
      eC = 128,
      hC = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      KC = 16,
      YC = 255,
      dC = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      mC = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      HC = {
        Hotbar: 256,
        Drop: 257
      },
      EC = {
        Down: 1,
        Next: 2,
        Stack: 4
      },
      lC = {
        Rate: 0,
        Gyro: 1
      },
      XC = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      cC = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      uC = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      rC = {
        LookPointed: 1,
        Held: 2
      },
      sC = 3,
      TC = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      aC = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      tC = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      DC = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      jC = {
        Stackable: 1
      },
      yC = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      LC = {
        Detail: 1,
        RoomForOne: 2
      },
      UC = {
        HaveIngredients: 1,
        Listed: 2
      },
      BC = {
        HasOpts: 1
      },
      OC = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      kC = {
        Up: 1,
        Down: 2
      },
      VC = {
        TwoD: 1,
        Loop: 2
      },
      Cz = {
        StopAfter: 1
      },
      zz = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      Zz = {
        Pose: 1,
        Visible: 2
      },
      Qz = 255,
      wz = 65535,
      bz = 255,
      nz = 65535,
      fz = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      oz = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      qz = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      Fz = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      Wz = 4294967295,
      Nz = 4294967295,
      Mz = 255,
      gz = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      Sz = {
        critical: 123
      },
      pz = 4294967295,
      Pz = {
        BYTES: 4,
        ZN: (CC, zC) => CC.getUint32(zC + 0, !0)
      },
      Gz = {
        BYTES: 12,
        serverId: (CC, zC) => CC.getInt32(zC + 0, !0),
        index: (CC, zC) => CC.getUint32(zC + 4, !0),
        kind: (CC, zC) => CC.getUint16(zC + 8, !0)
      },
      Rz = {
        BYTES: 20,
        pos: (CC, zC, ZC) => CC.getInt32(zC + 0 + 4 * ZC, !0),
        actual: (CC, zC) => CC.getUint32(zC + 12, !0),
        dataLen: (CC, zC) => CC.getUint32(zC + 16, !0)
      },
      Az = {
        BYTES: 20,
        what: (CC, zC) => CC.getUint8(zC + 0),
        value: (CC, zC) => CC.getInt16(zC + 2, !0),
        pos: (CC, zC, ZC) => CC.getInt32(zC + 4 + 4 * ZC, !0),
        block: (CC, zC) => CC.getUint32(zC + 16, !0)
      },
      xz = {
        BYTES: 4,
        item: (CC, zC) => CC.getUint16(zC + 0, !0),
        slot: (CC, zC) => CC.getUint8(zC + 2)
      },
      Jz = {
        BYTES: 16,
        target: (CC, zC) => CC.getInt32(zC + 0, !0),
        damage: (CC, zC) => CC.getFloat32(zC + 4, !0),
        distance: (CC, zC) => CC.getFloat32(zC + 8, !0),
        crit: (CC, zC) => CC.getUint8(zC + 12)
      },
      Iz = {
        BYTES: 4,
        slot: (CC, zC) => CC.getUint16(zC + 0, !0)
      },
      iz = {
        BYTES: 20,
        what: (CC, zC) => CC.getUint8(zC + 0),
        value: (CC, zC) => CC.getInt16(zC + 2, !0),
        pos: (CC, zC, ZC) => CC.getInt32(zC + 4 + 4 * ZC, !0),
        block: (CC, zC) => CC.getUint32(zC + 16, !0)
      },
      vz = {
        BYTES: 12,
        serverId: (CC, zC) => CC.getInt32(zC + 0, !0),
        index: (CC, zC) => CC.getUint32(zC + 4, !0),
        what: (CC, zC) => CC.getUint16(zC + 8, !0)
      },
      ez = {
        BYTES: 24,
        cx: (CC, zC) => CC.getInt32(zC + 0, !0),
        cy: (CC, zC) => CC.getInt32(zC + 4, !0),
        cz: (CC, zC) => CC.getInt32(zC + 8, !0),
        slot: (CC, zC) => CC.getUint32(zC + 12, !0),
        generation: (CC, zC) => CC.getUint32(zC + 16, !0),
        flags: (CC, zC) => CC.getUint32(zC + 20, !0)
      },
      hz = {
        BYTES: 44,
        pos: (CC, zC, ZC) => CC.getFloat64(zC + 0 + 8 * ZC, !0),
        sound: (CC, zC) => CC.getUint16(zC + 24, !0),
        flags: (CC, zC) => CC.getUint16(zC + 26, !0),
        handle: (CC, zC) => CC.getUint32(zC + 28, !0),
        volume: (CC, zC) => CC.getFloat32(zC + 32, !0),
        rate: (CC, zC) => CC.getFloat32(zC + 36, !0),
        refDist: (CC, zC) => CC.getFloat32(zC + 40, !0)
      },
      Kz = {
        BYTES: 28,
        pos: (CC, zC, ZC) => CC.getFloat64(zC + 0 + 8 * ZC, !0),
        handle: (CC, zC) => CC.getUint32(zC + 24, !0)
      },
      Yz = {
        BYTES: 16,
        handle: (CC, zC) => CC.getUint32(zC + 0, !0),
        volume: (CC, zC) => CC.getFloat32(zC + 4, !0),
        rate: (CC, zC) => CC.getFloat32(zC + 8, !0),
        refDist: (CC, zC) => CC.getFloat32(zC + 12, !0)
      },
      dz = {
        BYTES: 12,
        handle: (CC, zC) => CC.getUint32(zC + 0, !0),
        to: (CC, zC) => CC.getFloat32(zC + 4, !0),
        ms: (CC, zC) => CC.getUint16(zC + 8, !0),
        flags: (CC, zC) => CC.getUint16(zC + 10, !0)
      },
      mz = {
        BYTES: 4,
        handle: (CC, zC) => CC.getUint32(zC + 0, !0)
      },
      Hz = {
        BYTES: 8,
        reason: (CC, zC) => CC.getUint8(zC + 0),
        code: (CC, zC) => CC.getUint8(zC + 1),
        version: (CC, zC) => CC.getUint32(zC + 4, !0)
      },
      Ez = {
        BYTES: 4,
        key: (CC, zC) => CC.getUint8(zC + 0),
        tag: (CC, zC) => CC.getUint8(zC + 1)
      },
      lz = {
        BYTES: 16,
        save: (CC, zC) => CC.getUint32(zC + 0, !0),
        index: (CC, zC) => CC.getUint32(zC + 4, !0),
        ptr: (CC, zC) => CC.getUint32(zC + 8, !0),
        len: (CC, zC) => CC.getUint32(zC + 12, !0)
      },
      Xz = {
        BYTES: 16,
        save: (CC, zC) => CC.getUint32(zC + 0, !0),
        kind: (CC, zC) => CC.getUint8(zC + 4),
        parts: (CC, zC) => CC.getUint32(zC + 8, !0),
        bytes: (CC, zC) => CC.getUint32(zC + 12, !0)
      },
      cz = {
        BYTES: 4,
        totalTicks: (CC, zC) => CC.getUint32(zC + 0, !0)
      },
      uz = {
        BYTES: 24,
        what: (CC, zC) => CC.getUint8(zC + 0),
        int: (CC, zC) => CC.getInt32(zC + 4, !0),
        x: (CC, zC) => CC.getFloat64(zC + 8, !0),
        y: (CC, zC) => CC.getFloat64(zC + 16, !0)
      },
      rz = {
        BYTES: 8,
        what: (CC, zC) => CC.getUint8(zC + 0),
        kind: (CC, zC) => CC.getUint8(zC + 1),
        save: (CC, zC) => CC.getUint32(zC + 4, !0)
      },
      sz = {
        BYTES: 4,
        cq: (CC, zC) => CC.getUint16(zC + 0, !0)
      },
      Tz = {
        BYTES: 360,
        eye: (CC, zC, ZC) => CC.getFloat64(zC + 0 + 8 * ZC, !0),
        localPos: (CC, zC, ZC) => CC.getFloat64(zC + 24 + 8 * ZC, !0),
        HCC: (CC, zC, ZC) => CC.getFloat64(zC + 48 + 8 * ZC, !0),
        viewProj: (CC, zC, ZC) => CC.getFloat32(zC + 72 + 4 * ZC, !0),
        origin: (CC, zC, ZC) => CC.getInt32(zC + 136 + 4 * ZC, !0),
        heading: (CC, zC) => CC.getFloat32(zC + 148, !0),
        pitch: (CC, zC) => CC.getFloat32(zC + 152, !0),
        tanHalfFovX: (CC, zC) => CC.getFloat32(zC + 156, !0),
        tanHalfFovY: (CC, zC) => CC.getFloat32(zC + 160, !0),
        viewportCss: (CC, zC, ZC) => CC.getFloat32(zC + 164 + 4 * ZC, !0),
        localVel: (CC, zC, ZC) => CC.getFloat32(zC + 172 + 4 * ZC, !0),
        actionDir: (CC, zC, ZC) => CC.getFloat32(zC + 184 + 4 * ZC, !0),
        localId: (CC, zC) => CC.getInt32(zC + 196, !0),
        playerFlags: (CC, zC) => CC.getUint32(zC + 200, !0),
        targetBlock: (CC, zC, ZC) => CC.getInt32(zC + 204 + 4 * ZC, !0),
        targetAdjacent: (CC, zC, ZC) => CC.getInt32(zC + 216 + 4 * ZC, !0),
        targetBlockId: (CC, zC) => CC.getUint32(zC + 228, !0),
        targetNormal: (CC, zC, ZC) => CC.getInt8(zC + 232 + 1 * ZC),
        targetFlags: (CC, zC) => CC.getUint8(zC + 235),
        pickedEntity: (CC, zC) => CC.getInt32(zC + 236, !0),
        breakingPos: (CC, zC, ZC) => CC.getInt32(zC + 240 + 4 * ZC, !0),
        breakingProgress: (CC, zC) => CC.getFloat32(zC + 252, !0),
        Hx: (CC, zC) => CC.getUint16(zC + 256, !0),
        selectedSlot: (CC, zC) => CC.getUint8(zC + 258),
        heldFlags: (CC, zC) => CC.getUint8(zC + 259),
        heldAttrVersion: (CC, zC) => CC.getUint32(zC + 260, !0),
        inventoryVersion: (CC, zC) => CC.getUint32(zC + 264, !0),
        effectsVersion: (CC, zC) => CC.getUint32(zC + 268, !0),
        entitiesVersion: (CC, zC) => CC.getUint32(zC + 272, !0),
        entRenderPtr: (CC, zC) => CC.getUint32(zC + 276, !0),
        entCapacity: (CC, zC) => CC.getUint32(zC + 280, !0),
        frameMs: (CC, zC) => CC.getFloat32(zC + 284, !0),
        fps: (CC, zC) => CC.getFloat32(zC + 288, !0),
        entVisPtr: (CC, zC) => CC.getUint32(zC + 292, !0),
        momentumFrac: (CC, zC) => CC.getFloat32(zC + 296, !0),
        chunkSlotsPtr: (CC, zC) => CC.getUint32(zC + 300, !0),
        chunkSlotsLen: (CC, zC) => CC.getUint32(zC + 304, !0),
        walkThroughPtr: (CC, zC) => CC.getUint32(zC + 308, !0),
        walkThroughLen: (CC, zC) => CC.getUint32(zC + 312, !0),
        audioViewPtr: (CC, zC) => CC.getUint32(zC + 316, !0),
        inventoryViewPtr: (CC, zC) => CC.getUint32(zC + 320, !0),
        eventOverflowGen: (CC, zC) => CC.getUint32(zC + 324, !0),
        eventOverflowMask: (CC, zC) => CC.getUint32(zC + 328, !0),
        promptEntity: (CC, zC) => CC.getInt32(zC + 332, !0),
        replayViewPtr: (CC, zC) => CC.getUint32(zC + 336, !0),
        slotIcon: (CC, zC) => CC.getUint32(zC + 340, !0),
        localDeaths: (CC, zC) => CC.getUint32(zC + 344, !0),
        cameraFar: (CC, zC) => CC.getFloat32(zC + 348, !0),
        gliderBoostFuel: (CC, zC) => CC.getUint32(zC + 352, !0),
        interactLabel: (CC, zC) => CC.getUint16(zC + 356, !0),
        interactIcon: (CC, zC) => CC.getUint16(zC + 358, !0)
      },
      az = {
        BYTES: 16,
        voxelsPtr: (CC, zC) => CC.getUint32(zC + 0, !0),
        version: (CC, zC) => CC.getUint32(zC + 4, !0),
        generation: (CC, zC) => CC.getUint32(zC + 8, !0),
        vq: (CC, zC) => CC.getUint32(zC + 12, !0)
      },
      tz = {
        BYTES: 56,
        listener: (CC, zC, ZC) => CC.getFloat64(zC + 0 + 8 * ZC, !0),
        forward: (CC, zC, ZC) => CC.getFloat32(zC + 24 + 4 * ZC, !0),
        up: (CC, zC, ZC) => CC.getFloat32(zC + 36 + 4 * ZC, !0),
        dropped: (CC, zC) => CC.getUint32(zC + 48, !0),
        unfollowed: (CC, zC) => CC.getUint32(zC + 52, !0)
      },
      Dz = {
        BYTES: 8,
        item: (CC, zC) => CC.getUint16(zC + 0, !0),
        amount: (CC, zC) => CC.getUint16(zC + 2, !0),
        attrVersion: (CC, zC) => CC.getUint32(zC + 4, !0)
      },
      jz = {
        BYTES: 76,
        version: (CC, zC) => CC.getUint32(zC + 0, !0),
        state: (CC, zC) => CC.getUint8(zC + 4),
        cameraMode: (CC, zC) => CC.getUint8(zC + 5),
        ZN: (CC, zC) => CC.getUint32(zC + 8, !0),
        totalTicks: (CC, zC) => CC.getUint32(zC + 12, !0),
        speed: (CC, zC) => CC.getFloat32(zC + 16, !0),
        markIn: (CC, zC) => CC.getUint32(zC + 20, !0),
        markOut: (CC, zC) => CC.getUint32(zC + 24, !0),
        editVersion: (CC, zC) => CC.getUint32(zC + 28, !0),
        drops: (CC, zC, ZC) => CC.getUint32(zC + 32 + 4 * ZC, !0)
      },
      yz = {
        BYTES: 6,
        flags: (CC, zC) => CC.getUint8(zC + 0),
        harvestType: (CC, zC) => CC.getUint8(zC + 1),
        harvestLevel: (CC, zC) => CC.getUint8(zC + 2),
        attachedTop: (CC, zC) => CC.getUint16(zC + 4, !0)
      },
      Lz = {
        BYTES: 3,
        flags: (CC, zC) => CC.getUint8(zC + 0),
        harvests: (CC, zC) => CC.getUint8(zC + 1),
        level: (CC, zC) => CC.getUint8(zC + 2)
      },
      Uz = {
        BYTES: 12,
        item: (CC, zC) => CC.getUint32(zC + 0, !0),
        amount: (CC, zC) => CC.getFloat64(zC + 4, !0)
      },
      Bz = {
        BYTES: 16,
        recipes: (CC, zC) => CC.getUint32(zC + 0, !0),
        ingredients: (CC, zC) => CC.getUint32(zC + 4, !0),
        craftAllTimes: (CC, zC) => CC.getUint32(zC + 8, !0),
        flags: (CC, zC) => CC.getUint32(zC + 12, !0)
      },
      Oz = {
        BYTES: 10,
        item: (CC, zC) => CC.getUint16(zC + 0, !0),
        recipe: (CC, zC) => CC.getUint16(zC + 2, !0),
        produces: (CC, zC) => CC.getUint16(zC + 4, !0),
        requires: (CC, zC) => CC.getUint16(zC + 6, !0),
        flags: (CC, zC) => CC.getUint8(zC + 8)
      },
      kz = {
        BYTES: 4,
        amount: (CC, zC) => CC.getUint16(zC + 0, !0),
        items: (CC, zC) => CC.getUint16(zC + 2, !0)
      },
      Vz = {
        BYTES: 8,
        amount: (CC, zC) => CC.getUint32(zC + 0, !0),
        item: (CC, zC) => CC.getUint16(zC + 4, !0),
        from: (CC, zC) => CC.getUint16(zC + 6, !0)
      },
      CZ = {
        BYTES: 16,
        serverId: (CC, zC) => CC.getInt32(zC + 0, !0),
        len: (CC, zC) => CC.getUint32(zC + 4, !0),
        kind: (CC, zC) => CC.getUint16(zC + 8, !0),
        variation: (CC, zC) => CC.getUint16(zC + 10, !0),
        pose: (CC, zC) => CC.getUint8(zC + 12),
        meta: (CC, zC) => CC.getUint8(zC + 13),
        mesh: (CC, zC) => CC.getUint8(zC + 14),
        flags: (CC, zC) => CC.getUint8(zC + 15)
      },
      zZ = {
        BYTES: 56,
        terrainOpaque: (CC, zC) => CC.getUint32(zC + 0, !0),
        terrainTransparent: (CC, zC) => CC.getUint32(zC + 4, !0),
        terrainPack: (CC, zC) => CC.getUint32(zC + 8, !0),
        earthSky: (CC, zC) => CC.getUint32(zC + 12, !0),
        skyMeshes: (CC, zC) => CC.getUint32(zC + 16, !0),
        regular: (CC, zC) => CC.getUint32(zC + 20, !0),
        thin: (CC, zC) => CC.getUint32(zC + 24, !0),
        line: (CC, zC) => CC.getUint32(zC + 28, !0),
        text: (CC, zC) => CC.getUint32(zC + 32, !0),
        particles: (CC, zC) => CC.getUint32(zC + 36, !0),
        terrainParts: (CC, zC) => CC.getUint32(zC + 40, !0),
        terrainCompiling: (CC, zC) => CC.getUint32(zC + 44, !0),
        ringCopiesMax: (CC, zC) => CC.getUint32(zC + 48, !0),
        ringBusyWrites: (CC, zC) => CC.getUint32(zC + 52, !0)
      },
      ZZ = {
        BYTES: 16,
        fov: (CC, zC) => CC.getFloat32(zC + 0, !0),
        baseFov: (CC, zC) => CC.getFloat32(zC + 4, !0),
        aspect: (CC, zC) => CC.getFloat32(zC + 8, !0),
        bodyHeading: (CC, zC) => CC.getFloat32(zC + 12, !0)
      },
      QZ = {
        BYTES: 32,
        eye: (CC, zC, ZC) => CC.getFloat64(zC + 0 + 8 * ZC, !0),
        heading: (CC, zC) => CC.getFloat32(zC + 24, !0),
        pitch: (CC, zC) => CC.getFloat32(zC + 28, !0)
      },
      wZ = {
        BYTES: 40,
        feet: (CC, zC, ZC) => CC.getFloat64(zC + 0 + 8 * ZC, !0),
        eyeHeight: (CC, zC) => CC.getFloat32(zC + 24, !0),
        heading: (CC, zC) => CC.getFloat32(zC + 28, !0),
        headingIsDrawn: (CC, zC) => CC.getUint32(zC + 32, !0)
      },
      bZ = 32,
      nZ = 63,
      fZ = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function oZ(CC, zC, ZC, QC, wC) {
      var bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC;
      switch (CC) {
        case 32:
          return 4 === QC && (null === (bC = wC.tickEnd) || void 0 === bC || bC.call(wC, Pz.ZN(zC, ZC)), !0);
        case 33:
          return 12 === QC && (null === (nC = wC.entitySpawned) || void 0 === nC || nC.call(wC, Gz.serverId(zC, ZC), Gz.index(zC, ZC), Gz.kind(zC, ZC)), !0);
        case 34:
          return 12 === QC && (null === (fC = wC.entityDespawned) || void 0 === fC || fC.call(wC, Gz.serverId(zC, ZC), Gz.index(zC, ZC), Gz.kind(zC, ZC)), !0);
        case 39:
          return !(QC < 20) && (null === (oC = wC.changeBlockFail) || void 0 === oC || oC.call(wC, Rz.pos(zC, ZC, 0), Rz.pos(zC, ZC, 1), Rz.pos(zC, ZC, 2), Rz.actual(zC, ZC), Rz.dataLen(zC, ZC), ZC + 20, QC - 20), !0);
        case 46:
          return 0 === QC && (null === (qC = wC.changeBlockFailEnd) || void 0 === qC || qC.call(wC), !0);
        case 48:
          return 20 === QC && (null === (FC = wC.inventoryEvent) || void 0 === FC || FC.call(wC, Az.what(zC, ZC), Az.value(zC, ZC), Az.pos(zC, ZC, 0), Az.pos(zC, ZC, 1), Az.pos(zC, ZC, 2), Az.block(zC, ZC)), !0);
        case 49:
          return 4 === QC && (null === (WC = wC.heldItemChanged) || void 0 === WC || WC.call(wC, xz.item(zC, ZC), xz.slot(zC, ZC)), !0);
        case 50:
          return 16 === QC && (null === (NC = wC.shotDamage) || void 0 === NC || NC.call(wC, Jz.target(zC, ZC), Jz.damage(zC, ZC), Jz.distance(zC, ZC), Jz.crit(zC, ZC)), !0);
        case 51:
          return !(QC < 4) && (null === (MC = wC.enchantOffer) || void 0 === MC || MC.call(wC, Iz.slot(zC, ZC), ZC + 4, QC - 4), !0);
        case 52:
          return !(QC < 20) && (null === (gC = wC.uiEvent) || void 0 === gC || gC.call(wC, iz.what(zC, ZC), iz.value(zC, ZC), iz.pos(zC, ZC, 0), iz.pos(zC, ZC, 1), iz.pos(zC, ZC, 2), iz.block(zC, ZC), ZC + 20, QC - 20), !0);
        case 53:
          return 12 === QC && (null === (SC = wC.entityInfoChanged) || void 0 === SC || SC.call(wC, vz.serverId(zC, ZC), vz.index(zC, ZC), vz.what(zC, ZC)), !0);
        case 55:
          return 24 === QC && (null === (pC = wC.chunkSlot) || void 0 === pC || pC.call(wC, ez.cx(zC, ZC), ez.cy(zC, ZC), ez.cz(zC, ZC), ez.slot(zC, ZC), ez.generation(zC, ZC), ez.flags(zC, ZC)), !0);
        case 40:
          return 44 === QC && (null === (PC = wC.playSound) || void 0 === PC || PC.call(wC, hz.pos(zC, ZC, 0), hz.pos(zC, ZC, 1), hz.pos(zC, ZC, 2), hz.sound(zC, ZC), hz.flags(zC, ZC), hz.handle(zC, ZC), hz.volume(zC, ZC), hz.rate(zC, ZC), hz.refDist(zC, ZC)), !0);
        case 41:
          return 28 === QC && (null === (GC = wC.soundPos) || void 0 === GC || GC.call(wC, Kz.pos(zC, ZC, 0), Kz.pos(zC, ZC, 1), Kz.pos(zC, ZC, 2), Kz.handle(zC, ZC)), !0);
        case 42:
          return 16 === QC && (null === (RC = wC.soundSet) || void 0 === RC || RC.call(wC, Yz.handle(zC, ZC), Yz.volume(zC, ZC), Yz.rate(zC, ZC), Yz.refDist(zC, ZC)), !0);
        case 43:
          return 12 === QC && (null === (AC = wC.soundFade) || void 0 === AC || AC.call(wC, dz.handle(zC, ZC), dz.to(zC, ZC), dz.ms(zC, ZC), dz.flags(zC, ZC)), !0);
        case 44:
          return 4 === QC && (null === (xC = wC.soundStop) || void 0 === xC || xC.call(wC, mz.handle(zC, ZC)), !0);
        case 45:
          return 0 === QC && (null === (JC = wC.soundReset) || void 0 === JC || JC.call(wC), !0);
        case 56:
          return 8 === QC && (null === (IC = wC.replayFailed) || void 0 === IC || IC.call(wC, Hz.reason(zC, ZC), Hz.code(zC, ZC), Hz.version(zC, ZC)), !0);
        case 57:
          return !(QC < 4) && (null === (iC = wC.replayOption) || void 0 === iC || iC.call(wC, Ez.key(zC, ZC), Ez.tag(zC, ZC), ZC + 4, QC - 4), !0);
        case 58:
          return 16 === QC && (null === (vC = wC.replayFilePart) || void 0 === vC || vC.call(wC, lz.save(zC, ZC), lz.index(zC, ZC), lz.ptr(zC, ZC), lz.len(zC, ZC)), !0);
        case 59:
          return 16 === QC && (null === (eC = wC.replayFileReady) || void 0 === eC || eC.call(wC, Xz.save(zC, ZC), Xz.kind(zC, ZC), Xz.parts(zC, ZC), Xz.bytes(zC, ZC)), !0);
        case 60:
          return !(QC < 4) && (null === (hC = wC.replayOpened) || void 0 === hC || hC.call(wC, cz.totalTicks(zC, ZC), ZC + 4, QC - 4), !0);
        case 61:
          return !(QC < 24) && (null === (KC = wC.replayUiEvent) || void 0 === KC || KC.call(wC, uz.what(zC, ZC), uz.int(zC, ZC), uz.x(zC, ZC), uz.y(zC, ZC), ZC + 24, QC - 24), !0);
        case 62:
          return 8 === QC && (null === (YC = wC.recorderEvent) || void 0 === YC || YC.call(wC, rz.what(zC, ZC), rz.kind(zC, ZC), rz.save(zC, ZC)), !0);
        default:
          return !1
      }
    }
    const qZ = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let FZ = new Uint8Array(0);

    function WZ(CC) {
      return FZ.buffer !== CC.buffer && (FZ = new Uint8Array(CC.buffer)), FZ
    }

    function NZ(CC, zC, ZC) {
      const QC = CC.RM(66, zC, 4);
      if (QC < 0) return !1;
      return CC.view.setUint8(QC + 0, ZC), !0
    }

    function MZ(CC, zC, ZC) {
      const QC = CC.RM(67, zC, 4);
      if (QC < 0) return !1;
      return CC.view.setUint32(QC + 0, ZC, !0), !0
    }

    function gZ(CC, zC, ZC) {
      const QC = CC.RM(68, zC, 4);
      if (QC < 0) return !1;
      return CC.view.setUint8(QC + 0, ZC), !0
    }

    function SZ(CC, zC, ZC, QC) {
      const wC = CC.RM(69, zC, 4 + QC.length);
      if (wC < 0) return !1;
      const bC = CC.view;
      return bC.setUint8(wC + 0, ZC), WZ(bC).set(QC, bC.byteOffset + wC + 4), !0
    }

    function pZ(CC, zC, ZC, QC, wC) {
      const bC = CC.RM(128, zC, 4 + wC.length);
      if (bC < 0) return !1;
      const nC = CC.view;
      return nC.setUint8(bC + 0, ZC), nC.setUint16(bC + 2, QC, !0), WZ(nC).set(wC, nC.byteOffset + bC + 4), !0
    }

    function PZ(CC, zC, ZC) {
      const QC = CC.RM(131, zC, 4);
      if (QC < 0) return !1;
      return CC.view.setInt32(QC + 0, ZC, !0), !0
    }

    function GZ(CC, zC, ZC) {
      const QC = CC.RM(132, zC, 4);
      if (QC < 0) return !1;
      return CC.view.setUint32(QC + 0, ZC, !0), !0
    }

    function RZ(CC, zC, ZC) {
      const QC = CC.RM(133, zC, 4);
      if (QC < 0) return !1;
      return CC.view.setUint32(QC + 0, ZC, !0), !0
    }

    function AZ(CC, zC, ZC) {
      const QC = CC.RM(144, zC, 4);
      if (QC < 0) return !1;
      return CC.view.setUint8(QC + 0, ZC), !0
    }

    function xZ(CC, zC, ZC, QC, wC) {
      const bC = CC.RM(145, zC, 12);
      if (bC < 0) return !1;
      const nC = CC.view;
      return nC.setInt32(bC + 0, ZC, !0), nC.setInt32(bC + 4, QC, !0), nC.setInt32(bC + 8, wC, !0), !0
    }

    function JZ(CC, zC, ZC, QC) {
      const wC = CC.RM(256, zC, 4 + QC.length);
      if (wC < 0) return !1;
      const bC = CC.view;
      return bC.setUint16(wC + 0, ZC, !0), WZ(bC).set(QC, bC.byteOffset + wC + 4), !0
    }

    function IZ(CC, zC, ZC) {
      const QC = CC.RM(258, zC, 4);
      if (QC < 0) return !1;
      return CC.view.setUint8(QC + 0, ZC), !0
    }

    function iZ(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
      const qC = CC.RM(320, zC, 48 + oC.length);
      if (qC < 0) return !1;
      const FC = CC.view;
      FC.setUint32(qC + 0, ZC, !0), FC.setUint16(qC + 4, QC, !0), FC.setUint16(qC + 6, wC, !0), FC.setUint32(qC + 8, bC, !0);
      for (let WC = 0; WC < 3; WC++) FC.setFloat64(qC + 12 + 8 * WC, nC[WC], !0);
      for (let WC = 0; WC < 3; WC++) FC.setFloat32(qC + 36 + 4 * WC, fC[WC], !0);
      return WZ(FC).set(oC, FC.byteOffset + qC + 48), !0
    }

    function vZ(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
      const qC = CC.RM(321, zC, 48 + oC.length);
      if (qC < 0) return !1;
      const FC = CC.view;
      FC.setUint32(qC + 0, ZC, !0), FC.setInt32(qC + 4, QC, !0), FC.setUint16(qC + 8, wC, !0), FC.setUint16(qC + 10, bC, !0);
      for (let WC = 0; WC < 3; WC++) FC.setFloat64(qC + 12 + 8 * WC, nC[WC], !0);
      for (let WC = 0; WC < 3; WC++) FC.setFloat32(qC + 36 + 4 * WC, fC[WC], !0);
      return WZ(FC).set(oC, FC.byteOffset + qC + 48), !0
    }

    function eZ(CC, zC, ZC, QC, wC, bC, nC) {
      const fC = CC.RM(322, zC, 44 + nC.length);
      if (fC < 0) return !1;
      const oC = CC.view;
      oC.setUint32(fC + 0, ZC, !0), oC.setUint32(fC + 4, QC, !0);
      for (let qC = 0; qC < 3; qC++) oC.setFloat64(fC + 8 + 8 * qC, wC[qC], !0);
      for (let qC = 0; qC < 3; qC++) oC.setFloat32(fC + 32 + 4 * qC, bC[qC], !0);
      return WZ(oC).set(nC, oC.byteOffset + fC + 44), !0
    }

    function hZ(CC, zC, ZC) {
      const QC = CC.RM(323, zC, 4);
      if (QC < 0) return !1;
      return CC.view.setUint32(QC + 0, ZC, !0), !0
    }

    function KZ(CC, zC, ZC, QC, wC, bC) {
      const nC = CC.RM(324, zC, 32 + bC.length);
      if (nC < 0) return !1;
      const fC = CC.view;
      fC.setUint32(nC + 0, ZC, !0), fC.setUint32(nC + 4, QC, !0);
      for (let oC = 0; oC < 3; oC++) fC.setFloat64(nC + 8 + 8 * oC, wC[oC], !0);
      return WZ(fC).set(bC, fC.byteOffset + nC + 32), !0
    }

    function YZ(CC, zC) {
      return !(CC.RM(325, zC, 0) < 0)
    }

    function dZ(CC, zC, ZC, QC, wC, bC) {
      const nC = CC.RM(384, zC, 16);
      if (nC < 0) return !1;
      const fC = CC.view;
      return fC.setUint32(nC + 0, ZC, !0), fC.setUint32(nC + 4, QC, !0), fC.setFloat32(nC + 8, wC, !0), fC.setFloat32(nC + 12, bC, !0), !0
    }

    function mZ(CC, zC, ZC, QC, wC, bC, nC) {
      const fC = CC.RM(385, zC, 36 + nC.length);
      if (fC < 0) return !1;
      const oC = CC.view;
      oC.setUint32(fC + 0, ZC, !0), oC.setUint32(fC + 4, QC, !0);
      for (let qC = 0; qC < 3; qC++) oC.setFloat64(fC + 8 + 8 * qC, wC[qC], !0);
      return oC.setUint32(fC + 32, bC, !0), WZ(oC).set(nC, oC.byteOffset + fC + 36), !0
    }

    function HZ(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
      const qC = CC.RM(386, zC, 56 + oC.length);
      if (qC < 0) return !1;
      const FC = CC.view;
      FC.setUint32(qC + 0, ZC, !0), FC.setUint8(qC + 4, QC);
      for (let WC = 0; WC < 4; WC++) FC.setFloat32(qC + 8 + 4 * WC, wC[WC], !0);
      for (let WC = 0; WC < 3; WC++) FC.setFloat64(qC + 24 + 8 * WC, bC[WC], !0);
      return FC.setUint32(qC + 48, nC, !0), FC.setUint32(qC + 52, fC, !0), WZ(FC).set(oC, FC.byteOffset + qC + 56), !0
    }

    function EZ(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
      const qC = CC.RM(387, zC, 56);
      if (qC < 0) return !1;
      const FC = CC.view;
      FC.setUint32(qC + 0, ZC, !0), FC.setUint16(qC + 4, QC, !0), FC.setUint8(qC + 6, wC);
      for (let WC = 0; WC < 3; WC++) FC.setFloat64(qC + 8 + 8 * WC, bC[WC], !0);
      for (let WC = 0; WC < 2; WC++) FC.setFloat32(qC + 32 + 4 * WC, nC[WC], !0);
      FC.setFloat32(qC + 40, fC, !0);
      for (let WC = 0; WC < 3; WC++) FC.setFloat32(qC + 44 + 4 * WC, oC[WC], !0);
      return !0
    }

    function lZ(CC, zC, ZC) {
      const QC = CC.RM(388, zC, 4);
      if (QC < 0) return !1;
      return CC.view.setUint32(QC + 0, ZC, !0), !0
    }

    function XZ(CC, zC, ZC, QC) {
      const wC = CC.RM(389, zC, 8);
      if (wC < 0) return !1;
      const bC = CC.view;
      return bC.setInt32(wC + 0, ZC, !0), bC.setFloat32(wC + 4, QC, !0), !0
    }

    function cZ(CC, zC, ZC, QC) {
      const wC = CC.RM(390, zC, 8);
      if (wC < 0) return !1;
      const bC = CC.view;
      return bC.setInt32(wC + 0, ZC, !0), bC.setFloat32(wC + 4, QC, !0), !0
    }

    function uZ(CC, zC, ZC, QC, wC, bC) {
      const nC = CC.RM(391, zC, 12);
      if (nC < 0) return !1;
      const fC = CC.view;
      return fC.setFloat32(nC + 0, ZC, !0), fC.setFloat32(nC + 4, QC, !0), fC.setUint8(nC + 8, wC), fC.setUint8(nC + 9, bC), !0
    }

    function rZ(CC, zC, ZC) {
      const QC = CC.RM(392, zC, 4);
      if (QC < 0) return !1;
      return CC.view.setUint32(QC + 0, ZC, !0), !0
    }

    function sZ(CC, zC, ZC, QC, wC) {
      const bC = CC.RM(393, zC, 12);
      if (bC < 0) return !1;
      const nC = CC.view;
      return nC.setUint32(bC + 0, ZC, !0), nC.setUint16(bC + 4, QC, !0), nC.setFloat32(bC + 8, wC, !0), !0
    }

    function TZ(CC, zC, ZC, QC, wC, bC, nC) {
      const fC = CC.RM(394, zC, 36);
      if (fC < 0) return !1;
      const oC = CC.view;
      oC.setUint32(fC + 0, ZC, !0), oC.setUint16(fC + 4, QC, !0), oC.setUint8(fC + 6, wC);
      for (let qC = 0; qC < 3; qC++) oC.setFloat64(fC + 8 + 8 * qC, bC[qC], !0);
      return oC.setFloat32(fC + 32, nC, !0), !0
    }

    function aZ(CC, zC, ZC) {
      const QC = CC.RM(398, zC, 4);
      if (QC < 0) return !1;
      return CC.view.setUint32(QC + 0, ZC, !0), !0
    }

    function tZ(CC, zC, ZC) {
      const QC = CC.RM(448, zC, 4);
      if (QC < 0) return !1;
      return CC.view.setFloat32(QC + 0, ZC, !0), !0
    }

    function DZ(CC, zC, ZC, QC) {
      const wC = CC.RM(450, zC, 12);
      if (wC < 0) return !1;
      const bC = CC.view;
      for (let nC = 0; nC < 2; nC++) bC.setFloat32(wC + 0 + 4 * nC, ZC[nC], !0);
      return bC.setUint8(wC + 8, QC), !0
    }

    function jZ(CC, zC, ZC, QC) {
      const wC = CC.RM(452, zC, 8);
      if (wC < 0) return !1;
      const bC = CC.view;
      return bC.setFloat32(wC + 0, ZC, !0), bC.setUint8(wC + 4, QC), !0
    }

    function yZ(CC, zC, ZC, QC, wC) {
      const bC = CC.RM(454, zC, 4);
      if (bC < 0) return !1;
      const nC = CC.view;
      return nC.setUint8(bC + 0, ZC), nC.setUint8(bC + 1, QC), nC.setUint8(bC + 2, wC), !0
    }

    function LZ(CC, zC, ZC, QC) {
      const wC = CC.RM(455, zC, 40);
      if (wC < 0) return !1;
      const bC = CC.view;
      for (let nC = 0; nC < 9; nC++) bC.setInt32(wC + 0 + 4 * nC, ZC[nC], !0);
      return bC.setUint32(wC + 36, QC, !0), !0
    }

    function UZ(CC, zC, ZC, QC) {
      const wC = CC.RM(456, zC, 8);
      if (wC < 0) return !1;
      const bC = CC.view;
      return bC.setFloat32(wC + 0, ZC, !0), bC.setUint8(wC + 4, QC), !0
    }

    function BZ(CC, zC, ZC, QC, wC) {
      const bC = CC.RM(457, zC, 16);
      if (bC < 0) return !1;
      const nC = CC.view;
      for (let fC = 0; fC < 3; fC++) nC.setInt32(bC + 0 + 4 * fC, ZC[fC], !0);
      for (let fC = 0; fC < 3; fC++) nC.setInt8(bC + 12 + 1 * fC, QC[fC]);
      return nC.setUint8(bC + 15, wC), !0
    }

    function OZ(CC, zC, ZC, QC) {
      const wC = CC.RM(530, zC, 4 + QC.length);
      if (wC < 0) return !1;
      const bC = CC.view;
      return bC.setUint8(wC + 0, ZC), WZ(bC).set(QC, bC.byteOffset + wC + 4), !0
    }

    function kZ(CC, zC, ZC, QC, wC, bC) {
      const nC = CC.RM(531, zC, 12 + bC.length);
      if (nC < 0) return !1;
      const fC = CC.view;
      return fC.setFloat32(nC + 0, ZC, !0), fC.setFloat32(nC + 4, QC, !0), fC.setUint32(nC + 8, wC, !0), WZ(fC).set(bC, fC.byteOffset + nC + 12), !0
    }

    function VZ(CC, zC, ZC, QC, wC, bC) {
      const nC = CC.RM(532, zC, 12 + bC.length);
      if (nC < 0) return !1;
      const fC = CC.view;
      return fC.setInt32(nC + 0, ZC, !0), fC.setInt32(nC + 4, QC, !0), fC.setUint32(nC + 8, wC, !0), WZ(fC).set(bC, fC.byteOffset + nC + 12), !0
    }

    function CQ(CC, zC, ZC, QC, wC) {
      const bC = CC.RM(533, zC, 8 + wC.length);
      if (bC < 0) return !1;
      const nC = CC.view;
      return nC.setInt32(bC + 0, ZC, !0), nC.setInt32(bC + 4, QC, !0), WZ(nC).set(wC, nC.byteOffset + bC + 8), !0
    }

    function zQ(CC, zC) {
      return !(CC.RM(576, zC, 0) < 0)
    }

    function ZQ(CC, zC, ZC, QC, wC, bC) {
      const nC = CC.RM(577, zC, 36 + bC.length);
      if (nC < 0) return !1;
      const fC = CC.view;
      fC.setUint8(nC + 0, ZC);
      for (let oC = 0; oC < 16; oC++) fC.setUint8(nC + 4 + 1 * oC, QC[oC]);
      for (let oC = 0; oC < 16; oC++) fC.setUint8(nC + 20 + 1 * oC, wC[oC]);
      return WZ(fC).set(bC, fC.byteOffset + nC + 36), !0
    }

    function QQ(CC, zC, ZC, QC) {
      const wC = CC.RM(578, zC, 4 + QC.length);
      if (wC < 0) return !1;
      const bC = CC.view;
      return bC.setUint8(wC + 0, ZC), WZ(bC).set(QC, bC.byteOffset + wC + 4), !0
    }

    function wQ(CC, zC, ZC, QC, wC, bC, nC, fC) {
      const oC = CC.RM(579, zC, 36);
      if (oC < 0) return !1;
      const qC = CC.view;
      return qC.setFloat64(oC + 0, ZC, !0), qC.setFloat64(oC + 8, QC, !0), qC.setFloat64(oC + 16, wC, !0), qC.setFloat64(oC + 24, bC, !0), qC.setUint16(oC + 32, nC, !0), qC.setUint8(oC + 34, fC), !0
    }
    class bQ {
      constructor(CC, zC) {
        this.core = CC, this.afterCall = zC
      }
      canModify(CC, zC, ZC) {
        const QC = this.core.pbC(CC, zC, ZC);
        return this.afterCall(), QC
      }
      terrainBlocked(CC, zC, ZC, QC, wC) {
        const bC = this.core.fnC(CC, zC, ZC, QC, wC);
        return this.afterCall(), bC
      }
      TY(CC, zC, ZC, QC) {
        const wC = this.core.bM(CC, zC, ZC, QC);
        return this.afterCall(), wC
      }
      blockData(CC, zC, ZC) {
        const QC = this.core.gbC(CC, zC, ZC);
        return this.afterCall(), QC
      }
      cameraSweep(CC, zC, ZC, QC, wC, bC, nC) {
        const fC = this.core.MwC(CC, zC, ZC, QC, wC, bC, nC);
        return this.afterCall(), fC
      }
      hasServerTarget(CC) {
        const zC = this.core.KbC(CC);
        return this.afterCall(), zC
      }
      entityInteractable(CC) {
        const zC = this.core.IbC(CC);
        return this.afterCall(), zC
      }
      entityCrouching(CC) {
        const zC = this.core.JbC(CC);
        return this.afterCall(), zC
      }
      predictServerPosition(CC, zC, ZC, QC) {
        const wC = this.core.sbC(CC, zC, ZC, QC);
        return this.afterCall(), wC
      }
      setOtherEntitySetting(CC, zC, ZC) {
        const QC = this.core.GwC(CC, zC, ZC);
        return this.afterCall(), QC
      }
      entityInfoBatch(CC) {
        const zC = this.core.xwC(CC);
        return this.afterCall(), zC
      }
      entityName(CC) {
        const zC = this.core.ibC(CC);
        return this.afterCall(), zC
      }
      hasEffect(CC, zC) {
        const ZC = this.core.hbC(CC, zC);
        return this.afterCall(), ZC
      }
      scratchPtr() {
        const CC = this.core.FwC();
        return this.afterCall(), CC
      }
      invSwap(CC, zC) {
        const ZC = this.core.lbC(CC, zC);
        return this.afterCall(), ZC
      }
      invMove(CC, zC, ZC) {
        const QC = this.core.mbC(CC, zC, ZC);
        return this.afterCall(), QC
      }
      invQuickMove(CC, zC, ZC, QC) {
        const wC = this.core.HbC(CC, zC, ZC, QC);
        return this.afterCall(), wC
      }
      invRemove(CC, zC, ZC) {
        const QC = this.core.EbC(CC, zC, ZC);
        return this.afterCall(), QC
      }
      invEnchant(CC, zC, ZC, QC, wC) {
        const bC = this.core.dbC(CC, zC, ZC, QC, wC);
        return this.afterCall(), bC
      }
      craft(CC, zC, ZC) {
        const QC = this.core.craft(CC, zC, ZC);
        return this.afterCall(), QC
      }
      salvage(CC, zC, ZC) {
        const QC = this.core.salvage(CC, zC, ZC);
        return this.afterCall(), QC
      }
      selectSlot(CC) {
        const zC = this.core.DbC(CC);
        return this.afterCall(), zC
      }
      closeChest() {
        const CC = this.core.PbC();
        return this.afterCall(), CC
      }
      itemAttributesBatch(CC) {
        const zC = this.core.AwC(CC);
        return this.afterCall(), zC
      }
      itemNames() {
        const CC = this.core.bK();
        return this.afterCall(), CC
      }
      blockProps() {
        const CC = this.core.SbC();
        return this.afterCall(), CC
      }
      itemProps() {
        const CC = this.core.XbC();
        return this.afterCall(), CC
      }
      salvageRecipe(CC) {
        const zC = this.core.IwC(CC);
        return this.afterCall(), zC
      }
      craftingView(CC, zC, ZC) {
        const QC = this.core.RwC(CC, zC, ZC);
        return this.afterCall(), QC
      }
      directorView() {
        const CC = this.core.NwC();
        return this.afterCall(), CC
      }
      directorDefaultPose() {
        const CC = this.core.gwC();
        return this.afterCall(), CC
      }
      directorEntity(CC) {
        const zC = this.core.SwC(CC);
        return this.afterCall(), zC
      }
      directorPose(CC, zC, ZC, QC, wC, bC) {
        const nC = this.core.pwC(CC, zC, ZC, QC, wC, bC);
        return this.afterCall(), nC
      }
      passTimings(CC) {
        const zC = this.core.rbC(CC);
        return this.afterCall(), zC
      }
      drawCensus() {
        const CC = this.core.xbC();
        return this.afterCall(), CC
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);